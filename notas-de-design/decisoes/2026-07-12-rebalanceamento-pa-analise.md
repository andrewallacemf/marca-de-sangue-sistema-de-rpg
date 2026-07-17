---
titulo: Rebalanceamento de PA — análise de impacto e decisões
tipo: regra
cenario: base
status: estavel
tags: [rebalanceamento, pontos-de-acao, armadura, analise-de-impacto]
atualizado-em: 2026-07-12
---

# Rebalanceamento de PA — análise de impacto e decisões

> ✅ **Decisões fechadas com o André em 12/07/2026** (respostas na seção 3).

## Decisões fechadas (respostas do André)

- **D1** ✅ Teto de movimento: **7 metros por turno** (elevável por habilidade).
- **D2** ✅ Redutor de PA por **tipo**, desacoplado do redutor de dano: **Leve −1, Média −2,
  Pesada −3** (armaduras e escudos). **Os redutores de PA de cada peça SOMAM** — quem usa
  várias peças acumula a perda (ex.: calção de peles + camisa de peles + capacete de couro
  + escudo leve ≈ −4 PA). O redutor de dano continua por armadura.
- **D3** ✅ Aplicar a mecânica + coluna "Regiões cobertas" com padrão proposto; o grupo
  revisa a cobertura (e os redutores de dano por peça) depois.
- **D4** ✅ Custo de PA sempre pelo peso; versátil: empunhadura muda só o dano.
- **D5** ✅ Só o núcleo agora; habilidades de custo fixo entram **na fila** (próxima passada).
- **D6** ✅ Ataque desarmado: **1 PA**.
- **D7** ✅ Piso de PA unificado em **3 PA** por turno (salvo inconsciência).
- **D8** ✅ Demais ações utilitárias: mantêm o custo atual.
- **D9** ✅ Nova **fadiga**: máximo **50**; perde **−1 PA a cada 5 pontos a partir de 10**
  (10→−1, 15→−2, 20→−3, 25→−4, 30→−5, 35→−6, 40→−7, 45→−8) e **50 = inconsciência**.
  Conversão 2 fadiga = 1 PA (teto por turno = total de PA) e compra de PA (5/10/15/20…)
  permanecem.

## Detalhe D2/D3 — nova modelagem de armaduras (proposta a revisar)

As armaduras deixam de ser "conjuntos" e passam a ser **peças por região** (torso, pernas,
cabeça, mãos, pés) + escudo. Cada peça: cobre certas regiões, tem redutor de dano,
redutor de PA (por tipo) e durabilidade própria; os redutores de PA **somam**. Nesta
sessão, as armaduras atuais (materiais) são tratadas como **peça de torso** (cobre tronco
+ 2 braços) — 💡 proposta; peças de outras regiões e a revisão dos redutores de dano por
peça ficam para a passada seguinte com o grupo.

---

## Anexo — análise de impacto original

## 1. O que o André já decidiu (12/07/2026)

- **PA inicial: 7 → 10.**
- **Movimento:** 1 PA por metro (espaço da malha) — mantém.
- **Ataques por peso:** leve **2 PA**, média **4 PA**, pesada **6 PA**.
- **Armadura:** redutor de PA **permanente enquanto usada** (sai do total do turno); começa
  em **−1** e sobe gradualmente conforme a qualidade; se a armadura é removida ou
  destruída, a penalidade some **a partir do próximo turno** (não imediatamente).
