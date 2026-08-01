---
data: 2026-08-01
pessoa: daniel
ferramenta: claude-cowork
objetivo: estruturar um módulo de Magia reutilizável (sistema-base/módulos), generalizando o
  sistema de magia já existente no Mukashi (KI)
arquivos-alterados:
  - modulos/magia/README.md
  - modulos/magia/listas/lista-de-magias.md
  - modulos/magia/listas/lista-de-tracos.md
  - modulos/README.md
  - INDICE.md
  - PENDENCIAS.md
  - notas-de-design/variantes-pendentes.md
  - sistema-base/conceitos/02-atributos.md
  - cenarios/mukashi/mecanicas-unicas/ki.md
  - cenarios/mukashi/mecanicas-unicas/magia.md
  - cenarios/mukashi/mecanicas-unicas/habilidades-do.md
  - cenarios/mukashi/arquetipos-do.md
  - cenarios/mukashi/criaturas/racas-jogaveis.md
  - cenarios/mukashi/00-visao-geral.md
  - cenarios/mukashi/README.md
  - cenarios/mukashi/lore/03-panteao-kami.md
---

# Sessão: módulo de Magia

## Prompts dados

> Quero estruturar o módulo de Magias no sistema marca de sangue. [...] No sistema marca de
> sangue as magias são uma espécie de habilidades mais fortes que dobram as leis da realidade
> [...]. Para executar uma magia o conjurador tem que gastar pontos de vida. [...] Ao usar uma
> magia, esse custo é aplicado e assim como outros danos também é aplicado o custo de fadiga. [...]
> As magias podem evoluir [...] o nível é o que pode reduzir o custo daquela magia [...]. Nós
> temos que avaliar também se a progressão das magias vai aumentar os efeitos ou se a gente vai
> fixar o efeito [...] e fazer a progressão com base no custo. [...] Pra mim é uma amálgama das
> duas coisas [...] vai variar de caso a caso. [...] Primeiro analise a ideia à luz das mecânicas
> atuais do sistema e faça perguntas [...]. Depois você vai escrever esse módulo pra mim e criar
> uma lista de magias [...] Também deve criar a lista de traços do módulo de magia [...] Esse
> módulo também adiciona uma aptidão nova "Aptidão Mágica" e um tipo de Experiência nova,
> "Experiência de magia". Tanto a experiência de magia quanto a aptidão mágica são mecânicas
> opcionais e o módulo deve funcionar tanto com elas aplicadas quanto sem [...].

Respostas às perguntas de alinhamento (via seleção de opções):

1. Relação módulo × Mukashi (KI): **"Mukashi passa a usar o módulo [...] no fim, o sistema de KI
   deve ser apenas um 'encapamento narrativo e visual' do módulo de magia."**
2. Aptidão Mágica substitui ou soma: **"Substitui, além disso, deve ter magia pra todos os
   atributos, não apenas Mental e Social."**
3. Experiência de Magia exclusiva ou bônus: **"Exclusiva."**
4. Custo permanente no nível 1, proposital?: **"Sim, proposital, pode ter magias que custam só
   fadiga, magias que custam dano (curável) e dano permanente."**

## O que foi feito

Antes de propor qualquer coisa, li as regras que a magia precisa respeitar: habilidades
(`05-habilidades.md`), aptidões (`04-aptidoes.md`), fadiga (`08-fadiga.md`), saúde/dano
(`03-saude-e-protecao.md`), atributos (`02-atributos.md`), traços (`06-tracos.md`), experiência
(`01-experiencia-e-evolucao.md`), a estrutura de módulos (`modulos/README.md`) e o sistema de
magia já existente no Mukashi (`ki.md`, `magia.md`, `habilidades-do.md`). Três achados
importantes guiaram o desenho:

1. O termo oficial do livro é **pontos de vida (`PV`)**, não "pontos de saúde" (usado de forma
   imprecisa no `magia.md` do Mukashi) — o módulo novo usa `PV` corretamente.
