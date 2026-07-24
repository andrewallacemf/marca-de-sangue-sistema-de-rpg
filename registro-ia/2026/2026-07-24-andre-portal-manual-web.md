---
data: 2026-07-24
pessoa: andre
ferramenta: claude-cowork
objetivo: evoluir a ficha em plataforma — hospedar o manual (base + módulos + cenários) no mesmo site, atualizando automaticamente a cada push
arquivos-alterados:
  - manual/gerar-conteudo.py (novo)
  - manual/package.json (novo)
  - manual/.vitepress/config.mts (novo)
  - manual/README.md (novo)
  - .github/workflows/deploy-ficha.yml (build combinado)
  - .gitignore (ignora gerados: node_modules, __pycache__, manual/conteudo, dist, sidebar)
  - ficha/src/App.tsx (botão "Manual" no topo)
  - ficha/README.md (nova URL da ficha)
---

# Sessão: portal do sistema (manual web + ficha)

## Prompts dados

> "tem como a gente evoluir ela [a ficha] para ser uma plataforma do sistema? … a gente também
> possa ter o manual disponível … pelo mesmo site (sistema base, modulos, cenarios). De forma que
> tudo o que a gente atualize nesse repositório já atualize automaticamente lá no manual no site?"

Decisões confirmadas por perguntas: manual na **versão limpa** (como o PDF, sem bastidor);
escopo inicial = **base + módulos + cenários**.

## O que foi feito

- **Arquitetura escolhida:** um site **VitePress** na raiz (`base: /marca-de-sangue-sistema-de-rpg/`)
  hospedando o manual; a **ficha** (build single-file, base relativa) entra como asset estático em
  **`/ficha/`**. Um build só, sem montagem manual, sem dor de base na ficha.
- **Preprocessador `manual/gerar-conteudo.py`:** reaproveita a limpeza do gerador de PDF
  (`playtest/geracao-pdf/gerar_manual_pdf.py` → `limpa_arquivo`), então o site mostra só a regra
  final. Espelha `sistema-base/`, `modulos/`, `cenarios/` em `manual/conteudo/`, copia `assets/`,
  gera `.vitepress/sidebar.json` e a home. Exclui `variantes/` e pastas `_template-*`. Grava todo
  `README.md` como `index.md` (VitePress só trata index como índice de diretório). **68 páginas.**
- **Links cruzados:** botão **Manual** no topo da ficha e ações **Abrir a ficha** no manual, via URL
  completa do Pages (funciona online e no arquivo offline).
- **Deploy combinado** (`deploy-ficha.yml`): builda a ficha → gera o conteúdo limpo → embute a ficha
  em `/ficha/` → builda o VitePress → publica no Pages. Dispara em push a `ficha/`, `manual/`,
  `sistema-base/`, `modulos/` ou `cenarios/`.
- **Verificação local (Windows):** build completo sem erro; conferidos home, `/ficha/`, índices de
  `modulos/`, `cenarios/`, `cenarios/mukashi/`, base correta no HTML e PDFs de ficha copiados.

## Decisões tomadas

- Manual = versão limpa (mesma limpeza do PDF). Escopo = base + módulos + cenários.
- Ficha migra da raiz para **`/ficha/`**; a raiz do site passa a ser o manual. (Avisar Daniel/Gabriel.)
- Nada gerado é versionado — regenerado no build.

## Pendências

- Confirmar o deploy no Actions (~2 min após o push `7162282`).
- Backlog de plataforma segue em `notas-de-design/pendencias-ficha-plataforma.md` (ex.: manual em
  drawer dentro da própria ficha, referência rápida de PA/alcances).
