---
titulo: Inimigos do kit de playtest
tipo: criatura
cenario: base
status: rascunho
tags: [inimigos, minions, npc, playtest, bestiario]
atualizado-em: 2026-07-28
---

# Inimigos do kit de playtest

Blocos de inimigo dos 6 cenários de playtest, consolidados em tabelas (uma linha por
**tipo** de inimigo; a coluna Qtd traz quantos entram no cenário). É a fonte que o
[contrato de conteúdo](../../contrato/README.md) exporta na chave `inimigos` do
`catalogo.json` — mudou aqui, rode `python contrato/exportar_catalogo.py` no mesmo
commit.

Formato do bloco (o mesmo do [guia do narrador](00-guia-do-narrador.md)): **PA**,
**arma (dano)** e **tática**. NPC comum é derrotado quando tronco ou cabeça ficam
incapacitados (10 de dano profundo) ou pelo limiar do tier.

> ⚠️ A DEFINIR: os tiers de queda (fraco = 10 · médio = 20 · forte = 30) são **proposta
> dos playtests 1 e 2** — a regra de minion não está fechada (ver `PENDENCIAS.md`,
> "Minions — tratamento único"). Os inimigos dos cenários 3 e 4 nunca tiveram tier
> anotado no kit; a coluna Queda deles fica vazia até a mesa definir.

## Cenário 1 — A Brecha na Muralha

*Medieval · 15 exp · defesa da brecha*

| Inimigo | Qtd | Queda | Entrada | PA | Arma | Dano | PA arma | Alcance | Red. dano | Tática |
|---------|-----|-------|---------|----|------|------|---------|---------|-----------|--------|
| Saqueador | 4 | médio (20) | Onda 1 (rod. 1: 3) e onda 2 (rod. 3: 1) | 10 | Faca (leve) ou machadinha (média) | 1d4 / 1d8 | 2 / 4 | 1 m | — | Avança pela brecha e tenta ultrapassar os defensores; se leva um golpe forte, pode recuar/desengajar; um deles pode empurrar um defensor para abrir passagem. |
| Bruto | 1 | forte (30) | Onda 2 (rod. 3) | 8 | Maça pesada (contundente) | 3d4 | 6 | 1 m | −1 tronco (peitoral leve) | Abre caminho na força; usa Encontrão/empurrar para tirar quem segura a linha; protege o Saqueador que corre para passar. |

## Cenário 2 — O Selo do Templo

*Mukashi · 30 exp · furto/infiltração*

| Inimigo | Qtd | Queda | Entrada | PA | Arma | Dano | PA arma | Alcance | Red. dano | Tática |
|---------|-----|-------|---------|----|------|------|---------|---------|-----------|--------|
| Sentinela | 3 | médio (20) | Patrulhas — Entrada, Sala dos Sinos e Jardim (uma cada) | 10 | Naginata curta (média, perfurante) | 1d6 | 4 | 1 m | — | Presa fácil por emboscada pelas costas; se o alarme sobe, os guardas se agrupam. |
| Capitão da Guarda | 1 | forte (30) | Santuário (junto ao selo) | 10 | Katana (média, versátil) | 1d8 CORT / 1d6 PERF | 4 | 1 m | −1 (peitoral leve) | Fica ao lado do selo; lidera o reagrupamento se o alarme sobe. |

## Cenário 3 — Correr no Ferro-Velho

*Colapso · 50 exp · fuga/perseguição*

| Inimigo | Qtd | Queda | Entrada | PA | Arma | Dano | PA arma | Alcance | Red. dano | Tática |
|---------|-----|-------|---------|----|------|------|---------|---------|-----------|--------|
| Ferrasca | 4 | — | Largada (atrás do grupo) | 10 | Cano de ferro (improvisada média, contundente) | 3 | 4 | 1 m | — | Perseguem em bloco; o mais rápido tenta agarrar quem ficou para trás. |
| Atirador Ferrasca | 1 | — | Retaguarda | 10 | Besta leve (média) | virote 1d4 | 4 | 7–10 m | — | Fica para trás e atira em quem está na retaguarda. |

