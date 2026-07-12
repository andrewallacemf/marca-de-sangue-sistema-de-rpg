---
titulo: Lista de equipamentos base
tipo: regra
cenario: base
status: revisao
tags: [equipamentos, armas, municoes]
atualizado-em: 2026-07-12
---

# Lista de equipamentos base

> ⚠️ A DEFINIR: a coluna "Durabilidade" das tabelas de armas está sem valores no manual.

Notação de dano por empunhadura: ✋ = uma mão / 🤲 = duas mãos (armas versáteis **`VERS.`** têm os dois valores, separados por `/`).

## Alcance ideal e alcance não ideal

Toda arma tem um **alcance ideal**, indicado nas tabelas em metros — um valor único ou uma faixa (ex.: lança longa = **`2m`**; machado de batalha = **`1m a 2m`**; arco composto = **`7m a 10m`**). **Dentro do alcance ideal, ataca-se normalmente.**

**Alcance não ideal:** fora do alcance ideal ainda dá para tentar acertar, mas **sempre com `desvantagem`**:

- **Armas corpo a corpo:** o alcance não ideal é **1 metro para dentro e 1 metro para fora** do alcance ideal. *Exemplo: uma lança de alcance ideal `2m` ataca com desvantagem a `1m` e a `3m`.*
- **Armas à distância:** o alcance não ideal tem **a mesma amplitude do alcance ideal, para dentro e para fora**. *Exemplo: um arco de alcance ideal `5m a 10m` ataca com desvantagem de `0m a 4m` e de `11m a 15m`.*

