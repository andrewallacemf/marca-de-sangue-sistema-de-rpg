---
titulo: Lista de habilidades de veículo
tipo: regra
cenario: modulo
modulo: veiculos
status: rascunho
tags: [modulo, veiculos, habilidades, listas]
atualizado-em: 2026-08-01
---

# Lista de habilidades de veículo

As habilidades do [módulo de veículos](../README.md). Seguem o
[guia de habilidades](../../../sistema-base/conceitos/05-habilidades.md) do núcleo: custo de compra
em `exp.`, custo de `PA`, requisitos e progressão por nível.

**Sobre a moeda de `exp.`:** todas as habilidades desta lista são características de veículo. Se a
mesa usa a [Experiência de Veículos](../README.md#experiência-de-veículos-opcional), elas **só** se
compram com ela; se não usa, compram-se com `exp.` comum, pelos mesmos preços. Nada muda nos
valores.

**A tag `Veículo`** indica que a habilidade só funciona pilotando ou estando dentro de um veículo.

> 📝 Os custos de `exp.` e `PA` desta lista vêm do material Alpha do Colapso e **ainda não foram
> validados** contra o reescalonamento geral de `PA` do sistema-base. Ver
> [PENDENCIAS.md](../../../PENDENCIAS.md).

## Ágil

- **Atropelar** `Ágil` `Veículo` — compra **3 exp.**; **2 PA + 2 de dano ao próprio motor**.
  Sacrifica integridade do motor por dano extra (descuidado) ao colidir. Requer veículo em
  movimento. Níveis: **+2 / +4 / +6 / +8 / +10** de dano adicional.
- **Invasor** `Ágil` `Veículo` — compra **4 exp.**; **1 PA**. Aumenta o sucesso de invasão e
  embarque em movimento. Requer nenhum membro desabilitado. Níveis: **+1d4 / +1d6 / +1d8** ao teste.
- **Piloto de fuga** `Ágil` `Veículo` — compra **1 exp.**; **1 PA**. Reduz o `PA` de aceleração
  quando o veículo está parado. Requer estar parado e ter ≥1 de combustível. Níveis: **−2 / −4 /
  −6 / −8 / −10** `PA`.
- **Turbo** `Ágil` `Veículo` — compra **2 exp.**; **1 PA**. Reduz o `PA` de aceleração em
  movimento. Níveis: **−2 / −4 / −6 / −8 / −10** `PA`.

## Físico

- **Atirador de elite** `Físico` `Veículo` — compra **4 exp.**; **`PA` da arma + 2 PA**. Aumenta o
  acerto contra alvo em movimento. Requer arma de arremesso (leve) ou projétil. Níveis: **+1d4 /
  +1d6 / +1d8** ao teste.
- **Atirador montado** `Físico` `Veículo` — compra **3 exp.**; **1 PA**. Reduz o `PA` para atirar a
  partir de um veículo em movimento. Níveis: **−2 / −3 / −4** `PA`.
- **Drift** `Físico` `Veículo` — compra **2 exp.**; **1 PA**. Reduz o `PA` de manobra em movimento.
  Níveis: **−2 / −4 / −6 / −8 / −10** `PA`.
- **Furar pneu** `Físico` `Veículo` — compra **3 exp.**; **`PA` da arma + `PA` variável**. Ataque
  mirado à [Rodagem](lista-de-veiculos.md#as-partes-de-um-veículo): causa metade do dano da arma
  (arredondado para cima) e aplica *Pneu furado*. Requer arma cortante ou perfurante. Níveis:
  **+3 / +2 / +1** `PA`.
- **Golpe extravagante** `Físico` `Veículo` — compra **4 exp.**; **`PA` da arma + 2 PA**. Ataque
  corpo a corpo a um passageiro; além do dano ao alvo, causa dano descuidado ao veículo. Níveis:
  **2 / 4 / 6** de dano ao veículo.

## Mental

- **Autoescola** `Mental` `Veículo` — compra **4 exp.**; **3 PA**. Acelera ou freia sem estar no
  assento do piloto (Teste Mental). Requer estar no mesmo veículo. Níveis: até **20 / 30 / 40**
  m/t. *(O veículo não se move na rodada, só muda o velocímetro.)*
- **Desmanchador** `Mental` `Veículo` — compra **4 exp.**; **`PA` da arma + 2 PA**. Ataque mirado a
  qualquer parte, com dano extra ao motor. Níveis: **2 / 4 / 6 / 8 / 10** ao motor. *(Não vale em
  ataque descuidado.)*
- **Mecânica** `Mental` `Veículo` — compra **2 exp.**; **3 PA**. Substitui a ação *Reparo
  especializado*: remove efeitos negativos do motor com Teste Mental, consumindo **1
  [peça especializada](../README.md#peças-de-reposição--o-insumo-de-reparo) por efeito** (em vez
  das 2 da ação normal). Níveis: remove **1 / 2 / 3** efeitos.
- **Mecatrônica** `Mental` `Veículo` — compra **3 exp.**; **4 PA**. Substitui a ação *Reparar
  integridade* (Teste Mental). Níveis: dado **1d6 / 1d8 / 1d10** — o excedente pode ir a outra
  parte. *(No motor, continua exigindo peças comuns, como a ação normal.)*
- **Retrovisor** `Mental` `Veículo` — compra **2 exp.**; **1 PA**. Reduz o `PA` da marcha à ré.
  Requer estar parado ou de ré. Níveis: **−2 / −4 / −6 / −8 / −10** `PA`.

## Social

- **Assumir direção** `Social` `Veículo` — compra **4 exp.**; **4 / 3 / 2 PA** por nível. Toma o
  volante; o veículo perde 10 m/t. Havendo resistência, Teste Físico ou Ágil.
- **Atenção difusa** `Social` `Veículo` — compra **4 exp.**; **2 PA + `PA` da arma**. Aumenta o
  acerto de arma corpo a corpo a partir de veículo em movimento. Níveis: **+1d4 / +1d6 / +1d8**.
- **Carburador furado** `Social` `Veículo` — compra **4 exp.**; **4 PA** (consome 2 de
  combustível). Solta uma *Cortina de fumaça* triangular atrás do veículo. Requer acesso ao
  acelerador. Níveis: cone de **3×5 / 5×7 / 7×9** espaços.
- **Co-piloto** `Social` `Veículo` — compra **3 exp.**; **2 PA + (`PA` doados ÷ 2)**. Transfere `PA`
  a alguém no mesmo veículo. Níveis: até **2 / 4 / 6 / 8 / 10** `PA`. *(Os `PA` não usados se
  perdem; não se doa `PA` gerado por fadiga.)*
- **Sabotar** `Social` `Veículo` — compra **4 exp.**; **4 / 3 / 2 PA** por nível. Teste Social; o
  sucesso aplica uma [condição de veículo](../README.md#condições-de-veículo) a um veículo cujos
  mecanismos você acessa.

> ⚠️ A DEFINIR: o material Alpha trazia divergências entre as tabelas-resumo e as descrições
> (custos de `exp.`/`PA` e os nomes "Direção ofensiva", "Especialista", "Consertar equipamento" e
> "Direção defensiva" apareciam sem descrição detalhada). Onde houve conflito, prevaleceu a
> descrição detalhada do material principal. Fechar na revisão.