2. **Fadiga por dano já é automática** (qualquer dano gera 1 fadiga/ponto) — não precisei inventar
   uma regra dupla; só documentei que o custo de `PV` de uma magia segue esse caminho normal.
3. **Já existe precedente de custo de ativação caindo por nível** — a Resolução em Sete Sopros
   (Bushidō) reduz `PA` de `3→2→1` por nível. Isso valida a ideia do Daniel de custo caindo com o
   nível: é o mesmo padrão, aplicado a `PV`/fadiga em vez de `PA`.

Identifiquei um conflito real antes de escrever: o Mukashi já tem magia funcionando, baseada num
5º atributo (`KI`) — diferente do que o Daniel estava pedindo agora (sem atributo fixo, testando
qualquer um dos 4). Parei e perguntei antes de decidir sozinho (protocolo de análise de impacto do
AGENTS.md), junto com mais três decisões de design sem resposta óbvia no sistema atual. As quatro
respostas do Daniel (acima) definiram o desenho final.

**Módulo escrito** em `modulos/magia/`, seguindo a estrutura documentada em `modulos/README.md`
(README + `listas/`):

- **`README.md`** — a mecânica central: magia = habilidade + custo de ativação extra (fadiga /
  dano curável / dano permanente — este último marca dano permanente diretamente, ignorando a
  progressão normal superficial→profundo→permanente, regra nova e explícita); atributo caso a
  caso (qualquer um dos 4); progressão em 3 modelos (efeito cresce, custo cai, os dois); Aptidão
  Mágica e Experiência de Magia documentadas como opcionais, com uma tabela das 4 combinações
  possíveis (nenhuma / só uma / a outra / as duas); guia de design pra criar magias novas; nota de
  compatibilidade com cenários de 5º atributo (aponta pra pendência de migração do Mukashi).
- **`listas/lista-de-magias.md`** — 8 magias-exemplo, 2 por atributo, cobrindo os 3 tipos de custo
  de ativação e os 2 modelos de progressão. Destaque: **Pacto da Última Gota** (`Físico`) começa
  custando `4` de dano permanente no nível 1 e termina em dano profundo no nível 5 — é a
  implementação literal do exemplo que o Daniel deu no prompt original.
- **`listas/lista-de-tracos.md`** — 4 traços (1 técnica, 1 maestria, 2 aspectos), incluindo um
  desenhado especificamente pra mitigar o risco do tier de dano permanente (Pele que Não Esquece).

**Registrei o módulo** em `modulos/README.md` (tabela de módulos existentes), `INDICE.md` (entrada
nova de "Magia (módulo)", "Aptidão Mágica", "Experiência de Magia", "Custo de ativação (magia)",
mais menções cruzadas em Aptidão/Fadiga/Atributo/Experiência), `PENDENCIAS.md` (custos a validar
no playtest + a pendência de migração do Mukashi) e `notas-de-design/variantes-pendentes.md`
(marquei o item 4, "Custo da magia", como decidido/generalizado pelo módulo).

## Decisões tomadas (módulo)

- Módulo de magia é genérico (qualquer um dos 4 atributos base), não usa um 5º atributo.
- Aptidão Mágica **substitui** a aptidão do atributo declarado (não soma) quando ativa.
- Experiência de Magia é **exclusiva** — não compra nem é comprada por características fora de
  magia.
- Custo de ativação em dano permanente é proposital e faz parte do módulo desde o início (não é
  caso excepcional a evitar).

## Parte 2 — migração do Mukashi pro módulo (mesmo dia, continuação)

