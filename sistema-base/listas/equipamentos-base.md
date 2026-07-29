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

### Valores de durabilidade (📝 proposta para calibrar)

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

- **Projéteis (`PROJ.`)** — **reduz a [cobertura](../conflitos/01-conflito-fisico.md#cobertura) do alvo em um nível**: **cobertura completa** conta como **meia cobertura** (o alvo deixa de ser inatingível e passa a só receber o `+1d10`), e **meia cobertura** é **ignorada** (o alvo não recebe o `+1d10`). Não afeta a [elevação](../conflitos/01-conflito-fisico.md#elevação) nem barreiras **acima** do alvo. Além disso, ao **acertar** o oponente, **recarregar o equipamento não custa `PA`**.
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
> perfurante leve `1d6`, cortante leve `1d8`, contundente leve `2d4`). 📝 **Proposta da IA para
> os demais degraus** (a validar): mantendo a progressão de cada tipo — cortante `1d8 → 1d12 → 2d8`,
> perfurante `1d6 → 1d8 → 1d10`, contundente `2d4 → 3d4 → 4d4`.
>
> Médias/altas aproximadas: cortante 4,5 / 6,5 / 9 · perfurante 3,5 / 4,5 / 5,5 · contundente 5 / 7,5 / 10.

- **Versátil (`VERS.`)** é exclusiva de armas **médias**: a arma ganha **+`1d4`** quando usada **com duas mãos**.
- **Armas de mais de um tipo:** a arma pode ser usada em **qualquer um de seus tipos** — o atacante declara o tipo no golpe e usa o dado + o efeito daquele tipo (a propriedade correspondente, com maestria). Na tabela, os tipos são listados lado a lado.
- **Ataque desarmado** = `1d4`. **Armas improvisadas** (usadas em corpo a corpo): leve `1d6−1`, média `1d8−1`, pesada `1d10−1`.
- **Arremesso de objeto improvisado** (arremessar algo que não é arma de arremesso, ou pela habilidade "Arremesso improvisado"): objeto **leve = `1d6−1`**, **médio = `1d8−1`**, **pesado = `1d10−1`** (mesmo dano de uma arma improvisada), sempre **com desvantagem** por ser impróprio. **Arremessar uma arma de verdade** sem a propriedade `ARRE.` usa o **dano normal da arma**, também com desvantagem. *(Dano subido em 19/07/2026, junto com o aumento de letalidade.)*

> ✅ Decidido em 12/07/2026 (ver [decisões — dano das armas](../../notas-de-design/decisoes/2026-07-12-dano-variavel-armas.md)). Os danos das tabelas nos **módulos de armas** foram gerados por esta matriz — **em revisão** arma por arma.

## Catálogo de armas e proteções (nos módulos)

As **listas de itens** saíram do núcleo para a **coleção `armas`** e o módulo `protecoes`. Aqui
fica só o **sistema** (matriz de dano, propriedades, alcance, durabilidade, ataque
desarmado/armas improvisadas); os itens nomeados estão em:

- [Armas brancas](../../modulos/armas-brancas/README.md) — lâminas, impacto, hastes, machados, foices.
- [Armas exóticas](../../modulos/armas-exoticas/README.md) — chicotes, correntes, kusarigama, rede, chakram, boomerangue…
- [Arcos e bestas](../../modulos/arcos-e-bestas/README.md) — à distância mecânicas + **munição** (flechas, pedras, dardos).
- [Armas de fogo](../../modulos/armas-de-fogo/README.md) — pólvora + **balas**.
- [Proteções](../../modulos/protecoes/README.md) — armaduras e escudos.

> Coleção e módulos: ver [modulos/colecoes.md](../../modulos/colecoes.md) e [modulos/README.md](../../modulos/README.md).
> Armas japonesas (Mukashi) não têm módulo próprio: entram nas famílias acima (brancas/exóticas)
> e o cenário só aponta onde estão.
