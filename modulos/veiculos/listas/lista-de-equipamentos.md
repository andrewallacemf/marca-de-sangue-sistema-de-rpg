---
titulo: Lista de equipamentos de veículo
tipo: regra
cenario: modulo
modulo: veiculos
status: rascunho
tags: [modulo, veiculos, equipamentos, fabricacao, listas]
atualizado-em: 2026-08-01
---

# Lista de equipamentos de veículo

Peças que se instalam no [veículo](../README.md) ocupando **slots** (ver a
[lista de veículos](lista-de-veiculos.md)). **Ativos** exigem ação e `PA` para funcionar;
**passivos** valem sempre. Todos têm integridade/durabilidade própria.

## Instalar e remover

- **Instalar:** precisa de slot livre. Declare quantos `PA` vai investir + **Teste Mental**; os `PA`
  de instalação **acumulam entre turnos** (falhar não perde o acumulado). Em movimento, quem não é o
  piloto instala **com desvantagem**.
- **Remover:** duas formas —
  - *Arrancar*: Teste Físico, **5 PA**, **quebra o item**;
  - *Remover com cuidado*: Teste Mental + **1 hora de jogo por ponto de integridade** do item.

O campo **Cobertura** indica se estar naquele posto **mantém** a meia cobertura do veículo
(**Sim**) ou **expõe** o personagem enquanto ele opera o equipamento (**Não**) — ver
[Cobertura do tripulante](../README.md#cobertura-do-tripulante).

## Equipamentos ativos

| Equipamento | Atrib. | Durab. | `PA` de uso | Instalar | Cobertura | Efeito |
|---|---|:--:|---|:--:|:--:|---|
| **Âncora** | Físico | 5 | 2 (lançar/recolher) + 1 por −10 m/t | 8 PA | Não | Freia 10 m/t por `PA` (Teste Físico). Requer ≥1 braço; se não recolher no turno, Teste Ágil (a falha para o veículo). |
| **Aparato para invasão** | Ágil | 5 | 3 | 8 PA | Não | Invasão/Embarque em movimento **sem risco de queda** na falha; +alcance (até 20 m / 2 espaços). Não pode ser operado pelo piloto. |
| **Buzina** | Social | 5 | 2 | 5 PA | Sim | Força um Teste Social no piloto adversário; se ele falhar, **−10 m/t**. |
| **Gancho** | Mental | 5 | 4 (atirar) / 1 (recolher) | 12 PA | Sim | Prende-se a veículo ou objeto (alcance 30 m); parado, guincha veículos de categoria ≤. |
| **Suporte para arma montada** | Ágil | 5 | 3 + `PA` da arma | 10 PA | Não | **+30 m** de alcance para projétil ou arremesso leve. |
| **Suspensão hidráulica** | Ágil | 5 | 5 | 10 PA | Sim | Salta 1 espaço para evitar obstáculo (requer deslocamento ≥2 espaços depois). |

## Equipamentos passivos

| Equipamento | Integridade | Instalar | Cobertura | Efeito |
|---|:--:|:--:|:--:|---|
| **Bagageiro** | 5 | 6 PA | Sim | Carrega o dobro de um armazenamento comum. |
| **Escudos** | 10 (não conserta) | 5 PA | Sim | Absorve dano em qualquer parte; ao zerar, o excedente vai a parte aleatória. **Também concede meia cobertura a quem opera um posto exposto** (suporte de arma montada, âncora etc.). |
| **Escudos para motor** | 5 (não conserta) | 5 PA | Sim | Absorve dano no motor vindo de ataques e de colisões que você causa. |
| **Espinhos** | 5 (não conserta) | 7 PA | Sim | Ao colidir ou entrar no mesmo espaço, causa **2 de dano** em local aleatório do outro veículo. |
| **Estrepes** | 3 (não conserta) | — (4 PA para arremessar) | Sim | Linha de 3 espaços; quem passa por cima ganha *Pneu furado*. Arremessa até 2 espaços. |
| **Exaustor** | 5 | 11 PA | Sim | Hélices que sopram e repelem fumaça: o veículo **ignora a condição *Cortina de fumaça*** enquanto o exaustor estiver íntegro. Um cenário com fenômenos de ar próprios (tempestade de areia, névoa tóxica) pode estender o efeito a eles. |

> Os equipamentos marcados **(não conserta)** têm integridade que **não se recupera** por *Reparar
> integridade* nem por *Reparo especializado*: gastou, gastou. Substituir exige remover o item
> quebrado e instalar outro.

## Itens de apoio

Não são equipamentos instalados no veículo — são itens que o personagem carrega.

| Item | Durab. | Efeito |
|---|:--:|---|
| **Caixa de ferramentas** | 5 | Reduz 1 `PA` nas ações *Instalar equipamento* e *Remover equipamento com cuidado*. |
| **Caixa de sabotagem** | 5 | Reduz 1 `PA` na habilidade [*Sabotar*](lista-de-habilidades.md#social). |

## Fabricação (fora de combate)

Fabricar um equipamento exige **os testes da tabela** e **[peças de reposição](../README.md#peças-de-reposição--o-insumo-de-reparo)**.
Pode exigir vários testes; **a falha destrói as peças**.

O módulo fixa **quantas** peças e **quais** testes; **o cenário declara o que são as peças** (no
Colapso, [sucata](../../../cenarios/colapso/mecanicas-unicas/sucata.md)).

| Item | Peças comuns | Peças especializadas | Testes |
|---|:--:|:--:|---|
| **Âncora** | 10 | — | Físico · Ágil |
| **Aparato para invasão** | 8 | — | Ágil · Social |
| **Bagageiro** | 5 | — | Físico |
| **Buzina** | — | 2 | Social · Mental |
| **Caixa de ferramentas** | 4 | — | Mental |
| **Caixa de sabotagem** | 2 | 1 | Mental · Social |
| **Escudos** | 5 | — | Mental |
| **Escudos para motor** | 5 | — | Mental |
| **Espinhos** | 5 | — | Social |
| **Estrepes** | 3 | — | Físico |
| **Exaustor** | 4 | 2 | Mental · Ágil |
| **Gancho** | 6 | — | Mental · Físico |
| **Suporte para arma montada** | 7 | — | Físico |
| **Suspensão hidráulica** | 4 | 3 | Físico · Mental |

> 💡 **Na mesa:** o teste social em *Espinhos* e em *Aparato para invasão* não é engano — fabricar
> essas peças é menos engenharia e mais intimidação estética: elas só funcionam se parecerem
> assustadoras o bastante para o inimigo desviar.

> ⚠️ A DEFINIR: um **preço em moeda** para quem prefere comprar o equipamento pronto em vez de
> fabricá-lo. O material original só previa fabricação — faz sentido num ermo sem comércio, mas um
> cenário com cidades e mercados vai precisar da coluna de preço.
