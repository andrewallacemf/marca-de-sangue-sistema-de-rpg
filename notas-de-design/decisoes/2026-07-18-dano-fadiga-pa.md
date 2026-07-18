---
data: 2026-07-18
tipo: decisao
status: aprovada
tema: [dano, fadiga, pontos-de-acao]
decidido-por: andre
---

# Reconciliação: dano superficial → fadiga → PA

## Contexto

Havia **duas** regras reduzindo `PA` por dano/desgaste, que se sobrepunham:

1. **Saúde:** "a cada 10 pontos de dano total na ficha, −1 `PA`" (contava dano total: superficial + profundo + permanente).
2. **Fadiga:** −1 `PA` a cada 5 pontos de fadiga a partir de 10 (50 = inconsciente).

Ao automatizar a ficha, ficou claro o risco de **dupla contagem** e a falta de um elo entre "tomar dano" e "acumular fadiga".

## Decisão

- **Dano superficial gera fadiga:** cada ponto de **dano superficial** recebido gera **1 ponto de fadiga**.
- **A perda de `PA` por dano passa a vir pela fadiga.** A regra separada "a cada 10 de dano total, −1 `PA`" foi **removida** (substituída pelo encadeamento dano → fadiga → `PA`).
- **Profundo e permanente não geram fadiga** — suas consequências continuam sendo incapacitação (10 profundo) e invalidação (10 permanente), com as penalidades já descritas.
- **Remoção manual:** curar o dano **não** remove a fadiga já gerada; fadiga só zera com descanso (regra vigente).

## Impacto (balanceamento)

- O `PA` agora cai **mais rápido** com dano superficial do que na regra antiga: antes era −1 `PA` a cada 10 de dano total; agora, via fadiga, é **−1 `PA` a cada 5 de dano superficial** (a partir de 10 de fadiga). Combates ficam mais punitivos conforme o personagem apanha — a fadiga também sobe por reações e uso voluntário, então o teto de 50 (inconsciência) fica mais próximo.
- **Profundo/permanente** deixam de reduzir `PA` diretamente (só incapacitam o membro). Antes, contribuíam para o "dano total".
- **A revisar no playtest:** se a queda de `PA` ficar dura demais, opções são elevar o limiar (ex.: −1 a cada 8 de fadiga) ou fazer o dano superficial gerar fadiga a cada 2 pontos.

## Aplicação

- **Manual:** `conceitos/08-fadiga.md` (ganho de fadiga por dano superficial) e `conflitos/03-saude-e-protecao.md` (remoção da regra separada).
- **Ficha interativa:** dano superficial marcado soma fadiga automaticamente; o campo de `PA` "Red. por dano" foi renomeado para **"Red. fadiga"** e passou a ser calculado a partir da fadiga acumulada.
