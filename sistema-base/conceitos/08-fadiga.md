---
titulo: Fadiga
tipo: regra
cenario: base
status: revisao
tags: [fadiga, recurso, pontos-de-acao, descanso, reacao]
atualizado-em: 2026-07-12
---

# Fadiga

## Resumo

A **fadiga** representa o desgaste físico e mental que o personagem acumula ao se esforçar além do razoável. Ela funciona como um contador que só cresce durante o jogo: o personagem **recebe** pontos de fadiga de certos danos e efeitos, **paga** fadiga para realizar reações (como o ataque de oportunidade) e **pode assumir fadiga voluntariamente** para ganhar [pontos de ação](07-pontos-de-acao.md) extras no turno. O acúmulo traz penalidades e **só desaparece com descanso**.

> ✅ Mecânica base decidida pelo grupo em 11/07/2026 — ver [notas-de-design/decisoes/2026-07-11-reunioes-de-mecanica.md](../../notas-de-design/decisoes/2026-07-11-reunioes-de-mecanica.md).

> 🧪 Existe uma mecânica alternativa em avaliação que altera esta regra — ver [09-mecanica-alternativa-habilidades-e-fadiga.md](09-mecanica-alternativa-habilidades-e-fadiga.md).

## Como se ganha fadiga

O personagem acumula pontos de fadiga quando:

- **Sofre dano superficial** — cada ponto de dano superficial recebido gera **1 ponto de fadiga**. É por este caminho que o desgaste físico do combate pesa nos [`PA`](07-pontos-de-acao.md): o dano vira fadiga e a fadiga reduz os `PA` (ver [Penalidades por acúmulo](#penalidades-por-acumulo)). O dano **profundo** e o **permanente** não geram fadiga — suas consequências são a incapacitação/invalidação do membro (ver [Saúde e Proteção](../conflitos/03-saude-e-protecao.md#penalidades-por-perda-de-vida));
- **Sofre danos ou efeitos que indicam fadiga** — armas, habilidades e regras específicas dizem quando infligem fadiga. Condições específicas de cenário também podem infligir ou custar fadiga (por exemplo, condições do cenário Colapso);
- **Realiza uma reação** (incluindo o ataque de oportunidade) — a reação não custa `PA`, mas custa **pontos de fadiga iguais ao custo em [`PA`](07-pontos-de-acao.md) que a ação realizada teria** (1 fadiga por 1 `PA`; ver [Reação](../conflitos/02-acoes-em-conflito.md#reação));
- **Gasta fadiga voluntariamente** para ganhar `PA` extras — os pontos gastos somam-se à sua fadiga acumulada (ver a seção seguinte).

## Uso voluntário: fadiga vira `PA` extra

No próprio turno, o personagem pode se esforçar além do limite e comprar pontos de ação com fadiga:

- **2 pontos de fadiga = 1 `PA` extra.**
- **Teto por turno:** os `PA` extras comprados não podem ultrapassar o **total de `PA` do personagem**.

> *Exemplo: um personagem com **10 `PA` totais** pode comprar até **+10 `PA`** em um turno, acumulando **20 pontos de fadiga** para isso.*

## Penalidades por acúmulo

A fadiga acumulada pesa no corpo: a partir de **10 pontos**, o personagem sofre **−1 `PA` a cada 5 pontos acumulados**. Ao alcançar **50 pontos de fadiga, o personagem fica inconsciente**.

| Fadiga acumulada | Efeito |
|:---:|:---:|
| 0 a 9 | — |
| 10 a 14 | −1 `PA` |
| 15 a 19 | −2 `PA` |
| 20 a 24 | −3 `PA` |
| 25 a 29 | −4 `PA` |
| 30 a 34 | −5 `PA` |
| 35 a 39 | −6 `PA` |
| 40 a 44 | −7 `PA` |
| 45 a 49 | −8 `PA` |
| **50** | **Inconsciente** |

**Piso de `PA`:** nenhuma combinação de penalidades (fadiga, redutores de `PA` de armaduras etc.) reduz um personagem a menos de **3 `PA` por turno** — a não ser que ele esteja **inconsciente**.

> ✅ Rebalanceamento de 12/07/2026: fadiga máxima **50** (inconsciência); **−1 `PA` a cada 5 pontos a partir de 10**; piso unificado em **3 `PA`** (ver [decisões — rebalanceamento de PA](../../notas-de-design/decisoes/2026-07-12-rebalanceamento-pa-analise.md), D7 e D9).

## Recuperação

A fadiga **não diminui sozinha** com o passar das rodadas ou entre cenas: ela **só zera com [descanso](10-descanso.md)**. **Qualquer descanso — curto ou longo — recupera toda a fadiga acumulada** e livra o personagem das penalidades de acúmulo.

> ✅ Decidido em 11/07/2026 (ver [notas-de-design/decisoes/2026-07-11-terminologia-alcance-descanso.md](../../notas-de-design/decisoes/2026-07-11-terminologia-alcance-descanso.md), item A4).

## Referências

- [Descanso](10-descanso.md) — descanso curto e longo
- [Pontos de ação](07-pontos-de-acao.md)
- [Ações possíveis em um conflito](../conflitos/02-acoes-em-conflito.md#reação) — reação (custo em fadiga) e ataque de oportunidade
- [Decisões de 11/07/2026](../../notas-de-design/decisoes/2026-07-11-reunioes-de-mecanica.md)
- **Magia:** a hipótese de magias custarem fadiga foi **adiada** para a fase de cenários — ver [notas-de-design/variantes-pendentes.md](../../notas-de-design/variantes-pendentes.md) (item 4).
