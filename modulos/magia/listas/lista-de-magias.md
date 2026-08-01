---
titulo: "Lista de magias (módulo Magia)"
tipo: mecanica
cenario: modulo
modulo: magia
status: rascunho
tags: [modulo, magia, lista, habilidades]
atualizado-em: 2026-08-01
---

# Lista de magias

Catálogo de exemplo do [módulo Magia](../README.md) — oito magias, duas por
[atributo](../../../sistema-base/conceitos/02-atributos.md), cobrindo os três tipos de
[custo de ativação](../README.md#custo-de-ativação--três-tipos) e os dois modelos de
[progressão](../README.md#progressão-níveis--efeito-custo-ou-os-dois). Servem tanto como magias
prontas para usar quanto como referência de calibragem para criar magias novas.

> 📝 Todos os custos de `PA`, ativação e `exp.` abaixo são **proposta**, a validar no playtest —
> seguem a heurística de calibragem do [guia de design](../README.md#guia-de-design--criando-uma-magia-nova).

## Resumo

| **Magia** | **Atributo** | **Custo de `PA`** | **Custo de ativação (nível 1 → 5)** | **Custo de compra** |
| --- | --- | --- | --- | --- |
| [Punho da Montanha](#punho-da-montanha) | `Físico` | `1 PA` + arma/desarmado | `2` superficial (fixo) | `2 exp.` |
| [Pacto da Última Gota](#pacto-da-última-gota) | `Físico` | `5 PA` | `4→3→2→1` permanente → `4` profundo | `4 exp.` |
| [Passo Entre Sopros](#passo-entre-sopros) | `Ágil` | `1 PA` | `2` fadiga (fixo) | `2 exp.` |
| [Véu da Presa Rápida](#véu-da-presa-rápida) | `Ágil` | `4 PA` | `3→2→1→1` superficial → `1` fadiga | `3 exp.` |
| [Sussurro na Nuca](#sussurro-na-nuca) | `Mental` | `4 PA` | `2` superficial (fixo) | `3 exp.` |
| [Memória Roubada](#memória-roubada) | `Mental` | `1 PA` | `1` fadiga (fixo) | `1 exp.` |
| [Voz que Convence](#voz-que-convence) | `Social` | `4 PA` | `2` superficial (fixo) | `2 exp.` |
| [Grito que Ajoelha](#grito-que-ajoelha) | `Social` | `5 PA` | `3→2` profundo → `3→2→1` superficial | `4 exp.` |

## Punho da Montanha

> *O punho acerta como pedra que desaba — não é força de músculo, é peso de montanha.*

**Atributo:** `Físico` · **Custo de PA:** `1 PA` + `PA` da arma (ou desarmado) · **Custo de ativação:** `2` dano superficial (fixo em todos os níveis) · **Custo de compra:** `2 exp.`

#### Descrição

O conjurador imbui o próprio golpe (desarmado ou com arma contundente/cortante) com força
sobrenatural. Ao acertar um ataque corpo a corpo, soma dano extra ao golpe.

#### Requisitos de uso

- Ativada **antes** de um ataque corpo a corpo declarado — o custo de ativação é pago mesmo se o
  ataque errar (mesma regra de qualquer habilidade).

#### Progressão

1. `+1d6` de dano extra.
2. `+1d8` de dano extra.
3. `+1d10` de dano extra.
4. `+1d10` de dano extra; ignora metade do redutor de armadura do alvo (arredondado para baixo).
5. `+1d12` de dano extra; ignora todo o redutor de armadura leve do alvo.

## Pacto da Última Gota

> *Um pedaço de si mesmo, para sempre, em troca de um instante de força que nenhum músculo alcança.*

**Atributo:** `Físico` · **Custo de PA:** `5 PA` · **Custo de ativação:** nível 1 a 4 = `4→3→2→1` de dano **permanente**; nível 5 = `4` dano **profundo** · **Custo de compra:** `4 exp.`

#### Descrição

O conjurador queima parte da própria força vital, de forma irreversível, para desferir um golpe
muito além do que o corpo comum aguenta. No próximo ataque corpo a corpo, causa `+4d10` de dano
extra e ignora toda a redução de dano de armadura do alvo.

> 📝 É a magia-exemplo do módulo para o modelo "custo de ativação cai (e troca de tipo) por nível" —
> ver [Progressão](../README.md#progressão-níveis--efeito-custo-ou-os-dois). No nível 5 o efeito
> continua o mesmo, mas o conjurador já não paga com dano permanente — domina a técnica o
> suficiente para que o preço vire uma ferida grave, porém tratável.

#### Requisitos de uso

- Ativada **antes** de um ataque corpo a corpo declarado — o custo de ativação é pago mesmo se o
  ataque errar.
- O jogador escolhe o membro que recebe o dano; recomenda-se avisar a mesa **antes** de comprar
  esta magia, dado o preço.

#### Progressão

1. Custo `4` de dano permanente.
2. Custo `3` de dano permanente.
3. Custo `2` de dano permanente.
4. Custo `1` de dano permanente.
5. Custo `4` de dano profundo (sai do permanente).

## Passo Entre Sopros

> *Entre um sopro e o outro, o corpo já não está mais lá.*

**Atributo:** `Ágil` · **Custo de PA:** `1 PA` · **Custo de ativação:** `2` de fadiga (fixo em todos os níveis) · **Custo de compra:** `2 exp.`

#### Descrição

O conjurador se desloca instantaneamente até a distância indicada, numa linha reta que ele
consiga visualizar. O deslocamento não provoca ataque de oportunidade e ignora terreno difícil
comum (poças, entulho baixo — não paredes ou obstáculos sólidos).

#### Requisitos de uso

- Precisa conseguir ver o ponto de destino.

#### Progressão

1. Até `3` metros.
2. Até `5` metros.
3. Até `7` metros.
4. Até `9` metros.
5. Até `12` metros; uma vez por descanso, pode atravessar um obstáculo fino (uma porta fechada,
   uma parede de madeira comum) no trajeto.

## Véu da Presa Rápida

> *Os olhos do inimigo ainda estão processando o primeiro movimento quando o segundo já aconteceu.*

**Atributo:** `Ágil` · **Custo de PA:** `4 PA` · **Custo de ativação:** nível 1 a 4 = `3→2→1→1` dano superficial; nível 5 = `1` de fadiga · **Custo de compra:** `3 exp.`

#### Descrição

Até o fim do próximo turno do conjurador, todo [contrateste de esquiva](../../../sistema-base/conflitos/03-saude-e-protecao.md#defesa-e-esquiva)
que ele fizer ganha `vantagem`.

> 📝 Exemplo do modelo "custo cai, efeito fixo" — no nível 5 o custo troca de tipo (de dano
> superficial para fadiga pura), mostrando que a queda de custo pode também mudar de tier, não só
> de número.

#### Requisitos de uso

- Ativada no próprio turno do conjurador, antes de qualquer ataque sofrido.

#### Progressão

1. Custo `3` de dano superficial.
2. Custo `2` de dano superficial.
3. Custo `1` de dano superficial.
4. Custo `1` de dano superficial; o efeito dura também o turno seguinte (2 turnos completos).
5. Custo `1` de fadiga (sai do dano); efeito dura 2 turnos completos.

## Sussurro na Nuca

> *A dúvida entra como um sussurro, baixo demais para ter certeza se veio de fora ou de dentro.*

**Atributo:** `Mental` · **Custo de PA:** `4 PA` · **Custo de ativação:** `2` dano superficial (fixo em todos os níveis) · **Custo de compra:** `3 exp.`

#### Descrição

Teste de `Mental` (conjurador) contra `Mental` (alvo). Sucesso aplica **Desvantagem** no próximo
teste do alvo — mesma lógica de efeito de [Confundir inimigo](../../../sistema-base/listas/habilidades-base-mentais.md#confundir-inimigo),
com roupagem de sussurro mágico em vez de manipulação comum.

#### Requisitos de uso

- O alvo precisa estar a até `10` metros e conseguir, em tese, ouvir (não precisa ouvir de fato —
  o efeito é mais sutil que som real).

#### Progressão

1. Desvantagem no próximo teste do alvo.
2. Desvantagem nos próximos `2` testes do alvo.
3. Desvantagem nos próximos `2` testes; também retira `1 PA` do alvo no próximo turno dele.
4. Desvantagem nos próximos `3` testes do alvo.
5. Desvantagem nos próximos `3` testes; o efeito também atinge um segundo alvo adjacente ao
   primeiro.

## Memória Roubada

> *As lembranças não desaparecem — só se perdem em algum canto. Essa magia sabe onde procurar.*

**Atributo:** `Mental` · **Custo de PA:** `1 PA` · **Custo de ativação:** `1` de fadiga (fixo em todos os níveis) · **Custo de compra:** `1 exp.`

#### Descrição

Tocando um alvo disposto (ou a si mesmo), o conjurador acessa uma lembrança perdida ou um detalhe
esquecido relevante para a cena atual. Cabe ao narrador definir se a informação existe e quão
específica ela é.

#### Requisitos de uso

- Contato físico com o alvo (ou uso em si mesmo).
- Nível 1: só funciona em alvo **disposto** ou inconsciente.

#### Progressão

1. Funciona em alvo disposto ou inconsciente.
2. Funciona também em alvo relutante, com um teste `Mental` contestado.
3. Recupera lembranças mais antigas ou vagas, que o próprio alvo já tinha esquecido por completo.
4. Uma vez por cena, pode "emprestar" o uso de uma **técnica** que o alvo (disposto) possui,
   testando no lugar dele por uma ação.
5. O empréstimo de técnica (nível 4) dura até o fim da sessão, não só uma ação.

## Voz que Convence

> *Não é mentira — é a verdade que o outro já queria acreditar, só precisando de um empurrão.*

**Atributo:** `Social` · **Custo de PA:** `4 PA` · **Custo de ativação:** `2` dano superficial (fixo em todos os níveis) · **Custo de compra:** `2 exp.`

#### Descrição

Teste de `Social` (conjurador) contra `Mental` (alvo). Sucesso faz o alvo tratar um pedido
razoável do conjurador com boa vontade extra por uma cena — não força uma ação contra os próprios
interesses do alvo, apenas inclina a balança a favor do pedido.

#### Requisitos de uso

- O alvo precisa conseguir ouvir e entender o conjurador.
- Não funciona contra um pedido que o alvo considere claramente prejudicial a si mesmo.

#### Progressão

1. Boa vontade extra por uma cena.
2. A boa vontade se estende à próxima cena também.
3. Funciona mesmo se o pedido for moderadamente inconveniente ao alvo (não prejudicial).
4. Atinge até `2` alvos ao mesmo tempo, com um único teste.
5. Atinge até `3` alvos.

## Grito que Ajoelha

> *Um grito só, mas todo mundo ao redor sente o peso dele nos próprios joelhos.*

**Atributo:** `Social` · **Custo de PA:** `5 PA` · **Custo de ativação:** nível 1–2 = `3→2` dano profundo; nível 3–5 = `3→2→1` dano superficial · **Custo de compra:** `4 exp.`

#### Descrição

Todo inimigo num raio que possa ouvir o grito faz um teste de `Mental`. Quem falhar sofre
**Desvantagem** no próximo teste que fizer.

> 📝 Exemplo do modelo "custo melhora de tier dentro do curável" — começa em dano profundo (preço
> alto, precisa tratamento) e passa a superficial a partir do nível 3, sem nunca chegar a
> permanente. Contraste com [Pacto da Última Gota](#pacto-da-última-gota), que começa em permanente.

#### Requisitos de uso

- Os alvos precisam conseguir ouvir o grito.

#### Progressão

1. Custo `3` de dano profundo. Raio de `6` metros.
2. Custo `2` de dano profundo. Raio de `6` metros.
3. Custo `3` de dano superficial. Raio de `9` metros.
4. Custo `2` de dano superficial. Raio de `9` metros.
5. Custo `1` de dano superficial. Raio de `12` metros.
