---
titulo: "Variante fadiga — Habilidades por nível"
tipo: regra
cenario: base
status: rascunho
tags: [variante, experimental, habilidades, fadiga, nivel]
atualizado-em: 2026-07-12
---

# Habilidades por nível

> 🧪 Variante experimental — substitui [conceitos/05-habilidades.md](../../conceitos/05-habilidades.md) durante o teste.

## O que muda

No sistema-base, você compra **usos** de uma habilidade e cada uso gasto só volta com
descanso. Aqui **não existem usos**: a habilidade é comprada uma vez, **evolui por nível**,
e você pode usá-la quantas vezes quiser — desde que tenha **`PA`** e aguente a **fadiga**.

## Compra e evolução por nível

- Você **compra a habilidade** com **`exp.`** e paga **`exp.`** para **subir de nível**.
- O **nível determina a força** da habilidade (é a "Progressão" já descrita em cada
  habilidade nas [listas](../../listas/habilidades-base.md): o nível atual é o degrau da
  progressão que o personagem alcançou).
- **Não se compram usos avulsos** e **não há fusão** de habilidades iguais — evoluir é
  sempre subir de nível.

## Custo de uso: `PA` + fadiga

Cada vez que usa uma habilidade, o personagem paga:

1. o **custo em `PA`** da habilidade (o mesmo das listas — não muda); **e**
2. um **custo em fadiga** pelo esforço.

> 💡 PROPOSTA (IA — a testar): **o custo de fadiga por uso é igual ao nível atual da
> habilidade** (nível 1 = 1 de fadiga, nível 2 = 2, nível 3 = 3…). Assim, habilidades mais
> fortes cansam mais e "quanto você aguenta usá-las" cai naturalmente conforme a fadiga
> sobe. Alternativa considerada: custo fixo (ex.: 2 de fadiga por uso, independente do
> nível). O valor exato é o principal ponto de ajuste do playtest — ver
> [pendências](pendencias-e-testes.md).

A fadiga acumulada e suas penalidades estão em [02-fadiga.md](02-fadiga.md).

## Falhar ainda cansa

Como no base, **não ter sucesso não devolve o custo**: uma habilidade que falhou ainda
gastou os **`PA`** e a **fadiga** do uso. Só quando o personagem é **interrompido/impedido**
antes de tentar (não chega a executar) é que nada é gasto.

## O que continua igual ao base

- **Requisitos de uso** de cada habilidade (portar escudo, arma específica, alvo em certo
  estado etc.) continuam valendo como nas [listas](../../listas/habilidades-base.md).
- **Fora de combate**, a ordem de resolução (fila por `PA`, menor primeiro) segue a regra
  do base ([05-habilidades.md](../../conceitos/05-habilidades.md#ordem-de-realização-das-habilidades-fora-de-combate)).
- **Combinar** habilidades com aptidões e traços segue igual; habilidades não se combinam
  entre si.

## Recuperação

Não há "usos" a recuperar: o que se recupera é a **fadiga**, no descanso
(ver [02-fadiga.md](02-fadiga.md) e [03-impactos-nas-demais-mecanicas.md](03-impactos-nas-demais-mecanicas.md)).
