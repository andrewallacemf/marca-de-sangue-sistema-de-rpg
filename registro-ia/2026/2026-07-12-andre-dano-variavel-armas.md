---
data: 2026-07-12
pessoa: andre
ferramenta: claude-cowork
objetivo: converter o dano das armas de valores fixos para dados (executar a decisão de 11/07)
arquivos-alterados:
  - notas-de-design/decisoes/2026-07-12-dano-variavel-armas.md (novo)
  - sistema-base/listas/equipamentos-base.md (armas corpo a corpo + munições convertidas)
  - INDICE.md, PENDENCIAS.md
---

# Sessão: dano das armas em dados

## Prompts dados

> Vamos começar olhando os valores de dano das armas e, depois, a gente olha para os
> valores dos redutores de dano das armaduras. A gente chegou a trocar os valores de dano
> das armas de valores absolutos por dados específicos?

Resposta: a decisão de voltar para dados foi tomada em 11/07 mas **não tinha sido
aplicada** — os valores seguiam absolutos. Diretrizes afinadas nesta sessão:

1. Arredondar o dano para o máximo de um dado padrão, para cima (3→d4, 5→d6, 7→d8, 8→d8,
   10→d10).
2. Cortante/perfurante = 1 dado; contundente = 2 dados (pode somar dados diferentes,
   ex.: 1d4+1d6).
3. Versátil = um dado por empunhadura (4/7 → 1d4 / 1d8); desarmado (1) e dano ≤2 ficam fixos.

## O que foi feito

- Diretrizes registradas em `notas-de-design/decisoes/2026-07-12-dano-variavel-armas.md`
  (tabela de conversão determinística).
- **Tabela de armas corpo a corpo** e **munições** convertidas para dados (💡 proposta,
  a revisar arma por arma). Armas de distância não têm dano próprio (vem da munição).
- Casos mistos (contundente + cortante/perfurante) marcados com ⚠️ para o grupo decidir
  entre 2 dados (contundente) ou 1 dado (lâmina).

## Decisões tomadas

Do André: as 3 diretrizes de conversão. A conversão em si é proposta da IA, para revisão.

## Pendências criadas

- Revisar a conversão arma por arma (mistas ⚠️; "Mangual pesado…").
- Habilidades de "metade do dano da arma" — definir arredondamento com dados.
- (XP segue aguardando playtest.)

## Próximo passo combinado

Depois desta, olhar os **redutores de dano das armaduras** (o André pediu na abertura).
