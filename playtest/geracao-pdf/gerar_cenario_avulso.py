"""Gera um PDF avulso de UM cenário de playtest (capa + corpo), reaproveitando o
tema visual do kit. Uso:

    python3 gerar_cenario_avulso.py <entrada.md> <saida.pdf> "<subtítulo da capa>"

Sem argumentos, gera as duas versões do Cenário 6 (vigente e alternativa)."""
import re, sys, markdown
from weasyprint import HTML, CSS

DATA = "18/07/2026"

def limpa(txt):
    if txt.startswith("﻿"):
        txt = txt.lstrip("﻿")
    txt = re.sub(r"^\s*---\r?\n.*?\r?\n---\r?\n", "", txt, count=1, flags=re.DOTALL)
    return txt.strip()

CSS_KIT = """
@page { size: A4; margin: 20mm 18mm 18mm 18mm;
  @bottom-center { content: counter(page); font-family:'DejaVu Sans'; font-size:9pt; color:#8a6d3b; } }
@page :first { margin:0; @bottom-center{content:none;} }
@page cover { margin:0; @bottom-center{content:none;} }
.cover { page: cover; }
html { font-family:'DejaVu Serif',serif; font-size:10pt; line-height:1.45; color:#1c1c1c; }
h1,h2,h3,h4,.cover-title,.toc-title { font-family:'DejaVu Sans',sans-serif; }
.cover { height:297mm; box-sizing:border-box; display:flex; flex-direction:column; justify-content:center;
  align-items:center; text-align:center; background:#5c0d16; color:#f4e9d8; padding:30mm; }
.cover-top { letter-spacing:6px; text-transform:uppercase; font-size:12pt; color:#d9b382; margin-bottom:14mm; }
.cover-title { font-size:40pt; margin:0; color:#f7ecda; }
.cover-sub { font-size:16pt; margin-top:6mm; font-style:italic; color:#e7d3b3; }
.cover-rule { width:60mm; height:2px; background:#b58a4e; margin:12mm auto; }
.cover-ver { font-size:11pt; color:#d9b382; letter-spacing:1px; }
main h1 { page-break-before:always; font-size:20pt; color:#5c0d16; border-bottom:2px solid #b58a4e; padding-bottom:2.5mm; margin:0 0 5mm 0; }
main h1:first-of-type { page-break-before:avoid; }
main h2 { font-size:14pt; color:#7a1420; margin-top:7mm; margin-bottom:2mm; border-bottom:1px solid #e0d5c0; padding-bottom:1mm; }
main h3 { font-size:12pt; color:#333; margin-top:5mm; margin-bottom:1.5mm; }
p { margin:0 0 2.5mm 0; }
h1,h2,h3,h4 { page-break-after:avoid; }
code { font-family:'DejaVu Sans Mono'; font-size:8.4pt; background:#f3ece0; padding:0.4mm 1.2mm; border-radius:2px; color:#5c0d16; }
pre { background:#f7f2e8; border:1px solid #e0d5c0; border-left:3px solid #b58a4e; border-radius:2px;
  padding:3mm; font-size:8pt; line-height:1.25; white-space:pre; overflow:hidden; page-break-inside:avoid; }
pre code { background:none; color:#3a2a1a; padding:0; font-size:8pt; }
blockquote { margin:2.5mm 0; padding:2mm 4mm; background:#faf5ec; border-left:3px solid #b58a4e; font-size:9.5pt; }
ul,ol { margin:0 0 2.5mm 0; padding-left:6mm; } li { margin:0.6mm 0; }
table { border-collapse:collapse; width:100%; margin:3mm 0; font-size:8.6pt; page-break-inside:avoid; }
th { background:#5c0d16; color:#f4e9d8; font-family:'DejaVu Sans'; padding:1.6mm 2mm; text-align:left; }
td { padding:1.4mm 2mm; border-bottom:1px solid #e3d8c4; vertical-align:top; }
tr:nth-child(even) td { background:#faf6ee; }
hr { border:none; border-top:2px solid #b58a4e; margin:6mm 0; }
a { color:#7a1420; }
"""

def gerar(entrada, saida, subtitulo):
    corpo = limpa(open(entrada, encoding="utf-8-sig").read())
    m = markdown.Markdown(extensions=["tables", "fenced_code", "sane_lists", "attr_list"])
    body = m.convert(corpo)
    html = f"""<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8"></head><body>
    <section class="cover">
      <div class="cover-top">Sistema de RPG · cenário de playtest</div>
      <h1 class="cover-title">Marca de Sangue</h1>
      <div class="cover-sub">{subtitulo}</div>
      <div class="cover-rule"></div>
      <div class="cover-ver">Teste da mecânica de cobertura &middot; {DATA}</div>
    </section>
    <main>{body}</main></body></html>"""
    HTML(string=html).write_pdf(saida, stylesheets=[CSS(string=CSS_KIT)])
    from pypdf import PdfReader
    print("PDF:", saida, "-", len(PdfReader(saida).pages), "páginas")

if __name__ == "__main__":
    if len(sys.argv) == 4:
        gerar(sys.argv[1], sys.argv[2], sys.argv[3])
    else:
        RAIZ = "/sessions/dreamy-amazing-ritchie/mnt/Marca de Sangue Sistema de RPG/marca-de-sangue-sistema-de-rpg/playtest/"
        SAIDA = "/sessions/dreamy-amazing-ritchie/mnt/outputs/"
        gerar(RAIZ + "cenarios/06-colapso-vale-dos-atiradores.md",
              SAIDA + "Cenario-6-Vale-dos-Atiradores-REGRAS-VIGENTES.pdf",
              "O Vale dos Atiradores — regras vigentes")
        gerar(RAIZ + "cenarios-alternativa/06-colapso-vale-dos-atiradores.md",
              SAIDA + "Cenario-6-Vale-dos-Atiradores-REGRAS-ALTERNATIVAS.pdf",
              "O Vale dos Atiradores — regras alternativas")
