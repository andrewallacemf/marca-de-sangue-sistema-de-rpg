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

A **fadiga** representa o desgaste físico e mental que o personagem acumula ao se esforçar além do razoável. Ela funciona como um contador que só cresce durante o jogo: o personagem **recebe** pontos de fadiga de certos danos e efeitos, **paga** fadiga toda vez que usa uma [habilidade](05-habilidades.md), **paga** fadiga para realizar reações (como o ataque de oportunidade) e **pode assumir fadiga voluntariamente** para ganhar [pontos de ação](07-pontos-de-acao.md) extras no turno. O acúmulo traz penalidades e **só desaparece com descanso**.

**A fadiga é o limite do personagem.** É ela — não um contador de usos — que responde "quanto você aguenta". Por isso o seu total é igual ao total de [pontos de vida](../conflitos/03-saude-e-protecao.md#corpo-e-vida): um corpo aguenta tanto esforço quanto aguenta dano.

> ✅ Mecânica base decidida pelo grupo em 11/07/2026 — ver [notas-de-design/decisoes/2026-07-11-reunioes-de-mecanica.md](../../notas-de-design/decisoes/2026-07-11-reunioes-de-mecanica.md). **Reestruturada em 01/08/2026** (Daniel e André): a fadiga passou a ser o combustível das habilidades, o total passou a acompanhar a vida, e o passo da penalidade mudou de 5 para 10.

## Fadiga máxima

**A fadiga máxima de um personagem é igual ao seu total de pontos de vida.** Para o personagem padrão, com 6 membros de 10 `PV`, isso são **60 pontos de fadiga**.

Não é um número fixo do sistema: é **derivado do corpo**. Um personagem que perdeu vida máxima de forma permanente (ver [Saúde e Proteção](../conflitos/03-saude-e-protecao.md#dano-permanente-perda-de-vida-máxima)) também tem menos fadiga a gastar — o corpo castigado cansa antes. O mesmo vale para [ameaças](../oponentes/00-oponentes.md) com corpos maiores ou menores que o humano.

## Como se ganha fadiga

O personagem acumula pontos de fadiga quando:

- **Usa uma habilidade** — **cada uso custa fadiga igual ao `PA` da habilidade** (relação 1:1; ver [Habilidades](05-habilidades.md#custo-de-uso-pa--fadiga)). Ações comuns não custam fadiga: só habilidades;
- **Sofre dano** — **cada ponto de dano recebido (de qualquer tipo) gera 1 ponto de fadiga**. É por este caminho que o desgaste do combate pesa nos [`PA`](07-pontos-de-acao.md): o dano vira fadiga e a fadiga reduz os `PA` (ver [Penalidades por acúmulo](#penalidades-por-acúmulo)). Mudar o status do membro (encher, virar profundo) não gera fadiga por si só — apenas os pontos de dano (ver [Saúde e Proteção](../conflitos/03-saude-e-protecao.md#pontos-de-vida-e-dano));
- **Sofre danos ou efeitos que indicam fadiga** — armas, habilidades e regras específicas dizem quando infligem fadiga. Condições específicas de cenário também podem infligir ou custar fadiga (por exemplo, condições do cenário Colapso);
- **Realiza uma reação** (incluindo o ataque de oportunidade) — a reação não custa `PA`, mas custa **pontos de fadiga iguais ao custo em [`PA`](07-pontos-de-acao.md) que a ação realizada teria** (1 fadiga por 1 `PA`; ver [Reação](../conflitos/02-acoes-em-conflito.md#reação));
- **Gasta fadiga voluntariamente** para ganhar `PA` extras — os pontos gastos somam-se à sua fadiga acumulada (ver a seção seguinte).

## Uso voluntário: fadiga vira `PA` extra

No próprio turno, o personagem pode se esforçar além do limite e comprar pontos de ação com fadiga:

- **2 pontos de fadiga = 1 `PA` extra.**
- **Teto por turno:** os `PA` extras comprados não podem ultrapassar **metade do `PA` base** do personagem (arredondado para baixo). Traços específicos podem elevar esse teto (ver [Fôlego de ferro](../listas/tracos-base.md#fôlego-de-ferro)).

> *Exemplo: um personagem com **`PA` base 10** pode comprar até **+5 `PA`** em um turno, acumulando **10 pontos de fadiga** para isso.*

> ✅ Playtest 1 (18/07/2026): o teto do uso voluntário caiu de "todo o `PA`" para **metade do `PA` base** (era agressivo demais). Ver [relatório do playtest 1](../../notas-de-design/playtests/2026-07-18-playtest-cenario-1.md).

## Penalidades por acúmulo

A fadiga acumulada pesa no corpo: **a cada 10 pontos, o personagem perde 1 `PA`** por turno. Ao **alcançar a sua fadiga máxima, o personagem fica inconsciente**.

A regra é uma só e não depende de recalcular nada: **conte de 10 em 10**.

| Fadiga acumulada | Efeito |
|:---:|:---:|
| 0 a 9 | — |
| 10 a 19 | −1 `PA` |
| 20 a 29 | −2 `PA` |
| 30 a 39 | −3 `PA` |
| 40 a 49 | −4 `PA` |
| 50 a 59 | −5 `PA` |
| **60** *(ou a fadiga máxima do personagem)* | **Inconsciente** |

**Piso de `PA`:** nenhuma combinação de penalidades (fadiga, redutores de `PA` de armaduras etc.) reduz um personagem a menos de **3 `PA` por turno** — a não ser que ele esteja **inconsciente**.

**[Ameaças](../oponentes/00-oponentes.md) usam um passo mais curto:** perdem **1 `PA` a cada 5** pontos de fadiga, em vez de a cada 10 — é a principal diferença mecânica entre elas e um personagem de ficha completa. Ver [criando uma ameaça](../oponentes/01-criando-uma-ameaca.md#3-fadiga-e-queda).

> ✅ Reestruturado em 01/08/2026 (Daniel e André): a fadiga máxima deixou de ser o número fixo **50** e passou a acompanhar o total de `PV`; o passo da penalidade mudou de **5 para 10**, com o limiar livre de 10 absorvido pela própria escada. Efeito colateral aceito conscientemente: o teto de penalidade caiu de **−8** para **−5 `PA`**, deixando a fadiga menos punitiva do que era — a contrapartida é que agora ela também é gasta em toda habilidade. **Validar no playtest.**

> ✅ Rebalanceamento anterior, de 12/07/2026: piso unificado em **3 `PA`** (ver [decisões — rebalanceamento de PA](../../notas-de-design/decisoes/2026-07-12-rebalanceamento-pa-analise.md), D7 e D9).

## Recuperação

A fadiga **não diminui sozinha** com o passar das rodadas ou entre cenas: ela **só zera com [descanso](09-descanso.md)**. **Qualquer descanso — curto ou longo — recupera toda a fadiga acumulada** e livra o personagem das penalidades de acúmulo.

> ✅ Decidido em 11/07/2026 (ver [notas-de-design/decisoes/2026-07-11-terminologia-alcance-descanso.md](../../notas-de-design/decisoes/2026-07-11-terminologia-alcance-descanso.md), item A4).

## Referências

- [Habilidades](05-habilidades.md#custo-de-uso-pa--fadiga) — o custo de fadiga por uso (1:1 com o `PA`)
- [Descanso](09-descanso.md) — descanso curto e longo
- [Pontos de ação](07-pontos-de-acao.md)
- [Ações possíveis em um conflito](../conflitos/02-acoes-em-conflito.md#reação) — reação (custo em fadiga) e ataque de oportunidade
- [Oponentes](../oponentes/00-oponentes.md) — as ameaças têm fadiga, mas não a gastam
- [Decisões de 11/07/2026](../../notas-de-design/decisoes/2026-07-11-reunioes-de-mecanica.md)
- **Magia:** o [módulo Magia](../../modulos/magia/README.md) usa a fadiga como um dos três tipos de custo de ativação.
