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

O **dano** de cada arma é derivado da [matriz tamanho × tipo](#dano-por-tamanho-e-tipo-matriz) (ver abaixo).

**Versátil (`VERS.`):** propriedade **exclusiva de armas médias** — a arma pode ser usada com uma ou duas mãos e ganha **+`1d4` de dano quando empunhada com as duas mãos**. A **maestria em armas versáteis** permite **alternar a empunhadura sem gastar `PA`** durante o uso da arma.

## Alcance ideal e alcance não ideal

Toda arma tem um **alcance ideal**, indicado nas tabelas em metros — um valor único ou uma faixa (ex.: lança longa = **`2m`**; machado de batalha = **`1m a 2m`**; arco composto = **`7m a 10m`**). **Dentro do alcance ideal, ataca-se normalmente.**

**Alcance não ideal:** fora do alcance ideal ainda dá para tentar acertar, mas **sempre com `desvantagem`**:

- **Armas corpo a corpo:** o alcance não ideal é **1 metro para dentro e 1 metro para fora** do alcance ideal. *Exemplo: uma lança de alcance ideal `2m` ataca com desvantagem a `1m` e a `3m`.*
- **Armas à distância:** o alcance não ideal tem **a mesma amplitude do alcance ideal, para dentro e para fora**. *Exemplo: um arco de alcance ideal `5m a 10m` ataca com desvantagem de `0m a 4m` e de `11m a 15m`.*

> ✅ Decidido em 11/07/2026: o termo **"alcance normal" foi aposentado** — usa-se sempre **alcance ideal**, e o conceito de **alcance não ideal** passa a ser registrado (ver [decisão](../../notas-de-design/decisoes/2026-07-11-terminologia-alcance-descanso.md), item A2). O alcance ideal também delimita o [engajamento](../conflitos/01-conflito-fisico.md#engajamento) das armas corpo a corpo.

## Propriedades das armas

Efeitos definidos na reunião de 11/07/2026 (ver [decisões](../../notas-de-design/decisoes/2026-07-11-reunioes-de-mecanica.md), itens 4 e 7):

- **Cortante (`CORT.`)** — **expande o [engajamento](../conflitos/01-conflito-fisico.md#engajamento)**: além do gatilho padrão (o alvo **sair** do alcance ideal, que já provoca ataque de oportunidade de qualquer arma), a maestria cortante permite realizar um **ataque de oportunidade quando o alvo se move para te CONTORNAR** (rodeia você de um espaço a outro dentro do seu alcance ideal). Esse ataque **consome a reação** do personagem (cada personagem tem **1 reação por rodada**). O efeito antigo da propriedade (mirar na cabeça sem desvantagem) **deixa de existir**.
- **Contundente (`CONT.`)** — ao acertar, **reduz pontos de ação (`PA`) do alvo sem necessidade de teste**, valendo **até o próximo turno do alvo**. O valor depende do **peso da arma**: **leve −1 `PA`**, **média −2 `PA`**, **pesada −3 `PA`**. Só age se o atacante tiver a **maestria em armas contundentes**.
- **Perfurante (`PERF.`)** — **expande o [engajamento](../conflitos/01-conflito-fisico.md#engajamento)**: além do gatilho padrão (movimento dentro do alcance ideal), permite realizar um **ataque de oportunidade quando o alvo ENTRA no seu alcance ideal**. Esse ataque **consome a reação** do personagem (cada personagem tem **1 reação por rodada**). É o espelho do cortante: cortante cobre a **saída** do alcance ideal; perfurante, a **entrada**.

> ✅ Decidido em 11/07/2026 (ver [decisões — reação, posicionamento e propriedades](../../notas-de-design/decisoes/2026-07-11-reacao-posicionamento-propriedades.md), item 4). O efeito do perfurante já existia na documentação antiga e havia ficado de fora.

### Propriedades resgatadas do material antigo

As propriedades só produzem efeito se o personagem tiver a **maestria** correspondente (traços de maestria as referenciam pela sigla).

> ✅ Aprovadas pelo grupo em 12/07/2026 (ver [decisões — lote 2](../../notas-de-design/decisoes/2026-07-12-decisoes-de-regra-lote-2.md), item 3).

- **Projéteis (`PROJ.`)** — consegue **ignorar barreiras no caminho do alvo**, desde que a barreira não esteja acima do alvo. Se acertar o oponente, **recarregar o equipamento não custa `PA`**.
- **Agarrar (`AGAR.`)** — armas agarradoras conferem **vantagem para o uso da ação "Agarrar"**.
- **Arremesso (`ARRE.`)** — armas de arremesso **ignoram um dado de desvantagem para realizar arremessos**. Regra geral do manual: arremessar um objeto ou arma **sem** essa propriedade é uma ação de ataque **com desvantagem**; fora do alcance ideal, a desvantagem total é **`+2d10`** (+1d10 pelo alcance não ideal, +1d10 por ser objeto impróprio para arremesso).
- **Deflexão (`DEFL.`)** — itens com deflexão **ignoram um dado de desvantagem em contratestes de defesa**. *(Na v0.4.1 esta propriedade usava a sigla `PROT`; a sigla foi unificada em `DEFL.`.)*
- **Acuidade (`ACUI.`)** — armas leves e precisas (facas, adagas, rapieira, estiletes…). Com uma arma de acuidade você pode usar **aptidões do atributo Ágil** (no lugar de Física) para **rerrolar** os testes de ataque com ela. Não exige maestria.

## Dano por tamanho e tipo (matriz)

O dano de **qualquer arma** — tabelada ou não — é aferido cruzando o **tamanho** (leve/média/pesada) com o **tipo de dano** (cortante/perfurante/contundente):

| Tamanho | Cortante `CORT.` | Perfurante `PERF.` | Contundente `CONT.` |
|---------|:---:|:---:|:---:|
| **Leve** | `1d4` | `1d4` | `1d4` |
| **Média** | `1d8` | `1d6` | `2d4` |
| **Pesada** | `1d12` | `1d8` | `3d4` |

- **Versátil (`VERS.`)** é exclusiva de armas **médias**: a arma ganha **+`1d4`** quando usada **com duas mãos**.
- **Armas de mais de um tipo:** a arma pode ser usada em **qualquer um de seus tipos** — o atacante declara o tipo no golpe e usa o dado + o efeito daquele tipo (a propriedade correspondente, com maestria). Na tabela, os tipos são listados lado a lado.
- **Ataque desarmado** = `1` fixo; itens improvisados usam dano fixo baixo.
- **Arremesso de objeto improvisado** (arremessar algo que não é arma de arremesso, ou pela habilidade "Arremesso improvisado"): objeto **leve = `1`**, **médio = `1d4−2`** (≈1d2), **pesado = `1d4−1`**, sempre **com desvantagem** por ser impróprio. **Arremessar uma arma de verdade** sem a propriedade `ARRE.` usa o **dano normal da arma**, também com desvantagem. *(Corrigido no playtest 1, 18/07/2026.)*

> ✅ Decidido em 12/07/2026 (ver [decisões — dano das armas](../../notas-de-design/decisoes/2026-07-12-dano-variavel-armas.md)). Os danos das tabelas abaixo foram gerados por esta matriz — **em revisão** arma por arma.

## Lista base de armas corpo a corpo

| **Item** | **Peso / Ações** | **Categoria / Propriedades** | **Alc. ideal** | **Dano** | **Preço suger.** | **Durabilidade** |
| --- | --- | --- | --- | --- | --- | --- |
| Ataque desarmado | **`1 PA`** | **`CONT.`** | **`1m`** | **`1`** | --- |  |
| Manoplas com cravos, Adaga de soco, Tekkokagi, Rapieira | **`Leve`**<br>**`2 PA`** | **`CURT.`** **`PERF.`** | **`1m`** | **`1d4`** | **`6 moedas`** |  |
| Shuriken | **`Leve`**<br>**`2 PA`** | **`CURT.`** **`PERF.` `ARRE.`** | **`2m a 5m`** | **`1d4`** | **`4 moedas`** |  |
| Faca, Foice de mão | **`Leve`**<br>**`2 PA`** | **`CURT.`** **`CORT.` `PERF.`** | **`1m`** | **`1d4`** | **`3 moedas`** |  |
| Bastão curto, Tonfa, Martelo Curto | **`Leve`**<br>**`2 PA`** | **`CURT.`** **`CONT.` `ARRE.`** | **`1m`** / **`2m a 5m`** | **`1d4`** | **`4 moedas`** |  |
| Adaga, Kukri, Kunai | **`Leve`**<br>**`2 PA`** | **`CURT.`** **`CORT.` `PERF.` `ARRE.`** | **`1m`** / **`2m a 5m`** | **`1d4`** | **`6 moedas`** |  |
| Chakram | **`Leve`**<br>**`2 PA`** | **`CURT.`** **`CORT.` `ARRE.`** | **`1m`** / **`2m a 5m`** | **`1d4`** | **`20 moedas`** |  |
| Escudo de arremesso | **`Leve`**<br>**`2 PA`** | **`CURT.`** **`CONT.` `DEFL.`** **`ARRE.`** | **`2m a 5m`** | **`1d4`** | **`12 moedas`** |  |
| Facão, Machete, Peixeira | **`Média`**<br>**`4 PA`** | **`CURT.`** **`CORT.`** | **`1m`** | **`1d8`** | **`4 moedas`** |  |
| Espada Curta, Foice curta, Cimitarra, Falcione, Khopesh | **`Média`**<br>**`4 PA`** | **`CURT.`** **`CORT.` `PERF.`** | **`1m`** | **`1d8` `CORT.` · `1d6` `PERF.`** | **`8 moedas`** |  |
| Lança, Seta | **`Média`**<br>**`4 PA`** | **`LONG.`** **`PERF.` `ARRE.`** | **`2m`** | **`1d6`** | **`8 moedas`** |  |
| Gato de nove caudas | **`Média`**<br>**`4 PA`** | **`CURT.`** **`CORT.` `AGAR.`** | **`1m`** | **`1d8`** | **`32 moedas`** |  |
| Chicote, Corrente | **`Média`**<br>**`4 PA`** | **`LONG.`** **`CORT.` `AGAR.`** | **`3m a 4m`** | **`1d8`** | **`12 moedas`** |  |
| Machadinha | **`Média`**<br>**`4 PA`** | **`CURT.`** **`CORT.` `ARRE.`** | **`1m`** / **`2m a 4m`** | **`1d8`** | **`6 moedas`** |  |
| Boomerangue (Se não acerta um alvo, volta) | **`Média`**<br>**`4 PA`** | **`CURT.`** **`CONT.` `ARRE.`** | **`1m`** / **`2m a 5m`** | **`2d4`** | **`12 moedas`** |  |
| Tridente, Brandistock | **`Média`**<br>**`4 PA`** | **`LONG.`** **`PERF.` `VERS.`** | **`2m a 3m`** | **`1d6`** (+`1d4` a 2 mãos) | **`12 moedas`** |  |
| Bastão médio, Nunchaku, Martelo Médio | **`Média`**<br>**`4 PA`** | **`CURT.`** **`CONT.` `VERS.`** | **`1m`** | **`2d4`** (+`1d4` a 2 mãos) | **`8 moedas`** |  |
| Rede | **`Média`**<br>**`4 PA`** | **`LONG.`** **`AGAR.`** **`ARRE.`** | **`1m a 5m`** | **`0`** | **`4 moedas`** |  |
| Picareta de mão | **`Média`**<br>**`4 PA`** | **`CURT.`** **`PERF.` `VERS.`** | **`1m`** | **`1d6`** (+`1d4` a 2 mãos) | **`5 moedas`** |  |
| Machado | **`Média`**<br>**`4 PA`** | **`CURT.`** **`CORT.` `VERS.` `ARRE.`** | **`1m`** / **`2m a 4m`** | **`1d8`** (+`1d4` a 2 mãos) | **`8 moedas`** |  |
| Clava, Maça | **`Média`**<br>**`4 PA`** | **`CURT.`** **`CONT.`** **`PERF.`** **`VERS.`** | **`1m`** | **`2d4` `CONT.` · `1d6` `PERF.`** (+`1d4` a 2 mãos) | **`6 moedas`** |  |
| Mangual, Maça estrela, Espada Longa, Bastarda, Sabre, Katana | **`Média`**<br>**`4 PA`** | **`LONG.`** **`CORT.`** **`PERF.` `VERS.`** | **`1m a 2m`** | **`1d8` `CORT.` · `1d6` `PERF.`** (+`1d4` a 2 mãos) | **`20 moedas`** |  |
| Kusarigama, Double-chained Kama | **`Média`**<br>**`4 PA`** | **`LONG.`** **`CORT.` `CONT.` `AGAR.` `ARRE.`** | **`3m a 4m`** | **`1d8` `CORT.` · `2d4` `CONT.`** | **`30 moedas`** |  |
| Bastão grande, Setsukon | **`Pesada`**<br>**`6 PA`** | **`LONG.`** **`CONT.`** | **`1m a 2m`** | **`3d4`** | **`6 moedas`** |  |
| Machado Pesado, Machado de Batalha | **`Pesada`**<br>**`6 PA`** | **`LONG.`** **`CORT.`** | **`1m a 2m`** | **`1d12`** | **`10 moedas`** |  |
| Picareta | **`Pesada`**<br>**`6 PA`** | **`CURT.`** **`PERF.`** | **`1m`** | **`1d8`** | **`6 moedas`** |  |
| Martelo Grande, Martelo de batalha | **`Pesada`**<br>**`6 PA`** | **`LONG.`** **`CONT.`** | **`1m a 2m`** | **`3d4`** | **`14 moedas`** |  |
| Alabarda | **`Pesada`**<br>**`6 PA`** | **`LONG.`** **`PERF.`** | **`2m a 3m`** | **`1d8`** | **`16 moedas`** |  |
| Lança montada (necessário os traços "Montaria" e "Justa") ⚠️ | **`Pesada`**<br>**`6 PA`** | **`LONG.`** **`PERF.`** | **`3m`** | **`1d8`** | **`9 moedas`** |  |
| Mangual pesado, Mangual Atroz, Maça Pesada, Clava pesada, Esp. de duas lâminas ⚠️ | **`Pesada`**<br>**`6 PA`** | **`LONG.`** **`CORT.`** **`PERF.`** | **`2m`** | **`1d12` `CORT.` · `1d8` `PERF.`** | **`14 moedas`** |  |
| Lança longa | **`Pesada`**<br>**`6 PA`** | **`LONG.`** **`PERF.`** **`ARRE.`** | **`2m`** / **`2m a 3m`** | **`1d8`** | **`10 moedas`** |  |
| Espada Larga, montante, Flamberge, Foice ceifadora | **`Pesada`**<br>**`6 PA`** | **`LONG.`** **`CORT.`** **`PERF.`** | **`2m`** | **`1d12` `CORT.` · `1d8` `PERF.`** | **`12 moedas`** |  |
| Corrente de espinhos | **`Pesada`**<br>**`6 PA`** | **`LONG.`** **`CORT.`** **`AGAR.`** | **`3m a 4m`** | **`1d12`** | **`16 moedas`** |  |
| Arma improvisada leve | **`Leve`** | **`CONT.`** |  | **`2`** |  |  |
| Arma improvisada média | **`Média`** | **`CONT.`** |  | **`3`** |  |  |
| Arma improvisada pesada | **`Pesada`** | **`CONT.`** |  | **`4`** |  |  |

*⚠️ A revisar: a **lança montada** (perfurante pesada) caiu de 10 para `1d8` pela matriz — conferir se merece exceção como arma de carga. O grupo **"Mangual pesado… Esp. de duas lâminas"** tem nome contundente mas só lista `CORT.`/`PERF.` — alinhar as propriedades (se receber `CONT.`, ganha também `3d4`). Itens improvisados usam dano fixo a definir.*

## Lista base de armas à distância

| **Item** | **Tipo e Ações** | **Alc. ideal** | **Munição (consultar dano na tabela de munições)** | **Preço sugerido** | **Durabilidade** |
| --- | --- | --- | --- | --- | --- |
| Funda / Zarabatana | **`Leve`**<br>**`2 PA`** | **`4m a 7m`** | Pedras / Dardo | **`5 moedas`** |  |
| Arco curto, Besta de mão | **`Leve`**<br>**`2 PA`** | **`6m a 9m`** | Flecha ponta de madeira | **`20 moedas`** |  |
| Arco composto, Besta leve | **`Média`**<br>**`4 PA`** | **`7m a 10m`** | Flecha ponta de madeira, Flecha ponta de ferro | **`30 moedas`** |  |
| Arco longo, Besta pesada | **`Pesada`**<br>**`6 PA`** | **`8m a 12m`** | Flecha ponta de ferro | **`40 moedas`** |  |
| Besta de repetição | **`Pesada`**<br>**`6 PA`** | **`7m a 10m`** | Flecha ponta de ferro (x3) | **`80 moedas`** |  |
| Pistola simples | **`Leve`**<br>**`2 PA`** | **`2m a 15m`** | Bala de pólvora | **`220 moedas`** |  |
| Espingarda, Arquebus, Handgonne | **`Média`**<br>**`4 PA`** | **`1m a 5m`** | Bala de pólvora (x2) | **`260 moedas`** |  |
| Rifle, Mosquete | **`Pesada`**<br>**`6 PA`** | **`3m a 20m`** | Bala de pólvora | **`340 moedas`** |  |

## Lista base de munições

> 💡 PROPOSTA (IA) — dano convertido para dados em 12/07/2026 (projéteis = 1 dado; dano ≤2 fica fixo).

| **Item** | **Categoria** | **Dano** | **Preço sugerido** |
| --- | --- | --- | --- |
| Pedras | **`PROJ.`** | **`2`** | **`grátis`** (improvisado — 💡 proposta) |
| Dardo | **`PROJ.`** | **`2`** | **`1 moeda`** |
| Flecha ponta de madeira | **`PROJ.`** | **`1d4`** | **`1 moeda`** |
| Flecha ponta de ferro | **`PROJ.`** | **`1d4`** | **`3 moedas`** |
| Bala de pólvora | **`PROJ.`** | **`1d8`** | **`20 moedas`** |
