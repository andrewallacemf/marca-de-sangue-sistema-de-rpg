---
data: 2026-07-19
pessoa: andre (decisões do grupo)
ferramenta: claude-cowork
objetivo: Fase C — extrair os catálogos de arma/proteção para módulos (coleção armas + protecoes)
arquivos-alterados:
  - modulos/armas-brancas/README.md (novo)
  - modulos/armas-exoticas/README.md (novo)
  - modulos/arcos-e-bestas/README.md (novo)
  - modulos/armas-de-fogo/README.md (novo)
  - modulos/protecoes/README.md (novo)
  - sistema-base/listas/equipamentos-base.md (só o sistema + ponteiros)
  - sistema-base/listas/protecoes-base.md (só o sistema + ponteiro)
  - modulos/colecoes.md, modulos/README.md, INDICE.md
  - ficha/src/lib/catalogo.ts (comentário de origem)
  - notas-de-design/arquitetura-da-informacao.md, notas-de-design/proposta-modulos-armas.md, PENDENCIAS.md
---

# Sessão: Fase C — coleção de armas em módulos

## Prompts dados

> "1" (executar a Fase C agora) — após confirmar as recomendações e clarificações (munição
> dentro do módulo da arma; proteções módulo próprio; japonesas distribuídas + Mukashi só aponta).

## O que foi feito

- Criados 5 módulos com os **catálogos** (tabelas de itens):
  - Coleção `armas`: **`armas-brancas`** (23), **`armas-exoticas`** (11), **`arcos-e-bestas`**
    (5 armas + munição), **`armas-de-fogo`** (3 + bala). Munição é tópico dentro do módulo.
  - Módulo próprio **`protecoes`** (armaduras por tipo + escudos).
- O **núcleo** (`equipamentos-base.md`, `protecoes-base.md`) ficou só com o **sistema** (matriz de
  dano, propriedades, alcance, durabilidade, desarmado/improvisadas; regras de proteção) + ponteiros.
- Rows que misturavam famílias foram **regrupadas** (ex.: Tekkokagi/Nunchaku → exóticas;
  Rapieira → brancas). Conferido: nenhuma arma perdida (34 corpo a corpo = 32 + 2 splits;
  à distância e munição batem).
- Atualizados `colecoes.md`, `modulos/README.md`, `INDICE.md` (Munição repontada; entrada da
  coleção) e o **comentário de origem** do `catalogo.ts` (a ficha é hardcoded, não quebra).
- **Gerador de PDF**: `equipamentos-base`/`protecoes-base` seguem na lista (agora só sistema) — o
  manual base gera limpo (rodado e verificado); os catálogos ficam de fora (viram PDFs de módulo).

## Decisões tomadas

- Executadas conforme as decisões travadas (coleção `armas` em 4 famílias + `protecoes`;
  munição dentro do módulo; sem módulo de japonesas).

## Pendências / próximas fases

- **Fase D:** encaixar os mundos (`cenarios/<mundo>/`) e, no Mukashi, apontar quais armas/módulos
  usa (arquétipos + magia continuam nas tarefas 77/78).
- **Catálogo da ficha** deve ser sincronizado a partir dos módulos daqui pra frente.
- Nada de regra mudou — só organização.
