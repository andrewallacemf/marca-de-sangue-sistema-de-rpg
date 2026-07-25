---
data: 2026-07-24
pessoa: andre
ferramenta: claude-code
objetivo: fechar a v1 da plataforma — UI da ficha completa, import/export na tela e manual consultável
arquivos-alterados:
  - notas-de-design/decisoes/2026-07-24-arquitetura-plataforma-e-backstages.md
  - registro-ia/2026/2026-07-24-andre-v1-ficha-completa.md
---

# Sessão: v1 fechada — ficha completa na plataforma

## Prompts dados

> vamos fechar a v1

(Sequência das sessões de 24/07. Trabalho no repo da plataforma.)

## O que foi feito (no repo da plataforma)

1. **Editor da ficha completa** (`/personagens/[id]/ficha`): decisão de arquitetura —
   a UI trabalha **no próprio formato `.mds.json`** (carrega via `exportarMds`, edita o
   estado local com as fórmulas do game engine calculando os derivados em tempo real, e
   salva via `importarMds`). Zero mutations novas; comportamento idêntico ao da ficha
   offline por construção.
2. **Seções portadas**: identidade/experiência/PA/aptidões (exp usada, saldo e PA total
   calculados ao vivo), saúde por membro (dano 0–20 com status e permanentes), fadiga
   (0–50 com penalidade e inconsciência) e guardas, armas (com propriedades e
   **autopreenchimento do catálogo do banco**), proteções (regiões por membro,
   equipada), equipamentos/carga/tesouro (peso calculado), cards de habilidades &
   traços (usos por nível nas regras vigentes × nível único + custo de fadiga nas
   alternativas, autopreenchimento com progressão do manual), anotações.
3. **Autopreenchimento** (`game-engine/autopreencher.ts`): converte linhas dos
   catálogos (seedados do contrato) nos objetos da ficha — o papel do antigo
   `catalogo.ts` da ficha offline, mas lendo do banco.
4. **Import/export na tela**: botão "Importar .mds.json" na lista de personagens (cria
   personagem e abre a ficha) e "Exportar .mds.json" no editor (download compatível com
   a ficha offline). Botões de **Descanso** e toggle **vigente × alternativa** no editor.
5. **Manual consultável**: link "Manual ↗" no header autenticado e no editor da ficha,
   abrindo o portal do sistema (GitHub Pages) em nova aba.
6. **Qualidade**: suíte foi de 447 para **502 testes** (63 suítes), cobertura global
   **100%** mantida (inclusive branches), `tsc` limpo, `next build` ok com a rota nova.

## Decisões tomadas

- UI da ficha opera no formato `.mds.json` (estado local + salvar), não em mutations
  granulares — mantém uma única fonte de verdade de conversão e round-trip.
- Manual consultável na v1 = link para o portal (nova aba); o drawer embutido fica
  para depois (item da seção 4 de `notas-de-design/pendencias-ficha-plataforma.md`).
- Campos com `aria-label` em todos os inputs da ficha (acessibilidade + testabilidade).

## Pendências criadas

- Nenhuma de regra. UX futura já registrada no backlog da plataforma
  (`docs/PENDENCIAS.md` lá) e em `pendencias-ficha-plataforma.md` (manual em drawer,
  ACUI, munições).

## Observações

- **v1 completa**: contas, personagens, ficha completa editável com catálogos do
  manual, import/export compatível com a ficha offline e acesso ao manual.
- Roteiro segue para a **v2**: campanhas, fichas de inimigos e gestor de batalha.
