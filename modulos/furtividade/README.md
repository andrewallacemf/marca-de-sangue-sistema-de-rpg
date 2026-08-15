---
titulo: Furtividade
tipo: mecanica
cenario: modulo
modulo: furtividade
status: estavel
tags: [furtividade, esconder-se, alerta, alarme, percepcao, visao, emboscada, modulo]
atualizado-em: 2026-08-15
---

# 🧩 Módulo: Furtividade

O módulo de Furtividade estrutura cenas de infiltração, aproximação silenciosa e emboscada. Ele
acrescenta campo de visão, iluminação, alerta individual e alarme do ambiente à ação-base
**[Esconder-se](../../sistema-base/listas/acoes-em-combate.md#esconder-se)**.

## Campo de visão

O campo de visão representa a área que um personagem consegue observar diretamente. Ele governa
somente a **detecção visual**: sons, odores e outros sentidos podem elevar o alerta ou permitir a
detecção independentemente dele.

O formato do campo depende do [nível de alerta](#nivel-de-alerta-por-inimigo):

- **Alerta 0–1 — cone à frente:** cobre a direção para a qual o personagem está voltado. Na malha
  hexagonal, corresponde aos três espaços à frente.
- **Alerta 2 ou mais — meia-lua:** cobre a frente e as laterais. Somente as costas ficam fora do
  campo.

Sem mapa, o narrador informa antes da ação quem possui linha de visão, quem está de costas, onde há
cobertura e quais distâncias estão envolvidas.

### Alcance de visão

O alcance de visão de um oponente comum depende da iluminação:

| Iluminação | Alcance de visão |
|---|---:|
| **Escuridão total** | **6 m** |
| **Penumbra** | **12 m** |
| **Luz plena** | **24 m** |

Dentro do alcance e do campo de visão, uma criatura que não está escondida é percebida sem teste.
Fora deles, ela não é percebida visualmente, embora ainda possa ser notada por outros sentidos.

## Esconder-se durante uma infiltração

Use normalmente a ação-base **[Esconder-se](../../sistema-base/listas/acoes-em-combate.md#esconder-se)**,
incluindo custo, requisitos, desvantagem natural e qualidade de furtividade guardada. O módulo não
altera essa rolagem: ele define quando um observador pode tentar detectar quem está escondido.

Uma nova rolagem de detecção acontece quando:

- o personagem entra no campo de visão de um observador;
- o observador passa a olhar para sua posição;
- o observador procura ativamente naquela área; ou
- a exposição muda de maneira relevante.

Permanecer nas mesmas condições não provoca uma nova rolagem a cada turno.

### Cobertura e iluminação

Quando a detecção visual for possível, somente o observador rola Mental contra a qualidade de
furtividade guardada.

| Posição do personagem escondido | Luz plena | Penumbra ou escuridão |
|---|---|---|
| **Sem cobertura** | observador com **vantagem** | observador **normal** |
| **Meia cobertura** | observador **normal** | observador com **desvantagem** |
| **Cobertura total** | sem detecção visual | sem detecção visual |

Cobertura total bloqueia a visão enquanto permanecer completamente entre o observador e o
personagem. Se o observador obtiver linha de visão, examinar o esconderijo ou puder usar outro
sentido, a situação passa a permitir uma resolução apropriada.

### Resultado da detecção

- **Mental do observador maior que a qualidade guardada:** ele detecta o personagem, que deixa de
  estar escondido, e seu alerta sobe para 5.
- **Mental do observador igual ou menor:** o personagem continua escondido. Se o teste foi causado
  por um indício suspeito, o alerta do observador sobe 1.

## Agir enquanto está escondido

Mover-se dentro de cobertura ou fora do campo de visão não exige um novo uso de Esconder-se. Uma
ação também não pede outra rolagem apenas por ser realizada a partir do esconderijo.

Quando uma ação criar uma nova exposição, o narrador informa antes se ela encerrará a condição de
escondido ou permitirá uma nova tentativa de detecção. O jogador pode mudar de ideia depois do
aviso.

Barulho alto, saída da cobertura, entrada deliberada no campo de visão ou um ataque percebido podem
revelar o personagem. Um alvo incapacitado antes de reagir não comunica a ameaça nem eleva o
alarme, mas outros observadores ainda podem perceber a ação normalmente.

O aspecto **[Espreitador](../../sistema-base/listas/tracos-base.md#espreitador)** permite usar
Esconder-se como reação, mantendo todos os demais requisitos da ação.

## Nível de alerta por inimigo

Cada inimigo possui um nível de alerta entre 0 e 5. Ele mede o quanto aquele indivíduo suspeita da
presença de uma ameaça.

| Nível | Comportamento |
|:---:|---|
| **0** | **Tranquilo.** Segue sua rotina, com campo de visão em cone. |
| **1** | **Inquieto.** Percebeu algo estranho, mas continua a rotina com mais atenção. |
| **2** | **Desconfiado.** Checa os arredores e passa a usar o campo de visão em meia-lua. |
| **3** | **Em guarda.** Investiga ativamente e pode chamar um colega. |
| **4** | **Em alerta.** Procura com afinco e está pronto para comunicar a ameaça. |
| **5** | **Ciente.** Sabe que há um intruso e passa a caçá-lo, mesmo sem conhecer sua posição exata. |

Um indício suspeito, como ruído, movimento parcial ou evidência estranha, eleva o alerta em 1 sem
revelar automaticamente o personagem. Uma detecção visual confirmada eleva o observador
diretamente para 5.

Quando um inimigo aumenta seu alerta, aliados menos alertas que percebam sua reação também podem
subir 1 nível. Cada acontecimento afeta cada inimigo no máximo uma vez e não cria uma propagação
recursiva no mesmo instante. Um novo acontecimento pode elevar o alerta novamente.

## Nível de alarme do ambiente

Enquanto o alerta é individual, o **alarme** é global. Ele mede quanto o local inteiro já reconhece
a presença de intrusos e vai de 0 até um máximo definido pelo narrador para a cena.

O alarme sobe 1 quando a ameaça é comunicada ou quando surge uma evidência concreta, como um corpo,
um rastro inequívoco, um grito de aviso, um sino ou outro sinal. Ver um infiltrado não aumenta o
alarme por si só se o observador for incapacitado antes de conseguir reagir.

Ao atingir o máximo, o alarme dispara: os inimigos restantes sabem que há intrusos, convergem para
a ameaça e a infiltração pode se transformar em perseguição ou conflito aberto.

## Emboscadas

Estar escondido habilita opções especializadas sem alterar suas regras próprias:

- **[Golpe surpresa](../../sistema-base/listas/habilidades-base-ageis.md#golpe-surpresa)** acrescenta
  dano a um ataque realizado enquanto o personagem está escondido.
- **[Emboscador](../../sistema-base/listas/tracos-base.md#emboscador)** amplia o dano de um ataque
  pelas costas quando seus requisitos são atendidos.
- **[Espreitador](../../sistema-base/listas/tracos-base.md#espreitador)** permite tentar
  Esconder-se como reação.

Custos, progressões e requisitos permanecem nas páginas canônicas de cada habilidade ou traço.

## Conduzindo cenas de furtividade

Antes da cena, o narrador define o objetivo dos infiltrados, as consequências de uma descoberta e
o acontecimento que transforma a infiltração em perseguição ou conflito aberto. Também prepara:

- acessos, saídas e posições que alterem a abordagem;
- posição inicial, direção e rota de patrulha dos observadores;
- áreas de luz plena, penumbra e escuridão;
- meia cobertura e cobertura total; e
- indícios concretos capazes de elevar o alerta ou o alarme.

Com mapa, registre a direção de cada observador e mova as patrulhas de forma previsível. Sem mapa,
informe antes das decisões dos jogadores quem possui linha de visão, quem está de costas, quais
distâncias importam e onde existe cobertura. Uma informação que seria evidente para a personagem
não deve ser transformada em armadilha para o jogador.

### Sons, sentidos e exposição

O campo de visão resolve somente o componente visual. Ao arbitrar ruídos, odores ou sentidos
especiais, considere alcance, intensidade, obstáculos e o que o observador já sabe. Um indício pode
elevar o alerta sem revelar automaticamente a posição de quem o produziu.

Antes de uma ação, avise quando a consequência previsível for encerrar a condição de escondido,
permitir uma nova detecção ou produzir um indício. O jogador pode rever a decisão depois desse
aviso. Consequências que dependam de informação realmente oculta continuam sendo descobertas em
jogo.

### Reduzindo o alerta

O alerta não diminui automaticamente com a passagem de rodadas. Um observador reduz seu alerta em
1 quando:

- termina uma investigação sem encontrar novos indícios;
- recebe uma explicação convincente para o que percebeu; ou
- é desviado por uma ação deliberada que torne outra hipótese mais plausível.

Um mesmo acontecimento tranquilizador reduz no máximo 1 nível por observador. Quem confirmou a
presença de um intruso e chegou ao alerta 5 continua ciente da invasão até ser neutralizado, ser
convencido de que a ameaça era falsa ou a cena terminar.

### Preparando o alarme

O narrador escolhe o máximo do alarme conforme a duração e a tolerância a erros desejadas:

| Máximo | Uso sugerido |
|:---:|---|
| **2** | infiltração curta e rigorosa |
| **3** | cena comum de infiltração |
| **4 ou 5** | área extensa, com várias oportunidades de corrigir erros |

Antes da cena, associe os níveis relevantes a mudanças observáveis, como reforço de patrulhas,
bloqueio de uma saída ou preparação para confronto. O alarme não diminui apenas porque o tempo
passou. Ele só pode baixar quando uma ação concreta neutraliza sua causa e o narrador considera
essa redução possível; nesse caso, diminui 1.

Quando o máximo é alcançado, execute a consequência anunciada: os inimigos reconhecem a invasão,
convergem para a ameaça e a cena muda de natureza. A transição não exige que todos saibam a posição
exata dos infiltrados.
