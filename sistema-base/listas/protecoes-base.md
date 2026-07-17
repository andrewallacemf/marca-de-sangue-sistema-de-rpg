---
titulo: Lista base de Proteções (Armaduras e escudos)
tipo: regra
cenario: base
status: revisao
tags: [protecoes, armaduras, escudos]
atualizado-em: 2026-07-12
---

# Lista base de Proteções (Armaduras e escudos)

> ✅ Rebalanceamento de 12/07/2026: o **redutor de `PA`** deixou de ser proporcional ao redutor de dano (era −1 a −12, inviável com 10 `PA`). Agora é **por tipo — Leve −1, Média −2, Pesada −3** — e **cada peça vestida soma** seu redutor de `PA`. O redutor de **dano** continua específico por armadura (ver [decisões — rebalanceamento de PA](../../notas-de-design/decisoes/2026-07-12-rebalanceamento-pa-analise.md), D2/D3).

> 💡 PROPOSTA (IA) — a coluna **"Regiões cobertas"** e os **redutores de dano por peça** são uma primeira versão a revisar pelo grupo: cada armadura abaixo é tratada como a **peça de torso** (cobre tronco + 2 braços). Peças de outras regiões (pernas, cabeça, mãos, pés) seguem a mesma lógica e serão detalhadas na revisão.

| **Item** | **Tipo** | **Regiões cobertas** 💡 | **Redutor Dano 🛡️** | **Redutor PA 🐢** | **Durab.** | **Preço sugerido** |
| --- | --- | --- | --- | --- | --- | --- |
| Armadura de panos | **`Leve`** | Tronco + 2 braços | **`1`** | **`-1 PA`** | **`6`** | **`10 moedas`** |
| Armadura acolchoada | **`Leve`** | Tronco + 2 braços | **`2`** | **`-1 PA`** | **`10`** | **`20 moedas`** |
| Armadura de peles | **`Leve`** | Tronco + 2 braços | **`3`** | **`-1 PA`** | **`13`** | **`30 moedas`** |
| Armadura de couro | **`Média`** | Tronco + 2 braços | **`4`** | **`-2 PA`** | **`15`** | **`40 moedas`** |
| Armadura cravejada | **`Média`** | Tronco + 2 braços | **`5`** | **`-2 PA`** | **`20`** | **`50 moedas`** |
| Armadura de tiras | **`Média`** | Tronco + 2 braços | **`6`** | **`-2 PA`** | **`25`** | **`60 moedas`** |
| Brigantina | **`Média`** | Tronco + 2 braços | **`7`** | **`-2 PA`** | **`30`** | **`70 moedas`** |
| Cota de malha | **`Média`** | Tronco + 2 braços | **`8`** | **`-2 PA`** | **`35`** | **`120 moedas`** |
| Cota de talas | **`Pesada`** | Tronco + 2 braços | **`9`** | **`-3 PA`** | **`40`** | **`130 moedas`** |
| Cota de anéis | **`Pesada`** | Tronco + 2 braços | **`10`** | **`-3 PA`** | **`50`** | **`140 moedas`** |
| Armadura de escamas | **`Pesada`** | Tronco + 2 braços | **`11`** | **`-3 PA`** | **`60`** | **`150 moedas`** |
| Armadura de placas | **`Pesada`** | Tronco + 2 braços | **`12`** | **`-3 PA`** | **`70`** | **`160 moedas`** |

## Lista base de Escudos

O **`PA` de uso** (coluna "Tipo e Ações") é o custo para **levantar guarda** com o escudo; o **redutor de `PA`** é a penalidade permanente por **portá-lo** (soma com as armaduras vestidas).

| **Item** | **Tipo e Ações** | **Redutor Dano 🛡️** | **Redutor PA 🐢** | **Durab.** | **Preço sugerido** |
| --- | --- | --- | --- | --- | --- |
| Broquel | **`Leve`**<br>**`2 PA`** | **`1`** | **`-1 PA`** | **`6`** | **`5 moedas`** |
| Escudo pequeno | **`Leve`**<br>**`2 PA`** | **`2`** | **`-1 PA`** | **`10`** | **`8 moedas`** |
| Escudo médio, Cestus, Áspide | **`Média`**<br>**`3 PA`** | **`3`** | **`-2 PA`** | **`15`** | **`14 moedas`** |
| Escudo Grande | **`Média`**<br>**`3 PA`** | **`4`** | **`-2 PA`** | **`20`** | **`20 moedas`** |
| Escudo torre, Tater | **`Pesada`**<br>**`4 PA`** | **`5`** | **`-3 PA`** | **`25`** | **`40 moedas`** |

## Uso e registro das proteções

Regra consolidada nas reuniões de 11/07/2026 (ver [decisões — reuniões de mecânica](../../notas-de-design/decisoes/2026-07-11-reunioes-de-mecanica.md), item 9, e [decisões — terminologia, alcance e descanso](../../notas-de-design/decisoes/2026-07-11-terminologia-alcance-descanso.md), item A1):

- **Redução de dano:** a coluna **"Redutor Dano"** da tabela indica **quanto a proteção reduz do dano de cada golpe** recebido **numa região que ela cobre**.
- **Dano mínimo 1:** o redutor **nunca reduz o dano abaixo de 1** — se o ataque acertou, o alvo sofre no mínimo 1 ponto de dano, mesmo que a redução supere o dano rolado.
- **Redutor de `PA` — permanente e cumulativo:** enquanto uma proteção está vestida, seu **redutor de `PA`** (Leve −1, Média −2, Pesada −3) é descontado do **total de `PA` do turno**, mesmo que o personagem não seja atacado. Os redutores de **todas as peças e escudos** vestidos **somam** (ex.: calção de peles −1, camisa de peles −1, capacete de couro −2 e escudo leve −1 = **−5 `PA`**). Respeitando sempre o **piso de 3 `PA`** por turno (ver [Pontos de ação](../conceitos/07-pontos-de-acao.md)).
- **Ao remover ou destruir uma proteção**, o redutor de `PA` dela só deixa de ser aplicado **a partir do próximo turno** — não no mesmo turno.
- **Durabilidade por local:** a cada golpe recebido, a proteção perde **1 de durabilidade na região atingida** — cada local controla a própria durabilidade.
- **Registro na ficha:** a proteção é anotada **uma única vez** (nome, redução de dano e redutor de `PA`), junto com a **distribuição por locais** do corpo e a durabilidade individual de cada local.
- **Espaços de proteção:** a ficha possui **três espaços de proteção** (ex.: superior, inferior e escudo).
- **Sem empilhamento:** não é possível empilhar armaduras no mesmo local — **vale a de maior proteção**.

> ✅ Revisado em 12/07/2026 (rebalanceamento de PA): redutor de `PA` por tipo e cumulativo por peça; penalidade permanente que sai no próximo turno ao remover/destruir a proteção (ver [decisões — rebalanceamento de PA](../../notas-de-design/decisoes/2026-07-12-rebalanceamento-pa-analise.md)). O dano mínimo 1 e a redução por região seguem de 11/07/2026.
