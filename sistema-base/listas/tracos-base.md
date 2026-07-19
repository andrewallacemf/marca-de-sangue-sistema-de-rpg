---
titulo: Lista de Traços base
tipo: regra
cenario: base
status: revisao
tags: [tracos, tecnicas, maestrias, aspectos]
atualizado-em: 2026-07-12
---

# Lista de Traços base

## Técnicas

> ✅ Decidido em 11/07/2026: o nome oficial da categoria é **técnica** (ver [notas-de-design/decisoes/2026-07-11-ajustes-pos-lote-1.md](../../notas-de-design/decisoes/2026-07-11-ajustes-pos-lote-1.md)).

Técnicas são traços que **apenas anulam a desvantagem natural** dos testes da atividade correspondente — não concedem vantagem (ver [Traços](../conceitos/06-tracos.md)).

> ✅ Lista aprovada pelo grupo em 11/07/2026 (migrada das antigas especializações).

| Atividade | Atributo | **Custo de compra** |
| --- | --- | --- |
| Técnica em **Agarrar** | `Físico` | **`1 exp.`** |
| Técnica em **Empurrar** | `Físico` | **`1 exp.`** |
| Técnica em **Arremessar** | `Físico` | **`1 exp.`** |
| Técnica em **Saltar** | `Ágil` | **`1 exp.`** |
| Técnica em **Nadar** | `Ágil` | **`1 exp.`** |
| Técnica em **Realizar truques** | `Ágil` ou `Social` | **`1 exp.`** |
| Técnica em **Esconder-se** | `Ágil` | **`1 exp.`** |
| Técnica em **Investigar/Observar** | `Mental` | **`1 exp.`** |
| Técnica em **Ponderar** | `Mental` | **`1 exp.`** |
| Técnica em **Intimidar** | `Social` | **`1 exp.`** |
| Técnica em **Persuadir/Seduzir** | `Social` | **`1 exp.`** |
| Técnica em **Performar** | `Social` | **`1 exp.`** |
| Técnica em **Tratar/Curar** | `Social` ou `Mental` | **`3 exp.`** |
| Técnica em **Negociar** | `Social` ou `Mental` | **`3 exp.`** |

## Maestrias base

> ✅ Decidido em 11/07/2026: a categoria "especializações" deixou de existir — a antiga
> "especialização em ataque desarmado" agora é a maestria abaixo, com o mesmo custo das demais.

**Custo escalonado.** As propriedades de maestria são fortes, então o custo **cresce conforme quantas maestrias você já tem**: a **1ª** maestria custa **`1 exp.`**, a **2ª** custa **`2 exp.`**, a **3ª** custa **`3 exp.`**, e assim por diante (conta o total de maestrias que você possui, de qualquer tipo). Assim, na criação todo mundo consegue pegar **uma** maestria barata, mas juntar várias fica caro. Os valores da tabela abaixo são o **custo-base (1ª maestria)**.

> ✅ Playtest 1 (18/07/2026): custo de maestria passou de fixo `1 exp.` para **escalonado** (1ª = 1, 2ª = 2, 3ª = 3…). Ver [relatório do playtest 1](../../notas-de-design/playtests/2026-07-18-playtest-cenario-1.md).

| **Equipamento / forma de combate**         | **Custo de compra** |
| ------------------------------------------ | ------------------- |
| Maestria em **armas cortantes `CORT.`**    | **`1 exp.`**        |
| Maestria em **armas contundentes `CONT.`** | **`1 exp.`**        |
| Maestria em **armas perfurantes `PERF.`**  | **`1 exp.`**        |
| Maestria em **armas de agarrar `AGAR.`**   | **`1 exp.`**        |
| Maestria em **armas versáteis `VERS.`**    | **`1 exp.`**        |
| Maestria em **armas de deflexão `DEFL.`**  | **`1 exp.`**        |
| Maestria em **projéteis `PROJ.`**          | **`1 exp.`**        |
| Maestria em **armaduras leves**            | **`1 exp.`**        |
| Maestria em **armaduras médias**           | **`1 exp.`**        |
| Maestria em **armaduras pesadas**          | **`1 exp.`**        |
| Maestria em **ataque desarmado `DESA.`**   | **`1 exp.`**        |

