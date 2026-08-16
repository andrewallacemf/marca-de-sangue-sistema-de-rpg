---
data: 2026-08-15
pessoa: andre
ferramenta: codex
objetivo: Oficializar equipamentos, instalação, reparo e fabricação de Veículos
arquivos-alterados:
  - modulos/veiculos/README.md
  - modulos/veiculos/listas/lista-de-equipamentos.md
  - contrato/exportar_catalogo.py
  - contrato/catalogo.json
  - contrato/README.md
  - PENDENCIAS.md
  - notas-de-design/decisoes/2026-08-15-equipamentos-veiculos.md
  - notas-de-design/pendencias-ficha-plataforma.md
  - documentacao/manual-da-plataforma/mapa-de-conteudo.yaml
  - documentacao/manual-da-plataforma/propostas/2026-08-15-veiculos.md
  - registro-ia/2026/2026-08-15-andre-equipamentos-veiculos.md
---

# Sessão: equipamentos e fabricação de Veículos

## Prompts dados

> “aprovado”

André aprovou a proposta de regras comuns para instalação, Integridade, reparo, fabricação e
economia dos equipamentos de veículo.

## O que foi feito

A lista foi separada entre equipamento instalado e item de apoio, ganhou procedimentos completos
de instalação, reparo e fabricação e deixou moeda e disponibilidade sob responsabilidade do
cenário. Os equipamentos foram oficializados no contrato.

## Decisões tomadas

- Equipamento instalado ocupa um espaço e para de funcionar com Integridade 0.
- Instalação preserva o progresso após falha; reparo consome uma peça comum.
- Estrepes são consumíveis, Compartimento de carga substitui Bagageiro e as caixas desgastam ao uso.
- Falha de fabricação consome metade das peças; duração do período de trabalho é do cenário.
- Não existe preço monetário universal no módulo Veículos.

## Pendências criadas

A plataforma ainda não consome equipamentos veiculares estruturados. A publicação futura deverá
mapear schema, migration, seed, router e interface antes de implementar.

## Observações

Não houve alteração de schema, migration, banco de dados ou produção. Habilidades e traços seguem
como proposta até a próxima etapa de curadoria.
