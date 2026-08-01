---
titulo: "Módulo: Magia"
tipo: mecanica
cenario: modulo
modulo: magia
status: rascunho
tags: [modulo, magia, pv, fadiga, aptidao-magica, experiencia-de-magia]
atualizado-em: 2026-08-01
---

# 🧩 Módulo: Magia

Magia é uma **habilidade que dobra as leis da realidade** — por isso exige um preço mais sério do
conjurador do que uma habilidade comum. Este módulo não inventa um subsistema paralelo: toda magia
é uma [habilidade](../../sistema-base/conceitos/05-habilidades.md) normal (mesmo custo de `PA`,
mesma escada de `exp.`, mesmos níveis) com **um ingrediente a mais** — um custo de ativação pago no
próprio corpo ou na própria energia do conjurador, além do `PA`.

> 📝 Este módulo generaliza o sistema de magia que já existia no cenário [Mukashi](../../cenarios/mukashi/mecanicas-unicas/magia.md)
> (KI, feitiços, custo em pontos de vida). O Mukashi migrou pra consumir este módulo em 01/08/2026
> — `KI` virou o nome/sabor que o cenário dá à magia, sem regra própria por baixo (ver
> [KI](../../cenarios/mukashi/mecanicas-unicas/ki.md)).

## O que é uma magia

Uma magia é uma habilidade com três diferenças em relação a uma habilidade comum:

1. **Custo de ativação** — pago em [fadiga](../../sistema-base/conceitos/08-fadiga.md) **ou** em
   [pontos de vida](../../sistema-base/conflitos/03-saude-e-protecao.md#pontos-de-vida-e-dano)
   (`PV`), nunca os dois na mesma magia. Ele **substitui** o custo padrão de fadiga que toda
   habilidade cobra — ver [O custo de uma magia](#o-custo-de-uma-magia-pa--fadiga-ou-pa--pv).
2. **Atributo caso a caso** — cada magia declara o atributo do seu teste como qualquer habilidade
   (`Físico`, `Ágil`, `Mental` ou `Social`), de acordo com a natureza do efeito. **Não existe um
   atributo fixo para magia** — força bruta mística testa `Físico`, uma ilusão rápida testa `Ágil`,
   manipulação da mente testa `Mental`, compulsão testa `Social`. Um cenário com um quinto atributo
   místico próprio (ex.: `KI` do Mukashi) pode usar esse atributo no lugar de um dos quatro — ver
   [nota de compatibilidade](#nota-de-compatibilidade-com-um-5º-atributo-místico).
3. **Duas mecânicas opcionais** — [Aptidão Mágica](#aptidão-mágica-opcional) e
   [Experiência de Magia](#experiência-de-magia-opcional) — que mudam como a magia é testada e
   comprada, mas **o módulo funciona inteiro sem nenhuma das duas**.

Fora isso, magia segue **todas** as regras normais de habilidade: comprada uma vez e evoluída por
nível, combinável com aptidões e traços (mas não com outra magia ou habilidade), fila de resolução
fora de combate pelo custo de `PA`, etc.

## O custo de uma magia: `PA` + fadiga **ou** `PA` + `PV`

Esta é a regra mais importante do módulo, e a que mais foge do padrão:

> **Uma magia custa `PA` + fadiga, OU `PA` + `PV`. Nunca as três coisas juntas.**

Uma [habilidade comum](../../sistema-base/conceitos/05-habilidades.md#custo-de-uso-pa--fadiga)
custa `PA` + a mesma quantidade de fadiga. Numa magia, o **custo de ativação toma o lugar desse
custo padrão de fadiga** — não se soma a ele. E, quando o custo de ativação é pago em `PV`, esse
`PV` **não gera fadiga**, abrindo a única exceção do sistema à regra de que todo dano cansa.

| Tipo de custo da magia | O conjurador paga | Gera fadiga? |
|---|---|:--:|
| **Fadiga** | `PA` + **X de fadiga** (o valor da magia, não o do `PA`) | é o próprio custo |
| **`PV`** (dano curável ou vida máxima) | `PA` + **X de `PV`** | **Não** |

> *Exemplo: uma magia de `4 PA` com custo de ativação `2`. Se o custo for em fadiga, ela cobra
> `4 PA` + 2 de fadiga. Se for em `PV`, cobra `4 PA` + 2 de `PV` — e **nenhuma fadiga**. Para
> comparação, uma habilidade comum de `4 PA` cobraria `4 PA` + 4 de fadiga.*

> ✅ Decidido pelo Daniel em 01/08/2026, corrigindo o desenho anterior deste módulo. Sem esta
> regra, uma magia acumularia `PA` + fadiga de habilidade + `PV` + a fadiga gerada pelo `PV` — quatro
> custos pelo mesmo lançamento, o que tornava magia proibitiva.

> 📝 **A consequência a vigiar:** pagar em `PV` pode sair **mais barato em fadiga** do que uma
> habilidade comum de mesmo `PA`, já que zera a fadiga do lançamento. Um conjurador com muita vida
> sobrando pode preferir queimar `PV` justamente para continuar com `PA` cheio. Isso é coerente com
> a fantasia (o mago que se consome para não cansar), mas precisa de playtest — se virar a escolha
> óbvia sempre, o ajuste é subir os custos em `PV` das magias.

## Custo de ativação — três tipos

Toda magia declara, junto com o custo de `PA`, **um** destes três tipos de custo de ativação:

| Tipo | O que acontece | Cura | Quando usar |
|---|---|---|---|
| **Fadiga** | O conjurador recebe X pontos de [fadiga](../../sistema-base/conceitos/08-fadiga.md) diretamente — **sem** perder `PV`. | Some no próximo descanso (como toda fadiga). | Magias leves, utilitárias, de baixo risco. |
| **Dano (curável)** | O conjurador sofre X pontos de dano em si mesmo — **superficial** ou **profundo**, à escolha de quem desenha a magia — seguindo à risca as [regras normais de dano](../../sistema-base/conflitos/03-saude-e-protecao.md#pontos-de-vida-e-dano). | Superficial: sozinho, no descanso. Profundo: precisa de tratamento. | Magias de efeito moderado a forte. |
| **Vida máxima** | O conjurador **perde X pontos de vida máxima** num membro à sua escolha — o [dano permanente](../../sistema-base/conflitos/03-saude-e-protecao.md#dano-permanente-perda-de-vida-máxima) do sistema, cobrado **direto**, sem precisar que o membro esteja cheio antes (é sacrifício deliberado da própria força vital, não ferimento de combate). | **Nunca**, por meios convencionais. | Magias extremas — grande poder, grande risco. Reservar para efeitos que justifiquem o preço. |

> 📝 A exceção de cobrar vida máxima **direto**, sem o membro precisar estar cheio antes, é regra
> nova deste módulo — no sistema, perder vida máxima é sempre a consequência de continuar apanhando
> num membro já em ferida profunda. Proposta a validar: se na mesa isso se mostrar abusivo, a
> alternativa é exigir que o membro escolhido já esteja em ferida profunda.

**O `PV` gasto como custo de ativação de uma magia NÃO gera fadiga.** É a exceção deliberada à
[regra geral](../../sistema-base/conceitos/08-fadiga.md#como-se-ganha-fadiga) de que todo ponto de
dano recebido soma 1 de fadiga — e vale **só** para o custo de ativação. O conjurador que **leva um
golpe** de um inimigo acumula fadiga normalmente, como todo mundo; magia não protege de nada.

> ⚠️ **A vida máxima ainda cobra a longo prazo.** O terceiro tipo de custo não gera fadiga na hora,
> mas como a [fadiga máxima acompanha o total de `PV`](../../sistema-base/conceitos/08-fadiga.md#fadiga-máxima),
> **perder vida máxima reduz permanentemente o quanto o conjurador aguenta de esforço**. Um mago que
> abusa desse custo não cansa mais rápido hoje — mas o teto dele desce para sempre.

### Qual membro é atingido

Quem conjura escolhe **em qual membro** o custo de ativação (fadiga não se aplica, é abstrata) é
registrado — o tronco é o mais comum, como sede simbólica da energia do conjurador, mas a escolha
é livre. Fora isso, nenhuma regra nova: se o custo acumulado encher um membro, ele fica com ferida
profunda; se a vida máxima daquele membro chegar a zero, ele fica invalidado — exatamente como
qualquer outro dano.

## Progressão (níveis) — efeito, custo, ou os dois

O padrão de habilidade vale aqui: **5 níveis**, escolha **menos** quando o efeito no topo já é
muito forte. A diferença é que magia tem **dois eixos** pra progredir, e cada magia decide, caso a
caso, qual usar (ou os dois):

- **Efeito cresce, custo de ativação fixo** — o modelo padrão de qualquer habilidade (mais dano,
  mais alcance, mais alvos a cada nível), só que aqui o custo de ativação continua o mesmo em todos
  os níveis.
- **Custo de ativação cai, efeito fixo** — já existe precedente no sistema-base: a
  [Resolução em Sete Sopros](../../cenarios/mukashi/mecanicas-unicas/habilidades-do.md#resolução-em-sete-sopros)
  (Bushidō, Mukashi) reduz o custo de `PA` a cada nível (`3→2→1`). Este módulo estende a mesma
  lógica para o custo de ativação — inclusive **trocando de tipo** conforme melhora (ex.: começa em
  vida máxima e termina em dano superficial, à medida que o conjurador ganha destreza e
  recursos para controlar o efeito).
- **Os dois juntos** — efeito melhora **e** custo de ativação cai. É o mais raro/caro em `exp.`,
  reservar para poucas magias muito especiais.

> Exemplo do segundo modelo: [Pacto da Última Gota](listas/lista-de-magias.md#pacto-da-última-gota)
> começa custando `4` de **vida máxima** no nível 1 e termina custando dano **profundo** no
> nível 5 — o mesmo efeito continua poderoso, mas cada vez menos autodestrutivo à medida que o
> conjurador domina a técnica.

## Aptidão Mágica (opcional)

Mecânica opcional que adiciona uma **quinta trilha de aptidão**, não ligada a nenhum dos quatro
atributos base — dedicada exclusivamente a testes de magia.

- **Compra:** mesma fórmula escalonada das [aptidões base](../../sistema-base/listas/aptidoes-base.md)
  (1ª = `1 exp.`, 2ª = `2 exp.`, 3ª = `3 exp.`…), como uma trilha própria e independente — ter
  muitas aptidões `Mental` não encarece a Aptidão Mágica, e vice-versa.
- **Com o módulo ativo:** todo teste de uma magia (qualquer que seja o atributo que ela declara)
  usa a **Aptidão Mágica** para rerrolagem, **no lugar** da aptidão do atributo declarado. Uma
  magia que testa `Social` não rerrola com aptidão `Social` — rerrola com Aptidão Mágica.
- **Sem o módulo:** cada magia usa a aptidão do **atributo que ela declara**, normalmente — uma
  magia `Social` rerrola com aptidão `Social`, uma magia `Físico` com aptidão `Físico`, e assim por
  diante. Nenhuma regra especial: é o comportamento padrão do sistema, sem nenhuma mudança.

> *Exemplo: Kenji tem a magia [Voz que Convence](listas/lista-de-magias.md#voz-que-convence)
> (`Social`). Com Aptidão Mágica ativa na mesa, ele rerrola o teste dela gastando Aptidão Mágica —
> mesmo tendo aptidões `Social` sobrando, elas não servem para esse teste. Sem o módulo ativo, ele
> rerrola com aptidão `Social` normalmente.*

## Experiência de Magia (opcional)

Mecânica opcional que adiciona um **segundo tipo de experiência**, exclusivo para características
de magia (magias, [traços de magia](listas/lista-de-tracos.md) e a própria Aptidão Mágica, se
também estiver ativa). A ficha base já reserva um espaço para isso — ver
["criação de personagem"](../../sistema-base/criacao-de-personagem/01-passo-a-passo.md#23-anote-seus-pontos-de-experiência-iniciais).

- **Com o módulo ativo:** características de magia **só** podem ser compradas com Experiência de
  Magia — `exp.` comum não serve para isso. Em troca, Experiência de Magia **não** compra
  características fora de magia.
- **Sem o módulo:** características de magia são compradas com `exp.` comum, nos mesmos preços —
  não existe trilha separada, não muda nada na economia normal do personagem.
- **Como se ganha:** mesmas categorias e valores do [`exp.` comum](../../sistema-base/progressao/01-experiencia-e-evolucao.md)
  (interpretação, trabalho em equipe, sucesso em tarefa especial, vencer conflito, completar
  tarefa/missão/arco) — o narrador só marca a recompensa como "de magia" quando o gatilho envolveu
  magia de forma central (um ritual bem-sucedido, um conflito vencido com feitiços, um problema
  resolvido com um efeito mágico específico).

> 📝 **Primeira implementação real do padrão "segundo tipo de exp."** A ficha já previa o espaço
> (ver acima) e o cenário Colapso já cita uma "Experiência de Veículos" sem regra nenhuma por trás
> (`PENDENCIAS.md`) — as regras de ganho acima são proposta a validar no playtest; se funcionarem
> bem, podem virar o modelo padrão pra qualquer módulo/cenário que precise de uma segunda trilha de
> `exp.`, inclusive resolvendo a pendência do Colapso.

## Compatibilidade — as quatro combinações

| Aptidão Mágica | Experiência de Magia | Como funciona |
|:--:|:--:|---|
| Desativada | Desativada | Magia se comporta como qualquer habilidade comum: aptidão do atributo declarado, comprada com `exp.` comum. |
| Ativada | Desativada | Testes de magia sempre usam Aptidão Mágica; compra de características de magia com `exp.` comum. |
| Desativada | Ativada | Testes de magia usam a aptidão do atributo declarado; compra de características de magia exclusiva com Experiência de Magia. |
| Ativada | Ativada | Testes de magia sempre usam Aptidão Mágica; compra de características de magia (incluindo a própria Aptidão Mágica) exclusiva com Experiência de Magia. |

## Custo de compra (`exp.`) — mesma escada de habilidades

Magia **não** usa uma escada de preço maior que a de habilidades comuns — o "mais forte" da magia
já está no custo de ativação (fadiga/`PV`), não no preço de compra. Use a
[escada padrão](../../sistema-base/conceitos/05-habilidades.md#custo-de-compra-exp--escada-por-poder):

| `exp.` | Quando usar |
|:--:|---|
| **1** | Utilidade ou informação; efeito fraco |
| **2** | Efeito moderado ou situacional |
| **3** | Controle do oponente ou cura/suporte relevante |
| **4** | Manipulação de recursos ou efeito muito forte |

A [exceção do suporte](../../sistema-base/conceitos/05-habilidades.md#custo-de-compra-exp--escada-por-poder)
(ajudar um aliado custa menos que o equivalente em si mesmo) também vale para magia.

## Guia de design — criando uma magia nova

1. **Escolha o atributo** de acordo com a natureza do efeito (força = `Físico`, velocidade/ilusão =
   `Ágil`, mente = `Mental`, compulsão social = `Social`).
2. **Custo de `PA`** — mesma regra de qualquer habilidade: `1 PA` + `PA` da arma se for um ataque;
   `1 PA` utilidade rápida ou `4`–`5 PA` efeito forte se for efeito próprio.
3. **Custo de ativação** — escolha um dos três tipos (fadiga / dano curável / vida máxima) e um
   valor. Lembre que ele **substitui** o custo padrão de fadiga da habilidade, e que os tipos em
   `PV` **não geram fadiga**. Heurística de calibragem inicial (📝 proposta, a validar no playtest,
   herdada do Mukashi): magia de `4 PA` → `2` de custo; magia de `5 PA` → `3` de custo — o mesmo
   valor numérico serve de ponto de partida em qualquer um dos três tipos, e o **tipo** escolhido é
   o que define o quão arriscada a magia é, não o número.
   > 📝 Compare sempre com o que uma **habilidade comum** de mesmo `PA` cobraria (fadiga igual ao
   > `PA`). Se a sua magia estiver saindo mais barata que isso, ou o custo está baixo, ou o efeito
   > precisa ser maior para justificar.
4. **Custo de compra** — escada de `1` a `4 exp.`, igual habilidade comum.
5. **Níveis** — 5 por padrão; decida se o nível melhora o efeito, reduz o custo de ativação, ou os
   dois (ver [Progressão](#progressão-níveis--efeito-custo-ou-os-dois)).

## Nota de compatibilidade com um 5º atributo místico

Cenários com um quinto atributo próprio (ver
[Atributos](../../sistema-base/conceitos/02-atributos.md#atributos-específicos)) podem usar esse
atributo no lugar de um dos quatro atributos base em suas magias, se preferirem manter essa
abordagem — não é preciso nenhuma regra nova para isso, um quinto atributo de cenário já "funciona
como um atributo do sistema" por definição. **O Mukashi optou pelo outro caminho:** usa os 4
atributos base normalmente e trata `KI` como puro **encapsulamento narrativo** do módulo (mesma
mecânica descrita aqui; muda só o nome, a estética e o flavor) — ver
[KI](../../cenarios/mukashi/mecanicas-unicas/ki.md). As duas abordagens são válidas; cada cenário
escolhe a que fizer mais sentido.

## Módulos e listas relacionadas

- [Lista de magias](listas/lista-de-magias.md) — catálogo de exemplo, cobrindo os quatro
  atributos e os três tipos de custo de ativação.
- [Lista de traços de magia](listas/lista-de-tracos.md) — técnicas, maestrias e aspectos
  específicos de magia.
