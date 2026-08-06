#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Exportador do catálogo estruturado — parte do CONTRATO DE CONTEÚDO (ver README.md).

Lê as listas do manual (sistema-base/listas/ + módulos da coleção `armas` +
modulos/protecoes/) e emite `contrato/catalogo.json` com armas, munições,
proteções, habilidades (com progressão por nível), traços e o glossário de
propriedades de armas.

Princípio: EXTRAÇÃO LITERAL. Os textos vêm do manual como estão (limpos de
bastidor pela limpeza oficial). Nada é resumido nem inventado; lacunas do
manual saem como campos vazios + aviso no console.

Consumidores:
    - ficha/src/lib/catalogo.ts (adaptador — autopreenchimento da ficha)
    - plataforma (repo plataforma-rpg-marca-de-sangue: seed do banco)

Uso: python contrato/exportar_catalogo.py   (detecta a raiz do repo sozinho)
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from limpeza import limpa_arquivo  # noqa: E402

RAIZ = Path(__file__).resolve().parent.parent
SAIDA = Path(__file__).resolve().parent / "catalogo.json"

# Fontes (caminhos relativos à raiz do repo). A ordem define a ordem no JSON.
FONTES_ARMAS_MELEE = ["modulos/armas-brancas/README.md", "modulos/armas-exoticas/README.md"]
FONTES_ARMAS_DIST = ["modulos/arcos-e-bestas/README.md", "modulos/armas-de-fogo/README.md"]
FONTE_PROTECOES = "modulos/protecoes/README.md"
FONTE_EQUIPAMENTOS = "sistema-base/listas/equipamentos-base.md"
FONTE_ACOES = "sistema-base/listas/acoes-em-combate.md"
FONTE_TRACOS = "sistema-base/listas/tracos-base.md"
FONTES_HABILIDADES = [
    ("sistema-base/listas/habilidades-base-fisicas.md", False),
    ("sistema-base/listas/habilidades-base-ageis.md", False),
    ("sistema-base/listas/habilidades-base-mentais.md", False),
    ("sistema-base/listas/habilidades-base-sociais.md", False),
    ("sistema-base/listas/habilidades-experimentais-sociais.md", True),  # experimental
]
FONTE_INIMIGOS = "playtest/cenarios/inimigos-do-kit.md"

SIGLAS = ["CORT", "CONT", "PERF", "AGAR", "ARRE", "DEFL", "PROJ", "ACUI", "VERS", "DESA"]

AVISOS: list[str] = []


def aviso(msg: str) -> None:
    AVISOS.append(msg)
    print("AVISO:", msg, file=sys.stderr)


def le(caminho: str) -> str:
    """Lê um arquivo do repo já com a limpeza oficial aplicada."""
    return limpa_arquivo((RAIZ / caminho).read_text(encoding="utf-8-sig"))


# ---------------------------------------------------------------------------
# Helpers de markdown
# ---------------------------------------------------------------------------

def strip_md(s: str) -> str:
    """Tira formatação markdown de uma célula/linha, preservando o texto."""
    s = s.replace("<br>", " ").replace("<br/>", " ").replace("<br />", " ")
    s = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", s)  # [texto](link) -> texto
    s = s.replace("**", "").replace("*", "").replace("`", "")
    return re.sub(r"\s+", " ", s).strip()


def tira_pontos_siglas(s: str) -> str:
    """'1d8 CORT. · 1d6 PERF.' -> '1d8 CORT · 1d6 PERF' (formato da ficha)."""
    return re.sub(r"\b(" + "|".join(SIGLAS) + r")\.", r"\1", s)


def numero(s: str) -> str:
    """Extrai o primeiro número de uma célula ('4 exp.' -> '4'; '-2 PA' -> '-2')."""
    m = re.search(r"-?\d+", strip_md(s))
    return m.group(0) if m else ""


