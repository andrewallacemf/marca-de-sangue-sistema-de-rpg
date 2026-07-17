# Como gerar o Manual base em PDF

Este diretório contém o pipeline que transforma os arquivos de `sistema-base/` num
**PDF limpo** do "Manual base do jogador" — só as regras, sem nada de bastidor
(notas da IA, decisões, propostas, status, datas de atualização).

## Como rodar

No sandbox Linux (ou qualquer ambiente com Python 3):

```bash
pip install weasyprint markdown --break-system-packages   # só na 1ª vez
python3 gerar_manual_pdf.py                                # detecta a raiz do repo sozinho
```

Opções úteis:

```bash
python3 gerar_manual_pdf.py --data 18/07/2026 \
    --saida ../Marca-de-Sangue-Manual-Base.pdf \
    --md /tmp/manual-base.md      # salva também o markdown limpo, p/ conferência
```

O script sempre imprime um relatório de verificação. Se aparecer
`ATENÇÃO: N linha(s) suspeita(s)`, **algo vazou** — investigue antes de distribuir.

## O que entra e o que fica de fora

**Entra** (na ordem do manual): introdução, conceitos 01–08 e 10, conflitos 01–04,
criação de personagem 01–02, progressão 01, e as listas (aptidões, habilidades
físicas/ágeis/mentais/sociais, traços, ações em combate, equipamentos, proteções, itens).

**Fica de fora** (de propósito): `00-indice`, `09-mecanica-alternativa-*` (experimental),
`habilidades-experimentais-sociais` (rascunho, depende da malha de embate social),
`habilidades-base-gerais` (é só um índice) e todos os `README`. Para incluir/excluir
capítulos, edite a lista `ARQUIVOS` no topo do script.

## Armadilhas já resolvidas (não repetir)

1. **BOM UTF-8 no início dos arquivos** — arquivos editados no Windows/GitHub Desktop
   começam com o byte-order-mark `EF BB BF`. Isso fazia `startswith("---")` dar falso
   e **todo o frontmatter (titulo, tipo, cenário, tags, atualizado-em) vazava** para o
   fim de cada capítulo no PDF. Solução: ler com `encoding="utf-8-sig"` **e** remover o
   frontmatter com regex tolerante a espaços. Sempre verifique o PDF final por
   `titulo:` / `atualizado-em:`.

2. **Blocos de citação de bastidor multi-linha** — remover só a *linha* que contém o
   marcador (ex.: "✅ Aprovado pelo grupo…") deixava as linhas de continuação (sem
   marcador) órfãs no texto. Solução: agrupar linhas `>` consecutivas e descartar o
   **bloco inteiro** se qualquer linha tiver um marcador. Marcadores em `BASTIDOR`.

3. **Emojis sem fonte** — o sandbox não tem fonte de emoji colorido; `💡 🛡 🐢` virariam
   quadrados ("tofu"). São removidos. **Cuidado:** remova o emoji **junto com o espaço
   anterior**, senão `**Texto 🛡**` vira `**Texto **`, e o espaço antes do `**` de
   fechamento quebra o negrito do Markdown (aparecem `**` literais na tabela). O `→` é
   mantido (a fonte DejaVu tem o glifo).

4. **Frases de bastidor embutidas em parágrafos** (não em citações) — ex.: "Efeitos
   definidos na reunião de 11/07/2026 (ver [decisões]…)". Não são pegas pelo filtro de
   citações; são trocadas explicitamente em `SUBSTITUICOES`. Se novas frases assim
   aparecerem, adicione-as lá.

5. **Seção "## Referências"** — cada arquivo termina com uma seção de referências de
   bastidor. É removida por regex até o próximo separador `---`.

## Ferramentas

- **weasyprint** (HTML/CSS → PDF) foi escolhido em vez de `pandoc + xelatex`: melhor
  controle de layout via CSS e lida bem com unicode. O xelatex é hostil a emojis.
- **markdown** (python-markdown) com extensões `tables, fenced_code, sane_lists,
  attr_list, toc`. O `toc` (profundidade 1–2) gera o sumário; os números de página no
  sumário vêm do CSS `a::after { content: leader('.') target-counter(attr(href), page) }`.
- Fontes: **DejaVu Serif/Sans/Mono** (já instaladas no sandbox).
- Tema visual "marca de sangue": vinho `#5c0d16` + dourado `#b58a4e`.

## Como conferir o resultado

```bash
# nº de páginas + varredura de vazamento
python3 -c "from pypdf import PdfReader; r=PdfReader('../Marca-de-Sangue-Manual-Base.pdf'); \
print(len(r.pages),'páginas'); \
print('vazou' if any('atualizado-em' in (p.extract_text() or '') for p in r.pages) else 'limpo')"

# renderizar páginas para inspeção visual (precisa de poppler-utils)
pdftoppm -png -r 75 -f 1 -l 3 ../Marca-de-Sangue-Manual-Base.pdf /tmp/preview
```