## Cenário 4 — A Escolta da Chama

*Medieval · 70 exp · escolta (proteger o Arauto)*

| Inimigo | Qtd | Queda | Entrada | PA | Arma | Dano | PA arma | Alcance | Red. dano | Tática |
|---------|-----|-------|---------|----|------|------|---------|---------|-----------|--------|
| Bandido | 5 | — | Onda 1 (estrada: 3) e onda 2 (ponte: 2) | 10 | Espada curta (média, cortante) | 1d8 | 4 | 1 m | — | Onda 1 ataca antes da ponte; onda 2 segura o gargalo da ponte. |
| Arqueiro | 1 | — | Onda 2 (ponte) | 10 | Arco composto (média) | flecha 1d4 | 4 | 7–10 m | — | Atira no Arauto de longe, ignorando a linha de frente. |
| Chefe de bando | 1 | — | Onda 3 (perto do santuário) | 10 | Machado de batalha (pesada, cortante) | 1d12 | 6 | 1–2 m | −2 (peitoral médio) | Tenta agarrar/derrubar o Arauto. |

## Cenário 5 — O Coração do Colosso

*Épico · 100 exp · combate de chefe*

| Inimigo | Qtd | Queda | Entrada | PA | Arma | Dano | PA arma | Alcance | Red. dano | Tática |
|---------|-----|-------|---------|----|------|------|---------|---------|-----------|--------|
| Colosso de Pedra | 1 | chefe — 5 regiões de 20 cada | Chefe (desde o início) | 14 | Esmagada / Varredura / Tremor | 3d4 / 2d4 / — | 6 / 4 / — | 2–3 m | −3 pele de pedra (mín 1); Núcleo exposto = sem redução | Núcleo blindado (ataques com desvantagem) até destruir 1 braço (20 dano). Esmagada acerta +1 espaço adjacente; Varredura empurra 3 m; Tremor 1×/combate (todos: cai + −2 PA). Move 4 m. |
| Fragmento | 4 | especial — 10 PV por região | Surgem nas rodadas 2 e 4 (2 cada) | 8 | Soco de pedra (improvisada pesada) | 4 | 4 | 1 m | — | Distraem o grupo enquanto o Colosso age. |

## Cenário 6 — O Vale dos Atiradores

*Colapso · 50 exp · incursão sob fogo (teste de cobertura)*

| Inimigo | Qtd | Queda | Entrada | PA | Arma | Dano | PA arma | Alcance | Red. dano | Tática |
|---------|-----|-------|---------|----|------|------|---------|---------|-----------|--------|
| Olho de Chumbo | 3 | médio (20) | Espinhaços (elevação +2 m) | 10 | Rifle (pesada) | bala 1d8 | 6 | 3–20 m | cobertura própria | Atira com vantagem (elevação) de cobertura completa e se abaixa entre tiros; para silenciá-lo é preciso flanquear a rampa ou pegar a janela em que se expõe. |
| Cão da Gorja | 4 | médio (20) | Emboscada (manilha, no meio) | 10 | Cano de ferro (improvisada média, contundente) | 3 | 4 | 1 m | — | Surge no terreno difícil; agarra e prende quem estiver isolado. |
| Vigia-mor | 1 (opcional) | forte (30) | Retaguarda | 12 | Besta pesada | virote 1d8 | 6 | 8–12 m | — | Coordena os atiradores; some se o grupo tomar um espinhaço. |

## Referências

- Kits de cenário: [01](01-medieval-brecha-na-muralha.md) · [02](02-mukashi-selo-do-templo.md) ·
  [03](03-colapso-ferro-velho.md) · [04](04-medieval-escolta-da-chama.md) ·
  [05](05-epico-coracao-do-colosso.md) · [06](06-colapso-vale-dos-atiradores.md)
- [Guia do narrador](00-guia-do-narrador.md) (formato dos blocos e tiers de minion)
- Planilha de controle: `playtest/geracao-pdf/gerar_controle_inimigos.py` (gera o
  `Marca-de-Sangue-Controle-de-Inimigos.xlsx` com uma linha por inimigo individual)
