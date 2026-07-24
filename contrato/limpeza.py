# -*- coding: utf-8 -*-
"""
Limpeza oficial de conteúdo — parte do CONTRATO DE CONTEÚDO (ver README.md desta pasta).

Transforma o markdown-fonte do repositório (com frontmatter e notas de bastidor)
na "versão limpa" publicável: só as regras finais, sem decisões, propostas,
status nem marcações internas.

Consumidores:
    - playtest/geracao-pdf/gerar_manual_pdf.py  (Manual base do jogador em PDF)
    - manual/gerar-conteudo.py                  (portal web VitePress)
    - contrato/exportar_catalogo.py             (catalogo.json para ficha/plataforma)

Histórico: esta lógica nasceu em playtest/geracao-pdf/gerar_manual_pdf.py e foi
promovida para cá em 24/07/2026 (fase 1 do contrato de conteúdo — ver
notas-de-design/decisoes/2026-07-24-arquitetura-plataforma-e-backstages.md).
Os aprendizados/armadilhas continuam documentados em
playtest/geracao-pdf/COMO-FUNCIONA.md.
"""

import re

# ---------------------------------------------------------------------------
# MARCADORES DE "BASTIDOR" — se um bloco de citação (>) contém qualquer um
# destes, o bloco INTEIRO é removido. IMPORTANTE: a checagem é por BLOCO
# (linhas > consecutivas), não por linha, porque citações multi-linha têm
# linhas de continuação sem o marcador que, de outra forma, sobreviveriam.
# ---------------------------------------------------------------------------
BASTIDOR = [
    "notas-de-design", "A DEFINIR", "PROPOSTA", "🧪",
    "Decidido em", "Aprovado em", "Aprovado pelo grupo", "aprovado pelo grupo",
    "aprovada pelo grupo", "Critério aprovado", "Revisado em",
    "Rebalanceamento de", "ver [decis", "decisões —", "Reação como recurso",
    "saneada e aprovada", "Lista aprovada", "Exemplo aprovado",
    "✅", "(v0.", "conforme decisão", "conforme decisao",
]

# Substituições de texto pontuais: frases de bastidor embutidas em parágrafos
# de conteúdo (não são citações, então precisam de troca explícita).
SUBSTITUICOES = [
    ("Efeitos definidos na reunião de 11/07/2026 (ver [decisões](../../notas-de-design/decisoes/2026-07-11-reunioes-de-mecanica.md), itens 4 e 7):",
     "Efeitos das propriedades das armas (o personagem só usa o efeito se tiver a **maestria** correspondente):"),
    ("Regra consolidada nas reuniões de 11/07/2026 (ver [decisões — reuniões de mecânica](../../notas-de-design/decisoes/2026-07-11-reunioes-de-mecanica.md), item 9, e [decisões — terminologia, alcance e descanso](../../notas-de-design/decisoes/2026-07-11-terminologia-alcance-descanso.md), item A1):",
     "Regras de uso das proteções:"),
    (" *(Substitui o antigo bônus de alcance da especialização de Saltar, que não cabia numa técnica — ver [decisões — lote 2](../../notas-de-design/decisoes/2026-07-12-decisoes-de-regra-lote-2.md), item 6.)*",
     ""),
]


def limpa_arquivo(texto: str) -> str:
    """Remove frontmatter, blocos de citação de bastidor, marcadores inline,
    a seção "## Referências" e aplica as SUBSTITUICOES pontuais."""
    # BOM UTF-8 (arquivos editados no Windows começam com ﻿) — se não for
    # removido, o startswith("---") falha e TODO o frontmatter vaza.
    texto = texto.lstrip("﻿")
    # frontmatter YAML — regex tolerante a espaços/linhas em branco antes do bloco.
    texto = re.sub(r"^\s*---\r?\n.*?\r?\n---\r?\n", "", texto, count=1, flags=re.DOTALL)

    linhas = texto.split("\n")
    out = []
    i = 0
    while i < len(linhas):
        s = linhas[i].strip()
        # bloco de citação: agrupa linhas > consecutivas e decide em conjunto
        if s.startswith(">"):
            bloco = []
            j = i
            while j < len(linhas) and linhas[j].strip().startswith(">"):
                bloco.append(linhas[j])
                j += 1
            if any(m in "\n".join(bloco) for m in BASTIDOR):
                i = j
                continue  # descarta o bloco inteiro
            for b in bloco:
                out.append(_tira_inline(b))
            i = j
            continue
        # nota de rodapé em itálico de bastidor
        if s.startswith("*⚠️") or s.startswith("*💡 PROPOSTA"):
            i += 1
            continue
        out.append(_tira_inline(linhas[i]))
        i += 1

    txt = "\n".join(out)
    # seção "## Referências" (bastidor): até o próximo título de nível <= 2 ou o fim.
    # (Antes isso era feito só no PDF, sobre o corpus inteiro; por arquivo o site
    # também fica limpo.)
    txt = re.sub(r"^## Referências\b.*?(?=^#{1,2} |\Z)", "", txt,
                 flags=re.DOTALL | re.MULTILINE)
    for velho, novo in SUBSTITUICOES:
        txt = txt.replace(velho, novo)
    txt = re.sub(r"\n{3,}", "\n\n", txt)
    return txt.strip() + "\n"


def _tira_inline(ln: str) -> str:
    return ln.replace(" ⚠️", "").replace("⚠️", "").replace(" 🧪", "").replace("🧪", "")


def verifica_limpeza(md: str, origem: str = "") -> list:
    """Varre o texto limpo por resíduos de bastidor/frontmatter.
    Retorna a lista de linhas suspeitas (vazia = limpo). Também imprime aviso."""
    import sys
    gatilhos = ("notas-de-design", "A DEFINIR", "PROPOSTA", "Decidido em",
                "Aprovado em", "✅", "🧪",
                "titulo:", "atualizado-em:", "cenario:", "status:")
    achados = [l for l in md.split("\n") if any(k in l for k in gatilhos)]
    if achados:
        rotulo = f" em {origem}" if origem else ""
        print(f"ATENÇÃO: {len(achados)} linha(s) suspeita(s){rotulo} (bastidor/frontmatter):",
              file=sys.stderr)
        for l in achados[:10]:
            print("   ", l[:100], file=sys.stderr)
    return achados
