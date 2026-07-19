---
data: 2026-07-19
pessoa: andre (decisões do grupo)
ferramenta: claude-cowork
objetivo: aumentar o dano das armas (letalidade) e regenerar as tabelas
arquivos-alterados:
  - sistema-base/listas/equipamentos-base.md
  - INDICE.md
  - PENDENCIAS.md
---

# Sessão: aumento de letalidade (dano das armas)

## Prompts dados

> "Precisamos revisar as tabelas de dano das armas e aumentar todas, Daniel e Gabriel acharam
> que as armas ainda estão pouco letais. Penso em aumentar o dano de uma arma perfurante leve
> pra 1d6, uma cortante leve pra 1d8 e uma contundente leve pra 2d4, e você pode propor como
> escalar isso pras demais."

## O que foi feito

- **Matriz tamanho × tipo aumentada** (a escala subiu um degrau — o antigo dano *médio* virou o
  *leve*):
  - Cortante: `1d8 / 1d12 / 2d8` (leve/média/pesada)
  - Perfurante: `1d6 / 1d8 / 1d10`
  - Contundente: `2d4 / 3d4 / 4d4`
  - (Leve = decisão do André; médio/pesado = 💡 proposta da IA a validar.)
- **Coluna Dano regenerada** em todas as armas corpo a corpo pela nova matriz (mantendo tipos
  múltiplos, versátil +1d4 a 2 mãos e casos especiais: desarmado 1, rede 0, improvisadas 2/3/4).
- `INDICE.md` e `PENDENCIAS.md` atualizados; nota ⚠️ (lança montada → 1d10; mangual sem `CONT.`)
  revisada.

## Decisões tomadas

- Dano **leve** aumentado (perfurante 1d6, cortante 1d8, contundente 2d4) — decisão do grupo.
- Escala dos degraus médio/pesado é **proposta** a validar no playtest.

## Pendências criadas

- Validar o aumento (esp. médio/pesado) no playtest.
- **Dano à distância / munição:** decidir se munição e armas à distância também sobem, para não
  ficarem defasadas (registrado no PENDENCIAS.md).
- As **fichas** ainda usam o dano antigo — serão regeneradas na próxima seção de testes.
