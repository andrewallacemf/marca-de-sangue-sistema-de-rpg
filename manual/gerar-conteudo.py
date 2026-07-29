#!/usr/bin/env python3
"""
Gera o conteúdo LIMPO do manual web (VitePress) a partir do repositório.

- Usa a limpeza oficial do CONTRATO DE CONTEÚDO (`contrato/limpeza.py`):
  remove frontmatter e blocos de bastidor (✅ decidido, 💡 proposta, ⚠️ a definir, datas…).
  A mesma limpeza é usada pelo PDF e pelo exportador de catálogo — web, PDF e
  ficha mostram sempre o mesmo texto limpo.
- Espelha sistema-base/, modulos/ e cenarios/ em `manual/conteudo/`, já limpos.
- Gera `manual/.vitepress/sidebar.json` com a navegação lateral.

Uso: python3 manual/gerar-conteudo.py   (detecta a raiz do repo sozinho)
"""
from __future__ import annotations
import json, sys, shutil, re
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent          # .../marca-de-sangue-sistema-de-rpg
OUT = RAIZ / "manual" / "conteudo"

sys.path.insert(0, str(RAIZ / "contrato"))
from limpeza import limpa_arquivo                        # limpeza oficial  # noqa: E402

# Seções do manual e como aparecem no menu.
SECOES = [
    ("sistema-base", "Sistema-base"),
    ("modulos", "Módulos"),
    ("cenarios", "Cenários"),
]

RE_PUBLICO_FALSE = re.compile(r"^publico:\s*false\s*$", re.MULTILINE)


def eh_bastidor(texto_bruto: str) -> bool:
    """Página inteira marcada `publico: false` no frontmatter — fica de fora do
    manual público (continua existindo e editável no repo, só não é publicada).
    Convenção documentada em CONVENCOES.md."""
    m = re.match(r"^\s*---\r?\n(.*?)\r?\n---\r?\n", texto_bruto, flags=re.DOTALL)
    if not m:
        return False
    return bool(RE_PUBLICO_FALSE.search(m.group(1)))


def incluir(p: Path) -> bool:
    if p.suffix != ".md":
        return False
    if any(part.startswith("_") for part in p.parts):   # _template-*, etc.
        return False
    if "variantes" in p.parts:      # experimental — fora do manual (como no PDF)
        return False
    if eh_bastidor(p.read_text(encoding="utf-8-sig")):
        return False
    return True

def titulo_de(p: Path, texto_limpo: str) -> str:
    # 1º heading do arquivo, senão o nome do arquivo/pasta
    for ln in texto_limpo.split("\n"):
        m = re.match(r"^#\s+(.*)", ln.strip())
        if m:
            # tira emoji/símbolos decorativos do início do título
            t = re.sub(r"^[^\wÀ-ÿ(]+", "", m.group(1)).strip()
            return t or m.group(1).strip()
    if p.name.lower() == "readme.md":
        return p.parent.name
    return p.stem

def rota(rel: Path) -> str:
    # caminho da rota no VitePress (README.md -> pasta/)
    r = rel.as_posix()
    r = re.sub(r"README\.md$", "", r)
    r = re.sub(r"\.md$", "", r)
    return "/" + r

def main() -> None:
    if OUT.exists():
        shutil.rmtree(OUT, ignore_errors=True)
    OUT.mkdir(parents=True, exist_ok=True)

    sidebar = []
    total = 0
    for pasta, rotulo in SECOES:
        base = RAIZ / pasta
        if not base.is_dir():
            continue
        itens = []
        for p in sorted(base.rglob("*.md")):
            if not incluir(p):
                continue
            rel = p.relative_to(RAIZ)
            limpo = limpa_arquivo(p.read_text(encoding="utf-8-sig"))
            destino = OUT / rel
            # VitePress só trata index.md como índice de diretório (README.md
            # viraria /pasta/README). Gravamos README como index para que a
            # rota /pasta/ funcione (menu, nav e links).
            if destino.name.lower() == "readme.md":
                destino = destino.with_name("index.md")
            destino.parent.mkdir(parents=True, exist_ok=True)
            destino.write_text(limpo, encoding="utf-8")
            itens.append({"text": titulo_de(p, limpo), "link": rota(rel)})
            total += 1
        if itens:
            sidebar.append({"text": rotulo, "collapsed": False, "items": itens})

    # Espelha assets/ (imagens e PDFs referenciados pelo conteúdo com caminhos
    # relativos ../../assets/...). Como conteudo/ espelha a raiz do repo, os
    # links relativos resolvem igual ao repositório.
    assets_src = RAIZ / "assets"
    if assets_src.is_dir():
        shutil.copytree(assets_src, OUT / "assets", dirs_exist_ok=True)

    (OUT / ".." / ".vitepress").resolve().mkdir(parents=True, exist_ok=True)
    (RAIZ / "manual" / ".vitepress" / "sidebar.json").write_text(
        json.dumps(sidebar, ensure_ascii=False, indent=2), encoding="utf-8")

    # home do manual
    (OUT / "index.md").write_text(
        "---\nlayout: home\nhero:\n  name: Marca de Sangue\n  text: Manual do sistema\n"
        "  tagline: Regras, módulos e cenários — atualizados automaticamente a partir do repositório\n"
        "  actions:\n    - theme: brand\n      text: Começar pelo sistema-base\n      link: /sistema-base/00-introducao\n"
        "    - theme: alt\n      text: Módulos\n      link: /modulos/\n"
        "    - theme: alt\n      text: Cenários\n      link: /cenarios/\n"
        "    - theme: alt\n      text: Abrir a ficha ↗\n      link: https://andrewallacemf.github.io/marca-de-sangue-sistema-de-rpg/ficha/\n"
        "features:\n"
        "  - title: Sistema-base\n    details: O núcleo do jogo — atributos, ações, conflito, saúde, PA e descanso.\n    link: /sistema-base/00-introducao\n"
        "  - title: Módulos\n    details: Peças opcionais — furtividade, conflito social, catálogos de armas e proteções.\n    link: /modulos/\n"
        "  - title: Cenários\n    details: Ambientações prontas — Mukashi e Colapso — com arquétipos e mecânicas próprias.\n    link: /cenarios/\n"
        "---\n",
        encoding="utf-8")

    print(f"OK — {total} páginas geradas em {OUT}")

if __name__ == "__main__":
    main()
