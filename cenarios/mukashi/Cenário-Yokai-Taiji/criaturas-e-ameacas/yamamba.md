# Yamamba

**Tipo:** Yokai — chefe de encontro · **Status:** planejada para a Sessão 3 (ainda não
jogada) · **Local:** caverna nas montanhas ao norte de Okuta-kuni (ver
[`../locais/okuta-kuni.md`](../locais/okuta-kuni.md) e a visão de Mizuki em
[`../sessoes/sessao-02.md`](../sessoes/sessao-02.md))

## Lore (yamauba, folclore japonês — pesquisa do Daniel, 27/07/2026)

Mulher idosa que habita as montanhas, de natureza profundamente ambígua — alterna entre
criatura aterrorizante e presença benfazeja. Representa o "Outro" marginalizado, vivendo
num espaço liminar entre o mundo humano e o selvagem.

**Aparência:** muito alta, ossuda, cabelos longos brancos/desgrenhados — quase uma versão
antropomórfica da própria paisagem envelhecida da montanha. Olhos penetrantes, boca
grande (às vezes descrita rasgada de orelha a orelha), mãos cobertas de pelos, voz rouca
e áspera.

**Lado malévolo (bruxa da montanha):** temida como ogra que sequestra mulheres de
vilarejos e devora gado e crianças pequenas. Atormenta quem se perde ou invade seu
território. É enganosa — chega a se disfarçar (inclusive fingindo ser a própria mãe de
crianças deixadas sozinhas) para ganhar confiança e entrar em casas.

**Lado benévolo (protetora e mãe):** em outras lendas, ajuda voluntariamente em tarefas
domésticas ou agrícolas, com a força de quatro ou cinco homens. Sua visita, ou dinheiro
recebido dela, é presságio de boa sorte e prosperidade. É fortemente associada à
maternidade — é dita mãe do herói **Kintarō** (Sakata no Kintoki), e mulheres rezam em
locais ligados a ela para produzir leite materno.

**Uso narrativo sugerido:** não tratá-la como vilã unidimensional. A oferta dela (ver
falas abaixo) pode ser genuína — ela pode de fato ser capaz de abençoar colheitas e rios,
o que torna a escolha do grupo mais difícil do que simplesmente "resistir a uma mentira".
O convite a Mizuki ("filha da neve... junte-se à montanha") ecoa o próprio tema de Mizuki
— outra figura yokai/humana ambígua, talvez vendo nela um reflexo de si mesma ou de uma
filha perdida.

## Ligação com a trama (confirmado pelo Daniel, 27/07/2026)

A Yamamba é a **origem por trás da morte das crianças que se tornaram os Mōryō**
(sessão 1 — ver [`moryo.md`](moryo.md)) e está ligada ao mistério maior da
**corporeificação dos espíritos** que motiva o decreto de Suzanoo (ver
[`../fio-narrativo.md`](../fio-narrativo.md)). As crianças na gaiola da caverna (ver
mecânica abaixo) são prisioneiras dela, alimentando o "fluxo de espíritos" que a
sustenta — o mesmo padrão da história dos Mōryō (crianças abandonadas, exploradas por algo
mais forte e maligno).

**Ficha jogável (JSON):** [`fichas-json/yamamba.mds.json`](fichas-json/yamamba.mds.json) —
importável direto em https://andrewallacemf.github.io/marca-de-sangue-sistema-de-rpg/ficha/
(botão "Carregar").

## Ficha completa (nivelada para o grupo, registrado 27/07/2026)

