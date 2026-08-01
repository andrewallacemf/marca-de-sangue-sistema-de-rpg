---
titulo: "Sucata (Colapso)"
tipo: regra
cenario: colapso
status: rascunho
tags: [colapso, sucata, recurso, reparo, fabricacao, mecanica-unica]
atualizado-em: 2026-08-01
---

# Sucata

A **sucata** é a matéria-prima do ermo. Trinta anos depois do Colapso não se fabrica nada do zero:
tudo que se conserta, se conserta com o que sobrou do mundo antigo. É o recurso que sustenta os
veículos, os equipamentos e boa parte da economia das comunidades.

Mecanicamente, a sucata é **a forma que o Colapso dá às
[peças de reposição](../../../modulos/veiculos/README.md#peças-de-reposição--o-insumo-de-reparo)**
do [módulo de veículos](../../../modulos/veiculos/README.md). O módulo diz *quantas* peças cada
reparo consome; este arquivo diz **o que são essas peças neste mundo, onde se acham e como se
convertem**.

## Os três tipos

| Tipo | O que é | Peça do módulo |
|---|---|---|
| **Sucata comum** | Chapa, parafuso, correia, arame, tudo que se arranca de uma carcaça | **Peça comum** |
| **Sucata eletrônica** | Placa, fiação, sensor, bateria — o que ainda guarda alguma inteligência do mundo antigo | **Peça especializada** |
| **Sucata radioativa** | Material contaminado, denso de energia; raro e perigoso de carregar | *(não tem equivalente no módulo — ver abaixo)* |

**Consequência prática:** onde o módulo de veículos pedir *peças comuns*, leia **sucata comum**;
onde pedir *peças especializadas*, leia **sucata eletrônica**. Nada mais muda.

| Ação do módulo | No Colapso, custa |
|---|---|
| [*Reparar integridade*](../../../modulos/veiculos/README.md#ações-de-veículo) no motor | **5 sucatas comuns** + Teste Mental |
| [*Reparo especializado*](../../../modulos/veiculos/README.md#ações-de-veículo) | **2 sucatas eletrônicas** + Teste Mental |
| Habilidade [*Mecânica*](../../../modulos/veiculos/listas/lista-de-habilidades.md#mental) | **1 sucata eletrônica** por efeito removido |
| [Fabricação de equipamento](../../../modulos/veiculos/listas/lista-de-equipamentos.md#fabricação-fora-de-combate) | a quantidade da tabela, no tipo correspondente |

## Procurar sucata

Ação própria do cenário, que se soma às
[ações de veículo](../../../modulos/veiculos/README.md#ações-de-veículo) do módulo.

| Ação | Custo | Efeito |
|---|---|---|
| **Procurar sucata** | Teste Mental. Em batalha: **1 PA** + **1 PA por sucata recolhida** | Coleta sucata do terreno. |

> ⚠️ A DEFINIR (Gabriel): **quanto** se acha e **onde**. A regra descreve como se procura, mas nunca
> disse quantas sucatas um sucesso rende, se o tipo encontrado depende do terreno (ferro-velho,
> cidade morta, zona radioativa) nem se há limite por região. Sem isso, a economia inteira do
> Colapso fica na mão do narrador.

## Converter sucata

O traço **[Serralheiro e soldador](tracos-do-cenario.md)** permite trocar um tipo por outro (em
batalha, 2 `PA` por conversão):

| De | Para |
|---|---|
| 3 sucatas comuns | 1 eletrônica |
| 3 sucatas eletrônicas | 1 radioativa |
| 1 sucata radioativa | 3 eletrônicas **ou** 9 comuns |

## O problema da sucata radioativa

A sucata radioativa é o topo da cadeia — 9 sucatas comuns de valor — mas **nada no material a
consome**: nenhum reparo, nenhuma fabricação e nenhuma habilidade pedem sucata radioativa. Hoje ela
só existe como moeda de troca dentro da própria tabela de conversão.

> ⚠️ A DEFINIR (Gabriel): dar um uso real à sucata radioativa. Caminhos possíveis, todos coerentes
> com o cenário: combustível de alta potência, matéria-prima de equipamento militar pré-Colapso,
> insumo para induzir [mutações](mutacoes.md), ou moeda das comunidades que dominam a
> [radiação](radiacao.md). Enquanto isso não for decidido, o traço *Serralheiro e soldador* tem um
> degrau inútil.

## Traços ligados à sucata

Ficam na [lista de traços do cenário](tracos-do-cenario.md):

- **Catador** — a cada 3 sucatas do mesmo tipo em *Procurar sucata*, encontra +1.
- **Serralheiro e soldador** — a conversão descrita acima.

## Itens

Os itens de apoio ao reparo (Caixa de ferramentas, Caixa de sabotagem) **subiram para o módulo** e
estão na [lista de equipamentos](../../../modulos/veiculos/listas/lista-de-equipamentos.md#itens-de-apoio).
Os itens próprios do ermo seguem em [itens](../itens/README.md).

<!-- bastidor:inicio -->
## Estado desta página

Criada em 01/08/2026, na sessão que extraiu o módulo `veiculos`. Antes disso, a sucata estava
espalhada em três lugares — uma linha na tabela de ações de `veiculos.md`, um parágrafo em
`itens/README.md` e dois traços em `tracos-do-cenario.md` — sem nenhum ponto que a descrevesse por
inteiro. O conteúdo é o mesmo; o que mudou foi ter um lugar só.
<!-- bastidor:fim -->
