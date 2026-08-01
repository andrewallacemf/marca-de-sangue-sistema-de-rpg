---
data: 2026-08-01
pessoa: daniel
ferramenta: claude-cowork
objetivo: aplicar as decisões da reunião entre Daniel e André sobre minions, maestrias de armadura,
  aspecto Vigilante e ações complexas — o que implicou promover a variante de fadiga ao núcleo e
  reformular o dano permanente
arquivos-alterados:
  - sistema-base/oponentes/00-oponentes.md
  - sistema-base/oponentes/01-criando-uma-ameaca.md
  - sistema-base/oponentes/02-nivel-de-ameaca.md
  - sistema-base/conceitos/05-habilidades.md
  - sistema-base/conceitos/08-fadiga.md
  - sistema-base/conceitos/09-descanso.md
  - sistema-base/conceitos/03-caracteristicas.md
  - sistema-base/conflitos/03-saude-e-protecao.md
  - sistema-base/progressao/01-experiencia-e-evolucao.md
  - sistema-base/listas/acoes-em-combate.md
  - sistema-base/listas/tracos-base.md
  - sistema-base/listas/protecoes-base.md
  - sistema-base/listas/habilidades-base.md
  - sistema-base/variantes/habilidades-por-fadiga/README.md
  - modulos/magia/README.md
  - modulos/magia/listas/lista-de-magias.md
  - modulos/magia/listas/lista-de-tracos.md
  - INDICE.md
  - PENDENCIAS.md
  - historico-de-versoes.md
---

# Sessão: oponentes, fadiga reestruturada e ações complexas

## Prompts dados

> Traga pra mim todas as pendências do marca de sangue em ordem de importância (impacto no sistema
> e nas regras). Quero um resumo de cada uma delas com recomendação

Entreguei a lista priorizada em 4 níveis (44 pendências). O Daniel e o André levaram o **nível 1**
para uma reunião e voltaram com a transcrição:

> Eu e André fizemos uma conversa sobre alguns desses pontos, segue a transcrição

*(gravação de 01/08/2026, 17h45 — 38 minutos, anexada à sessão)*

Respostas às perguntas de alinhamento que fiz depois de ler a transcrição (via seleção de opções):

1. Variante "habilidades por fadiga": **"Sim, promover ao núcleo."**
2. Dano permanente: **"Reformulado: reduz a vida máxima."**
3. Âncora do Nível de Ameaça: **"Por exp. total investida."**
4. Escopo: **"Tudo, incluindo as 15 ações complexas."**

## O que a reunião decidiu (e o que eu tive que levantar antes de aplicar)

A conversa fechou o pacote de minions quase inteiro, mas **três decisões implícitas** não foram
ditas em voz alta, e eu parei para confirmá-las antes de mexer em arquivo (protocolo de análise de
impacto do `AGENTS.md`):

1. **O pacote inteiro pressupõe a variante de fadiga oficializada.** A conversa fala o tempo todo em
   "usar habilidade gasta `PA` e fadiga" como se fosse a regra vigente — mas isso vivia em
   `variantes/habilidades-por-fadiga/`, marcado 🧪 e nunca testado, e a própria conversa reconhece
   ("as regras alternativas que a gente quer oficializar, mas ainda não testou"). Sem promover, o
   minion ficaria pendurado numa regra experimental.
2. **A mudança de fadiga é maior do que pareceu na mesa.** A tabela antiga chegava a **−8 `PA`**;
   a nova chega a **−5**. Levantei isso explicitamente porque na gravação a conversa estima a perda
   como pequena. O Daniel já tinha previsto que ficaria menos punitiva e considerou aceitável — o
   registro fica para quando o playtest cobrar.
3. **"Não tem mais o conceito de dano permanente"** (dito na gravação) contradizia frontalmente o
   `03-saude-e-protecao.md` **e** o módulo Magia escrito horas antes, que tem dano permanente como
   um dos três custos de ativação. Confirmado com o Daniel: é **reformulação**, não remoção.

Levantei também que a escala de dificuldade estilo D&D **não tinha onde ancorar**, porque Marca de
Sangue não tem níveis de personagem — só `exp.` investida.

## O que foi feito

### 1. Variante de fadiga promovida ao núcleo

- **`05-habilidades.md`** reescrito: habilidade comprada uma vez e evoluída por nível; **sem usos,
  sem fusão**; custo de uso = `PA` + **a mesma quantidade de fadiga** (1:1). Deixei explícito que
  ações comuns não custam fadiga — só habilidades.
- **`08-fadiga.md`** reestruturado: **fadiga máxima = total de `PV`** (60 no padrão, mas derivada do
  corpo, não fixa); **−1 `PA` a cada 10**; inconsciência ao atingir o máximo; nota do passo de 5 das
  ameaças.
- Ajustados em cascata: `09-descanso.md`, `03-caracteristicas.md` (habilidades saíram das
  "características de uso limitado"), `progressao/01` (a seção "Fundindo características" virou
  "Subindo o nível de uma habilidade"; o dilema flexibilidade × poder foi reescrito como largura ×
  profundidade) e `listas/habilidades-base.md`.
- A pasta da variante virou **arquivo histórico** (`publico: false`), com uma tabela do que mudou
  entre a proposta e o adotado — porque o promovido difere dela em três pontos.

### 2. Dano permanente reformulado

Deixou de ser um terceiro status do espaço de dano e passou a ser **redução da vida máxima do
membro**. Consequências que documentei:

