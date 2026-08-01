---
titulo: Saúde e Proteção
tipo: regra
cenario: base
status: estavel
tags: [saude, dano, cura, defesa, vida]
atualizado-em: 2026-07-12
---

# Saúde e Proteção

## Defesa e esquiva

Ao ser atacado, um personagem que não esteja [desabilitado](#membro-desabilitado-incapacitado-ou-invalidado) pode responder com um **contrateste** para não sofrer o golpe. Ele **escolhe como reage** (ver [contratestes](../conceitos/01-testes-e-contratestes.md#contrateste-de-esquiva)):

- **Esquivar — atributo `Ágil`.** Se o contrateste **vencer** o teste de acerto, o personagem **desvia e não sofre dano nenhum**.
- **Segurar / defender — atributo `Físico`.** Aparar o golpe na força bruta. Se o contrateste **vencer**, o personagem **ainda sofre metade do dano** (arredondado para baixo) — segurar apara, mas não anula o impacto. **Exceção:** defendendo com um **escudo em [guarda levantada](02-acoes-em-conflito.md#levantar-guarda-entrar-em-postura-defensiva)**, um contrateste de defesa bem-sucedido **anula todo o dano** (o escudo absorve — e perde **1 de [durabilidade](../listas/protecoes-base.md#durabilidade-das-proteções)**).

Isso dá **flexibilidade de build**: um personagem físico — ou que já gastou as aptidões Ágil na rodada — pode **segurar** os golpes na força, enquanto quem investe em Ágil **esquiva** e evita o dano por inteiro.

**Se o contrateste falhar** (o ataque conecta), o alvo sofre o dano, aplicando-se os **redutores de armadura/escudo** normalmente (dano mínimo 1; ver [Proteções](../listas/protecoes-base.md)).

**Dificuldade e modificadores:** ser alvejado nas pernas ou braços não garante `vantagem`; mirar na **cabeça ou tronco** dá `desvantagem` de acerto ao atacante. Armaduras, habilidades e a ação **[levantar guarda](02-acoes-em-conflito.md#levantar-guarda-entrar-em-postura-defensiva)** podem dar vantagens/redutores; as [aptidões](../conceitos/04-aptidoes.md) não concedem vantagem (só rerrolam o dado). O redutor de dano de uma armadura só se aplica se o golpe acertar uma **região que ela cobre**.

> ✅ Playtest 2 (19/07/2026): formalizada a escolha **esquivar (Ágil, evita todo o dano) × segurar (Físico, metade do dano; com escudo, zero)** — proposta do Gabriel, aprovada pelo grupo. Ver [relatório do playtest 2](../../notas-de-design/playtests/2026-07-18-playtest-cenario-2.md).

## Corpo e vida

**Marca de Sangue adota um sistema de vida dividido entre membros do corpo.** Cada personagem tem **60 pontos de vida (`PV`)** no total: cabeça, tronco, braço direito, braço esquerdo, perna direita e perna esquerda, com **10 `PV` cada um**. Desse modo, um personagem pode invalidar ou até perder um braço ou perna e continuar vivendo. **O mesmo não se aplica à cabeça e ao tronco.**

**A vida máxima não é um número fixo do sistema — é do personagem.** Um traço, uma mutação ou uma característica de cenário pode dar a alguém um membro com 12 `PV` em vez de 10; e o [dano permanente](#dano-permanente-perda-de-vida-máxima) faz esse número **descer**. O total de `PV` também define a [fadiga máxima](../conceitos/08-fadiga.md#fadiga-máxima) do personagem: corpo e fôlego andam juntos.

## Pontos de vida e dano

Cada membro tem **10 espaços de dano** (ou tantos quanto for a sua vida máxima). O dano pode ser **superficial** ou **profundo** — o mesmo espaço **muda de status** conforme o membro é castigado:

- **Dano superficial:** enquanto o membro ainda tem espaços livres, cada golpe marca **dano superficial** — machucados que **saram sozinhos com [descanso](../conceitos/09-descanso.md)** (o soco que incha e passa).
- **Ferida profunda (membro cheio):** **ao preencher todos os espaços**, o membro entra em estado de **ferida profunda** — todos aqueles danos passam a ser **profundos** e o membro fica **incapacitado** (não pode ser usado para ações até se recuperar). Dano profundo **não sara sozinho**: só melhora com **tratamento** (ver [Cura](#cura)).

### Dano permanente: perda de vida máxima

Com o membro **já cheio** (em ferida profunda), cada novo golpe ali não tem mais espaço onde ser marcado — então ele cobra do próprio corpo: **a vida máxima daquele membro cai em 1 ponto, e não volta.**

É o terceiro degrau do castigo, e o único irreversível. Na ficha não se marca um espaço: **risca-se um espaço para sempre**, e o membro passa a ter 9 de máximo, depois 8, depois 7. Quando a vida máxima de um membro chega a **zero**, ele é **invalidado**.

> **Resumo:** encher o membro → vira **profundo/incapacitado** → continuar apanhando ali → **a vida máxima começa a cair** → chegando a zero, **invalidado**.

Perder vida máxima tem duas consequências além do óbvio: o membro **enche mais rápido** da próxima vez (tem menos espaços), e a **[fadiga máxima](../conceitos/08-fadiga.md#fadiga-máxima) do personagem cai junto**, porque ela acompanha o total de `PV`. Um corpo destruído cansa antes.

> ✅ Reformulado em 01/08/2026 (Daniel e André): o dano permanente **deixou de ser um terceiro status do espaço de dano** e passou a ser **redução da vida máxima**. Mecanicamente dá quase no mesmo, mas some um estado da ficha (não há mais três marcações concorrentes no mesmo espaço) e a regra passa a explicar sozinha por que um veterano tem menos fôlego.

**Todo dano recebido gera [fadiga](../conceitos/08-fadiga.md):** cada ponto de dano sofrido (de qualquer tipo) adiciona **1 ponto de fadiga**. Mudar o status do membro (encher, virar profundo, perder máximo) **não** gera fadiga por si só — apenas os pontos de dano recebidos.

> 💡 **Falta de tratamento**
>
> Se o personagem passar um descanso sem tentar se tratar, ele **perde 1 ponto de vida máxima** no membro em ferida profunda. *Exemplo: Claus levou um corte que encheu o braço (ferida profunda). Sem tratamento, no dia seguinte o braço dele passa a ter 9 de máximo em vez de 10.*

> ✅ Playtest 1 (18/07/2026): modelo de dano reformulado — antes cada membro somava 10 superficiais + 10 profundos + 10 permanentes (30 no total); agora são **10 espaços que mudam de status**. E **todo dano gera 1 fadiga por ponto**. Ver [relatório do playtest 1](../../notas-de-design/playtests/2026-07-18-playtest-cenario-1.md).

Cada arma pode infligir uma certa quantidade de dano (saiba mais na seção Equipamentos). Da mesma forma, as armaduras podem defender o seu personagem de uma determinada quantidade de pontos de dano.

### Redutor de dano das armaduras (dano mínimo 1)

O **redutor de dano** de uma peça de armadura depende do seu tipo — **Leve −1, Média −2, Pesada −3** — e é subtraído do dano de cada golpe recebido **numa região que ela cobre** (ver [Proteções](../listas/protecoes-base.md)). A cada golpe recebido nessa região, a armadura também **perde 1 de durabilidade** naquele local.

**O redutor nunca reduz o dano abaixo de 1:** se o ataque acertou, o alvo sofre **no mínimo 1 ponto de dano**, mesmo que a redução da armadura supere o dano rolado.

> ✅ Decidido em 11/07/2026: a tabela define a redução (o antigo "reduz 1 de dano" era exemplo, não regra universal) e existe o dano mínimo 1 (ver [notas-de-design/decisoes/2026-07-11-terminologia-alcance-descanso.md](../../notas-de-design/decisoes/2026-07-11-terminologia-alcance-descanso.md), item A1).

### Membro desabilitado (incapacitado ou invalidado)

Três termos oficiais descrevem um membro fora de uso:

- **Incapacitado** — membro **cheio de dano profundo** (todos os seus espaços preenchidos). Deixa de poder ser usado para ações até se recuperar (consequências em [Penalidades por perda de vida](#penalidades-por-perda-de-vida));
- **Invalidado** — membro cuja **vida máxima chegou a zero**. Não se recupera por meios convencionais;
- **Desabilitado** — **termo guarda-chuva**: um membro está desabilitado quando está **incapacitado OU invalidado**. É o termo usado nos gatilhos e requisitos de características (ex.: "não ter nenhuma perna desabilitada").

"Impedido" e "inválido" não são termos do sistema — use **desabilitado**.

> ✅ Decidido em 11/07/2026 (ver [notas-de-design/decisoes/2026-07-11-terminologia-alcance-descanso.md](../../notas-de-design/decisoes/2026-07-11-terminologia-alcance-descanso.md), item B5).

Na ficha de personagem, há um espaço em cada membro para que sejam preenchidos os danos já recebidos. Superficial e profundo precisam ser marcados de forma diferente, para que seja fácil distinguir um do outro.

A sugestão da ficha que você encontra no final deste manual é marcar os espaços da esquerda para a direita com um **traço diagonal** para o dano superficial e, depois que o membro encher, converter as marcações em **“x”** para o dano profundo. A **perda de vida máxima** não é uma marcação de dano: **risque o espaço fora**, da direita para a esquerda, indicando que aquele espaço deixou de existir. **Não se preocupe com a possibilidade de estragar a ficha — esse espaço não vai voltar mesmo.**

## Cura

Quando é possível descansar — e o que cada tipo de descanso recupera — está definido em [Descanso](../conceitos/09-descanso.md).

### Curando danos superficiais

Durante um [descanso longo](../conceitos/09-descanso.md#descanso-longo), o personagem recupera **`1d6`** pontos de dano superficial. Para curar mais do que isso de uma vez, é preciso a ação de um médico, algum item ou habilidade especial.

Para tentar curar um dano superficial sem descansar e sem um médico, o personagem pode fazer um teste de cura desajeitada. Se passar o resultado do contrateste, cura **`1d4`** pontos de vida. **Se falhar no teste de cura, recebe mais um ponto de dano superficial no local ferido.**

### Tratando danos profundos

Diferentemente dos danos superficiais, os danos profundos não se curam sozinhos com o tempo. Para que eles sejam revertidos, é preciso uma ação ativa do personagem.

Personagens comuns podem fazer, uma vez por dia, um teste de “tratamento improvisado” para tentar transformar um ponto de dano profundo em dano superficial. Para isso joga **`1d10`** e o narrador faz o contrateste.

Se o jogador ganhar, **`1d4`** pontos de dano profundo são transformados em superficial. Se perder, o membro **perde 1 ponto de vida máxima** — dano permanente, que não volta por meios convencionais.

## Penalidades por perda de vida

O desgaste do combate pesa nos `PA` **através da [fadiga](../conceitos/08-fadiga.md)**: cada ponto de dano recebido gera **1 ponto de fadiga**, e a fadiga acumulada reduz os `PA` do turno (**−1 `PA` a cada 10 pontos**; ver [Fadiga — penalidades por acúmulo](../conceitos/08-fadiga.md#penalidades-por-acúmulo)). Dessa forma, não há uma penalidade de `PA` separada por "dano total": ela já está contabilizada na fadiga que o dano gera. **O mínimo que um personagem pode ter de `PA` por turno é `3 PA`** (piso unificado — ver [Pontos de ação](../conceitos/07-pontos-de-acao.md)), a não ser que esteja inconsciente.

> ✅ Reconciliado em 2026-07-18: a antiga regra "a cada 10 de dano total, −1 `PA`" foi **substituída** pelo encadeamento dano superficial → fadiga → `PA`, evitando dupla contagem. Ver [decisões — dano, fadiga e PA](../../notas-de-design/decisoes/2026-07-18-dano-fadiga-pa.md).

Membros se tornam **incapacitados** ao encher de dano profundo. Isso significa que uma ação que dependa daquele membro será mais difícil de realizar. As consequências são:

- Ao ter uma perna incapacitada, cada 1 metro de movimento passa a custar **`2 PA`**.
- Ao ter a mão hábil incapacitada, o jogador precisa gastar **`1 PA`** a mais para realizar qualquer ataque ou ação com a mão restante.
- Ao ter o tronco incapacitado, todas as ações recebem desvantagem, perde a capacidade de utilizar habilidades e não pode atacar.
- Ao ter a cabeça incapacitada, o jogador fica inconsciente e, se acordar, todas as ações recebem desvantagem e perde a capacidade de utilizar habilidades, não pode atacar.

Um personagem pode morrer de duas formas:

- **Um membro vital invalidado**: ao ter a cabeça ou o tronco invalidados — ou seja, com a **vida máxima zerada** em uma dessas partes, que são consideradas vitais; ou
- **Dois membros não vitais invalidados:** ao ter dois membros periféricos (braço direito, braço esquerdo, perna direita ou perna esquerda) com a **vida máxima zerada**.
