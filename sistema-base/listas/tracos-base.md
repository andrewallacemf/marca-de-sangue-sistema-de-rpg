---
titulo: Lista de Traços base
tipo: regra
cenario: base
status: revisao
tags: [tracos, tecnicas, maestrias, aspectos]
atualizado-em: 2026-07-11
---

# Lista de Traços base

## Técnicas

> ✅ Decidido em 11/07/2026: o nome oficial da categoria é **técnica** (ver [notas-de-design/decisoes/2026-07-11-ajustes-pos-lote-1.md](../../notas-de-design/decisoes/2026-07-11-ajustes-pos-lote-1.md)).

Técnicas são traços que **apenas anulam a desvantagem natural** dos testes da atividade correspondente — não concedem vantagem (ver [Traços](../conceitos/06-tracos.md)).

> ✅ Lista aprovada pelo grupo em 11/07/2026 (migrada das antigas especializações).

| Atividade | Atributo | **Custo de compra** |
| --- | --- | --- |
| Técnica em **Agarrar** | `Físico` | **`1 exp.`** |
| Técnica em **Empurrar** | `Físico` | **`1 exp.`** |
| Técnica em **Arremessar** | `Físico` | **`1 exp.`** |
| Técnica em **Saltar** | `Ágil` | **`1 exp.`** |
| Técnica em **Nadar** | `Ágil` | **`1 exp.`** |
| Técnica em **Realizar truques** | `Ágil` ou `Social` | **`1 exp.`** |
| Técnica em **Esconder-se** | `Ágil` | **`1 exp.`** |
| Técnica em **Investigar/Observar** | `Mental` | **`1 exp.`** |
| Técnica em **Ponderar** | `Mental` | **`1 exp.`** |
| Técnica em **Intimidar** | `Social` | **`1 exp.`** |
| Técnica em **Persuadir/Seduzir** | `Social` | **`1 exp.`** |
| Técnica em **Performar** | `Social` | **`1 exp.`** |
| Técnica em **Tratar/Curar** | `Social` ou `Mental` | **`3 exp.`** |
| Técnica em **Negociar** | `Social` ou `Mental` | **`3 exp.`** |

## Maestrias base

> ✅ Decidido em 11/07/2026: a categoria "especializações" deixou de existir — a antiga
> "especialização em ataque desarmado" agora é a maestria abaixo, com o mesmo custo das demais.

| **Equipamento / forma de combate**         | **Custo de compra** |
| ------------------------------------------ | ------------------- |
| Maestria em **armas cortantes `CORT.`**    | **`1 exp.`**        |
| Maestria em **armas contundentes `CONT.`** | **`1 exp.`**        |
| Maestria em **armas perfurantes `PERF.`**  | **`1 exp.`**        |
| Maestria em **armas de agarrar `AGAR.`**   | **`1 exp.`**        |
| Maestria em **armas versáteis `VERS.`**    | **`1 exp.`**        |
| Maestria em **armas de deflexão `DEFL.`**  | **`1 exp.`**        |
| Maestria em **projéteis `PROJ.`**          | **`1 exp.`**        |
| Maestria em **armaduras leves**            | **`1 exp.`**        |
| Maestria em **armaduras médias**           | **`1 exp.`**        |
| Maestria em **armaduras pesadas**          | **`1 exp.`**        |
| Maestria em **ataque desarmado `DESA.`**   | **`1 exp.`**        |

**Maestria em ataque desarmado:** permite realizar **ataque mirado sem desvantagem**,
valendo **apenas para ataques desarmados** (ex.: soco). Viabiliza builds de lutador.

## Aspectos base

> ✅ Tabela saneada e aprovada pelo grupo em 11/07/2026: duplicata de "Lépido" removida
> (vale `3 exp.`), custos alinhados às entradas detalhadas (Alerta, Vigilante,
> Escorregadio, Reativo e Apoiador = `4 exp.`), aspectos com entrada incluídos na tabela,
> e "Versatilidade" **fundida no aspecto Firme** (na v0.4.1 ela tinha o mesmo efeito).

