---
data: 2026-07-24
pessoa: andre
ferramenta: claude-code
objetivo: rodada 2 da ficha — modelo de saúde v2 (dano permanente separado), marcadores visuais, rota única e mobile
arquivos-alterados:
  - notas-de-design/decisoes/2026-07-24-ficha-schema-v2-dano-permanente.md
  - notas-de-design/pendencias-ficha-plataforma.md
  - ficha/NOTAS-DE-DESIGN.md
  - ficha/src/lib/ficha.ts
  - ficha/src/App.tsx
  - sistema-base/conflitos/02-acoes-em-conflito.md
  - PENDENCIAS.md
  - registro-ia/2026/2026-07-24-andre-rodada-2-ficha-saude-v2.md
---

# Sessão: rodada 2 da ficha — saúde v2 e marcadores

## Prompts dados

> Eu acho que a gente precisa fazer uma segunda rodada de melhoria da ficha de
> personagem. […] na ficha da plataforma nova, não tem os contadores marcadores de
> fadiga corretamente, nem os de saúde. […] Em ambas as fichas, o comportamento do
> dano permanente também [não] está correto. Uma vez que o personagem leva dano
> permanente aquele bloquinho tem que ficar […] basicamente para sempre. […] não
> precisa de uma versão resumida da ficha […] e a versão mobile está toda quebrada.

Decisões do André na sessão: corrigir **as duas fichas** (schema v2 compartilhado);
remoção de permanente por **clique duplo + confirmação E item de reset no menu ⋯**
da plataforma.

## O que foi feito (neste repo)

1. **`ficha/src/lib/ficha.ts` — modelo v2**: `SCHEMA_VERSION = 2`; tipo
   `SaudeMembro {dano, permanente}` (invariante `dano + permanente <= 10`); funções
   novas `saudeDeEscalar`, `totalMembro`, `cellsFromSaude`, `statusMembro` (nova
   assinatura), `aplicarDano` (conversão em membro cheio + 1 fadiga por ponto),
   `curarDano` (só o curável), `removerPermanente`, `resetarPermanentes`,
   `pvRestante`, `redDanoPorMembro`; `migrarFicha` aceita v0 (array), v1 (escalar) e
   v2 **pela forma do dado**. `LS_KEY` não mudou (autosave v1 converte no load).
   Nota de sincronização recíproca com o port da plataforma no topo do arquivo.
2. **`ficha/src/App.tsx`**: células de saúde usam o modelo novo — clique marca dano
   via `aplicarDano`; **célula ■ não responde a clique simples**; clique duplo em ■
   pede `confirm()` e remove 1 permanente; botão − virou "Curar 1 (não remove
   permanente nem fadiga)"; **trilha de fadiga refeita: 5 fileiras de 10** com
   separação a cada 5 e rótulos 10/20/30/40/50 (resolve o item 13 do
   NOTAS-DE-DESIGN); textos de ajuda atualizados.
3. **Build da ficha verificado localmente** (`tsc -b && vite build` ok). O `dist/` é
   gitignored — quem publica é o workflow `deploy-ficha.yml` a cada push (GitHub
   Pages rebuilda sozinho); só cópias locais soltas do HTML precisam ser trocadas.
4. **Smoke test no navegador** (build novo servido localmente): migração v1→v2 na
   carga (escalar 12 → 2■+8✕ incapacitado; 20 → 10■ invalidado), autosave regravado
   como v2, conversão ao encher o membro com fadiga automática, − não remove ■,
   dblclick cancelado/confirmado. Tudo conforme a regra.
5. **Decisão registrada** em
   `notas-de-design/decisoes/2026-07-24-ficha-schema-v2-dano-permanente.md`
   (formato, tabela de conversão, semântica, compatibilidade, melhorias futuras).

## O que foi feito (no repo da plataforma, mesma sessão)

- Engine v2 espelhado (`mds-model.ts`, `formulas.ts`, `convert.ts` com leitura
  defensiva da janela de deploy), coluna `permanente` no Prisma + migration com
  conversão de dados (aplicada no Postgres local; produção pendente de aprovação).
- UI nova: células de saúde clicáveis, trilha de fadiga 5×10, fadiga automática ao
  marcar dano, AlertDialog para remover permanente (dblclick), menu ⋯ com "Resetar
  danos permanentes" e "Excluir personagem", stat-cards (exp/PA/fadiga/PV), badge de
  redutor de dano por membro, Descanso com confirmação.
- Rotas: `/personagens/[id]` **é** a ficha completa (resumo morreu);
  `/personagens/[id]/ficha` redireciona; criar/importar navegam direto para a ficha.
- Mobile: flex-wrap nas linhas longas, grids com breakpoint base, alvos de toque
  ≥28px, faixa `md:` nos wrappers.
- Qualidade: 66 suítes / 530 testes, cobertura global 100%, `tsc` limpo, build
  limpo de produção.

## Revisão adversarial (pós-implementação, mesma sessão)

Uma revisão multi-agente (4 dimensões: regras, dados, UI, testes; cada achado
verificado por um cético) confirmou 12 achados; todos corrigidos na sequência:

1. **Migração v0→v2 apagava permanentes parciais** — a redução antiga (array→escalar)
   convertia células ■ de membro não-cheio em dano curável. Corrigida nos dois ports:
   permanentes agora contam direto das células `=== 3`.
2. **Tabela do d6 do ataque descuidado no manual** contradizia as fichas: a decisão do
   playtest 1 (Perna D = 3 · Perna E = 6, aplicada às fichas em 18/07) nunca tinha
   chegado ao texto — `sistema-base/conflitos/02-acoes-em-conflito.md` alinhado às
   fichas; pendência "confirmar o mapa final na mesa" registrada em PENDENCIAS.md.
   **(Única mudança de texto de regra da sessão — aplica decisão já documentada.)**
3. Plataforma: `character.get` normaliza a saúde com a mesma leitura defensiva do
   export; trilha de fadiga rolável/menor no mobile (não é mais cortada em ~320px);
   remoção de ■ acessível por teclado (Enter/Espaço abrem a mesma confirmação — nas
   duas fichas); tela de erro distingue NOT_FOUND de falha de rede; botão − de cura
   desabilitado sem dano curável; + 6 lacunas de teste fechadas (conversão em membro
   cheio via UI, Cancelar real dos diálogos, fiação do menu ⋯, schemaVersion do
   envelope, reset preservando fadiga).

## Decisões tomadas

- Ver `notas-de-design/decisoes/2026-07-24-ficha-schema-v2-dano-permanente.md`
  (não é mudança de regra; é correção de implementação + schema v2 do `.mds.json`).
- Tabela do d6 do manual alinhada às fichas (item 2 acima) — decisão de playtest já
  registrada, só faltava aplicar; confirmação final do grupo pendente.

## Pendências criadas

- **Atualizar cópias soltas do HTML da ficha** (builds antigos zeram a saúde de
  arquivos v2 ao carregar) — anotada em `pendencias-ficha-plataforma.md`.
- Melhorias futuras documentadas na decisão (descanso curto/longo, tratamento
  improvisado / falta de tratamento → possível v3 com 3 contadores por membro).

## Observações

- Nenhum texto de regra em `sistema-base/` foi alterado.
- Verificação de impressão A4 da trilha nova (5 fileiras em vez de 2) fica para o
  André conferir no preview antes do próximo playtest impresso.
