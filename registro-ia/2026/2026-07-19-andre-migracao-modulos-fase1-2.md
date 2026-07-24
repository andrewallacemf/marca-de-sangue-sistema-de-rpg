---
data: 2026-07-19
pessoa: andre (decisões do grupo)
ferramenta: claude-cowork
objetivo: migração de módulos — Fase 1 (variante fadiga) e Fase 2 (conflito social)
arquivos-alterados:
  - sistema-base/conceitos/09-mecanica-alternativa-habilidades-e-fadiga.md (removido)
  - sistema-base/conceitos/10-descanso.md → 09-descanso.md (renumerado)
  - sistema-base/conceitos/00-indice.md
  - sistema-base/conceitos/05-habilidades.md, 08-fadiga.md
  - modulos/conflito-social/README.md (novo — movido de sistema-base/conflitos/04-conflito-social.md)
  - sistema-base/conflitos/04-conflito-social.md (removido)
  - sistema-base/listas/habilidades-experimentais-sociais.md
  - modulos/README.md, INDICE.md, PENDENCIAS.md, notas-de-design/arquitetura-da-informacao.md
  - playtest/geracao-pdf/COMO-FUNCIONA.md
---

# Sessão: migração de módulos (Fases 1 e 2)

## Prompts dados

> "Siga." (após aprovar todas as recomendações da arquitetura)

## O que foi feito

- **Fase 1 — mecânica alternativa (fadiga) sai de `conceitos/`:** o `conceitos/09-mecanica-alternativa`
  era redundante com a variante completa em `sistema-base/variantes/habilidades-por-fadiga/`; foi
  **removido**. Links repontados (INDICE, `05-habilidades`, `08-fadiga`, `00-indice`, doc do PDF).
  `conceitos/` renumerado: **descanso `10` → `09`**.
- **Fase 2 — conflito social vira módulo:** `sistema-base/conflitos/04-conflito-social.md` →
  `modulos/conflito-social/README.md` (frontmatter de módulo). Links repontados (INDICE,
  habilidades-experimentais-sociais, PENDENCIAS); módulo registrado em `modulos/README.md`.
  Regra inalterada. As habilidades experimentais sociais seguem em `listas/`, referenciadas.

## Decisões tomadas

- Nenhuma regra alterada — apenas reorganização aprovada (arquitetura da informação).

## Pendências / próximas fases

- **Coleção `armas`** (Fase C) — antes de mover as listas de itens, fazer **análise de impacto**
  no gerador de PDF do manual e no catálogo da ficha (`ficha/src/lib/catalogo.ts`).
- Encaixar os mundos (`cenarios/<mundo>/`) e promover mecânicas-únicas a módulos quando repetirem.
- Obs.: com conflito social e furtividade fora do `sistema-base`, o **PDF do manual base** não os
  inclui mais (viram docs de módulo à parte) — comportamento esperado.
