---
titulo: "Módulo: Veículos"
tipo: mecanica
cenario: modulo
modulo: veiculos
status: rascunho
tags: [modulo, veiculos, conflito, colisao, perseguicao, aptidao-veicular, experiencia-de-veiculos]
atualizado-em: 2026-08-15
---

# 🧩 Módulo: Veículos

Perseguições, combate em alta velocidade e máquinas que também têm prazo de validade. Este módulo
**adiciona** ao [conflito físico](../../sistema-base/conflitos/01-conflito-fisico.md) uma camada de
**posição relativa, velocidade e dano ao veículo** — sem substituir nenhuma regra do núcleo: a
iniciativa, os testes, a fadiga e o dano aos personagens continuam sendo os do sistema-base.

A regra de ouro do módulo: **quem gasta [`PA`](../../sistema-base/conceitos/07-pontos-de-acao.md) é
sempre o personagem** (o piloto, o mecânico, o atirador). O veículo **não tem `PA` próprio** — ele é
um objeto que os personagens operam, não um personagem a mais na iniciativa.

> 📝 Este módulo generaliza o conflito de veículos que vivia dentro do cenário
> [Colapso](../../cenarios/colapso/mecanicas-unicas/veiculos.md) (importado do Notion em
> 24/07/2026). O Colapso migrou para consumir este módulo em 01/08/2026 — o que era **sucata**
> continuou sendo dele, como camada própria por cima daqui (ver
> [Peças de reposição](#peças-de-reposição--o-insumo-de-reparo)).

## O que o módulo adiciona

1. Uma **ficha de veículo** (velocidade, categoria, integridade, espaços, combustível).
2. Uma **escala de malha própria** — 10 metros por espaço — e a orientação do veículo.
3. Um conjunto de **ações de veículo**, pagas com o `PA` do personagem que as executa.
4. **Colisão, condições, integridade e reparo** — o veículo como coisa que se quebra e se conserta.
5. Um **sistema de equipamentos** instaláveis.
6. Duas **mecânicas opcionais** — [Aptidão Veicular](#aptidão-veicular-opcional) e
   [Experiência de Veículos](#experiência-de-veículos-opcional) — que o módulo **não exige**: ele
   funciona inteiro sem nenhuma das duas.

## A ficha do veículo

Um veículo tem:

- **Velocidade** — em **metros por turno (m/t)**, sempre em múltiplos de 10. Cada espaço da malha
  percorrido = 10 m/t.
- **Categoria** — **Sem motor** (bicicleta, reboque, carroça, montaria puxando carga) ou **A → E**
  por porte/peso (A = menor/leve; E = maior/pesado). Define o [dano de colisão](#dano-de-colisão).
- **Integridade por partes + Propulsor** — cada parte e o propulsor têm integridade própria. Dano
  que excede uma parte transborda para o **Propulsor**; dano que excede o Propulsor é dividido entre os
  ocupantes. Valores por categoria na [lista de veículos](listas/lista-de-veiculos.md).
- **Combustível** — em pontos, consumidos por turno de viagem (a condição *Consumo elevado* dobra o
  consumo). Veículos **Sem motor** não têm combustível.
- **Espaços** — assentos/lugares ocupáveis (piloto + passageiros; cada um oferece meia cobertura —
  ver [Cobertura do tripulante](#cobertura-do-tripulante)) e slots para
  [equipamentos](listas/lista-de-equipamentos.md).

## Escala de malha e orientação

### A escala de 10 metros

O sistema-base usa uma [malha de combate](../../sistema-base/conflitos/01-conflito-fisico.md#malha-de-combate-físico)
em que **cada espaço = 1 metro**. Numa perseguição isso é inviável — um carro a 60 m/t atravessaria
60 espaços por turno. Este módulo **não substitui aquela malha: muda a escala dela**.

| | Espaço vale | Quando usar |
|---|---|---|
| **Malha de combate físico** (núcleo) | 1 metro | Conflito a pé, corpo a corpo, interiores e cenas em que a posição individual é o foco |
| **Malha de veículo** (este módulo) | **10 metros** | Perseguições e conflitos em que o deslocamento dos veículos é o foco |

Tudo o mais continua igual ao núcleo: recomenda-se a **malha hexagonal** (mais direções), a
quadriculada também serve (conte espaços pelos lados, nunca pelas diagonais), e o **alcance das
armas continua medido em metros** — uma pistola de 20 m alcança 2 espaços nesta escala.

### Quando as duas escalas dividem a mesma mesa

Um conflito com veículos quase sempre tem também gente a pé — quem desceu, quem foi jogado para
fora, quem está esperando na estrada. A cena usa **uma malha só, na escala predominante**. Quando a
escala de veículo for a predominante, os personagens a pé se movem assim:

- O movimento a pé continua custando o mesmo `PA` **por metro** de sempre; o personagem só **troca
  de espaço** quando acumula 10 metros de deslocamento. Enquanto não acumula, permanece no espaço
  em que está.
- Estar no mesmo espaço de 10 metros indica **proximidade**, não alcance corpo a corpo automático.
  Para atacar em corpo a corpo, os personagens ainda precisam estar engajados pela regra normal.
- Quando uma interação exige precisão — combate entre pessoas, invasão, embarque ou deslocamento
  dentro de um veículo — a posição local é resolvida na escala normal de **1 metro**, sem alterar o
  espaço de 10 metros ocupado pelo veículo.
- Ataques à distância continuam medidos em metros, normalmente.

### Orientação

O veículo pode apontar para **oito direções**, separadas por 45 graus. Cada passo entre duas dessas
direções é um **ponto de orientação**. A orientação independe do desenho quadrado ou hexagonal da
malha: ela representa a direção para onde o veículo aponta e vai avançar. Manobrar é **girar pontos
de orientação**.

A orientação do veículo é o equivalente, para uma máquina, do
[posicionamento](../../sistema-base/conflitos/01-conflito-fisico.md#posicionamento-em-campo) de um
personagem — e vale a mesma lógica de frente e costas para modificadores. A diferença é que um
personagem **define** o posicionamento de graça ao fim do turno, enquanto um veículo **paga `PA`
para girar**, em incrementos: massa em movimento não muda de direção só porque quer.

**O posicionamento dos ocupantes é independente** do veículo — quem está dentro continua definindo
a própria frente normalmente, de graça, pela regra do núcleo.

## Ações de veículo

Custos em `PA` do personagem que executa (o **piloto**, salvo indicação). Habilidades e traços
modificam vários destes valores — ver [lista de habilidades](listas/lista-de-habilidades.md) e
[lista de traços](listas/lista-de-tracos.md).

O `PA` gasto para operar um veículo **não conta** no limite de `7 PA` de locomoção pessoal. Uma
redução nunca leva uma ação abaixo de **1 PA**, salvo quando a própria regra disser que ela é
gratuita.

O deslocamento correspondente à velocidade acontece no **turno do piloto**. Ele pode dividir esse
deslocamento antes, entre ou depois das próprias ações, mas precisa completá-lo até encerrar o
turno. Acelerar ou frear atualiza imediatamente o total devido, mas nunca desfaz o que já foi
percorrido naquele turno. Sem um piloto capaz de controlar o veículo, ele fica *Desgovernado*.

| Ação | Custo | Efeito |
|------|-------|--------|
| **Acelerar** | 2 PA / +10 m/t | Aumenta a velocidade. |
| **Manter velocidade** | 0 PA | Mantém a velocidade até acelerar/frear. *Desgovernado* perde metade por rodada. |
| **Frear** | 1 PA / −10 m/t | Reduz a velocidade. |
| **Marcha à ré** | como Acelerar/Frear | A partir de 0 m/t, inverte o sentido e acelera normalmente, mas sem habilidade não ultrapassa **10 m/t**. Para voltar a avançar, precisa parar novamente. |
| **Movimentar na malha** | — | Move **obrigatoriamente 1 espaço por 10 m/t**; pode ser dividido no turno. |
| **Manobra segura** | 1 PA por 10 m/t da velocidade atual (mín. 1 PA) | Gira **até 2 pontos de orientação**. |
| **Manobra arriscada** | de 1 PA até o custo da manobra segura | **Teste Ágil** com **1 dado de desvantagem por PA faltante e por ponto além do segundo**. Na falha, o giro não acontece e o veículo fica *Desgovernado*. |
| **Preparar esquiva** | 2 PA | Ganha **1 vantagem** no próximo teste para evitar uma colisão até o início do próximo turno do piloto. Depois do teste, o benefício termina. |
| **Emparelhar** | (velocidade do alvo ÷ 10) + 1 PA | Teste Ágil; emparelhados não manobram e mantêm velocidade ≥ à menor entre eles (senão ficam *Desgovernados*). |
| **Desemparelhar** | (velocidade atual ÷ 10) + 1 PA | Teste Ágil. Quem está emparelhado dos dois lados **não pode** desemparelhar. |
| **Ocupar mesmo espaço** | 0 PA | Declare durante o deslocamento e faça um Teste Ágil: *rota de colisão* (o sucesso colide) ou *ocupar com cuidado* (o sucesso não colide). Ver [dano de colisão](#dano-de-colisão). |
| **Invasão** (veículo hostil) | 4 PA | Teste Físico ou Ágil. Modificador por porte: maior→menor com desvantagem; menor→maior com vantagem. Sem espaço vazio, o invasor + 1 passageiro ficam *Amontoados*. |
| **Embarque** (veículo aliado) | 4 PA | Teste Físico ou Ágil, sempre com **vantagem**. |
| **Reparar integridade** | 5 PA | Recupera **`1d4`** numa parte. No **propulsor**, exige Teste Mental + [peças comuns](#peças-de-reposição--o-insumo-de-reparo). Em movimento, quem não é o piloto repara com desvantagem. |
| **Reparo especializado** | 5 PA | Remove **1 condição** que afete o propulsor. Exige Teste Mental + [peças especializadas](#peças-de-reposição--o-insumo-de-reparo). |
| **Instalar equipamento** | variável | Declare os `PA` a investir + Teste Mental; os `PA` **acumulam entre turnos**. Ver [equipamentos](listas/lista-de-equipamentos.md). |
| **Arrancar equipamento** | 5 PA | Teste Físico; o equipamento é retirado e quebra. |
| **Remover equipamento com cuidado** | fora de conflito | Teste Mental + 1 hora de jogo por ponto de integridade do item. |
| **Mover-se dentro do veículo** | 1 PA | Ocupa um espaço vazio. |
| **Trocar de lugar ou assumir controles cedidos** | 2 PA | Troca de lugar com um ocupante cooperativo ou assume um posto de pilotagem vazio/cedido. |
| **Tomar os controles à força** | 6 PA | Teste Físico ou Ágil contra quem controla o veículo. |

*Dirigir com uma mão só custa **+2 PA em cada manobra**.*

## Dano de colisão

Ao ocupar o mesmo espaço em rota de colisão (ou ao falhar em *ocupar com cuidado*), determine
primeiro a **velocidade de impacto**:

- veículos no mesmo sentido: a diferença entre as velocidades;
- veículos em sentidos opostos: a soma das velocidades;
- cruzamento lateral ou obstáculo fixo: a maior velocidade envolvida.

Toda colisão usa no mínimo **10 m/t**. Cada veículo envolvido sofre dano separadamente: use a linha
da sua categoria e a coluna da categoria do outro veículo. Role o valor da matriz e acrescente
**um dado do mesmo tipo para cada 10 m/t além dos primeiros 10**; quando a matriz indicar dano fixo,
acrescente `+1` por intervalo. Somar as velocidades já representa a gravidade de uma colisão
frontal, portanto ela não dobra novamente o resultado.

Para obstáculo fixo, o narrador atribui uma categoria equivalente ao porte e à resistência — uma
pilha de caixas pode ser A; uma muralha, E. O obstáculo serve como coluna da matriz, mas não recebe
uma rolagem própria se não for relevante acompanhar sua integridade.

Dano de colisão **não pode ser mirado**. Ele atinge a parte voltada para o impacto, conforme a
orientação. Depois da colisão, cada veículo reduz sua velocidade à metade, arredondada para baixo
até o múltiplo de 10 mais próximo.

| Sofreu ↓ \ Colisor → | Sem motor | A | B | C | D | E |
|---|---|---|---|---|---|---|
| **Sem motor** | 1 | 1d8 | 1d10 | 1d12 | 2d12 | 3d12 |
| **A** | 1 | 1d6 | 1d8 | 1d10 | 1d12 | 2d12 |
| **B** | 1 | 1d4 | 1d6 | 1d8 | 1d10 | 1d12 |
| **C** | 1 | 1 | 1d4 | 1d6 | 1d8 | 1d10 |
| **D** | 1 | 1 | 1 | 1d4 | 1d6 | 1d8 |
| **E** | 1 | 1 | 1 | 1 | 1d4 | 1d6 |

Uma pessoa atropelada usa a linha **Sem motor**, recebe o dano diretamente em um membro aleatório e
não causa dano de retorno ao veículo, salvo quando o narrador considerar que seu porte ou situação
forma um obstáculo relevante.

O dano que excede a integridade atual da parte atingida passa ao **Propulsor**. O que excede a
integridade atual do Propulsor é dividido entre os ocupantes da forma mais uniforme possível; os
pontos que sobrarem vão, um por vez, para ocupantes sorteados. Cada parcela atinge um membro
aleatório e sofre normalmente o redutor da proteção corporal. Cobertura não reduz colisão nem
transbordamento.

## Condições de veículo

Acumulam, salvo indicação. São condições **do veículo**, não do personagem — as condições de
personagem continuam sendo as do [núcleo](../../sistema-base/conflitos/03-saude-e-protecao.md).

| Condição | Efeito |
|----------|--------|
| **Preso** | Não se move até ser liberado por uma ação adequada ou rebocado por veículo de porte igual ou maior. |
| **Sistemas inoperantes** | Não ativa equipamentos instalados. |
| **Consumo elevado** | Gasta o **dobro** do recurso de propulsão por turno de viagem. |
| **Propulsão instável** | Precisa do **dobro** de `PA` para acelerar. |
| **Frenagem comprometida** | Precisa do **dobro** de `PA` para frear. |
| **Direção comprometida** | Precisa do **dobro** de `PA` para manobrar. |
| **Propulsão limitada** | A velocidade máxima fica reduzida à metade. Fatores externos ainda podem ultrapassá-la. |
| **Estrutura vulnerável** | Recebe todos os danos com valor **dobrado**. |
| **Locomoção comprometida** | Acelerar custa **+1 PA** por +10 m/t; a manobra segura gira apenas **1 ponto**. |
| **Desgovernado** | A velocidade cai à metade por rodada e o veículo anda em linha reta. |
| **Visibilidade obstruída** | O piloto faz Teste Ágil ao iniciar o turno na área; na falha, o veículo fica *Desgovernado*. |

O cenário pode dar outro nome à condição sem alterar seu efeito. *Preso* pode ser *Atolado*;
*Sistemas inoperantes*, *Curto-circuito*; *Locomoção comprometida*, *Pneu furado*; e *Visibilidade
obstruída*, *Cortina de fumaça*.

## Integridade e reparo

Cada parte e o propulsor têm integridade própria; o dano transborda **parte → propulsor →
ocupantes**. Uma parte externa com integridade 0 deixa de absorver dano. **Locomoção** zerada impede
acelerar e deixa o veículo *Desgovernado*.

Com o **Propulsor** em 0, o veículo não acelera nem utiliza equipamentos que dependam dele e fica
*Desgovernado*. Todo dano que chegaria novamente ao Propulsor segue direto aos ocupantes.
Equipamentos de proteção têm integridade própria e **não podem ser consertados** (ver a
[lista de equipamentos](listas/lista-de-equipamentos.md)).

### Peças de reposição — o insumo de reparo

Consertar um propulsor exige **material**, não só tempo e perícia. O módulo trabalha com **duas
categorias abstratas** de insumo, e **cada cenário declara o que elas são de fato**:

| Insumo do módulo | Para quê | Exemplo (Colapso) |
|---|---|---|
| **Peça comum** | *Reparar integridade* no propulsor; fabricação simples | [Sucata comum](../../cenarios/colapso/mecanicas-unicas/sucata.md) |
| **Peça especializada** | *Reparo especializado*; fabricação de equipamento eletrônico/complexo | [Sucata eletrônica](../../cenarios/colapso/mecanicas-unicas/sucata.md) |

Uma peça comum de um mundo é uma correia e um punhado de parafusos; de outro, um cristal de
condução ou uma fivela de arreio. **O módulo não diz onde se acha, quanto se acha nem quanto
custa** — isso é decisão do cenário, porque é aí que mora a economia do mundo. O que o módulo fixa
é **quanto cada reparo consome**:

| Ação | Consumo |
|---|---|
| **Reparar integridade** — partes que não o propulsor | nenhum (só `PA` + o teste) |
| **Reparar integridade** — propulsor | **5 peças comuns** + Teste Mental |
| **Reparar equipamento instalado** | **1 peça comum** |
| **Reparo especializado** (remover 1 condição do propulsor) | **2 peças especializadas** + Teste Mental |

> 💡 **Na mesa:** um cenário que não queira economia de peças nenhuma pode declarar as peças como
> abundantes e ignorar a coluna de consumo — mas repare que, sem elas, o único limite do reparo
> passa a ser `PA`, e um veículo com um mecânico a bordo fica muito difícil de derrubar numa
> perseguição longa. As peças são o freio do sistema.

## Cobertura do tripulante

Cada assento de um veículo é marcado como **fechado** ou **exposto** quando o veículo é criado.
Assentos dentro de cabine ou carroceria são fechados; motos, bicicletas, caçambas abertas e postos
externos são expostos.

Um assento fechado concede meia
[cobertura](../../sistema-base/conflitos/01-conflito-fisico.md#cobertura) passiva ao tripulante:
**`+1d10` de vantagem** nos contratestes de defesa/esquiva contra **ataques à distância**, sem
precisar levantar guarda e sem ser cancelada pelo movimento do veículo. Assentos expostos não
concedem cobertura.

Vale só contra **ataques à distância**; **corpo a corpo ignora** a cobertura — por isso invasão e
embarque seguem sendo o jeito de atingir a tripulação de perto. O dano de **colisão** e o que
**transborda** de uma parte para os ocupantes são automáticos (não são testes de acerto) e **não**
são reduzidos pela cobertura. Armas com a propriedade
**[Projéteis (`PROJ.`)](../../sistema-base/listas/equipamentos-base.md#propriedades-das-armas)** e a
**Maestria em projéteis** reduzem a cobertura em um nível (meia → ignorada).

**Alguns equipamentos exigem exposição para operar** e, enquanto usados, suspendem a cobertura do
assento: cada equipamento traz isso no campo **Cobertura** da
[lista de equipamentos](listas/lista-de-equipamentos.md). Uma parte externa com integridade 0
também deixa de oferecer cobertura contra ataques vindos daquela direção.

## Equipamentos de veículo

Peças que se instalam no veículo ocupando **espaços**. **Ativos** exigem ação e `PA`; **passivos**
valem sempre. Todos têm integridade/durabilidade própria. O catálogo completo, com instalação,
remoção e fabricação, está na [lista de equipamentos](listas/lista-de-equipamentos.md).

## Aptidão Veicular (opcional)

Mecânica opcional, ativada para toda a campanha, que adiciona uma **trilha de aptidão** própria,
não ligada a nenhum dos quatro atributos base — dedicada a testes que envolvem veículos.

- **Compra:** mesma fórmula escalonada das
  [aptidões base](../../sistema-base/listas/aptidoes-base.md) (1ª = `1 exp.`, 2ª = `2 exp.`,
  3ª = `3 exp.`…), como trilha própria e independente: ter muitas aptidões `Ágil` não encarece a
  Aptidão Veicular, e vice-versa.
- **Com a mecânica ativa:** todo teste de uma ação de veículo (manobrar, esquivar de colisão,
  ocupar mesmo espaço, reparar, instalar, fabricar, sabotar) e de uma habilidade marcada como
  `Veículo` usa a **Aptidão Veicular** para rerrolagem, **no lugar** da aptidão do atributo que a
  ação pediria. Ela nunca se soma à aptidão do atributo. Uma *Manobra arriscada* que testa `Ágil`
  não rerrola com aptidão `Ágil` — rerrola com Aptidão Veicular.
- **Ataque comum dentro de um veículo:** continua usando a aptidão do atributo normalmente. Se o
  ataque for realizado por uma habilidade marcada como `Veículo`, usa Aptidão Veicular.
- **Gasto e recuperação:** cada rerrolagem gasta uma Aptidão Veicular. Um descanso curto recupera
  uma; um descanso longo recupera todas, como nas aptidões base.
- **Sem a mecânica:** cada ação usa a aptidão do **atributo que ela testa**, normalmente. Nenhuma
  regra especial: é o comportamento padrão do sistema.

O preço foi alinhado à escada padrão em 01/08/2026 e oficializado em 15/08/2026. O material Alpha
do Colapso, que cobrava `1 exp.` fixo por aptidão, não se aplica mais.

## Experiência de Veículos (opcional)

Mecânica opcional, ativada para toda a campanha, que adiciona um **segundo tipo de experiência**
do personagem, exclusivo para características
de veículo (as [habilidades](listas/lista-de-habilidades.md) e
[traços](listas/lista-de-tracos.md) deste módulo e a própria Aptidão Veicular, se também estiver
ativa). A ficha base já reserva espaço para uma segunda trilha de `exp.` — ver
[criação de personagem](../../sistema-base/criacao-de-personagem/01-passo-a-passo.md#23-anote-seus-pontos-de-experiência-iniciais).

- **Com a mecânica ativa:** características de veículo **só** podem ser compradas com Experiência
  de Veículos — `exp.` comum não serve. Em troca, Experiência de Veículos **não** compra
  características fora de veículo.
- **Sem a mecânica:** características de veículo são compradas com `exp.` comum, nos mesmos preços;
  não existe trilha separada e nada muda na economia normal do personagem.
- **Como se ganha:** mesmas categorias e valores do
  [`exp.` comum](../../sistema-base/progressao/01-experiencia-e-evolucao.md) (interpretação,
  trabalho em equipe, sucesso em tarefa especial, vencer conflito, completar tarefa/missão/arco) —
  o narrador só marca a recompensa como "de veículo" quando o gatilho envolveu o veículo de forma
  central: uma perseguição vencida ao volante, um reparo salvador no meio do tiroteio, uma invasão
  bem executada.
- **Quem pode ganhar:** qualquer personagem cuja contribuição veicular tenha sido central — piloto,
  mecânico, invasor, atirador ou suporte. A reserva acompanha o personagem quando ele troca de veículo.
- **O que não compra:** veículos, equipamentos, peças e outras melhorias materiais continuam na
  economia do cenário; Experiência de Veículos compra apenas características do personagem.
- **Experiência inicial:** o cenário ou a campanha declara o valor. Sem declaração, a reserva
  começa em `0`.
- **Uma recompensa, uma trilha:** cada recompensa entra em `exp.` comum ou Experiência de Veículos,
  nunca nas duas ao mesmo tempo, salvo quando o narrador conceder duas recompensas distintas.

> 📝 Mesmo desenho da [Experiência de Magia](../magia/README.md#experiência-de-magia-opcional)
> (01/08/2026). O Colapso já citava uma "Experiência de Veículos" desde a importação, sem nenhuma
> regra por trás — é esta.

## Compatibilidade — as quatro combinações

| Aptidão Veicular | Experiência de Veículos | Como funciona |
|:--:|:--:|---|
| Desativada | Desativada | Veículo se comporta como qualquer outra mecânica: aptidão do atributo testado, características compradas com `exp.` comum. |
| Ativada | Desativada | Testes de veículo sempre usam Aptidão Veicular; compra com `exp.` comum. |
| Desativada | Ativada | Testes usam a aptidão do atributo testado; compra de características de veículo exclusiva com Experiência de Veículos. |
| Ativada | Ativada | Testes sempre usam Aptidão Veicular; compra (incluindo a própria Aptidão Veicular) exclusiva com Experiência de Veículos. |

## Recursos do módulo

| Lista | Conteúdo |
|---|---|
| [Lista de veículos](listas/lista-de-veiculos.md) | Categorias Sem motor / A–E: velocidade, integridade, espaços, combustível. |
| [Lista de equipamentos](listas/lista-de-equipamentos.md) | Equipamentos ativos e passivos, instalação, remoção e fabricação. |
| [Lista de habilidades](listas/lista-de-habilidades.md) | Habilidades de veículo, por atributo. |
| [Lista de traços](listas/lista-de-tracos.md) | Técnicas, maestrias e aspectos de veículo. |

## Módulos recomendados

Este módulo funciona sozinho, mas conversa com outros:

- **Coleção [`armas`](../colecoes.md)** — o equipamento *Suporte para arma montada* pressupõe uma
  arma de projétil ou arremesso vinda de um dos catálogos da coleção (em especial
  [`armas-de-fogo`](../armas-de-fogo/README.md), num cenário que as tenha).
- **[`furtividade`](../furtividade/README.md)** — perseguições costumam começar ou terminar em
  emboscada; a cobertura do tripulante interage com o alcance de visão do módulo de furtividade.

## Guia de design — criando conteúdo de veículo

1. **Ação nova?** Defina quem paga o `PA` (piloto, passageiro, qualquer um), o teste, e o que
   acontece na falha. Ações de veículo nunca têm custo em `PA` do *veículo* — ele não tem.
2. **Condição nova?** Descreva-a como um **multiplicador de custo ou um limite** (dobra o `PA` de
   X, trava Y acima de Z), não como dano — dano já é resolvido pela integridade.
3. **Equipamento novo?** Decida se é ativo ou passivo, quantos espaços ocupa, a integridade, o
   `PA` de instalação, e — importante — se operá-lo **expõe** o personagem (campo *Cobertura*).
4. **Habilidade ou traço novo?** Siga as regras normais de
   [habilidade](../../sistema-base/conceitos/05-habilidades.md) e
   [traço](../../sistema-base/conceitos/06-tracos.md). A maioria das habilidades de veículo
   funciona **reduzindo o `PA`** de uma ação da tabela acima — é o padrão do módulo.
5. **Precisa de um recurso material?** Use as [peças de reposição](#peças-de-reposição--o-insumo-de-reparo)
   abstratas. Não escreva o nome do recurso do seu cenário dentro do módulo.

> 🧭 **Arquétipos não moram aqui.** Por convenção do projeto, arquétipos só existem no
> [sistema-base](../../sistema-base/arquetipos/00-como-funcionam.md) (os genéricos) ou dentro de um
> cenário. Um cenário que use este módulo monta os próprios papéis (piloto, mecânico, invasor…)
> referenciando as listas daqui — ver
> [os arquétipos de veículo do Colapso](../../cenarios/colapso/arquetipos.md#arquétipos-de-veículo).
