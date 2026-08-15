---
data: 2026-08-15
pessoa: andre
ferramenta: codex
objetivo: Oficializar o módulo Magia e preparar sua publicação no manual da plataforma
arquivos-alterados:
  - modulos/magia/README.md
  - modulos/magia/listas/lista-de-magias.md
  - modulos/magia/listas/lista-de-tracos.md
  - cenarios/mukashi/mecanicas-unicas/magia.md
  - contrato/exportar_catalogo.py
  - contrato/catalogo.json
  - contrato/README.md
  - INDICE.md
  - PENDENCIAS.md
  - notas-de-design/decisoes/2026-08-15-curadoria-magia.md
  - notas-de-design/pendencias-ficha-plataforma.md
  - documentacao/manual-da-plataforma/README.md
  - documentacao/manual-da-plataforma/mapa-de-conteudo.yaml
  - documentacao/manual-da-plataforma/propostas/2026-08-15-magia.md
  - registro-ia/2026/2026-08-15-andre-curadoria-magia.md
---

# Sessão: curadoria de Magia

## Prompts dados

> “primeiro faça commit e push do que ja foi feito, depois pode seguir”

> “aprovado”

André aprovou a proposta de oficializar o núcleo, as oito magias, os quatro traços e as opções de
Aptidão e Experiência de Magia, incluindo as correções de custos e terminologia.

## O que foi feito

O módulo foi reconciliado com a saúde simplificada, recebeu regras completas para pagamento de
custos corporais e para a experiência temática, e deixou de ser marcado como proposta no contrato.
O mapa editorial e a documentação de publicação foram preparados para as páginas de jogador e
narrador, mantendo Mukashi como uma aplicação separada.

## Decisões tomadas

- Custo de magia é `PA` mais Fadiga, dano curável ou perda de vida máxima.
- Custos corporais ignoram proteção, não geram Fadiga e precisam ser pagos por inteiro.
- Grito que Ajoelha tem custo fixo 3; Pele que Não Esquece converte perda máxima em dano curável.
- Aptidão Mágica e Experiência de Magia permanecem opcionais e independentes.
- As oito magias e os quatro traços genéricos passam a ser oficiais.

## Pendências criadas

- A plataforma precisa executar o seed em produção após a publicação do contrato para remover o
  estado de proposta dos registros já existentes.

## Observações

Não houve alteração de schema ou migration. As opções específicas de Mukashi continuam em curadoria.