> ✅ Decidido em 11/07/2026: o termo **"alcance normal" foi aposentado** — usa-se sempre **alcance ideal**, e o conceito de **alcance não ideal** passa a ser registrado (ver [decisão](../../notas-de-design/decisoes/2026-07-11-terminologia-alcance-descanso.md), item A2). O alcance ideal também delimita o [engajamento](../conflitos/01-conflito-fisico.md#engajamento) das armas corpo a corpo.

## Propriedades das armas

Efeitos definidos na reunião de 11/07/2026 (ver [decisões](../../notas-de-design/decisoes/2026-07-11-reunioes-de-mecanica.md), itens 4 e 7):

- **Cortante (`CORT.`)** — **expande o [engajamento](../conflitos/01-conflito-fisico.md#engajamento)**: além do gatilho padrão (movimento dentro do alcance ideal), permite realizar um **ataque de oportunidade quando o alvo SAI do seu alcance ideal**. Esse ataque **consome a reação** do personagem (cada personagem tem **1 reação por rodada**). O efeito antigo da propriedade (mirar na cabeça sem desvantagem) **deixa de existir**.
- **Contundente (`CONT.`)** — ao acertar, **reduz pontos de ação (`PA`) do alvo sem necessidade de teste**; a redução vale **até a próxima rodada do alvo**.
- **Perfurante (`PERF.`)** — **expande o [engajamento](../conflitos/01-conflito-fisico.md#engajamento)**: além do gatilho padrão (movimento dentro do alcance ideal), permite realizar um **ataque de oportunidade quando o alvo ENTRA no seu alcance ideal**. Esse ataque **consome a reação** do personagem (cada personagem tem **1 reação por rodada**). É o espelho do cortante: cortante cobre a **saída** do alcance ideal; perfurante, a **entrada**.

> ✅ Decidido em 11/07/2026 (ver [decisões — reação, posicionamento e propriedades](../../notas-de-design/decisoes/2026-07-11-reacao-posicionamento-propriedades.md), item 4). O efeito do perfurante já existia na documentação antiga e havia ficado de fora.

### Propriedades resgatadas do material antigo

No manual do Notion, as propriedades só produzem efeito se o personagem tiver a **maestria** correspondente (traços de maestria as referenciam pela sigla).

> 💡 RESGATE (IA) — encontrado em "Marca de Sangue Manual básico" (seção Equipamentos → Armas → "Propriedades (com maestria)"; mesmo texto em "Construção Marca de sangue → Equipamentos" e no "MdS Livro básico de regras (obsoleto)"), revisar:

- **Projéteis (`PROJ.`)** — consegue **ignorar barreiras no caminho do alvo**, desde que a barreira não esteja acima do alvo. Se acertar o oponente, **recarregar o equipamento não custa `PA`**.
- **Agarrar (`AGAR.`)** — armas agarradoras conferem **vantagem para o uso da ação "Agarrar"**.
- **Arremesso (`ARRE.`)** — armas de arremesso **ignoram um dado de desvantagem para realizar arremessos**. Regra geral do manual: arremessar um objeto ou arma **sem** essa propriedade é uma ação de ataque **com desvantagem**; fora do alcance ideal, a desvantagem total é **`+2d10`** (+1d10 pelo alcance não ideal, +1d10 por ser objeto impróprio para arremesso).
- **Deflexão (`DEFL.`)** — itens com deflexão **ignoram um dado de desvantagem em contratestes de defesa**. Na v0.4.1 esta propriedade usava a sigla `PROT` — a sigla `PROT.` do escudo de arremesso na tabela abaixo provavelmente vem daí.

> ⚠️ A DEFINIR: **versátil (`VERS.`)** segue **sem descrição de efeito em fonte alguma** do export do Notion (manual, Construção e material antigo). As tabelas indicam o comportamento (custo **`3/4 PA`** e dano **✋/🤲**) e a descrição do tamanho "média" no manual cobre o uso com uma ou duas mãos, mas não há efeito próprio da propriedade — e a maestria em armas versáteis a referencia. A sigla **`PROT.`** (escudo de arremesso) também está sem descrição própria no material atual.

## Lista base de armas corpo a corpo

| **Item** | **Peso / Ações** | **Categoria / Propriedades** | **Alc. ideal** | **Dano ✋/🤲** | **Preço suger.** | **Durabilidade** |
| --- | --- | --- | --- | --- | --- | --- |
| Ataque desarmado | **`1 PA`** | **`CONT.`** | **`1m`** | **`1`** | --- |  |
| Manoplas com cravos, Adaga de soco, Tekkokagi, Rapieira | **`Leve`**<br>**`2 PA`** | **`CURT.`** **`PERF.`** | **`1m`** | **`3`** | **`6 moedas`** |  |
| Shuriken | **`Leve`**<br>**`2 PA`** | **`CURT.`** **`PERF.` `ARRE.`** | **`2m a 5m`** | **`3`** | **`4 moedas`** |  |
| Faca, Foice de mão | **`Leve`**<br>**`2 PA`** | **`CURT.`** **`CORT.` `PERF.`** | **`1m`** | **`3`** | **`3 moedas`** |  |
| Bastão curto, Tonfa, Martelo Curto | **`Leve`**<br>**`2 PA`** | **`CURT.`** **`CONT.` `ARRE.`** | **`1m`** / **`2m a 5m`** | **`3`** | **`4 moedas`** |  |
| Adaga, Kukri, Kunai | **`Leve`**<br>**`2 PA`** | **`CURT.`** **`CORT.` `PERF.` `ARRE.`** | **`1m`** / **`2m a 5m`** | **`3`** | **`6 moedas`** |  |
| Chakram | **`Leve`**<br>**`2 PA`** | **`CURT.`** **`CORT.` `ARRE.`** | **`1m`** / **`2m a 5m`** | **`4`** | **`20 moedas`** |  |
| Escudo de arremesso | **`Leve`**<br>**`2 PA`** | **`CURT.`** **`CONT.` `PROT.`** **`ARRE.`** | **`2m a 5m`** | **`2`** | **`12 moedas`** |  |
| Facão, Machete, Peixeira | **`Média`**<br>**`3 PA`** | **`CURT.`** **`CORT.`** | **`1m`** | **`5`** | **`4 moedas`** |  |
| Espada Curta, Foice curta, Cimitarra, Falcione, Khopesh | **`Média`**<br>**`3 PA`** | **`CURT.`** **`CORT.` `PERF.`** | **`1m`** | **`5`** | **`8 moedas`** |  |
| Lança curta, Seta | **`Média`**<br>**`3 PA`** | **`LONG.`** **`PERF.` `ARRE.`** | **`2m`** | **`5`** | **`8 moedas`** |  |
| Gato de nove caudas | **`Média`**<br>**`3 PA`** | **`CURT.`** **`CORT.` `AGAR.`** | **`1m`** | **`5`** | **`32 moedas`** |  |
| Chicote, Corrente | **`Média`**<br>**`3 PA`** | **`LONG.`** **`CORT.` `AGAR.`** | **`3m a 4m`** | **`5`** | **`12 moedas`** |  |
| Machadinha | **`Média`**<br>**`3 PA`** | **`CURT.`** **`CORT.` `ARRE.`** | **`1m`** / **`2m a 4m`** | **`5`** | **`6 moedas`** |  |
| Boomerangue (Se não acerta um alvo, volta) | **`Média`**<br>**`3 PA`** | **`CURT.`** **`CONT.` `ARRE.`** | **`1m`** / **`2m a 5m`** | **`4`** | **`12 moedas`** |  |
| Tridente, Brandistock | **`Média`**<br>**`3/4 PA`** | **`LONG.`** **`PERF.` `VERS.`** | **`2m a 3m`** | **`4/7`** | **`12 moedas`** |  |
| Bastão médio, Nunchaku, Martelo Médio | **`Média`**<br>**`3/4 PA`** | **`CURT.`** **`CONT.` `VERS.`** | **`1m`** | **`4/7`** | **`8 moedas`** |  |
| Rede | **`Média`**<br>**`3/4 PA`** | **`LONG.`** **`AGAR.`** **`ARRE.`** | **`1m a 5m`** | **`0`** | **`4 moedas`** |  |
| Picareta de mão | **`Média`**<br>**`3/4 PA`** | **`CURT.`** **`PERF.` `VERS.`** | **`1m`** | **`4/7`** | **`5 moedas`** |  |
| Machado | **`Média`**<br>**`3/4 PA`** | **`CURT.`** **`CORT.` `VERS.` `ARRE.`** | **`1m`** / **`2m a 4m`** | **`4/7`** | **`8 moedas`** |  |
| Clava, Maça | **`Média`**<br>**`3/4 PA`** | **`CURT.`** **`CONT.`** **`PERF.`** **`VERS.`** | **`1m`** | **`4/7`** | **`6 moedas`** |  |
| Mangual, Maça estrela, Espada Longa, Bastarda, Sabre, Katana | **`Média`**<br>**`3/4 PA`** | **`LONG.`** **`CORT.`** **`PERF.` `VERS.`** | **`1m a 2m`** | **`4/7`** | **`20 moedas`** |  |
| Kusarigama, Double-chained Kama | **`Média`**<br>**`3/4 PA`** | **`LONG.`** **`CORT.` `CONT.` `AGAR.` `ARRE.`** | **`3m a 4m`** | **`6`** | **`30 moedas`** |  |
| Bastão grande, Setsukon | **`Pesada`**<br>**`4 PA`** | **`LONG.`** **`CONT.`** | **`1m a 2m`** | **`8`** | **`6 moedas`** |  |
| Machado Pesado, Machado de Batalha | **`Pesada`**<br>**`4 PA`** | **`LONG.`** **`CORT.`** | **`1m a 2m`** | **`8`** | **`10 moedas`** |  |
| Picareta | **`Pesada`**<br>**`4 PA`** | **`CURT.`** **`PERF.`** | **`1m`** | **`8`** | **`6 moedas`** |  |
| Martelo Grande, Martelo de batalha | **`Pesada`**<br>**`4 PA`** | **`LONG.`** **`CONT.`** | **`1m a 2m`** | **`8`** | **`14 moedas`** |  |
| Alabarda | **`Pesada`**<br>**`4 PA`** | **`LONG.`** **`PERF.`** | **`2m a 3m`** | **`8`** | **`16 moedas`** |  |
| Lança montada (necessário os traços "Montaria" e "Justa") | **`Pesada`**<br>**`4 PA`** | **`LONG.`** **`PERF.`** | **`3m`** | **`10`** | **`9 moedas`** |  |
| Mangual pesado, Mangual Atroz, Maça Pesada, Clava pesada, Esp. de duas lâminas | **`Pesada`**<br>**`4 PA`** | **`LONG.`** **`CORT.`** **`PERF.`** | **`2m`** | **`8`** | **`14 moedas`** |  |
| Lança longa | **`Pesada`**<br>**`4 PA`** | **`LONG.`** **`PERF.`** **`ARRE.`** | **`2m`** / **`2m a 3m`** | **`7`** | **`10 moedas`** |  |
| Espada Larga, montante, Flamberge, Foice ceifadora | **`Pesada`**<br>**`4 PA`** | **`LONG.`** **`CORT.`** **`PERF.`** | **`2m`** | **`7`** | **`12 moedas`** |  |
| Corrente de espinhos | **`Pesada`**<br>**`4 PA`** | **`LONG.`** **`CORT.`** **`AGAR.`** | **`3m a 4m`** | **`7`** | **`16 moedas`** |  |
| Arma improvisada leve |  |  |  | **`2`** |  |  |
| Arma improvisada média |  |  |  | **`3`** |  |  |
| Arma improvisada pesada |  |  |  | **`4`** |  |  |

## Lista base de armas à distância

| **Item** | **Tipo e Ações** | **Alc. ideal** | **Munição (consultar dano na tabela de munições)** | **Preço sugerido** | **Durabilidade** |
| --- | --- | --- | --- | --- | --- |
| Funda / Zarabatana | **`Leve`**<br>**`2 PA`** | **`4m a 7m`** | Pedras / Dardo | **`5 moedas`** |  |
| Arco curto, Besta de mão | **`Leve`**<br>**`2 PA`** | **`6m a 9m`** | Flecha ponta de madeira | **`20 moedas`** |  |
| Arco composto, Besta leve | **`Média`**<br>**`3 PA`** | **`7m a 10m`** | Flecha ponta de madeira, Flecha ponta de ferro | **`30 moedas`** |  |
| Arco longo, Besta pesada | **`Pesada`**<br>**`4 PA`** | **`8m a 12m`** | Flecha ponta de ferro | **`40 moedas`** |  |
| Besta de repetição | **`Pesada`**<br>**`4 PA`** | **`7m a 10m`** | Flecha ponta de ferro (x3) | **`80 moedas`** |  |
| Pistola simples | **`Leve`**<br>**`2 PA`** | **`2m a 15m`** | Bala de pólvora | **`220 moedas`** |  |
| Espingarda, Arquebus, Handgonne | **`Média`**<br>**`3 PA`** | **`1m a 5m`** | Bala de pólvora (x2) | **`260 moedas`** |  |
| Rifle, Mosquete | **`Pesada`**<br>**`4 PA`** | **`3m a 20m`** | Bala de pólvora | **`340 moedas`** |  |

## Lista base de munições

| **Item** | **Categoria** | **Dano** | **Preço sugerido** |
| --- | --- | --- | --- |
| Pedras | **`PROJ.`** | **`2`** | - |
| Dardo | **`PROJ.`** | **`2`** | **`1 moeda`** |
| Flecha ponta de madeira | **`PROJ.`** | **`3`** | **`1 moeda`** |
| Flecha ponta de ferro | **`PROJ.`** | **`4`** | **`3 moedas`** |
| Bala de pólvora | **`PROJ.`** | **`8`** | **`20 moedas`** |