def tabelas(md: str) -> list[tuple[str, list[str], list[list[str]]]]:
    """Extrai as tabelas do markdown: (título da seção corrente, header, linhas)."""
    linhas = md.split("\n")
    out = []
    secao = ""
    i = 0
    while i < len(linhas):
        l = linhas[i]
        m = re.match(r"^#{1,4}\s+(.*)", l)
        if m:
            secao = strip_md(m.group(1))
        if l.lstrip().startswith("|"):
            bloco = []
            while i < len(linhas) and linhas[i].lstrip().startswith("|"):
                bloco.append(linhas[i])
                i += 1
            if len(bloco) >= 3:  # header + separador + >=1 linha
                header = [strip_md(c) for c in _split_row(bloco[0])]
                rows = [_split_row(r) for r in bloco[2:]]
                out.append((secao, header, rows))
            continue
        i += 1
    return out


def _split_row(r: str) -> list[str]:
    return [c.strip() for c in r.strip().strip("|").split("|")]


def secoes(md: str, nivel: int) -> list[tuple[str, str]]:
    """Divide o markdown em (título, corpo) pelos títulos do nível dado."""
    padrao = re.compile(rf"^#{{{nivel}}}\s+(.+)$", re.M)
    partes = padrao.split(md)
    out = []
    # partes = [preambulo, titulo1, corpo1, titulo2, corpo2, ...]
    for i in range(1, len(partes) - 1, 2):
        out.append((strip_md(partes[i]), partes[i + 1]))
    return out


def paragrafos(txt: str) -> list[str]:
    """Parágrafos de um trecho (linhas em branco separam), já sem markdown."""
    blocos = re.split(r"\n\s*\n", txt.strip())
    return [strip_md(" ".join(b.split("\n"))) for b in blocos if b.strip()]


def bullets(txt: str) -> list[str]:
    """Itens de lista '-' de um trecho, sem markdown."""
    itens = []
    atual = None
    for l in txt.split("\n"):
        if re.match(r"^\s*-\s+", l):
            if atual is not None:
                itens.append(atual)
            atual = re.sub(r"^\s*-\s+", "", l)
        elif atual is not None and l.strip() and not l.lstrip().startswith("#"):
            atual += " " + l.strip()  # continuação de item multi-linha
        else:
            if atual is not None:
                itens.append(atual)
                atual = None
    if atual is not None:
        itens.append(atual)
    return [strip_md(i) for i in itens if strip_md(i) and strip_md(i) != "—"]


def numerados(txt: str) -> list[str]:
    """Itens de lista numerada ('1.') de um trecho, sem markdown."""
    itens = []
    atual = None
    for l in txt.split("\n"):
        if re.match(r"^\s*\d+\.\s+", l):
            if atual is not None:
                itens.append(atual)
            atual = re.sub(r"^\s*\d+\.\s+", "", l)
        elif atual is not None and l.strip() and not l.lstrip().startswith("#"):
            atual += " " + l.strip()
        else:
            if atual is not None:
                itens.append(atual)
                atual = None
    if atual is not None:
        itens.append(atual)
    return [strip_md(i) for i in itens if strip_md(i)]


# ---------------------------------------------------------------------------
# Armas
# ---------------------------------------------------------------------------

def parse_nomes(cell: str) -> tuple[str, list[str], str | None]:
    """'Adaga, Kukri, Kunai' -> ('Adaga', ['Kukri','Kunai'], None).
    Parêntese no nome vira observação: 'Boomerangue (volta)' -> obs."""
    txt = strip_md(cell)
    obs = None
    m = re.match(r"^(.*?)\s*\((.+)\)\s*$", txt)
    if m:
        txt, obs = m.group(1).strip(), m.group(2).strip()
    if "," in txt:
        nomes = [n.strip() for n in txt.split(",") if n.strip()]
    elif " / " in txt:
        nomes = [n.strip() for n in txt.split(" / ") if n.strip()]
    else:
        nomes = [txt]
    return nomes[0], nomes[1:], obs


def parse_peso_pa(cell: str) -> tuple[str, str]:
    txt = strip_md(cell)
    tam = re.search(r"(Leve|Média|Pesada)", txt)
    pa = re.search(r"(\d+)\s*PA", txt)
    return (tam.group(1) if tam else "", pa.group(1) if pa else "")


