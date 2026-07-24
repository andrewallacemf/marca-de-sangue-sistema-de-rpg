---
titulo: Arquitetura da informação — guia de estrutura e expansão
tipo: mecanica
cenario: base
status: revisao
tags: [arquitetura, estrutura, modulos, cenarios, organizacao, guia]
atualizado-em: 2026-07-19
---

# Arquitetura da informação — guia de estrutura e expansão

Este é o **mapa** do projeto: onde cada tipo de conteúdo mora e **como decidir** onde
colocar coisa nova. Serve de guia para manter a organização enquanto o Marca de Sangue
cresce (novos cenários, módulos, campanhas). É o documento-guia; as regras de nomenclatura
e frontmatter continuam em [CONVENCOES.md](../CONVENCOES.md).

> 🧭 **Status:** proposta para o grupo revisar. A parte 1 (o modelo) já reflete o que está em
> CONVENÇÕES; as partes 3–5 (classificação base × módulo e plano de migração) têm **decisões
> abertas** marcadas com 🟠.

---

## 1. As camadas

Da mais geral (vale em qualquer jogo) para a mais específica (um mundo só):

```
NÚCLEO (sistema-base/)      → o motor: vale em TODOS os jogos, sempre ligado
   │
MÓDULOS (modulos/<nome>/)   → 1 mecânica OPCIONAL + recursos, reutilizável por vários cenários
   │  └ COLEÇÕES             → conjuntos nomeados de módulos que andam juntos (ex.: "armas")
   │
CENÁRIOS (cenarios/<nome>/) → um MUNDO: lore + o que só ele usa; declara os módulos que liga
   │
VARIANTES (…/variantes/)    → formas ALTERNATIVAS de uma regra do núcleo (troca, não soma)
```

Princípio que amarra tudo (de CONVENÇÕES §4 e §10): **cenário referencia módulo, módulo
referencia núcleo.** Cada camada escreve **só a própria diferença** — nunca copia a de baixo.

| Camada | O que é | Liga/desliga? | Onde |
|---|---|---|---|
| **Núcleo** | Motor do jogo: atributos, testes, PA, dano, progressão, conflito. | Sempre ligado | `sistema-base/` |
| **Módulo** | Uma mecânica opcional autocontida + suas listas (itens/traços/habilidades). | Opcional, por cenário | `modulos/<nome>/` |
| **Coleção** | Grupo de módulos que costumam vir juntos. | — | `modulos/colecoes.md` |
| **Cenário** | Um mundo: tom, lore, criaturas, locais e mecânicas exclusivas dele. | — | `cenarios/<nome>/` |
| **Variante** | Uma regra do núcleo feita de outro jeito (substitui a padrão). | Escolha da mesa | `sistema-base/variantes/<nome>/` |

---

## 2. Como decidir onde uma coisa mora (árvore de decisão)

Para qualquer regra/lista/conteúdo novo, pergunte em ordem:

1. **Todo jogo de Marca de Sangue precisa disso para funcionar?**
   → Sim: **núcleo** (`sistema-base/`).
2. **É uma forma alternativa de uma regra que já existe no núcleo** (troca a padrão)?
   → Sim: **variante** (`sistema-base/variantes/`).
3. **É uma mecânica opcional que mais de um cenário usa (ou vai usar)**, e faz sentido
   ligar/desligar?
   → Sim: **módulo** (`modulos/<nome>/`). Se anda junto com outros, agrupe numa **coleção**.
4. **É exclusivo de um mundo só** (lore, criatura, item, regra que nenhum outro usa)?
   → Sim: **cenário** (`cenarios/<nome>/`, pasta `mecanicas-unicas/` para regra própria).

> 💡 **Regra do "promova quando repetir":** uma mecânica nasce dentro do cenário (em
> `mecanicas-unicas/`). Quando um **segundo** cenário precisa dela, ela é **promovida a
> módulo** e os dois cenários passam a referenciá-la. Evita duplicar e evita criar módulo
> cedo demais.

---

## 3. Classificação do que existe hoje (núcleo × candidato a módulo)

Revisão do `sistema-base/` atual. Coluna "Proposta" marca o que eu sugiro tirar do núcleo.

### Fica no núcleo (o motor)

