---
titulo: Pendências da plataforma 5–11 (iniciativa, dano e nomenclatura)
tipo: decisao
cenario: base
status: estavel
tags: [decisao, plataforma, iniciativa, dano, nomenclatura]
atualizado-em: 2026-08-05
---

# Pendências da plataforma 5–11 (05/08/2026)

Decisões fechadas com o André na plataforma, com reflexo nas regras deste repo.
Referência das pendências: `docs/PENDENCIAS.md` do repo
[`plataforma-rpg-marca-de-sangue`](https://github.com/andrewallacemf/plataforma-rpg-marca-de-sangue).

## Nomenclatura dos participantes de um conflito

- **Personagem do Jogador (PJ)** — antes "personagem" / `PERSONAGEM`.
- **Personagem do Narrador (PN)** — antes "NPC". Na plataforma, o tipo `ELITE`
  (inimigo com ficha completa, aliado/neutro/inimigo) vira `NARRADOR`.
- **Ameaça** — antes "minion". Na plataforma, o tipo `MINION` (bloco/preset,
  sem ficha) vira `AMEAÇA`.

## Iniciativa

1. Todos rolam `1d10`; rerrolagem com aptidões de qualquer atributo continua valendo.
2. Empate: **PJ antes de PN antes de ameaça**; dentro da mesma categoria, **mais
   aptidões no total** (Ágil + Mental + Social); persistindo, `1d10` até desempatar.
3. **Subir na ordem com fadiga (só PJ):** antes do primeiro turno da rodada, o PJ
   pode subir posições gastando fadiga cumulativa: 1ª posição = 1 fadiga, 2ª = +2
   (3 no total), 3ª = +3 (6 no total), etc.

## Dano

- Ordem de resolução: rolar dano → metade quando a defesa Física vencer
  (mão inábil também) → maior redutor da região → piso de **1**.
- Exceção ao piso: novo traço **Pele de ferro** (dano mínimo 0), adicionado ao
  catálogo e a `tracos-base.md`.

## Regras alteradas

- `sistema-base/conflitos/01-conflito-fisico.md` — §Iniciativa, §Empates e nova
  §Subir na ordem gastando fadiga.
- `sistema-base/conflitos/02-acoes-em-conflito.md` — §Ataque com mão inábil
  (metade antes do redutor).
- `sistema-base/conflitos/03-saude-e-protecao.md` — exceção do piso (Pele de ferro).
- `contrato/catalogo.json` — traço `Pele de ferro` (Aspecto, 4 exp).
