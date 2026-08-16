---
titulo: Lista de habilidades de veículo
tipo: regra
cenario: modulo
modulo: veiculos
status: estavel
tags: [modulo, veiculos, habilidades, listas]
atualizado-em: 2026-08-15
---

# Lista de habilidades de veículo

As habilidades do [módulo de veículos](../README.md). Seguem o
[guia de habilidades](../../../sistema-base/conceitos/05-habilidades.md): cada uso custa os `PA`
indicados **e a mesma quantidade de fadiga**. Quando o custo inclui o `PA` de uma arma ou muda com
o nível, a fadiga usa o custo total efetivamente pago. Reduções têm piso de `1 PA`.

Habilidades não podem ser combinadas na mesma ação. Um bônus concedido por uma habilidade também
não se soma a outra habilidade usada naquela ação.

**Sobre a moeda de `exp.`:** todas as habilidades desta lista são características de veículo. Se a
mesa usa a [Experiência de Veículos](../README.md#experiência-de-veículos-opcional), elas **só** se
compram com ela; se não usa, compram-se com `exp.` comum. O custo indicado é o custo-base: cada
nível custa novamente esse valor, de modo que o total investido é **custo-base × nível atual**.

**A tag `Veículo`** indica que a habilidade só funciona pilotando, ocupando ou interagindo com um
veículo, conforme seus requisitos.

## Ágil

- **Investida** `Ágil` `Veículo` — compra **3 exp.**; **2 PA + 2 de dano ao próprio propulsor**.
  Ao causar uma colisão enquanto pilota, acrescenta dano à rolagem sofrida pelo outro veículo. O
  dano ao próprio Propulsor não pode ser reduzido nem transferido. Níveis: **+2 / +4 / +6** de dano.
- **Invasor** `Ágil` `Veículo` — compra **3 exp.**; **1 PA**. Acrescenta um dado ao Teste Físico ou
  Ágil de Invasão ou Embarque. Requer nenhum membro usado na ação desabilitado. Níveis: **+1d4 /
  +1d6 / +1d8** ao teste.
- **Arrancada** `Ágil` `Veículo` — compra **2 exp.**; **2 PA**. Quando o veículo está parado,
  substitui Acelerar e aumenta imediatamente sua velocidade, respeitando velocidade máxima e o
  consumo normal de recurso de propulsão. Níveis: **+20 / +30 / +40 m/t**.
- **Impulso** `Ágil` `Veículo` — compra **3 exp.**; **2 PA**. Quando o veículo já está em movimento,
  substitui Acelerar e aumenta imediatamente sua velocidade, respeitando velocidade máxima e o
  consumo normal de recurso de propulsão. Níveis: **+20 / +30 / +40 m/t**.

## Físico

- **Mira em movimento** `Físico` `Veículo` — compra **3 exp.**; **`PA` da arma + 1 PA**. Acrescenta
  um dado ao ataque contra um alvo que esteja se deslocando a pelo menos 10 m/t. Requer arma de
  projétil ou de arremesso leve. Níveis: **+1d4 / +1d6 / +1d8** ao teste.
- **Ataque estabilizado** `Físico` `Veículo` — compra **3 exp.**; **`PA` da arma + 1 PA**.
  Acrescenta um dado ao ataque feito de um veículo que esteja se deslocando a pelo menos 10 m/t.
  Níveis: **+1d4 / +1d6 / +1d8** ao teste.
- **Curva fechada** `Físico` `Veículo` — compra **2 exp.**; **custo da Manobra segura reduzido**.
  Substitui uma Manobra segura e conserva o limite de dois pontos de orientação. Níveis: reduz
  **1 / 2 / 3 PA**, com custo mínimo de 1 PA.
- **Atingir locomoção** `Físico` `Veículo` — compra **3 exp.**; **`PA` da arma + 3 / 2 / 1 PA**.
  Ataque mirado à Locomoção: causa metade do dano da arma, arredondada para cima, e aplica
  *Locomoção comprometida*. Requer arma cortante ou perfurante. Níveis: custo adicional de **3 /
  2 / 1 PA**.
- **Golpe de passagem** `Físico` `Veículo` — compra **3 exp.**; **`PA` da arma + 1 PA**. Ataque
  corpo a corpo contra um ocupante alcançável de outro veículo; além do dano normal ao alvo, causa
  dano a uma parte aleatória do veículo dele. Níveis: **2 / 4 / 6** de dano ao veículo.
- **Tomar os controles** `Físico` `Veículo` — compra **4 exp.**; **4 / 3 / 2 PA**. Substitui a ação
  Tomar os controles à força e usa Teste Físico ou Ágil contra quem controla o veículo. No sucesso,
  o veículo perde 10 m/t e você assume os controles. Níveis: custo de **4 / 3 / 2 PA**.

## Mental

- **Controles improvisados** `Mental` `Veículo` — compra **3 exp.**; **3 PA**. Teste Mental para
  acelerar ou frear por um controle alcançável sem ocupar o posto do piloto. A mudança atualiza o
  deslocamento devido no turno, mas você não se torna o piloto. Níveis: altera até **10 / 20 /
  30 m/t**.
- **Desmontar em combate** `Mental` `Veículo` — compra **3 exp.**; **`PA` da arma + 1 PA**. Ataque
  mirado a um equipamento instalado e alcançável: causa metade do dano da arma, arredondada para
  cima, mais o bônus do nível à Integridade do equipamento. Níveis: **+2 / +4 / +6** de dano.
- **Reparo emergencial** `Mental` `Veículo` — compra **3 exp.**; **3 PA**. Substitui Reparo
  especializado: um Teste Mental remove condições do Propulsor, consumindo uma peça especializada
  por condição removida. Níveis: remove até **1 / 2 / 3** condições.
- **Reparação avançada** `Mental` `Veículo` — compra **4 exp.**; **4 PA**. Substitui Reparar
  integridade e conserva os testes e peças exigidos pela parte escolhida. O excedente da rolagem
  pode recuperar outra parte. Níveis: recupera **1d6 / 1d8 / 1d10** de Integridade.
- **Recuo controlado** `Mental` `Veículo` — compra **2 exp.**; **2 PA**. Com o veículo parado ou já
  em marcha à ré, substitui Acelerar e assume velocidade de ré até o limite do nível, respeitando
  velocidade máxima e consumo normal de recurso de propulsão. Níveis: até **20 / 30 / 40 m/t**.
- **Sabotar** `Mental` `Veículo` — compra **4 exp.**; **4 / 3 / 2 PA**. Teste Mental para aplicar
  uma condição de veículo quando você tem acesso aos mecanismos do alvo. O narrador pode limitar
  as condições possíveis conforme o mecanismo alcançado. Níveis: custo de **4 / 3 / 2 PA**.

## Social

- **Coordenar ataque** `Social` `Veículo` — compra **2 exp.**; **2 PA**. Escolha um aliado no mesmo
  veículo. Antes do início do seu próximo turno, ele pode acrescentar um dado ao próximo ataque
  comum feito a partir do veículo. O benefício não se combina com uma habilidade de ataque.
  Níveis: **+1d4 / +1d6 / +1d8** ao teste.
- **Distrair condutor** `Social` `Veículo` — compra **3 exp.**; **3 PA**. Faça um Teste Social
  contra o Mental de cada piloto escolhido a até 30 m que possa perceber você. No sucesso, o alvo
  recebe uma desvantagem no próximo teste de veículo antes do início do seu próximo turno. Níveis:
  afeta até **1 / 2 / 3** pilotos.
- **Coordenar manobra** `Social` `Veículo` — compra **2 exp.**; **2 PA**. Escolha um aliado no mesmo
  veículo. Antes do início do seu próximo turno, ele reduz o custo da próxima ação comum de veículo;
  o benefício não reduz habilidades. Níveis: reduz **1 / 2 / 3 PA**, com custo mínimo de 1 PA.

## Vocabulário de cenário

Um cenário pode renomear as habilidades sem criar outra entrada no catálogo. No Colapso, por
exemplo, *Curva fechada* pode ser chamada de **Drift** e *Recuo controlado*, de **Retrovisor**.
**Carburador furado** permanece uma habilidade exclusiva daquele cenário porque depende de
combustível e de uma emissão de fumaça específica.
