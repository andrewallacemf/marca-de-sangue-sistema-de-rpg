#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Gera o "Manual base do jogador" de Marca de Sangue em PDF, limpo — só as regras,
sem notas de bastidor (revisões da IA, decisões, propostas, status).

Uso:
    python3 gerar_manual_pdf.py [RAIZ_DO_REPO] [--data DD/MM/AAAA] [--saida ARQUIVO.pdf]

Se RAIZ_DO_REPO não for informada, usa o diretório que contém a pasta 'sistema-base/'
subindo a partir deste script.

Dependências (sandbox Linux):
    pip install weasyprint markdown --break-system-packages
    # weasyprint precisa de pango/cairo (já presentes no sandbox padrão).
    # Fontes usadas: DejaVu Serif/Sans/Mono (já instaladas).

Consulte COMO-FUNCIONA.md (mesma pasta) para o registro dos aprendizados/armadilhas.
"""

import re
import sys
import argparse
from pathlib import Path

# A limpeza de bastidor é o CONTRATO DE CONTEÚDO oficial do repositório
# (promovida daqui para contrato/limpeza.py em 24/07/2026 — mesma limpeza
# usada pelo portal web e pelo exportador de catálogo).
sys.path.insert(0, str(Path(__file__).resolve().parent.parent.parent / "contrato"))
from limpeza import limpa_arquivo, verifica_limpeza  # noqa: E402

# ---------------------------------------------------------------------------
# 1) ESTRUTURA DO MANUAL — ordem dos capítulos
#    O que ENTRA (só regras finais). Ver COMO-FUNCIONA.md para o que fica de fora
#    e por quê (00-indice, 09-mecanica-alternativa, listas experimentais, índices,
#    READMEs).
# ---------------------------------------------------------------------------
ARQUIVOS = [
    "00-introducao.md",
    "conceitos/01-testes-e-contratestes.md", "conceitos/02-atributos.md",
    "conceitos/03-caracteristicas.md", "conceitos/04-aptidoes.md",
    "conceitos/05-habilidades.md", "conceitos/06-tracos.md",
    "conceitos/07-pontos-de-acao.md", "conceitos/08-fadiga.md",
    "conceitos/09-descanso.md",
    "conflitos/01-conflito-fisico.md", "conflitos/02-acoes-em-conflito.md",
    "conflitos/03-saude-e-protecao.md",
    "criacao-de-personagem/01-passo-a-passo.md", "criacao-de-personagem/02-fichas.md",
    "arquetipos/00-como-funcionam.md", "arquetipos/01-arquetipos-genericos.md",
    "progressao/01-experiencia-e-evolucao.md",
    "listas/aptidoes-base.md", "listas/habilidades-base-fisicas.md",
    "listas/habilidades-base-ageis.md", "listas/habilidades-base-mentais.md",
    "listas/habilidades-base-sociais.md", "listas/tracos-base.md",
    "listas/acoes-em-combate.md", "listas/equipamentos-base.md",
    "listas/protecoes-base.md", "listas/itens-base.md",
]

# Emojis decorativos sem fonte disponível (viram "tofu" no PDF). São removidos
# JUNTO com o espaço que os precede — senão "**Texto 🛡**" vira "**Texto **",
# que quebra o negrito do Markdown (espaço antes do ** de fechamento). O "→"
# é mantido (a DejaVu tem o glifo). Específico do PDF — por isso não mora no contrato.
EMOJIS_REMOVER = ["💡", "🛡️", "🛡", "🐢"]


def monta_markdown(raiz: Path, data: str) -> str:
    base = raiz / "sistema-base"
    partes = []
    faltando = []
    for a in ARQUIVOS:
        p = base / a
        if p.exists():
            # utf-8-sig remove o BOM automaticamente na leitura
            partes.append(limpa_arquivo(p.read_text(encoding="utf-8-sig")))
        else:
            faltando.append(a)
    if faltando:
        print("AVISO: arquivos não encontrados:", ", ".join(faltando), file=sys.stderr)

    capa = (f"# Marca de Sangue\n## Manual base do jogador\n\n"
            f"*Versão de playtest — {data}.*\n\n---\n\n")
    corpo = capa + "\n\n---\n\n".join(partes)
    # (Seção "## Referências" e SUBSTITUICOES já são tratadas por limpa_arquivo.)
    corpo = re.sub(r"\n{3,}", "\n\n", corpo)
    return corpo


def gera_pdf(md: str, data: str, saida: Path) -> None:
    import markdown
    from weasyprint import HTML, CSS

    # separa a capa (primeiro bloco antes do primeiro ---) do corpo
    partes = md.split("\n---\n", 1)
    corpo = (partes[1] if len(partes) == 2 else md).strip()

    # remove emojis SEM fonte, junto com o espaço anterior (protege **negrito**)
    for e in EMOJIS_REMOVER:
        corpo = corpo.replace(" " + e, "").replace(e, "")
    corpo = corpo.replace("️", "")  # seletor de variação órfão
    corpo = re.sub(r"[ \t]+\|", " |", corpo)   # espaços antes de | (tabelas)
    corpo = re.sub(r"\|[ \t]{2,}", "| ", corpo)

    m = markdown.Markdown(
        extensions=["tables", "fenced_code", "sane_lists", "attr_list", "toc"],
        extension_configs={"toc": {"toc_depth": "1-2"}},
    )
    body_html = m.convert(corpo)
    toc_html = m.toc

    html = f"""<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8"></head><body>
