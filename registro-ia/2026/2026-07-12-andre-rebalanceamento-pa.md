---
data: 2026-07-12
pessoa: andre
ferramenta: claude-cowork
objetivo: rebalancear os pontos de ação em todo o sistema-base (10 PA inicial, ataques por peso, nova fadiga, nova estrutura de armadura)
arquivos-alterados:
  - notas-de-design/decisoes/2026-07-12-rebalanceamento-pa-analise.md (análise + decisões)
  - sistema-base/conceitos/07-pontos-de-acao.md (10 PA, teto 7 m, piso 3)
  - sistema-base/conceitos/08-fadiga.md (máx 50, −1/5, piso 3, exemplo 10 PA)
  - sistema-base/conceitos/05-habilidades.md (exemplo do Kenji → 10 PA)
  - sistema-base/listas/acoes-em-combate.md (PA inicial 10; ataques 2/4/6)
  - sistema-base/listas/equipamentos-base.md (custos de arma por peso)
  - sistema-base/listas/protecoes-base.md (redutor de PA por tipo cumulativo; coluna de cobertura; regra de uso)
  - sistema-base/conflitos/03-saude-e-protecao.md (piso 3; redutor só na região coberta)
  - sistema-base/progressao/01-experiencia-e-evolucao.md (PA inicial 10)
  - INDICE.md, PENDENCIAS.md
---

# Sessão: rebalanceamento de pontos de ação

## Prompts dados

> Agora eu queria ir para o rebalanceamento de pontos de ação. A ideia é que os
> personagens comecem com mais PA e que várias ações custem mais PA, para tornar o uso de
> PA mais granular. Decidido: movimento 1 PA/metro; ataque leve 2, médio 4, pesado 6;
> personagens iniciam com 10 PA; armaduras tiram PA (começando em 1 e subindo), indicam
> quais regiões cobrem, redutor de dano só na região coberta, e a penalidade de PA é
> permanente enquanto usa (sai a partir do próximo turno se remove/estraga). Revisar o
> custo de todas as ações. [+ respostas D1–D9, com piso 3 PA e fadiga até 50.]

## O que foi feito

Seguindo o protocolo de análise de impacto: primeiro um inventário completo de todos os
custos de PA e dependências (documento de análise), depois 9 decisões fechadas com o
André, e só então a aplicação:

- **PA inicial 7 → 10**; **teto de locomoção 7 m/turno**; **piso unificado em 3 PA**.
- **Ataques por peso:** leve 2, média 4, pesada 6 (desarmado 1); custo pelo peso, igual
  para distância; versátil muda só o dano com a empunhadura.
- **Fadiga:** máximo 50 (inconsciência); −1 PA a cada 5 pontos a partir de 10; teto de
  conversão = total de PA (ex.: +10 por 20 fadiga).
- **Armaduras/escudos:** redutor de PA por tipo (Leve −1, Média −2, Pesada −3),
  **cumulativo por peça**; nova coluna "Regiões cobertas" (💡 proposta: tronco + 2 braços);
  redutor de dano só na região coberta; penalidade permanente que sai no próximo turno.
- Ecos ajustados (exemplo do Kenji, PA inicial na progressão, piso na saúde) e a
  contradição "redutor em todos os membros" corrigida.

## Decisões tomadas

Todas do André (D1–D9 no documento de decisão). Escopo desta sessão: **núcleo**. As
habilidades de custo fixo e a modelagem completa das armaduras por peça ficaram em fila.

## Pendências criadas

- Playtest para validar os números do rebalanceamento.
- Habilidades de custo fixo de PA — rebalancear proporcionalmente (fila).
- Armaduras — revisar regiões cobertas e criar peças de outras regiões; revisar redutores
  de dano por peça.

## Observações

O piso de 3 PA e o acúmulo de redutores por peça são o que mantém o trade-off
defesa × mobilidade agora que o redutor de PA foi desacoplado do redutor de dano.