def parse_armas_melee(md: str, modulo: str) -> list[dict]:
    armas = []
    for secao, header, rows in tabelas(md):
        if not any("Peso" in h and "Ações" in h for h in header):
            continue
        for cells in rows:
            if len(cells) < 7:
                aviso(f"{modulo}: linha de arma com {len(cells)} colunas ignorada: {cells[:1]}")
                continue
            nome, variantes, obs = parse_nomes(cells[0])
            tamanho, custo_pa = parse_peso_pa(cells[1])
            catprops = strip_md(cells[2])
            categoria = "Curta" if "CURT." in catprops else ("Longa" if "LONG." in catprops else "")
            props = [p for p in SIGLAS if p not in ("VERS", "ACUI", "DESA") and f"{p}." in catprops]
            arma = {
                "nome": nome,
                "variantes": variantes,
                "tamanho": tamanho,
                "categoria": categoria,
                "custoPA": custo_pa,
                "alcance": tira_pontos_siglas(strip_md(cells[3])),
                "dano": tira_pontos_siglas(strip_md(cells[4])),
                "props": props,
                "versatil": "VERS." in catprops,
                "acuidade": "ACUI." in catprops,
                "distancia": False,
                "municoes": [],
                "preco": strip_md(cells[5]),
                "durabilidade": numero(cells[6]),
                "modulo": modulo,
            }
            if obs:
                arma["observacao"] = obs
            armas.append(arma)
    return armas


def parse_armas_distancia(md: str, modulo: str) -> tuple[list[dict], list[dict]]:
    armas, municoes = [], []
    for secao, header, rows in tabelas(md):
        if any("Munição" in h for h in header) and any("Alc" in h for h in header):
            for cells in rows:
                if len(cells) < 6:
                    aviso(f"{modulo}: linha de arma com {len(cells)} colunas ignorada: {cells[:1]}")
                    continue
                nome, variantes, obs = parse_nomes(cells[0])
                tamanho, custo_pa = parse_peso_pa(cells[1])
                municao_txt = strip_md(cells[3])
                lista_mun = [m.strip() for m in re.split(r",| / ", municao_txt) if m.strip()]
                arma = {
                    "nome": nome,
                    "variantes": variantes,
                    "tamanho": tamanho,
                    "categoria": "",
                    "custoPA": custo_pa,
                    "alcance": strip_md(cells[2]),
                    "dano": "",  # dano vem da munição
                    "props": [],
                    "versatil": False,
                    "acuidade": False,
                    "distancia": True,
                    "municoes": lista_mun,
                    "preco": strip_md(cells[4]),
                    "durabilidade": numero(cells[5]),
                    "modulo": modulo,
                }
                if obs:
                    arma["observacao"] = obs
                armas.append(arma)
        elif any(h == "Categoria" for h in header) and any(h == "Dano" for h in header):
            for cells in rows:
                if len(cells) < 4:
                    continue
                nome, variantes, obs = parse_nomes(cells[0])
                mun = {
                    "nome": nome,
                    "variantes": variantes,
                    "categoria": tira_pontos_siglas(strip_md(cells[1])),
                    "dano": strip_md(cells[2]),
                    "preco": strip_md(cells[3]),
                    "modulo": modulo,
                }
                if obs:
                    mun["observacao"] = obs
                municoes.append(mun)
    return armas, municoes


def parse_desarmado_improvisadas(md_equip: str, md_acoes: str) -> list[dict]:
    """Ataque desarmado e armas improvisadas (matriz de dano do sistema-base)."""
    armas = []
    base = {
        "variantes": [], "categoria": "", "alcance": "", "props": [],
        "versatil": False, "acuidade": False, "distancia": False,
        "municoes": [], "preco": "", "durabilidade": "",
        "modulo": "sistema-base",
    }
    m = re.search(r"Ataque desarmado\*?\*?\s*=\s*`?([0-9d−+-]+)`?", md_equip)
    dano_desarmado = strip_md(m.group(1)) if m else ""
    if not m:
        aviso("equipamentos-base: dano do ataque desarmado não encontrado")
    m = re.search(r"Ataque desarmado\s*\|\s*\*?\*?`?(\d+)\s*PA", md_acoes)
    pa_desarmado = m.group(1) if m else ""
    if not m:
        aviso("acoes-em-combate: custo de PA do ataque desarmado não encontrado")
    armas.append({**base, "nome": "Ataque desarmado", "tamanho": "",
                  "custoPA": pa_desarmado, "dano": dano_desarmado, "alcance": "1m"})

    m = re.search(
        r"Armas improvisadas[^:]*:\s*leve\s*`?([^`,]+)`?,\s*média\s*`?([^`,]+)`?,\s*pesada\s*`?([^`.,]+)`?",
        md_equip)
    if m:
        # durabilidade das improvisadas: "leve 5 · média 8 · pesada 10" (seção Durabilidade)
        d = re.search(r"improvisadas[^—]*—\s*\*?\*?leve\s*`?(\d+)`?\s*·\s*média\s*`?(\d+)`?\s*·\s*pesada\s*`?(\d+)`?",
                      md_equip)
        durabs = d.groups() if d else ("", "", "")
        for i, tam in enumerate(["leve", "média", "pesada"]):
            armas.append({**base,
                          "nome": f"Arma improvisada {tam}",
                          "tamanho": tam.capitalize().replace("média", "Média"),
                          "custoPA": "", "dano": strip_md(m.group(i + 1)),
                          "durabilidade": durabs[i]})
    else:
        aviso("equipamentos-base: dano das armas improvisadas não encontrado")
    return armas


