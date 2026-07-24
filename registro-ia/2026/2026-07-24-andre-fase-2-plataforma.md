---
data: 2026-07-24
pessoa: andre
ferramenta: claude-code
objetivo: fase 2 da evolução da plataforma — reviver o repo plataforma-rpg-marca-de-sangue (decisões novas, reapontamento, Postgres, schema atualizado, seed via contrato)
arquivos-alterados:
  - notas-de-design/decisoes/2026-07-24-arquitetura-plataforma-e-backstages.md
  - registro-ia/2026/2026-07-24-andre-fase-2-plataforma.md
---

# Sessão: fase 2 — reviver o repo da plataforma

## Prompts dados

> pode começar a fase 2

(Continuação das sessões de análise e da fase 1, executando a fase 2 do roteiro da
decisão `notas-de-design/decisoes/2026-07-24-arquitetura-plataforma-e-backstages.md`.
O trabalho desta sessão aconteceu majoritariamente **no repo da plataforma**
`plataforma-rpg-marca-de-sangue`, clonado como pasta irmã deste repo.)

## O que foi feito (no repo da plataforma)

1. **Baseline estabelecida**: clone, `npm install`, suíte completa rodada — 367 testes
   passando antes de qualquer mudança.
2. **Decisões 006–009 registradas** em `docs/DECISIONS.md` (revertendo 001/002/005 de
   março): Postgres gerenciado no Supabase em vez de SQLite; Vercel em vez de VPS+Docker;
   Supabase Realtime (fase 3+) em vez de `ws` puro; **contrato de conteúdo como fonte
   única de dados de regra**. `docs/STACK.md` reescrito de acordo.
3. **Reapontamento das regras**: `CLAUDE.md` e a skill `rpg-rules-reference` deixaram de
   apontar para as cópias defasadas do vault (v1.1.0b) e passaram a apontar para este
   repo (clone irmão) e para o `contrato/catalogo.json`.
4. **Migração SQLite → Postgres**: driver adapter `@prisma/adapter-pg`, BetterAuth com
   `provider: "postgresql"`, `docker-compose.yml` virou só o Postgres 17 local de dev,
   `Dockerfile`/`.dockerignore`/`dev.db` removidos, `.env.example` criado, migrations
   antigas descartadas e **migration inicial nova aplicada** num Postgres local.
5. **Schema ressincronizado com as regras atuais**: exp inicial 8→**15**, PA base
   7→**10**, campo **fadiga (0–50)** e enum **versaoRegras** (vigente × alternativa)
   criados, saúde por membro remodelada de superficial/profundo/permanente (regra
   antiga) para **dano acumulado 0–20** (10 espaços que mudam de status — reforma do
   playtest 1, mesmo encoding do `.mds.json` da ficha), `TipoTraco.ESPECIALIZACAO` →
   **TECNICA**, catálogos ganharam requisitos/níveis (Json)/gatilho/observações,
   `EquipamentoBase.dano` virou texto de dados (ex.: `1d12 CORT · 1d8 PERF`), propriedade
   **ACUI.** incluída e tabela **Propriedade** (glossário) criada.
6. **Seed reescrito** (2.155 linhas de transcrição manual → ~300 de mapeamento): lê o
   `contrato/catalogo.json` (clone irmão → fallback URL raw do GitHub → override por
   env `CONTRATO_CATALOGO`) e popula HabilidadeBase, TracoBase, EquipamentoBase e
   Propriedade, removendo registros obsoletos. Rodado com sucesso: 52 habilidades,
   58 traços, 59 equipamentos, 9 propriedades.
7. **Verificações**: 369 testes passando (12 atualizados para o modelo novo),
   `tsc --noEmit` limpo, `next build` ok (removido `output: "standalone"`, que era do
   Docker e quebrava build no Windows), servidor de produção respondendo contra o
   Postgres local. README padrão do create-next-app substituído por um real.

## Decisões tomadas

- Rota A confirmada em decisões formais (006–009) no log da plataforma.
- Saúde no banco usa o **encoding de dano acumulado 0–20** (compatível com a ficha).
- Habilidades/traços experimentais entram no banco com flag `experimental`.
- Lint da plataforma tem 172 erros **pré-existentes** (estilo de teste: `any`,
  `require()`) — fora do escopo desta fase; anotado para limpeza futura.

## Pendências criadas

- Nenhuma pendência de **regra**. Do lado da plataforma:
  - ✅ **Supabase provisionado na própria sessão**: projeto `plataforma-rpg-marca-de-sangue`
    (região `sa-east-1`, Data API desligada), **migration inicial aplicada e seed rodado
    em produção** (52 habilidades · 58 traços · 59 equipamentos · 9 propriedades,
    verificado por consulta).
  - Restam para o André: criar o projeto na **Vercel** (importar o repo + env vars,
    usando a URL do *Transaction pooler* como `DATABASE_URL`) e conectar os **MCPs**
    de Supabase/Vercel ao Claude.
  - O modelo de "usos por nível" das habilidades do personagem (regras vigentes) será
    detalhado na v1, junto com a UI de ficha completa.

## Observações

- O repo da plataforma **não tem CI** (nenhum workflow) — vale criar um de testes na v1.
- Commit desta sessão no repo da plataforma: ver histórico de lá (mesma data).