| **Aspecto** | **Custo de compra** |
| --- | --- |
| Empacado | **`2 exp.`** |
| Emboscador | **`4 exp.`** |
| Lépido | **`3 exp.`** |
| Resistente | **`3 exp.`** |
| Protetor | **`4 exp.`** |
| Blindado | **`4 exp.`** |
| Vigilante | **`4 exp.`** |
| Escorregadio | **`4 exp.`** |
| Reativo | **`4 exp.`** |
| Alerta | **`4 exp.`** |
| Apoiador | **`4 exp.`** |
| Corredor | **`8 exp.`** |
| Maratonista | **`4 exp.`** |
| Dorminhoco | **`7 exp.`** |
| Firme | **`4 exp.`** |
| Firme aprimorado | **`4 exp.`** (💡 proposta) |
| Burro de carga | **`6 exp.`** |

Aspectos são traços que afetam a forma como o personagem responde a determinadas situações. Comprar aspectos permite que o personagem realize ações ou ignore regras em determinadas situações.

## Lista de Aspectos (em ordem alfabética)

### Alerta

**Custo de compra:** `4 exp.`

#### Descrição

Pode realizar um ataque corpo a corpo descuidado quando um oponente entra em seu alcance ideal.

#### Condição de uso (gatilho)

- Um oponente entrar em seu alcance ideal.

#### Requisitos de uso

- Estar com guarda levantada.
- Não ter usado seu ataque de oportunidade neste turno.

### Corredor

**Custo de compra:** `8 exp.`

#### Descrição

Dobra o limite de PA que podem ser utilizados no deslocamento.

#### Requisitos de uso

- Não ter pernas desabilitadas

### Apoiador

**Custo de compra:** `4 exp.`

#### Descrição

Pode usar aptidões nos testes de um aliado adjacente.

#### Condição de uso (gatilho)

- Estar adjacente a um aliado.

#### Requisitos de uso

- Usar aptidões do mesmo atributo da ação.

### Blindado

**Custo de compra:** `4 exp.`

#### Descrição

Defende ataques à distância com **`+1d10 de vantagem`**.

#### Condição de uso (gatilho)

- Utilizar uma guarda levantada ao ser atacado a distância.

#### Requisitos de uso

- Estar usando escudo.

### Maratonista

**Custo de compra:** `4 exp.`

#### Descrição

Pode dobrar seu movimento ao correr em linha reta.

#### Condição de uso (gatilho)

- Gastar pelo menos 5 PA de movimento em linha reta.

#### Requisitos de uso

- Não possuir nenhuma perna desabilitada.
- Não mudar a direção do movimento.
- Não estar utilizando armas ou armaduras pesadas.

### Dorminhoco

**Custo de compra:** `7 exp.`

#### Descrição

Ao descansar, utiliza 1d8 para curar dano ao invés de 1d6

#### Condição de uso (gatilho)

- Descanso longo

#### Requisitos de uso

- Sem requisitos

### Emboscador

**Custo de compra:** `4 exp.`

#### Descrição

Dobra o dano do ataque.

#### Condição de uso (gatilho)

- Atacar um oponente pelas costas.

#### Requisitos de uso

- Estar escondido de todos os oponentes.
- Estar usando armas leves.

### Empacado

**Custo de compra:** `2 exp.`

#### Descrição

Reduz qualquer movimentação forçada pela metade (arredondado para baixo).

#### Condição de uso (gatilho)

- Ser alvo de movimentação forçada (por oponentes ou causas naturais).

#### Requisitos de uso

- Não ter nenhuma perna desabilitada.

### Escorregadio

**Custo de compra:** `4 exp.`

#### Descrição

Recebe **`+1d10 de vantagem`** para esquivar de ataques de oportunidade.

#### Condição de uso (gatilho)

- Receber um ataque de oportunidade.

#### Requisitos de uso