**Calibração usada:** grupo de referência = 4 personagens ativos (Mizuki, Hamato,
Kichiro, Tenaga e Ashinaga — Aramaki é incerto, ver nota de balanceamento no fim). Como
referência de escala, os Ladrões Desertores do Norte (PV 15, PA 2-3, dano 3-5 cada — ver
[`ladroes-desertores-do-norte.md`](ladroes-desertores-do-norte.md)) foram um encontro de
grupo tranquilo, e os três Mōryō (PV 12, PA 10 cada — ver [`moryo.md`](moryo.md)) um
encontro moderado. A Yamamba é uma **chefe solo contra 4-5 personagens**: para compensar
a desvantagem de economia de ação (1 turno dela contra 4-5 deles), ela recebe PA
elevado, ataque duplo e um "reforço" (armadura + regeneração por acerto) que **desaparece
de vez quando as crianças são libertadas** — esse é o gatilho de virada de jogo que o
Daniel já queria para a cena.

⚠️ Estes números são uma proposta pronta para jogar, não uma imposição — ajustar livremente
em mesa. Usa o modelo padrão de vida do sistema (60 PV, 6 membros de 10 — ver
[`../../../../sistema-base/conflitos/03-saude-e-protecao.md`](../../../../sistema-base/conflitos/03-saude-e-protecao.md)).

### Vida e PA

| Membro | PV |
|---|---|
| Cabeça | 10 |
| Tronco | 10 |
| Braço direito | 10 |
| Braço esquerdo | 10 |
| Perna direita | 10 |
| Perna esquerda | 10 |
| **Total** | **60** |

**PA:** 16 (bem acima do padrão de 10 dos personagens — compensa lutar sozinha contra o
grupo todo).

**Redutor de dano:** **Pele da Montanha**, **-2** (equivalente a armadura média) —
**só enquanto o "fluxo de espíritos" estiver ativo**, ou seja, antes da gaiola ser aberta.
Cai para **0** depois.

### Ataques

| Ataque | Alcance | Custo PA | Dano | Propriedades |
|---|---|---|---|---|
| Garras | 1–2 m | 4 PA | 2d6 | Cortante, Agarrar (AGAR) |
| Investida | 1 m | 5 PA | 1d6 + desequilibra (alvo termina em posicionamento aberto) | Contundente |

### Habilidades

- **Fúria da Montanha** — pode atacar **duas vezes por rodada** (paga o custo cheio de PA
  de cada ataque), refletindo a força "de quatro ou cinco homens" da lenda.
- **Voracidade** — sempre que acerta um ataque, **recupera 1 PV**, no membro que ela
  escolher (não reverte dano permanente/invalidado). Continua ativa mesmo depois da
  gaiola — só para se ela for derrotada, fugir ou se render.
- **Disfarce Materno** — pode se passar por uma figura materna/familiar conhecida do alvo
  por uma cena; o alvo percebe o engano com um teste **Mental** contra o **Social** dela.
  Usar narrativamente antes ou durante a malha de atração.

#### Habilidade nova — Raízes da Montanha

Habilidade de terreno (registrada 27/07/2026, a pedido do Daniel), amarrando a Yamamba ao
próprio chão da caverna e trazendo os [Espíritos Constritores](espiritos-constritores.md)
para o combate.

- **Custo:** `5 PA`. **Alcance:** 6 metros. **Recarga:** só pode ser usada de novo depois
  de **2 rodadas** (marque quando for usada).
- **Efeito:** a Yamamba aponta um ponto do chão dentro do alcance. Num raio de **2
  metros** a partir dali, a rocha racha e vira **terreno difícil** (dobra o custo de `PA`
  de deslocamento) **pelo resto do combate** — e, no mesmo instante, **1 Espírito
  Constritor** emerge daquele ponto (ver ficha própria).
- **Limite:** no máximo **3 Espíritos Constritores vivos ao mesmo tempo**. Se já houver 3,
  a habilidade só cria o terreno difícil, sem convocar um novo espírito.
