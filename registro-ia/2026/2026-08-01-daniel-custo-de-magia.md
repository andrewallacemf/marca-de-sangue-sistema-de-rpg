---
data: 2026-08-01
pessoa: daniel
ferramenta: claude-cowork
objetivo: corrigir o custo de uma magia — o custo de ativação substitui o custo padrão de fadiga da
  habilidade, e o PV gasto em magia não gera fadiga
arquivos-alterados:
  - modulos/magia/README.md
  - sistema-base/conceitos/08-fadiga.md
  - sistema-base/conceitos/05-habilidades.md
  - sistema-base/conflitos/03-saude-e-protecao.md
  - INDICE.md
  - PENDENCIAS.md
---

# Sessão: correção do custo de magia

## Prompt dado

> Uma alteração que precisa ser indicada pra magias, elas gastam PA + Fadiga OU Pontos de vida
> (PV perdido com magia não consome fadiga). Nunca PA + Fadiga + PV (com fadiga junto).

## Contexto

Correção imediata a um problema que eu mesmo tinha levantado horas antes, na sessão que promoveu a
variante de fadiga ao núcleo. Naquela sessão, ao realinhar o módulo Magia, escrevi que o custo de
ativação **se somava** ao custo padrão de fadiga da habilidade — e registrei como pendência de risco
que "magia ficou bem mais cara e ninguém recalibrou".

O Daniel corrigiu o desenho em vez de aceitar o encarecimento.

## A regra correta

> **Uma magia custa `PA` + fadiga, OU `PA` + `PV`. Nunca as três coisas juntas.**

Duas consequências:

1. **O custo de ativação substitui o custo padrão de fadiga da habilidade** — não se soma a ele. Uma
   magia de `4 PA` com ativação `2` cobra `4 PA` + 2 (de fadiga ou de `PV`), e não `4 PA` + 4 de
   fadiga + 2 de ativação.
2. **O `PV` pago como custo de ativação não gera fadiga.** É a **única exceção do sistema** à regra
   de que todo ponto de dano recebido soma 1 de fadiga. Vale só para o custo da própria magia: o
   conjurador que **leva um golpe** — inclusive de uma magia lançada por outra pessoa — acumula
   fadiga normalmente.

## O que foi feito

- **`modulos/magia/README.md`** — seção nova **"O custo de uma magia: `PA` + fadiga ou `PA` + `PV`"**,
  com a tabela dos dois caminhos e um exemplo comparando com o que uma habilidade comum de mesmo `PA`
  cobraria. Substituí o aviso errado da sessão anterior e reescrevi o parágrafo que dizia que o dano
  de magia gerava fadiga pelo caminho normal.
- **Guia de design** ajustado: quem cria uma magia nova precisa lembrar que o custo de ativação
  substitui a fadiga padrão, e comparar sempre com a habilidade comum equivalente.
- **A exceção foi registrada nos três lugares do núcleo** onde a regra geral vive —
  `08-fadiga.md` (como se ganha fadiga), `05-habilidades.md` (custo de uso) e
  `03-saude-e-protecao.md` (todo dano gera fadiga). Sem isso, quem lesse só o núcleo teria a regra
  errada.

## Análise de impacto

Segui o protocolo do `AGENTS.md`. Mapeei onde a regra "todo dano gera fadiga" aparece e onde o custo
de habilidade é definido, e não encontrei conflito com nenhuma outra mecânica: a exceção é estreita
(só o custo de ativação de magia) e está declarada nos três pontos de origem.

**Uma consequência nova, que sinalizei como 📝:** agora pagar em `PV` pode sair **mais barato em
fadiga** do que uma habilidade comum de mesmo `PA`, porque zera a fadiga do lançamento. Um conjurador
com vida sobrando pode preferir queimar `PV` justamente para manter o `PA` cheio. É coerente com a
fantasia — o mago que se consome para não cansar —, mas se virar a escolha óbvia sempre, o ajuste é
subir os custos em `PV` das magias. Fica para o playtest.

Também mantive o alerta de que **perder vida máxima continua cobrando a longo prazo**: não gera
fadiga na hora, mas reduz a fadiga *máxima* do conjurador para sempre, já que ela acompanha o total
de `PV`.

## Pendências

**Resolvida (1):** "Magia ficou bem mais cara e ninguém recalibrou" — resolvida antes de virar
problema, pela mudança de desenho.

**Criada (0):** a consequência nova ficou registrada dentro da própria linha da pendência resolvida,
como ponto a vigiar no playtest.

## Observações

Vale registrar o padrão: a pendência de risco que eu tinha aberto de manhã foi fechada no mesmo dia
por uma decisão de design, não por um playtest. Foi o caminho certo — o encarecimento era efeito
colateral acidental da promoção da variante, não uma escolha de ninguém.