- Não estar utilizando armadura média ou pesada.

### Firme

**Custo de compra:** `4 exp.`

#### Descrição

Pode usar armas pesadas com apenas uma mão, com **−3 de dano**.

> ✅ Decidido em 11/07/2026: o antigo traço "Versatilidade" (v0.4.1) foi **fundido no
> Firme**, e a progressão herdada não vira níveis — requisitos determinam se o traço está
> **ativo**, sem impedir a compra (ver [Traços — Requisitos](../conceitos/06-tracos.md) e
> [notas-de-design/decisoes/2026-07-11-reacao-posicionamento-propriedades.md](../../notas-de-design/decisoes/2026-07-11-reacao-posicionamento-propriedades.md)).

> 💡 PROPOSTA (IA) — revisar: desenho por requisitos em dois traços — **Firme** (com
> −3 de dano) e **[Firme aprimorado](#firme-aprimorado)** (remove a redução) — que
> condensa a progressão de 4 passos da antiga Versatilidade nesses 2 traços.

#### Condição de uso (gatilho)

- Usar uma arma pesada

#### Requisitos de uso

- Não ter nenhuma mão desabilitada.

### Firme aprimorado

**Custo de compra:** `4 exp.` (💡 custo proposto pela IA — a validar pelo grupo)

#### Descrição

Remove a redução de dano do [Firme](#firme): pode usar armas pesadas com apenas uma mão
**sem redução de dano**.

> 💡 PROPOSTA (IA) — revisar: traço proposto junto com o novo desenho por requisitos do
> [Firme](#firme).

#### Condição de uso (gatilho)

- Usar uma arma pesada

#### Requisitos de uso

- Possuir o traço [Firme](#firme).

### Lépido

**Custo de compra:** `3 exp.`

#### Descrição

Pode recuar 1 metro imediatamente após atacar.

#### Condição de uso (gatilho)

- Acertar o oponente com um ataque descuidado.

#### Requisitos de uso

- Estar utilizando uma arma de longo alcance.

### Protetor

**Custo de compra:** `4 exp.`

#### Descrição

Pode realizar um teste para desviar o dano que um aliado adjacente receberia para você.

Se obtiver sucesso no teste, é acertado pelo golpe e recebe o dano, seus redutores de dano são aplicados.

#### Condição de uso (gatilho)

- Ser acertado por um ataque.

#### Requisitos de uso

- Estar a 1 metro de um aliado que está sendo atacado.
- Estar usando escudo.

### Reativo

**Custo de compra:** `4 exp.`

#### Descrição

Pode desferir um ataque de oportunidade quando o oponente sai do seu alcance ideal.

#### Condição de uso (gatilho)

- Um oponente sair do seu alcance ideal.

#### Requisitos de uso

- Estar com guarda levantada.
- Não ter usado seu ataque de oportunidade neste turno.

### Resistente

**Custo de compra:** `3 exp.`

#### Descrição

Reduz o dano recebido pela metade.

#### Condição de uso (gatilho)

- Ser acertado por um ataque.

#### Requisitos de uso

- Ter gasto uma guarda levantada para tentar se defender do ataque.
- Estar utilizando armadura média ou pesada.

### Vigilante

**Custo de compra:** `4 exp.`

#### Descrição

Pode desferir um ataque de oportunidade a distância (exceção à regra geral de que ataques à distância não fazem ataque de oportunidade — ver [Engajamento](../conflitos/01-conflito-fisico.md#engajamento)).

#### Condição de uso (gatilho)

- Se um oponente sair do seu alcance ideal.

#### Requisitos de uso

- Estar usando uma arma de arremesso (já equipada).
- Não ter gasto seu ataque de oportunidade.

### Burro de carga

**Custo de compra:** `6 exp.`

#### Descrição

Não gasta PA extra para deslocar um aliado que esteja agarrado.

#### Condição de uso (gatilho)

- O aliado só pode ser carregado de forma voluntária.

#### Requisitos de uso

—
