---
titulo: Criando uma ameaça
tipo: regra
cenario: base
status: rascunho
tags: [oponentes, ameacas, narrador, criacao, membros, fadiga]
atualizado-em: 2026-08-01
---

# Criando uma ameaça

Uma **[ameaça](00-oponentes.md)** é registrada num **bloco**, não numa ficha de personagem. O bloco
traz só o que a mesa precisa saber para operá-la — tudo que ele não disser segue a regra normal do
jogador.

Sete decisões montam uma ameaça:

## 1. Os membros

Defina **quais partes do corpo** a ameaça tem. É o que faz o [ataque mirado](../conflitos/02-acoes-em-conflito.md)
e o dano por região continuarem funcionando — e, como na maioria dos conflitos os jogadores estão
batendo em ameaças, esta é a decisão que mais afeta a mesa.

**Humanoides** têm dois modelos prontos:

| Modelo | Membros | Quando usar |
|---|---|---|
| **Completo** | 6 — cabeça, tronco, braço direito, braço esquerdo, perna direita, perna esquerda | Ameaça importante, ou combate com poucos oponentes, onde vale a granularidade |
| **Simplificado** | 3 — **cabeça e tronco**, **braços**, **pernas** | Quando há muitas ameaças na mesa; o narrador narra qual braço ou perna foi atingido, sem separar na contagem |

**Não humanoides** têm o número que fizer sentido para o bicho:

| Criatura | Membros sugeridos |
|---|---|
| Lobo | 4 — cabeça, tronco e rabo, patas dianteiras, patas traseiras |
| Aranha | 8 — cabeça, abdômen e 6 grupos de patas (ou 4, agrupando de duas em duas) |
| Dragão | 8 — cabeça, tronco, asa esquerda, asa direita, dianteira esquerda, dianteira direita, traseira esquerda, traseira direita |

> 💡 **Amarre o membro à narrativa.** Ao criar uma ameaça com membros fora do padrão — sobretudo se
> forem muitos —, pense no que **acontece** quando cada um é desabilitado. Um dragão com uma asa
> destruída **para de voar**. Uma aranha com metade das patas fora anda pela metade. É isso que
> transforma o ataque mirado numa decisão tática em vez de um sorteio.

### O membro precisa caber num dado

Os jogadores localizam o golpe rolando um dado (o [ataque descuidado](../conflitos/02-acoes-em-conflito.md)
usa `1d6`). Então a regra prática é: **cada membro tem que corresponder a uma ou mais faces de um
dado real.**

- **3 membros** → `1d6`, duas faces cada. É o motivo de o modelo simplificado ter 3 e não 4.
- **6 membros** → `1d6`, uma face cada (o padrão do personagem).
- **4 · 8 · 10 · 12 · 20 membros** → o dado de mesmo nome, uma face cada.

E quando o número **não** casa com nenhum dado? Use o dado maior mais próximo e **dê as faces
sobrando ao membro mais fácil de acertar** — o que também é realista.

> *Exemplo: uma ameaça de **7 membros** usa `1d8`. O tronco, que é o alvo mais largo, ocupa **7 e
> 8**. Ele passa a ser atingido com o dobro de frequência dos demais, o que é exatamente o que
> acontece quando se acerta um golpe no escuro.*

## 2. A vida de cada membro

Cada membro tem a **sua própria vida máxima**, e ela não precisa ser 10. Um dragão pode ter 40 no
tronco e 15 numa asa; um rato pode ter 3 em tudo.

O dano funciona **exatamente como no personagem** (ver [Saúde e Proteção](../conflitos/03-saude-e-protecao.md)):
enche o membro → **ferida profunda / incapacitado** → continuar batendo ali → **perde vida máxima**
→ zerando, **invalidado**. As mesmas regras de morte também valem: membro vital invalidado, ou dois
periféricos.

## 3. Fadiga e queda

