---
data: 2026-08-10
pessoa: andre
ferramenta: codex
objetivo: Estruturar a página pública de Aptidões e alinhar a leitura do saldo na ficha.
arquivos-alterados:
  - documentacao/manual-da-plataforma/README.md
  - documentacao/manual-da-plataforma/mapa-de-conteudo.yaml
  - documentacao/manual-da-plataforma/propostas/2026-08-10-aptidoes.md
  - registro-ia/2026/2026-08-10-andre-curadoria-aptidoes.md
---

# Sessão: curadoria de Aptidões

## Prompts dados

> vamos la

> De acordo.

> Aprova a recomendação.

O primeiro prompt retomou a construção do manual pela parte recomendada de Aptidões. André
aprovou a separação entre regra de uso, página de consulta, criação/progressão e recuperação. Ao
ser apresentada a divergência entre `gastas/total` e `disponíveis/total`, aprovou a recomendação
de usar `disponíveis/total` no manual e no resumo da ficha.

## O que foi feito

As fontes de Aptidões, Progressão, Criação, Descanso, Magia e Veículos foram analisadas junto da
implementação atual da plataforma. Foi criada a proposta editorial completa da nova página, com
reservas por atributo, tabela de custo escalonado, exemplos, recuperação e extensão por módulos.
O mapa e o índice das propostas foram atualizados; nenhuma regra de jogo foi alterada.

## Decisões tomadas

- A página de Aptidões será canônica para reservas, compra e custos; Regras básicas continua
  canônica para o procedimento completo de rerrolagem.
- O saldo público será apresentado como `disponíveis/total`.
- A ficha calculará disponíveis a partir de total menos gastas, sem alteração de armazenamento.
- Aptidões de módulos serão explicadas como trilhas independentes e terão suporte próprio da
  ficha avaliado quando os módulos forem implementados.

## Pendências criadas

Nenhuma marcação `A DEFINIR`. O suporte futuro a aptidões de módulos foi registrado apenas como
observação interna no mapa de conteúdo.

## Observações

A redação completa e a tabela de custos aguardam aprovação humana antes de serem implementadas
na plataforma.
