---
data: 2026-07-24
pessoa: andre
ferramenta: claude-code
objetivo: analisar como evoluir a plataforma e decidir a separação entre backstage do sistema e backstage da plataforma
arquivos-alterados:
  - notas-de-design/decisoes/2026-07-24-arquitetura-plataforma-e-backstages.md
  - notas-de-design/pendencias-ficha-plataforma.md
  - registro-ia/2026/2026-07-24-andre-analise-plataforma.md
---

# Sessão: análise de evolução da plataforma e separação dos backstages

## Prompts dados

> Eu queria fazer uma analise sobre o que podemos fazer pra evoluir o projeto da
> plataforma. Primeiramente, quero que haja uma separação entre o que é o backstage de
> criação do sistema (as definições, regras, convenções e outras coisas voltadas pro time
> de criação poder criar, revisar, expandir, corrigir e melhorar o sistema de RPG) e o
> backstage de criação da plataforma do marca de sangue (manual online, ficha online,
> etc). Pra que cada uma dessas partes tenha seu próprio pipeline e agente focado [...]
> sempre com o sistema de rpg alimentando a plataforma. Mas de uma forma que fique claro
> e facil saber onde um acaba e começa o outro e onde eles precisam conversar.
>
> Mas pra além disso, eu comecei fazendo uma plataforma muito simples nesse repo, mas
> agora queria estruturar uma forma de criar uma plataforma mais robusta, repensada e
> refatorada do zero. Eu cheguei a montar um projeto com um outro amigo dev (matheus)
> onde iniciamos um setup [...] Link do repositório:
> https://github.com/andrewallacemf/plataforma-rpg-marca-de-sangue
>
> [Colou a troca com o Luigi, que sugeriu Next.js + Supabase + Vercel.]
>
> Não leve nada que falamos como verdade, apenas como possibilidades [...] Meu objetivo é
> eventualmente ter uma plataforma completa de RPG de mesa do sistema marca de sangue
> (manuais, cenários, campanhas, fichas de personagens e inimigos, conflitos físicos e
> sociais). Referências: D&D Beyond, Roll20, Owlbear Rodeo.

> 1. Rota A [Vercel + Supabase]
> 2. podemos continuar no repo plataforma-rpg-marca-de-sangue como você recomendou.
> pode deixar o matheus como colaborador sim se ele já estiver lá.
> pode registrar sim.

## O que foi feito

Sessão de **análise e decisão** (sem alteração de regra). A IA mapeou: (a) a plataforma
v0 deste repo (ficha single-file, portal VitePress, pipeline de limpeza, workflow de
Pages); (b) o repo `plataforma-rpg-marca-de-sangue` via GitHub (stack, schema Prisma,
decisões documentadas); (c) a sugestão do Luigi. Produziu análise comparativa e, após
aprovação do André, registrou a decisão em
`notas-de-design/decisoes/2026-07-24-arquitetura-plataforma-e-backstages.md` e adicionou
a referência no backlog `notas-de-design/pendencias-ficha-plataforma.md`.

## Decisões tomadas

- **Dois backstages em dois repos**: sistema (este repo, fonte canônica das regras) ×
  plataforma (repo `plataforma-rpg-marca-de-sangue`, revivido — não recomeçado do zero).
- **Fronteira = contrato de conteúdo**: export oficial de markdown limpo + `catalogo.json`
  a partir deste repo, alimentando ficha (catálogo gerado) e plataforma (seed do banco).
- **Infra da plataforma — Rota A**: Vercel + Supabase Postgres, mantendo BetterAuth e
  tRPC; tempo real futuro via Supabase Realtime (reverte decisões 001/002/005 do
  `docs/DECISIONS.md` da plataforma; registrar lá como 006+).
- **Ficha e manual atuais continuam** como produto de playtest e primeiros consumidores
  do contrato.
- Roteiro em 5 fases aprovado (contrato → reviver repo → v1 contas/fichas → v2 campanhas
  → v3 mesa ao vivo).

## Pendências criadas

- Nenhuma marcação `⚠️ A DEFINIR` em regra. Pontos em aberto da decisão (formato de
  consumo do contrato, local do exportador, colaboradores do repo da plataforma) estão
  listados na própria nota de decisão.

## Observações

- O repo da plataforma referencia regras **defasadas** (cópias de março/2026 no vault
  `00-cerebro`, sistema v1.1.0b) — reapontar para este repo é passo obrigatório da fase 2.
- Furos identificados na plataforma v0: `ficha/src/lib/catalogo.ts` (~1.500 linhas
  transcritas à mão do manual) e a limpeza compartilhada morando em
  `playtest/geracao-pdf/` — ambos resolvidos pelo contrato de conteúdo (fase 1).
