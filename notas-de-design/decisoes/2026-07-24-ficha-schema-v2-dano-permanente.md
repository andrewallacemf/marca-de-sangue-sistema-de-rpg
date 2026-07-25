---
data: 2026-07-24
tipo: decisao
status: aprovada
tema: [ficha, plataforma, schema-mds, saude, dano-permanente]
proposto-por: andre
---

# Ficha schema v2 — dano permanente separado do dano curável

## Contexto

O manual é inequívoco sobre dano permanente
([03-saude-e-protecao.md](../../sistema-base/conflitos/03-saude-e-protecao.md)): é
"marca definitiva, que **não volta** por meios convencionais" — na ficha de papel os
jogadores o marcam à caneta. Mas as duas fichas digitais (a offline deste repo e a da
plataforma) modelavam a saúde de cada membro como **um único número 0–20**, com o
permanente **derivado** (`dano − 10`). Consequência matemática: qualquer decremento
abaixo de 11 apagava permanentes — o botão de curar destruía dano que a regra diz ser
para sempre. Não havia como representar "2 permanentes + 3 curáveis".

## Decisão

**Schema v2 do `.mds.json`** (`schemaVersion: 2`), adotado em conjunto pelas duas
fichas em 24/07/2026:

```
saude: { <membro>: { dano: number, permanente: number } }
```

- `dano` = curável, 0–10 · `permanente` = 0–10 · **invariante: dano + permanente ≤ 10**
  (os 10 espaços do membro).
- **Conversão v1 → v2** (dano acumulado `d`): `d ≤ 10 → {dano: d, permanente: 0}`;
  `d > 10 → {permanente: d − 10, dano: 20 − d}`.

| v1 (escalar) | v2 `{dano, permanente}` | leitura |
|---|---|---|
| 0 | `{0, 0}` | intacto |
| 7 | `{7, 0}` | 7 superficiais |
| 10 | `{10, 0}` | cheio — incapacitado |
| 12 | `{8, 2}` | 2 permanentes + 8 profundos |
| 20 | `{0, 10}` | invalidado |

### Semântica (idêntica nas duas fichas)

- **Marcar dano** (clique num espaço): preenche o curável até 10; com o membro cheio,
  cada ponto **converte 1 curável em permanente**; invalidado ignora. **Todo ponto
  aplicado — inclusive a conversão — gera 1 fadiga** (clamp 50), como manda o manual.
- **Curar** (botão −): reduz **só** o curável (piso 0). Nunca toca permanente, nunca
  devolve fadiga.
- **Remover permanente**: só por ação explícita com confirmação — **clique duplo** no
  espaço ■ (as duas fichas) e, na plataforma, também **"Resetar danos permanentes"**
  no menu ⋯ da ficha. Espaço permanente **não responde a clique simples**.
- **Status**: incapacitado se `dano + permanente = 10`; invalidado se `permanente = 10`.
- Exibição das 10 células: permanentes ■ à esquerda; curáveis viram profundo ✕
  enquanto o membro está cheio, senão superficial ／.

### Compatibilidade

- O load das duas fichas detecta o formato **pela forma do dado** (não pelo
  `schemaVersion`): v0 = array de 10 células · v1 = escalar 0–20 · v2 = objeto.
  Fichas antigas (arquivos salvos, autosave do navegador, fixtures de playtest)
  convertem sozinhas no carregamento; o save passa a gravar v2.
- **Builds antigos da ficha NÃO leem v2** (zeram a saúde silenciosamente): cópias
  soltas do `index.html` (fora do GitHub Pages) precisam ser atualizadas.
- Banco da plataforma: coluna `permanente` em `character_saude` + migration que
  converte os registros v1 (`20260725021444_saude_dano_permanente`).

## Importante

**Não é mudança de regra** — o manual já dizia tudo isso. É correção de implementação
+ evolução do formato de arquivo compartilhado. Nenhum texto de `sistema-base/` mudou.

## Efeitos colaterais da rodada (mesma sessão)

- Plataforma: ficha ganhou os **marcadores visuais** (células de saúde por membro e
  trilha de fadiga 5×10 com rótulos), fadiga automática ao marcar dano, stat-cards
  derivados (exp/PA/fadiga/PV), badge de **redutor de dano por membro** (proteções
  equipadas), Descanso com confirmação; a página de resumo morreu (entrar no
  personagem abre a ficha completa) e o mobile foi corrigido.
- Ficha offline: trilha de fadiga refeita em 5×10 com separação a cada 5 e rótulos
  (resolve o item 13 de [ficha/NOTAS-DE-DESIGN.md](../../ficha/NOTAS-DE-DESIGN.md)).
- Sincronização dos ports: `ficha/src/lib/ficha.ts` ⇄
  `plataforma…/src/lib/game-engine/` usam os **mesmos nomes e semântica**; os testes
  automatizados (100% de cobertura) vivem na plataforma; nota recíproca no topo dos
  arquivos.

## Melhorias futuras analisadas (documentadas, NÃO implementadas)

1. **Descanso curto × longo** — hoje o botão Descanso é um reset único (fadiga +
   usos). A regra ([09-descanso.md](../../sistema-base/conceitos/09-descanso.md))
   distingue: longo = tudo + cura 1d6 de superficial; curto = fadiga + 1 aptidão por
   atributo + 1 rolagem de cura, sem usos de habilidade. Exigiria UI de rolagem ou
   entrada do resultado.
2. **Falta de tratamento → conversão automática** (1 profundo vira permanente por
   descanso sem tratamento) e **tratamento improvisado** (1d10 vs contrateste;
   sucesso 1d4 profundos→superficial, falha +1 permanente): exigiriam distinguir
   *profundo* de *superficial* dentro do curável — o v2 funde os dois (profundo é
   derivado de "membro cheio"). Um eventual **v3** precisaria de 3 contadores por
   membro. Adiado de propósito: o v2 cobre o que a mesa marca hoje.
3. Itens já no backlog ([pendencias-ficha-plataforma.md](../pendencias-ficha-plataforma.md)):
   propriedade ACUI., munições do catálogo, cards colapsáveis, abas no mobile,
   extrair o engine compartilhado para pacote único.
