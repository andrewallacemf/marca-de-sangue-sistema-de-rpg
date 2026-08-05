---
titulo: "Magia (Mukashi)"
tipo: regra
cenario: mukashi
status: rascunho
tags: [mukashi, magia, ki, habilidades, mecanica-unica]
atualizado-em: 2026-08-01
---

# Magia

A magia em Mukashi usa o [módulo de Magia](../../../modulos/magia/README.md) do sistema-base sem
nenhuma regra própria por baixo — [KI](ki.md) é só o nome que Mukashi dá à energia sobrenatural,
não um atributo de teste. Cada magia abaixo declara um dos 4 atributos base
(`Físico`/`Ágil`/`Mental`/`Social`), como manda o módulo, e segue as mesmas três diferenças em
relação a uma habilidade comum: custo de ativação em fadiga/`PV` além do `PA`, atributo caso a
caso, e as opcionais [Aptidão Mágica](../../../modulos/magia/README.md#aptidão-mágica-opcional)
(aqui chamada de **Aptidão de KI**) e [Experiência de Magia](../../../modulos/magia/README.md#experiência-de-magia-opcional).

> 📝 Migrado em 01/08/2026 do sistema antigo (KI como 5º atributo) para o módulo de Magia — ver
> `PENDENCIAS.md`. Os efeitos e progressões das 8 magias abaixo não mudaram, só o atributo testado
> por cada uma e o nome do campo de custo (de "custo de saúde" para "custo de ativação", termo do
> módulo).

## Custo de ativação

> ✅ Decidido em 27/07/2026 (Daniel): a magia em Mukashi custa **pontos de vida** (a mesma linha
> adotada pela Gaéria para a camada de fantasia) — resolveu, para o Mukashi, a pendência "custo da
> magia: saúde × sangue × fadiga" antes mesmo do módulo existir. Em 01/08/2026 essa decisão virou
> parte do [módulo de Magia](../../../modulos/magia/README.md#custo-de-ativação--três-tipos): toda
> magia abaixo usa o tipo **dano curável**, seguindo as regras normais de
> [saúde e dano](../../../sistema-base/conflitos/03-saude-e-protecao.md) — gera fadiga automaticamente
> (1 ponto por ponto de dano) e pode ser recuperado com descanso.

O conjurador escolhe o membro que recebe o custo — o tronco é o mais comum, como sede simbólica do
KI, mas a escolha é livre.

> 📝 A DEFINIR (Daniel): calibrar **quantos pontos de vida cada magia custa** por nível de
> progressão — a validar no playtest. Heurística usada abaixo (herdada do módulo): `4 PA` → `2` de
> custo, `5 PA` → `3` de custo.

## Lista de magias

Duas trilhas: **magias de caminho** (exclusivas de um dō místico, ver
[Onmyōdō](../arquetipos-do.md#onmyōdō--caminho-do-yin-yang)) e **magias gerais** (sem vínculo a um
caminho — qualquer personagem pode comprar, testando o atributo que cada uma declara). Ambas
seguem o molde do [módulo de Magia](../../../modulos/magia/README.md): atributo próprio, custo de
`PA`, custo de ativação e progressão por nível.

> 📝 O atributo de cada magia abaixo (`Ágil`, `Físico`, `Social`, `Mental`) é **proposta da IA a
> validar com o Daniel** — decidido em 01/08/2026 na migração pro módulo, por afinidade temática
> com o efeito (ex.: Os Nove Selos ficou `Físico` por parentesco direto com Atordoar). Os efeitos e
> progressões não mudaram, só o atributo testado. Ver `PENDENCIAS.md`.

### Magias gerais (sem caminho)

Primeiras cinco redigidas em 27/07/2026, a partir de um brainstorm do Daniel com base no folclore
de yokai (kamaitachi, kitsune-bi, nurikabe, tengu, kuji-in). Ficam soltas por enquanto — nada
impede de atrelar alguma a um caminho específico mais pra frente, se fizer sentido.

#### Resumo

| **Magia** | **Atributo** | **Custo de `PA`** | **Custo de ativação** | **Custo de compra** |
| --- | --- | --- | --- | --- |
| Sopro do Kamaitachi | `Ágil` | `4 PA` | `2` superficial 📝 | `4 exp.` 📝 |
| Fogo de Akiba | `Físico` | `5 PA` | `3` superficial 📝 | `4 exp.` |
| Muralha de Nurikabe | `Ágil` | `4 PA` | `2` superficial 📝 | `3 exp.` |
| Grito do Tengu (Tengu-warai) | `Social` | `4 PA` | `2` superficial 📝 | `3 exp.` |
| Os Nove Selos (Kuji-in) | `Físico` | `5 PA` | `3` superficial 📝 | `4 exp.` |

#### Sopro do Kamaitachi

> *O "vento de foice" — um vácuo cortante que passa antes que o alvo perceba o ataque.*

**Atributo:** `Ágil` · **Custo de PA:** `4 PA` · **Custo de ativação:** `2` dano curável 📝 · **Custo de compra:** `4 exp.`

**Descrição:** o conjurador manipula o ar em correntes cortantes que atingem o alvo à distância — teste de `Ágil` (conjurador) contra o contrateste de esquiva/defesa do alvo (normalmente `Ágil` também). Causa dano cortante (`CORT.`, base `1d8`, a mesma escala do dano cortante leve) e **ignora o redutor de dano de armaduras leves** — o corte é súbito e passa pela proteção mais fina como se não estivesse lá.

> ⚠️ **Precedente novo, aprovado pelo Daniel em 27/07/2026:** nenhuma outra habilidade do sistema ignora o redutor de dano de uma armadura (as propriedades `ARRE.`/`DEFL.` ignoram apenas *desvantagem*, não redução de dano — ver [equipamentos-base.md](../../../sistema-base/listas/equipamentos-base.md#propriedades-das-armas)). Kamaitachi é a primeira habilidade "perfurante de armadura" do Mukashi — se o efeito for bem recebido no playtest, vale considerar se cabe em outras armas/habilidades também, ou se fica exclusivo dela.

**Requisitos de uso:** ataque à distância — não precisa de arma/munição equipada, o dano vem do próprio feitiço.

**Progressão:**
1. `1d8` `CORT.`, ignora redutor de armadura leve.
2. `+1d4` de dano.
3. `+1d4` de dano.
4. `+1d4` de dano.
5. `+1d4` de dano **ou** atinge um alvo adicional (à escolha do conjurador no momento do uso).

#### Fogo de Akiba

> *Chamas sobrenaturais que não se apagam com água — só com vontade.*

**Atributo:** `Físico` · **Custo de PA:** `5 PA` · **Custo de ativação:** `3` dano curável 📝 · **Custo de compra:** `4 exp.`

**Descrição:** teste de `Físico` (conjurador) contra teste `Ágil` do alvo — sucesso ateia fogo sobrenatural nele. No início de cada turno do alvo, ele sofre `1d4` de dano curável (no mesmo membro atingido pelo ataque inicial) até gastar `2 PA` em seu turno para apagar as chamas.

**Requisitos de uso:** ataque à distância ou corpo a corpo, à escolha do conjurador.

**Progressão:**
1. `1d4` de dano por turno, dura até ser apagado.
2. `1d6` de dano por turno.
3. `1d6` de dano por turno; custa `3 PA` (não `2`) para o alvo apagar.
4. `1d8` de dano por turno.
5. `1d8` de dano por turno; custa `4 PA` para o alvo apagar.

#### Muralha de Nurikabe

> *Uma parede que ninguém vê — até esbarrar nela.*

**Atributo:** `Ágil` · **Custo de PA:** `4 PA` · **Custo de ativação:** `2` dano curável 📝 · **Custo de compra:** `3 exp.`

**Descrição:** cria uma barreira invisível de **2 metros de largura**. Qualquer personagem que tente atravessar esse espaço precisa de sucesso num teste `Físico` contra o `Ágil` do conjurador; se falhar, o movimento é interrompido e o `PA` gasto na locomoção é perdido.

**Progressão:**
1. `2` metros de largura.
2. `3` metros de largura.
3. `4` metros de largura.
4. `5` metros de largura.
5. `6` metros de largura; a muralha torna-se **tangível** — passa a valer como [cobertura completa](../../../sistema-base/conflitos/01-conflito-fisico.md#cobertura) contra ataques à distância, não só como obstáculo de movimento.

#### Grito do Tengu (Tengu-warai)

> *Uma risada estrondosa ecoa pela mata — e ninguém sabe de onde ela vem.*

**Atributo:** `Social` · **Custo de PA:** `4 PA` · **Custo de ativação:** `2` dano curável 📝 · **Custo de compra:** `3 exp.`

**Descrição:** todos os inimigos num raio de **6 metros** que possam ouvir o grito fazem um teste `Mental`. Quem falhar sofre **Desvantagem** no próximo ataque que fizer (mesma lógica de efeito da [Confundir inimigo](../../../sistema-base/listas/habilidades-base-mentais.md#confundir-inimigo) — "Amedrontado" aqui é só o nome-sabor do efeito, não um status novo) **e** desce **1 posição** na ordem de iniciativa.

> ✅ **Correção de 27/07/2026:** eu tinha marcado isso como "precedente novo" mais cedo na sessão,
> por engano — na verdade já existe [Intimidação generalizada](../../../sistema-base/listas/habilidades-base-mentais.md#intimidação-generalizada)
> (habilidade `Mental` do sistema-base), que já força vários oponentes a atrasar 1 posição na
> iniciativa via teste. Grito do Tengu não inventa mecânica nova — só dá roupagem mágica pro mesmo
> efeito, empilhando com uma Desvantagem de ataque. O atributo do **conjurador** (`Social`, desde
> 01/08/2026) é diferente do atributo testado pelos **alvos** (`Mental`, igual à Intimidação
> generalizada) — cada lado testa o que faz sentido pro seu papel na jogada.

**Requisitos de uso:** o alvo precisa conseguir **ouvir** o grito (não afeta surdos ou quem está longe/isolado do som).

**Progressão:**
1. Raio de `6 metros`; desce `1 posição`.
2. Raio de `9 metros`.
3. Raio de `12 metros`; desce `2 posições`.
4. Raio de `15 metros`.
5. Raio de `18 metros`; desce `3 posições`.

#### Os Nove Selos (Kuji-in)

> *Nove gestos, nove mantras — e o corpo trava antes que a mente entenda por quê.*

**Atributo:** `Físico` · **Custo de PA:** `5 PA` · **Custo de ativação:** `3` dano curável 📝 · **Custo de compra:** `4 exp.`

**Descrição:** o conjurador traça os nove selos no ar; todo inimigo **adjacente** ao ponto do selo sofre o choque espiritual da técnica e perde **`3 PA`** — mas só **no próximo turno dele** (respeitando o piso de `3 PA`).

> 💡 **Diferença deliberada em relação a [Atordoar](../../../sistema-base/listas/habilidades-base-fisicas.md#atordoar):** Atordoar é single-target, corpo a corpo, exige arma contundente/escudo, e a perda de `PA` é **persistente até um descanso curto**. Os Nove Selos troca tudo isso por alcance em **área** (todos os adjacentes ao selo) e sem exigir arma — em compensação, a perda de `PA` dura **só um turno**, não persiste. É a mesma família de efeito (drenar `PA`), mas calibrada como uma versão "larga e curta" em vez de "focada e longa" — por isso mantém o mesmo `4 exp.` do Atordoar apesar da duração menor. O atributo `Físico` (desde 01/08/2026) reforça esse parentesco: assim como Atordoar, é um golpe de força bruta, só que ritualizado.

**Requisitos de uso:** afeta todos os inimigos adjacentes ao ponto onde o selo foi traçado (o conjurador escolhe um espaço dentro do alcance normal de uma habilidade de efeito próprio).

**Progressão:**
1. Inimigos adjacentes perdem `3 PA` no próximo turno.
2. Perdem `4 PA`.
3. Perdem `5 PA`.
4. Perdem `5 PA`; alcance do ponto do selo aumenta em `2 metros`.
5. Perdem `5 PA`; alcance aumenta em `4 metros` (o `PA` perdido não passa de `5`, mesmo teto do Atordoar).

### Magias de caminho (por dō)

**Onmyōdō** já tem três: **Invocação de Shikigami**, **Encantamento de Selamento** e **Divinação de Direções e Datas** — ver a lista completa em [habilidades-do.md](habilidades-do.md#onmyōdō). Demais caminhos místicos, se ganharem magias próprias, entram aqui no mesmo formato.

> ⚠️ A DEFINIR: os custos de `PA`/ativação/`exp.` de todas as magias acima (Onmyōdō e gerais) são 📝 proposta a validar no playtest (a regra de custo em si já está fechada, ver [módulo de Magia](../../../modulos/magia/README.md)). Ficou de fora por enquanto, a pedido do Daniel: a ideia de **Maldição de Inugami** (retirar aptidões do oponente) — introduziria uma categoria de efeito sem precedente no sistema (drenar o recurso de rerrolagem do adversário, não só `PA`) e ficou pra decidir com mais calma; e a **Arte da Ocultação/Tonkō-jutsu**, descartada por duplicar o que o [módulo Furtividade](../../../modulos/furtividade/README.md) já resolve.
