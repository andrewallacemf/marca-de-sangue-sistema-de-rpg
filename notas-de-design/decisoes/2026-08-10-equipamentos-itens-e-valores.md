---
data: 2026-08-10
tipo: decisao
status: aprovada
tema: [equipamentos, armas, municoes, protecoes, itens, manual]
proposto-por: andre
---

# Equipamentos, itens e valores oficiais

## Contexto

A curadoria do manual oficial da plataforma encontrou dano, durabilidade e preços já usados nos
catálogos e nas fichas, mas ainda descritos como propostas de calibração. Também encontrou um grupo
de armas pesadas que misturava armas contundentes com lâminas e uma lança montada marcada para uma
exceção de carga que ainda não existe no sistema.

## Decisões

- A matriz de dano vigente é oficial para todos os tamanhos: cortante `1d8/1d12/2d8`, perfurante
  `1d6/1d8/1d10` e contundente `2d4/3d4/4d4`.
- Os danos das munições vigentes são oficiais: pedras `1d4−1`, dardo `1d4`, flecha de madeira
  `1d6`, flecha de ferro `1d10` e bala de pólvora `1d12`.
- Os valores atuais de durabilidade de armas, armas improvisadas, rede, armaduras e escudos são
  oficiais.
- Os preços atuais de armas, munições, proteções e itens gerais são oficiais. Podem ser alterados
  futuramente por uma nova decisão de balanceamento, sem serem tratados como rascunho enquanto
  estiverem publicados.
- A lança montada permanece uma arma pesada perfurante de `1d10`; não recebe exceção de carga até
  que essa mecânica seja criada.
- Mangual pesado, Mangual Atroz, Maça Pesada e Clava pesada formam uma linha contundente de `4d4`.
  Espada de duas lâminas, Naginata e Nagamaki permanecem cortantes/perfurantes.
- Os 37 itens gerais passam a integrar o contrato estruturado para abastecer o manual e a
  plataforma sem transcrição manual.

## Impacto nos consumidores

- O `catalogo.json` ganha a coleção `itens` e passa a exportar 50 linhas de armas após a separação
  do grupo pesado.
- A plataforma aceita o tipo `ITEM`, sem misturá-lo aos seletores de armas e proteções, e publica
  páginas separadas para Equipamentos e Itens pela decisão 066. A aplicação da migration e o seed
  de produção permanecem no backlog operacional daquele repo.
- A ficha offline continua consumindo as coleções anteriores normalmente; integrar a nova coleção
  de itens ao inventário pode ser feito em uma evolução própria.

## Confirmação

Aprovada por André em 10/08/2026.
