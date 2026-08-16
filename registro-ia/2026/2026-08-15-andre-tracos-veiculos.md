---
data: 2026-08-15
pessoa: andre
ferramenta: codex
objetivo: Recalibrar e oficializar os traços de Veículos
arquivos-alterados:
  - modulos/veiculos/listas/lista-de-tracos.md
  - contrato/exportar_catalogo.py
  - contrato/catalogo.json
  - contrato/README.md
  - INDICE.md
  - PENDENCIAS.md
  - notas-de-design/decisoes/2026-08-15-tracos-veiculos.md
  - notas-de-design/pendencias-ficha-plataforma.md
  - documentacao/manual-da-plataforma/propostas/2026-08-15-veiculos.md
  - registro-ia/2026/2026-08-15-andre-tracos-veiculos.md
---

# Sessão: traços de Veículos

## Prompts dados

> “aprovado”

André aprovou a revisão dos dez traços anteriores e a criação de Reaproveitador como traço
genérico ligado às peças de reposição.

## O que foi feito

A lista foi reescrita com onze traços genéricos, custos atuais e efeitos compatíveis com as ações
revisadas. Foram removidas a imunidade ampla de Baliza e as sobreposições entre manobras.

## Decisões tomadas

- Os traços antigos ganharam nomes e efeitos aplicáveis a qualquer cenário.
- Direção defensiva e Manobrista passaram a cumprir funções diferentes.
- Reaproveitador reduz peças de reparo, mas nunca fabricação.
- Termos automotivos ficam disponíveis como vocabulário de cenário, sem duplicatas.

## Pendências criadas

A plataforma ainda não consome traços de veículo e deverá avaliar persistência, seed, router e
nomes legados antes da publicação estruturada.

## Observações

Não houve alteração de schema, migration, banco de dados ou produção. A próxima etapa é fechar
Aptidão Veicular e Experiência de Veículos.
