---
titulo: Lista de equipamentos de veículo
tipo: regra
cenario: modulo
modulo: veiculos
status: rascunho
tags: [modulo, veiculos, equipamentos, fabricacao, listas]
atualizado-em: 2026-08-15
---

# Lista de equipamentos de veículo

Peças que se instalam no [veículo](../README.md) ocupando **slots** (ver a
[lista de veículos](lista-de-veiculos.md)). **Ativos** exigem ação e `PA` para funcionar;
**passivos** valem sempre. Cada equipamento instalado ocupa **1 slot**, salvo indicação contrária,
e possui integridade própria. Com integridade 0, deixa de funcionar; dano excedente não passa ao
veículo, exceto quando o próprio equipamento disser que absorve dano.

## Instalar e remover

- **Instalar:** precisa de slot livre. Os `PA` da coluna **acumulam entre turnos**. Ao completar o
  custo, faça um **Teste Mental**. A falha preserva o progresso; cada nova tentativa custa `1 PA`.
  Em movimento, quem não é o piloto testa com **desvantagem**.
- **Remover:** duas formas —
  - *Arrancar*: Teste Físico, **5 PA**, **quebra o item**;
  - *Remover com cuidado*: Teste Mental + **1 hora de jogo por ponto de integridade** do item.
- **Reparar:** use *Reparar integridade*: **5 PA + 1 peça comum** recuperam `1d4`. Equipamentos
  marcados como **não reparáveis** precisam ser substituídos.

O campo **Cobertura** indica se estar naquele posto **mantém** a meia cobertura do veículo
(**Sim**) ou **expõe** o personagem enquanto ele opera o equipamento (**Não**) — ver
[Cobertura do tripulante](../README.md#cobertura-do-tripulante).

## Equipamentos ativos

| Equipamento | Atrib. | Integridade | `PA` de uso | Instalar | Cobertura | Efeito |
|---|---|:--:|---|:--:|:--:|---|
| **Âncora** | Físico | 5 | 2 (lançar ou recolher) + 1 por −10 m/t | 8 PA | Não | Após lançar, cada `1 PA` adicional reduz 10 m/t (Teste Físico). Requer ≥1 braço; se não recolher no turno, Teste Ágil (a falha para o veículo). |
| **Aparato para invasão** | Ágil | 5 | 3 | 8 PA | Não | Substitui o custo de Invasão ou Embarque, amplia o alcance para 20 m e elimina o risco de queda na falha. Não pode ser operado pelo piloto. |
| **Buzina** | Social | 5 | 2 | 5 PA | Sim | Teste Social contra o piloto adversário; no sucesso, ele perde 10 m/t. Só pode afetar o mesmo alvo uma vez por rodada. |
| **Gancho** | Mental | 5 | 4 (atirar) / 1 (recolher) | 12 PA | Sim | Teste Mental para prender veículo ou objeto a até 30 m. Com o cabo esticado, o alvo só aumenta a distância vencendo um Teste Físico contra quem opera o gancho. Parado, guincha veículo de categoria igual ou menor. |
| **Suporte para arma montada** | Ágil | 5 | 3 + `PA` da arma | 10 PA | Não | **+30 m** de alcance para projétil ou arremesso leve. |
| **Suspensão hidráulica** | Ágil | 5 | 5 | 10 PA | Sim | Salta 1 espaço para evitar obstáculo e exige velocidade de pelo menos 20 m/t após a ativação. |

## Equipamentos passivos

| Equipamento | Integridade | Instalar | Cobertura | Efeito |
|---|:--:|:--:|:--:|---|
| **Compartimento de carga** | 5 | 6 PA | Sim | Concede 2 espaços de carga; cada um comporta carga equivalente ao espaço de um ocupante. |
| **Escudos** | 10 (não conserta) | 5 PA | Sim | Absorve dano em qualquer parte; ao zerar, o excedente vai a parte aleatória. **Também concede meia cobertura a quem opera um posto exposto** (suporte de arma montada, âncora etc.). |
| **Proteção do propulsor** | 5 (não conserta) | 5 PA | Sim | Absorve dano no propulsor vindo de ataques e colisões. |
| **Espinhos** | 5 (não conserta) | 7 PA | Sim | Ao colidir ou entrar no mesmo espaço, causa **2 de dano** em local aleatório do outro veículo. |
| **Exaustor** | 5 | 11 PA | Sim | Hélices que sopram e repelem fumaça: o veículo ignora *Visibilidade obstruída* causada por fumaça ou fenômeno de ar enquanto o exaustor estiver íntegro. |

> Os equipamentos marcados **(não conserta)** têm integridade que **não se recupera** por *Reparar
> integridade* nem por *Reparo especializado*: gastou, gastou. Substituir exige remover o item
> quebrado e instalar outro.

## Itens de apoio

Não são equipamentos instalados no veículo — são itens que o personagem carrega.

| Item | Durab. | Efeito |
|---|:--:|---|
| **Caixa de ferramentas** | 5 | Reduz 1 `PA` nas ações *Instalar equipamento* e *Remover equipamento com cuidado*; perde 1 de integridade por uso. |
| **Caixa de sabotagem** | 5 | Reduz 1 `PA` na habilidade [*Sabotar*](lista-de-habilidades.md#mental); perde 1 de integridade por uso. |
| **Estrepes** | 1 uso | Por `4 PA`, arremesse a até 2 espaços e forme uma linha de 3 espaços; quem passa recebe *Locomoção comprometida*. O item é consumido. |

## Fabricação (fora de combate)

Fabricar um equipamento exige **todos os testes da tabela** e
**[peças de reposição](../README.md#peças-de-reposição--o-insumo-de-reparo)**. As peças são pagas
antes dos testes. Uma falha consome **metade de cada tipo de peça**, arredondada para cima; o
restante pode ser reaproveitado.

Cada teste representa um período de trabalho fora de conflito. O cenário define se esse período
dura horas ou dias, conforme sua tecnologia.

O módulo fixa **quantas** peças e **quais** testes; **o cenário declara o que são as peças** (no
Colapso, [sucata](../../../cenarios/colapso/mecanicas-unicas/sucata.md)).

| Item | Peças comuns | Peças especializadas | Testes |
|---|:--:|:--:|---|
| **Âncora** | 10 | — | Físico · Ágil |
| **Aparato para invasão** | 8 | — | Ágil · Mental |
| **Compartimento de carga** | 5 | — | Físico |
| **Buzina** | — | 2 | Mental |
| **Caixa de ferramentas** | 4 | — | Mental |
| **Caixa de sabotagem** | 2 | 1 | Mental · Ágil |
| **Escudos** | 5 | — | Mental |
| **Proteção do propulsor** | 5 | — | Mental |
| **Espinhos** | 5 | — | Físico |
| **Estrepes** | 3 | — | Físico |
| **Exaustor** | 4 | 2 | Mental · Ágil |
| **Gancho** | 6 | — | Mental · Físico |
| **Suporte para arma montada** | 7 | — | Físico |
| **Suspensão hidráulica** | 4 | 3 | Físico · Mental |

O módulo não fixa preços em dinheiro. Cada cenário define moeda, disponibilidade e valor de compra
dos equipamentos prontos; as peças e os testes acima são a medida comum de complexidade entre
cenários.
