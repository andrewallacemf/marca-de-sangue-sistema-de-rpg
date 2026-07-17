---
titulo: Dano das armas — matriz generativa (tamanho × tipo)
tipo: regra
cenario: base
status: estavel
tags: [dano, armas, dados, matriz, rebalanceamento]
atualizado-em: 2026-07-12
---

# Dano das armas — matriz generativa (12/07/2026)

*Executa a decisão de 11/07 (armas voltam a ter dano variável) com uma **regra
generativa**: o dano de qualquer arma — tabelada ou não — é aferido cruzando o
**tamanho** com o **tipo de dano**. Decisão do André.*

## A matriz

| Tamanho | Cortante (`CORT.`) | Perfurante (`PERF.`) | Contundente (`CONT.`) |
|---------|:---:|:---:|:---:|
| **Leve** | `1d4` | `1d4` | `1d4` |
| **Média** | `1d8` | `1d6` | `2d4` |
| **Pesada** | `1d12` | `1d8` | `3d4` |

Leitura dos perfis: **cortante** escala no topo (pode decepar — extremos altos);
**perfurante** é o mais contido em dano bruto (compensa com o ataque de oportunidade na
*entrada* do alcance); **contundente** tende à média alta e consistente (além de reduzir
`PA` do alvo com maestria).

## Regras da matriz

- **Versátil (`VERS.`): exclusiva de armas médias.** Nem toda arma média é versátil —
  é uma propriedade da arma. Toda arma versátil ganha **+1d4** quando usada **com duas mãos**.
- **Armas com mais de um tipo de dano (mistas):** a arma pode ser empregada em **qualquer
  um de seus tipos** — o atacante declara o tipo no golpe e usa o **dado + o efeito**
  daquele tipo (a propriedade correspondente, se tiver a maestria). Ex.: uma clava média
  `CONT.`+`PERF.` pode dar `2d4` (contundente, reduzindo `PA`) **ou** `1d6` (perfurante).
- **Piso:** ataque desarmado = `1` fixo; itens improvisados usam dano fixo baixo (a definir
  por objeto).
- **Munições/projéteis** seguem a tabela de munições própria (não entram nesta matriz).

## Como aferir uma arma nova

1. Defina o **tamanho** (leve/média/pesada) e o(s) **tipo(s)** de dano.
2. Cruze na matriz. Se versátil (só médias), some `+1d4` a duas mãos.
3. Se tem mais de um tipo, lista-se o dado de cada tipo — o jogador escolhe no golpe.

*Exemplos: machado de batalha (pesada, cortante) → `1d12`; maça pesada (pesada,
contundente) → `3d4`; espada longa (média, cortante+perfurante, versátil) → `1d8`(cort.)
ou `1d6`(perf.), **+1d4** a duas mãos.*

## Pendências de revisão

> ⚠️ A DEFINIR: (1) a **lança montada** (perfurante pesada) cai de dano 10 para `1d8` —
> conferir se merece exceção (era arma de carga). (2) "Mangual pesado… Esp. de duas
> lâminas" tem nome contundente mas só lista `CORT.`/`PERF.` — alinhar propriedades.
> (3) Dano dos itens **improvisados** por tamanho.
