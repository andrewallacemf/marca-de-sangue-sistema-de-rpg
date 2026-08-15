---
data: 2026-08-15
tipo: decisao
status: aprovada
tema: [furtividade, alerta, alarme, percepcao, manual]
proposto-por: andre
---

# Curadoria do módulo de Furtividade

## Contexto

O módulo reunia uma regra utilizável, recomendações de arbitragem, resultados de playtest e uma
habilidade ainda aberta. A preparação do manual da plataforma também revelou ambiguidades sobre
cobertura total, repetição de testes de percepção, propagação de alerta e relação entre detecção e
alarme.

## Decisões

- O campo de visão governa somente detecção visual. Sons, odores e outros sentidos podem elevar o
  alerta ou permitir outra forma de detecção.
- Cobertura total impede detecção visual enquanto bloquear completamente a linha de visão.
- A ação-base Esconder-se continua sendo a fonte canônica de custo, requisitos, desvantagem natural
  e qualidade guardada. O módulo não repete nem altera essa resolução.
- O observador testa novamente quando surge uma exposição relevante, procura ativamente ou muda de
  posição; permanecer nas mesmas condições não gera um teste a cada turno.
- Detecção confirmada coloca o observador em alerta 5. Indícios insuficientes elevam o alerta em 1
  sem revelar automaticamente o personagem.
- A propagação de alerta não é recursiva no mesmo acontecimento. Cada inimigo afetado sobe no máximo
  1 nível por evento.
- O alarme global sobe 1 quando a ameaça é comunicada ou uma evidência concreta é encontrada. Um
  observador incapacitado antes de reagir não eleva o alarme.
- O narrador define o máximo do alarme para cada cena. Atingir esse máximo encerra a infiltração
  silenciosa e leva os inimigos a convergirem para a ameaça.
- Uma ação não exige outra rolagem de furtividade apenas por partir de um esconderijo. O narrador
  avisa antes quando uma ação criará exposição ou encerrará a condição de escondido.
- Sem mapa, o narrador declara linha de visão, direção, cobertura e distâncias relevantes antes das
  decisões dos jogadores.
- A habilidade proposta **Ocultar-se à vista** permanece fora do manual oficial até a definição de
  nome, custo, requisitos e progressão.

## Impacto

- `modulos/furtividade/README.md` passa a registrar a formulação estável do módulo.
- A página pública `/manual/modulos/furtividade` pode apresentar o procedimento para jogadores sem
  duplicar a ação Esconder-se nem os catálogos de habilidades e traços.
- Preparação de patrulhas, redução de alerta, desenho da cena e exemplos de arbitragem ficam para
  `/manual/narrador/modulos/furtividade`.
- Catálogo, ficha offline, engine, banco e migrations não são alterados: a plataforma ainda não
  automatiza campo de visão, alerta ou alarme.

## Confirmação

Aprovada por André em 15/08/2026.
