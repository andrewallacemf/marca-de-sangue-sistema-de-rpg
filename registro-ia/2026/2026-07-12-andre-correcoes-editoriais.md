---
data: 2026-07-12
pessoa: andre
ferramenta: claude-cowork
objetivo: aplicar as correções editoriais seguras (Seção 1) da revisão de consistência do sistema-base
arquivos-alterados:
  - sistema-base/conceitos/01-testes-e-contratestes.md
  - sistema-base/conflitos/04-conflito-social.md
  - sistema-base/conflitos/02-acoes-em-conflito.md
  - sistema-base/conflitos/01-conflito-fisico.md
  - sistema-base/criacao-de-personagem/01-passo-a-passo.md
  - sistema-base/listas/equipamentos-base.md
  - INDICE.md
---

# Sessão: correções editoriais do sistema-base (Seção 1 da revisão)

## Prompts dados

> Você vai editar a documentação do Marca de Sangue, um sistema de RPG de mesa. Antes de qualquer coisa, leia os arquivos `AGENTS.md` e `CONVENCOES.md` na raiz e siga-os à risca. Não invente regras nem lore a menos que solicitado: onde faltar informação, marque com `> ⚠️ A DEFINIR:` e anote no `PENDENCIAS.md`. Faça mudanças pequenas e me mostre o que pretende alterar antes de mexer em muitos arquivos. Ao final, crie o registro da sessão em `registro-ia/` conforme o protocolo do `AGENTS.md`, incluindo os prompts que eu dei.

> (Após uma investigação inicial que mirou a pasta errada — o kit inicial em `Downloads` — o André corrigiu:) "era pra você ter o conhecimento que esse projeto é um repositório no github 'marca-de-sangue-sistema-de-rpg'. E tem muito conteúdo já estruturado, investigue melhor o projeto e sua composição..." — e confirmou que `registro-ia/` e `PENDENCIAS.md` existem no repo.

> Escolhas nas perguntas do fluxo: foco da sessão = **"Revisar e reportar"**; prevenção de erro de pasta = **"Desconectar o kit"**; próximos passos após o relatório = **"Só o relatório por ora"**.

> pode corrigir os apontamentos em "1. Correções editoriais seguras (não mudam regra)"

## O que foi feito

Aplicadas as correções editoriais da Seção 1 do relatório de revisão de consistência (nenhuma muda regra):

1. `conceitos/01-testes-e-contratestes.md` — link quebrado `#elevação` reapontado para `../conflitos/01-conflito-fisico.md#elevação`; no exemplo do fogo, "teste de dificuldade natural" → "contrateste de dificuldade natural".
2. `conflitos/04-conflito-social.md` — "PAs" → "PA".
3. `conflitos/02-acoes-em-conflito.md` — "1 Ponto de ação" → "1 ponto de ação".
4. `conflitos/01-conflito-fisico.md` — "malha quadrada" → "malha quadriculada" (3 ocorrências).
5. `criacao-de-personagem/01-passo-a-passo.md` — nomes de fichas alinhados aos de `02-fichas.md`.
6. `listas/equipamentos-base.md` — munição "Bala e pólvora" → "Bala de pólvora".
7. `INDICE.md` — termo "Malha de combate físico (hexagonal / quadrada)" → "(hexagonal / quadriculada)".

Todos os arquivos de conteúdo tiveram `atualizado-em` atualizado para 2026-07-12.

## Decisões tomadas

- Tipo de malha quadrada padronizado como **quadriculada**, conforme a decisão de 11/07/2026 (item B2 de `notas-de-design/decisoes/2026-07-11-terminologia-alcance-descanso.md`) e a auditoria de terminologia (item b12).
- `conceitos/00-indice.md` (item 1.6 do relatório) **não** foi alterado: a linha do arquivo 09 já traz "🧪 em avaliação" — não havia correção a fazer.
- Nomes de fichas em `01-passo-a-passo.md` mapeados como "Ficha base" → **"Ficha de informações base"** e "Fichas de características" → **"Ficha de habilidades e traços"**. Interpretação a validar pelo grupo (a `02-fichas.md` também oferece a "Ficha completa", que reúne as duas).

## Pendências criadas

- Nenhuma. Nenhuma marcação `⚠️ A DEFINIR` foi criada ou resolvida (as correções eram editoriais e não constavam no `PENDENCIAS.md`); o `PENDENCIAS.md` ficou inalterado.
- Fora do escopo desta sessão e ainda em aberto: as contradições da **Seção 2** e os **13 achados novos** da Seção 4 do relatório de revisão — aguardando o André decidir se entram no `PENDENCIAS.md` e/ou viram pauta de mesa.

## Observações

- A sessão começou como "revisar e reportar": o relatório completo foi entregue como arquivo **fora** do repositório (não versionado). Só depois o André aprovou aplicar a Seção 1.
- Ambiente: os arquivos do repo aparecem como *placeholders* de nuvem no sandbox; o trabalho foi feito com as ferramentas de edição de arquivo (lado Windows), **sem** rodar git. Um `git status` inicial deixou um `.git/index.lock` que o ambiente não conseguiu remover — **apagar `.git/index.lock` antes do próximo commit**.
- A fazer (André): conferir o diff no GitHub Desktop, commitar e sincronizar.

Sugestão de mensagem de commit:
`corrige apontamentos editoriais do sistema-base: link de elevacao, contrateste de dificuldade natural, malha quadriculada, PA, nomes de fichas e bala de polvora`
