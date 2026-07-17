---
data: 2026-07-12
pessoa: andre
ferramenta: claude-cowork
objetivo: rebalancear os redutores de dano das armaduras (escala por tipo) e colapsar as armaduras em 3 tipos genéricos
arquivos-alterados:
  - notas-de-design/decisoes/2026-07-12-redutor-dano-armaduras.md (novo)
  - sistema-base/listas/protecoes-base.md (3 tipos genéricos; modelagem por peça; escudos)
  - sistema-base/conflitos/03-saude-e-protecao.md (redutor por tipo)
  - INDICE.md, PENDENCIAS.md
---

# Sessão: redutor de dano das armaduras

## Prompts dados

> (Seguindo do dano das armas.) Decisões do André: D1-a (redutor de dano por tipo:
> Leve −1, Média −2, Pesada −3); D2-b (colapsar as 12 armaduras em 3 genéricas);
> D3 (subtrai do total do dano rolado, dano mínimo 1); D4 (escudos na mesma escala,
> redutor ao defender de guarda levantada).

## O que foi feito

- Escala antiga (1 a 12) — que anulava os novos danos em dados — substituída por
  **redutor de dano por tipo: −1/−2/−3**, igual ao redutor de PA.
- Armaduras **colapsadas em 3 tipos genéricos** (leve/média/pesada); as nomeadas viram
  itens de cenário/módulo.
- **Modelagem por peça consolidada**: peça = tipo (redutores) + regiões cobertas;
  redutores de PA somam; redutor de dano só na região coberta; durabilidade por peça.
  Isso fecha a pendência aberta no rebalanceamento de PA.
- Escudos mantidos (5 nomeados) com redutor de dano/PA pela escala por tipo; redutor de
  dano vale ao defender de guarda levantada.
- 03-saude-e-protecao, INDICE e PENDENCIAS alinhados.

## Decisões tomadas

Todas do André (D1–D4). Valores de durabilidade/preço por peça são 💡 proposta a calibrar.

## Pendências criadas / atualizadas

- Detalhar peças específicas e armaduras temáticas (cenários/módulos); calibrar
  durabilidade e preço por peça no playtest.

## Observações

Com isto, o ciclo de rebalanceamento defensivo↔ofensivo fecha: dano das armas em dados
(matriz tamanho×tipo) + redutor de armadura por tipo (−1/−2/−3) na região coberta, com o
custo de PA acumulado como freio. Tudo a validar em mesa.
