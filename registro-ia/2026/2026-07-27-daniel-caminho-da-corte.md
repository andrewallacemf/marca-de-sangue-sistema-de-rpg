---
data: 2026-07-27
pessoa: daniel
ferramenta: claude-cowork
objetivo: curar o sexto e último dō do Mukashi (Caminho da Corte — O Eminente da Corte),
  fechando o esqueleto de arquétipos
arquivos-alterados:
  - cenarios/mukashi/arquetipos-do.md
  - cenarios/mukashi/mecanicas-unicas/habilidades-do.md
  - cenarios/mukashi/mecanicas-unicas/magia.md
  - modulos/armas-brancas/README.md
  - contrato/catalogo.json
  - cenarios/mukashi/README.md
  - PENDENCIAS.md
---

# Sessão: Caminho da Corte — O Eminente da Corte

## Prompts dados

> [colou uma proposta completa do Caminho da Corte: cortesão/kugyō da corte de Kyoto/Myoko,
> poder suave, legitimidade ancestral, maestria cultural; Prioridade 1 Social, Prioridade 2
> Mental; técnicas Negociar/Persuadir/Ponderar/Performar; aspectos Apoiador e Firme; habilidades
> sociais (Comandar, Desorientar, Revigorar, Animar, todas "nível 5") e mentais (Analisar
> Fraquezas nível 6, Confundir Inimigo nível 4, Intimidação Generalizada nível 4); nota de que
> "ignoramos a limitação de EXP"; equipamento (tomo, roupas de seda, leque de guerra/uchiwa,
> kit de caligrafia); pedido explícito para tomar liberdade de sugerir e perguntar o necessário]

## O que foi feito

A base bateu perfeito: Líder genérico já é Social primário/Mental secundário, exatamente a
prioridade que o Daniel pediu — nenhuma adaptação necessária aí, ao contrário dos outros dō.

Conferi cada peça da proposta contra a regra real antes de montar o bloco, e encontrei alguns
furos genuínos:

- **Aspecto "Firme" não bate com a ideia.** A regra real de Firme é "usar armas pesadas com uma
  mão, com −3 de dano" — nada a ver com "compostura mental". Não existe hoje nenhum aspecto pra
  "resistir à pressão social". Perguntei ao Daniel como resolver (simplificar o texto, remover a
  sugestão, ou criar um traço novo) — ele escolheu criar um traço novo. Criei **Máscara
  Impassível**, traço de caminho exclusivo do Caminho da Corte (Aspecto, `5 exp.` 💡), que ignora
  Desvantagem de efeitos de intimidação/humilhação/manipulação social — espelho direto da
  Resolução em Sete Sopros do Bushidō (mesma ideia, mas pra pressão social em vez de mental).
- **"Desorientar" é single-target, não multi.** A proposta dizia "faz oponentes perderem até 10
  PA" (plural) — na regra real é "contra um oponente", só o teto de dano (10 PA no nível 5) bate.
  Documentei a correção no bloco do dō.
- **"PA social imune a redutor de armadura" não existe.** PA é um recurso único no sistema, sem
  distinção por tipo de teste — não há essa exceção pra ações sociais. Documentei a correção;
  na prática pouco importa, já que o build sugerido usa roupas, não armadura pesada.
- **A frase "ignoramos a limitação de EXP"** virou, no texto final, uma lista de sugestões mais
  ampla (4 técnicas, 7 habilidades) em vez de uma mecânica de desconto — o cortesão ainda compra
  tudo com exp. normalmente. Deixei uma nota perguntando se a intenção era outra (ex.: desconto
  de exp. específico do caminho).

Do lado positivo, a maior parte da proposta bateu exatamente com a regra real, incluindo números
que o Daniel acertou de cabeça: Analisar Fraquezas realmente vai até nível 6 (não 5, como as
outras), Confundir Inimigo e Intimidação Generalizada realmente têm 4 níveis com efeito em área.

**Achado importante, fora do escopo do dō em si**: ao conferir a Intimidação Generalizada
(habilidade Mental do sistema-base — "atrasa a iniciativa de vários oponentes"), percebi que ela
já faz exatamente o que eu tinha descrito, mais cedo nesta mesma sessão, como "precedente novo"
do feitiço Grito do Tengu (Onmyōdō/feitiços gerais). Eu estava errado: não pesquisei essa
habilidade específica na hora de avaliar o Grito do Tengu. Corrigi o texto de `magia.md` (tirei o
aviso de "precedente novo" e linkei a Intimidação Generalizada como precedente real) e removi a
linha correspondente de `PENDENCIAS.md` — não é mais uma pendência, porque não é mecânica nova.

Também limpei uma pendência velha e desatualizada: a linha "Animar exige aliado inconsciente"
(de 11/07) não bate com o texto atual de Animar (só exige aliado adjacente, sem menção a
inconsciente) — deve ter sido corrigida em alguma revisão anterior sem que a linha de
`PENDENCIAS.md` fosse removida junto. Removi.

Fechei o Leque de Guerra apontando pra linha "Bastão médio, Martelo Médio" (média, versátil) —
sem criar linha nova, já que não tem peso/alcance diferente do bastão médio existente. Rodei o
exportador do contrato depois da mudança no módulo; catálogo limpo (só os avisos pré-existentes,
não relacionados).

## Decisões tomadas

- Caminho da Corte: Base Líder, Primário Social, Secundário Mental.
- Máscara Impassível criada como traço de caminho novo (Aspecto, `5 exp.` 💡), no lugar do
  "Firme" mal encaixado da proposta original.
- Leque de Guerra (tessen/gunsen) aponta pra linha "Bastão médio, Martelo Médio", sem linha
  própria.
- Correção: Grito do Tengu não é mecânica nova — Intimidação Generalizada já cobre atraso de
  iniciativa forçado em múltiplos oponentes. Pendência correspondente removida.
- Pendência stale do Animar (exigir aliado inconsciente) removida — não reflete a regra atual.

## Pendências criadas

- Custo de `5 exp.` da Máscara Impassível — 💡 proposta, a validar no playtest (linha nova em
  `PENDENCIAS.md`).
- Preço/alcance do Leque de Guerra entra na mesma pendência já aberta de validação do arsenal
  japonês (Wakizashi/Kodachi, Bô, Sasumata).

## Observações

**Todos os 6 dō do Mukashi estão completos** (Bushidō, Shinobi-dō, Yamabushi, Kyūdō, Onmyōdō,
Caminho da Corte). O que resta do cenário está listado em `PENDENCIAS.md`: bestiário de yokai,
clãs/feudos/tribos de fronteira, itens únicos, resto das habilidades mágicas, e curadoria de
quais dō são mais centrais pra campanha de 1º/ago.
