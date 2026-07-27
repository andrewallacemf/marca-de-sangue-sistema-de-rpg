---
data: 2026-07-27
pessoa: daniel
ferramenta: claude-cowork
objetivo: curar o quinto dō completo do Mukashi (Onmyōdō — Caminho do Yin-Yang), redigir as
  primeiras habilidades mágicas do cenário e revisar um brainstorm de feitiços de yokai
arquivos-alterados:
  - cenarios/mukashi/arquetipos-do.md
  - cenarios/mukashi/mecanicas-unicas/habilidades-do.md
  - cenarios/mukashi/mecanicas-unicas/magia.md
  - cenarios/mukashi/README.md
  - PENDENCIAS.md
---

# Sessão: Onmyōdō — Caminho do Yin-Yang

## Prompts dados

> [colou uma proposta completa do Onmyōdō: místico intelectual/burocrata do Onmyō-ryō; foco de
> atributos Mental (primordial) + KI; traços Técnica em Investigar/Observar, Técnica em Ponderar,
> Apoiador (Aspecto); habilidades Invocação de Shikigami (KI/Mental), Encantamento de Selamento
> (Hifu), Divinação de Direções e Datas (Hidori/Tenmon), Analisar Fraquezas, Confundir Inimigo]

## O que foi feito

A proposta bateu quase perfeitamente com o arquétipo genérico **Estrategista** (Mental/Ágil):
as técnicas Investigar/Observar e Ponderar são exatamente as sugestões padrão do Estrategista, e
duas das cinco habilidades citadas (Analisar fraquezas, Confundir inimigo) também já são
sugestões do Estrategista genérico. Montei o bloco como Base Estrategista, Primário Mental,
Secundário **KI** (troca do Ágil padrão pelo KI, seguindo a mesma regra que os outros dō
místicos já usam) — sem precisar de "sem genérico único" como o Yamabushi.

Duas decisões de composição, registradas mas não perguntadas (mesmo padrão usado no
"Quebrar guarda → Desarmar pesado" do Bushidō):

- O Aspecto sugerido pelo Daniel foi **Apoiador**, não o "Alerta" do Estrategista genérico —
  mantive Apoiador (é uma troca de sabor, não um erro; Apoiador já existe pronto no sistema-base).
- A habilidade "Criar armadilha" do Estrategista genérico foi trocada pelas três habilidades
  místicas novas — sem apelo de armadilha física num caminho de adivinhação/selamento.

As três habilidades novas (Invocação de Shikigami, Encantamento de Selamento, Divinação de
Direções e Datas) não existiam no sistema — escrevi as três do zero em `habilidades-do.md`,
seguindo o formato já usado pro Bushidō (Atributo/Custo de PA/Custo de compra/Descrição/
Requisitos/Progressão), com um campo a mais: **custo de saúde**, porque são as primeiras
habilidades a se encaixarem na regra de "feitiço" fechada em `magia.md` (atributo KI + custo de
PA + custo em pontos de vida). O Daniel não deu números nessa proposta (só efeitos) — propus
custos de PA/saúde/exp. calibrados contra habilidades Mentais fortes já existentes (Auto
cura/Recompor, 4 PA / 3-4 exp.), todos marcados 💡 a validar.

Tratei as três como **habilidades de caminho** (exclusivas do Onmyōdō, ≥ 2 habilidades do
caminho como pré-requisito) em vez de habilidades soltas — é a leitura mais fiel ao que
`magia.md` já previa ("como habilidades de caminho de um dō místico"), mas registrei isso como
uma escolha minha, não uma confirmação do Daniel.

Na "Invocação de Shikigami", a proposta original incluía "servir de guarda-costas" — isso
exigiria dar ao shikigami estatísticas de combate, e o sistema **não tem esse pacote fechado**
(pendência "Minions — tratamento único", já aberta desde 19/07, reincidente nos playtests 1 e 2).
Não inventei stats de minion pra resolver isso: a habilidade, como está, cobre só tarefas/
observação/mensageiro (uma extensão de Investigar/Observar à distância); a parte de combate fica
com uma observação explícita de que depende da pendência de Minions, e cruzei essa dependência
de volta em `PENDENCIAS.md`.

