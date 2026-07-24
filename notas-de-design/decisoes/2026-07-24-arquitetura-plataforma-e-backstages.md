---
data: 2026-07-24
tipo: decisao
status: aprovada
tema: [plataforma, arquitetura, backstage, contrato-de-conteudo, ficha, manual-web]
proposto-por: andre
---

# Arquitetura da plataforma e separação dos backstages

## Contexto

O projeto cresceu em duas frentes que hoje moram misturadas neste repositório: o
**sistema de RPG** (regras, cenários, módulos — o trabalho do time de criação) e a
**plataforma** (manual web, ficha interativa — o produto digital). O André quer:

1. separar claramente os dois "backstages", cada um com seu pipeline e seu agente de IA
   focado, com a fronteira entre eles explícita;
2. evoluir da plataforma v0 (ficha single-file + portal VitePress) para uma **plataforma
   robusta** com contas de usuário, fichas persistidas em backend, gestão de campanhas e,
   no futuro, mesa ao vivo (referências: D&D Beyond, Roll20, Owlbear Rodeo).

A análise (sessão de 24/07, ver `registro-ia/2026/2026-07-24-andre-analise-plataforma.md`)
levantou três insumos:

- **A plataforma v0 deste repo** tem arquitetura coerente (markdown → limpeza de bastidor
  → PDF + site → ficha embutida), mas com **dois furos**: (a) o catálogo da ficha
  (`ficha/src/lib/catalogo.ts` + `catalogo-niveis.ts`, ~1.500 linhas) é **transcrito à
  mão** do manual — risco de divergência silenciosa a cada revisão de regra; (b) a função
  de limpeza compartilhada (`limpa_arquivo`) mora em `playtest/geracao-pdf/`, fazendo o
  site depender de um diretório de playtest.
- **O repo `plataforma-rpg-marca-de-sangue`** (iniciado com o Matheus em março/2026) está
  bem mais maduro do que se lembrava: Next.js 16 + React 19 + tRPC 11 + Prisma 7 +
  BetterAuth, autenticação completa, CRUD de personagens, testes Jest, schema Prisma que
  **já modela o domínio do jogo** (saúde por membro, aptidões, habilidades, traços,
  catálogo de equipamentos com propriedades de arma) e cultura de decisões documentadas
  (`docs/DECISIONS.md`). **Porém** aponta para cópias antigas das regras (vault
  `00-cerebro`, sistema v1.1.0b) — defasado em relação a este repo, que é a fonte canônica.
- **A sugestão do Luigi** (Next + Supabase + Vercel) contradiz decisões deliberadas
  daquele repo (SQLite, BetterAuth, WebSocket puro, VPS+Docker), tomadas em nome de
  independência de SaaS — mas ao custo de ops (backup, TLS, disaster recovery) cair no
  colo do André.

## Decisões

1. **Dois backstages, dois repositórios.**
   - **Backstage do sistema** = este repo (`marca-de-sangue-sistema-de-rpg`), como está:
     governança do `AGENTS.md`, análise de impacto, `INDICE.md`, `PENDENCIAS.md`.
     É a **fonte canônica** das regras.
   - **Backstage da plataforma** = o repo **`plataforma-rpg-marca-de-sangue`** existente,
     **revivido** (não recomeçado do zero — auth, tRPC, testes e schema de domínio são
     trabalho pronto e de qualidade). Matheus permanece colaborador. Governança própria:
     `CLAUDE.md` + `docs/DECISIONS.md` + skills de agente de lá.

2. **A fronteira vira um contrato de conteúdo explícito.** O repo do sistema ganha uma
   camada de **export oficial** (promovendo a limpeza que hoje está em
   `playtest/geracao-pdf/` para um lugar de pipeline oficial), que emite:
   - **markdown limpo** (sem frontmatter/bastidor — o que o site e o PDF já consomem);
   - **`catalogo.json` estruturado** (armas, proteções, habilidades, traços, com níveis) —
     que passa a alimentar tanto o `catalogo.ts` da ficha (gerado, não mais mantido à mão)
     quanto o **seed do banco** da plataforma (`HabilidadeBase`, `TracoBase`,
     `EquipamentoBase` já existem no schema Prisma de lá).
   O contrato (schema do JSON + regras do que é bastidor) fica documentado em um único
   arquivo. Mudança de regra → a análise de impacto obrigatória verifica se o export muda;
   se mudar, abre pendência no lado da plataforma.

3. **Rota A de infraestrutura (gerenciada): Vercel + Supabase Postgres.**
   - Trocar SQLite → **Postgres gerenciado** (Supabase) **agora**, enquanto é barato
     (uma linha no Prisma); depois de ter usuários reais, é caro. Motivo: haverá dados de
     contas de terceiros — backup/ops não podem depender de VPS gerido à mão.
   - **Manter BetterAuth e tRPC** (já implementados e testados; Supabase é usado só como
     Postgres gerenciado — sem lock-in de Supabase Auth nem front falando direto com o banco).
   - **Hospedagem na Vercel.** A mesa ao vivo (fase 3+) usará **Supabase Realtime**
     (channels) em vez de WebSocket puro (`ws`), contornando a limitação serverless.
   - Essas escolhas **revertem as decisões 001/002/005** do `docs/DECISIONS.md` da
     plataforma e devem ser registradas lá como decisões novas (006+), com justificativa:
     menor atrito operacional para o perfil do time + MCPs de Vercel/Supabase permitem que
     os agentes de IA vejam logs, criem tabelas e depurem deploy sozinhos.

4. **Ficha e manual atuais continuam vivos** como produto de playtest (offline,
   imprimível, sem conta). Passam a ser os **primeiros consumidores do contrato de
   conteúdo**. Quando a plataforma cobrir os casos online, o portal aponta para ela.
   As fichas de `playtest/fichas-salvas/*.mds.json` servem de corpus de teste para o
   importador de fichas da plataforma.

## Roteiro aprovado (fases)

1. **Contrato de conteúdo** (neste repo): promover a limpeza para fora de `playtest/`,
   criar o exportador de `catalogo.json`, documentar o contrato, gerar o `catalogo.ts`
   da ficha a partir dele.
2. **Reviver o repo da plataforma**: SQLite → Postgres, registrar decisões 006+,
   reapontar `CLAUDE.md` e a skill `rpg-rules-reference` para este repo (hoje apontam
   para cópias defasadas no vault), ressincronizar schema/seed com as regras atuais
   (regras vigentes × alternativas, fadiga 0–50, saúde 0–20 acumulada).
3. **v1**: contas + fichas persistidas + importar/exportar `.mds.json` (compatível com a
   ficha offline) + manual consultável.
4. **v2**: campanhas, fichas de inimigos, gestor de batalha (especificação inicial em
   [pendencias-ficha-plataforma.md](../pendencias-ficha-plataforma.md), seção 5).
5. **v3**: mesa ao vivo — mapa hexagonal (Pixi.js), tempo real, conflitos físicos e sociais.

## Pontos em aberto

- **Formato de consumo do contrato** pela plataforma (build da plataforma clona este repo
  e roda o exportador? artefato de release no GitHub? pacote npm?) — decidir na fase 1.
- **Onde exatamente o exportador vai morar** neste repo (ex.: pasta `exportador/` ou
  `plataforma-contrato/`) e como o workflow de Pages passa a usá-lo.
- Convite/permissões do repo da plataforma (verificar colaboradores atuais).
