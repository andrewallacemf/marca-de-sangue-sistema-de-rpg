---
data: 2026-08-10
tipo: decisao
status: aprovada
tema: [tracos, maestrias, aspectos, manual]
proposto-por: andre
---

# Curadoria dos traços do sistema-base

## Contexto

A preparação do catálogo público encontrou três inconsistências entre a lista resumida, os
detalhes e o contrato: `Pele de ferro` possuía seção completa mas faltava na tabela de Aspectos;
as maestrias de armadura tinham a regra descrita no texto geral, porém eram exportadas sem efeito;
e o gatilho de `Protetor` dizia que a própria personagem precisava ser acertada, contradizendo o
efeito de proteger um aliado.

## Decisões

- O manual público apresenta os 50 traços oficiais do sistema-base: 14 Técnicas, 11 Maestrias e
  25 Aspectos. As nove entradas experimentais continuam fora da publicação oficial.
- `Pele de ferro` integra a tabela de custos dos Aspectos com custo de `4 exp.`.
- As três maestrias de armadura exportam o efeito geral já aprovado: sem a maestria
  correspondente, o redutor de `PA` da armadura é dobrado; com a maestria, vale o valor normal.
- O gatilho de `Protetor` é **um aliado adjacente ser acertado por um ataque**. Os requisitos
  continuam exigindo distância de 1 metro e uso de escudo.
- Maestrias continuam usando custo escalonado conjunto; o valor `1 exp.` da tabela representa
  somente a primeira maestria.

## Impacto na plataforma

A página `/manual/jogador/recursos/tracos` publica o catálogo sob a decisão 065 da plataforma.
Não há automação nova para os efeitos e nenhuma mudança de schema ou engine é necessária. O banco
do ambiente precisa receber o catálogo regenerado antes da publicação.

## Confirmação

Aprovada por André em 10/08/2026.
