---
data: 2026-07-11
pessoa: andre
ferramenta: claude-cowork
objetivo: analisar as transcrições das reuniões (mesa + André & Daniel) e transformar em plano de melhorias e registro de decisões
arquivos-alterados:
  - PLANO-DE-MELHORIAS.md
  - notas-de-design/decisoes/2026-07-11-reunioes-de-mecanica.md
  - notas-de-design/variantes-pendentes.md
  - PENDENCIAS.md
  - README.md
---

# Sessão: transcrições das reuniões → plano de melhorias

## Prompts dados

> Eu e o Daniel fizemos uma série de conversas que eu vou colocar a transcrição aqui pra
> você. A gente já começou a discutir algumas pendências que você apontou. Decidimos
> deixar outras pra fazer numa fase seguinte e discutimos algumas coisas que podem mexer
> nas estruturas que você criou, baseadas num conceito de camadas ou de regras que se
> baseiam em módulos, de mecânicas, coleções de recursos e na forma como eles interagem
> com o cenário e com o sistema base. Eu vou enviar todas as transcrições para que você
> possa fazer uma análise detalhada e identificar cada um dos tópicos que a gente
> comentou, pra colocar no nosso plano de melhorias que a gente precisa realizar tanto
> na estrutura que você construiu pra registro do sistema quanto pra alteração do
> sistema em si.

Anexos: 6 transcrições (gravação da mesa "Conversa sobre mecânicas" + 5 conversas de
11/07: 11h13, 11h23, 11h35, 12h05, 12h08).

## O que foi feito

- Leitura integral das 6 transcrições e extração de todos os tópicos.
- Criado o **registro formal de decisões** (`notas-de-design/decisoes/2026-07-11-reunioes-de-mecanica.md`):
  9 decisões fechadas (conflito social 5 pts, fadiga definida, desvantagem natural +
  traços de conhecimento, reação, posicionamento, armas com dado, propriedades de armas,
  traço desarmado, armadura), 4 experimentais (PA/movimento/XP/fadiga-5 — playtest),
  3 hipóteses registradas e 6 adiamentos explícitos, além da nova arquitetura
  **sistema-base → módulos → coleções → cenários**.
- Criado o **PLANO-DE-MELHORIAS.md** com 5 lotes ordenados por dependência + o processo
  combinado de mudança de regra com IA (propõe → aprova → aplica → ajuste fino).
- Atualizados: `variantes-pendentes.md` (itens 1, 2 e 5 marcados como decididos; item 3
  virou investigação), `PENDENCIAS.md` (pendências decididas substituídas por ações do
  plano) e o mapa do README.

## Decisões tomadas

Nenhuma decisão nova da IA — esta sessão só **registrou** as decisões do grupo. A única
escolha editorial: separar "decisões" (o quê/por quê) do "plano" (execução em lotes).

## Pendências criadas

- Executar Lote 1 do plano; nome do traço de conhecimento; revisão do perfurante;
  investigação das aptidões; rebalanceamento aguardando playtest (ver PENDENCIAS.md).

## Observações

A reestruturação em módulos (Lote 2) **muda o plano da Fase 2 da importação do Notion**:
o Colapso deve nascer já separado em cenário + módulos (veículos, armas de fogo, mutações).
