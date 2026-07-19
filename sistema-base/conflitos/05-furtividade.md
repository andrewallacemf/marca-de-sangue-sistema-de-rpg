---
titulo: Furtividade
tipo: regra
cenario: base
status: revisao
tags: [furtividade, esconder-se, alerta, alarme, percepcao, visao, emboscada]
atualizado-em: 2026-07-19
---

# Furtividade

Nem todo conflito é resolvido no grito. Infiltrar-se, passar despercebido, atacar de surpresa
e sumir de novo são jogadas tão válidas quanto trocar golpes — e este capítulo dá as regras
para isso. A furtividade gira em torno de três coisas: **o que os inimigos percebem** (visão e
alerta), **quão bem você está escondido** (esconder-se) e **quanto o ambiente inteiro já sabe
da sua presença** (alarme).

> 🧪 Mecânica **em teste** — consolidada a partir do playtest do Cenário 2 (18/07/2026). Ver
> [relatório do playtest 2](../../notas-de-design/playtests/2026-07-18-playtest-cenario-2.md).

## Visão e campo de visão

Um personagem só percebe o que consegue enxergar. Para fins de furtividade, cada personagem
(e cada NPC) tem um **campo de visão** à sua frente, cujo formato depende do **[nível de
alerta](#nível-de-alerta-por-inimigo)** dele:

- **Alerta 0–1 — cone à frente:** enxerga apenas o cone à sua frente (os 3 espaços de frente,
  na malha hexagonal).
- **Alerta 2 ou mais — meia-lua:** passa a enxergar em **meia-lua**, cobrindo as **laterais e a
  frente**. Só as costas ficam de fora.

### Alcance de visão à noite

À noite (ou em ambientes escuros), o quanto um oponente comum enxerga **à sua frente** depende
da luz:

| Iluminação | Enxerga até |
|---|---|
| **Escuridão total** | **6 m** à frente |
| **Penumbra** (meia-luz) | **12 m** à frente |
| **Luz plena** | **24 m** à frente |

Essa observação é **passiva** — o oponente enxerga até essa distância sem rolar dado. Fora do
alcance de visão, ou fora do campo de visão, ele simplesmente não te percebe (a não ser por som
ou por outro sentido que o narrador julgue cabível).

> 💡 O narrador define a iluminação da cena. Tochas, luar, incêndios e afins mudam a coluna da
> tabela para os personagens próximos.

## Esconder-se

**Esconder-se** é uma ação que coloca o personagem em **status escondido**.

- **Custo:** **`2 PA`**.
- **Pré-requisito:** só pode ser usada estando **fora do campo de visão de todos os inimigos**.
  *(Uma habilidade específica pode permitir tentar se esconder mesmo dentro do campo de visão de
  um inimigo — ver [Ganchos](#ganchos-habilidades-e-traços).)*
- Ao se esconder, você rola o **dado de furtividade** (teste `Ágil` de esconder-se) e **guarda o
  valor obtido**. Esse número é a **qualidade** do seu esconderijo (veja abaixo).

### Desvantagem natural ao se esconder

Ao rolar o seu dado de furtividade, aplica-se a **desvantagem natural** conforme onde você se
esconde (desde que você **não esteja sendo visto** por nenhum oponente no momento):

- **No meio do nada** ou atrás de **meia cobertura** → rola **com desvantagem natural**.
- Atrás de **cobertura completa** → rola **sem desvantagem natural**.

A **[Técnica em Esconder-se](../listas/tracos-base.md#técnicas)** anula essa desvantagem natural
(como toda técnica).

### Qualidade da furtividade (o número guardado)

O valor que você guardou **permanece** como a qualidade do seu esconderijo. Você o mantém até:

- **rolar um novo dado de furtividade** (gastando a ação de novo) para tentar um número maior; ou
- **sair do status escondido** (por escolha, por realizar uma ação que remove a furtividade, ou
  por ser descoberto).

Assim, **vocês dois não ficam rolando o teste toda hora**: você fixa a sua qualidade e, daí em
diante, quem rola é o inimigo.

### Quando um inimigo pode te ver (teste de percepção)

Toda vez que você entra no campo de visão de um inimigo (ou ele passa a olhar para onde você
está), **só o inimigo rola** um **teste de percepção**. Compare com o número que você guardou:

- **Percepção do inimigo > seu valor guardado** → ele **te vê** (você perde o status escondido).
- **Percepção ≤ seu valor guardado** → ele **não te percebe**; você continua escondido.

**A vantagem/desvantagem fica no dado do inimigo** (você **não** rola com vantagem para se
esconder da vista de alguém). Ela depende da sua cobertura **e** da iluminação:

| Onde você está | De dia | De noite / no escuro |
|---|---|---|
| **No meio do nada** (sem cobertura) | inimigo com **vantagem** | inimigo **normal** |
| Atrás de **meia ou cobertura completa** | inimigo **normal** | inimigo com **desvantagem** |

> 💡 Em resumo: cobertura e escuridão **atrapalham quem procura**; ficar exposto à luz do dia
> **facilita** para quem procura. A sua parte (o dado de furtividade) já foi rolada uma vez e
> ficou guardada.

### Esconder-se como reação

Esconder-se é uma **ação** (2 PA) no seu turno. Para se esconder **como reação** (fora do seu
turno, por exemplo ao ser notado), é preciso ter o aspecto
**[Espreitador](../listas/tracos-base.md#espreitador)**.

### Agir sem perder a furtividade

Estar escondido não te congela. **O narrador decide se uma ação remove ou não a furtividade** —
mas deve **sempre avisar o jogador antes**, caso a ação pretendida vá revelá-lo, para que ele
possa mudar de ideia. Um ataque bem-sucedido que **derruba o alvo antes que ele reaja** pode não
quebrar a furtividade (a [reação acontece depois da ação](02-acoes-em-conflito.md#reação); alvo
morto/nocauteado não reage nem dá o alarme).

> 💡 **Ações feitas de dentro do esconderijo não pedem teste extra de furtividade.** O teste já
> foi feito para estabelecer o momento furtivo — atirar de trás de uma grade em que você já está
> escondido não exige rolar de novo, a menos que a ação gere um efeito em cascata maior que o
> esperado (aí o narrador avisa).

**Listas de referência (recomendações — o narrador tem a palavra final por contexto):**

Ações que **em geral NÃO removem** a furtividade:

- Mover-se devagar dentro de cobertura ou fora do campo de visão dos inimigos.
- Observar, ponderar, analisar o ambiente, mirar/preparar um tiro.
- Um único ataque à distância feito de dentro de uma cobertura que te esconde (a menos que o som
  ou o resultado chame atenção).
- Um ataque de emboscada que **incapacita o alvo antes de ele reagir**.
- Armar um gatilho, criar uma armadilha em silêncio, passar uma mensagem curta e sussurrada.
- Puxar/ocultar um corpo para dentro da cobertura.

Ações que **em geral REMOVEM** a furtividade:

- Sair para o campo de visão de um inimigo sem cobertura/escuridão suficiente.
- Atacar e **não** derrubar o alvo (ele reage/grita), ou errar um ataque perto de um inimigo.
- Fazer barulho alto (quebrar algo, gritar, uma explosão, tocar o gongo).
- Correr em terreno barulhento, arrastar algo pesado, derrubar um objeto.
- Qualquer ação que o narrador avise que vai te expor (e você confirme mesmo assim).

## Nível de alerta (por inimigo)

Cada inimigo tem um **nível de alerta próprio**, marcado com um **`d4`** ao lado dele (o dado
serve de contador dos níveis **1 a 4**; o **0** é o estado padrão, sem marcador, e o **5** é o
topo). Ele mede o quanto **aquele** inimigo desconfia de que há alguém ali.

| Nível | Como o inimigo se comporta |
|:---:|---|
| **0** | **Tranquilo.** Rotina normal, não faz ideia de que há alguém ali. Campo de visão em **cone**. |
| **1** | **Inquieto.** Algo pareceu levemente fora do lugar (um som, um vulto). Segue a rotina, um pouco mais atento. |
| **2** | **Desconfiado.** Tem certeza de que algo está estranho; muda o comportamento e passa a checar os arredores. Campo de visão vira **meia-lua**. |
| **3** | **Em guarda.** Acredita que há um intruso e **investiga ativamente** (checa esconderijos, pode chamar um colega). |
| **4** | **Em alerta.** Quase certeza de intruso: procura com afinco, arma em punho, e pode **dar o alarme** (subir o [alarme do ambiente](#nível-de-alarme-do-ambiente)). |
| **5** | **Ciente.** Sabe que há um intruso ali, **mesmo que não saiba exatamente onde**, e o caça ativamente. |

**O que faz o alerta subir:** falhar em não ser notado (o inimigo percebe um movimento/som mas
não te acha), encontrar algo fora do lugar (um colega sumido, sangue, uma porta aberta), ou ser
respingado pelo alerta de outro.

**O alerta se espalha — por som e por vista:** um inimigo que **sobe** de alerta e está no campo
de visão de outro que está em nível mais baixo faz esse outro **subir 1 nível** (ele vê o colega
"procurando algo"). Barulhos altos podem subir o alerta de todos os que ouvem.

> 💡 O alerta **desce** com o tempo se nada reforçar a suspeita — a critério do narrador
> (some um nível depois de algumas rodadas de calmaria, por exemplo).

## Nível de alarme (do ambiente)

Enquanto o alerta é **individual**, o **alarme** é **global**: mede o quanto **o local como um
todo** já percebeu a sua presença. Use um marcador de **0 até o máximo definido para o ambiente**
(o narrador define o teto conforme a cena; por exemplo, **4** no [Cenário 2](../../playtest/cenarios/02-mukashi-selo-do-templo.md)).

- **Sobe** quando: um inimigo vê um infiltrado e sobrevive ao turno, um corpo/rastro é
  descoberto, um sinal de alarme é acionado (gongo, sino, grito de aviso), ou você faz muito
  barulho.
- **Ao atingir o teto do ambiente**, o alarme **estoura**: todos os inimigos restantes passam a
  saber que há intrusos e **convergem** — a infiltração vira perseguição/combate aberto.

> 💡 Alerta e alarme conversam: um inimigo em alerta alto que **grita** ou **toca um sino**
> costuma **subir o alarme do ambiente**. Cabe ao narrador ligar os dois na cena.

## Emboscada e golpe surpresa

Estar escondido é o que habilita as jogadas de assassino:

- **[Golpe surpresa](../listas/habilidades-base-ageis.md#golpe-surpresa)** — dano adicional
  escalonado (de **`+1d4`** a **`+1d10`** conforme o nível), exigindo estar escondido, com arma
  leve corpo a corpo e sem armadura média/pesada.
- **[Emboscador](../listas/tracos-base.md#emboscador)** — **dobra o resultado** do dano ao
  atacar **pelas costas**, estando **escondido de todos** e **com arma leve**. **Armas de
  arremesso não contam** para o Emboscador.

Como a **reação vem depois da ação**, um golpe forte o suficiente pode incapacitar o alvo
**antes** que ele reaja — e assim ele não dá o alarme (o objetivo de uma boa emboscada).

## Ganchos (habilidades e traços)

- **Esconder-se dentro do campo de visão de um inimigo** — deve depender de uma **habilidade
  específica** (a criar), já que a ação padrão exige estar fora do campo de visão.
- **Esconder-se como reação** — depende do aspecto
  **[Espreitador](../listas/tracos-base.md#espreitador)**.