Depois de fechado o bloco, atualizei `magia.md` (a "lista de habilidades mágicas" deixa de estar
vazia — tem as 3 primeiras), `PENDENCIAS.md` (2 linhas: a de custo da magia e a de Minions) e os
trackers de progresso (`arquetipos-do.md` intro + `README.md` do Mukashi) pra refletir que só o
Caminho da Corte ainda falta.

## Decisões tomadas

- Onmyōdō usa Base Estrategista, Primário Mental, Secundário KI.
- Aspecto Apoiador no lugar do Alerta padrão do Estrategista (troca de sabor).
- As 3 habilidades místicas novas substituem "Criar armadilha" e viram habilidades de caminho
  exclusivas do Onmyōdō (≥ 2 habilidades do caminho).
- Invocação de Shikigami cobre tarefas/observação/mensageiro; capacidade de combate (guarda-costas)
  fica pendente até o pacote de Minion ser fechado.
- Custos de PA/saúde/exp. das 3 habilidades novas: proposta da IA (Daniel não deu números),
  calibrados contra Auto cura/Recompor.

## Pendências criadas

- Nenhuma pendência nova de fato — apenas cruzei a dependência da Invocação de Shikigami com a
  pendência já existente de "Minions — tratamento único" (linha atualizada, não criada) e ajustei
  a linha de "custo da magia" pra refletir que as 3 primeiras habilidades já existem, mas os
  números ainda são 💡 a validar.

## Parte 2: brainstorm de feitiços de yokai (revisão + formalização)

O Daniel colou um brainstorm de 7 habilidades mágicas + 3 conceitos de transmutação, baseados em
folclore de yokai (kamaitachi, kitsune-bi, inugami, nurikabe, tengu, kuji-in, henge-jutsu,
ongyō-hō, tonkō-jutsu), pedindo verificação contra o sistema antes de formalizar. Cruzei cada um
contra as regras existentes:

- **Sopro do Kamaitachi:** dano à distância sem arma equipada (categoria nova, mas sem conflito)
  e "ignora redutor de armadura leve" — isso **não tinha nenhum precedente** no sistema (nenhuma
  propriedade ignora redução de dano, só desvantagem). Flagueei; o Daniel confirmou manter e
  subir de 3 para 4 exp.
- **Fogo de Akiba:** dano contínuo já é categoria prevista no guia de design (`05-habilidades.md`,
  4-5 PA) — sem conflito. Faltava o teste de ativação; o Daniel especificou KI vs Ágil.
- **Maldição de Inugami:** retirar **aptidões** do oponente não tem nenhum precedente (a única
  habilidade parecida, Atordoar, retira `PA`, não aptidões — aptidões são o recurso de
  rerrolagem do próprio jogador). Flagueei como categoria de efeito genuinamente nova; o Daniel
  decidiu deixar de lado por enquanto.
- **Muralha de Nurikabe:** sem conflito, reaproveita bem a mecânica de Cobertura já existente.
- **Grito do Tengu:** não existe status "Amedrontado" (o sistema usa Desvantagem com sabor
  narrativo) e "atrasar o turno de um inimigo" hoje só existe como escolha voluntária do próprio
  personagem. Flagueei os dois pontos; o Daniel pediu pra manter o atraso de turno (mecânica
  nova, documentada como tal).
- **Arte da Ocultação (Tonkō-jutsu):** duplicava o módulo de Furtividade (que já resolve
  invisibilidade/esconder-se). Sugeri reaproveitar em vez de duplicar; o Daniel preferiu
  descartar de vez.
