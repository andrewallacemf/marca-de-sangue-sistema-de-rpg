---
titulo: Proposta — Mesa debita PA + fadiga ao usar habilidade (fim do modelo de usos na mesa)
tipo: design
cenario: base
status: proposta
tags: [plataforma, mesa, batalha, habilidades, fadiga, pa]
atualizado-em: 2026-08-08
---

# Proposta — Mesa debita PA + fadiga ao usar habilidade

> Proposta estruturada em 08/08/2026, no formato da
> [proposta de Recursos do Narrador](2026-08-07-proposta-recursos-do-narrador.md).
> **Nada aqui está implementado** — e há um bloqueio de regra declarado na seção 4:
> a relação 1:1 entre `PA` e fadiga ainda não foi validada em mesa.

## 1. Problema

A reestruturação de 01/08/2026 aboliu o modelo de "usos" de habilidade: habilidade agora é
comprada uma vez, evolui por nível e **cada uso custa `PA` + a mesma quantidade de fadiga**
([05-habilidades](../sistema-base/conceitos/05-habilidades.md#custo-de-uso-pa--fadiga)),
sem contador de usos. A **ficha** da plataforma já segue a regra nova (decisão 021 de lá).
A **mesa** (gestor de batalha), não:

1. **Por baixo, a mesa ainda opera o modelo antigo de usos** — sincroniza
   `usosPorNivel`/`usosGastosPorNivel` entre ficha e combatente nos dois sentidos, com um
   round-trip com perda documentado no próprio código.
2. **Usar uma habilidade na mesa não debita nada automaticamente** — nem `PA`, nem fadiga.
   Só os 4 tipos de ataque (desarmado/leve/média/pesada) têm débito automático de `PA`
   (decisão 025 de lá). O custo da regra nova fica na mão do narrador, marcado manualmente.
3. **O card da mesa ficou no meio do caminho**: o contador "N de M usos" já saiu da
   interface (decisão 021), mas nada entrou no lugar — a lista de habilidades do
   combatente virou puramente informativa, sem custo declarado e sem ação de uso.

## 2. O que existe hoje (mapeado)

Verificado no código da plataforma
(`plataforma-rpg-marca-de-sangue`, pasta irmã) em 08/08/2026:

| Aspecto | Estado atual |
|---|---|
| Ficha (regra nova) | Já segue 01/08: o card de habilidade mostra "Custo de P.A." e "Custo de fadiga" via `custoPAEfetivo`/`custoFadigaEfetivo` (`src/lib/game-engine/formulas.ts:64–75`; campo de fadiga em branco = **1:1 com o `PA` efetivo**) — `src/components/ficha/ability-card.tsx`. `custoCard` ignora os pacotes de usos legados (`formulas.ts:54–61`, decisão 021). |
| Colunas de usos | `usosPorNivel`/`usosGastosPorNivel` em `character_habilidade` estão marcadas como "legado preservado para importar fichas antigas / não participa da regra atual" (`prisma/schema.prisma:298–299`). O envelope `.mds.json` mantém os campos, e a migração de ficha antiga deriva o nível deles (`src/lib/game-engine/mds-model.ts:81–83` e `326–349`). |
| Mesa — ida (ficha → cena) | `estadoDaFicha` ainda lê `usosPorNivel`/`usosGastosPorNivel` e monta o estado `habilidades: {nome, usos, gastos}` (`src/lib/game-engine/estado-combate.ts:137–144`). Ao entrar na batalha, `snapshotUsos` grava esses contadores no Json `combatente.habilidades` (`src/lib/game-engine/batalha.ts:195–209`; chamadas em `src/trpc/routers/batalha.ts:824` e `:909`; coluna em `schema.prisma:550`). |
| Mesa — volta (cena → ficha) | O patch da mesa aceita `habilidades` (`src/trpc/routers/batalha.ts:1487–1528`) e a escrita na ficha usa `distribuiGastosPorNivel` — **round-trip com perda documentado no próprio docstring** ("gastei 3, de quais níveis?" — `estado-combate.ts:252–282`; escrita em `routers/batalha.ts:463–482`). A mesa ainda **escreve** `usosGastosPorNivel` na ficha. |
| Card da mesa | O contador "N de M usos" **já saiu da UI** (decisão 021): `HabilidadesDaCena` virou lista informativa de nomes — "Habilidades não possuem mais contadores de usos" (`src/components/batalha/combatente-card.tsx:143–151`). Mas o card não mostra custo nem tem ação de uso, e o docstring de `distribuiGastosPorNivel` ainda descreve o card antigo ("3 de 5 usos"). |
| Usar habilidade | **Não debita `PA` nem fadiga automaticamente.** O débito automático de `PA` existe só para os 4 ataques: `ATAQUES_COM_PA = ["desarmado", "leve", "media", "pesada"]` — "o que a rolagem consegue debitar hoje" (`src/lib/game-engine/pa.ts:18–20`; `src/lib/validators/rolagem.ts:50`; decisão 025). Fadiga por uso de habilidade não tem débito em lugar nenhum. |
| Padrão de débito (decisões 025–028) | Débito **condicional no servidor, na MESMA transação da rolagem** — o `WHERE` decide o saldo, nunca o JavaScript entre duas idas: `debitaPA` usa `WHERE "paAtual" >= custo` (ficha) / `WHERE "paBase" - "paGastos" >= custo` (combatente) (`src/lib/pa-mesa.ts:23–43`; uso em `src/trpc/routers/rolagem.ts:726–756`). Munição (028) e durabilidade (026/027) seguem o mesmo desenho; nada trava por dado legado — avisa. |
| Nova rodada | Devolve `PA` e reação; "aptidões e usos FICAM — é o que só volta com descanso ou tratamento" (`routers/batalha.ts:689`) — herança direta do modelo antigo de usos. |
| Regra canônica | Uso de habilidade custa `PA` + fadiga 1:1 ([05-habilidades](../sistema-base/conceitos/05-habilidades.md#custo-de-uso-pa--fadiga)); promovida ao núcleo em 01/08/2026 **sem playtest prévio**; a relação 1:1 está listada para validação no [PENDENCIAS.md](../PENDENCIAS.md) (seção "Criadas pela reestruturação de 01/08/2026"). |

Resumo do descompasso: **ficha e mesa contam histórias diferentes**. A ficha diz "esta
habilidade custa 3 `PA` + 3 de fadiga"; a mesa carrega contadores de usos mortos (sem UI),
os preserva entre rodadas, os escreve de volta na ficha com perda — e não cobra o custo
que a regra manda cobrar.

## 3. Proposta em fases (cada uma independente, com critério)

### Fase A — Card da mesa: botão "usar habilidade" com custo declarado

- A lista informativa do card (`HabilidadesDaCena`) passa a mostrar, por habilidade, o
  custo `PA` + fadiga calculado pelas **mesmas funções da ficha**
  (`custoPAEfetivo`/`custoFadigaEfetivo`) — mesa e ficha nunca divergem no número.
- Cada habilidade ganha o botão **"Usar"**: um gesto marca o gasto de `PA` e de fadiga no
  combatente, pelo mesmo caminho de patch que a mesa já usa para edições manuais de
  `PA`/fadiga. (A garantia contra clique duplo chega na fase B — nesta fase o botão é o
  equivalente de o narrador marcar à mão, só que num gesto e com o número certo.)
- Sem saldo aparente (mesma leitura do limite derivado da fadiga que o card já usa,
  `limiteDePADoTurno`), o botão avisa.
- **Critério de pronto**: usar uma habilidade pelo card atualiza `PA` gastos e fadiga do
  combatente num gesto só, com o custo exibido antes do clique; nenhum contador de usos
  visível; ficha e card mostram o mesmo custo para a mesma habilidade.

### Fase B — Débito condicional no servidor, na MESMA transação (padrão 025–028)

- Nova mutation (ex.: `batalha.usarHabilidade`) cobra `PA` **e** fadiga no servidor, com
  UPDATE condicional — **o `WHERE` decide o saldo**, exatamente como `debitaPA`
  (`pa-mesa.ts`): dois cliques quase simultâneos não pagam duas vezes; sem saldo, recusa
  **antes** de qualquer escrita.
- Teto de fadiga = vida máxima do corpo (o que os caminhos de leitura já derivam); atingir
  o teto segue a regra de inconsciência que a mesa já aplica.
- O gasto entra no log da batalha (nome da habilidade, `PA` e fadiga cobrados) e o sino
  `ficha:<id>` avisa a ficha aberta — o mesmo circuito das decisões 025–028.
- Ponto de design a fechar na implementação: fadiga cobrada **no mesmo uso** pode mudar o
  limite de `PA` do turno (penalidade de −1 por faixa de 10) — definir a ordem canônica
  (cobrar o `PA` contra o limite de antes ou de depois da fadiga deste uso) e testá-la.
- Exceção conhecida: **magia** cobra `PA` + fadiga **ou** `PA` + `PV`, nunca os três
  ([módulo Magia](../modulos/magia/README.md#o-custo-de-uma-magia-pa--fadiga-ou-pa--pv)).
  O custo de fadiga explícito da habilidade (`custoFadiga`) já cobre o primeiro caso;
  pagamento em `PV` **fica fora do débito automático** (arbitragem manual continua).
- **Critério de pronto**: mesma bateria de testes das decisões 025–028 (concorrência,
  saldo, log, sino); o botão da fase A passa a chamar a mutation; débito parcial é
  impossível (ou cobra `PA` + fadiga juntos, ou nada).

### Fase C — Remoção da sincronização de usos (estado-combate) com migração dos dados de cena

- `EstadoCombate.habilidades` deixa de carregar `usos`/`gastos`; `snapshotUsos` para de
  copiar contadores para o Json do combatente; o patch da mesa deixa de aceitar
  `habilidades` como contadores; e a escrita de volta na ficha via
  `distribuiGastosPorNivel` (`routers/batalha.ts:463–482`) **morre** — a mesa para de
  escrever `usosGastosPorNivel`, e o round-trip com perda deixa de existir por eliminação.
- **Migração dos dados de cena**: o Json `combatente.habilidades` das batalhas existentes
  ({nome, usos, gastos}) migra para o formato novo (nome; custos derivados na leitura).
  Batalha aberta não pode quebrar — leitura defensiva do formato antigo durante a
  transição, no espírito do `normalizaUsos` atual.
- **Critério de pronto**: nenhum caminho de mesa lê ou escreve `usosPorNivel`/
  `usosGastosPorNivel`; testes do round-trip substituídos; batalha criada antes da
  migração abre e opera sem erro.

### Fase D — Limpeza do legado

- As colunas `usosPorNivel`/`usosGastosPorNivel` de `character_habilidade` **ficam** como
  importação histórica (decisão 021): importar um `.mds.json` antigo continua derivando o
  nível da habilidade a partir delas (`mds-model.ts:326–349`). **Não é drop de coluna.**
- Limpar os vestígios textuais: o docstring de `distribuiGastosPorNivel` que descreve o
  card antigo ("3 de 5 usos") sai junto com a função; o comentário "aptidões e usos
  FICAM" da nova rodada (`routers/batalha.ts:689`) perde a parte dos usos.
- **Critério de pronto**: um grep por `usosGastosPorNivel` na plataforma só encontra o
  schema, migrations antigas e o caminho de importação de ficha; DECISIONS.md ganha a
  entrada desta mudança.

## 4. A validar com o grupo/Daniel — bloqueio de regra

> ⚠️ **Esta proposta NÃO deve ser implementada antes da validação em mesa da relação
> 1:1 entre `PA` e fadiga.**

- A relação 1:1 está explicitamente marcada para validação no
  [PENDENCIAS.md](../PENDENCIAS.md) (seção "Criadas pela reestruturação de 01/08/2026",
  item "Relação 1:1 entre `PA` e fadiga por habilidade — validar"): habilidades caras em
  `PA` (4–5) agora cansam muito mais que as baratas, o que pode inviabilizar builds de
  efeito forte. A saída prevista — custo de fadiga próprio por habilidade — **já tem
  suporte na plataforma** (`custoFadiga` explícito; `custoFadigaEfetivo`,
  `formulas.ts:72–75`), então a fase A sobrevive a qualquer desfecho; mas **a fórmula que
  a fase B grava no servidor muda junto com a decisão da mesa**. Implementar antes seria
  cristalizar um número que o grupo ainda pode trocar.
- No mesmo pacote de pendências, o item 🔴 "A fadiga ficou MENOS punitiva do que era —
  validar com urgência" registra que a contrapartida da nova penalidade é justamente
  "toda habilidade gasta fadiga" — **e ninguém mediu**. O débito automático desta proposta
  é a metade da balança que falta pesar: faz sentido nascer depois (ou junto) da medição,
  não antes.
- Se o playtest mantiver o 1:1, a fase B implementa o 1:1; se adotar custos próprios,
  a fase B implementa a leitura do custo explícito. As fases C e D não dependem do número
  — dependem só de a regra "sem usos" estar confirmada, e ela já é núcleo desde 01/08.

## 5. Decisões do André × a validar

| # | Pergunta | Tipo | Status |
|---|---|---|---|
| 1 | O botão "Usar" aparece também na visão do jogador (que já edita o próprio estado) ou só para o narrador? | Produto (André) | Em aberto |
| 2 | Sem saldo: **bloquear** o uso (como o `PA` do ataque, decisão 025) ou **avisar e deixar passar** (como munição, decisão 028)? Sugestão: bloquear — é gasto de recurso próprio, o mesmo caso do ataque | Produto (André) | Em aberto |
| 3 | O uso de habilidade vira cartão próprio no log da batalha ou linha discreta? | Produto (André) | Em aberto |
| 4 | Ordem canônica `PA` × fadiga dentro da transação (a fadiga deste uso muda o limite deste turno?) | Regra (grupo) | Em aberto — fechar na fase B |
| 5 | Relação 1:1 `PA`/fadiga | Regra (grupo/Daniel, **bloqueia tudo**) | Aguardando playtest — ver seção 4 |

## 6. O que NÃO muda

- **Decisão 021 (plataforma)** — as colunas de usos permanecem como importação histórica;
  ficha antiga continua importável.
- **Decisões 025–028 (plataforma)** — o padrão de débito condicional é reutilizado, não
  reformado; ataques, munição e durabilidade seguem como estão.
- **Regra 009 / contrato** — nenhum dado de regra é transcrito: os custos vêm dos campos
  da habilidade na ficha (que nascem do catálogo).
- **Repo do sistema** — esta proposta não altera regra nenhuma; a regra
  (`05-habilidades.md`) já é núcleo. O que se move é a plataforma alcançá-la.
- **Ações ainda manuais** — guardar/sacar/atrasar/movimento continuam sem débito
  automático (escopo da decisão 025, inalterado por esta proposta).

---

## Prompt de continuidade

Para retomar este trabalho em uma sessão futura:

```
Trabalhe na plataforma (pasta irmã plataforma-rpg-marca-de-sangue). Leia antes:
- notas-de-design/2026-08-08-proposta-mesa-debita-pa-fadiga.md (este arquivo, repo do sistema)
- docs/DECISIONS.md da plataforma, decisões 021 e 025–028
- PENDENCIAS.md do repo do sistema, seção "Criadas pela reestruturação de 01/08/2026"
  (itens "Relação 1:1 entre PA e fadiga" e "A fadiga ficou MENOS punitiva")

PRÉ-CONDIÇÃO: confirme com o André se a relação 1:1 PA/fadiga foi validada em mesa.
- Se NÃO foi validada: não implemente nada; no máximo refine a proposta.
- Se foi validada COM mudança (custos próprios de fadiga): atualize a fase B desta
  proposta antes de codar (a fórmula do débito muda junto).
- Se foi validada mantendo o 1:1: implemente a fase A (botão "usar habilidade" no card
  da mesa com custo PA + fadiga via custoPAEfetivo/custoFadigaEfetivo), depois a fase B
  (mutation batalha.usarHabilidade com débito condicional no servidor — WHERE decide o
  saldo, mesma transação, padrão das decisões 025–028), depois C (remoção da
  sincronização de usos em estado-combate.ts e routers/batalha.ts, com migração do Json
  combatente.habilidades das cenas existentes) e D (limpeza dos vestígios; as colunas
  usosPorNivel/usosGastosPorNivel FICAM como importação histórica — decisão 021).
Cada fase fecha com os critérios de pronto da proposta, testes (cobertura 100%
obrigatória) e entrada nova no DECISIONS.md da plataforma. Ao terminar, atualize o
status no frontmatter deste arquivo (proposta → fase-X-concluida) e resolva as
perguntas em aberto da seção 5 com o André.
```
