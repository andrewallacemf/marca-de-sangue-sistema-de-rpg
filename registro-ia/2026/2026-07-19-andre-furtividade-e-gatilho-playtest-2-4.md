---
data: 2026-07-19
pessoa: andre (decisões do grupo)
ferramenta: claude-cowork
objetivo: decidir a regra de durabilidade e fechar pendências resolvidas
arquivos-alterados:
  - sistema-base/listas/protecoes-base.md
  - sistema-base/listas/equipamentos-base.md
  - PENDENCIAS.md
  - INDICE.md
---

# Sessão: regra de durabilidade + fechamento de pendências

## Prompts dados

> André respondeu à avaliação das pendências: (1) Daniel e Gabriel já entraram no GitHub e
> fizeram o setup; (2) a extensão da variante de fadiga foi resolvida — "toda reação gasta fadiga
> equivalente ao custo de PA daquela ação"; (3) definiu a regra de durabilidade de armas,
> armaduras e escudos e pediu recomendações de traços/habilidades de durabilidade.

## O que foi feito

- **Regra de durabilidade escrita:**
  - Armaduras/escudos (`protecoes-base.md`, nova seção *Durabilidade das proteções*): a peça
    perde `1` só quando **absorve** o golpe (região coberta + redutor de dano aplicado), por
    região; escudos perdem `1` quando o redutor deles se aplica ao defender; quebra em `0`.
  - Armas (`equipamentos-base.md`, nova seção *Durabilidade das armas*): −`1` a cada golpe que
    **acerta**; quebra em `0`.
- **Pendências fechadas:** convite/setup do GitHub (Daniel e Gabriel dentro); e a variante
  "fadiga em contratestes" (decidida: reação gasta fadiga = `PA` da ação — que já é a regra base,
  sem a extensão).
- **Pendência estreitada:** "Durabilidade" agora cobre só os **valores** por item (regra
  fechada); marcador `⚠️ A DEFINIR` mantido nas armas para os valores.
- **INDICE.md** atualizado (entrada Durabilidade).

## Decisões tomadas

- Durabilidade de armas: −1 por golpe que acerta; quebra em 0.
- Durabilidade de armaduras/escudos: −1 só quando o redutor de dano se aplica (por região);
  quebra em 0.
- Reação gasta fadiga igual ao custo de `PA` da ação (confirmado; extensão da variante descartada).

## Pendências criadas

- **Traços/habilidades de durabilidade** (💡 propostas a decidir) — recomendações abaixo,
  registradas no PENDENCIAS.md.

## Recomendações de traços/habilidades de durabilidade (para revisão)

- **Aspecto "Zeloso"** — sua arma/armadura perde durabilidade na metade do ritmo (perde 1 a cada
  2 golpes que gastariam durabilidade).
- **Aspecto "Reforçado"** — as peças de proteção começam com durabilidade extra (ex.: +50%).
- **Habilidade "Reparar" (Mental ou Físico)** — fora de combate, recupera durabilidade de um item
  com um teste (quantidade por nível).
- **Habilidade "Golpe destruidor" (Físico)** — um ataque que, além do dano, força **perda extra**
  de durabilidade na arma/armadura do alvo (foco em quebrar equipamento).
- **Aspecto/maestria "Aparar sem desgaste"** — defender com arma/escudo não consome durabilidade
  (ou consome menos), atrelado à maestria de deflexão.
