---
data: 2026-07-28
pessoa: andre
ferramenta: claude-code
objetivo: consolidar os inimigos do kit de playtest em fonte canônica e exportá-los no contrato (chave `inimigos` do catalogo.json)
arquivos-alterados:
  - playtest/cenarios/inimigos-do-kit.md
  - contrato/exportar_catalogo.py
  - contrato/catalogo.json
  - contrato/README.md
  - INDICE.md
  - PENDENCIAS.md
  - registro-ia/2026/2026-07-28-andre-contrato-inimigos.md
---

# Sessão: contrato de inimigos (biblioteca de inimigos da plataforma, v2 fase 3)

## Prompts dados

> Pode começar a fase 3

(Fase 3 da v2 da plataforma: biblioteca de inimigos e refinamentos. Via perguntas,
o André decidiu: **semear a biblioteca da plataforma com os inimigos do kit de
playtest via contrato** — seguindo a regra "consumidor não transcreve" —, no formato
**bloco enxuto** do guia do narrador, com elites por ficha completa.)

## O que foi feito

- Criado `playtest/cenarios/inimigos-do-kit.md`: os 14 tipos de inimigo dos 6
  cenários de playtest, consolidados em tabelas (uma linha por tipo, com qtd, tier
  de queda, entrada, PA, arma, dano, PA da arma, alcance, redução e tática). Os
  dados vieram do script `playtest/geracao-pdf/gerar_controle_inimigos.py` (34
  linhas-instância) cruzados com a prosa dos kits 01–06 (tiers de queda) — nada
  foi inventado.
- `contrato/exportar_catalogo.py` ganhou o parser `parse_inimigos` e passou a
  emitir a chave `inimigos` no `catalogo.json` (14 itens, todos com
  `proposta: true` — a regra de minion não está fechada). Lacunas saem vazias com
  aviso no console (regra 2 do contrato).
- `contrato/README.md`: schema da chave `inimigos` documentado; consumidores
  atualizados (a plataforma passa a semear a biblioteca padrão de inimigos).
- `INDICE.md`: verbetes novos **Inimigos (blocos do kit de playtest)** e
  **Minion**; verbete **NPC** ganhou a menção ao arquivo novo.
- `PENDENCIAS.md`: pendência "Minions — tratamento único" atualizada com a
  consolidação e as lacunas de tier.

## Decisões tomadas

- Os inimigos do kit entram no contrato **como proposta** (`proposta: true` em
  todos os itens) — a pendência "Minions — tratamento único" continua aberta e é
  do grupo. Fechar a regra NÃO fazia parte desta sessão.
- O campo `queda` (número) só é emitido nos tiers fraco/médio/forte, onde significa
  dano TOTAL para cair. Colosso (chefe, 5 regiões de 20) e Fragmentos (10 PV por
  região) carregam a semântica no `quedaTexto`/tática para ninguém confundir região
  com total.
- A fonte vive em `playtest/cenarios/` (não em `sistema-base/criaturas/`): é
  material de playtest, não bestiário canônico. Quando a regra fechar, o caminho é
  promover o formato ao template de criatura.

## Pendências criadas

- Nenhuma pendência nova — a linha existente "Minions — tratamento único" foi
  estendida: os inimigos dos **cenários 3 e 4** (Ferrasca, Atirador Ferrasca,
  Bandido, Arqueiro, Chefe de bando) nunca tiveram tier de queda anotado no kit e
  ficaram com a coluna Queda vazia (⚠️ A DEFINIR, aviso do exportador).

## Correções pós-revisão (mesma sessão, antes do commit)

A revisão adversarial da fase (multi-agente, nos dois repos) apontou três ajustes
aqui: o verbete **Minion** do `INDICE.md` foi reposicionado na ordem alfabética da
seção M e o `define:` passou a apontar para o `inimigos-do-kit.md` (o guia do
narrador não traz os tiers); a linha do `PENDENCIAS.md` deixou de dizer que os
Fragmentos estão "sem tier" (Colosso e Fragmentos usam saúde por região — os
rótulos `chefe`/`especial` da consolidação não são tiers de minion); e o
`exportar_catalogo.py` agora avisa quando uma tabela de inimigos fica fora do
padrão de seção `## Cenário N — Título` (antes a perda parcial era silenciosa).

## Observações

- Consumidor novo: a plataforma (repo `plataforma-rpg-marca-de-sangue`) vai semear
  a "biblioteca de inimigos" (v2 fase 3) a partir da chave `inimigos`. A ficha
  interativa ignora a chave nova (importa o JSON e só lê o que conhece).
- O script `gerar_controle_inimigos.py` continua sendo o gerador da planilha de
  controle; a fonte markdown nova é quem alimenta o contrato. Se os valores
  mudarem num playtest futuro, atualizar a tabela e regenerar o catálogo no mesmo
  commit.
