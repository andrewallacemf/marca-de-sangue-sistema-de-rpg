# Ficha de personagem — Marca de Sangue

Ficha interativa: preencher, marcar dano/fadiga, **salvar/carregar** um arquivo e
**imprimir em A4**. Roda no navegador (online no GitHub Pages ou abrindo o arquivo
localmente). React + Vite + Tailwind, no estilo shadcn/ui.

## Para o jogador (sem instalar nada)

- **Online:** https://andrewallacemf.github.io/marca-de-sangue-sistema-de-rpg/ficha/ — a raiz do
  site agora é o **manual** (regras, módulos, cenários); a ficha fica em `/ficha/`. O botão
  **Manual** no topo da ficha e o **Abrir a ficha** no manual ligam os dois. Publicado
  automaticamente pelo GitHub Actions a cada push em `ficha/`, `manual/`, `sistema-base/`,
  `modulos/` ou `cenarios/`.
- **Offline:** baixe o arquivo `dist/index.html` e dê um clique duplo — abre no navegador,
  funciona sem internet. Use **Salvar** para baixar sua ficha (`.mds.json`) e **Carregar**
  para retomá-la depois. Os dados também ficam guardados no navegador (autosave).

## Para desenvolver / gerar o arquivo

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # gera dist/index.html (arquivo único, autossuficiente)
```

O build usa `vite-plugin-singlefile`: tudo (HTML + CSS + JS) sai embutido em um único
`dist/index.html`, que serve tanto para publicar quanto para abrir localmente.

**Catálogo vem do contrato de conteúdo.** Os dados de autopreenchimento (armas,
proteções, habilidades, traços) **não são mantidos aqui**: `src/lib/catalogo.ts` é um
adaptador sobre [`contrato/catalogo.json`](../contrato/README.md), gerado das listas do
manual. Mudou uma lista? `python contrato/exportar_catalogo.py` e rebuild — nada de
editar dados na mão.

## Estado atual

- Ficha completa em 3 páginas: informações/experiência/aptidões/PA, armas, proteções
  (com regiões), saúde clicável por membro, fadiga 0–50, equipamentos/carga/tesouro,
  anotações e **cards de habilidades & traços** (usos por nível ou nível único conforme
  a versão de regras).
- **Catálogos com autopreenchimento** (armas, proteções, habilidades, traços) vindos do
  contrato de conteúdo.
- Toggle **regras vigentes × alternativas** (muda fadiga, custos e UI; gravado no arquivo).
- Salvar/carregar `.mds.json` + autosave (localStorage) + preview/impressão A4 + painel
  "Como usar".

## Próximos passos (planejados)

- Impressão A4 estruturada de verdade (grid por folha, quebras lógicas) — ver
  [NOTAS-DE-DESIGN.md](NOTAS-DE-DESIGN.md).
- Backlog de UX/produto: [notas-de-design/pendencias-ficha-plataforma.md](../notas-de-design/pendencias-ficha-plataforma.md).
- Componentes oficiais do shadcn/ui (Radix) — opcional, ao final.