**Maestria em ataque desarmado:** permite realizar **ataque mirado sem desvantagem**,
valendo **apenas para ataques desarmados** (ex.: soco). Viabiliza builds de lutador.

## Aspectos base

> ✅ Tabela saneada e aprovada pelo grupo em 11/07/2026: duplicata de "Lépido" removida
> (vale `3 exp.`), custos alinhados às entradas detalhadas (Alerta, Vigilante,
> Escorregadio, Reativo e Apoiador = `4 exp.`), aspectos com entrada incluídos na tabela,
> e "Versatilidade" **fundida no aspecto Firme** (na v0.4.1 ela tinha o mesmo efeito).

| **Aspecto** | **Custo de compra** |
| --- | --- |
| Empacado | **`2 exp.`** |
| Emboscador | **`4 exp.`** |
| Espreitador | **`4 exp.`** |
| Lépido | **`3 exp.`** |
| Resistente | **`3 exp.`** |
| Protetor | **`4 exp.`** |
| Blindado | **`4 exp.`** |
| Vigilante | **`4 exp.`** |
| Escorregadio | **`4 exp.`** |
| Reativo | **`4 exp.`** |
| Alerta | **`4 exp.`** |
| Apoiador | **`4 exp.`** |
| Corredor | **`8 exp.`** |
| Maratonista | **`4 exp.`** |
| Dorminhoco | **`7 exp.`** |
| Firme | **`4 exp.`** |
| Firme aprimorado | **`4 exp.`** |
| Saltador | **`3 exp.`** |
| Burro de carga | **`6 exp.`** |
| Fôlego de ferro | **`4 exp.`** |
| Mão rápida | **`2 exp.`** |
| Zeloso | **`4 exp.`** |
| Reforçado | **`4 exp.`** |
| Guarda firme | **`4 exp.`** |

Aspectos são traços que afetam a forma como o personagem responde a determinadas situações. Comprar aspectos permite que o personagem realize ações ou ignore regras em determinadas situações.

## Lista de Aspectos (em ordem alfabética)

### Alerta

**Custo de compra:** `4 exp.`

#### Descrição

Pode realizar um ataque corpo a corpo descuidado quando um oponente entra em seu alcance ideal.

#### Condição de uso (gatilho)

- Um oponente entrar em seu alcance ideal.

#### Requisitos de uso

- Estar com guarda levantada.
- Não ter usado seu ataque de oportunidade nesta rodada.

### Corredor

**Custo de compra:** `8 exp.`

#### Descrição

Dobra o limite de PA que podem ser utilizados no deslocamento.

#### Requisitos de uso

- Não ter pernas desabilitadas

### Apoiador

**Custo de compra:** `4 exp.`

#### Descrição

Pode usar aptidões nos testes de um aliado adjacente.

#### Condição de uso (gatilho)

- Estar adjacente a um aliado.

#### Requisitos de uso

- Usar aptidões do mesmo atributo da ação.

### Blindado

**Custo de compra:** `4 exp.`

#### Descrição

Defende ataques à distância com **`+1d10 de vantagem`**.

#### Condição de uso (gatilho)

- Utilizar uma guarda levantada ao ser atacado a distância.

#### Requisitos de uso

- Estar usando escudo.

### Maratonista

**Custo de compra:** `4 exp.`

#### Descrição

Pode dobrar seu movimento ao correr em linha reta.

#### Condição de uso (gatilho)

- Gastar pelo menos 5 PA de movimento em linha reta.

#### Requisitos de uso

- Não possuir nenhuma perna desabilitada.
- Não mudar a direção do movimento.
- Não estar utilizando armas ou armaduras pesadas.

### Dorminhoco

**Custo de compra:** `7 exp.`

#### Descrição

Ao descansar, utiliza 1d8 para curar dano ao invés de 1d6

#### Condição de uso (gatilho)

- Descanso longo

#### Requisitos de uso

- Sem requisitos

### Emboscador

**Custo de compra:** `4 exp.`

#### Descrição

Dobra o **resultado** do dano do ataque (rola-se o dano normalmente e multiplica-se o total por 2).

#### Condição de uso (gatilho)

- Atacar um oponente pelas costas.

#### Requisitos de uso

- Estar escondido de todos os oponentes.
- Estar usando armas leves.