- **Os Nove Selos (Kuji-in):** reaproveita bem a lógica do Atordoar (retirar `PA`), só que em
  área e por 1 turno em vez de persistente — o Daniel pediu pra deixar essa diferença explícita
  no texto, o que fiz.
- **Transmutação (Henge-jutsu):** os 3 conceitos (disfarce, transformar objetos, invisibilidade)
  ficaram só como ideia — não formalizei stats ainda, e o de invisibilidade tem a mesma
  sobreposição com Furtividade do item descartado acima.

Formalizei os 5 aprovados (Kamaitachi, Fogo de Akiba, Nurikabe, Grito do Tengu, Nove Selos) em
`magia.md`, como **feitiços gerais sem vínculo a um caminho** — o Daniel confirmou que é uma
lista solta por enquanto ("podemos atrelar a caminhos específicos no futuro, se for pertinente").
Cada um ganhou o campo de custo de saúde que a proposta original não tinha (não faziam parte do
brainstorm original, que não conhecia a regra de "feitiço" do Mukashi) — usei uma heurística
simples (`4 PA` → `2` de saúde, `5 PA` → `3`) pra manter consistência, deixada explícita no
arquivo pra o Daniel usar em feitiços futuros também.

## Decisões tomadas (parte 2)

- Sopro do Kamaitachi mantém "ignora redutor de armadura leve" (novo precedente aprovado) e sobe
  para `4 exp.`.
- Fogo de Akiba usa teste de KI (conjurador) contra Ágil (alvo) pra acertar.
- Maldição de Inugami adiada — não vira habilidade agora.
- Grito do Tengu mantém o atraso de iniciativa forçado (novo precedente, documentado como tal).
- Arte da Ocultação descartada.
- Os Nove Selos: diferença de Atordoar (área + 1 turno vs single-target + persistente) documentada
  explicitamente no texto.
- Os 5 feitiços aprovados formalizados como lista geral solta em `magia.md`, não em
  `habilidades-do.md` (que é só pra habilidades exclusivas de caminho).

## Pendências criadas (parte 2)

- 2 linhas novas em `PENDENCIAS.md`: o precedente de "perfuração de armadura" do Kamaitachi, e o
  precedente de "atraso de iniciativa forçado" do Grito do Tengu — ambos aprovados pelo Daniel
  pra esses feitiços específicos, mas registrados como mecânica nova pro grupo ter ciência.
- 1 linha nova: Maldição de Inugami engavetada, com a razão (categoria de dreno de aptidão sem
  precedente) e as duas alternativas que reaproveitariam mecânica existente, caso o Daniel queira
  retomar.

## Parte 3: remoção da regra de desvantagem por trocar de arma

O Daniel pediu, no meio da sessão, pra retirar do sistema a regra de "+1d10 de desvantagem
acumulativa ao trocar de arma após o primeiro ataque" (`conflitos/02-acoes-em-conflito.md`,
marcada 💡 proposta, nunca chegou a ✅ decidida). Antes de remover, mapeei onde ela era usada —
achei uma dependência real: o traço **Iaijutsu** (Bushidō), criado ainda nesta sessão, tinha
metade do seu efeito baseado em *ignorar* exatamente essa desvantagem. Removendo a regra geral,
essa cláusula do Iaijutsu fica sem o que ignorar.

Levei a dependência ao Daniel antes de mexer (pergunta com 3 opções: simplificar o Iaijutsu,
manter o custo e só ajustar o texto, ou marcar como pendência). Ele escolheu **marcar como
pendência** — não resolver agora. Então: removi a regra do sistema-base (com nota de rodapé
explicando a remoção e apontando pra pendência), ajustei o texto do Iaijutsu nos dois arquivos
(`habilidades-do.md` e `arquetipos-do.md`) pra não descrever mais um efeito que não existe mais,
e criei uma linha nova em `PENDENCIAS.md` com as três saídas possíveis (manter `5 exp.` só pelo
saque grátis / baixar o custo / dar outro efeito ao traço) pro grupo decidir com calma.