# ---------------------------------------------------------------------------
# Proteções
# ---------------------------------------------------------------------------

def parse_protecoes(md: str) -> list[dict]:
    protecoes = []
    for secao, header, rows in tabelas(md):
        if any("Tipo de armadura" in h for h in header):
            for cells in rows:
                if len(cells) < 5:
                    continue
                tipo = strip_md(cells[0])
                protecoes.append({
                    "nome": f"Peça {tipo.lower()}",
                    "variantes": [],
                    "classe": "Armadura",
                    "tipo": tipo,
                    "redDano": numero(cells[1]),
                    "redPA": numero(cells[2]),
                    "durabilidade": numero(cells[3]),
                    "preco": strip_md(cells[4]),
                    "modulo": "protecoes",
                })
        elif secao == "Escudos" and any(h == "Item" for h in header):
            for cells in rows:
                if len(cells) < 6:
                    continue
                nome, variantes, obs = parse_nomes(cells[0])
                tipo, pa_uso = parse_peso_pa(cells[1])
                protecoes.append({
                    "nome": nome,
                    "variantes": variantes,
                    "classe": "Escudo",
                    "tipo": tipo,
                    "redDano": numero(cells[2]),
                    "redPA": numero(cells[3]),
                    "durabilidade": numero(cells[4]),
                    "paUso": pa_uso,
                    "preco": strip_md(cells[5]),
                    "modulo": "protecoes",
                })
    return protecoes


# ---------------------------------------------------------------------------
# Propriedades das armas (glossário)
# ---------------------------------------------------------------------------

def parse_propriedades(md_equip: str, maestrias: dict[str, str]) -> dict[str, dict]:
    """Bullets de '## Propriedades das armas' (+ resgatadas) e o parágrafo do VERS."""
    props: dict[str, dict] = {}
    # junta linhas de continuação dos bullets para o regex pegar o texto inteiro
    texto = re.sub(r"\n(?![-#>\n])", " ", md_equip)
    for m in re.finditer(
            r"-\s+\*\*([^(*]+)\(`([A-Z]{4})\.?`\)\*\*\s*—\s*(.+?)(?=\n|$)", texto):
        nome, sigla, efeito = strip_md(m.group(1)), m.group(2), strip_md(m.group(3))
        props[sigla] = {"nome": nome, "efeito": efeito}
    m = re.search(r"\*\*Versátil \(`VERS\.`\):\*\*\s*(.+?)(?=\n|$)", texto)
    if m:
        props["VERS"] = {"nome": "Versátil", "efeito": strip_md(m.group(1))}
    for sigla, info in props.items():
        if sigla in maestrias:
            info["maestria"] = maestrias[sigla]
    esperadas = {"CORT", "CONT", "PERF", "PROJ", "AGAR", "ARRE", "DEFL", "ACUI", "VERS"}
    faltando = esperadas - set(props)
    if faltando:
        aviso(f"propriedades não encontradas em equipamentos-base: {sorted(faltando)}")
    return props


# ---------------------------------------------------------------------------
# Traços
# ---------------------------------------------------------------------------

