---
data: 2026-07-12
pessoa: andre
ferramenta: claude-cowork
objetivo: substituir a conversão dano-a-dano por uma matriz generativa tamanho × tipo; resolver as armas mistas
arquivos-alterados:
  - notas-de-design/decisoes/2026-07-12-dano-variavel-armas.md (reescrita como matriz)
  - sistema-base/listas/equipamentos-base.md (seção da matriz + coluna de dano por ela; nota de versátil)
  - INDICE.md, PENDENCIAS.md
---

# Sessão: matriz de dano das armas (tamanho × tipo)

## Prompts dados

> Para armas mistas o dano deve ser baseado no tamanho (leve/média/pesada) + o tipo
> (contundente/cortante/etc), com um dado padrão para cada, de forma que mesmo armas não
> tabeladas possam ser aferidas pela regra.
>
> Matriz do André: cortante — leve 1d4, média 1d8, pesada 1d12; perfurante — leve 1d4,
> média 1d6, pesada 1d8; contundente — leve 1d4, média 2d4, pesada 3d4. Só armas médias
> podem ser versáteis; versátil ganha +1d4 a duas mãos.
>
> Sobre armas com mais de um tipo: "o que determina o dano é como o personagem usa a arma
> — se usar a espada pra cortar, usa o dado cortante; se der um stab, usa o perfurante."

## O que foi feito

- A decisão de dano foi **reescrita como matriz generativa** (tamanho × tipo), publicada
  como regra oficial no `equipamentos-base.md` (seção "Dano por tamanho e tipo") e na
  nota de decisão.
- **Toda a tabela de armas corpo a corpo** teve o dano regenerado pela matriz. Armas de
  mais de um tipo listam o dado de cada tipo lado a lado (ex.: espada longa
  `1d8 CORT. · 1d6 PERF.`) — o atacante escolhe no golpe, conforme o André confirmou.
- **Versátil** redefinida: exclusiva de médias, **+1d4 a duas mãos** (antes eram dois
  valores ✋/🤲). Notas do topo do arquivo alinhadas.

## Decisões tomadas

Todas do André (a matriz e a regra das mistas). A regra das mistas ("o uso define o
tipo") validou a implementação.

## Pendências criadas

- Revisar arma por arma no playtest; casos ⚠️: lança montada (10 → 1d8), "Mangual
  pesado…" (nome contundente sem `CONT.`), dano dos improvisados por tamanho.

## Observações

A matriz torna o dano 100% derivável — a coluna de dano da tabela é agora uma conveniência
de consulta, sempre reconstituível a partir de tamanho + tipo (+versátil).
