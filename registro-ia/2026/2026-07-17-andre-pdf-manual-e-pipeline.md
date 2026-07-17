---
data: 2026-07-17
pessoa: andre
ferramenta: claude-cowork
objetivo: gerar o PDF limpo do manual base para o playtest e versionar o pipeline de geração
arquivos-alterados:
  - playtest/Marca-de-Sangue-Manual-Base.pdf (novo)
  - playtest/geracao-pdf/gerar_manual_pdf.py (novo)
  - playtest/geracao-pdf/COMO-FUNCIONA.md (novo)
---

# Sessão: PDF do manual base + pipeline de geração

## Prompts dados

> fechar um PDF com o sistema base, só com as informações do sistema, sem as anotações
> extras (...) Apenas o manual, como se ele já fosse um manual final e fechado em PDF.

> Registra todos os seus aprendizados (...) numa skill de criação de PDF (...) para
> garantir que nas próximas vezes você não tenha que resolver os mesmos problemas.

> No final de cada sessão, está vazando uma descrição de título, regra de cenário e
> datas de atualização. (...) era para essas informações não estarem aparecendo, correto?

## O que foi feito

- Montado o **PDF limpo** do "Manual base do jogador" (A4, capa, sumário com números de
  página, tema vinho/dourado). Só regras finais — sem bastidor.
- **Bug encontrado e corrigido**: os arquivos de `sistema-base/` começam com **BOM
  UTF-8** (editados no Windows/GitHub Desktop). Isso quebrava a remoção do frontmatter,
  e `titulo/tipo/cenario/tags/atualizado-em` **vazavam** para o fim de cada capítulo no
  PDF. Corrigido lendo com `utf-8-sig` + regex tolerante, e adicionada verificação
  automática de vazamento de frontmatter.
- Pipeline consolidado num **script único versionado** (`playtest/geracao-pdf/
  gerar_manual_pdf.py`) com doc de armadilhas (`COMO-FUNCIONA.md`).
- Empacotada uma **skill instalável** (`marca-de-sangue-pdf.skill`) entregue ao André
  para instalar em Settings > Capabilities.

## Exclusões do manual (confirmadas com o André)

Fora do PDF: mecânica alternativa de fadiga (`conceitos/09`), lista social experimental,
`00-indice`, `habilidades-base-gerais` (índice) e READMEs.

## Armadilhas registradas (para não repetir)

1. BOM UTF-8 → frontmatter vazando (ler com `utf-8-sig`).
2. Citações de bastidor multi-linha → descartar o bloco `>` inteiro.
3. Emojis sem fonte (`💡🛡🐢`) → remover com o espaço anterior (senão quebra `**negrito**`).
4. Frases de bastidor em parágrafos + seção `## Referências` → substituição/regex.

## Pendências

- Próximo entregável: 5 micro-cenários de playtest com fichas prontas (8→**15**/30/50/70/100 exp).