def parse_tracos(md: str) -> tuple[list[dict], dict[str, str]]:
    tracos: list[dict] = []
    maestria_por_sigla: dict[str, str] = {}

    # Efeito geral das maestrias (frase literal do manual) e o parágrafo do desarmado.
    texto = re.sub(r"\n(?![-#|>\n])", " ", md)
    frase_maestria = ("As propriedades só produzem efeito se o personagem tiver a "
                      "maestria correspondente.")
    m = re.search(r"\*\*Maestria em ataque desarmado:\*\*\s*(.+?)(?=\n|$)", texto)
    efeito_desarmado = strip_md(m.group(1)) if m else ""

    # Detalhes dos aspectos (seções ### sob "## Lista de Aspectos")
    detalhes: dict[str, dict] = {}
    for titulo, corpo in secoes(md, 3):
        subs = {t: c for t, c in secoes(corpo, 4)}
        if "Descrição" not in subs:
            continue
        detalhes[titulo] = {
            "efeito": " ".join(paragrafos(subs.get("Descrição", ""))),
            "gatilho": "; ".join(bullets(subs.get("Condição de uso (gatilho)", ""))),
            "requisitos": "; ".join(bullets(subs.get("Requisitos de uso", ""))),
            "custo": "",
        }
        mc = re.search(r"\*\*Custo de compra:\*\*\s*`?(\d+)", corpo)
        if mc:
            detalhes[titulo]["custo"] = mc.group(1)

    for secao, header, rows in tabelas(md):
        if header and header[0] == "Atividade":  # técnicas
            for cells in rows:
                if len(cells) < 3:
                    continue
                tracos.append({
                    "nome": strip_md(cells[0]),
                    "categoria": "Técnica",
                    "atributo": strip_md(cells[1]),
                    "valorCompra": numero(cells[2]),
                    "efeito": ("Anula a desvantagem natural dos testes da atividade "
                               "correspondente — não concede vantagem."),
                    "requisitos": "",
                    "experimental": False,
                })
        elif header and "Equipamento" in header[0]:  # maestrias
            for cells in rows:
                if len(cells) < 2:
                    continue
                bruto = strip_md(cells[0])
                sig = re.search(r"\b([A-Z]{4})\.?$", bruto)
                nome = re.sub(r"\s*\b[A-Z]{4}\.?$", "", bruto).strip()
                efeito = frase_maestria
                obs = ("Custo escalonado: a 1ª maestria custa 1 exp., a 2ª custa 2 exp., "
                       "a 3ª custa 3 exp., e assim por diante (conta o total de maestrias).")
                if sig:
                    maestria_por_sigla[sig.group(1)] = nome
                    if sig.group(1) == "DESA" and efeito_desarmado:
                        efeito = efeito_desarmado
                elif "armadura" in nome.lower():
                    # O manual não define o efeito das maestrias de armadura.
                    efeito = ""
                    aviso(f"traços: '{nome}' sem efeito definido no manual (lacuna A DEFINIR)")
                traco = {
                    "nome": nome,
                    "categoria": "Maestria",
                    "atributo": "",
                    "valorCompra": numero(cells[1]),
                    "efeito": efeito,
                    "requisitos": "",
                    "observacao": obs,
                    "experimental": False,
                }
                tracos.append(traco)
        elif header and header[0] == "Aspecto":  # tabela de custos dos aspectos
            for cells in rows:
                if len(cells) < 2:
                    continue
                nome = strip_md(cells[0])
                custo = numero(cells[1])
                det = detalhes.get(nome)
                if det is None:
                    aviso(f"traços: aspecto '{nome}' está na tabela mas não tem seção de detalhe")
                    det = {"efeito": "", "gatilho": "", "requisitos": "", "custo": ""}
                elif det["custo"] and det["custo"] != custo:
                    aviso(f"traços: custo divergente para '{nome}': tabela {custo} × seção {det['custo']}")
                traco = {
                    "nome": nome,
                    "categoria": "Aspecto",
                    "atributo": "",
                    "valorCompra": custo,
                    "efeito": det["efeito"],
                    "requisitos": det["requisitos"],
                    "experimental": False,
                }
                if det["gatilho"]:
                    traco["gatilho"] = det["gatilho"]
                tracos.append(traco)

    # aspectos com seção de detalhe mas fora da tabela de custos: quando a
    # própria seção declara o custo ("**Custo de compra:** N"), saem mesmo
    # assim (ex.: Pele de ferro — custo documentado na seção, tabela vazia)
    na_tabela = {t["nome"] for t in tracos if t["categoria"] == "Aspecto"}
    for nome, det in detalhes.items():
        if nome not in na_tabela and det["custo"]:
            traco = {
                "nome": nome,
                "categoria": "Aspecto",
                "atributo": "",
                "valorCompra": det["custo"],
                "efeito": det["efeito"],
                "requisitos": det["requisitos"],
                "experimental": False,
            }
            if det["gatilho"]:
                traco["gatilho"] = det["gatilho"]
            tracos.append(traco)
        elif nome not in na_tabela:
            aviso(f"traços: aspecto '{nome}' tem seção de detalhe mas não está na tabela de custos")

    return tracos, maestria_por_sigla


