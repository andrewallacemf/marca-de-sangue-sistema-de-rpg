---
data: 2026-08-15
pessoa: andre
ferramenta: codex
objetivo: Recalibrar e oficializar as habilidades de Veículos
arquivos-alterados:
  - modulos/veiculos/README.md
  - modulos/veiculos/listas/lista-de-habilidades.md
  - modulos/veiculos/listas/lista-de-equipamentos.md
  - cenarios/colapso/mecanicas-unicas/habilidades-do-cenario.md
  - contrato/exportar_catalogo.py
  - contrato/catalogo.json
  - contrato/README.md
  - INDICE.md
  - PENDENCIAS.md
  - notas-de-design/decisoes/2026-08-15-habilidades-veiculos.md
  - notas-de-design/pendencias-ficha-plataforma.md
  - documentacao/manual-da-plataforma/propostas/2026-08-15-veiculos.md
  - registro-ia/2026/2026-08-15-andre-habilidades-veiculos.md
---

# Sessão: habilidades de Veículos

## Prompts dados

> “aprovado”

André aprovou a revisão completa das 19 habilidades, incluindo custos, progressões, atributos,
nomes genéricos e a separação de Carburador furado como conteúdo do Colapso.

## O que foi feito

As habilidades foram alinhadas ao modelo de nível + fadiga e ao orçamento atual de PA. Reduções
inúteis ou negativas foram substituídas por progressões efetivas, os nomes automotivos viraram
vocabulário opcional e o contrato foi preparado para oficializar a coleção.

## Decisões tomadas

- Custos de compra ficam entre 2 e 4 exp.; ativação gera fadiga igual ao PA total.
- Reduções têm piso de 1 PA e duas habilidades não se combinam na mesma ação.
- Co-piloto não cria mais PA; Sabotar é Mental; Carburador furado é exclusivo do Colapso.
- Marcha à ré ganhou regra básica e Recuo controlado amplia sua velocidade.

## Pendências criadas

A plataforma ainda não consome habilidades de veículo. A publicação deverá avaliar dados
estruturados, nomes anteriores e custos variáveis antes de alterar schema ou seed.

## Observações

Não houve alteração de schema, migration, banco de dados ou produção. Os traços permanecem como
proposta e são a próxima etapa da curadoria.