- O membro **enche mais rápido** na próxima vez, e a **fadiga máxima do personagem cai junto** —
  o que dá sentido mecânico à frase "um corpo destruído cansa antes".
- "Invalidado" passou a significar **vida máxima zerada** (era "10 pontos de dano permanente").
- Ajustados: falta de tratamento, tratamento improvisado, condições de morte, e a marcação na ficha
  (o espaço é **riscado fora**, não preenchido).
- **Módulo Magia realinhado:** o terceiro tipo de custo virou **"vida máxima"**. Aproveitei para
  registrar dois efeitos que a mudança de fadiga criou nele e que ninguém tinha notado — magia agora
  cobra `PA` + fadiga (por ser habilidade) **+** o custo de ativação, ficando bem mais cara; e uma
  magia que cobra vida máxima **reduz a própria fadiga máxima do conjurador**, encurtando a carreira
  dele duas vezes.

### 3. Pacote de oponentes — `sistema-base/oponentes/`

Três arquivos novos:

- **`00-oponentes.md`** — "oponente" como guarda-chuva, as duas formas de registrar (personagem do
  narrador × ameaça), a pergunta que decide entre elas, e as **três diferenças** de uma ameaça
  (tem fadiga mas não gasta; `−1 PA` a cada 5; não usa aptidões). Insisti no ponto que o Daniel
  bateu o pé na gravação: a distinção **não é importância nem força** — chefe também é ameaça.
- **`01-criando-uma-ameaca.md`** — as sete decisões do bloco: membros (3 ou 6 para humanoides;
  livre para o resto), a **regra do dado de local** (cada membro precisa de 1+ faces de um dado
  real; 7 membros → `d8` com o tronco em 7 e 8), vida por membro, fadiga e queda, `PA` e
  deslocamento, ações vedadas, o critério **arma × habilidade** para ataques, descrição e
  comportamento. Mais a regra de ouro (o não escrito segue a regra do jogador) e um modelo de bloco.
- **`02-nivel-de-ameaca.md`** — a escala, ancorada em **`15 × N` de `exp.` investida** (15 é a
  `exp.` inicial, então `NA 1` cai exatamente sobre um grupo recém-criado). Frações ⅛/¼/½,
  definição de "desafio moderado", orçamento de encontro e a comparação entre muitas ameaças fracas
  e uma forte.

**Nome:** adotei **"Ameaça"**, marcado como proposta a confirmar. A gravação pediu sugestões da IA e
descartou *inimigo*, *criatura*, *minion* e *oponente*. Argumentei que a distinção real que eles
fixaram é de **formato de registro**, não de importância — o que derruba nomes como *figurante*, que
soam fracos e brigam com "chefe também é minion". *Ameaça* serve para rato e dragão e encaixa direto
em **Nível de Ameaça**.

### 4. Maestrias de armadura e Vigilante

- **Maestrias de armadura** ganharam efeito: **sem a maestria do tipo, o redutor de `PA` da peça
  dobra** (leve −1→−2, média −2→−4, pesada −3→−6), contado peça a peça. Tabela nova em
  `protecoes-base.md`.
- **Vigilante** passou a aceitar **`PROJ.`** além de `ARRE.`, destravando o arquétipo Atirador.

### 5. As 17 ações complexas

Redigi as 15 entradas vazias e criei a de **Derrubar**, que não existia. Duas regras guiaram tudo:
**técnica anula desvantagem e nunca concede vantagem** (decisão de 12/07, tomada ao escrever
Saltar), e os custos de `PA` da tabela foram respeitados sem alteração. Onde o efeito desejado seria
um bônus, virou nota para o grupo avaliar como aspecto.

## Pendências

**Resolvidas (6):** minions · ações complexas sem descrição · maestrias de armadura sem efeito ·
Vigilante × arcos · variante de fadiga (promover ou descartar) · divergência do descanso sobre
"usos" (resolvida por eliminação — não há mais usos).

**Criadas (10)**, das quais destaco as três de risco:

- 🔴 **A fadiga ficou menos punitiva** (teto de −8 para −5 `PA`) e ninguém mediu se o gasto por
  habilidade compensa. É o número mais arriscado da mudança.
- **Magia ficou bem mais cara** e todos os custos das 8 magias-exemplo foram calibrados antes disso.
- **Ficha e PDFs desatualizados**: barra de fadiga de 50 → 60, os espaços de "usos de habilidade"
  deixam de existir, e o dano permanente vira espaço riscado.

As demais: confirmar o nome "ameaça"; presets fraco/médio/forte; validar a escala de Nível de
Ameaça (falta saber quanta `exp.` um grupo acumula por sessão); reconciliar os blocos do kit de
playtest; revisar as 17 ações complexas; validar a relação 1:1 `PA`/fadiga; e reconferir o traço
*Fôlego de ferro*.

## Observações

Esta é **a maior mudança de regra do projeto até aqui** — mexeu no motor (habilidades, fadiga,
dano) e não só em conteúdo. Vale dizer com todas as letras: **a variante foi promovida sem o
playtest que ela mesma pedia**, e boa parte do que está escrito aqui são números que nunca viram
mesa. O `PENDENCIAS.md` reflete isso.

Commitei, mas **não dei push** (não consigo — ver a seção "Ambiente das IAs" do `AGENTS.md`).
Falta o clique em *Push origin* no GitHub Desktop e avisar o grupo — em especial o André, que
participou das decisões, e o Gabriel, cujo conteúdo do Colapso é afetado pela mudança de fadiga.
