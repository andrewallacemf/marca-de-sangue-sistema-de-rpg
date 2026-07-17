---
data: 2026-07-17
pessoa: andre
ferramenta: claude-cowork
objetivo: alterar a experiência inicial do personagem de 8 para 15 exp.
arquivos-alterados:
  - sistema-base/progressao/01-experiencia-e-evolucao.md
  - sistema-base/criacao-de-personagem/01-passo-a-passo.md
  - INDICE.md
  - notas-de-design/decisoes/2026-07-17-exp-inicial-personagem.md
---

# Sessão: experiência inicial 8 → 15

## Prompts dados

> Um personagem de nível inicial não deve ter 8 pontos de exp para distribuir, deve ter
> 15 pontos de exp. Isso já tinha sido acordado entre todos e eu esqueci de fazer essa
> alteração.

## O que foi feito

- Análise de impacto via INDICE: mapeadas as ocorrências do valor inicial (recomendação
  em `progressao/01`, passo 2.3 em `criacao-de-personagem/01`, e a menção no INDICE).
- Alteração de **8 → 15 exp.** nos três pontos.
- Confirmado que os "`8 exp.`" de `tracos-base.md` são custos de traços (Corredor etc.),
  sem relação — não alterados.
- Datas de `atualizado-em` dos dois arquivos de regra ajustadas para 2026-07-17.
- Registro de decisão criado.

## Decisões tomadas

Experiência inicial recomendada = **15 exp.** (decisão já acordada pelo grupo).

## Pendências criadas

Nenhuma. Impacta a ficha "de iniciantes" do playtest, que passa a usar 15 exp.

## Observações

Feito antes de gerar o PDF do manual base e as fichas do playtest, para que ambos já
saiam com o valor correto.
