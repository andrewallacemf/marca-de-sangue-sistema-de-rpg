---
data: 2026-07-17
pessoa: andre
ferramenta: claude-cowork
objetivo: criar 5 micro-cenários de playtest com fichas pré-prontas em faixas de exp variadas
arquivos-alterados:
  - playtest/cenarios/00-guia-do-narrador.md (novo)
  - playtest/cenarios/01-medieval-brecha-na-muralha.md (novo)
  - playtest/cenarios/02-mukashi-selo-do-templo.md (novo)
  - playtest/cenarios/03-colapso-ferro-velho.md (novo)
  - playtest/cenarios/04-medieval-escolta-da-chama.md (novo)
  - playtest/cenarios/05-epico-coracao-do-colosso.md (novo)
  - playtest/Marca-de-Sangue-Kit-de-Cenarios.pdf (novo)
  - playtest/geracao-pdf/gerar_kit_cenarios.py (novo)
---

# Sessão: kit de 5 micro-cenários de playtest

## Prompts dados

> criar micro-cenários onde a gente vai entregar personagens pré-prontas para os
> jogadores (...) cenário curtíssimo (...) medieval, pós-apocalíptico, fantasia medieval
> japonesa (...) estratégias táticas diferentes.
> 1. narrador + 3 ou 4 jogadores. 2. 5 cenários, todos usam a malha (não só p/ combate).
> 3. fichas de 15/30/50/70/100 exp. 4. sem a fadiga alternativa nem a lista social experimental.

## O que foi feito

Cinco cenários, cada um com foco tático próprio e fichas complementares:

1. **Medieval — A Brecha na Muralha** (15 exp, 3 jogadores) — vencer a batalha; combate
   direto, ensina o básico.
2. **Mukashi — O Selo do Templo** (30 exp, 4) — pegar algo e sair; furtividade e
   posicionamento (malha p/ linhas de visão).
3. **Colapso — Correr no Ferro-Velho** (50 exp, 3) — fugir; mobilidade, terreno difícil,
   fadiga sob perseguição.
4. **Medieval — A Escolta da Chama** (70 exp, 4) — escoltar um NPC frágil; defesa,
   Protetor, controle de área.
5. **Épico — O Coração do Colosso** (100 exp, 4) — vencer um chefe; sinergia completa
   (tanque/dano/controle/suporte).

Cada cenário traz: situação, mapa da malha (ASCII), inimigos enxutos (PA/arma/tática),
objetivo (vitória/derrota) e uma "dica de teste". As **18 fichas** trazem PA já com
redutores de armadura, equipamento, características compradas (com custo em exp) e um
bloco "Como jogar".

## Verificação

Script conferiu a soma de exp de cada ficha contra o orçamento — **as 18 batem
exatamente** (15/30/50/70/100). Corrigida a Kaede (estava 29, +1 aptidão ágil → 30).
Gerado o PDF do kit (23 páginas) com o mesmo pipeline do manual (script versionado em
`playtest/geracao-pdf/gerar_kit_cenarios.py`).

## Observações / pendências de teste

O playtest deve calibrar: custo de ataque por peso vs. piso de 3 PA; se Atordoar +
maestria contundente estrangula bem os PA de um chefe; burst de Emboscador+Golpe surpresa;
sustentação do suporte contra ataques de área; e fadiga/terreno na perseguição. Boss e
NPCs usam blocos simplificados (derrotados ao incapacitar tronco/cabeça).
