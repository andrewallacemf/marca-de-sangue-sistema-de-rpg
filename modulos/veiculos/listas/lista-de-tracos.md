---
titulo: Lista de traços de veículo
tipo: regra
cenario: modulo
modulo: veiculos
status: estavel
tags: [modulo, veiculos, tracos, listas]
atualizado-em: 2026-08-15
---

# Lista de traços de veículo

Os traços do [módulo de veículos](../README.md). Traços são **passivos, não consumíveis e não têm
níveis** (ver [traços](../../../sistema-base/conceitos/06-tracos.md)): uma vez comprados, valem
enquanto seus requisitos se mantiverem.

**Sobre a moeda de `exp.`:** todos os traços desta lista são características de veículo. Se a mesa
usa a [Experiência de Veículos](../README.md#experiência-de-veículos-opcional), eles **só** se
compram com ela; se não usa, compram-se com `exp.` comum, pelos mesmos preços.

| Traço | Atrib. | `exp.` | Efeito |
|-------|--------|:--:|------|
| **Estacionamento preciso** | Mental | 2 | Com o veículo parado, pode compartilhar o espaço de um obstáculo fixo ou construção quando o narrador confirmar que existe espaço físico para isso. Não atravessa o obstáculo nem recebe imunidade a dano. |
| **Controles adaptados** | Físico | 3 | Ao comprar, escolha um membro normalmente necessário para pilotar o veículo. Ignora as penalidades de pilotagem causadas por esse membro estar desabilitado ou ausente, mas não realiza com ele outras ações fisicamente impossíveis. |
| **Condução todo-terreno** | Ágil | 4 | Recebe uma vantagem nos testes de veículo causados por terreno difícil apropriado à Locomoção do veículo. Não permite atravessar terreno impossível. |
| **Desmontagem cuidadosa** | Físico | 5 | Ao ter sucesso em *Arrancar equipamento*, remove o equipamento sem quebrá-lo. Requer ao menos um braço habilitado. |
| **Direção defensiva** | Ágil | 2 | Recebe uma vantagem no teste de *ocupar o mesmo espaço com cuidado*. |
| **Entrada protegida** | Social | 4 | Uma vez por rodada, depois de uma Invasão ou Embarque bem-sucedido, ganha uma guarda levantada. |
| **Reparo minucioso** | Mental | 4 | Um sucesso em *Reparar integridade* ou *Reparação avançada* recupera +1 de Integridade; o excedente pode ir para outra parte. |
| **Manobrista** | Ágil | 3 | A até 20 m/t, uma *Manobra segura* pode girar até três pontos de orientação em vez de dois, sem aumentar o custo. |
| **Trabalho em movimento** | Mental | 4 | Anula a desvantagem de reparar ou instalar equipamento enquanto o veículo se move. Requer ao menos um braço habilitado. |
| **Consumo econômico** | Mental | 3 | Fora de conflito, reduz à metade o consumo do recurso de propulsão, arredondado para cima. |
| **Reaproveitador** | Mental | 3 | Cada reparo consome uma peça a menos de um dos tipos exigidos, com mínimo de uma peça. Não reduz o custo de fabricação. |

## Vocabulário de cenário

Um cenário pode renomear estes traços sem duplicá-los no catálogo. Em um cenário automobilístico,
por exemplo, *Controles adaptados* pode ser chamado de **Câmbio automático**, *Condução
todo-terreno*, de **Controle de embreagem**, e *Consumo econômico*, de **Pitstop**.
