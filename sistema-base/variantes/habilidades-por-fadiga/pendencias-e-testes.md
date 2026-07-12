---
titulo: "Variante fadiga — Pendências e roteiro de teste"
tipo: regra
cenario: base
status: rascunho
tags: [variante, experimental, pendencias, playtest]
atualizado-em: 2026-07-12
---

# Pendências e roteiro de teste

Reúne o que falta decidir/ajustar nesta variante. Há uma linha correspondente no
[PENDENCIAS.md](../../../PENDENCIAS.md) central.

## Números a ajustar no playtest (propostas da IA)

| Item | Proposta inicial | Observação |
|------|------------------|------------|
| Custo de fadiga por **uso de habilidade** | **= nível** da habilidade | Alternativa: custo fixo (ex.: 2). É o principal botão de ajuste. |
| **Limiar livre** de fadiga | **10** pontos sem penalidade | Subir se a fadiga acumular rápido demais com o custo por uso. |
| **Penalidade** por acúmulo | **−1 `PA` a cada 5** acima do limiar | Anda junto com o limiar. |
| **Inconsciência** | **40** pontos | Herdado do base; reavaliar com a nova curva. |
| **Piso de `PA`** | **4 `PA`** por turno | Igual ao base. |
| Compra de `PA` extra (**2 fadiga = 1 `PA`**) | manter | Testar se ainda compensa, agora que a fadiga é combustível de habilidade. |

## Decisões de design a confirmar

- **Fim da fusão** de habilidades: confirmar que a força só vir do nível não empobrece as builds.
- **Aptidões fora** da fadiga: confirmado na proposta (mantêm custo próprio; recuperação normal do base).
- **Só nível** (sem usos): confirmar que o acompanhamento na barra de fadiga é confortável na mesa.

## Extensões opcionais (testar separadamente)

- **A — Dois tipos de fadiga** (cansaço × dano): ligar só depois que o núcleo estiver calibrado. Definir recuperação por turno e o que conta como "fadiga de dano".
- **B — Fadiga em contratestes** (+ ação de descansar em batalha + limiar maior): **discutir com o Gabriel antes de testar**. Definir custos.

## Roteiro sugerido de teste

1. Rodar **1–2 combates só com o núcleo** (níveis + `PA` + fadiga), sem extensões.
2. Observar: (a) a fadiga vira um **limitador natural** do uso de habilidades? (b) o
   limiar (10) e o passo (a cada 5) estão na **intensidade certa**? (c) a **barra de fadiga**
   na ficha é fácil de controlar (o dado ajuda)?
3. Anotar os ajustes de número e refazer.
4. Só então **ligar uma extensão por vez** (A, depois B) e repetir.
