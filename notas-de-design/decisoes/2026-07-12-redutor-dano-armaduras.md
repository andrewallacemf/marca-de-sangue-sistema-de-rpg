---
titulo: Redutor de dano das armaduras — rebalanceamento
tipo: regra
cenario: base
status: estavel
tags: [armaduras, escudos, redutor-de-dano, rebalanceamento]
atualizado-em: 2026-07-12
---

# Redutor de dano das armaduras (12/07/2026)

*Fecha o rebalanceamento defensivo iniciado com o dano das armas em dados. A escala
antiga de redutor de dano (1 a 12) anulava os novos danos em dados (1d4–1d12, dano
mínimo 1) — viraria imortalidade. Decisões do André.*

## Decisões

- **D1 — Escala por tipo.** O redutor de dano passa a ser **por tipo de armadura**,
  espelhando o redutor de `PA`: **Leve −1, Média −2, Pesada −3**.
- **D2 — Colapso para 3 tipos.** As 12 armaduras nomeadas (panos → placas) e os
  intermediários deram lugar a **3 armaduras genéricas** (leve/média/pesada) no
  sistema-base. Armaduras temáticas nomeadas (couro, cota de malha, placas, armaduras
  orientais…) podem voltar como itens de **cenário/módulo**, sempre encaixando num dos
  três tipos.
- **D3 — Incidência.** O redutor subtrai do **total do dano rolado** (não de cada dado),
  mantido o **dano mínimo 1**.
- **D4 — Escudos.** Mesma escala por tipo (Leve −1, Média −2, Pesada −3); o redutor de
  dano do escudo vale **quando o personagem defende com a guarda levantada**. Os escudos
  nomeados foram mantidos (variam no `PA` de uso, durabilidade e preço).

## Modelagem de armaduras por peça (consolidada)

Resolve a pendência aberta no rebalanceamento de PA: a armadura é montada por **peças**.
Cada peça = um **tipo** (define os redutores) + as **regiões que cobre** (tronco, braços,
pernas, cabeça). Redutores de `PA` somam; redutor de dano age só na região coberta;
durabilidade por peça. Qualquer armadura nova (de cenário) é aferida escolhendo tipo +
região — regra generativa, análoga à matriz de dano das armas.

## Efeito no balanceamento

Dano médio por golpe (armas): leve ~2,5; média 3,5–5; pesada 4,5–7,5. Com redutores
−1/−2/−3 na região coberta, a armadura **reduz parte** do golpe sem anulá-lo, e o custo
é o acúmulo de redutor de `PA` (mais peças = mais proteção, menos ações). A validar no
playtest.

> 💡 Durabilidade e preço por peça (Leve 10/20, Média 25/60, Pesada 50/140) são valores
> iniciais a calibrar.
