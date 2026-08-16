---
data: 2026-08-15
pessoa: andre
ferramenta: codex
objetivo: Definir os fundamentos genéricos do módulo Veículos
arquivos-alterados:
  - modulos/veiculos/README.md
  - INDICE.md
  - PENDENCIAS.md
  - notas-de-design/decisoes/2026-08-15-fundamentos-veiculos.md
  - notas-de-design/pendencias-ficha-plataforma.md
  - documentacao/manual-da-plataforma/README.md
  - documentacao/manual-da-plataforma/propostas/2026-08-15-veiculos.md
  - registro-ia/2026/2026-08-15-andre-fundamentos-veiculos.md
---

# Sessão: fundamentos de Veículos

## Prompts dados

> “Pode comitar, dar push e seguir”

> “Aprovado”

André aprovou a separação entre regra genérica e conteúdo do Colapso, a agência dos ocupantes e a
solução para cenas que misturam as escalas de 1 e 10 metros.

## O que foi feito

A regra de escala mista deixou de equiparar proximidade a alcance corpo a corpo. O módulo agora
orienta a escolher a escala predominante e resolver localmente, em 1 metro, apenas as interações
que exigem precisão. A orientação foi fixada em oito direções.

## Decisões tomadas

- Veículo não possui `PA` próprio.
- Deslocamento da velocidade é automático e ações de controle pertencem ao piloto.
- A cena usa uma malha na escala predominante.
- Mesmo espaço veicular indica proximidade; engajamento continua exigindo posição local.
- Interações precisas usam resolução local de 1 metro.
- Orientação tem oito direções de 45 graus.
- Conteúdo do ermo permanece no Colapso.

## Pendências criadas

Nenhuma nova. Permanecem as etapas já registradas de curadoria das ações, valores, listas e opções
do módulo.

## Observações

Não houve alteração de contrato, schema, migration ou implementação da plataforma. O backlog da
plataforma recebeu o aviso obrigatório para a futura publicação do módulo. A ficha offline não
possui mecânica de movimentação veicular e, por isso, não ficou defasada por esta decisão.
