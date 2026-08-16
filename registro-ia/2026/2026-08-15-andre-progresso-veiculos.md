---
data: 2026-08-15
pessoa: andre
ferramenta: codex
objetivo: Oficializar Aptidão Veicular e Experiência de Veículos
arquivos-alterados:
  - modulos/veiculos/README.md
  - cenarios/colapso/mecanicas-unicas/veiculos.md
  - INDICE.md
  - PENDENCIAS.md
  - notas-de-design/variantes-pendentes.md
  - notas-de-design/decisoes/2026-08-15-progresso-veiculos.md
  - notas-de-design/pendencias-ficha-plataforma.md
  - documentacao/manual-da-plataforma/propostas/2026-08-15-veiculos.md
  - registro-ia/2026/2026-08-15-andre-progresso-veiculos.md
---

# Sessão: progressão de Veículos

## Prompts dados

> “aprovado”

André aprovou o escopo, a compra e a recuperação da Aptidão Veicular, a separação da Experiência de
Veículos e a reserva inicial de 8 pontos no Colapso.

## O que foi feito

As duas opções foram fechadas seguindo o padrão do módulo Magia, mas com delimitação explícita dos
ataques, da economia material e da recompensa. O impacto futuro na ficha foi registrado.

## Decisões tomadas

- As duas opções são independentes e valem para toda a campanha.
- Aptidão Veicular substitui a aptidão do atributo nas ações/habilidades do módulo.
- Experiência de Veículos pertence ao personagem e não compra bens materiais.
- Uma recompensa pertence a uma trilha; padrão inicial 0, Colapso 8.

## Pendências criadas

A automação na plataforma exige uma entrega própria com análise de schema, migration, `.mds.json`,
batalha, descanso e cobertura integral de testes.

## Observações

Não houve alteração de schema, migration, banco de dados ou produção. A próxima etapa é fechar a
arquitetura editorial das páginas do módulo.
