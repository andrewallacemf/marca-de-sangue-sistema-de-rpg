---
titulo: Arquétipos — como funcionam
tipo: regra
cenario: base
status: revisao
tags: [arquetipos, caminhos, criacao-de-personagem, build]
atualizado-em: 2026-07-19
---

# Arquétipos — como funcionam

Um **arquétipo** é um **caminho de construção sugerido** para um personagem: um atalho curado
que diz "se você quer jogar *assim*, foque nestes atributos e considere estes traços,
habilidades e maestrias". Ele serve para duas coisas:

- **Ajudar quem não quer montar do zero** — em vez de encarar todas as listas, o jogador parte
  de um esqueleto pronto e ajusta.
- **Estabelecer um terreno comum** — ninguém é obrigado a ter a mesma referência do que é um
  "ninja" ou um "guerreiro"; o arquétipo descreve o conceito para a mesa toda partir do mesmo
  ponto.

> ⚠️ **Arquétipo não é obrigatório e não trava nada.** É só orientação. Você pode ignorá-lo,
> misturar dois, ou seguir um à risca — a criação de personagem por
> [experiência](../progressao/01-experiencia-e-evolucao.md) continua livre.

## Estrutura de um arquétipo

Todo arquétipo (genérico ou de cenário) é descrito com os mesmos campos:

- **Nome** e uma **descrição** curta do conceito (o que é, como joga).
- **Atributo primário** e **atributo secundário** — onde concentrar as aptidões e o foco dos
  testes. O primário é o carro-chefe; o secundário apoia.
- **Sugestões**, agrupadas por categoria:
  - **Maestrias** (armas/armaduras);
  - **Técnicas** (anulam desvantagem natural das atividades-chave do caminho);
  - **Aspectos** (traços passivos que reforçam o estilo);
  - **Habilidades** (as ações que definem o caminho na prática).
- *(Opcional)* **Habilidades de caminho** — ver abaixo.

## Habilidades de caminho (opcional)

Um arquétipo pode ter **habilidades próprias do caminho**, que exigem, como **pré-requisito**,
o personagem **já possuir pelo menos 2 habilidades daquele caminho**. É uma forma de
**recompensar quem segue o arquétipo**: quanto mais fundo no caminho, mais se abre. Mecanicamente
é um [requisito de habilidade](../conceitos/05-habilidades.md) — "possuir ≥ 2 habilidades do
caminho X" — como qualquer outro requisito de uso.

## Genéricos (núcleo) × de cenário

- Os **arquétipos genéricos** (sem tema) vivem aqui, no núcleo:
  [arquétipos genéricos](01-arquetipos-genericos.md). São papéis universais (guerreiro, atirador,
  suporte…), servem a qualquer mundo.
- Cada **cenário** pode **adicionar os seus** (ex.: os *dō*/caminhos do Mukashi) e/ou dar
  **nome e flavor** a um genérico (um "Caminho do Guerreiro" genérico vira "Bushidō" no Mukashi).
  O cenário **referencia** esta estrutura e só descreve a diferença — não recria o conceito.

## Como criar um arquétipo novo

1. Defina o **conceito** e a **descrição** curta.
2. Escolha **atributo primário e secundário**.
3. Liste **sugestões** (maestrias, técnicas, aspectos, habilidades) que compõem o estilo.
4. *(Se quiser)* crie **habilidades de caminho** com o pré-requisito de ≥ 2 habilidades do caminho.
5. Genérico → adicione em [01-arquetipos-genericos.md](01-arquetipos-genericos.md). De cenário →
   em `cenarios/<mundo>/` (ou no módulo temático), referenciando esta estrutura.