Também tirei a menção a "trocar de arma" do resumo de `02-acoes-em-conflito` no `INDICE.md`
(apontava pra um trecho que não existe mais).

## Decisões tomadas (parte 3)

- Regra de desvantagem por trocar de arma: **removida** do sistema-base.
- Iaijutsu: mantido como está (saque grátis), mas com pendência aberta sobre o custo de `5 exp.`
  e o efeito que faltou — não resolvido nesta sessão, a pedido do Daniel.

## Pendências criadas (parte 3)

- Nova linha em `PENDENCIAS.md`: revisão do Iaijutsu (custo/efeito) após a remoção da regra de
  desvantagem de troca de arma.

## Parte 4: correção de formatação (quebras de linha)

O Daniel notou quebras de linha "em locais aleatórios" nos documentos de Mukashi. Causa: os
arquivos que editei hoje (`arquetipos-do.md`, `habilidades-do.md`, `magia.md`, `arsenal.md`,
`README.md`) tinham parágrafos quebrados manualmente em várias linhas dentro do próprio texto
markdown (prática que usei ao compor os `Edit`/`Write`, sem um critério de largura fixo) — em
visualizadores que não juntam quebras de linha simples dentro de um parágrafo (bastante comuns
fora do GitHub), isso aparece como cortes no meio da frase. Reformatei os 5 arquivos pra
**um parágrafo = uma linha** (deixando o visualizador de cada um fazer o próprio wrap), o mesmo
padrão já usado no `sistema-base/`. Escrevi um script Python que preserva frontmatter, tabelas,
blocos de código, citações (`>`, inclusive aninhadas dentro de listas) e itens de lista —
juntando só o texto corrido. Validado por dois métodos: diff visual de um arquivo antes de
aplicar nos demais, e comparação de "bag of words" antes/depois nos 5 arquivos (as únicas
diferenças foram marcadores `>` redundantes de citações que ocupavam várias linhas — nenhuma
palavra de conteúdo foi perdida).

Inicialmente deixei de fora o resto do Mukashi (lore, raças, locais), avaliando errado que o wrap
de largura fixa da importação do Notion era "consistente" e por isso não seria o mesmo problema.
O Daniel apontou que `01-mundo-de-yamato.md` também estava com quebras estranhas — correção:
qualquer parágrafo com quebra de linha manual no meio quebra da mesma forma em visualizadores que
não juntam linha simples num só parágrafo, seja o wrap consistente ou não. Apliquei o mesmo
script nos 12 arquivos restantes de `cenarios/mukashi/` (`00-visao-geral.md`, `criaturas/`,
`itens/`, `locais/`, `lore/` inteiro, `mecanicas-unicas/ki.md`), com a mesma verificação de
integridade (bag of words) — só marcadores `>` redundantes de citações somem, nenhum conteúdo.

Também notei, via `git status`, que `AGENTS.md`, `.obsidian/core-plugins.json`,
`cenarios/gaeria/README.md` e alguns arquivos de Mukashi/Colapso apareciam e desapareciam da
lista de modificados entre uma checagem e outra, sem eu ter tocado neles — sugere que algo local
(o Obsidian aberto no vault, possivelmente) está reescrevendo arquivos enquanto a sessão roda.
Não mexi nisso; vale o Daniel conferir se o Obsidian tem algum plugin de auto-formatação ativo
antes de comitar, já que isso pode reintroduzir o mesmo problema de quebra de linha depois.

## Observações

Falta agora só o **Caminho da Corte** para fechar todos os dō do esqueleto. Os feitiços formalizados
ainda têm custos 💡 propostos (a validar no playtest) — a regra de custo em si (pontos de saúde)
já está fechada desde a parte 1 desta sessão. O Iaijutsu (traço do Bushidō) ficou com pendência
aberta após a remoção da regra de troca de arma (parte 3). Formatação dos 5 arquivos editados hoje
corrigida na parte 4 (parágrafo único por linha).
