---
data: 2026-08-15
tipo: decisao
status: aprovada
tema: [veiculos, aptidoes, experiencia, progressao, colapso, plataforma]
proposto-por: andre
---

# Aptidão Veicular e Experiência de Veículos

## Contexto

As duas trilhas opcionais já possuíam um esqueleto inspirado no módulo Magia, mas faltavam escopo,
recuperação, separação de recompensas e valor inicial no Colapso. A ficha da plataforma possui
somente quatro aptidões e uma reserva de experiência, portanto não comporta essas opções sem uma
implementação transversal.

## Decisões

- Aptidão Veicular e Experiência de Veículos são opções independentes, ativadas para toda a campanha.
- Aptidão Veicular forma uma reserva própria. A próxima custa `n + 1 exp.`, substitui — nunca soma —
  a aptidão do atributo nos testes de ações e habilidades marcadas como `Veículo`, e recupera uma
  unidade no descanso curto ou todas no longo.
- Ataque comum realizado dentro de um veículo continua usando a aptidão do atributo. Uma habilidade
  veicular de ataque usa Aptidão Veicular quando a opção estiver ativa.
- Experiência de Veículos pertence ao personagem, acompanha trocas de veículo e compra somente
  habilidades, traços e Aptidão Veicular. Não compra veículos, equipamentos ou peças.
- Cada recompensa entra em uma única trilha, salvo duas recompensas expressamente distintas.
- O valor inicial padrão da reserva é 0. O Colapso ativa as duas opções e concede 8 pontos iniciais
  de Experiência de Veículos além dos 15 pontos comuns.
- As quatro combinações possíveis entre as opções continuam suportadas.

## Impacto

- As pendências de preço da Aptidão Veicular e de definição/valor inicial da Experiência de Veículos
  ficam encerradas.
- Na plataforma, `Atributo`, `Character.experiencia`, `CharacterAptidao`, o `.mds.json`, a engine de
  batalha e a recuperação de descansos hoje pressupõem quatro aptidões e uma experiência. Uma
  implementação exige análise de impacto, schema, migration e compatibilidade portátil; nenhum
  desses elementos foi alterado nesta decisão editorial.
- O manual pode publicar a regra antes da automação, deixando claro que a ficha ainda não executa as
  trilhas opcionais.

## Confirmação

Aprovada por André em 15/08/2026.
