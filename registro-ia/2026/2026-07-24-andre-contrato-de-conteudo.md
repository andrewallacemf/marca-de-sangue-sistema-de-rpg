---
data: 2026-07-24
pessoa: andre
ferramenta: claude-code
objetivo: fase 1 da evolução da plataforma — criar o contrato de conteúdo (limpeza oficial + catalogo.json) e ligar a ficha a ele
arquivos-alterados:
  - contrato/limpeza.py
  - contrato/exportar_catalogo.py
  - contrato/catalogo.json
  - contrato/README.md
  - playtest/geracao-pdf/gerar_manual_pdf.py
  - playtest/geracao-pdf/COMO-FUNCIONA.md
  - manual/gerar-conteudo.py
  - manual/README.md
  - ficha/src/lib/catalogo.ts
  - ficha/src/lib/catalogo-niveis.ts
  - ficha/src/components/ArmasSection.tsx
  - ficha/README.md
  - .github/workflows/deploy-ficha.yml
  - sistema-base/listas/tracos-base.md
  - PENDENCIAS.md
  - README.md
  - AGENTS.md
  - CONVENCOES.md
  - notas-de-design/pendencias-ficha-plataforma.md
  - notas-de-design/decisoes/2026-07-24-arquitetura-plataforma-e-backstages.md
  - registro-ia/2026/2026-07-24-andre-contrato-de-conteudo.md
---

# Sessão: contrato de conteúdo (fase 1 da plataforma)

## Prompts dados

> pode começar a fase 1

(Continuação da sessão de análise registrada em
`2026-07-24-andre-analise-plataforma.md`, executando a fase 1 do roteiro aprovado na
decisão `notas-de-design/decisoes/2026-07-24-arquitetura-plataforma-e-backstages.md`.)

## O que foi feito

1. **Criada a pasta `contrato/`** — a fronteira oficial entre o backstage do sistema e o
   da plataforma:
   - `limpeza.py`: a limpeza de bastidor **promovida** de
     `playtest/geracao-pdf/gerar_manual_pdf.py`. De quebra, `SUBSTITUICOES` e a remoção
     da seção "## Referências" passaram a valer **também para o site** (antes só o PDF
     as aplicava — o site publicava esses restos de bastidor).
   - `exportar_catalogo.py`: exportador que lê as listas do manual (equipamentos, ações,
     traços, proteções, 4 módulos de armas, 5 arquivos de habilidades) e gera o
     `catalogo.json` com **extração literal** (nada resumido, nada inventado).
   - `catalogo.json`: artefato **versionado** (exceção consciente à regra "gerado não
     versiona" — consumo direto pela plataforma via URL raw, diffs revisáveis, dev da
     ficha sem Python). 46 armas, 5 munições, 8 proteções, 52 habilidades (38 base com
     progressão completa + 14 experimentais), 58 traços, 9 propriedades.
   - `README.md`: o contrato documentado (schema, fluxo, regras, consumidores).
2. **PDF e site passaram a importar a limpeza do contrato** (inversão da dependência:
   antes o site importava de `playtest/`).
3. **Ficha ligada ao catálogo gerado**: `ficha/src/lib/catalogo.ts` e
   `catalogo-niveis.ts` viraram **adaptadores finos** sobre o JSON (mesma API pública —
   `CAT_ARMAS`, `CAT_PROTECOES`, `CAT_HABILIDADES`, `CAT_TRACOS`, `PROP_INFO`,
   `HABILIDADES_NIVEIS`); ~1.500 linhas de dados transcritos à mão foram removidas.
   Bônus: autopreenchimento de armas agora preenche a **durabilidade**.
4. **Validação ficha × manual** (script de comparação): a transcrição manual tinha
   **39 armas com dano defasado** (anterior ao aumento de letalidade de 19/07),
   **3 habilidades** (Golpe destruidor, Ocultar-se à vista, Reparar) e **6 traços**
   (Espreitador, Fôlego de ferro, Mão rápida, Zeloso, Reforçado, Guarda firme)
   **faltando**, desarmado/improvisadas com dano antigo, e o efeito de `PROJ.`
   desatualizado. Tudo corrigido automaticamente pela troca para o catálogo gerado.
5. **Workflow do Pages**: regenera o catálogo antes dos builds (avisa se o versionado
   estiver defasado); gatilho `playtest/geracao-pdf/gerar_manual_pdf.py` → `contrato/**`.
6. **Documentação**: nova seção 11 no `CONVENCOES.md`, regra 12 no `AGENTS.md`, linha
   do `contrato/` no `README.md` raiz, READMEs da ficha e do manual atualizados
   (o da ficha estava defasado), nota de rumo no `COMO-FUNCIONA.md` do PDF, decisão de
   24/07 atualizada (fase 1 ✅ e pontos em aberto resolvidos), backlog da plataforma
   com os achados (seção 2b).
7. **Verificações**: site regenerado (83 páginas, sem resíduos), corpus do PDF íntegro
   (0 linhas suspeitas), build da ficha ok (tsc + single-file), smoke test no navegador
   confirmando danos novos, progressão do Golpe surpresa, traços novos e `PROP_INFO`
   atualizado no bundle.

## Decisões tomadas

- **Onde mora o contrato:** pasta `contrato/` na raiz.
- **`catalogo.json` é versionado** (gerado, mas commitado) — motivos no
  `contrato/README.md`.
- **Extração literal** como princípio do exportador: fidelidade ao manual acima de
  concisão (a curadoria manual foi a causa do drift).
- **Habilidades/traços experimentais ficam fora da ficha** por enquanto (o JSON os traz
  com `experimental: true`; o adaptador filtra).
- A propriedade **`ACUI.`** ainda não aparece na grade da ficha → backlog UX
  (seção 2b de `pendencias-ficha-plataforma.md`).

## Pendências criadas

- **Maestrias de armadura sem efeito definido no manual** — `⚠️ A DEFINIR` adicionado em
  `sistema-base/listas/tracos-base.md` + linha no `PENDENCIAS.md` (o texto da ficha
  "Domínio no uso de armaduras leves" era invenção da transcrição antiga; o catálogo
  gerado deixa o efeito vazio até o grupo definir).

## Observações

- `INDICE.md` verificado: nenhum conceito de jogo foi criado, renomeado ou movido nesta
  sessão (a marcação `A DEFINIR` não muda as entradas de "maestria", que já apontam para
  `tracos-base.md`) — sem atualização necessária.
- A ficha agora **muda de conteúdo junto com o manual**: os danos exibidos no
  autopreenchimento subiram para os valores pós-playtest 2. As fichas salvas (`.mds.json`)
  não são alteradas — a pendência "regerar fichas antes do próximo playtest" continua
  valendo (já estava no `PENDENCIAS.md`).
- O playtest kit (`gerar_kit_cenarios*.py`) não foi tocado — segue com caminhos de
  sandbox hardcoded (fora do escopo desta fase).
