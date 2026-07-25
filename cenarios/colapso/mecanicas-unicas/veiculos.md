---
titulo: "Conflito de veículos (Colapso)"
tipo: regra
cenario: colapso
status: rascunho
tags: [colapso, veiculos, conflito, mecanica-unica]
atualizado-em: 2026-07-25
---

# Conflito de veículos

Combate e perseguição em alta velocidade são a marca do Colapso. Este sistema **adiciona** ao
[conflito físico](../../../sistema-base/conflitos/01-conflito-fisico.md) uma camada de posição
relativa, velocidade e dano ao veículo — que, como os personagens, tem "prazo de validade".
Quem gasta **[PA](../../../sistema-base/conceitos/07-pontos-de-acao.md)** é sempre o **personagem**
(o piloto); o veículo não tem PA próprio.

> 🧩 **Candidato a módulo `veiculos`.** Por ora vive no cenário (só o Colapso usa). Promover a
> [módulo](../../../modulos/README.md) quando um segundo mundo precisar (regra "promova quando
> repetir").

> ⚠️ Material original em versão **Alpha**: algumas seções vinham vazias ou com números
> divergentes. Foram reconstruídas a partir das regras espalhadas e os pontos incertos estão
> marcados como A DEFINIR.

## A ficha do veículo

Um veículo tem:

- **Velocidade** — em **metros por turno (m/t)**, sempre em múltiplos de 10. Cada casa da malha
  percorrida = 10 m/t.
- **Categoria** — **Sem motor** (bicicleta, reboque, carroça) ou **A → E** por porte/peso (A =
  menor/leve; E = maior/pesado). Define o [dano de colisão](#dano-de-colisão).
- **Integridade por partes + Motor** — cada parte e o motor têm integridade própria. Dano que
  excede uma parte transborda para o **Motor**; dano que excede o Motor é dividido entre os
  ocupantes.
- **Combustível** — em pontos, consumidos por turno de viagem (o status *Vazando* dobra o
  consumo).
- **Espaços** — assentos/lugares ocupáveis (piloto + passageiros; cada um oferece meia
  cobertura — ver [Cobertura do tripulante](#cobertura-do-tripulante)) e slots para
  [equipamentos](equipamentos-de-veiculo.md).

## Iniciativa e malha

- **Iniciativa:** a mesma do [conflito físico](../../../sistema-base/conflitos/01-conflito-fisico.md).
- **Malha:** cada espaço = **10 metros**. Recomenda-se malha **hexagonal** (mais direções);
  quadrada também serve (conte casas pelos lados, nunca pela diagonal). Alcance de armas é medido
  em metros (uma pistola de 20 m alcança 2 espaços).
- **Orientação:** cada face/vértice do espaço é um **ponto de orientação** — a direção para onde
  o veículo aponta e vai avançar.

## Ações de veículo

Custos em PA do **piloto**. Habilidades e traços do cenário modificam vários destes valores.

| Ação | Custo | Efeito |
|------|-------|--------|
| **Acelerar** | 2 PA / +10 m/t | Aumenta a velocidade. |
| **Manter velocidade** | 0 PA | Mantém a velocidade até acelerar/frear. *Desgovernado* perde metade por rodada. |
| **Frear** | 1 PA / −10 m/t | Reduz a velocidade. |
| **Movimentar na malha** | — | Move **obrigatoriamente 1 casa por 10 m/t**; pode ser dividido no turno. |
| **Manobra segura** | 1 PA por 10 m/t da velocidade atual | Vira **até 2 pontos de orientação**. |
| **Manobra arriscada** | — | Vira mais pontos (ou sem PA completo): **Teste Ágil** com **1 dado de desvantagem por PA faltante ou ponto extra**. Falha pode causar **capotagem** (rola 1d4 a posição final). |
| **Preparar esquiva** | 3 PA | Cria gatilho: **1 vantagem** no teste para esquivar de colisão. |
| **Emparelhar** | PA = velocidade do alvo **+ 1** | Teste de emparelhamento; emparelhados não manobram e mantêm velocidade ≥ à menor entre eles (senão ficam *Desgovernados*). |
| **Desemparelhar** | PA = velocidade de emparelhamento **+ 1** | Teste. Emparelhado dos dois lados **não pode** desemparelhar. |
| **Ocupar mesmo espaço** | Teste Ágil | *Rota de colisão* (sucesso colide) ou *ocupar com cuidado* (sucesso não colide). Ver dano abaixo. |
| **Invasão** (veículo hostil) | 4 PA | Teste Físico ou Ágil. Modificador por porte: maior→menor com desvantagem; menor→maior com vantagem. Sem espaço vazio, invasor + 1 passageiro ficam *Amontoados*. |
| **Embarque** (veículo aliado) | 4 PA | Teste Físico ou Ágil, sempre com **vantagem**. |
| **Reparar integridade** | 5 PA | Recupera **1d4** numa parte; no motor exige **5 sucatas comuns + Teste Mental**. Em movimento, quem não é piloto repara com desvantagem. |
| **Reparo especializado** | 5 PA | Remove **1 efeito negativo** do motor. Exige **2 sucatas eletrônicas + Teste Mental**. |
| **Retirar equipamento** | 5 PA | *Arrancar* (Teste Físico, quebra o item) ou *remover com cuidado* (Teste Mental + 1 h de jogo por ponto de integridade do item). |
| **Mover-se dentro do veículo** | 1 PA (espaço vazio); 2 PA (trocar de lugar); 6 PA (assumir o volante) | Com resistência, some teste Físico/Ágil (com desvantagem para tomar o volante). |
| **Procurar sucata** | Teste Mental; em batalha 1 PA + 1 PA por sucata pega | Coleta sucata do terreno. |

*Dirigir com uma mão só custa +2 PA a mais na mudança de direção.*

### Dano de colisão

Ao ocupar o mesmo espaço em rota de colisão (ou falhar em "ocupar com cuidado"), rola-se o dano
pela tabela abaixo, **+1 dado (ou +1 ponto) para cada 10 m/t excedente** à movimentação já feita.
Dano de colisão **não pode ser mirado**. O que exceder a parte atingida vai ao **Motor**; o que
exceder o Motor divide-se em local aleatório entre os ocupantes (arredondado p/ cima). O veículo
que **causou** a colisão recebe **1 de dano no motor por 10 m/t** do velocímetro, e tem a
velocidade **reduzida à metade** (arred. p/ baixo). Colisão **frontal** contra veículo em
movimento **dobra** os valores.

| Sofreu ↓ \ Colisor → | Sem motor | A | B | C | D | E |
|---|---|---|---|---|---|---|
| **Sem motor** | 1 | 1d8 | 1d10 | 1d12 | 2d12 | 3d12 |
| **A** | 1 | 1d6 | 1d8 | 1d10 | 1d12 | 2d12 |
| **B** | 1 | 1d4 | 1d6 | 1d8 | 1d10 | 1d12 |
| **C** | 1 | 1 | 1d4 | 1d6 | 1d8 | 1d10 |
| **D** | 1 | 1 | 1 | 1d4 | 1d6 | 1d8 |
| **E** | 1 | 1 | 1 | 1 | 1d4 | 1d6 |

Um **veículo sem motor** que colide recebe o **dobro** do dano comum em parte aleatória.

## Cobertura do tripulante

> 🧪 Em teste, junto da regra-base de [Cobertura](../../../sistema-base/conflitos/01-conflito-fisico.md#cobertura).

O próprio veículo abriga quem está dentro. Por padrão, **ocupar um espaço do veículo concede meia
[cobertura](../../../sistema-base/conflitos/01-conflito-fisico.md#cobertura)** ao tripulante:
**`+1d10` de vantagem** nos contratestes de defesa/esquiva contra **ataques à distância**, sem
precisar levantar guarda e sem ser cancelada pelo movimento do veículo (a lataria protege por si).

Vale só contra **ataques à distância**; **corpo a corpo ignora** a cobertura — por isso invasão e
embarque seguem sendo o jeito de atingir a tripulação de perto. O dano de **colisão** e o que
**transborda** de uma parte para os ocupantes são automáticos (não são testes de acerto) e **não**
são reduzidos pela cobertura. Armas com a propriedade
**[Projéteis (`PROJ.`)](../../../sistema-base/listas/equipamentos-base.md#propriedades-das-armas)**
e a **Maestria em projéteis** reduzem a cobertura em um nível (meia → ignorada), furando a proteção.

**Alguns equipamentos exigem exposição para operar** e, enquanto usados, **tiram** a meia cobertura
(o personagem se projeta para fora): cada equipamento traz isso no campo **Cobertura** da lista de
[equipamentos de veículo](equipamentos-de-veiculo.md).

## Condições de veículo

Acumulam salvo indicação. (As condições de **personagem** próprias do ermo — hipotermia,
insolação, radiômetro — ficam em [radiação](radiacao.md).)

| Condição | Efeito |
|----------|--------|
| **Atolado** | Não se move até ser guinchado por veículo de porte ≥ (ou ação bem-sucedida). |
| **Curto-circuito** | Não ativa equipamentos de veículo. |
| **Vazando** | Gasta o **dobro** de combustível por turno. |
| **Engasgando** | Precisa do **dobro** de PA para acelerar. |
| **No embalo** | Precisa do **dobro** de PA para frear. |
| **Sem rumo** | Precisa do **dobro** de PA para manobrar. |
| **Embreagem quebrada** | Não acelera além de **40 m/t** (fatores externos podem ultrapassar). |
| **Superaquecido** | Recebe todos os danos com valor **dobrado**. |
| **Pneu furado** | **3 PA** (em vez de 2) por +10 m/t; manobra vira só **1 ponto**. |
| **Desgovernado** | Velocidade cai à metade por rodada, anda em linha reta. |
| **Cortina de fumaça** | Piloto que inicia turno na fumaça faz Teste Ágil; falha gira 2 pontos (par = direita, ímpar = esquerda). |

## Integridade e reparo

Cada parte e o motor têm integridade própria; o dano transborda parte → motor → ocupantes. Para
recuperar, use **Reparar integridade** (1d4 na parte; motor exige 5 sucatas comuns + Teste
Mental) e **Reparo especializado** (remove efeito negativo do motor; 2 sucatas eletrônicas +
Teste Mental). Equipamentos de proteção (Escudos, Escudos para motor, Espinhos, Estrepes) têm
integridade própria e **não podem ser consertados** — ver
[equipamentos de veículo](equipamentos-de-veiculo.md).

> ⚠️ A DEFINIR: valores-base de integridade por categoria de veículo (o original trazia a seção
> "Integridade do veículo" vazia; use o exemplo de **Motor 20** como referência inicial e ajuste
> na mesa).

## Aptidão Veicular

Uma **aptidão** própria do cenário: permite **rerrolar um dado em qualquer ação que envolva
veículos** (manobrar, esquiva de veículo, ocupar mesmo espaço, reparar, criar equipamento, e
também sabotagem). Substitui a aptidão específica que a ação pediria. Comprada com a
**experiência padrão** (`Jogador`), não com a de Veículos. Custo: **1 Exp.**; acumulativa —
igual às demais [aptidões](../../../sistema-base/conceitos/04-aptidoes.md).

## Experiência de veículo

O Colapso usa **duas moedas de experiência**: a **exp. padrão do sistema** (`Jogador`) e a
**Experiência de Veículos** (`Veículo`). Cada [habilidade](habilidades-do-cenario.md) e
[traço](tracos-do-cenario.md) indica qual usa.

> ⚠️ A DEFINIR: quanto de exp. de Veículo o grupo começa (o material sugeria **8**; conferir com
> a exp. inicial atual do sistema, hoje **15** de `Jogador`) e a régua de evolução. Decidir com o
> Gabriel antes do playtest.
