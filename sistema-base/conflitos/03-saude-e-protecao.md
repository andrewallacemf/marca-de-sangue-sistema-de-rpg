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

Ao ser atacado, um jogador que não esteja [desabilitado](#membro-desabilitado-incapacitado-ou-invalidado) possui a chance de rolar um contrateste de defesa para se proteger ou esquivar do ataque inimigo. A dificuldade do contrateste depende principalmente de onde o inimigo está mirando.

**Ser alvejado nas pernas ou braços não garante `vantagem`, porém se o inimigo mirar na sua cabeça ou tronco, ele terá `desvantagem` de acerto.**

Armaduras, habilidades e a ação “entrar em defensiva” podem garantir vantagens adicionais de defesa ou redutores de dano caso acertado. Já as [aptidões](../conceitos/04-aptidoes.md) não concedem vantagem: elas permitem rerrolar o dado do teste ou do contrateste depois de conhecido o resultado. O **redutor de dano de uma armadura só se aplica se o golpe acertar uma das regiões que ela cobre** (ver [Proteções](../listas/protecoes-base.md)); vantagens de esquiva de outras fontes seguem suas próprias descrições.

## Corpo e vida

**Marca de Sangue adota um sistema de vida dividido entre membros do corpo.** Cada personagem tem 60 pontos de vida (PV), no total. Cabeça, tronco, braço direito, braço esquerdo, perna direita e perna esquerda tem 10 pontos de vida cada um. Desse modo, um personagem pode invalidar ou até perder um braço ou perna e continuar vivendo. **O mesmo não se aplica à cabeça e ao tronco.**

## Pontos de vida e dano

Cada membro tem **10 espaços de dano**. O dano pode ser **superficial**, **profundo** ou **permanente** — e, na prática, o mesmo espaço **muda de status** conforme o membro é castigado:

- **Dano superficial:** enquanto o membro ainda tem espaços livres, cada golpe marca **dano superficial** — machucados que **saram sozinhos com [descanso](../conceitos/10-descanso.md)** (o soco que incha e passa).
- **Ferida profunda (membro cheio):** **ao preencher os 10 espaços**, o membro entra em estado de **ferida profunda** — todos aqueles danos passam a ser **profundos** e o membro fica **incapacitado** (não pode ser usado para ações até se recuperar). Dano profundo **não sara sozinho**: só melhora com **tratamento** (ver [Cura](#cura)).
- **Dano permanente:** com o membro já cheio (em ferida profunda), **cada novo golpe converte um dano em permanente** — marca definitiva, que **não volta** por meios convencionais. Quando os 10 espaços do membro se tornam permanentes, ele é **invalidado**.

> **Resumo:** encher o membro → vira **profundo/incapacitado** → continuar apanhando ali → vira **permanente/invalidado**. Fica mais perigoso e recompensa proteger (e mirar) membros específicos.

**Todo dano recebido gera [fadiga](../conceitos/08-fadiga.md):** cada ponto de dano sofrido (de qualquer tipo) adiciona **1 ponto de fadiga**. Mudar o status do membro (encher, virar profundo/permanente) **não** gera fadiga por si só — apenas os pontos de dano recebidos.

> 💡 **Falta de tratamento**
>
> Se o personagem passar um descanso sem tentar se tratar, um ponto de dano **profundo** se torna **permanente** automaticamente. *Exemplo: Claus levou um corte que encheu o braço (ferida profunda). Sem tratamento, no dia seguinte 1 daqueles pontos já vira permanente.*

> ✅ Playtest 1 (18/07/2026): modelo de dano reformulado — antes cada membro somava 10 superficiais + 10 profundos + 10 permanentes (30 no total); agora são **10 espaços que mudam de status**. E **todo dano gera 1 fadiga por ponto**. Ver [relatório do playtest 1](../../notas-de-design/playtests/2026-07-18-playtest-cenario-1.md).

Cada arma pode infligir uma certa quantidade de dano (saiba mais na seção Equipamentos). Da mesma forma, as armaduras podem defender o seu personagem de uma determinada quantidade de pontos de dano.

### Redutor de dano das armaduras (dano mínimo 1)

O **redutor de dano** de uma peça de armadura depende do seu tipo — **Leve −1, Média −2, Pesada −3** — e é subtraído do dano de cada golpe recebido **numa região que ela cobre** (ver [Proteções](../listas/protecoes-base.md)). A cada golpe recebido nessa região, a armadura também **perde 1 de durabilidade** naquele local.

**O redutor nunca reduz o dano abaixo de 1:** se o ataque acertou, o alvo sofre **no mínimo 1 ponto de dano**, mesmo que a redução da armadura supere o dano rolado.

> ✅ Decidido em 11/07/2026: a tabela define a redução (o antigo "reduz 1 de dano" era exemplo, não regra universal) e existe o dano mínimo 1 (ver [notas-de-design/decisoes/2026-07-11-terminologia-alcance-descanso.md](../../notas-de-design/decisoes/2026-07-11-terminologia-alcance-descanso.md), item A1).

### Membro desabilitado (incapacitado ou invalidado)

Três termos oficiais descrevem um membro fora de uso:

- **Incapacitado** — membro que acumulou **10 pontos de dano profundo**. Deixa de poder ser usado para ações até se recuperar (consequências em [Penalidades por perda de vida](#penalidades-por-perda-de-vida));
- **Invalidado** — membro que acumulou **10 pontos de dano permanente**. Não se recupera por meios convencionais;
- **Desabilitado** — **termo guarda-chuva**: um membro está desabilitado quando está **incapacitado OU invalidado**. É o termo usado nos gatilhos e requisitos de características (ex.: "não ter nenhuma perna desabilitada").

"Impedido" e "inválido" não são termos do sistema — use **desabilitado**.

> ✅ Decidido em 11/07/2026 (ver [notas-de-design/decisoes/2026-07-11-terminologia-alcance-descanso.md](../../notas-de-design/decisoes/2026-07-11-terminologia-alcance-descanso.md), item B5).

Na ficha de personagem, há um espaço em cada membro para que sejam preenchidos os danos já recebidos. Pontos de dano superficial, profundo e permanente precisam ser preenchidos de forma diferente, para que seja fácil de se distinguir um do outro.

A sugestão dada na ficha que você encontra no final deste manual é marcar os espaços da esquerda para a direita com um traço diagonal para marcar danos superficiais, e, após completar o membro com danos superficiais, usar um “x” para marcar danos profundos. Já os danos permanentes, devem ser indicados preenchendo todo o espaço de um dano. **Para este último caso, não se preocupe com a possibilidade de estragar a ficha, afinal, esse espaço não vai voltar.**

## Cura

Quando é possível descansar — e o que cada tipo de descanso recupera — está definido em [Descanso](../conceitos/10-descanso.md).

### Curando danos superficiais

Durante um [descanso longo](../conceitos/10-descanso.md#descanso-longo), o personagem recupera **`1d6`** pontos de dano superficial. Para curar mais do que isso de uma vez, é preciso a ação de um médico, algum item ou habilidade especial.

Para tentar curar um dano superficial sem descansar e sem um médico, o personagem pode fazer um teste de cura desajeitada. Se passar o resultado do contrateste, cura **`1d4`** pontos de vida. **Se falhar no teste de cura, recebe mais um ponto de dano superficial no local ferido.**

### Tratando danos profundos

Diferentemente dos danos superficiais, os danos profundos não se curam sozinhos com o tempo. Para que eles sejam revertidos, é preciso uma ação ativa do personagem.

Personagens comuns podem fazer, uma vez por dia, um teste de “tratamento improvisado” para tentar transformar um ponto de dano profundo em dano superficial. Para isso joga **`1d10`** e o narrador faz o contrateste.

Se o jogador ganhar, **`1d4`** pontos de dano profundo são transformados em superficial. Se perder, 1 ponto se torna em dano permanente, que não pode ser curado por meios convencionais.

## Penalidades por perda de vida

O desgaste do combate pesa nos `PA` **através da [fadiga](../conceitos/08-fadiga.md)**: cada ponto de **dano superficial** recebido gera **1 ponto de fadiga**, e a fadiga acumulada reduz os `PA` do turno (−1 `PA` a cada 5 pontos a partir de 10; ver [Fadiga — penalidades por acúmulo](../conceitos/08-fadiga.md#penalidades-por-acumulo)). Dessa forma, não há uma penalidade de `PA` separada por "dano total": ela já está contabilizada na fadiga que o dano gera. **O mínimo que um personagem pode ter de `PA` por turno é `3 PA`** (piso unificado — ver [Pontos de ação](../conceitos/07-pontos-de-acao.md)), a não ser que esteja inconsciente.

> ✅ Reconciliado em 2026-07-18: a antiga regra "a cada 10 de dano total, −1 `PA`" foi **substituída** pelo encadeamento dano superficial → fadiga → `PA`, evitando dupla contagem. Ver [decisões — dano, fadiga e PA](../../notas-de-design/decisoes/2026-07-18-dano-fadiga-pa.md).

Membros se tornam **incapacitados** se receberem 10 pontos de dano profundo. Isso significa que uma ação que dependa daquele membro será mais difícil de realizar. As consequências são:

- Ao ter uma perna incapacitada, cada 1 metro de movimento passa a custar **`2 PA`**.
- Ao ter a mão hábil incapacitada, o jogador precisa gastar **`1 PA`** a mais para realizar qualquer ataque ou ação com a mão restante.
- Ao ter o tronco incapacitado, todas as ações recebem desvantagem, perde a capacidade de utilizar habilidades e não pode atacar.
- Ao ter a cabeça incapacitada, o jogador fica inconsciente e, se acordar, todas as ações recebem desvantagem e perde a capacidade de utilizar habilidades, não pode atacar.

Um personagem pode morrer de duas formas:

- **Um membro vital invalidado**: Ao ter a cabeça ou o tronco invalidados, ou seja, ao receber 10 pontos de dano permanente em uma dessas partes, que são consideradas vitais; ou
- **Dois membros não vitais invalidados:** Ao ter dois membros periféricos (braço direito, braço esquerdo, perna direita ou perna esquerda) invalidados, ou seja, com 10 pontos de dano permanente acumulados.
