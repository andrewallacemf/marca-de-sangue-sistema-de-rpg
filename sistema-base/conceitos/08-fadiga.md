---
titulo: Fadiga
tipo: regra
cenario: base
status: revisao
tags: [fadiga, recurso, pontos-de-acao, descanso]
atualizado-em: 2026-07-11
---

# Fadiga

## Resumo

A **fadiga** representa o desgaste físico e mental que o personagem acumula ao se esforçar além do razoável. Ela funciona como um contador que só cresce durante o jogo: o personagem **recebe** pontos de fadiga de certos danos e efeitos, **paga** fadiga para realizar ataques de oportunidade e **pode assumir fadiga voluntariamente** para ganhar [pontos de ação](07-pontos-de-acao.md) extras no turno. O acúmulo traz penalidades e **só desaparece com descanso**.

> ✅ Mecânica base decidida pelo grupo em 11/07/2026 — ver [notas-de-design/decisoes/2026-07-11-reunioes-de-mecanica.md](../../notas-de-design/decisoes/2026-07-11-reunioes-de-mecanica.md).

## Como se ganha fadiga

O personagem acumula pontos de fadiga quando:

- **Sofre danos ou efeitos que indicam fadiga** — armas, habilidades e regras específicas dizem quando infligem fadiga. Condições específicas de cenário também podem infligir ou custar fadiga (por exemplo, condições do cenário Colapso);
- **Realiza um ataque de oportunidade** — a ação não custa `PA`, mas custa **pontos de fadiga iguais ao custo em [`PA`](07-pontos-de-acao.md) que a ação teria** (ver [Ações possíveis em um conflito](../conflitos/02-acoes-em-conflito.md));
- **Gasta fadiga voluntariamente** para ganhar `PA` extras — os pontos gastos somam-se à sua fadiga acumulada (ver a seção seguinte).

## Uso voluntário: fadiga vira `PA` extra

No próprio turno, o personagem pode se esforçar além do limite e comprar pontos de ação com fadiga:

- **2 pontos de fadiga = 1 `PA` extra.**
- **Teto por turno:** os `PA` extras comprados não podem ultrapassar o **total de `PA` do personagem**.

> *Exemplo: um personagem com **7 `PA` totais** pode comprar até **+7 `PA`** em um turno, acumulando **14 pontos de fadiga** para isso.*

## Penalidades por acúmulo

A fadiga acumulada pesa no corpo: **a cada 10 pontos acumulados, o personagem sofre −1 `PA`**.

| Fadiga acumulada | Penalidade em `PA` |
|:---:|:---:|
| 0 a 9 | — |
| 10 a 19 | −1 `PA` |
| 20 a 29 | −2 `PA` |
| 30 a 39 | −3 `PA` |
| ...e assim por diante | −1 `PA` adicional a cada 10 pontos |

> 💡 O rebalanceamento experimental do [PLANO-DE-MELHORIAS.md](../../PLANO-DE-MELHORIAS.md) (Lote 3) pode mudar essa razão para **a cada 5 pontos**, acompanhando a proposta de dobrar os `PA` dos personagens. Até o playtest validar os números, vale a tabela acima.

## Recuperação

A fadiga **não diminui sozinha** com o passar das rodadas ou entre cenas: ela **só zera com descanso**. Ao realizar um descanso, o personagem elimina toda a fadiga acumulada e se livra das penalidades de acúmulo.

## Referências

- [Pontos de ação](07-pontos-de-acao.md)
- [Ações possíveis em um conflito](../conflitos/02-acoes-em-conflito.md) — ataque de oportunidade e reação
- [Decisões de 11/07/2026](../../notas-de-design/decisoes/2026-07-11-reunioes-de-mecanica.md)
- **Magia:** a hipótese de magias custarem fadiga foi **adiada** para a fase de cenários — ver [notas-de-design/variantes-pendentes.md](../../notas-de-design/variantes-pendentes.md) (item 4).
