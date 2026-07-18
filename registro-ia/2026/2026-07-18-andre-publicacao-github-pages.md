---
data: 2026-07-18
pessoa: andre
ferramenta: claude-cowork
objetivo: publicar a ficha interativa no GitHub Pages
arquivos-alterados:
  - .github/workflows/deploy-ficha.yml (novo)
  - ficha/README.md (link online)
  - repositório tornado público
---

# Sessão: publicação da ficha no GitHub Pages

## O que foi feito

- Aplicado o **shadcn/ui oficial** (Radix + CVA) na ficha, preservando o visual compacto
  e os helpers próprios (Field/InlineField, textarea auto-crescente). Verificado desktop,
  A4 e mobile.
- **Repositório tornado público** (André autorizou — projeto open source).
- Criado workflow **`.github/workflows/deploy-ficha.yml`**: a cada push em `ficha/**`,
  builda o app (Vite → arquivo único) e publica no Pages via `actions/deploy-pages`.
- **GitHub Pages habilitado** com fonte = GitHub Actions.
- Deploy concluído e verificado no navegador.

## Link público

**https://andrewallacemf.github.io/marca-de-sangue-sistema-de-rpg/**

## Observações

- Como o repo agora é público, todo o conteúdo (inclusive `notas-de-design/transcricoes/`)
  ficou visível. André confirmou que não há problema (open source).
- Próximas fases possíveis: Fase 2 da ficha (catálogos do manual + automações de cálculo);
  polimento fino de mobile; importação de cenários; fechar a malha de embate social.
