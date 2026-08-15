---
data: 2026-08-15
tipo: decisao
status: aprovada
tema: [magia, fadiga, dano, vida-maxima, aptidao, experiencia, manual]
proposto-por: andre
---

# Curadoria do módulo Magia

## Contexto

O módulo possuía um núcleo de custo aprovado, mas as listas continuavam marcadas como proposta e
misturavam dano curável com as categorias superficial e profundo, aposentadas em 04/08/2026.
Também faltavam regras para pagar custos corporais e iniciar a Experiência de Magia.

## Decisões

- Magia é uma habilidade cujo custo de ativação substitui a fadiga comum da habilidade.
- Cada ativação cobra `PA` mais um único recurso: Fadiga, dano curável ou perda de vida máxima.
- `PV` pago como custo de magia não gera Fadiga, ignora proteção e é pago integralmente antes do
  teste, mesmo quando a magia falha.
- Dano curável só pode ser colocado em membro com espaço suficiente e não transborda para dano
  permanente. Perda de vida máxima é direta e pode invalidar membros ou matar.
- Aptidão Mágica e Experiência de Magia são opções independentes da campanha.
- A experiência temática começa no valor definido pelo cenário ou campanha, ou em `0` quando não
  houver definição. Uma recompensa pertence a uma única trilha, salvo concessão expressa.
- As oito magias e os quatro traços genéricos ficam oficiais com seus valores atuais, após a
  normalização de dano. Grito que Ajoelha passa a custar 3 de dano curável em todos os níveis e
  progride apenas no raio. Pele que Não Esquece converte 1 de perda de vida máxima em 1 de dano
  curável.
- Conteúdo próprio de Mukashi permanece fora da publicação do módulo até a curadoria do cenário.

## Impacto

- `modulos/magia/` passa a ser fonte estável e publicável.
- O contrato exporta as magias com `proposta: false`.
- A plataforma precisa reseedar o catálogo para refletir o novo estado, mas não precisa de schema
  ou migration. O manual recebe páginas separadas para jogador e narrador.
- A ficha offline não automatiza ativação de magia; o catálogo atualizado continua compatível com
  seu formato atual.

## Confirmação

Aprovada por André em 15/08/2026.
