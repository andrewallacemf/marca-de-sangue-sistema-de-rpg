---
data: 2026-08-15
tipo: decisao
status: aprovada
tema: [veiculos, acoes, pontos-de-acao, manobra, reparo, manual]
proposto-por: andre
---

# Ações do módulo Veículos

## Contexto

As ações vieram do Alpha do Colapso antes do orçamento padrão de 10 PA. Emparelhar e Desemparelhar
usavam a velocidade em m/t diretamente como custo, o que produziria custos de dezenas de PA.
Capotagem, remoção de equipamento e tomada dos controles também não tinham procedimento suficiente.

## Decisões

- Operar veículo não consome o teto de 7 PA de locomoção pessoal.
- Reduções de custo têm piso de 1 PA, salvo gratuidade expressa.
- O deslocamento automático acontece no turno do piloto e pode ser dividido entre as ações dele.
  Acelerar ou frear atualiza o total devido sem desfazer distância já percorrida. Sem piloto capaz,
  o veículo fica Desgovernado.
- Acelerar, Frear e Manter velocidade permanecem, respectivamente, em 2 PA por +10 m/t, 1 PA por
  −10 m/t e 0 PA.
- Manobra segura custa 1 PA por 10 m/t, com mínimo 1, e gira até dois pontos.
- Manobra arriscada recebe uma desvantagem por PA faltante e por ponto além do segundo; na falha,
  não gira e deixa o veículo Desgovernado.
- Preparar esquiva custa 2 PA e concede vantagem contra uma colisão até o próximo turno.
- Emparelhar e Desemparelhar usam `(velocidade ÷ 10) + 1 PA`.
- Ocupar o mesmo espaço integra o deslocamento automático e não cobra PA adicional.
- Invasão e Embarque permanecem em 4 PA; o embarque aliado recebe vantagem.
- Reparos permanecem em 5 PA e a instalação continua acumulável.
- Arrancar equipamento custa 5 PA e o quebra; remoção cuidadosa ocorre fora de conflito.
- Movimento interno custa 1 PA para espaço vazio, 2 PA para troca cooperativa ou controles cedidos
  e 6 PA mais teste para tomar os controles à força.
- Dirigir com uma mão acrescenta 2 PA a cada manobra.

## Impacto

- A pendência de revisão das ações fica encerrada.
- Habilidades e traços que alteram essas ações continuam em curadoria própria.
- As listas estruturadas e o contrato não mudam nesta etapa.
- A plataforma e a ficha offline não executam ações veiculares; foi registrado apenas o aviso para
  a futura página do manual. Não há schema ou migration.

## Confirmação

Aprovada por André em 15/08/2026.
