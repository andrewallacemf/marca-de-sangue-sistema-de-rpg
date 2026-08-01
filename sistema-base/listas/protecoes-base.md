---
titulo: Lista base de Proteções (Armaduras e escudos)
tipo: regra
cenario: base
status: revisao
tags: [protecoes, armaduras, escudos]
atualizado-em: 2026-07-12
---

# Lista base de Proteções (Armaduras e escudos)

> ✅ Rebalanceamento de 12/07/2026: as armaduras foram **colapsadas em 3 tipos genéricos** (leve/média/pesada). Tanto o **redutor de dano** quanto o **redutor de `PA`** passam a ser **por tipo — Leve −1, Média −2, Pesada −3** (a escala antiga de dano ia a 12, alta demais para o dano em dados). Armaduras temáticas nomeadas (couro, cota de malha, placas…) podem voltar como itens de **cenário/módulo**. Ver [decisões — redutor de dano das armaduras](../../notas-de-design/decisoes/2026-07-12-redutor-dano-armaduras.md).

### Como funcionam as armaduras (peças por região)

Você monta sua proteção com **peças**. Cada peça é de um **tipo** (leve/média/pesada) e **cobre uma ou mais regiões** do corpo (tronco, braço direito, braço esquerdo, perna direita, perna esquerda, cabeça). O tipo define os redutores; a região define **onde** a peça protege.

- O **redutor de dano** da peça só age quando o golpe acerta uma região que ela cobre.
- Os **redutores de `PA`** de todas as peças (e escudos) vestidas **somam** (respeitando o piso de 3 `PA`).
- Cada peça tem **durabilidade própria por região** e perde 1 quando **absorve** um golpe naquela região (ver [Durabilidade](#durabilidade-das-proteções)).

> 📦 **As listas de peças (armaduras por tipo) e de escudos ficam no módulo
> [Proteções](../../modulos/protecoes/README.md).** Aqui no núcleo fica só o **sistema**: como as
> armaduras funcionam, os redutores por tipo (Leve −1 / Média −2 / Pesada −3), o dano mínimo 1, o
> uso/registro e a durabilidade.

## Uso e registro das proteções

Regra consolidada nas reuniões de 11/07/2026 (ver [decisões — reuniões de mecânica](../../notas-de-design/decisoes/2026-07-11-reunioes-de-mecanica.md), item 9, e [decisões — terminologia, alcance e descanso](../../notas-de-design/decisoes/2026-07-11-terminologia-alcance-descanso.md), item A1):

- **Redução de dano:** o **redutor de dano** da peça (Leve −1, Média −2, Pesada −3) é subtraído do **total do dano rolado** de cada golpe recebido **numa região que ela cobre**.
- **Dano mínimo 1:** o redutor **nunca reduz o dano abaixo de 1** — se o ataque acertou, o alvo sofre no mínimo 1 ponto de dano, mesmo que a redução supere o dano rolado.
- **Redutor de `PA` — permanente e cumulativo:** enquanto uma proteção está vestida, seu **redutor de `PA`** (Leve −1, Média −2, Pesada −3) é descontado do **total de `PA` do turno**, mesmo que o personagem não seja atacado. Os redutores de **todas as peças e escudos** vestidos **somam** (ex.: calça leve −1, peitoral leve −1, capacete médio −2 e escudo leve −1 = **−5 `PA`**). Respeitando sempre o **piso de 3 `PA`** por turno (ver [Pontos de ação](../conceitos/07-pontos-de-acao.md)).
- **Sem maestria, o redutor de `PA` dobra.** O valor da tabela pressupõe treinamento. Quem veste uma peça de um tipo em que **não tem [maestria](tracos-base.md#maestrias-de-armadura--o-que-fazem)** paga o **dobro** do redutor de `PA` daquela peça — a conta é feita peça a peça, pelo tipo de cada uma.
- **Ao remover ou destruir uma proteção**, o redutor de `PA` dela só deixa de ser aplicado **a partir do próximo turno** — não no mesmo turno.
- **Durabilidade das proteções:** ver a regra completa em [Durabilidade das proteções](#durabilidade-das-proteções) — a peça só perde durabilidade quando **efetivamente absorve** um golpe.
- **Registro na ficha:** a proteção é anotada **uma única vez** (nome, redução de dano e redutor de `PA`), junto com a **distribuição por locais** do corpo e a durabilidade individual de cada local.
- **Espaços de proteção:** a ficha possui **três espaços de proteção** (ex.: superior, inferior e escudo).
- **Sem empilhamento:** não é possível empilhar armaduras no mesmo local — **vale a de maior proteção**.

**Redutor de `PA` por tipo, com e sem maestria:**

| Tipo da peça | Redutor de dano | Redutor de `PA` **com** maestria | Redutor de `PA` **sem** maestria |
|---|:--:|:--:|:--:|
| **Leve** | −1 | **−1 `PA`** | −2 `PA` |
| **Média** | −2 | **−2 `PA`** | −4 `PA` |
| **Pesada** | −3 | **−3 `PA`** | −6 `PA` |

> ✅ Revisado em 12/07/2026 (rebalanceamento de PA): redutor de `PA` por tipo e cumulativo por peça; penalidade permanente que sai no próximo turno ao remover/destruir a proteção (ver [decisões — rebalanceamento de PA](../../notas-de-design/decisoes/2026-07-12-rebalanceamento-pa-analise.md)). O dano mínimo 1 e a redução por região seguem de 11/07/2026.

> ✅ Decidido em 01/08/2026 (Daniel e André): a coluna **sem maestria** resolveu a pendência das
> [maestrias de armadura](tracos-base.md#maestrias-de-armadura--o-que-fazem), que estavam
> compráveis mas não faziam nada.

## Durabilidade das proteções

Toda peça de armadura e todo escudo têm **durabilidade** (coluna nas tabelas). Ela cai **`1` por
golpe**, mas só quando a proteção **efetivamente absorve** o dano:

- **Armaduras:** a peça perde **`1` de durabilidade** quando o personagem é acertado numa região
  que ela **cobre** e o **redutor de dano dela se aplica** ao golpe. A perda é **só na região
  atingida** — cada região controla a própria durabilidade.
- **Escudos:** perdem **`1` de durabilidade** sempre que o **redutor de dano do escudo se aplica**
  (ou seja, ao defender com a guarda levantada e o escudo reduzir o golpe).
- **Ao chegar a `0`**, a peça (ou escudo) **quebra**: deixa de conceder o redutor de dano. O
  redutor de `PA` que ela impunha só para de valer **a partir do próximo turno** (igual a remover
  a proteção).
- Golpes numa região que a peça **não cobre** (sem redutor a aplicar) **não** gastam durabilidade.

> ✅ Decidido em 19/07/2026: a **regra** de perda de durabilidade de armaduras e escudos (−1 só
> quando o redutor se aplica; por região; quebra em 0) foi definida pelo grupo. Os **valores** por
> peça seguem como proposta a calibrar no playtest.

> 💡 **Traços e habilidades que afetam a durabilidade:** [Zeloso](tracos-base.md#zeloso) (desgasta metade), [Reforçado](tracos-base.md#reforçado) (proteção +50%), [Guarda firme](tracos-base.md#guarda-firme) (defender não desgasta), [Reparar](habilidades-base-mentais.md#reparar) (recupera durabilidade) e [Golpe destruidor](habilidades-base-fisicas.md#golpe-destruidor) (força perda extra no alvo).
