---
data: 2026-08-10
pessoa: andre
ferramenta: codex
objetivo: oficializar equipamentos, itens, valores e exportá-los para a plataforma
arquivos-alterados:
  - sistema-base/listas/equipamentos-base.md
  - sistema-base/listas/itens-base.md
  - sistema-base/listas/protecoes-base.md
  - modulos/armas-brancas/README.md
  - modulos/armas-exoticas/README.md
  - modulos/arcos-e-bestas/README.md
  - modulos/armas-de-fogo/README.md
  - modulos/protecoes/README.md
  - contrato/exportar_catalogo.py
  - contrato/catalogo.json
  - contrato/README.md
  - documentacao/manual-da-plataforma/mapa-de-conteudo.yaml
  - notas-de-design/decisoes/2026-08-10-equipamentos-itens-e-valores.md
  - notas-de-design/pendencias-ficha-plataforma.md
  - INDICE.md
  - PENDENCIAS.md
---

# Sessão: Equipamentos, itens e valores oficiais

## Prompts dados

> Aceito as recomendações. Aprovado.

Resumo do contexto anterior: André aprovou a recomendação de oficializar a matriz vigente de
dano, durabilidades e preços, separar armas pesadas contundentes das lâminas e levar os itens
gerais ao contrato e ao manual da plataforma.

## O que foi feito

As marcações de proposta foram removidas dos valores aprovados e as listas canônicas foram
alinhadas. O exportador passou a emitir itens gerais, o catálogo foi regenerado e o mapa editorial
foi atualizado com as páginas publicadas de Equipamentos, Itens e Proteções.

## Decisões tomadas

- Danos, durabilidades e preços vigentes foram oficializados.
- Mangual pesado, Mangual Atroz, Maça Pesada e Clava pesada formam a linha contundente de `4d4`;
  as lâminas pesadas continuam cortantes/perfurantes.
- A lança montada permanece perfurante de `1d10`, sem exceção de carga ainda inexistente.
- Itens gerais passam a integrar o contrato estruturado.

## Pendências criadas

- Aplicar a migration e executar o seed em produção pelo fluxo operacional da plataforma.

## Observações

A implementação correspondente na plataforma está registrada na decisão 066 daquele repo.
