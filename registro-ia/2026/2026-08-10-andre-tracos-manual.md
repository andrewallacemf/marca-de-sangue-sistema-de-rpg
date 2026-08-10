---
data: 2026-08-10
pessoa: andre
ferramenta: codex
objetivo: curar a lista oficial de traços para publicação na plataforma
arquivos-alterados:
  - sistema-base/listas/tracos-base.md
  - contrato/exportar_catalogo.py
  - contrato/catalogo.json
  - notas-de-design/decisoes/2026-08-10-curadoria-tracos.md
  - documentacao/manual-da-plataforma/propostas/2026-08-10-tracos.md
  - documentacao/manual-da-plataforma/mapa-de-conteudo.yaml
  - INDICE.md
  - notas-de-design/pendencias-ficha-plataforma.md
---

# Sessão: curadoria dos traços para o manual

## Prompts dados

Resumo fiel da conversa: após analisar o catálogo, a IA propôs publicar 50 traços oficiais,
excluir nove experimentais, corrigir `Pele de ferro`, exportar o efeito das maestrias de armadura
e corrigir o gatilho contraditório de `Protetor`. André respondeu:

> aprovado

## O que foi feito

A lista canônica foi corrigida e o catálogo regenerado. A proposta editorial foi marcada como
aprovada, o mapa de conteúdo passou a indicar publicação e a decisão de curadoria documenta as
escolhas humanas.

## Decisões tomadas

- Publicar 14 Técnicas, 11 Maestrias e 25 Aspectos oficiais.
- `Protetor` dispara quando um aliado adjacente é acertado.
- As maestrias de armadura exportam a regra de redutor de PA já aprovada.

## Pendências criadas

- Semear o catálogo corrigido no ambiente da plataforma antes da publicação.

## Observações

O exportador continua sendo a única origem do `catalogo.json`; o JSON não foi editado à mão.
