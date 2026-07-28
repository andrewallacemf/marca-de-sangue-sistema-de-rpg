---
data: 2026-07-28
pessoa: bianca
ferramenta: claude-cowork
objetivo: criar um banco de ideias para os arquétipos de veículo do Colapso (Piloto, Mecânico copiloto, Invasor, Combatente) a partir de duas rodadas de brainstorming, com uma lista separada das ideias descartadas
arquivos-alterados:
  - notas-de-design/banco-de-ideias-colapso.md
  - notas-de-design/banco-de-ideias-colapso-descartadas.md
  - notas-de-design/README.md
  - cenarios/colapso/arquetipos.md
  - INDICE.md
  - PENDENCIAS.md
---

# Sessão: banco de ideias dos arquétipos de veículo (Colapso)

## Prompts dados

> "Vamos iniciar um banco de ideias para recursos do Cenário Colapso (ou incrementá-lo, se já
> existir). Quero que você use tudo o que já tem de conhecimento sobre o Colapso para propor mais
> recursos para o cenário envolvendo os arquétipos (Piloto, Mecânico Copiloto, Invasor,
> Combatente). Pode ser 30 ideias por arquétipo (10 de item, 10 de habilidades, 10 de traços,
> totalizando 120). Não precisa criar as mecânicas específicas de progressão e interação com outras
> mecânicas, apenas fornecer uma breve descrição geral de como funcionaria para eu analisar. Essas
> ideias não precisam ser exclusivas para atender um arquétipo só (...) Como estamos fazendo só um
> brainstorming, não precisa salvar nada ainda nos arquivos, vamos conversar e refinar primeiro."
> Exemplos dados pela Bianca, já incorporados: **Forçar motor** (Piloto), **Blindagem improvisada**
> (Copiloto), **Trava magnética** (Invasor), **Munição improvisada** (Combatente).

> "Eu não gostei da maioria. Primeiro, vou colocar as que acho que salvam (...) depois os motivos de
> eu ter descartado a maioria. (...) Eu descartei várias ideias porque não se encaixam no padrão do
> sistema. Por exemplo, nas habilidades, temos progressão de nível da habilidade. Várias não têm
> caminho claro para progressão, por exemplo o Cortar o freio (aqui é mais binário: ou funciona ou
> não. Como seria a progressão?). Algumas coisas também ficaram parecidos demais com outras coisas
> já existentes (exemplo: no mecânico copiloto, o traço conhece a máquina já está parecido com outro
> que recupera integridade); já existe o item 'kit de sabotagem' e aí nas sugestões tem o 'kit de
> sabotagem avançado'. Nesse caso, é melhor progredir a habilidade de sabotagem que criar um item
> quase igual mas um pouco melhor (até pretendo fazer isso em algum momento, mas será com ações mais
> importantes e core do conflito, como por exemplo, acelerar com menos PA com um motor melhor).
> Algumas coisas também não conseguem ter aplicação prática, como o corta-caminho (o mapa é definido
> antes do conflito e o jogador decide por onde ir. Não tem como mecanicamente forçar um atalho);
> tem uma do atirador que ele pode girar 360º, mas ele já pode fazer isso naturalmente; ponto cego
> força perda de linha de tiro, mas o personagem adversário pode só se reposicionar pra ganhar linha
> novamente, além de que seria difícil ter que ficar lembrando pros minions qual debuff ele tem e por
> quanto tempo dura. Pedal reforçado faz algo bem próximo do Turbo. Enfim, precisamos de mais
> variedade, menos coisas parecidas com já existentes, nas habilidades mais progressão e nos traços
> que eles sejam mais aplicáveis." Seguiu-se a curadoria item a item e seis ideias novas da Bianca
> (Ultrapassagem, Overclock do motor, Troca rápida, Fogo de supressão, Trava de direção, e o traço de
> sair do veículo sem provocar ataque de oportunidade).

> "sobre a lista anterior, adicionei o ponto cego na ideia de realizar uma manobra que permite
> desemparelhar e continuar andando pra frente. Pode considerar apenas esse efeito da habilidade.
> Sobre a lista nova, gostei de quase todas, então vou colocar abaixo só as que eu quero descartar.
> Aí você pode manter o resto no banco de ideias, junto com as que conversamos na lista anterior.
> Adicione as ideias não aprovadas numa lista de descarte (inclusive as da lista anterior), assim a
> IA consegue ler o que já foi proposto e não propor novamente se eu resolver repetir o processo de
> brainstorming; e eu também posso recuperar alguma ideia descartada caso decida."

