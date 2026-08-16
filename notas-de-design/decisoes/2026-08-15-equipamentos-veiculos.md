---
data: 2026-08-15
tipo: decisao
status: aprovada
tema: [veiculos, equipamentos, instalacao, reparo, fabricacao, contrato]
proposto-por: andre
---

# Equipamentos, instalação, reparo e fabricação de Veículos

## Contexto

A lista herdada do Colapso misturava equipamento instalado, consumíveis e economia do ermo. Não
havia procedimento completo para instalar, reparar ou falhar numa fabricação, e a pendência de
preço em moeda tentava impor ao módulo genérico uma economia que pertence a cada cenário.

## Decisões

- Cada equipamento instalado ocupa um espaço, salvo indicação expressa, e deixa de funcionar com
  Integridade 0. Seu dano não transborda, exceto quando o próprio equipamento de proteção declarar.
- Instalação acumula PA. Ao completar o investimento, faz-se o teste Mental indicado; uma falha
  preserva o progresso e cada nova tentativa custa 1 PA.
- Reparar equipamento reparável exige Reparar integridade, 5 PA e uma peça comum, recuperando
  `1d4` de Integridade. Itens marcados como não reparáveis precisam ser substituídos.
- Aparato de invasão substitui o custo normal de Invasão/Embarque, alcança 20 m e protege contra a
  queda. Buzina permite uma tentativa por alvo por rodada. Gancho impede aumentar a distância sem
  vencer o operador num teste Físico. Suspensão hidráulica exige velocidade mínima de 20 m/t.
- Bagageiro passa a Compartimento de carga e acrescenta dois espaços de carga equivalentes ao de
  um ocupante. Estrepes passam a item de apoio consumível sem espaço de instalação.
- Caixas de ferramentas e de sabotagem perdem 1 de Integridade cada vez que concedem sua redução.
- Peças são pagas antes dos testes de fabricação. Uma falha consome metade de cada tipo, arredondada
  para cima, e cada teste representa um período de trabalho cuja duração o cenário define.
- O módulo não fixa moeda, preço nem disponibilidade. Cada cenário define sua economia; peças,
  testes e períodos de trabalho preservam uma medida comum de complexidade.

## Impacto

- A pendência de preço em moeda fica encerrada e os equipamentos passam a `proposta: false` no
  contrato. Habilidades e traços permanecem em curadoria.
- A plataforma hoje importa apenas categorias de veículo. Foi verificado que não há consumidor,
  router ou modelo para equipamentos veiculares; publicá-los como catálogo estruturado exigirá
  análise própria de schema e migration. Nenhum schema ou banco foi alterado agora.
- A ficha offline não possui subsistema veicular e não ficou defasada.

## Confirmação

Aprovada por André em 15/08/2026.
