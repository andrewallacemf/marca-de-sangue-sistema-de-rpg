---
data: 2026-07-27
pessoa: daniel
ferramenta: claude-cowork
objetivo: mapear as armas japonesas do Mukashi para os módulos de armas existentes
arquivos-alterados:
  - cenarios/mukashi/arsenal.md
  - modulos/armas-brancas/README.md
  - modulos/armas-exoticas/README.md
  - modulos/armas-de-fogo/README.md
  - PENDENCIAS.md
  - contrato/catalogo.json
---

# Sessão: arsenal de armas japonesas do Mukashi

## Prompts dados

> Vou trabalhar no Cenário Mukashi. Primeiro, vamos fazer um módulo de armas japonesas. Com
> base nas informações e na estrutura já definida no manual para armas, crie um módulo dentro
> do Mukashi com essas informações. Se faltar alguma informação me consulte e faça propostas de
> como completar. [colou uma lista de 16 armas japonesas com categoria/peso, dano e
> propriedades, agrupadas em lâminas/espadas, armas de haste, armas de impacto e armas à
> distância, mais uma matriz de referência de dano por tamanho×tipo]

> 1 não. 2 mantém. 3 ok por enquanto.
> (respostas às 3 perguntas em aberto deixadas no fim da primeira rodada: 1) Naginata/Nagamaki
> ganham contundente? — não; 2) Teppō muda para a linha pesada do rifle? — mantém a linha média;
> 3) preços propostos de Wakizashi/Bô/Sasumata? — ok por enquanto.)

## O que foi feito

Antes de editar, foi feita a análise de impacto exigida pelo `AGENTS.md`: os valores de dano
colados pelo Daniel batiam com a matriz **antiga** de `equipamentos-base.md` (anterior ao
aumento de letalidade de 19/07/2026), e o pedido de "módulo próprio" contrariava a decisão já
registrada no `arsenal.md` de que armas japonesas **não** ganham módulo — elas apontam para as
famílias existentes (`armas-brancas`, `armas-exoticas`, `arcos-e-bestas`, `armas-de-fogo`). Os
dois pontos foram levados ao Daniel antes de qualquer edição; ele escolheu manter o padrão de
apontamento existente e recalcular tudo pela matriz atual.

Com isso decidido, cada uma das 16 armas foi cruzada com as tabelas dos módulos: várias já
estavam corretamente mapeadas (Katana, Nodachi/Ōdachi, Tantō, Kusarigama, Yumi, Shuriken);
outras foram remapeadas para a linha certa por terem mudado de categoria/tipo (Yari, Naginata,
Tetsu-bō/Kanabō, Yumi); e três não tinham equivalente, então ganharam linhas novas nos módulos
(Wakizashi/Kodachi, Bô, Sasumata), com preço/alcance marcados como proposta da IA a validar no
playtest. `arsenal.md` foi reescrito com a tabela completa e as notas de cada remapeamento.

Depois das edições, `python contrato/exportar_catalogo.py` foi rodado (regra do `AGENTS.md`
para módulos de armas) — nenhum aviso novo apareceu; os três avisos existentes são de uma
pendência antiga (maestria de armaduras) e não têm relação com esta sessão.

## Decisões tomadas

- Não criar módulo próprio para armas japonesas — manter o padrão de apontamento do `arsenal.md`
  (decisão do Daniel, confirmada antes de editar).
- Usar a matriz de dano vigente (19/07/2026), recalculando todas as armas a partir da
  categoria/peso indicada, em vez dos valores colados (que eram da matriz antiga).
- Naginata e Nagamaki remapeadas de "Alabarda" (só perfurante) para o grupo "Mangual pesado…"
  (cortante/perfurante), para permitir o ataque cortante que o Daniel pediu.
- Tetsu-bō/Kanabō remapeado do grupo cortante/perfurante para "Martelo Grande, Martelo de
  batalha" (contundente puro), que é o tipo de dano correto para uma clava de ferro.
- Yari remapeado de "Lança, Seta" (média) para "Lança longa" (pesada), que bate com o alcance de
  2m a 3m pedido.
- Yumi restrito à linha "Arco longo, Besta pesada" (estava apontando ambiguamente para duas
  linhas diferentes).
- Teppō entrou na linha média de armas de fogo (mesmo grupo do Arquebus), aceitando alcance
  menor que o histórico por equilíbrio de jogo.
- **Confirmado pelo Daniel:** Naginata/Nagamaki ficam só cortante/perfurante, sem opção
  contundente. Teppō mantém a linha média (não move para a linha pesada do rifle). Preços de
  Wakizashi/Kodachi, Bô e Sasumata aprovados como padrão provisório.

## Pendências criadas

- Linha em `PENDENCIAS.md` (seção Cenários): só resta validar no playtest o preço/alcance das
  três linhas novas (Wakizashi/Kodachi, Bô, Sasumata) — Naginata/Nagamaki e Teppō já foram
  decididos nesta sessão e saíram da lista de pendências.
- A linha antiga do `PENDENCIAS.md` sobre "Daniel popula armas japonesas" foi ajustada: essa
  parte está feita; restam dō e a parte mágica.

## Observações

Nenhuma outra.
