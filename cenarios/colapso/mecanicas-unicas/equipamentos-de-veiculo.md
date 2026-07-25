---
titulo: "Equipamentos de veículo (Colapso)"
tipo: regra
cenario: colapso
status: rascunho
tags: [colapso, veiculos, equipamentos, sucata, mecanica-unica]
atualizado-em: 2026-07-25
---

# Equipamentos de veículo

Peças que se instalam no [veículo](veiculos.md) ocupando **espaços**. **Ativos** exigem ação/PA;
**passivos** valem sempre. Todos têm integridade/durabilidade própria.

**Instalar:** precisa de espaço vazio; declara-se os PA a investir + **Teste Mental**; os PA de
instalação **acumulam entre turnos** (falhar não perde o acumulado). Em movimento, quem não é o
piloto instala **com desvantagem** (o traço *Mão na roda* anula). **Remover:** Teste Físico,
**5 PA**, quebra o item (o traço *Cuidadoso* evita).

O campo **Cobertura** indica se estar naquele ponto **mantém** a meia cobertura do veículo (**Sim**) ou **expõe** o personagem enquanto ele opera o equipamento (**Não**) — ver [Cobertura do tripulante](veiculos.md#cobertura-do-tripulante).

## Equipamentos ativos

| Equipamento | Atrib. | Durab. | PA de uso | Instalar | Cobertura | Efeito |
|---|---|---|---|---|---|---|
| **Âncora** | Físico | 5 | 2 (lançar/recolher) + 1 por −10 m/t | 8 PA | Não | Freia 10 m/t por PA (teste físico). Requer ≥1 braço; se não recolher no turno, Teste Ágil (falha = para). |
| **Aparato para invasão** | Ágil | 5 | 3 | 8 PA | Não | Invasão/Embarque em movimento **sem risco de queda** na falha; +alcance (até 20 m / 1 bloco). Não pode ser o piloto. |
| **Buzina** | Social | 5 | 2 | 5 PA | Sim | Teste Social forçado no piloto adversário; se ele falhar, **−10 m/t**. |
| **Gancho** | Mental | 5 | 4 (atirar) / 1 (recolher) | 12 PA | Sim | Prende-se a veículo/objeto (alcance 30 m); parado, guincha veículos de categoria ≤. |
| **Suporte para arma montada** | Ágil | 5 | 3 + PA da arma | 10 PA | Não | +30 m de alcance para projétil/arremesso leve. |
| **Suspensão hidráulica** | Ágil | 5 | 5 | 10 PA | Sim | Pula 1 bloco para evitar obstáculo (requer deslocamento ≥2 blocos depois). |

## Equipamentos passivos

| Equipamento | Integridade | Instalar | Cobertura | Efeito |
|---|---|---|---|---|
| **Bagageiro** | 5 | 6 PA | Sim | Carrega o dobro de um armazenamento comum. |
| **Escudos** | 10 (não conserta) | 5 PA | Sim | Absorve dano em qualquer parte; ao zerar, o excedente vai a parte aleatória. **Também concede meia cobertura a quem opera uma estação exposta** (suporte de arma montada, âncora etc.). |
| **Escudos para motor** | 5 (não conserta) | 5 PA | Sim | Absorve dano no motor (de ataques/colisões que você causa). |
| **Espinhos** | 5 (não conserta) | 7 PA | Sim | Ao colidir/entrar no mesmo espaço, causa **2 de dano** em local aleatório do outro. |
| **Estrepes** | 3 (não conserta) | — (4 PA p/ arremessar) | Sim | Linha de 3 blocos; quem passa por cima ganha *Pneu furado*. Arremessa até 2 blocos. |
| **Exaustor** | 5 | 11 PA | Sim | Hélices que sopram/repelem fumaça ou tempestade de areia. *(descrição incompleta no original)* |

## Fabricação (fora de combate)

Pode exigir vários testes; a falha destrói as sucatas.

| Item | Requisitos |
|---|---|
| Âncora | 10 comuns · T. Físico · T. Ágil |
| Aparato para invasão | 8 comuns · T. Ágil · T. Social |
| Bagageiro | 5 comuns · T. Físico |
| Buzina | 2 eletrônicas · T. Social · T. Mental |
| Gancho | 6 comuns · T. Mental · T. Físico |
| Escudos | 5 comuns · T. Mental |
| Escudos para motor | 5 comuns · T. Mental |
| Espinhos | 5 comuns · T. Social |
| Estrepes | 3 comuns · T. Físico |
| Exaustor | 4 comuns + 2 eletrônicas · T. Mental · T. Ágil |
| Suporte p/ arma montada | 7 comuns · T. Físico |
| Suspensão hidráulica | 3 eletrônicas + 4 comuns · T. Físico · T. Mental |

> Itens de apoio (Caixa de Ferramentas, Caixa de Sabotagem) estão em [itens](../itens/README.md).