### Espreitador

**Custo de compra:** `4 exp.`

#### Descrição

Permite usar a ação **[Esconder-se](../conflitos/05-furtividade.md#esconder-se)** como uma
**reação** (consumindo a reação da rodada e pagando o custo em [fadiga](../conceitos/08-fadiga.md),
como toda reação). Sem este aspecto, esconder-se só pode ser feito como ação, no próprio turno.

#### Condição de uso (gatilho)

- Estar prestes a ser notado por um oponente (ou outra situação em que se esconder fora do turno
  faça sentido, a critério do narrador).

#### Requisitos de uso

- Valem os pré-requisitos normais de [Esconder-se](../conflitos/05-furtividade.md#esconder-se)
  (estar fora do campo de visão dos inimigos, salvo habilidade que diga o contrário).

> ✅ Playtest 2 (18/07/2026): aspecto criado para permitir esconder-se como reação (a ação
> padrão custa `2 PA` no turno). Ver [relatório do playtest 2](../../notas-de-design/playtests/2026-07-18-playtest-cenario-2.md).

### Empacado

**Custo de compra:** `2 exp.`

#### Descrição

Reduz qualquer movimentação forçada pela metade (arredondado para baixo).

#### Condição de uso (gatilho)

- Ser alvo de movimentação forçada (por oponentes ou causas naturais).

#### Requisitos de uso

- Não ter nenhuma perna desabilitada.

### Escorregadio

**Custo de compra:** `4 exp.`

#### Descrição

Recebe **`+1d10 de vantagem`** para esquivar de ataques de oportunidade.

#### Condição de uso (gatilho)

- Receber um ataque de oportunidade.

#### Requisitos de uso

- Não estar utilizando armadura média ou pesada.

### Firme

**Custo de compra:** `4 exp.`

#### Descrição

Pode usar armas pesadas com apenas uma mão, com **−3 de dano**.

> ✅ Aprovado pelo grupo em 12/07/2026: o antigo traço "Versatilidade" (v0.4.1) foi
> **fundido no Firme** e condensado em dois traços ligados por requisito (não são níveis)
> — ver [decisões — lote 2](../../notas-de-design/decisoes/2026-07-12-decisoes-de-regra-lote-2.md), item 5.

#### Condição de uso (gatilho)

- Usar uma arma pesada

#### Requisitos de uso

- Não ter nenhuma mão desabilitada.

### Firme aprimorado

**Custo de compra:** `4 exp.`

#### Descrição

Remove a redução de dano do [Firme](#firme): pode usar armas pesadas com apenas uma mão
**sem redução de dano**.

#### Condição de uso (gatilho)

- Usar uma arma pesada

#### Requisitos de uso

- Possuir o traço [Firme](#firme).
- Não ter nenhuma mão desabilitada.

### Lépido

**Custo de compra:** `3 exp.`

#### Descrição

Pode recuar 1 metro imediatamente após atacar.

#### Condição de uso (gatilho)

- Acertar o oponente com um ataque descuidado.

#### Requisitos de uso

- Estar utilizando uma arma de longo alcance.

### Protetor

**Custo de compra:** `4 exp.`

#### Descrição

Pode realizar um teste para desviar o dano que um aliado adjacente receberia para você.

Se obtiver sucesso no teste, é acertado pelo golpe e recebe o dano, seus redutores de dano são aplicados.

#### Condição de uso (gatilho)

- Ser acertado por um ataque.

#### Requisitos de uso

- Estar a 1 metro de um aliado que está sendo atacado.
- Estar usando escudo.

### Reativo

**Custo de compra:** `4 exp.`

#### Descrição

Pode desferir um ataque de oportunidade quando o oponente sai do seu alcance ideal.

#### Condição de uso (gatilho)

- Um oponente sair do seu alcance ideal.

#### Requisitos de uso

- Estar com guarda levantada.
- Não ter usado seu ataque de oportunidade nesta rodada.

### Resistente

**Custo de compra:** `3 exp.`

#### Descrição

Reduz o dano recebido pela metade.

#### Condição de uso (gatilho)

- Ser acertado por um ataque.

#### Requisitos de uso

- Ter gasto uma guarda levantada para tentar se defender do ataque.
- Estar utilizando armadura média ou pesada.

### Saltador

**Custo de compra:** `3 exp.`

#### Descrição

Eleva o limite de salto de **5 metros para 10 metros**. *(Substitui o antigo bônus de alcance da especialização de Saltar, que não cabia numa técnica — ver [decisões — lote 2](../../notas-de-design/decisoes/2026-07-12-decisoes-de-regra-lote-2.md), item 6.)*

#### Condição de uso (gatilho)

- Realizar a ação de saltar.

#### Requisitos de uso

- Possuir a **Técnica em Saltar**.
- Não ter nenhuma perna [desabilitada](../conflitos/03-saude-e-protecao.md#membro-desabilitado-incapacitado-ou-invalidado).

### Vigilante

**Custo de compra:** `4 exp.`

#### Descrição

Pode desferir um ataque de oportunidade a distância (exceção à regra geral de que ataques à distância não fazem ataque de oportunidade — ver [Engajamento](../conflitos/01-conflito-fisico.md#engajamento)).

#### Condição de uso (gatilho)

- Se um oponente sair do seu alcance ideal.

#### Requisitos de uso

- Estar usando uma arma de arremesso (já equipada).
- Não ter usado seu ataque de oportunidade nesta rodada.

### Burro de carga

**Custo de compra:** `6 exp.`

#### Descrição

Não gasta PA extra para deslocar um aliado que esteja agarrado.

#### Condição de uso (gatilho)

- O aliado só pode ser carregado de forma voluntária.

#### Requisitos de uso

—

### Fôlego de ferro

**Custo de compra:** `4 exp.`

#### Descrição

Eleva o teto do **uso voluntário de [fadiga](../conceitos/08-fadiga.md#uso-voluntario-fadiga-vira-pa-extra)**: você pode comprar `PA` extra com fadiga até o **`PA` base inteiro** (em vez de só metade dele).

#### Requisitos de uso

- Sem requisitos.

> ✅ Playtest 1 (18/07/2026): traço criado para permitir gastar mais fadiga por turno, já que o teto padrão caiu para metade do `PA` base.

### Mão rápida

**Custo de compra:** `2 exp.`

#### Descrição

Guardar e sacar (trocar) uma arma equipada custa **`1 PA`** (em vez de `2 PA`).

#### Requisitos de uso

- Sem requisitos.

> ✅ Playtest 1 (18/07/2026): resgatado para o **sistema base** (existia como traço de cenário no Colapso).

### Zeloso

**Custo de compra:** `4 exp.`

#### Descrição

Cuida bem do próprio equipamento: seus itens perdem **[durabilidade](../listas/equipamentos-base.md#durabilidade-das-armas) na metade do ritmo** — a cada **2** golpes que normalmente tirariam 1 de durabilidade (da sua arma, ou da peça de armadura/escudo que absorveu o golpe), perde-se **apenas 1**.

#### Condição de uso (gatilho)

- Um golpe que gastaria durabilidade de um equipamento seu.

#### Requisitos de uso

- Sem requisitos.

> ✅ Aprovado pelo grupo em 19/07/2026 (traços de durabilidade).

### Reforçado

**Custo de compra:** `4 exp.`

#### Descrição

Suas peças de proteção são mais resistentes: a **durabilidade máxima** de cada peça de armadura e de cada escudo que você usa é aumentada em **+50%** (arredondado para cima).

#### Requisitos de uso

- Estar usando a proteção (armadura ou escudo).

> ✅ Aprovado pelo grupo em 19/07/2026 (traços de durabilidade).

### Guarda firme

**Custo de compra:** `4 exp.`

#### Descrição

Apara golpes sem desgastar o equipamento: quando você usa uma **[guarda levantada](../conflitos/02-acoes-em-conflito.md#levantar-guarda-entrar-em-postura-defensiva)** para defender um ataque, a arma ou o escudo usado **não perde durabilidade** por essa defesa.

#### Condição de uso (gatilho)

- Gastar uma guarda levantada para defender um ataque.

#### Requisitos de uso

- Ter a **Maestria em armas de deflexão `DEFL.`** (defender com arma) ou estar usando um **escudo**.

> ✅ Aprovado pelo grupo em 19/07/2026 (traços de durabilidade).
