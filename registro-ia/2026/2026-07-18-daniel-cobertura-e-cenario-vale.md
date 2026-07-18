---
data: 2026-07-18
pessoa: andre (proposta de daniel)
ferramenta: claude-cowork
objetivo: mecânica de cobertura (em teste) + cenário de playtest para testá-la
arquivos-alterados:
  - sistema-base/conflitos/01-conflito-fisico.md (nova subseção Cobertura)
  - sistema-base/conflitos/02-acoes-em-conflito.md (nota guarda + cobertura)
  - notas-de-design/decisoes/2026-07-18-cobertura.md (novo)
  - playtest/cenarios/06-colapso-vale-dos-atiradores.md (novo)
  - playtest/fichas-salvas/gerar_saves.py + 4 novos .mds.json (cenário 6)
---

# Sessão: cobertura + cenário do vale (proposta do Daniel)

## Regra de cobertura (em teste)
Adicionada ao manual (marcada 🧪 em teste) a partir do áudio do Daniel:
- **Meia cobertura** (abrigo parcial) → `+1d10` na defesa contra ataques à distância.
- **Cobertura completa** (bloqueia a linha de tiro) → **não pode ser atingido** daquela direção.
- **Integra-se à guarda levantada**: para usar a cobertura, levanta-se a guarda estando nela
  (2 PA fora de engajamento / 3 engajado); sem guarda, a completa vale como meia (exposto).
  Atirar de dentro da cobertura completa expõe até a próxima guarda. Só vale contra ataques à distância.
- Decisão registrada com pontos em aberto (custo 1 PA × herdar 2/3 da guarda; magnitude do +1d10;
  linha de tiro) para validar no playtest — `notas-de-design/decisoes/2026-07-18-cobertura.md`.

## Cenário 6 — O Vale dos Atiradores (Colapso, 50 exp, 4 jogadores)
Incursão subindo uma ravina exposta até o relé de água, com atiradores nos espinhaços (elevação),
cobertura espalhada (completa/meia), terreno difícil (destroços + alagado) e uma emboscada
corpo a corpo no meio (Cães da Gorja) que força a escolha se cobrir × avançar × lutar.
Escrito no formato dos demais cenários, com dicas de teste focadas na cobertura.

## Fichas (50 exp) — foco distância/cobertura
- **Fio** (franco-atiradora, rifle) · **Brecha** (assaltante, espingarda + Disparada/Investida) ·
  **Torre** (barricada: escudo + Blindado + Protetor, cobertura ambulante) · **Eco** (suporte:
  Comandar/Criar armadilha/Confundir/Cura).
- Todas fecham em 50 exp (verificado pelo gerador e pela fórmula da ficha). Saves .mds.json prontos.
- Verificado no navegador: a ficha da Fio carrega certa (EXP 50, rifle, contadores).

## Pendente/opcional
- Regenerar o PDF do kit de cenários para incluir o cenário 6 (sob demanda).
