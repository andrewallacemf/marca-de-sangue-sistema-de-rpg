---
titulo: Rebalanceamento das habilidades + regra de arredondamento global
tipo: regra
cenario: base
status: estavel
tags: [habilidades, rebalanceamento, arredondamento, pa]
atualizado-em: 2026-07-12
---

# Rebalanceamento das habilidades (12/07/2026)

*Decisões do André, seguindo o rebalanceamento de PA e o dano em dados.*

## 1. Arredondamento — regra global do sistema ✅

**Todo arredondamento no sistema Marca de Sangue é sempre para baixo.** Vale para metade
de dano, reduções, divisões de qualquer natureza. Documentado em
[Testes e Contratestes](../../sistema-base/conceitos/01-testes-e-contratestes.md).

Aplicações imediatas: "metade do dano da arma" (Atordoar, Encontrão, Quebrar guarda, mão
inábil) = metade do **resultado rolado**, arredondada para baixo (ex.: rolou 5 → inflige 2).

## 2. Custos fixos de PA — reescala proporcional ✅

Os custos **fixos** de PA das habilidades (não os "+ PA da arma", que já escalam sozinhos)
são reescalados na proporção do novo turno (de 7 para 10 PA), arredondando **para baixo**:

| Custo antigo | Novo |
|:--:|:--:|
| 1 | 1 |
| 2 | 2 |
| 3 | 4 |
| 4 | 5 |
| 5 | 7 |

*(Fórmula: novo = ⌊custo × 10 / 7⌋.)* Custos internos de habilidades (ex.: o "gaste 3 PA
para repetir" do Esmagar) seguem o mesmo mapa.

## 3. Redução de PA do oponente — sem mudança ✅

Efeitos que retiram PA do alvo (Atordoar até −6, contundente −1/−2/−3) ficam como estão:
o **piso de 3 PA** por turno já é o limite natural.

## 4. Esmagar — progressão corrigida ✅

A entrada estava quebrada (níveis 1–3 dentro de "Requisitos"; progressão começando em 4).
Consolidada em progressão única de 5 níveis (1→5 pontos de dano). Custo reescalado
(4→5 PA; repetição 3→4 PA).

## 5. Escopo amplo (revisão de efeitos/exp/progressões) — em etapas 🔜

O grupo quer revisar **todas** as habilidades (efeitos, progressões, exp, clareza), lista
por lista. Isso envolve decisões de design (não só números) e será feito por **propostas
por lista** para o grupo aprovar — começando pela lista Física. As reescalas de custo (2)
e o arredondamento (1) já foram aplicados a todas; as propostas de design ficam marcadas
`💡` para aprovação.