# ---------------------------------------------------------------------------
# Habilidades (e traços experimentais)
# ---------------------------------------------------------------------------

META_RE = re.compile(
    r"\*\*Atributo:\*\*\s*`?([^·`]+?)`?\s*·\s*"
    r"(?:\*\*Custo de PA:\*\*\s*(.+?)\s*·\s*)?"
    r"\*\*Custo de compra:\*\*\s*(.+)$", re.M)


def parse_habilidades(caminho: str, experimental: bool) -> tuple[list[dict], list[dict]]:
    md = le(caminho)
    habilidades, tracos = [], []
    for titulo, corpo in secoes(md, 2):
        m = META_RE.search(corpo)
        if not m:
            continue  # "Resumo", introduções etc.
        atributo = strip_md(m.group(1))
        custo_pa = tira_pontos_siglas(strip_md(m.group(2) or ""))
        valor_compra = numero(m.group(3))
        subs = {t: c for t, c in secoes(corpo, 3)}
        efeito = " ".join(paragrafos(subs.get("Descrição", "")))
        requisitos = "; ".join(bullets(subs.get("Requisitos de uso", "")))
        niveis = numerados(subs.get("Progressão", ""))
        if not niveis:
            # progressão em tabela (| Nível | ... |) — ex.: Golpe surpresa
            for _, header, rows in tabelas(subs.get("Progressão", "")):
                if header and header[0].lower().startswith("nível"):
                    niveis = [
                        "; ".join(f"{header[k]}: {strip_md(cells[k])}"
                                  for k in range(1, min(len(header), len(cells))))
                        for cells in rows
                    ]
        observacoes = "; ".join(bullets(subs.get("Observações", "")) or
                                paragrafos(subs.get("Observações", "")))
        e_traco = "(traço)" in titulo.lower() or not custo_pa
        nome = re.sub(r"\s*\(traço\)\s*$", "", titulo, flags=re.I).strip()
        if not efeito:
            aviso(f"{caminho}: '{nome}' sem seção Descrição")
        if e_traco:
            tracos.append({
                "nome": nome, "categoria": "Aspecto", "atributo": atributo,
                "valorCompra": valor_compra, "efeito": efeito,
                "requisitos": requisitos, "experimental": experimental,
            })
        else:
            hab = {
                "nome": nome, "atributo": atributo, "custoPA": custo_pa,
                "valorCompra": valor_compra, "efeito": efeito,
                "requisitos": requisitos, "niveis": niveis,
                "experimental": experimental, "fonte": caminho,
            }
            if observacoes:
                hab["observacoes"] = observacoes
            habilidades.append(hab)
    return habilidades, tracos


# ---------------------------------------------------------------------------
# Inimigos (kit de playtest)
# ---------------------------------------------------------------------------

# Todos os itens saem com "proposta": true — o pacote de minion (tiers de queda
# 10/20/30, sem fadiga, sem habilidades) é proposta dos playtests 1 e 2, regra
# não fechada (PENDENCIAS.md, "Minions — tratamento único").
TIERS_INIMIGO = {"fraco": "fraco", "médio": "medio", "medio": "medio",
                 "forte": "forte", "chefe": "chefe", "especial": "especial"}