## O que foi feito

Duas rodadas de brainstorming (120 ideias cada) foram curadas pela Bianca e o resultado virou dois
arquivos em `notas-de-design/`: **`banco-de-ideias-colapso.md`** com as ideias aprovadas
(~100 entradas, separadas por arquétipo em itens / habilidades / traços, cada habilidade com o eixo
de progressão por nível) e **`banco-de-ideias-colapso-descartadas.md`** com todas as recusadas das
duas rodadas, descritas e com o motivo quando a Bianca registrou um — o arquivo existe justamente
para a IA não repropor o que já foi analisado e para a mesa poder resgatar uma ideia depois.

Antes de escrever, foram lidos os arquivos do Colapso (arquétipos, veículos, equipamentos de
veículo, habilidades e traços do cenário, itens, armas de fogo, radiação) e as regras-base de
habilidades, traços, `PA`, ações em conflito, reação/gatilho e a lista de traços base, para que as
propostas usassem a nomenclatura vigente (m/t, `PA` do piloto, sucata comum/eletrônica/radioativa,
integridade por partes + motor, condições de veículo, cobertura do tripulante, radiômetro, as duas
moedas de exp.) e não duplicassem o que já existe. O banco também registra, no topo, os **critérios
de aceite** derivados da curadoria da Bianca, para valer nas próximas rodadas.

Nenhuma regra do jogo foi criada ou alterada: os dois arquivos são material de design, marcados
como não vigentes. Foram acrescentados ponteiros para eles no `notas-de-design/README.md` e em
`cenarios/colapso/arquetipos.md`, além das entradas no `INDICE.md` e no `PENDENCIAS.md`.

## Decisões tomadas

- **Habilidade só entra com eixo de progressão.** Efeito binário vira **traço** ou **item**. Foi o
  filtro que reprovou *Cortar o freio* e que reclassificou *Reparador veloz* (traço → habilidade),
  *Passageiro clandestino*, *Sequestro de volante*, *Fogo de cobertura* e *Ligar direto*
  (habilidade → traço).
- **Traço precisa ser passivo e aplicável**, sem duração para rastrear em minions.
- **Nada de item "versão melhorada" de item existente** (caso do *kit de sabotagem avançado*): o
  certo é progredir a habilidade. Itens que barateiam ação ficam reservados para ações **core** do
  conflito (ex.: motor melhor reduzindo o `PA` de acelerar).
- **Ponto cego foi reformulado:** a versão original (fazer o perseguidor perder a linha de tiro) foi
  descartada; a ideia mantida é a manobra que permite **desemparelhar e seguir andando para a
  frente**. O nome ficou; a versão antiga está registrada nas descartadas.
- **Sequestro de volante** deixou de ser "disputar o controle da direção" e passou a ser vantagem no
  teste para assumir a direção.
- Os eixos de progressão das ideias da 1ª rodada não foram definidos pela mesa; onde a IA sugeriu um
  valor, ele está marcado com 💡 e o campo com ⚠️ a definir.

## Pendências criadas

- **Colapso — banco de ideias dos arquétipos de veículo**: escolher o que entra no cenário e fechar
  a mecânica de cada ideia (custo de `exp.`, moeda `Jogador`/`Veículo`, `PA`, requisitos, valores por
  nível); definir os eixos marcados ⚠️; conferir as sobreposições sinalizadas (**Manutenção de arma**
  × aspecto Zeloso; **Fogo de cobertura** × aspecto Vigilante); e decidir se as ideias que tocam
  radiação, abrigo e armas de fogo ficam nos arquétipos de veículo ou migram para os papéis do ermo.
  (Linha adicionada no `PENDENCIAS.md`, seção Cenários.)

## Observações

- O `contrato/catalogo.json` **não** foi regerado: nenhuma lista de `sistema-base/listas/` ou de
  módulo de armas/proteções foi tocada — o banco é material de design.
- A 2ª rodada evitou deliberadamente repetir mecânicas já cobertas (Turbo, Drift, Atropelar, Âncora,
  Escudos, Caixa de Ferramentas/Sabotagem, Catador, Lanternagem, Mão na roda, Zeloso, Mão rápida) e
  explorou espaços ainda pouco usados: combustível, emparelhamento, pontos de orientação, categorias
  de colisão, cobertura do tripulante, durabilidade de equipamento, confiabilidade das armas de fogo,
  abrigo/descanso e reação/fadiga.
- Commit/push deixados para a Bianca (não commitado pela IA, conforme AGENTS.md).
