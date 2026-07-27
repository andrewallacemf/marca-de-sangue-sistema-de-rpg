---
data: 2026-07-27
pessoa: daniel
ferramenta: claude-cowork
objetivo: curar o primeiro dō completo do Mukashi (Bushidō — Caminho do Guerreiro)
arquivos-alterados:
  - cenarios/mukashi/arquetipos-do.md
  - cenarios/mukashi/mecanicas-unicas/habilidades-do.md
---

# Sessão: Bushidō — Caminho do Guerreiro

## Prompts dados

> Vamos começar a trabalhar nos "caminhos" de Mukashi, que nada mais são do que arquétipos com
> sugestões de conjuntos de habilidades, traços, etc para compor um personagem. Cada caminho deve
> vir com um pequeno texto descritivo antes da árvore de assets sugeridos. Quero criar primeiro o
> "Bushido - Caminho do Guerreiro". Harmonizando com o estilo do restante do manual e do texto
> original de mukashi, crie uma descrição breve para o caminho com base nessa descrição, que está
> técnica demais: [colou um trecho longo sobre o Bushidō como código ético/espiritual, a
> etimologia de samurai/bushi, e as categorias de combatentes — samurai, ashigaru, sōhei,
> yamabushi]. Em seguida me sugira quais habilidades e outros assets já existentes poderiam
> entrar como sugestão para criação de personagem nesse arquétipo.

> Retire da descrição do Bushido os sohei e yamabushi. Eles terão um caminho próprio. As
> sugestões de habilidades estão ótimas.

> Vamos expandir o Bushido com habilidades específicas do sistema Mukashi. Vamos começar com essa:
> Resolução em Sete Sopros [3 PA / 4 exp., ignora Desvantagem de condições mentais em até 7
> respirações, progressão reduz o custo de PA até 1 PA mínimo] — e, em seguida, Kachidoki (Grito
> de Vitória) [4 PA / 2 exp., usada ao abater um inimigo, aliados em 6m recuperam fadiga
> acumulada, progressão de 1 a 5 pontos].

## O que foi feito

Completado o primeiro dō do `arquetipos-do.md`, seguindo o "Modelo para completar cada dō" já
existente no arquivo. A descrição original do Daniel (técnica, em bloco de citação) foi
reescrita no tom do manual, mantendo os fatos centrais (Bushidō como código, etimologia de
samurai/bushi) e cortando sōhei/yamabushi (vão ganhar caminho próprio depois).

Para a curadoria mecânica, Bushidō partiu do arquétipo genérico **Guerreiro**
(Físico/Ágil) — que já bate com o flavor prévio da tabela (Katana, ō-yoroi). Maestrias e
aspectos vieram diretos do genérico. Nas habilidades, o "Quebrar guarda" do Guerreiro genérico
foi trocado por "Desarmar pesado": Quebrar guarda exige arma contundente, e a Katana é
cortante/perfurante, então a sugestão original não funcionaria com a arma-assinatura do caminho.
Desarmar pesado exige arma média (a Katana serve) e é tematicamente mais fiel ao duelo de
samurai. Também foi anotada uma variante opcional (aspectos Firme/Firme aprimorado) para quem
joga um bushi de duas mãos com Tachi/Nodachi.

Depois, foram criadas as duas primeiras **habilidades de caminho** do Bushidō, num novo arquivo
`cenarios/mukashi/mecanicas-unicas/habilidades-do.md` (formato espelhado nas listas de
habilidades do sistema-base, com Resumo + Descrição/Requisitos/Progressão por habilidade),
linkado de volta no bloco do Bushidō em `arquetipos-do.md`. Antes de escrever, duas checagens
de consistência: (1) o sistema não tem uma categoria formal "condições mentais" com Desvantagem
genérica — só habilidades pontuais com efeitos distintos (Confundir inimigo dá Desvantagem;
Desorientar e Atordoar tiram PA; "Medo" não existe como status); a Resolução em Sete Sopros foi
redigida para cobrir precisamente o que existe hoje (Desvantagem de efeitos mentais), deixando
espaço para um futuro status de Medo sem prometer algo que a regra não cobre ainda. (2) Nenhuma
habilidade do sistema recupera fadiga fora de descanso — Kachidoki é a primeira exceção desse
tipo, documentada como tal na própria entrada.

## Decisões tomadas

- Bushidō segue o arquétipo genérico Guerreiro sem trocar de atributos (Físico/Ágil) — não tem
  componente místico, então não ajusta o secundário para KI.
- Habilidade sugerida "Quebrar guarda" (do Guerreiro genérico) substituída por "Desarmar pesado"
  nas sugestões do Bushidō, por incompatibilidade com a Katana (contundente × cortante/perfurante).
- Sōhei e Yamabushi ficam de fora da descrição do Bushidō — cada um terá seu próprio dō (Sōhei já
  está na tabela de esqueletos; Yamabushi ainda não tem linha própria).
- Resolução em Sete Sopros: Atributo Mental; progressão de custo assumida como `3→2→1 PA` (3
  níveis); efeito restrito a Desvantagem de origem mental (não cobre a perda de PA de Desorientar
  /Atordoar, que é um mecanismo diferente) — a confirmar com o Daniel.
- Kachidoki: Atributo Social; assumido que dispara quando **você** (não um aliado) abate o
  inimigo, e que o próprio usuário não se cura, só os aliados no raio — a confirmar com o Daniel.

## Pendências criadas

- Nenhuma marcação `⚠️ A DEFINIR` nova. A pendência já existente em `PENDENCIAS.md` ("Daniel
  popula arquétipos dō/caminhos") segue válida — Bushidō é o primeiro de sete dō, e falta a linha
  própria do Yamabushi na tabela.

## Observações

As habilidades de caminho do Mukashi **não entram no `contrato/catalogo.json`** — o exportador
(`contrato/exportar_catalogo.py`) só lê as listas de habilidades do `sistema-base/`, não as de
cenário. Ou seja, a ficha/plataforma não vão autopreencher Resolução em Sete Sopros/Kachidoki
por enquanto. Não mexi no exportador nesta sessão (é uma mudança maior, de escopo separado) —
mas é bom o Daniel saber disso se for popular a ficha do playtest de 1º/ago com essas habilidades.
