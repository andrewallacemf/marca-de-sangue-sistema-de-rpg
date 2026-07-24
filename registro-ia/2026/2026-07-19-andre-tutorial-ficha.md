---
data: 2026-07-19
pessoa: andre (demanda do Daniel)
ferramenta: claude-cowork
objetivo: tutorial de uso da ficha — painel no site + passo-a-passo para WhatsApp
arquivos-alterados:
  - ficha/src/App.tsx
  - notas-de-design/pendencias-ficha-plataforma.md
  - (fora do repo) Marca-de-Sangue-Ficha.html (offline) atualizado
---

# Sessão: tutorial da ficha

## Prompts dados

> "depois ficha" (tutorial da ficha, após o nerf de projéteis)

## O que foi feito

- **Painel "Como usar" na ficha** (`ficha/src/App.tsx`): botão no topo abre um modal com o básico —
  o que é salvar/carregar `.mds.json` (o arquivo é o personagem; dados só no navegador), os botões
  (Nova, Descanso, A4, Imprimir, regras vigentes × alternativas) e o uso em jogo (marcar
  dano/fadiga/usos), com o aviso de salvar com frequência (sem autosave/undo).
- **Build** feito (single-file 274 kB); **offline** `Marca-de-Sangue-Ficha.html` atualizado. O push
  do fonte dispara o workflow `deploy-ficha.yml` → **GitHub Pages** republica.
- Passo-a-passo curto para **WhatsApp** entregue no chat.

## Decisões tomadas

- Nenhuma de regra; melhoria de produto (onboarding).

## Pendências

- Marcada como feita no backlog de ficha/plataforma. Demais itens de UX seguem lá para quando o
  André acionar.