- **conceitos/** — testes e contratestes, atributos, características, aptidões, habilidades,
  traços, pontos de ação, fadiga, descanso. *(É o motor; nada sai.)*
- **conflitos/01-conflito-fisico**, **02-acoes-em-conflito**, **03-saude-e-protecao** — o
  combate base.
- **criacao-de-personagem/**, **progressao/** — criar e evoluir personagem.
- **listas/aptidoes-base**, **tracos-base**, **habilidades-base-\*** — o catálogo de opções
  de personagem (a "caixa de ferramentas" padrão).
- **As REGRAS de arma/proteção** (peso × tipo, propriedades, matriz de dano, durabilidade,
  alcance) — o *sistema* de equipamento é núcleo.

### 🟠 Candidatos a virar módulo (decisão do grupo)

| Conteúdo hoje | Proposta | Por quê |
|---|---|---|
| ✅ **Furtividade** — **feito (19/07):** movido para [`modulos/furtividade/`](../modulos/furtividade/README.md). Os traços/habilidades ligados (Espreitador, Ocultar-se à vista, Golpe surpresa, Emboscador) seguem nas listas do núcleo, referenciados pelo módulo | **Módulo `furtividade`** | Subsistema opcional; o playtest 2 sugeriu separar. |
| ✅ **Conflito social** — **feito (19/07):** movido para [`modulos/conflito-social/`](../modulos/conflito-social/README.md). As habilidades experimentais sociais seguem em `listas/`, referenciadas pelo módulo (podem migrar depois). | **Módulo `conflito-social`** | Malha/subsistema à parte; muitas mesas não usam. |
| **Catálogos de arma/munição/proteção** (as tabelas de itens em `listas/equipamentos-base` e `protecoes-base`) | **Coleção `armas`** (módulos: armas-marciais, armas-de-fogo, armas-exóticas, proteções) | As *regras* ficam no núcleo; as *listas* de itens nomeados viram módulos que o cenário escolhe. Já era o plano (coleção "armas"). |
| **Mecânica alternativa de habilidades × fadiga** (`conceitos/09`) | **Mover para `sistema-base/variantes/`** | É uma variante (substitui a regra padrão), não um conceito do núcleo — está fora do lugar. |

### Já são camadas próprias (ok)

- **`sistema-base/variantes/habilidades-por-fadiga/`** — variante (ok).
- **`cenarios/<mundo>/`** — mundos (colapso, mukashi, gaeria, peabiru, o-sindicato, rodentia),
  hoje só com README.
- **`modulos/`** — scaffold pronto (`_template-modulo/`, `colecoes.md`), sem módulos ainda.

---

## 4. Estrutura de cenário e como o específico vira módulo

O molde `cenarios/_template-cenario/` já define:

```
cenarios/<mundo>/
  00-visao-geral.md      ← pitch, tom, o que adiciona/muda no base
  mecanicas-unicas/      ← regras que SÓ este mundo usa
  itens/  criaturas/  locais/  lore/
  README.md              ← inclui a seção "Módulos utilizados" (manifesto)
```

Fluxo para trazer um mundo para dentro:

1. Copiar `_template-cenario/` → `cenarios/<mundo>/` (as pastas já existem com README).
2. Preencher `00-visao-geral.md` e o `lore/`.
3. O que for **regra exclusiva** vai em `mecanicas-unicas/`. O que for **opcional e
   reaproveitável** (ex.: armas japonesas, magia) vira **módulo** e o cenário só o **declara**
   em "Módulos utilizados".
4. Arquétipos (dō/caminhos) entram como **módulo** ou dentro do cenário, conforme a decisão
   da estrutura de arquétipos (pendência à parte).

> 🟠 **Cenário-mundo × cenário-de-teste.** Hoje há dois sentidos de "cenário": os **mundos**
> (`cenarios/<mundo>/`) e os **micro-cenários de teste** jogáveis (`playtest/cenarios/01..06`),
> que *usam* os mundos. Proposta: manter `playtest/` como **kit de teste** (artefato de
> desenvolvimento) e, quando um mundo amadurecer, guardar suas aventuras de exemplo dentro de
> `cenarios/<mundo>/` (ex.: `aventuras/`). Decidir se/quando migrar.

---

## 5. Primeiros módulos sugeridos (roadmap)

Ordem pensada nas campanhas que estão começando (Mukashi 1º/ago; Colapso a seguir):

1. ✅ **`furtividade`** — **feito (19/07):** extraído para `modulos/furtividade/`. Os traços/
   habilidades ligados seguem nas listas do núcleo (podem migrar depois).
2. **Coleção `armas`** — mover as tabelas de itens para módulos; o núcleo fica com o sistema.
   Abre espaço para o **módulo `armas-japonesas`** (Mukashi) e **`armas-de-fogo`** (Colapso). 🟠
3. **`arquetipos`** (dō/caminhos) — estrutura definida na pendência de arquétipos; usada por
   Mukashi primeiro.
4. **Colapso**: `veiculos`, `mutacoes`, `armas-de-fogo` (Fase 2 da importação do Notion).
5. ✅ **`conflito-social`** — **feito (19/07)**.

---

## 6. Plano de migração (proposto — nada movido ainda)

Faseado, cada fase é um commit revisável. **Nenhum arquivo foi movido**; isto é o plano.

- ✅ **Fase A — este guia + decisões.** Aprovadas pelo André em 19/07/2026 (todas as recomendações).
- ✅ **Fase B — Furtividade movida para `modulos/furtividade/`** (19/07): links e INDICE
  atualizados; regra inalterada, só de lugar.
- **Fase C — coleção `armas`:** separar catálogos de itens em módulos; núcleo mantém as regras.
- **Fase D — encaixar os mundos** (`cenarios/<mundo>/`) e promover as mecânicas-únicas a
  módulos quando repetirem.
- Cada mudança de lugar atualiza os links e o [INDICE.md](../INDICE.md) no mesmo commit
  (CONVENÇÕES §9).

---

## 7. Decisões abertas para o grupo (🟠)

**Todas aprovadas pelo André em 19/07/2026.** Situação:

1. ✅ **Furtividade vira módulo** — **feito**.
2. ✅ **Conflito social vira módulo** — **feito**.
3. ✅ **Catálogos de arma/proteção viram a coleção `armas`** (regras ficam no núcleo) — a
   executar; **exige análise de impacto** no gerador de PDF e no catálogo da ficha antes de mover.
4. ✅ **Mover a mecânica alternativa (fadiga)** de `conceitos/09` para `variantes/` — a executar
   (renumera o índice de conceitos; cuidado com links).
5. ✅ **`playtest/cenarios` continua kit de teste separado**; aventuras migram para dentro de
   cada mundo só quando amadurecerem.
