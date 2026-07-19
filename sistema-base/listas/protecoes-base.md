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

| **Tipo de armadura** | **Redutor Dano 🛡️** | **Redutor PA 🐢** | **Durab. (por peça)** 💡 | **Preço (por peça)** 💡 |
| --- | --- | --- | --- | --- |
| Leve | **`-1`** | **`-1 PA`** | **`10`** | **`20 moedas`** |
| Média | **`-2`** | **`-2 PA`** | **`25`** | **`60 moedas`** |
| Pesada | **`-3`** | **`-3 PA`** | **`50`** | **`140 moedas`** |

> 💡 PROPOSTA (IA) — durabilidade e preço por peça são valores iniciais a calibrar no playtest.

## Lista base de Escudos

O **`PA` de uso** (coluna "Tipo e Ações") é o custo para **levantar guarda** com o escudo; o **redutor de `PA`** é a penalidade permanente por **portá-lo** (soma com as armaduras vestidas). O **redutor de dano** do escudo vale **quando você defende com a guarda levantada**.

| **Item** | **Tipo e Ações** | **Redutor Dano 🛡️** | **Redutor PA 🐢** | **Durab.** | **Preço sugerido** |
| --- | --- | --- | --- | --- | --- |
| Broquel | **`Leve`**<br>**`2 PA`** | **`-1`** | **`-1 PA`** | **`6`** | **`5 moedas`** |
| Escudo pequeno | **`Leve`**<br>**`2 PA`** | **`-1`** | **`-1 PA`** | **`10`** | **`8 moedas`** |
| Escudo médio, Cestus, Áspide | **`Média`**<br>**`3 PA`** | **`-2`** | **`-2 PA`** | **`15`** | **`14 moedas`** |
| Escudo Grande | **`Média`**<br>**`3 PA`** | **`-2`** | **`-2 PA`** | **`20`** | **`20 moedas`** |
| Escudo torre, Tater | **`Pesada`**<br>**`4 PA`** | **`-3`** | **`-3 PA`** | **`25`** | **`40 moedas`** |

## Uso e registro das proteções

Regra consolidada nas reuniões de 11/07/2026 (ver [decisões — reuniões de mecânica](../../notas-de-design/decisoes/2026-07-11-reunioes-de-mecanica.md), item 9, e [decisões — terminologia, alcance e descanso](../../notas-de-design/decisoes/2026-07-11-terminologia-alcance-descanso.md), item A1):

- **Redução de dano:** o **redutor de dano** da peça (Leve −1, Média −2, Pesada −3) é subtraído do **total do dano rolado** de cada golpe recebido **numa região que ela cobre**.
- **Dano mínimo 1:** o redutor **nunca reduz o dano abaixo de 1** — se o ataque acertou, o alvo sofre no mínimo 1 ponto de dano, mesmo que a redução supere o dano rolado.
- **Redutor de `PA` — permanente e cumulativo:** enquanto uma proteção está vestida, seu **redutor de `PA`** (Leve −1, Média −2, Pesada −3) é descontado do **total de `PA` do turno**, mesmo que o personagem não seja atacado. Os redutores de **todas as peças e escudos** vestidos **somam** (ex.: calça leve −1, peitoral leve −1, capacete médio −2 e escudo leve −1 = **−5 `PA`**). Respeitando sempre o **piso de 3 `PA`** por turno (ver [Pontos de ação](../conceitos/07-pontos-de-acao.md)).
- **Ao remover ou destruir uma proteção**, o redutor de `PA` dela só deixa de ser aplicado **a partir do próximo turno** — não no mesmo turno.
- **Durabilidade das proteções:** ver a regra completa em [Durabilidade das proteções](#durabilidade-das-proteções) — a peça só perde durabilidade quando **efetivamente absorve** um golpe.
- **Registro na ficha:** a proteção é anotada **uma única vez** (nome, redução de dano e redutor de `PA`), junto com a **distribuição por locais** do corpo e a durabilidade individual de cada local.
- **Espaços de proteção:** a ficha possui **três espaços de proteção** (ex.: superior, inferior e escudo).
- **Sem empilhamento:** não é possível empilhar armaduras no mesmo local — **vale a de maior proteção**.

> ✅ Revisado em 12/07/2026 (rebalanceamento de PA): redutor de `PA` por tipo e cumulativo por peça; penalidade permanente que sai no próximo turno ao remover/destruir a proteção (ver [decisões — rebalanceamento de PA](../../notas-de-design/decisoes/2026-07-12-rebalanceamento-pa-analise.md)). O dano mínimo 1 e a redução por região seguem de 11/07/2026.

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
