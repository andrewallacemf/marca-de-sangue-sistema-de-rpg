---
titulo: "Traços do cenário (Colapso)"
tipo: regra
cenario: colapso
status: rascunho
tags: [colapso, tracos, sucata, radiacao, listas, mecanica-unica]
atualizado-em: 2026-08-09
---

# Traços do cenário

Traços são passivos e não consumíveis (ver
[traços](../../../sistema-base/conceitos/06-tracos.md)): uma vez comprados, valem enquanto os
requisitos se mantiverem.

> 🧩 **Os traços de veículo saíram daqui em 01/08/2026** e viraram a
> [lista de traços do módulo `veiculos`](../../../modulos/veiculos/listas/lista-de-tracos.md)
> (Baliza, Câmbio automático, Controle de embreagem, Cuidadoso, Direção defensiva, Elemento
> surpresa, Lanternagem, Manobrista, Mão na roda, Pitstop). O Colapso continua usando todos.

## Traços de sucata

Existem porque a [sucata](sucata.md) existe — são a assinatura mecânica do ermo.

| Traço | Atrib. | `exp.` | Efeito |
|-------|--------|:--:|------|
| **Catador** | Mental | `Jogador` 3 | A cada 3 sucatas do mesmo tipo em *Procurar sucata*, encontra +1. Requer visão desobstruída. |
| **Serralheiro e soldador** | Ágil | `Jogador` 4 | Converte sucata (em batalha, 2 `PA` por conversão): 3 comuns = 1 eletrônica; 3 eletrônicas = 1 radioativa; 1 radioativa = 3 eletrônicas ou 9 comuns. |

## Traços do ermo

Ligados ao clima e à [radiação](radiacao.md) do Colapso.

| Traço | Atrib. | `exp.` | Efeito |
|-------|--------|:--:|------|
| **Camelo** | Físico | `Jogador` 3 | Não sofre as penalidades de *Ondas de Calor Ardente*. |
| **Pele de chumbo** | Físico | `Jogador` 4 | Reduz em 1 o dano radioativo recebido (ao receber ≥2). |

## Traços gerais

| Traço | Atrib. | `exp.` | Efeito |
|-------|--------|:--:|------|
| **Cartucho expandido** | Ágil | `Jogador` 10 | Até 2 disparos de projétil ou arremesso leve no mesmo turno gastando 1 munição. |
| **Felino** | Ágil | `Jogador` 5 | Reduz 2 de dano de queda (mínimo 1). |
| **Saque rápido** | Ágil | `Jogador` 4 | Gasta só 1 `PA` para trocar entre duas armas de projétil ou arremesso leve. |

> 📝 Os três traços gerais **não têm nada de junkpunk** — funcionariam em qualquer mesa. São
> candidatos a subir para os [traços do sistema-base](../../../sistema-base/listas/tracos-base.md)
> numa revisão futura; por ora ficam aqui, onde foram escritos. Ver
> [PENDENCIAS.md](../../../PENDENCIAS.md).

> 🔧 **A RECALIBRAR (Gabriel) — resíduo do modelo antigo de dano.** Até 04/08/2026 o sistema
> tinha três faixas: **superficial → profundo → permanente**. A [decisão de
> 04/08](../../../sistema-base/conflitos/03-saude-e-protecao.md#pontos-de-vida-e-dano) aposentou a
> faixa intermediária: agora só existem **dano curável** e **dano permanente**. Em 09/08/2026 a
> nomenclatura foi normalizada em todo o Colapso, mas onde o texto usava *profundo* como **degrau de
> gravidade** a troca de palavra não basta — o valor precisa ser redefinido, porque a escada que dava
> sentido ao número não existe mais. Os pontos marcados com 🔧 são esses.
>
> Aqui o 🔧 está na versão Alpha da **Pele de chumbo**, que convertia dano permanente em *profundo*
> — ou seja, o traço não anulava o dano, só o rebaixava um degrau. Como a versão que prevaleceu é a
> do material principal, isto só vira problema se a variante Alpha for retomada na revisão: nesse
> caso, decidir para o que o permanente é rebaixado agora que só há dano curável.

> ⚠️ A DEFINIR (Gabriel): o material Alpha trazia versões divergentes de alguns traços (ex.:
> **Catador** como "1d10 de vantagem", **Pele de chumbo** convertendo dano permanente em
> profundo 🔧 (termo aposentado — ver a nota acima),
> **Camelo** a `3 exp.`). Prevaleceu a versão do material principal; conferir na revisão.
> **Olho de gato** aparecia como traço no material antigo, mas é uma
> [Mutação Cromática](mutacoes.md#mutações-cromáticas-1d100) — fica lá.
