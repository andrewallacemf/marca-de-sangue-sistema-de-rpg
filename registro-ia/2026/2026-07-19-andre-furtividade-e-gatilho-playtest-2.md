---
data: 2026-07-19
pessoa: andre (decisões do grupo)
ferramenta: claude-cowork
objetivo: analisar o playtest do Cenário 2 e aplicar o módulo de furtividade + revisão de gatilho
arquivos-alterados:
  - notas-de-design/playtests/2026-07-18-playtest-cenario-2.md
  - notas-de-design/pendencias-ficha-plataforma.md
  - sistema-base/conflitos/05-furtividade.md
  - sistema-base/conflitos/02-acoes-em-conflito.md
  - sistema-base/listas/tracos-base.md
  - sistema-base/listas/habilidades-base-ageis.md
  - INDICE.md
  - PENDENCIAS.md
---

# Sessão: furtividade, gatilho e teto de movimento (playtest 2)

## Prompts dados

> (Cenário 2, transcrição da noite de 18/07) André pediu a análise do playtest e depois
> detalhou as decisões: módulo de furtividade com **nível de alerta** (por inimigo) e **nível de
> alarme** (global); esconder-se como ação de `2 PA` (fora do campo de visão), com valor do dado
> de furtividade **guardado** como qualidade; percepção rolada só pelo inimigo, com adv/desv por
> cobertura + luz; desvantagem natural ao se esconder por cobertura; esconder-se como reação só
> com um traço novo; visão noturna 6/12/24 m; listas de ações que mantêm/removem furtividade.
> Confirmou: manter tudo na base por ora; gatilho de ações encadeadas (nome e regra); teto de
> movimento 7 PA (metade = 3); alerta 0–5 no d4; golpe surpresa só clarear a descrição; aplicar
> agora; não mexer em fichas/cenários agora; separar pendências de ficha/plataforma das de regra.

## O que foi feito

- **Relatório do playtest 2** (`notas-de-design/playtests/2026-07-18-playtest-cenario-2.md`) no
  mesmo formato do playtest 1.
- **Novo capítulo `conflitos/05-furtividade.md`**: campo de visão (cone/meia-lua por alerta),
  alcance de visão noturno (6/12/24 m), esconder-se (`2 PA`, valor guardado, desvantagem natural
  por cobertura, percepção do inimigo com adv/desv por cobertura+luz), nível de alerta (0–5, d4),
  nível de alarme (global), emboscada/golpe surpresa e **listas de ações que mantêm/removem** a
  furtividade.
- **Gatilho** reescrito em `conflitos/02-acoes-em-conflito.md`: condição + ação simples, `1 PA`
  de armar + `PA` da ação, "ou/ou", condição extra = `+1 PA`, e a mecânica opcional **gatilho de
  ações encadeadas** (PA por ação, "tudo ou nada", critério do narrador).
- **Teto de movimento** de `7 PA`/turno (metade = 3) em `conflitos/02` (Movimentação).
- **Novo aspecto Espreitador** (esconder-se como reação) em `listas/tracos-base.md`.
- **Golpe surpresa** com descrição/tabela mais claras em `listas/habilidades-base-ageis.md`.
- **INDICE.md** e **PENDENCIAS.md** atualizados; pendências de **ficha/plataforma** movidas para
  arquivo próprio (`notas-de-design/pendencias-ficha-plataforma.md`).

## Decisões tomadas

- Furtividade fica **no sistema-base por enquanto**; separar em módulo é pendência futura.
- Esconder-se custa **`2 PA`** e exige estar **fora do campo de visão** (habilidade específica,
  a criar, para se esconder à vista).
- **Qualidade da furtividade guardada**: rola-se uma vez e guarda o valor; só o inimigo rola
  **percepção** contra esse valor; adv/desv fica no dado do inimigo (cobertura + iluminação).
- Vantagem/desvantagem no dado do inimigo: sem cobertura de dia = inimigo com vantagem; sem
  cobertura de noite = normal; com cobertura de dia = normal; com cobertura de noite = inimigo
  com desvantagem. Desvantagem natural do próprio esconder-se: no aberto/meia cobertura sim, em
  cobertura completa não (a Técnica em Esconder-se anula).
- Esconder-se **como reação** exige o aspecto **Espreitador**.
- Visão noturna: 6 m (escuridão) / 12 m (penumbra) / 24 m (luz plena), à frente.
- **Gatilho de ações encadeadas** aprovado como mecânica opcional a critério do narrador.
- **Teto de movimento** = `7 PA`/turno; "metade da movimentação" = 3.
- **Nada aplicado a fichas/cenários** agora — será feito na próxima seção de testes.

## Pendências criadas

- Nerf da Maestria em projéteis (herdada do playtest 1).
- Separar a furtividade em módulo próprio (2º momento).
- Criar a habilidade de "esconder-se dentro do campo de visão".
- Fechar o tratamento único de minions (não usa fadiga; queda 10/20/30; presets).
- Padronizar flecha de madeira `1d4` × flecha de ferro `1d6` e alinhar fichas.
- Regerar fichas/cenários/PDFs/planilha na próxima seção de testes (com as regras vigentes).
- Backlog de ficha/plataforma consolidado em `notas-de-design/pendencias-ficha-plataforma.md`.
