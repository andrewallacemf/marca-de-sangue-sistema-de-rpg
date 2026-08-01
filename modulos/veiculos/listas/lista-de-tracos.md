---
titulo: Lista de traços de veículo
tipo: regra
cenario: modulo
modulo: veiculos
status: rascunho
tags: [modulo, veiculos, tracos, listas]
atualizado-em: 2026-08-01
---

# Lista de traços de veículo

Os traços do [módulo de veículos](../README.md). Traços são **passivos e não consumíveis** (ver
[traços](../../../sistema-base/conceitos/06-tracos.md)): uma vez comprados, valem enquanto os
requisitos se mantiverem.

**Sobre a moeda de `exp.`:** todos os traços desta lista são características de veículo. Se a mesa
usa a [Experiência de Veículos](../README.md#experiência-de-veículos-opcional), eles **só** se
compram com ela; se não usa, compram-se com `exp.` comum, pelos mesmos preços.

| Traço | Atrib. | `exp.` | Efeito |
|-------|--------|:--:|------|
| **Baliza** | Mental | 3 | Estaciona no mesmo espaço de obstáculos fixos ou construções, e fica protegido de dano enquanto desocupado. Requer veículo parado. |
| **Câmbio automático** | Físico | 3 | Dirige mesmo com uma perna inexistente ou inabilitada. |
| **Controle de embreagem** | Ágil | 8 | Ignora terreno difícil. |
| **Cuidadoso** | Físico | 5 | *Arrancar equipamento* sem quebrá-lo e mantendo-o no veículo. Requer ≥1 braço. |
| **Direção defensiva** | Físico | 2 | Sucesso automático em *ocupar com cuidado*. Requer ser o piloto. |
| **Elemento surpresa** | Social | 7 | Ganha 3 Guardas Levantadas ao fim de um turno de invasão ou embarque bem-sucedido. |
| **Lanternagem** | Mental | 5 | Sucesso em *Reparar integridade* ou *Mecatrônica* recupera **+1** ponto no local; o excedente vai a outra parte. |
| **Manobrista** | Ágil | 3 | Elimina o Teste Ágil para pilotar em espaço até metade ocupado por obstáculo. Requer ≥1 braço. |
| **Mão na roda** | Mental | 6 | Anula as desvantagens de reparar e instalar em veículo em movimento. Requer ≥1 braço. |
| **Pitstop** | Mental | 3 | Reduz pela metade o combustível gasto em viagens fora de batalha. |

> ⚠️ A DEFINIR: o material Alpha trazia versões divergentes de alguns traços (ex.: **Controle de
> embreagem** a `6 exp.`). Prevaleceu a versão do material principal; conferir na revisão.

> 📝 **Faltam traços de reparo com peças.** Nenhum traço desta lista interage com as
> [peças de reposição](../README.md#peças-de-reposição--o-insumo-de-reparo) — no material original,
> esse papel era ocupado por dois traços de sucata (*Catador* e *Serralheiro e soldador*) que são
> específicos do Colapso e **ficaram lá**. Um traço genérico de "gastar menos peças" ou "aproveitar
> peças de um veículo destruído" faria falta aqui; fica como sugestão para quando o módulo for
> revisado.