**A fadiga máxima da ameaça é igual à soma da vida de todos os seus membros** — a mesma regra do
personagem (ver [Fadiga](../conceitos/08-fadiga.md#fadiga-máxima)). Não há nada a calcular à parte.

A diferença está no **passo da penalidade**:

| | Perde 1 `PA` a cada | Cai quando |
|---|:--:|---|
| Personagem (jogador ou do narrador) | **10** de fadiga | atinge a fadiga máxima |
| **Ameaça** | **5** de fadiga | atinge a fadiga máxima |

> *Exemplo: uma ameaça com 3 membros de 10 `PV` tem **30 de vida** e **30 de fadiga**. Ela perde
> `1 PA` aos 5 de fadiga, mais 1 aos 10, e assim por diante — e cai inconsciente aos 30. Como todo
> dano gera fadiga, bater nela 30 vezes a derruba mesmo que nenhum membro tenha sido invalidado.*

Lembre-se: a ameaça **acumula** fadiga (por dano e por efeitos), mas **nunca a gasta**.

## 4. Pontos de ação e deslocamento

Declare os **`PA` por turno** da ameaça e, se for diferente do padrão, o **teto de deslocamento**
(nos personagens são 7 dos 10 `PA`).

Os dois são independentes, e é aí que mora boa parte da personalidade de um bicho:

> *Uma lesma gigante pode ter **15 `PA`** e apenas **2** de deslocamento: ela faz muita coisa, mas
> não vai a lugar nenhum. Um gato tem poucos `PA` e deslocamento altíssimo.*

## 5. Ações que ela pode (e não pode) fazer

Ameaça **humanoide** usa as mesmas [ações](../listas/acoes-em-combate.md) de um personagem, sem
mais o quê. Para as demais, o bloco declara **o que foge do padrão** — em geral o que ela **não**
consegue fazer: um lobo não empunha escudo nem levanta guarda; uma serpente não agarra com as mãos.

## 6. Ataques: arma ou habilidade?

O critério é simples e vale a pena respeitar, porque mantém o vocabulário do sistema honesto:

| | Use **arma** | Use **habilidade** |
|---|---|---|
| O que é | Um **instrumento** que a criatura empunha | Um ataque **do próprio corpo**, ou qualquer coisa com regra própria |
| Exemplos | A espada do bandido, o tacape do troll, as garras de ferro acopladas do autômato | Mordida, Cuspe de veneno, Investida, Teia |
| Como se registra | Entra no [arsenal](../listas/equipamentos-base.md) normal, com peso, tipo e alcance | Entra como habilidade, com `PA`, dano, alcance e efeito descritos |

**Não transforme partes do corpo em armas.** Um cachorro não tem "dentes" no inventário: ele tem a
habilidade **Mordida**, que diz quanto custa em `PA`, quanto dano causa (`1d8` perfurante), qual o
alcance e o que mais acontece. A habilidade dá espaço para descrever o que uma linha de tabela de
arma não daria.

> Lembre-se de que habilidade de ameaça **não custa fadiga** — só `PA`.

## 7. Descrição e comportamento

Todo bloco de ameaça precisa da parte que não é número:

- **O que é** — a criatura ou pessoa, de onde vem, o que quer;
- **Como ela luta** — o que faz no primeiro turno, o que faz quando está ferida, quando foge;
- **Como usar cada ataque** — não só a regra, mas quando ele é a escolha certa.

É essa parte que faz um narrador conseguir operar a ameaça sem tê-la criado.

## Modelo de bloco

```
NOME DA AMEAÇA                                    Nível de Ameaça: X
Membros (modelo): 3 simplificado — 1d6
  Cabeça e tronco (1–2): 12 PV
  Braços (3–4): 8 PV
  Pernas (5–6): 8 PV
Vida total: 28   ·   Fadiga máxima: 28   ·   −1 PA a cada 5
PA: 10   ·   Deslocamento: 7

Armas: (as que empunha, se empunhar alguma)
Habilidades: (nome — PA, efeito)
Proteções: (armadura e redutor, se houver)
Não pode: (só o que foge do padrão do personagem)

Descrição e comportamento: ...
```

> ⚠️ A DEFINIR: **presets prontos** por faixa de dificuldade (uma ameaça fraca, uma média e uma
> forte, com números já preenchidos), para o narrador improvisar sem montar nada. A conversa de
> 01/08/2026 citou presets *fraco/médio/forte* mas não fixou valores; e os blocos já existentes do
> [kit de playtest](../../playtest/cenarios/inimigos-do-kit.md) precisam ser reconciliados com este
> formato.
