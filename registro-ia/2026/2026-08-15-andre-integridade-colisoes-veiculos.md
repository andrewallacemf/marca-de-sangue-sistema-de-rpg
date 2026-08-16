---
data: 2026-08-15
pessoa: andre
ferramenta: codex
objetivo: Oficializar categorias, integridade, colisões, condições e cobertura de Veículos
arquivos-alterados:
  - modulos/veiculos/README.md
  - modulos/veiculos/listas/lista-de-veiculos.md
  - modulos/veiculos/listas/lista-de-equipamentos.md
  - modulos/veiculos/listas/lista-de-habilidades.md
  - cenarios/colapso/mecanicas-unicas/veiculos.md
  - contrato/exportar_catalogo.py
  - contrato/catalogo.json
  - contrato/README.md
  - INDICE.md
  - PENDENCIAS.md
  - notas-de-design/decisoes/2026-08-15-integridade-colisoes-veiculos.md
  - notas-de-design/pendencias-ficha-plataforma.md
  - documentacao/manual-da-plataforma/propostas/2026-08-15-veiculos.md
  - registro-ia/2026/2026-08-15-andre-integridade-colisoes-veiculos.md
---

# Sessão: integridade e colisões de Veículos

## Prompts dados

> “aprovado”

André aprovou a oficialização dos valores, a terminologia genérica, a colisão bilateral, as
condições e a cobertura por assento.

## O que foi feito

O modelo deixou de depender da linguagem de automóveis, ganhou consequências para partes zeradas e
passou a calcular colisões pela velocidade real de impacto. Categorias e partes foram
oficializadas no contrato, preservando o campo técnico `motor` para compatibilidade.

## Decisões tomadas

- Categorias atuais e seis componentes ficam oficiais.
- Rodagem e Motor tornam-se Locomoção e Propulsor.
- Colisão causa dano bilateral e não aplica um segundo multiplicador frontal.
- Transbordamento não cria dano por arredondamento e respeita proteção corporal.
- Condições são genéricas; Colapso mantém seu vocabulário.
- Cobertura é definida por assento e direção protegida.

## Pendências criadas

Nenhuma nova. Equipamentos, habilidades, traços e opções de progressão continuam nas etapas já
previstas.

## Observações

Não houve alteração de schema ou migration. A plataforma recebeu o aviso de atualização futura do
seed e do manual; a ficha offline não executa conflito veicular.
