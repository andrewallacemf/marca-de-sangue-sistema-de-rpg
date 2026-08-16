---
data: 2026-08-15
tipo: decisao
status: aprovada
tema: [veiculos, tracos, pecas, reparo, contrato]
proposto-por: andre
---

# Traços de Veículos

## Contexto

Os dez traços do Alpha conservavam nomes de automóvel, custos divergentes e efeitos incompatíveis
com as regras revisadas. Baliza concedia imunidade ampla, Direção defensiva e Manobrista se
sobrepunham, e nenhum traço genérico interagia com peças porque os equivalentes dependiam da sucata
do Colapso.

## Decisões

- A lista oficial possui onze traços passivos, sem níveis: Estacionamento preciso, Controles
  adaptados, Condução todo-terreno, Desmontagem cuidadosa, Direção defensiva, Entrada protegida,
  Reparo minucioso, Manobrista, Trabalho em movimento, Consumo econômico e Reaproveitador.
- Estacionamento preciso permite estacionar junto a obstáculos fisicamente compatíveis, mas não
  concede imunidade nem atravessa matéria.
- Controles adaptados escolhe um membro ao ser comprado; não torna possíveis outras ações físicas
  que dependam daquele membro. Condução todo-terreno ajuda apenas em terreno transitável.
- Direção defensiva concede vantagem ao ocupar com cuidado; Manobrista amplia para três pontos a
  orientação de uma Manobra segura até 20 m/t.
- Entrada protegida concede uma guarda após Invasão ou Embarque, no máximo uma vez por rodada.
- Reaproveitador reduz em uma peça o consumo de um reparo, com mínimo de uma, e não afeta fabricação.
- Cenários podem usar os nomes antigos como vocabulário, sem duplicar entradas no catálogo.

## Impacto

- A pendência do traço genérico de peças e a revisão conjunta de habilidades/traços ficam encerradas.
- Os onze traços passam a `proposta: false` no contrato.
- A plataforma atualmente ignora `veiculos.tracos`. Publicação estruturada exigirá análise de
  persistência, seed, router e nomes legados; nenhum schema, migration, seed ou banco foi alterado.
- Catador e Serralheiro e soldador continuam no Colapso porque dependem da economia de sucata.

## Confirmação

Aprovada por André em 15/08/2026.
