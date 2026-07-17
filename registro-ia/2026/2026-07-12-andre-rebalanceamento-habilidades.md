---
data: 2026-07-12
pessoa: andre
ferramenta: claude-cowork
objetivo: rebalancear as habilidades após o rebalanceamento de PA/dano — regra de arredondamento global, reescala de custos fixos, Esmagar
arquivos-alterados:
  - notas-de-design/decisoes/2026-07-12-rebalanceamento-habilidades.md (novo)
  - sistema-base/conceitos/01-testes-e-contratestes.md (regra de arredondamento global)
  - sistema-base/listas/habilidades-base-fisicas.md (Esmagar + reescala)
  - sistema-base/listas/habilidades-base-ageis.md, -mentais.md, -sociais.md, -gerais.md, habilidades-experimentais-sociais.md (reescala de custos fixos)
  - PENDENCIAS.md
---

# Sessão: rebalanceamento das habilidades

## Prompts dados

> (Após a revisão completa.) Decisões do André: 1-B (revisão ampla, lista por lista);
> 2 = arredondamento **sempre para baixo** como regra global do sistema; 3-A (piso de 3 PA
> já limita a redução de PA do oponente; não mexer nas progressões); 4-B (reescalar os
> custos fixos de PA proporcionalmente).

## O que foi feito

- **Regra de arredondamento global** ("sempre para baixo") documentada em
  `01-testes-e-contratestes.md` — vale para metade de dano, reduções e divisões; não
  precisa repetir em cada efeito.
- **Reescala dos custos fixos de PA** (mapa ⌊custo×10/7⌋: 3→4, 4→5, 5→7, 6→8) aplicada a
  todas as listas (Disparada; Auto cura/tratamento, Confundir, Intimidações, Recompor,
  Consumir; Cura/Tratamento especializado, Grito de alerta, Revitalizar; 12 experimentais;
  índice geral). Custos "+ PA da arma" não mudaram (já escalam sozinhos).
- **Esmagar** corrigido: progressão consolidada em 5 níveis (1→5 de dano) e custos
  reescalados (4→5 PA; repetição 3→4 PA).

## Decisões tomadas

Do André (1B, 2, 3A, 4B). O mapa de reescala (⌊×10/7⌋) é a aplicação objetiva do 4B.

## Pendências criadas / atualizadas

- **Revisão ampla de design das habilidades** (escopo B) — efeitos, progressões, exp e
  clareza, por propostas lista a lista, começando pela Física. (O núcleo mecânico já foi.)
- Aspecto **Emboscador** "dobra o dano": definir se dobra o resultado ou os dados.
- Resolvido: habilidades de custo fixo (reescaladas); "metade do dano" (coberto pela
  regra global).

## Observações

O escopo B (revisão de design) é grande e envolve decisões de balanceamento do grupo —
por isso hoje entreguei o **núcleo objetivo** (arredondamento, reescala, Esmagar) e a
revisão de design segue como propostas por lista.
