---
titulo: Lista de equipamentos base
tipo: regra
cenario: base
status: revisao
tags: [equipamentos, armas, municoes]
atualizado-em: 2026-07-12
---

# Lista de equipamentos base

O **dano** de cada arma é derivado da [matriz tamanho × tipo](#dano-por-tamanho-e-tipo-matriz) (ver abaixo).

## Durabilidade das armas

Toda arma tem uma **durabilidade** (coluna nas tabelas). A cada **golpe que acerta** algo ou
alguém, a arma perde **`1` de durabilidade**. Ao chegar a **`0`**, a arma **quebra** e não pode
mais ser usada até ser reparada. Golpes que **erram** não gastam durabilidade.

> ✅ Decidido em 19/07/2026: a **regra** de perda de durabilidade das armas (−1 por golpe que
> acerta; quebra em 0) foi definida pelo grupo.

### Valores de durabilidade (💡 proposta para calibrar)

Durabilidade-base por **peso da arma** — calibrada contra a durabilidade das
[proteções](protecoes-base.md#durabilidade-das-proteções) (armadura por peça: leve 10 / média 25 / pesada 50; escudos 6–25):

| Peso da arma | Durabilidade-base |
|---|:---:|
| **Leve** | **`20`** |
| **Média** | **`30`** |
| **Pesada** | **`40`** |

**Lógica da calibragem:** a **armadura** é o objeto mais resistente (10/25/50), mas só perde
durabilidade quando **absorve** um golpe; a **arma** fica no meio (20/30/40) e perde a cada
**golpe que acerta** (desgasta mais rápido — lâmina cega, cabo racha); o **escudo** é o mais
sacrificial (6–25) e perde a cada bloqueio. Assim, na prática, **espada precisa de manutenção
antes da armadura**, o que é coerente e realista.

**Ajustes por caso:**

- **Armas improvisadas:** muito frágeis — **leve `5` · média `8` · pesada `10`**.
- **Rede:** frágil e descartável — **`10`**.
- **Armas à distância (arcos, bestas):** a arma **não perde durabilidade a cada disparo** (o
  desgaste do tiro recai sobre a **munição**); a durabilidade só cai sob **estresse** (uso muito
  intenso, queda, clima, corda arrebentando), a critério do narrador. Valor por peso, como
  referência de robustez.
- **Armas de fogo (pólvora):** valor por peso como referência; o **módulo do Colapso** pode
  sobrepor com regra própria (encravamento/superaquecimento).
- **Armas de haste flexível** (chicote, corrente, kusarigama): não lascam como uma lâmina — o
  narrador pode ignorar/dobrar o desgaste conforme a cena.

> ⚠️ A DEFINIR: **aprovar/ajustar** estes valores no playtest (a *regra* de perda já está fechada;
> os *números* acima são proposta).

> 💡 **Traços e habilidades que afetam a durabilidade:** [Zeloso](tracos-base.md#zeloso) (desgasta metade), [Reforçado](tracos-base.md#reforçado) (proteção +50%), [Guarda firme](tracos-base.md#guarda-firme) (defender não desgasta), [Reparar](habilidades-base-mentais.md#reparar) (recupera durabilidade) e [Golpe destruidor](habilidades-base-fisicas.md#golpe-destruidor) (força perda extra no alvo).

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
| **Leve** | `1d8` | `1d6` | `2d4` |
| **Média** | `1d12` | `1d8` | `3d4` |
| **Pesada** | `2d8` | `1d10` | `4d4` |

> ✅ **Aumento de letalidade — playtest 2 (19/07/2026).** O grupo achou as armas pouco letais.
> A escala **subiu um degrau**: o antigo dano **médio** virou o **leve** (decisão do André —
> perfurante leve `1d6`, cortante leve `1d8`, contundente leve `2d4`). 💡 **Proposta da IA para
> os demais degraus** (a validar): mantendo a progressão de cada tipo — cortante `1d8 → 1d12 → 2d8`,
> perfurante `1d6 → 1d8 → 1d10`, contundente `2d4 → 3d4 → 4d4`.
>
> Médias/altas aproximadas: cortante 4,5 / 6,5 / 9 · perfurante 3,5 / 4,5 / 5,5 · contundente 5 / 7,5 / 10.

- **Versátil (`VERS.`)** é exclusiva de armas **médias**: a arma ganha **+`1d4`** quando usada **com duas mãos**.
- **Armas de mais de um tipo:** a arma pode ser usada em **qualquer um de seus tipos** — o atacante declara o tipo no golpe e usa o dado + o efeito daquele tipo (a propriedade correspondente, com maestria). Na tabela, os tipos são listados lado a lado.
- **Ataque desarmado** = `1d4`. **Armas improvisadas** (usadas em corpo a corpo): leve `1d6−1`, média `1d8−1`, pesada `1d10−1`.
- **Arremesso de objeto improvisado** (arremessar algo que não é arma de arremesso, ou pela habilidade "Arremesso improvisado"): objeto **leve = `1`**, **médio = `1d4−2`** (≈1d2), **pesado = `1d4−1`**, sempre **com desvantagem** por ser impróprio. **Arremessar uma arma de verdade** sem a propriedade `ARRE.` usa o **dano normal da arma**, também com desvantagem. *(Corrigido no playtest 1, 18/07/2026.)*

> ✅ Decidido em 12/07/2026 (ver [decisões — dano das armas](../../notas-de-design/decisoes/2026-07-12-dano-variavel-armas.md)). Os danos das tabelas abaixo foram gerados por esta matriz — **em revisão** arma por arma.

## Lista base de armas corpo a corpo

| **Item** | **Peso / Ações** | **Categoria / Propriedades** | **Alc. ideal** | **Dano** | **Preço suger.** | **Durabilidade** |
| --- | --- | --- | --- | --- | --- | --- |
| Ataque desarmado | **`1 PA`** | **`CONT.`** | **`1m`** | **`1d4`** | --- | — |
| Manoplas com cravos, Adaga de soco, Tekkokagi, Rapieira | **`Leve`**<br>**`2 PA`** | **`CURT.`** **`PERF.`** | **`1m`** | **`1d6`** | **`6 moedas`** | **`20`** |
| Shuriken | **`Leve`**<br>**`2 PA`** | **`CURT.`** **`PERF.` `ARRE.`** | **`2m a 5m`** | **`1d6`** | **`4 moedas`** | **`20`** |
| Faca, Foice de mão | **`Leve`**<br>**`2 PA`** | **`CURT.`** **`CORT.` `PERF.`** | **`1m`** | **`1d8` `CORT.` · `1d6` `PERF.`** | **`3 moedas`** | **`20`** |
| Bastão curto, Tonfa, Martelo Curto | **`Leve`**<br>**`2 PA`** | **`CURT.`** **`CONT.` `ARRE.`** | **`1m`** / **`2m a 5m`** | **`2d4`** | **`4 moedas`** | **`20`** |
| Adaga, Kukri, Kunai | **`Leve`**<br>**`2 PA`** | **`CURT.`** **`CORT.` `PERF.` `ARRE.`** | **`1m`** / **`2m a 5m`** | **`1d8` `CORT.` · `1d6` `PERF.`** | **`6 moedas`** | **`20`** |
| Chakram | **`Leve`**<br>**`2 PA`** | **`CURT.`** **`CORT.` `ARRE.`** | **`1m`** / **`2m a 5m`** | **`1d8`** | **`20 moedas`** | **`20`** |
| Escudo de arremesso | **`Leve`**<br>**`2 PA`** | **`CURT.`** **`CONT.` `DEFL.`** **`ARRE.`** | **`2m a 5m`** | **`2d4`** | **`12 moedas`** | **`20`** |
| Facão, Machete, Peixeira | **`Média`**<br>**`4 PA`** | **`CURT.`** **`CORT.`** | **`1m`** | **`1d12`** | **`4 moedas`** | **`30`** |
| Espada Curta, Foice curta, Cimitarra, Falcione, Khopesh | **`Média`**<br>**`4 PA`** | **`CURT.`** **`CORT.` `PERF.`** | **`1m`** | **`1d12` `CORT.` · `1d8` `PERF.`** | **`8 moedas`** | **`30`** |
| Lança, Seta | **`Média`**<br>**`4 PA`** | **`LONG.`** **`PERF.` `ARRE.`** | **`2m`** | **`1d8`** | **`8 moedas`** | **`30`** |
| Gato de nove caudas | **`Média`**<br>**`4 PA`** | **`CURT.`** **`CORT.` `AGAR.`** | **`1m`** | **`1d12`** | **`32 moedas`** | **`30`** |
| Chicote, Corrente | **`Média`**<br>**`4 PA`** | **`LONG.`** **`CORT.` `AGAR.`** | **`3m a 4m`** | **`1d12`** | **`12 moedas`** | **`30`** |
| Machadinha | **`Média`**<br>**`4 PA`** | **`CURT.`** **`CORT.` `ARRE.`** | **`1m`** / **`2m a 4m`** | **`1d12`** | **`6 moedas`** | **`30`** |
| Boomerangue (Se não acerta um alvo, volta) | **`Média`**<br>**`4 PA`** | **`CURT.`** **`CONT.` `ARRE.`** | **`1m`** / **`2m a 5m`** | **`3d4`** | **`12 moedas`** | **`30`** |
| Tridente, Brandistock | **`Média`**<br>**`4 PA`** | **`LONG.`** **`PERF.` `VERS.`** | **`2m a 3m`** | **`1d8`** (+`1d4` a 2 mãos) | **`12 moedas`** | **`30`** |
| Bastão médio, Nunchaku, Martelo Médio | **`Média`**<br>**`4 PA`** | **`CURT.`** **`CONT.` `VERS.`** | **`1m`** | **`3d4`** (+`1d4` a 2 mãos) | **`8 moedas`** | **`30`** |
| Rede | **`Média`**<br>**`4 PA`** | **`LONG.`** **`AGAR.`** **`ARRE.`** | **`1m a 5m`** | **`0`** | **`4 moedas`** | **`10`** |
| Picareta de mão | **`Média`**<br>**`4 PA`** | **`CURT.`** **`PERF.` `VERS.`** | **`1m`** | **`1d8`** (+`1d4` a 2 mãos) | **`5 moedas`** | **`30`** |
| Machado | **`Média`**<br>**`4 PA`** | **`CURT.`** **`CORT.` `VERS.` `ARRE.`** | **`1m`** / **`2m a 4m`** | **`1d12`** (+`1d4` a 2 mãos) | **`8 moedas`** | **`30`** |
| Clava, Maça | **`Média`**<br>**`4 PA`** | **`CURT.`** **`CONT.`** **`PERF.`** **`VERS.`** | **`1m`** | **`3d4` `CONT.` · `1d8` `PERF.`** (+`1d4` a 2 mãos) | **`6 moedas`** | **`30`** |
| Mangual, Maça estrela, Espada Longa, Bastarda, Sabre, Katana | **`Média`**<br>**`4 PA`** | **`LONG.`** **`CORT.`** **`PERF.` `VERS.`** | **`1m a 2m`** | **`1d12` `CORT.` · `1d8` `PERF.`** (+`1d4` a 2 mãos) | **`20 moedas`** | **`30`** |
| Kusarigama, Double-chained Kama | **`Média`**<br>**`4 PA`** | **`LONG.`** **`CORT.` `CONT.` `AGAR.` `ARRE.`** | **`3m a 4m`** | **`1d12` `CORT.` · `3d4` `CONT.`** | **`30 moedas`** | **`30`** |
| Bastão grande, Setsukon | **`Pesada`**<br>**`6 PA`** | **`LONG.`** **`CONT.`** | **`1m a 2m`** | **`4d4`** | **`6 moedas`** | **`40`** |
| Machado Pesado, Machado de Batalha | **`Pesada`**<br>**`6 PA`** | **`LONG.`** **`CORT.`** | **`1m a 2m`** | **`2d8`** | **`10 moedas`** | **`40`** |
| Picareta | **`Pesada`**<br>**`6 PA`** | **`CURT.`** **`PERF.`** | **`1m`** | **`1d10`** | **`6 moedas`** | **`40`** |
| Martelo Grande, Martelo de batalha | **`Pesada`**<br>**`6 PA`** | **`LONG.`** **`CONT.`** | **`1m a 2m`** | **`4d4`** | **`14 moedas`** | **`40`** |
| Alabarda | **`Pesada`**<br>**`6 PA`** | **`LONG.`** **`PERF.`** | **`2m a 3m`** | **`1d10`** | **`16 moedas`** | **`40`** |
| Lança montada (necessário os traços "Montaria" e "Justa") ⚠️ | **`Pesada`**<br>**`6 PA`** | **`LONG.`** **`PERF.`** | **`3m`** | **`1d10`** | **`9 moedas`** | **`40`** |
| Mangual pesado, Mangual Atroz, Maça Pesada, Clava pesada, Esp. de duas lâminas ⚠️ | **`Pesada`**<br>**`6 PA`** | **`LONG.`** **`CORT.`** **`PERF.`** | **`2m`** | **`2d8` `CORT.` · `1d10` `PERF.`** | **`14 moedas`** | **`40`** |
| Lança longa | **`Pesada`**<br>**`6 PA`** | **`LONG.`** **`PERF.`** **`ARRE.`** | **`2m`** / **`2m a 3m`** | **`1d10`** | **`10 moedas`** | **`40`** |
| Espada Larga, montante, Flamberge, Foice ceifadora | **`Pesada`**<br>**`6 PA`** | **`LONG.`** **`CORT.`** **`PERF.`** | **`2m`** | **`2d8` `CORT.` · `1d10` `PERF.`** | **`12 moedas`** | **`40`** |
| Corrente de espinhos | **`Pesada`**<br>**`6 PA`** | **`LONG.`** **`CORT.`** **`AGAR.`** | **`3m a 4m`** | **`2d8`** | **`16 moedas`** | **`40`** |
| Arma improvisada leve | **`Leve`** | **`CONT.`** |  | **`1d6−1`** |  | **`5`** |
| Arma improvisada média | **`Média`** | **`CONT.`** |  | **`1d8−1`** |  | **`8`** |
| Arma improvisada pesada | **`Pesada`** | **`CONT.`** |  | **`1d10−1`** |  | **`10`** |

*⚠️ A revisar: a **lança montada** (perfurante pesada) agora é `1d10` pela matriz — conferir se merece exceção como arma de carga. O grupo **"Mangual pesado… Esp. de duas lâminas"** tem nome contundente mas só lista `CORT.`/`PERF.` — alinhar as propriedades (se receber `CONT.`, ganha também `4d4`).*

## Lista base de armas à distância

| **Item** | **Tipo e Ações** | **Alc. ideal** | **Munição (consultar dano na tabela de munições)** | **Preço sugerido** | **Durabilidade** |
| --- | --- | --- | --- | --- | --- |
| Funda / Zarabatana | **`Leve`**<br>**`2 PA`** | **`4m a 7m`** | Pedras / Dardo | **`5 moedas`** | **`20`** |
| Arco curto, Besta de mão | **`Leve`**<br>**`2 PA`** | **`6m a 9m`** | Flecha ponta de madeira | **`20 moedas`** | **`20`** |
| Arco composto, Besta leve | **`Média`**<br>**`4 PA`** | **`7m a 10m`** | Flecha ponta de madeira, Flecha ponta de ferro | **`30 moedas`** | **`30`** |
| Arco longo, Besta pesada | **`Pesada`**<br>**`6 PA`** | **`8m a 12m`** | Flecha ponta de ferro | **`40 moedas`** | **`40`** |
| Besta de repetição | **`Pesada`**<br>**`6 PA`** | **`7m a 10m`** | Flecha ponta de ferro (x3) | **`80 moedas`** | **`40`** |
| Pistola simples | **`Leve`**<br>**`2 PA`** | **`2m a 15m`** | Bala de pólvora | **`220 moedas`** | **`20`** |
| Espingarda, Arquebus, Handgonne | **`Média`**<br>**`4 PA`** | **`1m a 5m`** | Bala de pólvora (x2) | **`260 moedas`** | **`30`** |
| Rifle, Mosquete | **`Pesada`**<br>**`6 PA`** | **`3m a 20m`** | Bala de pólvora | **`340 moedas`** | **`40`** |

## Lista base de munições

> 💡 PROPOSTA (IA) — projéteis = 1 dado. **Dano aumentado em 19/07/2026** (playtest 2), junto com o aumento de letalidade do corpo a corpo: madeira `1d6`, ferro `1d10` (decisão do André) e o resto da escala subindo na mesma proporção.

| **Item** | **Categoria** | **Dano** | **Preço sugerido** |
| --- | --- | --- | --- |
| Pedras | **`PROJ.`** | **`1d4−1`** | **`grátis`** (improvisado — 💡 proposta) |
| Dardo | **`PROJ.`** | **`1d4`** | **`1 moeda`** |
| Flecha ponta de madeira | **`PROJ.`** | **`1d6`** | **`1 moeda`** |
| Flecha ponta de ferro | **`PROJ.`** | **`1d10`** | **`3 moedas`** |
| Bala de pólvora | **`PROJ.`** | **`1d12`** | **`20 moedas`** |
