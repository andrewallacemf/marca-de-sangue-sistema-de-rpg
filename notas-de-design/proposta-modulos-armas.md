---
titulo: "Proposta — coleção de armas em módulos + análise de impacto"
tipo: mecanica
cenario: base
status: revisao
tags: [proposta, armas, modulos, colecao, impacto, arquitetura]
atualizado-em: 2026-07-19
---

# Coleção de armas em módulos — proposta + análise de impacto

Análise para a **Fase C** da migração (ver [arquitetura da informação](arquitetura-da-informacao.md)):
tirar os **catálogos** de arma/proteção do `sistema-base` e organizá-los em **módulos**,
mantendo no núcleo apenas o **sistema** de equipamento. Nada foi movido ainda.

## 1. O que fica no núcleo × o que vira módulo

**Fica no núcleo** (`sistema-base/listas/equipamentos-base.md`) — o *sistema*, não o catálogo:

- A **matriz de dano** (tamanho × tipo), as **propriedades** das armas (`CORT./PERF./CONT./
  VERS./ARRE./AGAR./DEFL./PROJ./ACUI.`), a regra de **alcance ideal**, a regra de
  **durabilidade** e o **ataque desarmado / armas improvisadas** (que são regra de improviso,
  não item de catálogo).

**Vira módulo** — as **listas de itens nomeados** (o catálogo em si).

## 2. Análise de impacto (o que lê essas listas)

| Consumidor | Como usa | Impacto de mover as listas |
|---|---|---|
| **Gerador de PDF do manual** (`playtest/geracao-pdf/gerar_manual_pdf.py`) | Tem uma **lista fixa `ARQUIVOS`** com os caminhos, incluindo `listas/equipamentos-base.md`, `protecoes-base.md`, `itens-base.md`. | **Alto/mecânico:** ao mover, atualizar a `ARQUIVOS` (tirar do manual base ou apontar para os módulos / gerar um PDF de módulos à parte). *(Obs.: já corrigi aqui dois caminhos que as Fases 1–2 tinham quebrado: descanso `10→09` e a remoção de `conflito-social`.)* |
| **Catálogo da ficha** (`ficha/src/lib/catalogo.ts`) | É uma **transcrição fiel em TypeScript** ("gerado a partir de `sistema-base/listas/*`"); **não lê o markdown em tempo de execução**. | **Baixo:** a ficha **não quebra** ao mover os `.md`. Só é preciso atualizar o comentário de origem e, dali pra frente, sincronizar o catálogo a partir dos módulos. |
| **INDICE.md** | Entradas apontam para `equipamentos-base`/`protecoes-base`. | **Mecânico:** repontar os links (como fiz na furtividade). |
| **Cenários / playtest** | Referem-se às armas **pelo nome** (prosa), não pelo caminho do arquivo. | **Nenhum.** |

**Conclusão:** o único ponto sensível é a **lista fixa do gerador de PDF** (mecânico) e manter o
**catálogo da ficha em sincronia** (não quebra, mas é fonte a re-apontar). Risco controlado.

## 3. Proposta de quebra (a coleção `armas`)

Em vez de um módulo único gigante, uma **coleção `armas`** com módulos por família:

| Módulo | O que agrupa (exemplos) |
|---|---|
| **`armas-brancas`** | Corpo a corpo convencionais: lâminas (faca, adaga, espadas curta/longa/larga, sabre, cimitarra, montante), impacto (clava, maça, martelos, bastões), hastes (lança, tridente, alabarda, picareta), machados, foices. **O grosso do arsenal.** |
| **`armas-exoticas`** | Flexíveis/incomuns: chicote, corrente, corrente de espinhos, kusarigama, gato de nove caudas, rede, chakram, boomerangue, escudo de arremesso. |
| **`arcos-e-bestas`** | À distância mecânicas + lançadores simples: funda, zarabatana, arcos (curto/composto/longo), bestas (mão/leve/pesada/repetição). Inclui a **munição de flecha/pedra/dardo**. |
| **`armas-de-fogo`** | Pólvora: pistola, espingarda/arquebus/handgonne, rifle/mosquete + **balas**. *(Já previsto para o Colapso.)* |
| **`protecoes`** | Armaduras (peças por região) + escudos. *(Sibling — ver decisão abaixo.)* |

Não proponho um módulo "armas de arremesso": **arremesso é uma propriedade (`ARRE.`)**, não uma
família — cada arma arremessável fica no seu módulo natural.

## 4. Módulos temáticos (por cenário) — ex.: armas japonesas

O **Mukashi** não precisa de um catálogo paralelo. Princípio anti-duplicação:

- O **genérico** vive na coleção `armas` (uma katana é, mecanicamente, uma espada longa versátil;
  kunai/shuriken/tonfa/nunchaku/kusarigama já saem das famílias acima).
- Um módulo **`armas-japonesas`** (ou a seção de armas do cenário Mukashi) faz **curadoria**
  (quais famílias/itens o mundo usa), dá **nome e flavor** (katana, naginata, wakizashi…) e
  acrescenta só o que é **genuinamente único** (ex.: naginata como lança específica, kanabō).
- Assim o Daniel monta o arsenal do Mukashi **selecionando** da coleção + poucos itens próprios,
  sem recriar tabela.

## 5. O que fica no núcleo (recapitulando)

Matriz de dano, propriedades, alcance ideal, durabilidade, ataque desarmado e **armas
improvisadas** (regra de improviso). O núcleo passa a **remeter** à coleção `armas` para os itens.

## 6. Decisões abertas (🟠)

1. **Proteções**: módulo próprio `protecoes` **fora** da coleção `armas`, ou dentro dela?
   (recomendo módulo próprio — armadura não é arma.)
2. **Granularidade**: 5 módulos como acima, ou começar mais grosso (ex.: só `armas-brancas`,
   `armas-de-fogo` e `arcos-e-bestas`, deixando exóticas dentro de brancas) e refinar depois?
3. **Munição**: junto do módulo que a usa (flechas em `arcos-e-bestas`, balas em `armas-de-fogo`)
   — confirmar.
4. **Coleção vs cenário para as japonesas**: `armas-japonesas` é um **módulo** reutilizável, ou
   fica dentro de `cenarios/mukashi/`? (recomendo módulo, pra outro cenário oriental reaproveitar.)

## 7. Passos da Fase C (quando aprovada)

1. Criar `modulos/armas/` (coleção) com os módulos por família; mover as tabelas de itens do
   `equipamentos-base.md` para cada um; `protecoes` idem.
2. Deixar no `equipamentos-base.md` só o **sistema** (matriz, propriedades, durabilidade, alcance,
   improvisadas) + links para a coleção.
3. Atualizar a `ARQUIVOS` do **gerador de PDF** (manual base sem os catálogos; ou PDF de módulos).
4. Atualizar o **comentário de origem** do `catalogo.ts` e combinar a sincronia dali pra frente.
5. Repontar **INDICE** e registrar os módulos em `modulos/README.md` + `modulos/colecoes.md`.
6. Declarar a coleção nos cenários que a usam ("Módulos utilizados").