- **Nova estrutura de armadura:** cada armadura indica **quais regiões do corpo cobre**;
  o **redutor de dano** só age se o golpe acerta uma região coberta; **durabilidade por
  local**. (Ex. citado: "camisa de peles cobre tronco + 2 braços, custa 1 PA e 1 de
  redutor de dano".)
- Revisar o custo de PA de **todas** as ações, marcando o que muda e o que fica.

## 2. Efeitos em cascata (o que a mudança arrasta)

Levantamento completo em anexo (inventário da IA). Pontos afetados: PA inicial (5 lugares),
teto de movimento, tabela de ações básicas e complexas, custos de ataque por arma,
~40 habilidades com custo de PA, fadiga (conversão/penalidade/piso), compra de PA com
exp., tabela de armaduras e escudos, conflito social, e vários custos avulsos.

## 3. Decisões que FALTAM (com recomendação da IA)

### D1. Teto de movimento por turno
Hoje: "até 10 PA em locomoção". Com 10 PA de base, esse teto deixa de limitar.
**Recomendação:** manter um teto que force a escolha entre andar e agir — **7 metros por
turno** (7 PA), elevável por habilidade. *(Alinha com a intenção original das transcrições:
mais PA no total, mas movimento limitado.)*

### D2. Escala do redutor de PA das armaduras
Hoje: −1 a −12 (proporcional ao redutor de dano). **Impossível com 10 PA.**
**Recomendação:** **desacoplar** o redutor de PA do redutor de dano. Redutor de PA por
**tipo**: **Leve −1, Média −2, Pesada −3**. O **redutor de dano** continua específico por
armadura (1–12). Escudos seguem a mesma escala por tipo (Leve −1, Média −2, Pesada −3).

### D3. Cobertura das armaduras (nova coluna "Regiões cobertas")
A regra nova exige que cada armadura diga o que cobre — isso **não existe** no material.
**Recomendação:** nesta sessão eu aplico a **mecânica** (redutor de dano só na região
coberta, durabilidade por local, redutor de PA permanente) e adiciono a **coluna** na
tabela, preenchendo com um **padrão proposto por tipo de peça** (ex.: armaduras de torso
= tronco + 2 braços; a definir peça a peça) marcado como 💡 proposta — o grupo revisa a
cobertura de cada item depois. *(Alternativa: deixar a coluna vazia e preencher tudo com o
grupo.)*

### D4. Armas à distância e versáteis
**Recomendação:** o custo de PA é **pelo peso** (leve 2 / média 4 / pesada 6), valendo
igual para corpo a corpo e à distância. Em **versáteis**, o custo é o do peso da arma; a
empunhadura (✋/🤲) afeta só o **dano**, não o PA (a maestria versátil já permite alternar
sem custo). Isso aposenta a notação "3/4 PA".

### D5. Escopo das habilidades de custo fixo
~40 habilidades têm custo de PA. As que custam "**+ PA da arma**" escalam sozinhas com os
novos ataques. As de **custo fixo** (Esmagar 4, Auto cura 3, Confundir 3…) não.
**Recomendação:** nesta sessão rebalancear o **núcleo** (PA inicial, ataques, ações
básicas/complexas, armadura, movimento, piso); as habilidades de custo fixo entram numa
**passada dedicada seguinte** (com proposta proporcional), para não injetar erro em massa
antes do playtest.

### D6. Ataque desarmado
**Recomendação:** manter **1 PA** (é o piso, mais fraco que arma leve).

### D7. Piso de PA (hoje há dois: 4 e 2)
`pontos-de-acao`/`fadiga` dizem mínimo **4 PA**; `saúde` diz mínimo **2 PA**.
**Recomendação:** unificar em **4 PA** por turno (salvo inconsciência).

### D8. Demais ações utilitárias (agarrar, guarda, sacar, atrasar, etc.)
**Recomendação:** **manter** os custos atuais. Com o total subindo para 10 e só os ataques
médio/pesado encarecendo, o efeito desejado (poder andar E agir; ataques pesados custam
caro) já acontece sem inflar tudo. Ações a rever caso a caso ficam para o playtest.

### D9. Fadiga e compra de PA
**Recomendação:** **não mexer agora** — a fadiga já se ajusta ao total de PA (teto de
conversão vira +10; inconsciência a 40; penalidade −1/10 mantida, com a variante "−1/5"
seguindo como experimental) e a tabela de compra (5/10/15…) permanece.

## 4. Sequência de aplicação (após as decisões)

1. `07-pontos-de-acao.md` — 10 PA inicial, teto de movimento, piso.
2. `listas/acoes-em-combate.md` + `equipamentos-base.md` — custos de ataque por peso.
3. `listas/protecoes-base.md` — nova escala de redutor de PA + coluna de cobertura + regra
   de penalidade permanente/saída no próximo turno.
4. `conflitos/03-saude-e-protecao.md` — redutor por região, piso unificado.
5. `conceitos/08-fadiga.md` — ajustar exemplos ao novo total (se preciso).
6. Ecos: `05-habilidades.md` (exemplo do Kenji), `progressao/01` e `acoes-em-combate`
   (PA inicial duplicado), `04-conflito-social`.
7. `INDICE.md`, `PENDENCIAS.md`, registro-ia; commit.
