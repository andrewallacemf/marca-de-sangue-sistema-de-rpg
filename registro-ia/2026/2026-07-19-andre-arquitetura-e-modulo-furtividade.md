---
data: 2026-07-19
pessoa: andre (decisões do grupo)
ferramenta: claude-cowork
objetivo: guia de arquitetura da informação (aprovado) + mover Furtividade para módulo (Fase B)
arquivos-alterados:
  - notas-de-design/arquitetura-da-informacao.md
  - modulos/furtividade/README.md (novo — movido de sistema-base/conflitos/05-furtividade.md)
  - sistema-base/conflitos/05-furtividade.md (removido)
  - modulos/README.md
  - sistema-base/listas/tracos-base.md
  - sistema-base/listas/habilidades-base-ageis.md
  - INDICE.md
  - PENDENCIAS.md
  - CONVENCOES.md
---

# Sessão: arquitetura da informação + módulo Furtividade

## Prompts dados

> "Vamos começar com o shell. Queria que essa tarefa englobasse uma revisão geral do sistema base
> pra identificar o que é base e o que deve ser módulo (Furtividade, Armas...), estruturar a área
> de cenários, e primeiro construir uma estrutura de arquitetura da informação como guia."
> → depois: "Todas as recomendações estão aprovadas."

## O que foi feito

- **Guia de arquitetura da informação** (`notas-de-design/arquitetura-da-informacao.md`):
  camadas (núcleo × módulos × coleções × cenários × variantes), árvore de decisão, classificação
  do que é base × candidato a módulo, e plano de migração faseado. Linkado das CONVENÇÕES §10.
- **Decisões aprovadas** (André, 19/07): furtividade→módulo; conflito social→módulo; catálogos de
  arma/proteção→coleção `armas`; mecânica alternativa (fadiga)→`variantes/`; `playtest/` segue
  como kit de teste separado.
- **Fase B executada — Furtividade virou módulo:** `sistema-base/conflitos/05-furtividade.md` →
  `modulos/furtividade/README.md` (frontmatter `cenario: modulo`/`modulo: furtividade`). Links
  internos e de entrada corrigidos (traços, habilidades, INDICE); módulo registrado em
  `modulos/README.md`. Regra **inalterada**, só de lugar. Traços/habilidades ligados (Espreitador,
  Ocultar-se à vista, Golpe surpresa, Emboscador) seguem nas listas do núcleo, referenciados.

## Decisões tomadas

- Modelo de arquitetura aprovado; furtividade é o primeiro módulo.

## Pendências criadas / próximas fases

- Fase seguinte: mover **mecânica alternativa (fadiga)** para `variantes/` (renumera conceitos).
- **Coleção `armas`**: exige **análise de impacto** no gerador de PDF do manual e no catálogo da
  ficha antes de mover as listas.
- **Conflito social** → módulo (a executar).
- Obs.: como furtividade saiu do `sistema-base`, o **PDF do manual base** deixa de incluí-la
  (passa a ser doc de módulo à parte) — comportamento esperado da modularização.
