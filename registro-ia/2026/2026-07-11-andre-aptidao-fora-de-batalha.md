---
data: 2026-07-11
pessoa: andre
ferramenta: claude-cowork
objetivo: redefinir a aptidão fora de batalha (fim do sucesso automático) e resolver a fila de habilidades
arquivos-alterados:
  - sistema-base/conceitos/04-aptidoes.md
  - sistema-base/conceitos/05-habilidades.md
  - sistema-base/conceitos/00-indice.md
  - notas-de-design/decisoes/2026-07-11-ajustes-pos-lote-1.md (decisão nº 4)
  - PENDENCIAS.md
---

# Sessão: aptidão fora de batalha e fila de habilidades

## Prompts dados

> Em vez de remover a frase, vale simplesmente repaginar a redação para dizer que, após
> a execução de cada habilidade, se houver necessidade de jogar os dados, os envolvidos
> podem escolher utilizar aptidões para re-rolar os dados. [...] Antes de aplicar,
> verifique se isso não entra em conflito com alguma regra já definida.

A verificação encontrou conflito com "uma aptidão por teste fora de conflito = sucesso
automático" (04-aptidoes.md). Decisão do André:

> Vamos redefinir a regra: sai a mecânica de sucesso automático por usar aptidão fora de
> batalha. Volta a valer a ideia de jogar dados para definir o resultado, e a regra de
> batalha passa a valer também para fora de batalha. Aproveite para retirar a restrição
> de usar apenas uma aptidão por teste — pode-se usar quantas desejar, contanto que
> estejam disponíveis.

## O que foi feito

- `04-aptidoes.md`: seções "dentro de conflito" e "fora de conflito" unificadas — regra
  única de re-rolagem, sem sucesso automático e sem limite; exemplo do guarda reescrito
  para a re-rolagem.
- `05-habilidades.md`: o `⚠️ A DEFINIR` da fila virou a regra final (re-rolagem após
  cada habilidade da fila; empates pela cadeia de desempate).
- Índice de conceitos ajustado; decisão registrada como nº 4 dos ajustes pós-Lote 1;
  pendência da fila removida do PENDENCIAS.

## Decisões tomadas

Pelo grupo (André): fim do sucesso automático fora de batalha; re-rolagem universal;
sem limite de aptidões por teste. Pela IA: nenhuma.

## Pendências criadas

Nenhuma. Uma removida (fila de habilidades — resolvida).

## Observações

A varredura confirmou que só 3 pontos citavam o sucesso automático; a menção em
`02-acoes-em-conflito.md` fala de habilidades (não aptidões) e permaneceu.
