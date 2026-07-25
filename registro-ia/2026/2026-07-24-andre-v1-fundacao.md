---
data: 2026-07-24
pessoa: andre
ferramenta: claude-code
objetivo: fundação da v1 da plataforma — modelo da ficha completa, game engine, import/export .mds.json e catálogos via API
arquivos-alterados:
  - notas-de-design/decisoes/2026-07-24-arquitetura-plataforma-e-backstages.md
  - registro-ia/2026/2026-07-24-andre-v1-fundacao.md
---

# Sessão: v1 da plataforma — fundação (ficha completa no backend)

## Prompts dados

> marca essas pendencias pequenas em algum lugar pra me lembrar de fazer, pode começar v1

(Sequência das sessões de 24/07: análise → fase 1 (contrato) → fase 2 (repo revivido +
Supabase/Vercel no ar). O trabalho desta sessão aconteceu no repo da plataforma.)

## O que foi feito (no repo da plataforma)

1. **Pendências de infra registradas** em `docs/PENDENCIAS.md` (SMTP, OAuth
   Discord/Google, MCPs, CI de testes, lint legado, rotação da senha do banco).
2. **Especificação do modelo da ficha** em `docs/FICHA-MODELO.md`: mapeamento campo a
   campo do `.mds.json` da ficha offline para o banco (o que é relacional, o que é Json,
   princípios de fidelidade de round-trip, slots vazios e ordem).
3. **Schema estendido** (`migration 20260724235854_ficha_completa`, aplicada local e em
   produção): `CharacterArma` e `CharacterProtecao` (com `regioes ParteCorporal[]`)
   novos; `CharacterHabilidade` ganhou usos/níveis (Json), requisitos, custo composto;
   `CharacterTraco` ganhou atributo/valorCompra/custoPa; `Character` ganhou
   jogador/cenário/última sessão, redutores de PA, guardas, carga, anotações, tesouro e
   equipamentos (Json).
4. **Game engine portado** (`src/lib/game-engine/`): tipos do `.mds.json` +
   `migrarFicha` (com deep-merge defensivo para uploads arbitrários — endurecimento em
   relação à ficha offline) + todas as fórmulas (`expUsada`, custos triangulares e
   escalonados, penalidade de fadiga vigente × alternativa, `paTotal` com piso 3,
   saúde 0–20, descanso).
5. **Import/export `.mds.json`** no `characterRouter` (tRPC): `importarMds` (cria ou
   substitui atomicamente via nested writes) e `exportarMds` (envelope compatível com a
   ficha offline). Conversão ficha ⇄ banco em `game-engine/convert.ts`.
6. **Catálogos via tRPC** (`catalogoRouter`): habilidades, traços, equipamentos e
   propriedades direto do banco seedado pelo contrato — base do autopreenchimento da UI.
7. **Qualidade**: fichas reais de playtest (Gunnar 15 exp, Vera 50, Thorne 100) viraram
   fixtures de teste de **round-trip** (importa → persiste → exporta → fórmulas dão os
   mesmos números). Suíte foi de 369 para **447 testes**, cobertura global **100%**
   mantida, `tsc` limpo, `next build` ok.

## Decisões tomadas

- Campos de formulário livre ficam `String` no banco (fidelidade ao "formulário burro"
  da ficha); campos derivados nunca são persistidos (engine calcula).
- Habilidades e traços compartilham a sequência `ordem` (na ficha são uma lista única).
- `migrarFicha` da plataforma faz deep-merge defensivo (diferença consciente da ficha
  offline, que confia no próprio formato).
- UI da ficha completa e manual consultável ficam para a próxima sessão (fundação
  primeiro, tela depois).

## Pendências criadas

- Nenhuma de regra. Futuro (registrado em `docs/FICHA-MODELO.md`): extrair o game
  engine para pacote compartilhado entre ficha offline e plataforma (hoje é port
  testado por fixtures).

## Observações

- A nota de decisão da arquitetura foi atualizada (fase 2 concluída e validada com
  usuário real; provisionamento completo).
- Próximos passos da v1: UI da ficha completa (seções da ficha offline na página do
  personagem, autopreenchimento via `catalogoRouter`, botões importar/exportar) e
  manual consultável.
