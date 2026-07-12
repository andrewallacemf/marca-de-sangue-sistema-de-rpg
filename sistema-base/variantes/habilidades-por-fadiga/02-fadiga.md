---
titulo: "Variante fadiga — Fadiga reestruturada"
tipo: regra
cenario: base
status: rascunho
tags: [variante, experimental, fadiga, pontos-de-acao]
atualizado-em: 2026-07-12
---

# Fadiga (reestruturada)

> 🧪 Variante experimental — substitui [conceitos/08-fadiga.md](../../conceitos/08-fadiga.md) durante o teste.

A **fadiga** representa o desgaste acumulado. Nesta variante ela ganha um papel novo: além
de tudo o que já fazia, é o **combustível das habilidades** — por isso sobe mais rápido, e
as penalidades foram recalibradas para um **limiar livre** seguido de perda gradual de `PA`.

## Como se ganha fadiga

- **Usando habilidades:** cada uso adiciona fadiga (na proposta atual, igual ao **nível** da
  habilidade — ver [01-habilidades.md](01-habilidades.md)).
- **Sofrendo certos danos e efeitos**, como no base.
- **Reagindo:** um ataque de oportunidade (e outras reações) custa fadiga igual ao **`PA`**
  da ação, como no base.
- **Voluntariamente, por `PA` extra:** o personagem ainda pode assumir fadiga para ganhar
  `PA` no turno — **2 de fadiga = 1 `PA`** extra (limite: o total de `PA` do personagem).

> ⚠️ A DEFINIR: com a fadiga agora servindo de combustível das habilidades, é preciso testar
> se a compra de `PA` extra (2 fadiga = 1 `PA`) continua valendo a pena ou fica de fora
> nesta variante — decidir no playtest.

## Limiar e penalidades

> 💡 PROPOSTA (IA — a testar):
>
> - **Limiar livre:** os **10 primeiros pontos** de fadiga **não** trazem penalidade.
> - A partir daí, **a cada 5 pontos** de fadiga acumulada o personagem **perde 1 `PA`** por turno.
> - **Inconsciência:** ao chegar a **40 pontos**, o personagem fica **inconsciente**
>   (mesmo marco do base — a confirmar com a nova curva).
> - **Piso de `PA`:** como no base, nenhuma combinação de penalidades reduz o personagem a
>   menos de **4 `PA`** por turno (salvo inconsciência).

Esses números são o **coração do ajuste** do playtest: se a fadiga subir rápido demais, o
limiar (10) e o passo (a cada 5) devem aumentar. Ver [pendências](pendencias-e-testes.md).

## Recuperação

**Qualquer descanso — curto ou longo — recupera toda a fadiga** (como no base). Não há
"usos" a resetar; recuperar a fadiga já devolve a capacidade de usar habilidades.
(Ver o impacto no descanso em [03-impactos-nas-demais-mecanicas.md](03-impactos-nas-demais-mecanicas.md).)

## Registro na ficha

Todo o controle fica na **barra de fadiga** da ficha — um lugar só, mesmo com muitas
habilidades. Sugestão de mesa: marcar a fadiga atual com **um dado sobre a ficha**, para
não apagar/reescrever a cada turno.

## O que a variante NÃO muda na fadiga

- A fadiga continua vindo de danos/efeitos e do uso voluntário por `PA`.
- Os `PA` seguem sendo o recurso gratuito do turno (ver [03-impactos-nas-demais-mecanicas.md](03-impactos-nas-demais-mecanicas.md)).
