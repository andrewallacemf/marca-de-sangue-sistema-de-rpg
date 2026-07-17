---
titulo: Conversão do dano das armas — de valores fixos para dados
tipo: regra
cenario: base
status: estavel
tags: [dano, armas, dados, rebalanceamento]
atualizado-em: 2026-07-12
---

# Conversão do dano das armas — fixo → dados (12/07/2026)

*Executa a decisão de 11/07 (armas voltam a ter dano variável), com as diretrizes
afinadas com o André. A tabela resultante é uma **proposta 💡** para o grupo revisar
arma por arma.*

## Regra de conversão

O dano fixo atual vira o **dano máximo** de um dado; arredonda-se **para cima** ao dado
padrão mais próximo (mais mortal). O **número de dados** depende do tipo de dano:

- **Cortante / perfurante (e projéteis): 1 dado** — amplitude maior, mais extremos.
- **Contundente (arma com a propriedade `CONT.`): 2 dados** — tende à média, extremos raros.

### Piso (mantém valor fixo, sem dado)

- Dano **0** (ex.: Rede) → `0`.
- Dano **1** (ataque desarmado) e **2** (munições leves, armas improvisadas leves) → fixos.

### 1 dado (cortante / perfurante / projétil)

| Dano fixo | Dado |
|:--:|:--:|
| 3 | `1d4` |
| 4 | `1d4` |
| 5 | `1d6` |
| 6 | `1d6` |
| 7 | `1d8` |
| 8 | `1d8` |
| 10 | `1d10` |

### 2 dados (contundente)

| Dano fixo | Dados | Máx · média |
|:--:|:--:|:--:|
| ≤ 4 | `1d4` | (baixo demais para 2 dados) |
| 5–6 | `2d4` | 8 · 5 |
| 7–8 | `1d4+1d6` | 10 · 6 |
| 10 | `2d6` | 12 · 7 |

### Versátil (dois valores ✋/🤲)

Converte cada empunhadura separadamente, pela mesma regra do tipo da arma.
Ex.: cortante 4/7 → `1d4 / 1d8`; contundente 4/7 → `1d4 / 1d4+1d6`.

### Regra de desempate — armas com mais de um tipo de dano

Se a arma tem `CONT.` **e** também `CORT.`/`PERF.`, prevalece a regra **contundente**
(2 dados). Esses casos ficam **marcados para revisão** do grupo (podem preferir 1 dado
pela lâmina).

> ⚠️ A DEFINIR (revisão do grupo): confirmar arma por arma; em especial as **mistas**
> (contundente + cortante/perfurante) e se os contundentes ≥7 devem mesmo escalar o teto
> (1d4+1d6 = máx 10) ou manter o teto do valor antigo.
