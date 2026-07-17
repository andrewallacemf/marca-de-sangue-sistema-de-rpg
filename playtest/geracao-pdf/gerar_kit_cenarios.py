import re, glob, markdown
from weasyprint import HTML, CSS

BASE = "/sessions/dreamy-amazing-ritchie/mnt/Marca de Sangue Sistema de RPG/marca-de-sangue-sistema-de-rpg/playtest/cenarios/"
DATA = "18/07/2026"

def limpa(txt):
    if txt.startswith("﻿"): txt = txt.lstrip("﻿")
    txt = re.sub(r"^\s*---\r?\n.*?\r?\n---\r?\n", "", txt, count=1, flags=re.DOTALL)
    return txt.strip()

arquivos = ["00-guia-do-narrador.md"] + sorted(glob.glob(BASE+"0[1-5]-*.md"))
partes = []
partes.append(limpa(open(BASE+"00-guia-do-narrador.md",encoding="utf-8-sig").read()))
for a in sorted(glob.glob(BASE+"0[1-5]-*.md")):
    partes.append(limpa(open(a,encoding="utf-8-sig").read()))
corpo = "\n\n".join(partes)

m = markdown.Markdown(extensions=["tables","fenced_code","sane_lists","attr_list","toc"],
                      extension_configs={"toc":{"toc_depth":"1-2"}})
body = m.convert(corpo); toc = m.toc

html = f"""<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8"></head><body>
<section class="cover">
  <div class="cover-top">Sistema de RPG</div>
  <h1 class="cover-title">Marca de Sangue</h1>
  <div class="cover-sub">Kit de cenários de playtest</div>
  <div class="cover-rule"></div>
  <div class="cover-ver">5 cenários · 18 fichas prontas &middot; {DATA}</div>
</section>
<section class="toc-page"><h1 class="toc-title">Sumário</h1><div class="toc">{toc}</div></section>
<main>{body}</main></body></html>"""

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
.cover-title { font-size:44pt; margin:0; color:#f7ecda; }
.cover-sub { font-size:18pt; margin-top:6mm; font-style:italic; font-family:'DejaVu Serif'; color:#e7d3b3; }
.cover-rule { width:60mm; height:2px; background:#b58a4e; margin:12mm auto; }
.cover-ver { font-size:11pt; color:#d9b382; letter-spacing:1px; }
.toc-page { page-break-before:always; }
.toc-title { font-size:24pt; color:#5c0d16; border-bottom:2px solid #b58a4e; padding-bottom:3mm; margin-bottom:5mm; }
.toc ul { list-style:none; padding-left:0; margin:0; } .toc ul ul { padding-left:8mm; }
.toc li { margin:1mm 0; } .toc a { text-decoration:none; color:#2a2a2a; }
.toc > ul > li > a { font-family:'DejaVu Sans'; font-weight:bold; color:#5c0d16; }
.toc a::after { content: leader('.') target-counter(attr(href), page); color:#8a6d3b; font-family:'DejaVu Sans'; font-size:9pt; }
main h1 { page-break-before:always; font-size:20pt; color:#5c0d16; border-bottom:2px solid #b58a4e; padding-bottom:2.5mm; margin:0 0 5mm 0; }
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
h2 + hr, hr { page-break-after:avoid; }
a { color:#7a1420; }
/* cada ficha (h2 que começa com nome em maiúsculas após um hr) tende a começar em nova página */
"""
HTML(string=html).write_pdf("/tmp/Marca-de-Sangue-Kit-de-Cenarios.pdf", stylesheets=[CSS(string=CSS_KIT)])
from pypdf import PdfReader
print("PDF gerado:", len(PdfReader("/tmp/Marca-de-Sangue-Kit-de-Cenarios.pdf").pages), "páginas")