Antes de mexer no Mukashi, mapeei o impacto (protocolo de análise de impacto do AGENTS.md) e
apresentei ao Daniel: `KI` aparecia em **10 arquivos** — `ki.md`, `magia.md` (8 feitiços),
`arquetipos-do.md` (Onmyōdō e Yamabushi, ambos com "Secundário: KI"), `habilidades-do.md` (3
magias de caminho do Onmyōdō), `criaturas/racas-jogaveis.md` (bônus/malefício de Tanuki/Oni),
`00-visao-geral.md`, `README.md`, `lore/03-panteao-kami.md`, e as fichas de campanha em
`Cenário-Yokai-Taiji/` (fora do escopo — conteúdo de mesa, não de sistema). Perguntei se o Daniel
quer que eu já proponha a resolução de tudo isso ou se fechamos a sessão ali. Resposta: **"Pode
propor resoluções pra tudo que você identificou."**

Implementei a migração completa:

- **`ki.md`** reescrito do zero: de "quinto atributo" para "nome/sabor da magia" — mecanicamente
  aponta pro módulo. A antiga pendência "quanto KI um personagem começa, como se compra" **some**,
  porque KI vira a Aptidão de KI (= Aptidão Mágica do módulo), que já tem fórmula de preço
  definida.
- **`magia.md`**: as 8 magias (5 gerais + 3 de caminho, essas em `habilidades-do.md`) ganharam
  atributo de teste (eram todas `KI`). Critério: onde já existia comparação explícita com uma
  habilidade do sistema-base (Grito do Tengu ↔ Intimidação generalizada, Os Nove Selos ↔
  Atordoar), mantive coerência — Nove Selos foi pro `Físico` (mesma família do Atordoar). As
  demais, decidi por afinidade temática e para cobrir os 4 atributos, como o Daniel pediu:
  Kamaitachi e Nurikabe → `Ágil`; Fogo de Akiba → `Físico`; Grito do Tengu → `Social`; as 3 do
  Onmyōdō → `Mental` (bate com o primário do caminho). **Marquei essa atribuição como proposta a
  validar** (📝, tanto no `magia.md` quanto em `PENDENCIAS.md`) — é uma escolha de sabor que não
  tem resposta "certa" no sistema, o Daniel pode querer trocar qualquer uma.
- **`arquetipos-do.md`**: Onmyōdō (Secundário `KI` → `Social`, evita repetir o primário `Mental`;
  também bate com o `Onmyō-ryō` ser um cargo de corte) e Yamabushi (Secundário `KI` → `Mental`,
  mantém o espírito de disciplina/resistência do caminho) — também marcado como proposta.
- **`criaturas/racas-jogaveis.md`**: bônus de Tanuki (`+1 aptidão de KI` → `+1 Aptidão de KI`,
  mesma coisa, só formalizando o nome), malefício de Oni (`desvantagem em testes de KI` →
  `desvantagem em testes de magia`, cobrindo qualquer atributo agora), e a Falsa Metamorfose
  (testava KI, sem atributo alternativo óbvio) → `Ágil`.
- Ajustes leves de texto em `00-visao-geral.md`, `README.md` e `lore/03-panteao-kami.md` (KI
  descrito como energia/sabor, não mais "o quinto atributo").
- **`sistema-base/conceitos/02-atributos.md`**: o núcleo citava o Mukashi/KI como exemplo do
  "quinto atributo" — como deixou de ser verdade, troquei o exemplo fixo por uma nota explicando
  que o recurso de quinto atributo continua válido para quem quiser, só não é mais o caso do
  Mukashi.

## Pendências (atualizadas)

- Custos de `PA`/ativação/`exp.` das magias — seguem 📝 proposta a validar no playtest (sem
  mudança).
- **Nova**: a atribuição de atributo por magia/traço (Kamaitachi=Ágil etc.) e os dois secundários
  trocados (Onmyōdō=Social, Yamabushi=Mental) são proposta da IA — pedir confirmação do Daniel ou
  do grupo antes do próximo playtest.
- Sinalizei que as regras de ganho da Experiência de Magia podem servir de modelo pronto pra
  resolver a pendência antiga da "Experiência de Veículos" do Colapso (sem mudança).

## Observações

Não commitei nem dei push. A migração terminou o ciclo do módulo: ele agora tem um consumidor real
(Mukashi), o que ajuda a validar se a estrutura genérica realmente serve pra outros cenários no
futuro.
