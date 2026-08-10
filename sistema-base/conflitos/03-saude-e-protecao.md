---
titulo: Saúde e Proteção
tipo: regra
cenario: base
status: estavel
tags: [saude, dano, cura, defesa, vida]
atualizado-em: 2026-08-09
---

# Saúde e Proteção

## Defesa e esquiva

Ao ser atacado, um personagem consciente pode responder com um **contrateste**, desde que possua
os membros necessários para a resposta escolhida. Um membro desabilitado impede apenas ações que
dependam dele; as consequências específicas de cada membro estão em
[Penalidades por membros incapacitados](#penalidades-por-membros-incapacitados).

O personagem escolhe como reage (ver
[contratestes](../conceitos/01-testes-e-contratestes.md#contrateste-de-esquiva)):

- **Esquivar — atributo `Ágil`.** Se o contrateste vencer o teste de acerto, o personagem desvia e
  não sofre dano.
- **Segurar ou defender — atributo `Físico`.** Se o contrateste vencer, o personagem sofre metade
  do dano rolado, arredondada para baixo. Em seguida, aplica o maior redutor de proteção que cobre
  a região atingida. Se o ataque acertou, o resultado final não pode ser menor que 1 — a única
  exceção é o traço [Pele de Ferro](../listas/tracos-base.md#pele-de-ferro), que permite o resultado 0.
- **Defender com escudo e guarda levantada.** Se o contrateste vencer, o escudo absorve todo o
  golpe e perde 1 de [durabilidade](../listas/protecoes-base.md#durabilidade-das-proteções).

Se o contrateste falhar, o ataque causa o dano integral. Depois da rolagem, aplica-se o maior
redutor de proteção que cobre a região atingida, respeitando o dano mínimo de 1 (a menos que o
alvo tenha [Pele de Ferro](../listas/tracos-base.md#pele-de-ferro)).

Mirar na **cabeça ou no tronco** impõe `desvantagem` ao teste de acerto. Mirar nos braços ou nas
pernas não concede vantagem por si só. Armaduras, habilidades e a ação
[levantar guarda](02-acoes-em-conflito.md#levantar-guarda-entrar-em-postura-defensiva) podem criar
outros modificadores. Aptidões permitem rerrolar o dado, mas não concedem vantagem.

> ✅ Ordem de resolução consolidada em 04/08/2026: rolar dano → reduzir à metade quando a defesa
> Física vencer → aplicar o maior redutor da região → respeitar o dano mínimo de 1.

## Corpo e vida

Personagens usam a vida dividida entre seis membros: **cabeça, tronco, braço direito, braço
esquerdo, perna direita e perna esquerda**. Cada membro possui **10 pontos de vida (`PV`)**, para
um total padrão de **60 `PV`**.

Cabeça e tronco são membros vitais. Braços e pernas são membros periféricos: podem ser
incapacitados ou invalidados sem causar morte imediata, embora isso imponha consequências.

Cada ponto de [dano permanente](#dano-permanente-perda-de-vida-máxima) reduz a vida máxima do
membro em 1. A soma da vida máxima atual dos seis membros também determina a
[fadiga máxima](../conceitos/08-fadiga.md#fadiga-máxima) do personagem.

## Pontos de vida e dano

Cada membro possui espaços de dano iguais à sua vida máxima atual. Um personagem padrão começa
com 10 espaços livres em cada membro.

O dano recebido ocupa esses espaços e é **curável** enquanto a vida máxima do membro não for
reduzida. Ao sofrer dano:

1. marque um espaço livre do membro atingido;
2. para cada ponto de dano aplicado, acrescente 1 ponto de
   [fadiga](../conceitos/08-fadiga.md);
3. quando todos os espaços disponíveis estiverem ocupados, o membro fica
   **incapacitado**.

Curar dano libera os espaços ocupados, mas não remove a fadiga que o ferimento já produziu.

### Dano permanente: perda de vida máxima

Quando um membro já está incapacitado, cada novo ponto de dano recebido nele reduz sua vida
máxima em 1. Na ficha, um espaço de dano curável é convertido em um espaço permanente: o membro
continua cheio, mas passa a possuir um ponto a menos de vida máxima.

Dano permanente não é removido por descanso, cura, tratamento ou habilidades convencionais.
Quando a vida máxima de um membro chega a zero, ele fica **invalidado**.

> **Resumo:** o dano ocupa os espaços do membro → o membro cheio fica incapacitado → novos golpes
> reduzem sua vida máxima → vida máxima zero invalida o membro.

Cada ponto de dano efetivamente aplicado gera 1 ponto de fadiga, inclusive quando converte dano
curável em dano permanente. A alteração de estado do membro não gera fadiga adicional.

**Exceção:** `PV` gasto como custo de ativação de uma magia não gera fadiga. Dano causado por uma
magia contra outra pessoa segue a regra normal.

> ✅ Modelo simplificado aprovado em 04/08/2026: saúde possui dano curável e dano permanente. A
> distinção anterior entre dano superficial e profundo deixou de ser usada.

### Redutor de dano das armaduras

O redutor de dano de uma peça depende do tipo: **Leve −1, Média −2 e Pesada −3**. O redutor só se
aplica quando a peça cobre o membro atingido.

Se mais de uma proteção cobrir a mesma região, os redutores **não se somam**: use somente o maior.
Depois da redução, um ataque que acertou causa no mínimo 1 ponto de dano.

A peça cujo redutor foi aplicado perde 1 de durabilidade naquela região. A regra completa de uso,
maestria e durabilidade está em [Proteções](../listas/protecoes-base.md).

## Estados dos membros

Três termos descrevem um membro fora de uso:

- **Incapacitado:** o membro está com todos os espaços disponíveis ocupados por dano curável ou
  permanente. Não pode ser usado até que ao menos um ponto de dano curável seja recuperado.
- **Invalidado:** a vida máxima do membro chegou a zero. Não se recupera por meios convencionais.
- **Desabilitado:** termo guarda-chuva para um membro incapacitado ou invalidado.

Na ficha, o dano curável ocupa os espaços disponíveis da esquerda para a direita. A perda de vida
máxima deve ser marcada de forma permanente, indicando que aquele espaço deixou de existir.

## Cura

Cura recupera somente **dano curável**. Ela nunca remove dano permanente nem a fadiga que o dano
gerou.

Durante um [descanso](../conceitos/09-descanso.md), o personagem faz uma rolagem de cura:
`1d4` no descanso curto e `1d6` no descanso longo. O resultado forma um total de pontos que o
jogador distribui livremente entre um ou mais membros com dano curável. A distribuição não pode
remover dano permanente nem recuperar mais dano do que cada membro possui.

### Cura improvisada

Durante um conflito, uma tentativa de cura improvisada custa **`4 PA`**. O personagem faz um teste
de `Social` ou `Mental` contra o contrateste definido pelo narrador:

- **Sucesso:** recupera `1d4` pontos de dano curável do paciente.
- **Falha:** o membro tratado sofre 1 ponto de dano.

O teste recebe desvantagem sem material de curativo ou quando o personagem trata a si mesmo sem
poder usar adequadamente os braços. A Técnica em **Tratar/Curar** remove a desvantagem causada pela
falta de material, mas não altera o custo da ação.

Habilidades de cura e tratamento recuperam dano curável conforme sua própria progressão. As
habilidades de tratamento são mais potentes e mais caras, mas também não recuperam vida máxima.

## Penalidades por membros incapacitados

Não existe uma penalidade separada de `PA` pelo total de dano. Cada ponto de dano já gera fadiga,
e a fadiga acumulada reduz os `PA` do turno conforme sua própria regra.

Quando um membro fica incapacitado:

- **uma perna:** cada metro de movimento passa a custar `2 PA`;
- **a mão hábil:** ataques e ações realizados com a mão restante custam `1 PA` adicional;
- **o tronco:** todas as ações recebem desvantagem; o personagem não pode usar habilidades nem
  atacar;
- **a cabeça:** o personagem fica inconsciente; se recuperar a consciência enquanto a cabeça
  continuar incapacitada, todas as ações recebem desvantagem e ele não pode usar habilidades nem
  atacar.

Um membro desabilitado impede somente ações que dependam dele. Um braço desabilitado, por exemplo,
não impede que o personagem tente se esquivar com as pernas.

## Morte

Um personagem morre quando:

- a cabeça ou o tronco são invalidados; ou
- dois membros periféricos — braços ou pernas — são invalidados.