<section class="cover">
  <div class="cover-top">Sistema de RPG</div>
  <h1 class="cover-title">Marca de Sangue</h1>
  <div class="cover-sub">Manual base do jogador</div>
  <div class="cover-rule"></div>
  <div class="cover-ver">Versão de playtest &middot; {data}</div>
</section>
<section class="toc-page">
  <h1 class="toc-title">Sumário</h1>
  <div class="toc">{toc_html}</div>
</section>
<main>
{body_html}
</main>
</body></html>"""

    HTML(string=html).write_pdf(str(saida), stylesheets=[CSS(string=CSS_MANUAL)])
    print(f"PDF gerado: {saida}")


# CSS do manual — tema "marca de sangue" (vinho #5c0d16 + dourado #b58a4e).
CSS_MANUAL = """
@page { size: A4; margin: 22mm 20mm 20mm 20mm;
  @bottom-center { content: counter(page); font-family: 'DejaVu Sans'; font-size: 9pt; color: #8a6d3b; } }
@page :first { margin: 0; @bottom-center { content: none; } }
@page cover { margin: 0; @bottom-center { content: none; } }
.cover { page: cover; }
html { font-family: 'DejaVu Serif', serif; font-size: 10.5pt; line-height: 1.5; color: #1c1c1c; }
h1, h2, h3, h4, .cover-title, .toc-title { font-family: 'DejaVu Sans', sans-serif; }
.cover { height: 297mm; box-sizing: border-box; display: flex; flex-direction: column;
  justify-content: center; align-items: center; text-align: center;
  background: #5c0d16; color: #f4e9d8; padding: 30mm; }
.cover-top { letter-spacing: 6px; text-transform: uppercase; font-family:'DejaVu Sans'; font-size: 12pt; color:#d9b382; margin-bottom: 14mm;}
.cover-title { font-size: 46pt; margin: 0; letter-spacing: 2px; color:#f7ecda; }
.cover-sub { font-size: 17pt; margin-top: 6mm; font-style: italic; font-family:'DejaVu Serif'; color:#e7d3b3;}
.cover-rule { width: 60mm; height: 2px; background: #b58a4e; margin: 12mm auto; }
.cover-ver { font-family:'DejaVu Sans'; font-size: 11pt; color:#d9b382; letter-spacing:1px;}
.toc-page { page-break-before: always; }
.toc-title { font-size: 26pt; color:#5c0d16; border-bottom: 2px solid #b58a4e; padding-bottom: 3mm; margin-bottom: 6mm;}
.toc ul { list-style: none; padding-left: 0; margin: 0; }
.toc ul ul { padding-left: 8mm; }
.toc li { margin: 1.5mm 0; }
.toc a { text-decoration: none; color: #2a2a2a; }
.toc > ul > li > a { font-family:'DejaVu Sans'; font-weight: bold; color:#5c0d16; }
.toc a::after { content: leader('.') target-counter(attr(href), page); color:#8a6d3b; font-family:'DejaVu Sans'; font-size: 9pt;}
main h1 { page-break-before: always; font-size: 22pt; color: #5c0d16; border-bottom: 2px solid #b58a4e; padding-bottom: 2.5mm; margin: 0 0 6mm 0; }
main h2 { font-size: 15pt; color: #7a1420; margin-top: 8mm; margin-bottom: 2mm; }
main h3 { font-size: 12.5pt; color: #333; margin-top: 6mm; margin-bottom: 1.5mm; }
main h4 { font-size: 11pt; color: #555; margin-top: 5mm; margin-bottom: 1mm; }
p { margin: 0 0 3mm 0; text-align: justify; }
h1, h2, h3, h4 { page-break-after: avoid; }
code { font-family:'DejaVu Sans Mono'; font-size: 8.6pt; background:#f3ece0; padding: 0.5mm 1.3mm; border-radius: 2px; color:#5c0d16; }
blockquote { margin: 3mm 0; padding: 2.5mm 4mm; background: #faf5ec; border-left: 3px solid #b58a4e; border-radius: 2px; font-size: 9.8pt; }
blockquote p { margin: 1mm 0; }
ul, ol { margin: 0 0 3mm 0; padding-left: 6mm; }
li { margin: 0.8mm 0; }
table { border-collapse: collapse; width: 100%; margin: 3mm 0; font-size: 8.8pt; page-break-inside: avoid; }
th { background: #5c0d16; color: #f4e9d8; font-family:'DejaVu Sans'; font-weight: bold; padding: 1.8mm 2mm; text-align: left; }
td { padding: 1.5mm 2mm; border-bottom: 1px solid #e3d8c4; vertical-align: top; }
tr:nth-child(even) td { background: #faf6ee; }
hr { border: none; border-top: 1px solid #e0d5c0; margin: 6mm 0; }
a { color: #7a1420; }
"""


def acha_raiz() -> Path:
    aqui = Path(__file__).resolve()
    for p in [aqui.parent, *aqui.parents]:
        if (p / "sistema-base").is_dir():
            return p
    return Path.cwd()


def main():
    ap = argparse.ArgumentParser(description="Gera o Manual base de Marca de Sangue em PDF.")
    ap.add_argument("raiz", nargs="?", help="Raiz do repositório (contém sistema-base/).")
    ap.add_argument("--data", default=None, help="Data da versão (DD/MM/AAAA). Padrão: hoje.")
    ap.add_argument("--saida", default=None, help="Caminho do PDF de saída.")
    ap.add_argument("--md", default=None, help="(Opcional) salvar também o markdown limpo aqui.")
    args = ap.parse_args()

    raiz = Path(args.raiz).resolve() if args.raiz else acha_raiz()
    if not (raiz / "sistema-base").is_dir():
        sys.exit(f"ERRO: 'sistema-base/' não encontrada em {raiz}")

    if args.data:
        data = args.data
    else:
        from datetime import date
        data = date.today().strftime("%d/%m/%Y")

    saida = Path(args.saida) if args.saida else (raiz / "playtest" / "Marca-de-Sangue-Manual-Base.pdf")
    saida.parent.mkdir(parents=True, exist_ok=True)

    md = monta_markdown(raiz, data)
    if not verifica_limpeza(md):
        print("Limpeza OK — nenhum resíduo de bastidor nem frontmatter.")
    if args.md:
        Path(args.md).write_text(md, encoding="utf-8")
        print(f"Markdown limpo salvo em: {args.md}")
    print(f"Tamanho do manual: {len(md)} caracteres")
    gera_pdf(md, data, saida)


if __name__ == "__main__":
    main()
