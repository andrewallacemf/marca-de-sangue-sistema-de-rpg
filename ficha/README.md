# Ficha de personagem — Marca de Sangue

Ficha interativa: preencher, marcar dano/fadiga, **salvar/carregar** um arquivo e
**imprimir em A4**. Roda no navegador (online no GitHub Pages ou abrindo o arquivo
localmente). React + Vite + Tailwind, no estilo shadcn/ui.

## Para o jogador (sem instalar nada)

- **Online:** https://andrewallacemf.github.io/marca-de-sangue-sistema-de-rpg/ (publicado automaticamente pelo GitHub Actions a cada push em `ficha/`).
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

## Estado atual (v0)

- Ficha **principal** como formulário preenchível (campos livres — "formulário burro").
- Trackers clicáveis: **saúde** (superficial ／ · profundo ✕ · permanente ■ por membro) e
  **fadiga** (0–50, com marcas de limiar).
- Toggle **regras vigentes × alternativas** (muda a leitura da fadiga; gravado no arquivo).
- Salvar/carregar `.json` + autosave (localStorage) + impressão A4.

## Próximos passos (planejados)

- Páginas de **equipamentos/carga/tesouro** e **cards de habilidades/traços**.
- **Catálogos** do manual (escolher arma/proteção/habilidade de uma lista que autopreenche).
- Componentes oficiais do shadcn/ui (Radix) e refino do layout de impressão.
