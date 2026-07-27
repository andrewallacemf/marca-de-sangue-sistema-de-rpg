---
data: 2026-07-25
pessoa: andre
ferramenta: claude-code
objetivo: v2 da plataforma — fase 1, gestor de batalha (tabela de combate do narrador)
arquivos-alterados:
  - ficha/src/lib/ficha.ts
  - notas-de-design/pendencias-ficha-plataforma.md
  - registro-ia/2026/2026-07-25-andre-v2-gestor-de-batalha.md
---

# Sessão: v2 fase 1 — gestor de batalha

## Prompts dados

> Pode começar

(Início da v2 da plataforma, na sequência da rodada 2 da ficha. Decisões do André na
sessão: campanhas entrarão com **convite por código** (fase 2); inimigos = **minions por
preset + elite com ficha completa**; **gestor de batalha primeiro**, mirando a campanha
do Daniel em 1º/ago.)

## O que foi feito (neste repo)

1. **`ficha/src/lib/ficha.ts`**: refactor de sincronização — `aplicarDano` passou a usar
   o novo núcleo `aplicarDanoMembro` (1 ponto num membro, com a conversão em permanente),
   espelhando o port da plataforma, que agora compartilha esse núcleo entre a ficha e o
   gestor de batalha. **Comportamento idêntico** (build ok).
2. **`notas-de-design/pendencias-ficha-plataforma.md` §5**: itens do gestor de batalha
   marcados como feitos na plataforma (25/07), com as ressalvas de proposta de playtest;
   iterações futuras anotadas.

## O que foi feito (no repo da plataforma, mesma sessão)

- **Gestor de batalha** (`/batalhas`, decisão 011): modelos `Batalha` + `Combatente`
  (migration `20260725115320_gestor_de_batalha`, aplicada no Postgres local; produção
  pendente); tabela de combate com cards por combatente — saúde por membro (células v2,
  permanente só sai com confirmação), PA gastos, fadiga, guardas, reação usada,
  anotações; **minions por preset** (fraco/médio/forte, limiar 10/20/30 — ⚠️ proposta de
  playtest); **alerta 0–5 por inimigo** e **alarme do ambiente 0–5** (⚠️ módulo de
  furtividade, proposta do playtest 2); "Nova rodada" devolve PA gastos + reação.
- Combatentes de ficha entram por personagem da conta ou por **`.mds.json` carregado
  direto** — sempre como **snapshot** (a batalha não altera a ficha de origem).
- Qualidade: 74 suítes / 631 testes, cobertura global 100%, `tsc` e build limpos.

## Revisão adversarial (pós-implementação, 26/07)

Revisão multi-agente (regras, dados, UI, testes; cada achado verificado por um
cético) confirmou **26 achados; todos corrigidos**. Destaques:

1. **Alarme do ambiente com teto por batalha** (`alarmeMax`, padrão 4): o módulo de
   furtividade define o teto POR AMBIENTE (Cenário 2 = 4) — o 0–5 fixo original era
   leitura errada da fonte; a UI sinaliza "estourou — todos convergem" no teto.
2. **Rótulos do alerta alinhados aos oficiais do módulo** (tranquilo · inquieto ·
   desconfiado · em guarda · em alerta · ciente).
3. **Card deriva o limite de PA do turno pela fadiga** (o laço dano→fadiga→PA agora
   pesa no gestor como pesa na ficha).
4. Corridas de rede eliminadas: mutations em série (scope), texto persiste no blur,
   refetch pós-add mescla sem sobrescrever edições em voo.
5. Confirmações em remover combatente e virar rodada; numeração de minions pelo
   maior sufixo (sem repetir nome); clamps/tetos em todos os caminhos de escrita.
6. Testes endurecidos: escopo de dono assertado nas queries, assert negativo de que
   a batalha NUNCA escreve na Character, fiações (header, appRouter, envelope).

## Decisões tomadas

- Snapshot em vez de vínculo vivo com a ficha (propriedade das fichas preservada;
  sincronização/campanhas ficam para a fase 2 com convites por código).
- Valores de minion e escalas de furtividade implementados **como propostas** dos
  playtests, sinalizados na UI e no código — a regra continua em aberto no manual
  (PENDENCIAS.md, "Minions — tratamento único" e módulo de furtividade).
- Fadiga no card usa contador +/− (não a trilha de 50 da ficha) por espaço — escolha
  consciente; trilha compacta anotada como iteração futura no §5 do backlog.

## Pendências criadas

- Iterações do gestor anotadas no §5 do backlog (usos de habilidade na tabela,
  ordem de turno, versão offline).

## Observações

- Nenhum texto de regra em `sistema-base/` foi alterado nesta fase.
- Fase 2 da v2 (campanhas + convite por código) e fase 3 (biblioteca de inimigos)
  seguem no plano.
