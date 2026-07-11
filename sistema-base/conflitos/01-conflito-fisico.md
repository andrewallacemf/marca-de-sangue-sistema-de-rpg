---
titulo: Conflito físico
tipo: regra
cenario: base
status: estavel
tags: [conflito, combate, iniciativa, malha, posicionamento]
atualizado-em: 2026-07-11
---

# Conflito físico

Durante um jogo **o narrador pode decretar o início de um conflito** (ou combate), seja pela ação de um jogador ou por consequência de uma ação (ou reação) de um personagem do narrador (NPC). Um conflito pode ser uma luta de espadas, uma complexa invasão de trincheiras, uma corrida de carros, ou qualquer outro evento em que dois ou mais personagens colocam suas habilidades e estratégias em teste, se movimentando pelo terreno, para atingir determinado objetivo.

Um conflito acaba quando um dos adversários (ou conjunto de adversários) se rende, foge, é nocauteado, invalidado, morto em combate ou quando o narrador decretar o fim do conflito por outros fatores.

## Iniciativa de conflito físico

Os conflitos funcionam em um sistema de turnos. Chamamos de “**turno**” o período de tempo que compreende as ações de um único personagem. Já uma “**rodada**” é o período que compreende os turnos de todos os personagens envolvidos no conflito.

Cada vez que um conflito se inicia, tanto personagens de jogadores como NPCs precisam definir sua **INICIATIVA**, ou seja, a sequência em que farão suas ações.

Para isso, jogadores e narrador jogam **`1d10`**. Jogadores podem aplicar aptidões de qualquer atributo para re-rolar esse dado.

**Especificamente para iniciativa, o resultado final será a soma de todos os dados jogados pelo jogador.** Então os personagens são ordenados dos que obtiveram maior resultado até o menor.

### Empates em iniciativa

- Para caso de personagens com valores iguais de iniciativa, **os jogadores sempre jogam primeiro do que NPCs** e inimigos na lista de iniciativa.
- Para o caso de dois jogadores com valores iguais, **o jogador que rolou mais dados para iniciativa fica à frente** na lista.
- Caso o mesmo número de dados tenha sido rolado, **ambos jogam `1d10` novamente** (até que tirem valores diferentes) e **o jogador com o maior número ficará à frente** na lista de iniciativa.

## Malha de conflito físico

Para representar os combates que ocorrem na imaginação do narrador e dos jogadores, o Marca de Sangue utiliza uma malha de combate em que os espaços equivalem a 1 metro de distância. Recomenda-se o uso da malha hexagonal, que dará mais possibilidades estratégicas ao jogo, mas também é possível utilizar a malha quadrada, comum também a outros jogos de RPG.

*Malha Hexagonal*

![Malha hexagonal](../../assets/imagens/malha/frame-01.png)

*Malha Quadriculada*

![Malha quadriculada](../../assets/imagens/malha/frame-07.png)

Neste sistema, o alcance das armas também é medido em metros.

> *Exemplo: Se uma lança longa tem 2 metros de alcance ideal, em uma malha hexagonal, isso significa que o personagem que a está utilizando consegue golpear qualquer oponente a 2 espaços de distância.*

Em uma malha quadrada, para mensurar a distância de uma forma simples, mesmo que para fins de alcance de uma arma, basta contar as “casas” até lá, sempre passando de um quadrado a outro pelos lados e nunca pelas diagonais.

## Posicionamento em campo

Quando estiverem em um conflito, a direção a que o personagem está voltado pode fazer muita diferença. O posicionamento representa a direção a que o personagem direciona a parte frontal de seu corpo e sua atenção de modo a atacar ou se defender. O jogo trabalha **somente com o posicionamento definido**: espera-se que todo personagem termine o próprio turno com frente e costas definidas. Isso determinará que modificadores relacionados a posicionamento podem ser aplicados.

> ✅ Decidido em 11/07/2026: o posicionamento aberto deixa de ser uma escolha do jogador (ver [notas-de-design/decisoes/2026-07-11-reunioes-de-mecanica.md](../../notas-de-design/decisoes/2026-07-11-reunioes-de-mecanica.md)).

### Posicionamento aberto (penalidade de esquecimento)

O posicionamento aberto **deixa de ser uma escolha do jogador**. Um personagem só fica em aberto quando **termina o próprio turno sem que nada tenha definido seu posicionamento** — e isso é tratado como **penalidade de esquecimento**: nenhum de seus lados é considerado frente ou costas e ele recebe **`desvantagem`** contra ataques vindos de **qualquer direção**, até que seu posicionamento seja definido.

*Posicionamento aberto (em malha hexagonal)*

![Posicionamento aberto em malha hexagonal](../../assets/imagens/malha/frame-02.png)

*Posicionamento aberto (em malha quadriculada)*

![Posicionamento aberto em malha quadriculada](../../assets/imagens/malha/frame-09.png)

> 💡 **Definição automática (regra de bom senso)**
>
> Antes de deixar um personagem em aberto, o narrador aplica o bom senso: **a última ação do turno define a direção do posicionamento automaticamente** — se o personagem atacou alguém, está posicionado na direção desse alvo. A penalidade vale para o esquecimento genuíno, não para prejudicar o jogador cuja direção era óbvia.

### Posicionamento Definido

Ao transitar para um posicionamento **Definido**, o personagem decreta momentaneamente a posição de sua frente e de suas costas, passando assim a receber modificadores de posicionamento até que seu posicionamento seja redefinido.

*Posicionamento definido (em malha hexagonal)*

![Posicionamento definido em malha hexagonal](../../assets/imagens/malha/frame-03.png)

*Posicionamento definido (em malha quadriculada)*

![Posicionamento definido em malha quadriculada](../../assets/imagens/malha/frame-11.png)