- **Elevação favorece a Yamamba:** por ser um efeito à distância, se ela estiver numa
  posição mais alta que o alvo no momento de usar (ver
  [Elevação](../../../../sistema-base/conflitos/01-conflito-fisico.md#elevação)), o
  ataque é feito com `vantagem`.
- Todos os Espíritos Constritores vivos **se desfazem imediatamente** quando as crianças
  da gaiola são libertadas — mesmo gatilho que remove a Pele da Montanha.

### Fase 0 — Encosta Gelada (aproximação)

Desenhada no estilo do Kit de Cenários de playtest do sistema (situação → malha →
desafios → objetivo → dica de teste), a pedido do Daniel (27/07/2026), usando as fichas
reais dos PJs — ver [`../personagens/jogadores/fichas-json/`](../personagens/jogadores/fichas-json/).

**Situação:** guiado pela visão de Mizuki no Ritual das Três Visões, o grupo sobe a
encosta nevada ao norte de Okuta-kuni até a boca da caverna, em meio a uma nevasca forte.
É **nesta subida**, não só na porta da caverna, que a Yamamba pode iniciar a
[Malha de Atração](#fase-1--malha-de-atração-a-caminho-da-caverna) — a qualquer momento em
que estiver a 8m de alguém do grupo.

**A malha (trilha, ~14 espaços):**

```
[BASE DA TRILHA] ══trecho gelado (terreno difícil)══ [FENDA — gargalo, 1 espaço] ══trecho final══ [BOCA DA CAVERNA]
  grupo começa aqui                                    risco de queda                    Yamamba pode iniciar a Malha de
                                                                                           Atração a partir daqui (alcance 8m)
```

**Terreno:**

- **Trecho gelado:** terreno difícil (dobra o custo de `PA` de deslocamento). Quem tentar
  se mover mais rápido que o passo normal (usar **Disparada**, **Corredor** ou correr) num
  trecho gelado faz um teste `Ágil` simples (dificuldade sugerida: **6**); falhar = escorrega,
  cai (vira posicionamento aberto) e gasta **`2 PA`** extras para se levantar.
- **Fenda:** gargalo de **1 espaço**, só atravessa um personagem por vez. Cruzar exige um
  teste `Ágil` **ou** `Físico` (o jogador escolhe); falhar = cai na fenda — fica **fora de
  cena por 1 rodada** e precisa ser resgatado ou escalar de volta (mesma lógica da ponte do
  Cenário 4 do [Kit de Cenários](../material-bruto/Marca-de-Sangue-Kit-de-Cenarios.pdf) —
  "Escolta da Chama").
- **Frio da Montanha:** a cada 3 rodadas expostos na encosta (ou por cena, a critério do
  narrador), quem não tiver proteção adequada contra o frio ganha **1 de fadiga**. Cria
  pressão para não demorar na travessia.

**Desafios específicos por personagem** (a partir das fichas adaptadas):

- **Mizuki** — não sente frio: imune à regra do "Frio da Montanha". Bom momento para o
  [sonho/premonição dela](../sessoes/preparacao-sessao-03.md#1-parte-anterior-antes-de-partir-para-a-caverna)
  ecoar de novo — sugestão: ao pisar na fenda ou avistar a boca da caverna pela primeira
  vez, ela tem um lampejo do mesmo vulto na neve do sonho.
- **Hamato** — carrega **Kinjo** (o bebê) no colo: atravessar a fenda segurando-o com as
  duas mãos significa **não poder empunhar arma nesse turno** — decisão real a cada
  travessia. ⚠️ Se a divergência de saúde registrada em
  [`fichas-json/hamato.mds.json`](../personagens/jogadores/fichas-json/hamato.mds.json)
  (perna esquerda com dano permanente) for confirmada, o custo de deslocamento no gelo
  soma o redutor de perna incapacitada (`+1 PA` extra por metro) **ao dobro do terreno
  difícil** — considere ativamente alguém apoiá-lo na travessia.
- **Kichiro Kawamura** — **Corredor** (dobra o limite de `PA` em deslocamento) ajuda a
  atravessar rápido; **Firme** permite empunhar o martelo grande com uma mão (`-3` de
  dano), liberando a outra para se seguravar numa saliência ou ajudar um aliado — bom
  momento de protagonismo fora de combate, inclusive quebrando gelo/rocha instável com o
  martelo se o grupo precisar abrir caminho.
- **Tenaga e Ashinaga** — a mobilidade reduzida já estabelecida (ver
  [`sessao-02.md`](../sessoes/sessao-02.md)) torna a fenda particularmente dura sozinho —
  mas a **Kusarigama** (arma `AGAR.`) pode virar uma "ponte" de corrente: agarrar um ponto
  fixo do outro lado da fenda e servir de corrimão para o grupo todo atravessar. **Burro
  de carga** (não gasta `PA` extra para deslocar um aliado agarrado) combina direto com
  isso se alguém escorregar e precisar ser puxado de volta.
- **Manami Aramaki** (se o Henniton confirmar presença) — **Técnica em Nadar** não ajuda
  com gelo diretamente, mas dá bagagem sobre corpos d'água congelados: pode fazer um teste
  `Físico` ou `Mental` com `vantagem` para avaliar se um trecho de gelo aguenta o peso do
  grupo, ou achar a rota mais segura pela fenda.

**Objetivo:** atravessar a encosta e chegar à boca da caverna com o mínimo de fadiga/quedas
possível — não é um combate obrigatório, é pressão de ambiente + a Malha de Atração como
ameaça que pode cair a qualquer momento da travessia.

**Dica de teste:** veja se o "Frio da Montanha" cria urgência real sem punir demais quem
não tem proteção contra frio; veja se a Kusarigama do Tenaga e Ashinaga é lembrada como
solução criativa pra fenda (se não, dê uma deixa sutil); e veja se a Yamamba consegue
isolar e afetar com a Malha de Atração quem ficou pra trás na travessia — é um ponto
tático real a favor dela.

### Fase 1 — Malha de atração (a caminho da caverna)

Mecânica formalizada a partir do rascunho do Daniel:

1. Quando o grupo entra no alcance de **8 metros** da Yamamba (ainda do lado de fora da
   caverna), ela faz um teste **Social** (`1d10` + aptidões) contra cada personagem que
   quiser afetar.
2. O alvo responde com um **contrateste Mental**.
3. **Se a Yamamba vencer**, o personagem entra na malha de atração: passa a defender a
   Yamamba verbalmente, fica **incapaz de atacá-la fisicamente**, e no próprio turno só
   pode tentar convencer outro personagem (ação Social) ou tentar se libertar (abaixo).
4. **Libertação (no próprio turno):** o personagem pode gastar a ação para um novo teste
   **Mental**, como contrateste contra o resultado original da Yamamba. Vencendo, volta ao
   normal.
5. **Resgate por aliado:** outro personagem pode gastar **3 PA** para tentar trazer um
   companheiro afetado de volta, com um teste **Social** oposto ao **Social** da Yamamba.

### Terreno da caverna (mapa tático)

Proposta de mapa para dar peso real às regras de movimentação/terreno do sistema (ver
[Conflito físico](../../../../sistema-base/conflitos/01-conflito-fisico.md)). Quatro
zonas, pensadas para malha hexagonal ou quadriculada:

1. **Corredor de entrada (gargalo)** — passagem estreita de ~2 espaços de largura, único
   caminho para o salão central. Só cabem 1-2 personagens lado a lado — bom para quem
   quer segurar a retaguarda, ruim para quem precisa flanquear. A Yamamba tende a evitar
   lutar aqui (perde o próprio espaço para manobrar a Fúria da Montanha).
2. **Salão central** — onde fica a estátua/gaiola. Terreno aberto, ideal para a Yamamba
   circular e para o grupo se espalhar. É aqui que o combate principal acontece.
3. **Saliência rochosa (elevação)** — uma borda de pedra ~1,5 m acima do salão, alcançável
   subindo (custo extra de movimento, a critério do narrador — sugestão: `+2 PA` para
   escalar). A Yamamba pode usá-la para ganhar `vantagem` em **Raízes da Montanha** (ver
   [Elevação](../../../../sistema-base/conflitos/01-conflito-fisico.md#elevação)); quem
   escala também ganha vantagem em ataques à distância dali.
4. **Poça de água subterrânea** — um trecho raso de água parada num canto do salão,
   alimentado por infiltração da montanha. **Terreno difícil** (dobra custo de
   deslocamento) para todos. **Fraqueza ambiental da Yamamba:** enquanto ela estiver
   dentro da poça, a **Pele da Montanha não funciona** (redutor de dano cai a 0) — a água
   corta a ligação dela com a pedra da montanha, ecoando a natureza yuki-onna de Mizuki
   (gelo/água) como o oposto elemental da Yamamba (terra/montanha). Ela evita a poça por
   instinto, mas pode ser **empurrada** para lá (ação **Empurrar**, `1 PA`,
   `Físico` — ver
   [`../../../../sistema-base/listas/acoes-em-combate.md`](../../../../sistema-base/listas/acoes-em-combate.md)).

> 💡 **Uso em mesa:** não é preciso desenhar as quatro zonas com precisão milimétrica —
> basta deixá-las claras verbalmente ou com marcadores simples na malha. O objetivo é dar
> ao grupo **opções táticas reais**: empurrar a Yamamba pra água, usar o gargalo pra evitar
> ser cercado, disputar a saliência para negar a vantagem dela.

### Fase 2 — Combate na caverna

- O grupo ouve chorinhos vagos vindos de uma estátua; ao se aproximar, ela se dissipa e
  revela a gaiola com as crianças pedindo ajuda.
- A Yamamba abre o combate usando o terreno a seu favor: tende a subir na saliência
  rochosa para usar **Raízes da Montanha** com vantagem e convocar
  [Espíritos Constritores](espiritos-constritores.md), enquanto evita a poça de água.
- **Libertar as crianças** custa uma ação (**3 PA**, sem teste — é só abrir a gaiola). No
  instante em que isso acontece:
  - a Yamamba perde **5 PV de cada membro** (metade dos 10) imediatamente;
  - o "fluxo de espíritos" se rompe: a **Pele da Montanha some** (redutor de dano cai a 0,
    inclusive fora da poça a partir de agora);
  - **todos os Espíritos Constritores vivos se desfazem imediatamente**;
  - narrativamente, ela perde parte da fúria animalesca — mantém a Fúria da Montanha, mas
    fica visivelmente mais lenta e desesperada.
- **Voracidade continua ativa** depois da gaiola — ela ainda recupera 1 PV por acerto até
  ser derrotada, fugir ou se render.

### Sinergias táticas por personagem (a partir das fichas reais)

Registrado 27/07/2026, depois de converter as fichas dos PJs — ver
[`../personagens/jogadores/fichas-json/`](../personagens/jogadores/fichas-json/). Ideias
para o narrador ter na manga, não roteiro fechado:

- **Hamato** — **Ataques múltiplos & pesados** (lança curta/katana) deixa ele acertar a
  Yamamba e, no mesmo turno, mudar de alvo para um Espírito Constritor sem desvantagem —
  bom combo pra limpar um agarrão em alguém sem abrir mão de pressionar a chefe. **Reativo**
  + **Maestria em cortante/perfurante** o tornam perigoso para a Yamamba tentar recuar dele
  (ataque de oportunidade tanto na saída quanto na entrada do alcance).
- **Kichiro Kawamura** — o martelo grande (`4d4` contundente) é a maior fonte de dano bruto
  do grupo por golpe; combinado com **Consumir**, pode tentar desativar uma habilidade
  ativa da Yamamba num momento crítico (ex.: antes dela usar Raízes da Montanha de novo).
  **Corredor** ajuda a alcançar a saliência rochosa ou a poça de água rápido para forçar
  posicionamento.
- **Tenaga e Ashinaga** — a Kusarigama (`AGAR.`) é a ferramenta natural para a jogada da
  poça de água: em vez de só **Empurrar**, pode **Agarrar** a Yamamba e puxá-la para dentro
  — uma execução mais específica e vistosa da mesma tática ambiental. **Maestria em armas
  de agarrar** também ajuda a segurar Espíritos Constritores que peguem um aliado.
- **Mizuki** — arco (`PERF.`, `PROJ.`) da saliência rochosa (elevação) combina com
  **Ataques à distância concentrados** para manter foco num só alvo sem a desvantagem de
  ataques múltiplos. É o gatilho natural, mecanicamente e narrativamente, para a subtrama
  da Onda Trovejante (ver
  [`../sessoes/preparacao-sessao-03.md`](../sessoes/preparacao-sessao-03.md#2-treino-da-onda-trovejante-mizuki--karasu-daoshi)) —
  bater o gatilho do feitiço logo depois de acertar um tiro concentrado, na saliência.
- **Manami Aramaki** (se vier) — ficha ainda incompleta (sem arma registrada); **Otimista**
  e **Animar** o colocam bem como suporte social/de aptidões na retaguarda, reativando
  aliados que gastaram aptidões na Malha de Atração da Fase 1.

### Notas de balanceamento

- **Cheia** (60 PV, armadura -2, Voracidade ativa) e já contando com **Raízes da
  Montanha + até 3 Espíritos Constritores** (8 PV, 1d4/rodada cada), o encontro ganha uma
  segunda fonte de pressão além do dano direto da Yamamba: PA gasto se soltando de
  agarrões. Isso deve esticar a Fase 2 pra **3 a 5 rodadas** mesmo assim — os
  constritores não aumentam o "relógio" do combate, só a variedade de decisões táticas
  (quem se solta, quem ataca o espírito, quem empurra a Yamamba pra água).
- **Depois da gaiola** (30 PV efetivos, sem armadura, sem constritores vivos), o combate
  deve fechar rápido (1-2 rodadas), dando a sensação de virada que o Daniel já buscava.
- **A poça de água** é uma "válvula de escape" tática: se o grupo perceber e empurrar a
  Yamamba pra lá, o combate fica bem mais rápido (perde a Pele da Montanha antes mesmo da
  gaiola) — tudo bem se isso acontecer, é a recompensa por jogar com o cenário.
- ⚠️ **Se o grupo estiver com só 4 jogadores** (sem o Aramaki), considere reduzir o PA dela
  de 16 para 14, o dano da Investida de 1d6 para 1d4, e o limite de Espíritos Constritores
  simultâneos de 3 para 2, para não sobrecarregar o grupo.

## Falas da Yamamba

- *"Entregue-me a criança, [protetor(a)], e eu abençoarei as colheitas e os rios de
  Okuta-kuni com fertilidade por cem anos."* — dirigida a quem estiver carregando Kinjo
  no momento (⚠️ **ajustada**: não presumir que seja o Kichiro especificamente — ver
  [`../sessoes/preparacao-sessao-03.md`](../sessoes/preparacao-sessao-03.md)).
- *"Por que protege aqueles que a temem, filha da neve? Entregue a criança humana e
  junte-se à montanha."* — dirigida a **Mizuki**, reconhecendo sua natureza yuki-onna.

## Pendências

- ⚠️ Nome próprio da Yamamba (se for dar um).
- ⚠️ Validar em mesa os números da ficha completa acima (PA 16 e dano podem precisar de
  ajuste fino no primeiro turno real de jogo).
- ⚠️ Se ela sobrevive ao encontro (foge, é derrotada, ou se redime) e o que isso significa
  para o gancho da corporeificação dos espíritos.
