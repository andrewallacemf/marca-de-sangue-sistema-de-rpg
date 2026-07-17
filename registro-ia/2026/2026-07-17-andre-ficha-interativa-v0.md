---
data: 2026-07-17
pessoa: andre
ferramenta: claude-cowork
objetivo: iniciar a ficha de personagem interativa (webapp) — protótipo v0 da ficha principal
arquivos-alterados:
  - ficha/ (novo projeto: React + Vite + TS + Tailwind, estilo shadcn, single-file)
---

# Sessão: ficha de personagem interativa (v0)

## Decisões de arquitetura (André confirmou)

- **Onde:** subpasta `ficha/` no repo de regras.
- **Rodar sem `npm`:** build gera **um único `index.html` autossuficiente** (via
  `vite-plugin-singlefile`) que serve para o GitHub Pages (online) **e** para abrir
  localmente com clique duplo (offline). O jogador nunca roda nada.
- **Stack:** React + Vite + TypeScript + Tailwind, no estilo shadcn/ui (tokens + acento
  vinho). No v0, componentes shadcn-like sem Radix (build robusto); trocar pelos oficiais
  depois.
- **v1 = "formulário burro"** (usuário digita tudo); catálogos e automações vêm depois.
- **Salvar/carregar:** exporta `.mds.json` (com `schemaVersion` e `rulesVersion`) +
  autosave em localStorage. Um personagem por arquivo.
- **Duas versões de regra independentes:** toggle **vigente × alternativa**; a versão fica
  gravada no arquivo e é restaurada ao carregar. No v0 afeta a leitura da trilha de fadiga.
- **Impressão A4:** CSS de impressão (`@page A4`) + modo "A4" de pré-visualização na tela.
- Layout **não copia** a ficha antiga; reorganizado para melhor preenchimento (digital e
  impresso) e alinhado às regras atuais.

## O que foi feito (v0)

Ficha principal navegável: Informações; Experiência & contadores; Aptidões (total/usado);
Pontos de ação; Fadiga (trilha 0–50 clicável, com marcas de limiar que mudam entre vigente
e alternativa) & guardas; Habilidades (grade com níveis marcáveis); 2 Armas (com
propriedades); Proteções (3 espaços); Saúde (6 membros, células clicáveis
superficial→profundo→permanente); Anotações. Barra com Nova/Carregar/Salvar/A4/Imprimir.

Build verificado: `tsc` + `vite build` sem erros → `dist/index.html` (~176 KB, arquivo
único). Não foi possível screenshot no sandbox (sem navegador; download do Chromium
bloqueado; extensão do Chrome do usuário estava desconectada no momento) — o arquivo foi
entregue para o André abrir e reagir.

## Divergências da ficha antiga já corrigidas / a decidir

- Fadiga: substituída a trilha antiga (−3..−8) pela regra atual (−1 PA a cada 5, até 50).
- Exp inicial padrão do campo = 15.
- Propriedade "ARME" da ficha antiga tratada como **ARRE** (arremesso).
- A definir com o grupo: localização de dano por dado (d6/d8) — não incluída no v0.

## Próximos passos

Reagir ao v0 → ajustar layout/campos → páginas de equipamentos/tesouro/anotações e cards
de habilidades/traços → catálogos do manual → componentes oficiais do shadcn → publicar no
GitHub Pages.
