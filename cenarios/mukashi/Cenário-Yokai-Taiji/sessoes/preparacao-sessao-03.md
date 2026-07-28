# Preparação — Sessão 3 (ainda não jogada)

Rascunho de mesa, construído junto com o Daniel em 27/07/2026. Isto é **material de
preparação**, não um relato do que aconteceu — quando a sessão for jogada de verdade,
criar `sessao-03.md` com o que realmente rolou (e mover pra
[`../divergencias-e-sobras.md`](../divergencias-e-sobras.md) o que não for usado).

**Formato:** o roteiro abaixo segue a **ordem cronológica** em que as cenas devem
acontecer à mesa — pode ser seguido de cima para baixo durante a narração. Detalhes
mecânicos extensos (fichas completas de inimigos, mapas táticos) ficam linkados nos
arquivos de referência em vez de repetidos aqui, para não pesar a leitura corrida.

**🌨️ Lembrete (registrado 27/07/2026, a pedido do Daniel):** em cada cena, narre
**detalhes sensoriais do ambiente** (clima, cheiros, sons, textura) antes/durante a ação —
não só o que acontece, mas como o lugar se sente. Cada cena abaixo traz uma caixa "🌨️
Detalhes sensoriais" com sugestões prontas; material de apoio completo (clima de inverno,
paisagem, casas *minka* — casa camponesa tradicional japonesa —, folclore de yuki-onna
"mulher da neve" e kamaitachi "doninha da foice") em
[`../locais/okuta-kuni.md`](../locais/okuta-kuni.md#ambientação-sensorial--inverno-em-okuta-kuni-pesquisa-do-daniel-27072026).

**🔀 Estrutura em paralelo (registrado 28/07/2026, a pedido do Daniel):** as Cenas 1 e 2
acontecem **ao mesmo tempo**, em lugares diferentes, com metade do grupo em cada uma —
Hamato e Kichiro na casa de Midori (Cena 1), Mizuki e os irmãos Tenaga e Ashinaga
treinando com Karasu Daoshi (Cena 2). As duas convergem na Cena 3, quando Hamato e Kichiro
vão buscar o resto do grupo para contar do estado da Midori. Narre as duas metades como
cenas curtas e independentes — não precisa dividir a mesa em subgrupos por muito tempo,
só até o gancho que as une.

## Antes de sentar à mesa (checklist)

- [ ] **Decidir quais pistas do véu de Suzu usar** — 1 ou 2 na Cena 1, e mais 1 ou 2 na
      Cena 3, nunca todas de uma vez (lista completa nas duas cenas, abaixo).
- [ ] **Decidir o gatilho exato** do sucesso da Onda Trovejante de Mizuki (sugestão na
      Cena 2, abaixo — pode amarrar a outra coisa se preferir).
- [ ] **Confirmar se o Henniton (Aramaki) vem** — afeta o balanceamento da Yamamba (ver
      nota em [`../criaturas-e-ameacas/yamamba.md`](../criaturas-e-ameacas/yamamba.md#notas-de-balanceamento))
      e se ele participa da Cena 3 (reencontro na casa de Midori).
- [ ] **Confirmar duas divergências de saúde:** a ficha em PDF original registra
      ferimentos graves nas pernas de Mizuki e de Hamato (uma com dano permanente/perna
      invalidada) que não aparecem em nenhuma sessão jogada até agora. Mantidos nos JSONs
      adaptados por leitura literal da ficha, mas sinalizados como divergência — ver
      anotações em
      [`mizuki.mds.json`](../personagens/jogadores/fichas-json/mizuki.mds.json) e
      [`hamato.mds.json`](../personagens/jogadores/fichas-json/hamato.mds.json). Se for
      engano, zerar a saúde desses membros antes de jogar (afeta bastante a Cena 4, na
      encosta gelada, se real).
- [ ] **Ter as fichas dos PJs à mão** (JSON, regras vigentes, importáveis em
      https://andrewallacemf.github.io/marca-de-sangue-sistema-de-rpg/ficha/):

  | Personagem | Ficha JSON |
  |---|---|
  | Mizuki | [`mizuki.mds.json`](../personagens/jogadores/fichas-json/mizuki.mds.json) |
  | Kichiro Kawamura | [`kichiro-kawamura.mds.json`](../personagens/jogadores/fichas-json/kichiro-kawamura.mds.json) |
  | Hamato | [`hamato.mds.json`](../personagens/jogadores/fichas-json/hamato.mds.json) |
  | Tenaga e Ashinaga | [`tenaga-e-ashinaga.mds.json`](../personagens/jogadores/fichas-json/tenaga-e-ashinaga.mds.json) |
  | Manami Aramaki | [`manami-aramaki.mds.json`](../personagens/jogadores/fichas-json/manami-aramaki.mds.json) (incompleta na fonte original) |

## Contexto que só o mestre sabe (não é uma cena — é pano de fundo)

- A Yamamba é a origem por trás da morte das crianças que geraram os Mōryō (sessão 1) e
  está ligada ao mistério maior da corporeificação dos espíritos — mesmo fenômeno que
  trouxe a Suzu para Okuta-kuni (ver Cena 1).
- O **Senhor das Espadas** também caça yokai e um dia vai caçar o próprio grupo — não
  precisa aparecer nesta sessão, mas tenha isso na cabeça se surgir algum rumor de guerra
  antes da partida (ver [`../personagens/npcs/senhor-das-espadas.md`](../personagens/npcs/senhor-das-espadas.md)).
- A sorte de "ventre"/"espírito afogado" do Ritual das Três Visões (sessão 2) é sobre o
  próprio **Kichiro** (contrato com o Kappa — espírito das águas do folclore japonês) — não
  sobre ninguém grávido na vila. Mizuki
  temeu (sem razão) que Minami estivesse grávida por agressão dos saqueadores; medo
  infundado, não confirmar nem negar diretamente se surgir em jogo (ver
  [`../personagens/npcs/minami-tagori.md`](../personagens/npcs/minami-tagori.md)).
- A fala da Yamamba (Cena 6) não presume mais que quem carrega Kinjo seja o Kichiro —
  dirigida a quem estiver protegendo a criança no momento.

## Roteiro da sessão (passo a passo)

### Cena 1 — Hamato e Kichiro na casa de Midori (abertura da sessão)

**Onde/quando:** casa de Midori, em Okuta-kuni, cedo pela manhã, antes da partida. A
nevasca chegou cedo e com força este ano — a mesma que cobre a caverna na visão da
Mizuki. Enquanto isso, do outro lado da vila, Mizuki treina com Tenaga e Ashinaga (ver
Cena 2, em paralelo).

> 🌨️ **Detalhes sensoriais:** cheiro de fumaça de lenha e ervas fervendo no *irori* (fosso
> de fogo embutido no chão, tradicional das casas japonesas); o
> calor abafado e a fumaça leve de dentro da casa contra o frio cortante que entra cada
> vez que a porta abre; som quase abafado da neve caindo lá fora, quieto demais; tatames
> e futons dobrados de dia; o cheiro de *mochi* (bolo de arroz pilado, doce icônico
> japonês, essencial em celebrações como o Ano Novo e festivais locais) que Midori estava
> fazendo antes de adoecer, agora esfriando de lado — talvez o mochi verde, feito com a
> erva *yomogi* (também chamada *futsu*) e recheado com pasta de feijão doce.

**O que narrar:** Hamato e Kichiro passam na casa de Midori antes de reunir o resto do
grupo para a viagem — e encontram Midori mal: tosse, fraqueza, febre baixa, o frio bateu
duro num corpo já frágil pela idade. **Suzu** está lá cuidando dela com chás e remédios
que realmente funcionam (nova NPC — ver
[`../personagens/npcs/suzu.md`](../personagens/npcs/suzu.md)). Os dois, como todo mundo
na vila, tratam a presença dela como o mais normal do mundo — "claro, é a Suzu."

**Momentos pessoais (só Hamato e Kichiro estão presentes nesta cena):**

- **Kichiro Kawamura — valor vs. dignidade.** Ao vê-lo se esforçar para ajudar em algo
  prático na casa, Midori comenta, gentil e de passagem, que "provar valor" não é a mesma
  coisa que "ser digno". Ela não sabe da profecia do "ventre" nem do contrato com o Kappa
  (ver [`../personagens/jogadores/kichiro-kawamura.md`](../personagens/jogadores/kichiro-kawamura.md)) —
  mas a frase acerta bem no centro da motivação dele (provar-se digno da própria casa no
  ritual de sucessão), sem que ela faça ideia disso.
- **Hamato — confiança renovada.** Depois da reconciliação da sessão 2 (ver
  [`../personagens/jogadores/hamato.md`](../personagens/jogadores/hamato.md)), Midori
  confia mais um pouco a ele — algo prático para a viagem, ou um pedido específico (cuidar
  de algo da casa, ou de Kinjo por um instante) — reforçando, sem diálogo pesado, o papel
  dele como protetor/família encontrada.

**O artifício por trás da cena (conhecimento do mestre, não narrar diretamente):** Suzu é
uma Kitsune chegada **agora**, parte da mesma onda de corporeificação que deixa os yokai
mais presentes no mundo físico — não é uma velha amiga de décadas. Ela se protege com um
**Véu de Familiaridade**: uma ilusão que faz **toda a vila**, grupo incluído, sentir que
sempre a conheceu. Isso resolve de propósito o "por que ela nunca foi citada antes": na
ficção, ela realmente não existia até agora, mas todo mundo age como se sempre tivesse
existido. **Midori também está sob o véu** — não sabe factualmente o que Suzu é, só sente
uma confiança antiga e inexplicável por ela. O remédio de Suzu é real e ajuda de verdade,
mas não cura tudo de uma vez: Midori segue frágil enquanto o inverno duro continuar — cria
dependência genuína, mesmo se o grupo desconfiar dela depois.

**Pistas para rachar o véu nesta cena (escolha 1 ou 2, nunca todas de uma vez):**

1. Se Hamato ou Kichiro tentarem lembrar um momento específico e concreto com Suzu
   ("quando exatamente nos conhecemos?"), a lembrança fica estranhamente vaga — nunca um
   dia, lugar ou frase fixa.
2. Desde que ela começou a cuidar de Midori, a despensa nunca mais ficou vazia de
   abura-age (tofu frito) — ninguém questiona de onde vem.
3. Ao entardecer, quando Suzu vai embora, alguém pode flagrar de relance uma silhueta de
   raposa por menos de um segundo (mais fácil de usar mais tarde, na Cena 3, se a
   narração ainda estiver de manhã aqui).

> ⚠️ A pista do amuleto de Mizuki (ele treme perto de Suzu) **não cabe nesta cena** — ela
> não está presente. Fica reservada para a Cena 3, quando ela conhece Suzu pessoalmente
> pela primeira vez nesta sessão.

**Não resolver nesta cena:** o gancho é deliberadamente lento e **sem ligação prática**
com a missão da Yamamba (fica só no plano temático). Não force revelação nem investigação
— só plante e siga em frente.

**Transição:** vendo o estado de Midori, Hamato e Kichiro decidem que o resto do grupo
precisa saber antes de qualquer coisa — saem para buscar Mizuki, Tenaga e Ashinaga, que
devem estar terminando o treino com Karasu Daoshi (ver Cena 2, que se passa ao mesmo
tempo). Isso gera o reencontro de todos na Cena 3.

### Cena 2 — Treino da Onda Trovejante (Mizuki, Tenaga e Ashinaga + Karasu Daoshi)

**Onde/quando:** em paralelo à Cena 1, na mesma manhã — pátio aberto ou margem de um
trecho de rio perto da casa de Karasu Daoshi, parcialmente congelado.

> 🌨️ **Detalhes sensoriais:** vento cortante entre as penas dele (ou nos cabelos dele em
> forma humanoide); cheiro de incenso/fumaça de fogueira grudado nas roupas; neve leve
> acumulando nos ombros e no chão enquanto praticam; o silêncio de esforço concentrado
> quebrado só pela respiração e pelo vento; o rangido do gelo fino na beira do rio, água
> escura correndo por baixo; o cheiro de peixe e couro molhado que segue Tenaga e Ashinaga
> mesmo longe da vila de pescadores onde cresceram.

**O que narrar:**

1. Mizuki tenta invocar a magia do amuleto de novo, como já tentou sem sucesso antes.
   Karasu Daoshi reconhece o gesto — comenta que ela está fazendo força bruta onde
   precisaria de controle, e se oferece para ensinar.
2. **Tenaga e Ashinaga entram como parte ativa do treino, não só plateia** (registrado
   28/07/2026, a pedido do Daniel): Ashinaga entra no trecho raso e semicongelado do rio
   — pernas longas e robustas não se incomodam com o gelo — e vira um "obstáculo" real
   para Mizuki mirar e controlar; Tenaga usa a corrente da kusarigama (arma japonesa de
   corrente e foice) para balançar um alvo móvel e instável no ar, obrigando Mizuki a
   reagir com precisão, não só força bruta.

**🎴 Mini-game — palavras da invocação (registrado 28/07/2026, a pedido do Daniel):** a
magia de Mizuki é uma herança de família — as últimas palavras que Shigeru murmurou ao
morrer — e ela só funciona com a frase certa, na ordem certa. Ninguém, nem Mizuki, sabe a
frase inteira ainda: o grupo vai reunindo **fragmentos soltos** ao longo da sessão, e só
"clicam" na ordem certa no clímax do combate (Cena 6). Ficha completa da magia, com a
tabela de todos os fragmentos e a mecânica final, em
[`../personagens/jogadores/mizuki.md`](../personagens/jogadores/mizuki.md#onda-trovejante-narukami--magia-herdada-mini-game-da-sessão-3).
Nesta cena, dois dos quatro fragmentos aparecem:

- Cada tentativa de treino (contra o obstáculo do Ashinaga, depois contra o alvo móvel do
  Tenaga) é um **teste de `KI`** de Mizuki — ela ainda não tem a técnica, então testa com
  **`desvantagem` natural** (ver
  [Desvantagem natural](../../../../sistema-base/conceitos/01-testes-e-contratestes.md#desvantagem-natural)) — contra um **contrateste de dificuldade natural** definido por Karasu Daoshi. **O resultado do teste não importa para o mini-game** (ela não conjura de
  verdade aqui de qualquer forma) — sirva só para dar sabor de fracasso/frustração à
  cena, cômico ou tenso como preferir.
- **Independente do resultado**, cada tentativa arranca um fragmento da frase da boca de
  Mizuki, sem ela perceber — é o outro personagem envolvido no teste quem nota e repete a
  palavra de volta pra ela:
  - Teste contra o obstáculo do **Ashinaga** → fragmento **"Vento"**.
  - Teste contra o alvo móvel do **Tenaga** → fragmento **"Deus-Trovão"**.
  - Se Karasu Daoshi corrigir a postura/foco dela em algum momento da cena (item 1,
    acima) → fragmento **"Divino"**.
  - O quarto fragmento, **"Narukami"** (o nome), fica reservado para a Cena 3, com
    Midori — não entregar aqui.
- Anote (ou deixe o jogador anotar) os fragmentos conforme aparecem, fora de ordem. A
  ordem correta só é revelada pelo narrador na Cena 6.

3. **Momento pessoal breve — Tenaga e Ashinaga.** Numa pausa do treino, os dois ficam
   quietos olhando a água correr sob o gelo — ainda esperando notícias de Ishiki, que
   partiu ao Norte e não voltou (ver
   [`../personagens/jogadores/tenaga-e-ashinaga.md`](../personagens/jogadores/tenaga-e-ashinaga.md)).
   Mizuki pode notar o silêncio e perguntar; a resposta não precisa resolver nada — só
   um instante de vulnerabilidade real antes de voltarem ao treino. **A cena não fecha o
   assunto**: Midori toca no mesmo tema de novo, com mais peso, na Cena 3.
4. **O sucesso "de verdade" não acontece aqui** — só vem no meio do combate com a Yamamba
   (Cena 6), num momento de estresse alto, quando os fragmentos finalmente se encaixam.
   ⚠️ Gatilho sugerido: logo depois de libertar as crianças da gaiola (quando o fluxo de
   espíritos some e a Yamamba fica mais vulnerável), ou num momento em que alguém está
   prestes a cair na malha de atração e Mizuki precisa agir. Ajustar livremente — é só um
   rascunho. Mecânica completa do feitiço (`KI`, `PA`, dano, empurrão) em
   [`../personagens/jogadores/mizuki.md`](../personagens/jogadores/mizuki.md#ficha-da-habilidade-mecânica-formato-mukashi).

**Transição:** Hamato e Kichiro chegam ofegantes, vindos da casa de Midori, e interrompem
o treino para contar do estado dela. A urgência corta a cena — o grupo decide ir junto até
lá antes de partir de vez para a montanha. Isso gera a Cena 3.

### Cena 3 — Reencontro na casa de Midori (todo o grupo)

**Onde/quando:** casa de Midori mais uma vez, agora com o grupo completo reunido — pouco
depois das Cenas 1 e 2. A nevasca segue caindo, um pouco mais forte do que antes.

> 🌨️ **Detalhes sensoriais:** o mesmo calor abafado e cheiro de fumaça e ervas de antes,
> agora mais denso com mais gente amontoada na casa pequena; o mochi de Midori, esfriado
> de vez, ainda na mesa; a neve caindo mais grossa cada vez que a porta abre para deixar
> alguém entrar; o silêncio tenso de quem chegou preocupado, disputando espaço com o
> aconchego reconfortante do *irori* aceso.

**O que narrar:** Mizuki, Tenaga, Ashinaga (e Aramaki, se presente) veem Midori doente
pela primeira vez nesta sessão e conhecem **Suzu** cuidando dela — ou melhor, "reconhecem"
Suzu, já que todo mundo (grupo incluído) sente que sempre a conheceu. O clima é de
preocupação genuína, não de emergência: o remédio de Suzu já está ajudando, mas Midori
segue frágil.

**Eco da nevasca (Mizuki):** registrado 27/07/2026, a pedido do Daniel — não é um sonho,
é uma memória puxada por interação, dentro da própria cena. Mizuki era bebê quando o pai
(Shigeru) voltou carregando-a numa noite de nevasca, entregou-a a Midori e morreu no chão
da casa (ver [`../personagens/jogadores/mizuki.md`](../personagens/jogadores/mizuki.md)) —
então não é memória própria dela, é mais visceral: o cheiro do ar antes da neve pesada, o
silêncio abafado de uma nevasca forte, o frio que ela não sente como os outros. Ver a avó
doente, com a nevasca caindo forte de novo lá fora, é o gatilho perfeito: ela é tomada por
uma inquietação que não sabe nomear. **É a própria Midori quem reage primeiro** — vendo a
neve cair forte de novo e a neta parada na porta, fica quieta, talvez com os olhos
marejados — o suficiente para puxar a pergunta natural de algum jogador ("o que foi, vó?").
Isso abre espaço para ela recontar (ou reconfirmar) um pedaço de como Mizuki chegou — uma
conversa emocional entre avó e neta que o resto do grupo testemunha, não uma aula de lore.

**🎴 Mini-game — o último fragmento (registrado 28/07/2026):** é dentro dessa mesma
conversa que Midori entrega o quarto e último fragmento da invocação de Mizuki —
**"Narukami"**, o nome que guardou por vinte anos sem nunca repetir a ninguém. Ela conta
que Shigeru, ao morrer, murmurou mais palavras além do nome da filha — algo sobre vento,
sobre um deus, sobre trovão — e que ela nunca soube o que significava, só que parecia
sagrado demais pra contar antes da hora. Se o grupo já trouxe os fragmentos "Vento",
"Divino" e "Deus-Trovão" da Cena 2, esse é o momento em que Mizuki tem, pela primeira vez,
todas as peças — só ainda sem saber a ordem certa. Ficha completa da magia (todos os
fragmentos, e a mecânica do feitiço) em
[`../personagens/jogadores/mizuki.md`](../personagens/jogadores/mizuki.md#onda-trovejante-narukami--magia-herdada-mini-game-da-sessão-3).

Fecha com a mesma nevasca que trouxe Mizuki agora escurecendo o caminho que o grupo está
prestes a seguir.

**Outros momentos pessoais (para a cena não ficar só na Mizuki):**

- **Tenaga e Ashinaga — espera por notícias, parte 2.** Retomando o que ficou em aberto na
  Cena 2, Midori — sabendo (ou percebendo) que eles ainda esperam notícias de Ishiki —
  oferece uma palavra de conforto sem resolver o mistério: fala de quem também já esperou
  notícias de quem se foi (ecoa a própria espera pelo Shigeru). Fecha o que a pausa no
  treino só tinha aberto.
- **Manami Aramaki — comida e família** (se o Henniton confirmar presença). Os dois trocam
  receitas ou histórias de culinária sobre o mochi — toque leve, alinhado à personalidade
  dele (gosta de cozinhar, aprendeu com o pai falecido — ver
  [`../personagens/jogadores/manami-aramaki.md`](../personagens/jogadores/manami-aramaki.md)).

**Pistas para rachar o véu nesta cena (escolha 1 ou 2, nunca todas de uma vez — considere o
que já foi usado na Cena 1):**

1. **O amuleto de Mizuki treme discretamente perto de Suzu** (mesma mecânica já usada
   perto de Kichiro e de um dos ladrões) — o amuleto **não é enganado pelo véu**. Só
   Mizuki percebe, e só se estiver prestando atenção. Primeira vez que isso pode
   acontecer nesta sessão, já que é o primeiro momento de Mizuki perto de Suzu.
2. Perguntar a mais de uma pessoa sobre "desde quando" Suzu está por aqui pode gerar
   respostas levemente incompatíveis (o véu cobre a vila inteira, não só o grupo).
3. Ao entardecer, quando Suzu vai embora, alguém pode flagrar de relance uma silhueta de
   raposa por menos de um segundo (se ainda não usado na Cena 1).

**Lembrete do artifício por trás da cena (conhecimento do mestre — ver Cena 1 para o texto
completo):** Suzu é uma Kitsune chegada agora; o Véu de Familiaridade cobre a vila inteira,
Midori incluída; o gancho é deliberadamente lento e sem ligação prática com a missão da
Yamamba.

**Transição:** o grupo se despede de Midori (agora um pouco melhor, aos cuidados de Suzu)
e segue, enfim completo, rumo à montanha — Cena 4.

### Cena 4 — A subida: Encosta Gelada

**Onde/quando:** trilha nevada subindo a montanha, guiada pela visão de Mizuki, em meio a
uma nevasca forte.

> 🌨️ **Detalhes sensoriais:** vento que "morde até os ossos"; neblina pesada se
> assentando nos vales, abafando sons e visão; rangido do gelo sob os pés a cada passo;
> pinheiros de galhos retorcidos pelo vento, cobertos de neve, contra um branco quase
> ofuscante; teias de aranha viradas fios de prata gelados em galhos baixos. Considere um
> corte inexplicado na perna de alguém — sem dor imediata, só o sangue depois — como eco
> do *kamaitachi* ("doninha da foice" — ventos cortantes do folclore japonês que abrem
> cortes sem dor imediata) (ver
> [`../locais/okuta-kuni.md`](../locais/okuta-kuni.md#ambientação-sensorial--inverno-em-okuta-kuni-pesquisa-do-daniel-27072026)),
> sem precisar virar uma criatura própria.

**O que narrar:** a subida é seu próprio mini-cenário tático (Fase 0 da Yamamba),
desenhado no estilo do Kit de Cenários de playtest — situação, malha, desafios por
personagem, objetivo, dica de teste. Estrutura completa (trilha, terreno gelado, fenda a
atravessar, regra do "Frio da Montanha", desafio específico de cada PJ com o que já tem na
ficha) em
[`../criaturas-e-ameacas/yamamba.md`](../criaturas-e-ameacas/yamamba.md#fase-0--encosta-gelada-aproximação).

**Gatilho possível a qualquer momento desta subida:** a Yamamba pode iniciar a **Malha de
Atração** assim que estiver a 8m de alguém do grupo — não precisa esperar a boca da
caverna. Mecânica resumida: teste Social dela contra contrateste Mental de cada alvo; quem
perde entra na malha (incapaz de atacá-la, só pode convencer outros ou tentar se libertar
no próprio turno); um aliado pode gastar 3 PA para resgatar alguém com um teste Social
oposto. Regra completa em
[`../criaturas-e-ameacas/yamamba.md`](../criaturas-e-ameacas/yamamba.md#fase-1--malha-de-atração-a-caminho-da-caverna).

**Transição:** grupo atravessa a fenda e chega à boca da caverna — Cena 5.

### Cena 5 — Na caverna: a estátua e a gaiola

**Onde/quando:** entrada e salão central da caverna da Yamamba.

> 🌨️ **Detalhes sensoriais:** o silêncio abafado de fora dá lugar ao eco da própria
> respiração e dos passos na pedra; cheiro de terra úmida e mofo, mais frio ainda do que a
> encosta lá fora, ar parado; os chorinhos vagos vindos da estátua soam abafados, quase
> subterrâneos; talvez geada fina cobrindo a pedra perto da entrada, que desaparece
> conforme avançam para dentro.

**O que narrar, em ordem:**

1. O grupo ouve chorinhos vagos vindos de uma estátua no salão central.
2. Ao se aproximar, a estátua se dissipa e revela uma **gaiola com crianças** pedindo
   ajuda.
3. A Yamamba já deve estar posicionada usando o terreno a seu favor — tende a subir numa
   saliência rochosa (elevação) para usar a habilidade **Raízes da Montanha** com
   vantagem e convocar Espíritos Constritores, evitando a poça de água do salão. Mapa
   tático completo (4 zonas: gargalo de entrada, salão central, saliência, poça de água)
   em
   [`../criaturas-e-ameacas/yamamba.md`](../criaturas-e-ameacas/yamamba.md#terreno-da-caverna-mapa-tático).

**Transição:** o combate começa — Cena 6.

### Cena 6 — Combate com a Yamamba

**Onde/quando:** salão central da caverna, imediatamente após a Cena 5.

> 🌨️ **Detalhes sensoriais:** hálito visível de todo mundo, exceto Mizuki; estalos secos
> de pedra/gelo rachando quando a Yamamba usa Raízes da Montanha; o calor animalesco da
> Fúria da Montanha contrastando com o frio parado da caverna; luz trêmula e sombras
> dançando nas paredes; o som da água parada da poça, quase congelada, se alguém se
> aproximar dela.

**Sequência esperada do combate:**

1. **Abertura:** a Yamamba ataca usando Fúria da Montanha (dois ataques por rodada) e
   pode convocar até 3 Espíritos Constritores com Raízes da Montanha, que agarram e
   prendem personagens (ver
   [`../criaturas-e-ameacas/espiritos-constritores.md`](../criaturas-e-ameacas/espiritos-constritores.md)).
   Ficha completa dela (PV, PA, ataques, habilidades) em
   [`../criaturas-e-ameacas/yamamba.md`](../criaturas-e-ameacas/yamamba.md#ficha-completa-nivelada-para-o-grupo-registrado-27072026).
2. **Meio do combate — o gatilho da Onda Trovejante (mini-game, ver Cena 2 e Cena 3):**
   momento ideal logo após a gaiola ser aberta (abaixo) ou quando alguém cai na malha de
   atração. Nesse instante de estresse alto, **é o narrador quem finalmente revela a
   ordem certa** dos quatro fragmentos que o grupo reuniu ao longo da sessão — narre como
   se a frase "clicasse" na cabeça de Mizuki, não como um teste que ela precisa passar:

   > *"Vento. Divino. Deus-Trovão... **Narukami!**"*

   Com a frase completa (**Vento → Divino → Deus-Trovão → Narukami**), Mizuki conjura a
   **Onda Trovejante** de verdade pela primeira vez: `6 PA`, `4` de dano superficial no
   tronco (custo em saúde da magia), teste de `KI` dela contra o contrateste `Físico` de
   cada criatura num raio de `4,5 m` ao redor dela — quem falha sofre `2d8` `CONT.` e é
   empurrado `3 m`; quem resiste, sofre metade do dano e não é empurrado. **Pode arrancar
   aliados agarrados pelos Espíritos Constritores da própria Constrição** — vale destacar
   isso na narração. Ficha completa da magia em
   [`../personagens/jogadores/mizuki.md`](../personagens/jogadores/mizuki.md#ficha-da-habilidade-mecânica-formato-mukashi).
3. **Virada — libertar as crianças da gaiola** (ação, 3 PA, sem teste): no instante em que
   isso acontece, a Yamamba perde 5 PV de cada membro, a Pele da Montanha some (redutor de
   dano cai a 0) e todos os Espíritos Constritores vivos se desfazem imediatamente. É a
   virada de jogo — depois disso o combate deve fechar rápido (1-2 rodadas).
4. **Falas dela** (usar quando fizer sentido em cena):
   - *"Entregue-me a criança, [protetor(a) de Kinjo], e eu abençoarei as colheitas e os
     rios de Okuta-kuni com fertilidade por cem anos."*
   - *"Por que protege aqueles que a temem, filha da neve? Entregue a criança humana e
     junte-se à montanha."* (para Mizuki)
5. **Sinergias táticas por personagem** (o que a arma/habilidade real de cada PJ permite
   fazer contra a Yamamba e os Espíritos Constritores — ex.: Kusarigama (arma japonesa de
   corrente e foice) do Tenaga e Ashinaga puxando a Yamamba pra poça de água) em
   [`../criaturas-e-ameacas/yamamba.md`](../criaturas-e-ameacas/yamamba.md#sinergias-táticas-por-personagem-a-partir-das-fichas-reais).

**Fim da sessão:** derrota, fuga ou rendição da Yamamba — ver
[`../criaturas-e-ameacas/yamamba.md`](../criaturas-e-ameacas/yamamba.md#pendências) para
o que isso significa para o gancho da corporeificação dos espíritos (ainda em aberto).