# Palavras reconhecidas na coluna "Red. dano" (ver inimigos-do-kit.md): o que
# vier entre o número e o parêntese diz onde a redução vale. Tudo é normalizado
# para as chaves de membro que a plataforma usa (MembroKey: tronco, cabeca,
# bracoE, bracoD, pernaE, pernaD).
MEMBROS_INIMIGO: dict[str, list[str]] = {
    "cabeca": ["cabeca"], "cabeça": ["cabeca"],
    "tronco": ["tronco"],
    "braco esquerdo": ["bracoE"], "braco direito": ["bracoD"],
    "bracos": ["bracoE", "bracoD"], "braços": ["bracoE", "bracoD"],
    "perna esquerda": ["pernaE"], "perna direita": ["pernaD"],
    "pernas": ["pernaE", "pernaD"],
}


def reducao_regioes(celula: str) -> list[str]:
    """Regiões cobertas pela redução de uma célula 'Red. dano'.

    Lista vazia = a redução vale em qualquer golpe. Formato canônico:
    '−N <regiões> (descrição)'. Sem número (ex.: 'cobertura própria') = caso
    especial do narrador, sem redução automática. Palavra fora do glossário
    entre o número e o parêntese dispara aviso (o consumidor não interpreta).
    """
    antes_parentese = celula.split("(", 1)[0].strip()
    m = re.search(r"^(?:−|-)\s*\d+", antes_parentese)
    if not m:
        return []  # sem número: sem redução automática
    resto = antes_parentese[m.end():].strip()
    if not resto:
        return []  # sem região declarada: vale em qualquer golpe
    regioes: list[str] = []
    desconhecidas: list[str] = []
    for palavra in re.split(r"[;,\s]+", resto):
        chaves = MEMBROS_INIMIGO.get(palavra.lower()) if palavra else None
        if chaves is None:
            if palavra:
                desconhecidas.append(palavra)
            continue
        for chave in chaves:
            if chave not in regioes:
                regioes.append(chave)
    if desconhecidas:
        aviso(f"inimigos: palavra(s) de região não reconhecida(s) na coluna "
              f"'Red. dano' = '{celula}' (palavras: {', '.join(desconhecidas)})")
    return regioes


def parse_inimigos(md: str) -> list[dict]:
    inimigos = []
    # tabelas de inimigo no arquivo INTEIRO: se uma seção for renomeada fora do
    # padrão "## Cenário N — Título", a perda tem que gritar, não sumir
    total_tabelas = sum(
        1 for _, header, _ in tabelas(md)
        if header and header[0] == "Inimigo" and "Queda" in header
    )
    tabelas_lidas = 0
    for titulo, corpo in secoes(md, 2):
        m = re.match(r"Cenário\s+(\d+)\s*—\s*(.+)$", titulo)
        if not m:
            continue
        num, cenario_titulo = int(m.group(1)), m.group(2).strip()
        # contexto do cenário: primeiro parágrafo antes da tabela (itálico)
        pars = paragrafos(corpo.split("|", 1)[0])
        contexto = pars[0] if pars else ""
        for _, header, rows in tabelas(corpo):
            if not (header and header[0] == "Inimigo" and "Queda" in header):
                continue
            tabelas_lidas += 1
            for cells in rows:
                if len(cells) < 11:
                    aviso(f"inimigos: linha com {len(cells)} colunas ignorada: {cells[:1]}")
                    continue
                queda_txt = strip_md(cells[2])
                queda_txt = "" if queda_txt == "—" else queda_txt
                primeiro = queda_txt.split()[0].lower() if queda_txt else ""
                tier = TIERS_INIMIGO.get(primeiro, "")
                # número da queda só quando o tier é um limiar de dano TOTAL
                # (chefe/especial usam regiões — o número teria outra semântica)
                queda = numero(queda_txt) if tier in ("fraco", "medio", "forte") else ""
                if not queda_txt:
                    aviso(f"inimigos: '{strip_md(cells[0])}' (cenário {num}) sem tier "
                          "de queda (lacuna A DEFINIR)")
                inimigos.append({
                    "nome": strip_md(cells[0]),
                    "cenarioNumero": num,
                    "cenarioTitulo": cenario_titulo,
                    "contexto": contexto,
                    "qtd": strip_md(cells[1]),
                    "tier": tier,
                    "queda": queda,
                    "quedaTexto": queda_txt,
                    "entrada": strip_md(cells[3]),
                    "pa": numero(cells[4]),
                    "arma": strip_md(cells[5]),
                    "dano": tira_pontos_siglas(strip_md(cells[6])),
                    "custoPA": strip_md(cells[7]),
                    "alcance": strip_md(cells[8]),
                    "reducao": "" if strip_md(cells[9]) == "—" else strip_md(cells[9]),
                    "tatica": strip_md(cells[10]),
                    "proposta": True,
                })
                # regiões cobertas: só entram no JSON quando a célula declara
                # (campo ausente = vale em qualquer golpe — consumidor tolera)
                regioes = reducao_regioes(strip_md(cells[9]))
                if regioes:
                    inimigos[-1]["reducaoRegioes"] = regioes
    if tabelas_lidas < total_tabelas:
        aviso(f"inimigos: {total_tabelas - tabelas_lidas} tabela(s) de inimigo fora de "
              "seção '## Cenário N — Título' foram descartadas (título renomeado?)")
    if not inimigos:
        aviso("inimigos: nenhuma linha extraída do kit (estrutura da tabela mudou?)")
    return inimigos


