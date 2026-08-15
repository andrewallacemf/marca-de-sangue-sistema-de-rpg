---
data: 2026-08-15
tipo: decisao
status: aprovada
tema: [conflito-social, embate, malha, emocoes, pontuacao, manual]
proposto-por: andre
---

# Curadoria do módulo de Conflito social

## Contexto

O módulo já definia a malha de embate social, o valor-alvo de vitória e três ações, mas não
explicava como a posição na malha produzia pontos. Também tratava a duração como turnos, sem
distinguir a ação de cada participante das rodadas do embate, e usava Ponderar para uma ação
modular diferente da ação básica Mental de mesmo nome.

## Decisões

- A malha possui as trilhas Alegria, Ansiedade, Atração, Aversão, Tristeza e Surpresa.
- Cada trilha possui os campos `−2`, `−1`, `0`, `+1` e `+2`, do centro em descontrole à borda em
  controle pleno. Cada participante começa no campo neutro e permanece na trilha escolhida,
  salvo regra específica.
- Ao final de cada turno, o campo ocupado aplica seu valor com sinal à pontuação do lado do
  personagem.
- O valor-alvo continua sendo 5 vezes todos os participantes dos dois lados. A diferença entre
  as pontuações também encerra o embate ao alcançar esse valor.
- As durações simples, moderada e complexa passam a significar 3, 5 e 7 rodadas. No limite,
  vence a maior pontuação; o empate preserva a situação anterior.
- Cada ação move somente para um campo adjacente e custa `1 PA` mais o valor absoluto do campo
  de destino.
- Argumentar move um adversário; Recompor-se move quem age; Incentivar move um aliado e continua
  limitado a uma vez por turno.
- A ação modular Ponderar passa a se chamar **Recompor-se**, preservando Ponderar como nome
  exclusivo da ação básica Mental.
- Vencer resolve somente objetivos e consequências definidos antes do embate. A mecânica não
  cria controle mental nem remove a agência de personagens dos jogadores.
- As habilidades sociais experimentais permanecem fora do manual oficial até uma revisão
  própria contra a malha fechada e a definição de sua progressão.

## Impacto

- `modulos/conflito-social/README.md` passa a conter um procedimento completo e utilizável.
- A pendência que ligava movimento e pontuação é encerrada; a revisão da lista experimental
  continua aberta.
- A plataforma recebe apenas uma página pública curada. Ficha, engine, banco, migrations e ficha
  offline não automatizam a malha e não precisam de alteração nesta etapa.

## Confirmação

Aprovada por André em 15/08/2026.