Um personagem entra em posicionamento **definido** voluntariamente quando:

- Declara seu posicionamento;
- Desfere um golpe corporal, tendo sua frente posicionada na direção do oponente;
- Interage com personagens, objetos ou outras coisas que necessitem concentração, permanecendo com posicionamento **definido** enquanto durar a interação;
- Levanta uma guarda, precisando indicar qual lado está guardando. Portanto, o **posicionamento defensivo** é um tipo de posicionamento **definido.**

Um personagem entra em posicionamento **definido** involuntariamente quando:

- Recebe um golpe, tendo sua frente posicionada na direção do oponente.
    - Se o alvo optar por não defender o ataque, pode manter o posicionamento atual, mas recebe o dano sem chance de se esquivar.
    - Permanece com posicionamento **definido** até que desengaje do oponente ou seu posicionamento seja redefinido.
- É alvo de uma habilidade que força seu posicionamento definido.

*Posicionamento definido por interação (em malha hexagonal)*

![Posicionamento definido por interação em malha hexagonal](../../assets/imagens/malha/frame-05.png)

*Posicionamento definido por interação (em malha quadriculada)*

![Posicionamento definido por interação em malha quadriculada](../../assets/imagens/malha/frame-10.png)

> 💡 **Forçar Posicionamento**
> É possível forçar um posicionamento ao custo de **`2 PA`**, mas cuidado, ações de outros personagens podem modificar o seu posicionamento involuntariamente.

Receber um ataque corporal pelas costas confere **`desvantagem`** ao personagem atacado para os contratestes de esquiva, defesa ou outras reações cabíveis (não confere **`vantagem`** ao atacante). Na prática, atacar pelas costas continua favorecendo quem ataca: **flanquear é um objetivo do sistema**.

*Posicionamento definido por engajamento (em malha hexagonal)*

![Posicionamento definido por engajamento em malha hexagonal](../../assets/imagens/malha/frame-06.png)

*Posicionamento definido por engajamento (em malha quadriculada)*

![Posicionamento definido por engajamento em malha quadriculada](../../assets/imagens/malha/frame-12.png)

No caso de estar utilizando a malha hexagonal, o personagem possui 3 hexágonos de frente e 3 de costas.

No caso de estar utilizando a malha quadrada, o personagem possui 3 quadrados de frente e 5 de costas.

> 💡 **Cuidado!**
>
> Caso um personagem seja cercado com um inimigo em cada lado, o primeiro ataque forçará o posicionamento definido, ficando com as costas voltadas para o segundo inimigo. Ao levar um ataque do segundo inimigo, o personagem que está sendo atacado terá seu posicionamento redefinido. Ou seja: tome cuidado para não ser cercado, já que, nessa situação, após o primeiro ataque, você terá **`desvantagem`** no primeiro ataque de cada inimigo no turno dele.

### Engajamento

Ao entrar na área de acerto corpo-a-corpo de um jogador, o personagem é considerado engajado. Personagens engajados possuem restrições de movimento, podendo apenas se movimentar livremente para casas fora da área de engajamento do oponente. **Caso o jogador esteja dentro da área de engajamento e se mova para outro espaço ainda na área de engajamento, o oponente pode pedir um ataque de oportunidade.**

> 💡 **Engajamento no posicionamento Definido**
>
> Enquanto o personagem estiver em posicionamento **Definido**, sua área de engajamento passa a ser apenas os espaços considerados frente.

### Ataque de Oportunidade

O ataque de oportunidade é uma ação sem custo de `PA` que pode ser realizada caso um oponente se movimente dentro da sua área de engajamento. Para realizá-lo, o jogador **consome a sua [reação](02-acoes-em-conflito.md#reação) da rodada** e precisa gastar pontos de [fadiga](../conceitos/08-fadiga.md) equivalentes à ação desejada.

### Flanqueamento

Se um personagem for flanqueado, ou seja, estiver na área de engajamento de dois oponentes, e este personagem não for capaz de sair da área de engajamento em seu turno sem se movimentar dentro da área de engajamento dos oponentes, no ato de movimentar-se poderá receber um ataque de oportunidade de pelo menos um oponente que estiver engajado com ele. A menos que possua alguma habilidade que o permita negar os ataques.

## Sequência de ações em um combate

Para que um combate ocorra da melhor forma sem que faltem informações aos jogadores, os ataques e defesas/esquivas seguem uma sequência de ações e acontecimentos:

1. Ao iniciar uma jogada de ataque o jogador anuncia se realizará um ataque descuidado ou mirado.
    1. No ataque mirado: anuncia qual parte do corpo pretende acertar;
2. O narrador e os jogadores indicam quais modificadores serão aplicados à ação;
3. O atacante joga o **`d10`** de teste de acerto, aplicando-se os modificadores;
4. O alvo pode realizar um contrateste de esquiva ou contrateste de desempenho de defesa (ou alguma outra reação simples e diretamente relacionada ao teste), aplicam-se os modificadores.
    1. Se o valor final do teste do atacante for maior do que o valor final do contrateste do oponente, é considerado um acerto.
    2. Se o resultado for menor ou igual o valor final de contrateste do oponente, é considerado um erro.
5. Uma vez atingido o alvo, o atacante joga os dados de dano de acordo com a arma ou habilidade que está utilizando.
6. Os valores de redutor de dano da armadura ou habilidade do oponente são subtraídos do valor de dano do atacante.
7. O personagem acertado marca na ficha os pontos de dano recebidos pelo atacante.

> 💡 Não existe uma ordem certa para se utilizar ações de movimento em detrimento de outros tipos de ação. O jogador pode, por exemplo, andar, atacar e gastar o restante dos pontos de ação para se afastar do alvo.