# ---------------------------------------------------------------------------
# main
# ---------------------------------------------------------------------------

def main() -> None:
    armas: list[dict] = []
    municoes: list[dict] = []

    md_equip = le(FONTE_EQUIPAMENTOS)
    md_acoes = le(FONTE_ACOES)
    armas += parse_desarmado_improvisadas(md_equip, md_acoes)
    for f in FONTES_ARMAS_MELEE:
        armas += parse_armas_melee(le(f), Path(f).parent.name)
    for f in FONTES_ARMAS_DIST:
        a, m = parse_armas_distancia(le(f), Path(f).parent.name)
        armas += a
        municoes += m

    protecoes = parse_protecoes(le(FONTE_PROTECOES))
    tracos, maestria_por_sigla = parse_tracos(le(FONTE_TRACOS))
    propriedades = parse_propriedades(md_equip, maestria_por_sigla)

    habilidades: list[dict] = []
    for caminho, experimental in FONTES_HABILIDADES:
        habs, tras = parse_habilidades(caminho, experimental)
        habilidades += habs
        tracos += tras

    inimigos = parse_inimigos(le(FONTE_INIMIGOS))

    # sanidade: nomes duplicados
    for rotulo, lista in [("arma", armas), ("proteção", protecoes),
                          ("habilidade", habilidades), ("traço", tracos),
                          ("inimigo", inimigos)]:
        vistos = set()
        for item in lista:
            if item["nome"] in vistos:
                aviso(f"nome de {rotulo} duplicado: {item['nome']}")
            vistos.add(item["nome"])

    catalogo = {
        "$comment": ("GERADO por contrato/exportar_catalogo.py a partir das listas do manual "
                     "— NÃO editar à mão. Contrato de conteúdo: ver contrato/README.md."),
        "fontes": ([FONTE_EQUIPAMENTOS, FONTE_ACOES, FONTE_TRACOS, FONTE_PROTECOES]
                   + FONTES_ARMAS_MELEE + FONTES_ARMAS_DIST
                   + [c for c, _ in FONTES_HABILIDADES] + [FONTE_INIMIGOS]),
        "propriedades": propriedades,
        "armas": armas,
        "municoes": municoes,
        "protecoes": protecoes,
        "habilidades": habilidades,
        "tracos": tracos,
        "inimigos": inimigos,
    }

    SAIDA.write_text(json.dumps(catalogo, ensure_ascii=False, indent=2) + "\n",
                     encoding="utf-8", newline="\n")
    print(f"OK — catálogo exportado em {SAIDA}")
    print(f"  armas: {len(armas)} · munições: {len(municoes)} · proteções: {len(protecoes)}"
          f" · habilidades: {len(habilidades)} · traços: {len(tracos)}"
          f" · propriedades: {len(propriedades)} · inimigos: {len(inimigos)}")
    if AVISOS:
        print(f"  {len(AVISOS)} aviso(s) — ver acima.", file=sys.stderr)


if __name__ == "__main__":
    main()
