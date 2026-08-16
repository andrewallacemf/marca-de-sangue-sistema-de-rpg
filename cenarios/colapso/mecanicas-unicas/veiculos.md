---
titulo: "Veículos no Colapso"
tipo: regra
cenario: colapso
status: rascunho
tags: [colapso, veiculos, conflito, sucata, mecanica-unica]
atualizado-em: 2026-08-15
---

# Veículos no Colapso

Combate e perseguição em alta velocidade são a marca do Colapso. A mecânica em si — ficha do
veículo, malha de 10 metros, ações, colisão, condições, integridade e equipamentos — mora no
**[módulo de veículos](../../../modulos/veiculos/README.md)**, que o Colapso usa por inteiro.

Esta página descreve **só o que o Colapso acrescenta ou muda** por cima do módulo.

> 📝 Até 01/08/2026 toda a mecânica de veículos vivia aqui. Ela foi promovida a módulo para poder
> ser usada por outros cenários (regra "promova quando repetir"), e o que era específico do
> junkpunk — a sucata — ficou. Ver o
> [registro da sessão](../../../registro-ia/2026/2026-08-01-daniel-modulo-veiculos.md).

## O que o Colapso acrescenta

### 1. A sucata é o insumo de reparo

O módulo trabalha com **peças de reposição** abstratas. No Colapso, essas peças são **sucata**:

| Peça do módulo | No Colapso |
|---|---|
| Peça comum | **Sucata comum** |
| Peça especializada | **Sucata eletrônica** |

A mecânica inteira — os três tipos, a ação *Procurar sucata*, a conversão entre tipos e a tabela de
quanto cada reparo custa — está em **[sucata](sucata.md)**.

### 2. Ação nova: Procurar sucata

Soma-se à [tabela de ações](../../../modulos/veiculos/README.md#ações-de-veículo) do módulo. Ver
[sucata — Procurar sucata](sucata.md#procurar-sucata).

### 3. Traços próprios do ermo

Além dos [traços do módulo](../../../modulos/veiculos/listas/lista-de-tracos.md), o Colapso tem
**Catador** e **Serralheiro e soldador**, que existem só porque a sucata existe — ver
[traços do cenário](tracos-do-cenario.md).

### 4. O exaustor também vale contra tempestade de areia

O equipamento [Exaustor](../../../modulos/veiculos/listas/lista-de-equipamentos.md#equipamentos-passivos)
protege da *Cortina de fumaça* pela regra do módulo. No Colapso ele **também** repele as
tempestades de areia do ermo — ver [clima e radiação](../lore/02-clima-e-radiacao.md).

### 5. Vocabulário mecânico do ermo

O módulo usa nomes genéricos para funcionar com qualquer tecnologia. No Colapso, a ficha e a
narração podem usar estes nomes sem alterar os efeitos:

| Regra do módulo | No Colapso |
|---|---|
| Propulsor | Motor |
| Locomoção | Rodagem |
| Preso | Atolado |
| Sistemas inoperantes | Curto-circuito |
| Consumo elevado | Vazando |
| Propulsão instável | Engasgando |
| Frenagem comprometida | No embalo |
| Direção comprometida | Sem rumo |
| Propulsão limitada | Embreagem quebrada |
| Estrutura vulnerável | Superaquecido |
| Locomoção comprometida | Pneu furado |
| Visibilidade obstruída | Cortina de fumaça |

## O que o Colapso decide

O módulo deixa duas decisões em aberto para quem o usa. As respostas do Colapso:

| Decisão do módulo | Colapso |
|---|---|
| Usar a [Aptidão Veicular](../../../modulos/veiculos/README.md#aptidão-veicular-opcional)? | **Sim.** É a aptidão do ermo — quem vive na estrada rerrola ao volante. |
| Usar a [Experiência de Veículos](../../../modulos/veiculos/README.md#experiência-de-veículos-opcional)? | **Sim.** O Colapso roda com duas moedas de `exp.`: a padrão (`Jogador`) e a de Veículos. |
| Experiência de Veículos inicial | **8 pontos**, além dos 15 pontos de `exp.` comum. |

Os 8 pontos permitem uma especialização inicial relevante sem duplicar a reserva comum completa.
Personagens que entrarem depois na campanha recebem a mesma reserva inicial, salvo decisão explícita
da mesa para personagens experientes.

## Equipamentos e listas

Tudo que era catálogo subiu para o módulo:

| O que | Onde está agora |
|---|---|
| Ficha e categorias de veículo (A–E) | [lista de veículos](../../../modulos/veiculos/listas/lista-de-veiculos.md) |
| Equipamentos ativos, passivos e fabricação | [lista de equipamentos](../../../modulos/veiculos/listas/lista-de-equipamentos.md) |
| Habilidades de veículo | [lista de habilidades](../../../modulos/veiculos/listas/lista-de-habilidades.md) |
| Traços de veículo | [lista de traços](../../../modulos/veiculos/listas/lista-de-tracos.md) |

As **armas montadas** no veículo vêm do [arsenal](../arsenal.md) do cenário, encaixadas no
equipamento *Suporte para arma montada* do módulo.

## Papéis do ermo ao volante

Os arquétipos de veículo do Colapso — Piloto, Mecânico copiloto, Combatente e Invasor — estão em
[arquétipos](../arquetipos.md#arquétipos-de-veículo). Eles são do cenário, não do módulo: por
convenção do projeto, módulos não trazem arquétipos.
