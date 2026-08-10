---
titulo: Descanso
tipo: regra
cenario: base
status: revisao
tags: [descanso, recuperacao, fadiga]
atualizado-em: 2026-08-09
---

# Descanso

**Descanso** é o termo genérico para os momentos em que os personagens param para se recuperar. Os tipos específicos são o **descanso longo** e o **descanso curto**.

> ✅ Decidido em 11/07/2026 (ver [notas-de-design/decisoes/2026-07-11-terminologia-alcance-descanso.md](../../notas-de-design/decisoes/2026-07-11-terminologia-alcance-descanso.md), item A4).

## Descanso longo

Um descanso longo exige **pelo menos 8 horas**, incluindo **sono**. Ao completá-lo, o personagem:

- **Reseta as características gastáveis** — recupera todas as [aptidões](04-aptidoes.md) consumidas. As [habilidades](05-habilidades.md) não têm usos a recuperar: o que as libera de novo é a fadiga zerada;
- **Recupera mais vida** que o descanso curto — role **`1d6`** e distribua o resultado como quiser entre um ou mais membros com dano curável (ver [Saúde e Proteção — Cura](../conflitos/03-saude-e-protecao.md#cura));
- **Recupera toda a fadiga** (ver [abaixo](#fadiga-qualquer-descanso-recupera-tudo)).

## Descanso curto

O descanso curto dura **cerca de 1 hora**. Nele o personagem rola **`1d4`** e distribui o resultado como quiser entre um ou mais membros com dano curável. Também **recupera toda a fadiga** — o que, na prática, devolve o acesso pleno às [habilidades](05-habilidades.md). Além disso, recupera **1 [aptidão](04-aptidoes.md) de cada tipo** (uma por atributo); as demais aptidões só voltam no **descanso longo**.

> ✅ Decidido em 12/07/2026: duração de ~1 hora e 1 rolagem de cura/tratamento (ver [decisões — lote 2](../../notas-de-design/decisoes/2026-07-12-decisoes-de-regra-lote-2.md), item 7).
> ✅ Decidido em 07/08/2026: o dado da rolagem do descanso curto é **`1d4`** (menor que o `1d6` do longo; alinhado à cura improvisada).

## Distribuindo a cura do descanso

A rolagem de cura do descanso cria uma quantidade total de pontos de cura. O jogador pode
dividir esses pontos livremente entre os membros da personagem, sem recuperar mais dano do que
cada membro possui e sem remover dano permanente.

> **Exemplo:** o resultado do dado foi `5`. O jogador pode recuperar 3 pontos de dano curável
> da cabeça, 1 do braço direito e 1 da perna esquerda.

O aspecto [Dorminhoco](../listas/tracos-base.md#dorminhoco) troca o `1d6` do descanso longo por
`1d8`. Ele não altera o descanso curto.

> ✅ Decidido em 09/08/2026: a cura rolada em qualquer descanso forma um total distribuível
> livremente entre os membros, em vez de ser aplicada inteira a um único membro.

## Fadiga: qualquer descanso recupera tudo

**Qualquer descanso — curto ou longo — recupera TODA a [fadiga](08-fadiga.md) acumulada**, eliminando as penalidades de acúmulo.

## Quem decide quando dá para descansar

Permitir ou não um descanso é **decisão narrativa do narrador**, de acordo com a situação da história. A recomendação do grupo criador: não punir os jogadores impedindo o descanso entre conflitos sem motivo narrativo.
