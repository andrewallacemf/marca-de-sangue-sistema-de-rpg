import re, glob, markdown
from weasyprint import HTML, CSS
BASE = "/sessions/dreamy-amazing-ritchie/mnt/Marca de Sangue Sistema de RPG/marca-de-sangue-sistema-de-rpg/playtest/cenarios-alternativa/"
DATA = "18/07/2026"
def limpa(txt):
    txt = txt.lstrip("﻿")
    txt = re.sub(r"^\s*---\r?\n.*?\r?\n---\r?\n","",txt,count=1,flags=re.DOTALL)
    # remove emojis sem fonte (com espaço anterior p/ não quebrar negrito)
    for e in ["⚙️","⚙","🧪","⚠️","⚠","💡","🛡️","🛡","🐢"]:
        txt = txt.replace(" "+e,"").replace(e,"")
    txt = txt.replace("️","")
    return txt.strip()
partes=[limpa(open(BASE+"00-guia-do-narrador.md",encoding="utf-8-sig").read())]
for a in sorted(glob.glob(BASE+"0[1-5]-*.md")):
    partes.append(limpa(open(a,encoding="utf-8-sig").read()))
corpo="\n\n".join(partes)
m=markdown.Markdown(extensions=["tables","fenced_code","sane_lists","attr_list","toc"],extension_configs={"toc":{"toc_depth":"1-2"}})
body=m.convert(corpo); toc=m.toc
html=f"""<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8"></head><body>
<section class="cover">
  <div class="cover-top">Sistema de RPG · Regras alternativas</div>
  <h1 class="cover-title">Marca de Sangue</h1>
  <div class="cover-sub">Kit de cenários de playtest<br><span style="font-size:13pt">versão de regras alternativas</span></div>
  <div class="cover-rule"></div>
  <div class="cover-ver">Habilidades por nível &amp; fadiga · 5 cenários · 18 fichas &middot; {DATA}</div>
</section>
<section class="toc-page"><h1 class="toc-title">Sumário</h1><div class="toc">{toc}</div></section>
<main>{body}</main></body></html>"""
CSS_KIT="""
@page { size:A4; margin:20mm 18mm 18mm 18mm; @bottom-center{content:counter(page);font-family:'DejaVu Sans';font-size:9pt;color:#4a5a6a;} }
@page :first{margin:0;@bottom-center{content:none;}} @page cover{margin:0;@bottom-center{content:none;}}
.cover{page:cover;}
html{font-family:'DejaVu Serif',serif;font-size:10pt;line-height:1.45;color:#1c1c1c;}
h1,h2,h3,h4,.cover-title,.toc-title{font-family:'DejaVu Sans',sans-serif;}
.cover{height:297mm;box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;background:#1f3a4d;color:#e9f0f4;padding:30mm;}
.cover-top{letter-spacing:5px;text-transform:uppercase;font-size:11pt;color:#8fb8cc;margin-bottom:14mm;}
.cover-title{font-size:44pt;margin:0;color:#f2f7fa;}
.cover-sub{font-size:18pt;margin-top:6mm;font-style:italic;font-family:'DejaVu Serif';color:#cfe0ea;}
.cover-rule{width:60mm;height:2px;background:#5a8aa6;margin:12mm auto;}
.cover-ver{font-size:10.5pt;color:#8fb8cc;letter-spacing:1px;}
.toc-page{page-break-before:always;}
.toc-title{font-size:24pt;color:#1f3a4d;border-bottom:2px solid #5a8aa6;padding-bottom:3mm;margin-bottom:5mm;}
.toc ul{list-style:none;padding-left:0;margin:0;} .toc ul ul{padding-left:8mm;}
.toc li{margin:1mm 0;} .toc a{text-decoration:none;color:#2a2a2a;}
.toc > ul > li > a{font-family:'DejaVu Sans';font-weight:bold;color:#1f3a4d;}
.toc a::after{content:leader('.') target-counter(attr(href),page);color:#4a5a6a;font-family:'DejaVu Sans';font-size:9pt;}
main h1{page-break-before:always;font-size:20pt;color:#1f3a4d;border-bottom:2px solid #5a8aa6;padding-bottom:2.5mm;margin:0 0 5mm 0;}
main h2{font-size:14pt;color:#2e5f7a;margin-top:7mm;margin-bottom:2mm;border-bottom:1px solid #d6e2ea;padding-bottom:1mm;}
main h3{font-size:12pt;color:#333;margin-top:5mm;margin-bottom:1.5mm;}
p{margin:0 0 2.5mm 0;} h1,h2,h3,h4{page-break-after:avoid;}
code{font-family:'DejaVu Sans Mono';font-size:8.4pt;background:#e8eef2;padding:0.4mm 1.2mm;border-radius:2px;color:#1f3a4d;}
pre{background:#eef3f6;border:1px solid #d6e2ea;border-left:3px solid #5a8aa6;border-radius:2px;padding:3mm;font-size:8pt;line-height:1.25;white-space:pre;overflow:hidden;page-break-inside:avoid;}
pre code{background:none;color:#1a2a35;padding:0;font-size:8pt;}
blockquote{margin:2.5mm 0;padding:2mm 4mm;background:#eef3f6;border-left:3px solid #5a8aa6;font-size:9.5pt;}
ul,ol{margin:0 0 2.5mm 0;padding-left:6mm;} li{margin:0.6mm 0;}
table{border-collapse:collapse;width:100%;margin:3mm 0;font-size:8.6pt;page-break-inside:avoid;}
th{background:#1f3a4d;color:#e9f0f4;font-family:'DejaVu Sans';padding:1.6mm 2mm;text-align:left;}
td{padding:1.4mm 2mm;border-bottom:1px solid #d6e2ea;vertical-align:top;}
tr:nth-child(even) td{background:#f3f7f9;}
hr{border:none;border-top:2px solid #5a8aa6;margin:6mm 0;}
a{color:#2e5f7a;}
"""
HTML(string=html).write_pdf("/tmp/Marca-de-Sangue-Kit-de-Cenarios-ALTERNATIVO.pdf",stylesheets=[CSS(string=CSS_KIT)])
from pypdf import PdfReader
r=PdfReader("/tmp/Marca-de-Sangue-Kit-de-Cenarios-ALTERNATIVO.pdf")
print("PDF alternativo:",len(r.pages),"páginas")
print("frontmatter vazado?", any("atualizado-em" in (p.extract_text() or "") for p in r.pages))
