---
data: 2026-08-01
pessoa: daniel
ferramenta: claude-cowork
objetivo: extrair o sistema de veículos do cenário Colapso para um módulo reutilizável, deixando
  a sucata no cenário como recurso próprio que complementa o módulo
arquivos-alterados:
  - modulos/veiculos/README.md
  - modulos/veiculos/listas/lista-de-veiculos.md
  - modulos/veiculos/listas/lista-de-equipamentos.md
  - modulos/veiculos/listas/lista-de-habilidades.md
  - modulos/veiculos/listas/lista-de-tracos.md
  - cenarios/colapso/mecanicas-unicas/sucata.md
  - cenarios/colapso/mecanicas-unicas/veiculos.md
  - cenarios/colapso/mecanicas-unicas/equipamentos-de-veiculo.md (removido)
  - cenarios/colapso/mecanicas-unicas/habilidades-do-cenario.md
  - cenarios/colapso/mecanicas-unicas/tracos-do-cenario.md
  - cenarios/colapso/arquetipos.md
  - cenarios/colapso/README.md
  - cenarios/colapso/00-visao-geral.md
  - cenarios/colapso/arsenal.md
  - cenarios/colapso/itens/README.md
  - cenarios/colapso/lore/README.md
  - modulos/README.md
  - AGENTS.md
  - CONVENCOES.md
  - INDICE.md
  - PENDENCIAS.md
  - notas-de-design/arquitetura-da-informacao.md
  - notas-de-design/banco-de-ideias-colapso.md
---

# Sessão: módulo de Veículos

## Prompts dados

Abertura, com o repositório já atualizado (pull feito):

> Se ambiente no projeto, leia os arquivos do claude.md, agents.md, CONFIGURACAO-INICIAL.md,
> COMECE-AQUI.md, convencoes.md, e quaisquer outros arquivos que considerar relevante. Use o
> conector com o github desktop quando necessário.

Depois, dois pedidos numa mensagem só:

> 1. sim [dei pull]. mas nao avisei aqui, por isso você nao ficou sabendo. Me ajude a garantir que
> a partir de agora consigo apenas pedir pra você fazer o commit e o push.
>
> 2. Hoje nós separados o sistema de magia do mukashi num modulo. O sistema do colapso também tem
> um sistema de veiculo que precisava virar um módulo que possa funcionar em qualquer cenario que
> use veiculos (e o cenário do colapso, os recursos especificos de veiculos do cenario que
> complementam/substituem coisas basicas do modulo). Faça uma análise do que temos de informação
> sobre isso pra organizarmos como organizar isso em um modulo

Depois da primeira análise, correção importante sobre o meu ambiente:

> Você tem certeza que você roda comandos num ambiente linux? acho que voce herdou isso do setup do
> andré que eu sei que funciona assim, mas até onde sei, o meu não. Avalie se esta informação é
> verdadeira pra você e salve isso na memoria.
>
> a. Sucata deve ser mecanica especifica do cenario, não fica na estrutura de veículos (e todas as
> coisas que relacionam veiculos com sucatas também devem ser documentadas como mecanicas/recursos
> que complementam o modulo de veiculos especificamente neste cenario). Avalie como estruturar isso
> e preencher as lacunas que isso deve gerar.
> b. trate isso igual tratamos experiencia e aptidão de magia no modulo de magia. devem ser do
> modulo de veiculos e serem tratados como mecanicas opcionais.
> c. mesma resposta acima.
> [sobre a malha de 10 metros] Isso fica no modulo de veiculos e complementa a mecanica do sistema
> base.

Respostas às perguntas de alinhamento (via seleção de opções):

1. Freio do reparo sem sucata: **"Insumo genérico abstrato."**
2. Preço da Aptidão Veicular: **"Alinhar à escada"** (padrão das aptidões, como a Aptidão Mágica).
3. Arquétipos de veículo: **"Ficam no Colapso — só o sistema base ou cenarios podem ter
   arquétipos, os modulos não tem."**
4. Pendências do Gabriel: **"Executar agora."**

## Verificação do ambiente (pedido 1)

O Daniel desconfiou, com razão, que eu estivesse repetindo o que valia para o setup do André. Testei
de fato e a informação **se confirmou para mim**: rodo comandos numa máquina Linux descartável
(Ubuntu 22.04, Python 3.10, Node 22, Git 2.34) que enxerga a pasta do repositório por montagem, mas
**não tem acesso de rede ao GitHub** (o proxy responde 403 em qualquer operação remota).

Conclusão prática, registrada no `AGENTS.md` numa seção nova ("Ambiente das IAs"): **consigo
commitar, não consigo dar push.** O `push` continua sendo um clique da pessoa no GitHub Desktop, e
a instrução diz explicitamente para nunca dar a sincronização como concluída sem ele. A seção também
manda cada outra IA testar o próprio ambiente em vez de assumir que vale o mesmo.

Também confirmei, no começo da sessão, que o repositório estava **limpo e sincronizado** — o
trabalho do módulo Magia (commit `2f1e964`) já tinha sido enviado.

## Análise de impacto (antes de mexer)

Segui o protocolo do `AGENTS.md`: mapeei tudo antes de editar e **parei para perguntar** nos pontos
sem resposta óbvia. O conteúdo de veículo estava em 6 arquivos (`veiculos.md`,
`equipamentos-de-veiculo.md`, 19 das 21 habilidades e 11 dos 17 traços das listas do cenário,
`arquetipos.md` e a sucata em `itens/README.md`).

O achado central: a mecânica estava **grudada em três coisas que não são veículo** — a sucata, a
Experiência de Veículos e a Aptidão Veicular. As duas últimas tinham modelo pronto no módulo Magia
(feito horas antes, na mesma data); a sucata era o problema de verdade, porque atravessava reparo,
fabricação, uma ação da tabela e dois traços.

Sinalizei também duas interações com o núcleo que ninguém tinha documentado: a **malha de 10 m**
(que muda a escala do tabuleiro do sistema-base) e a **colisão de terminologia** entre
"posicionamento" (núcleo) e "pontos de orientação" (veículo).

## O que foi feito

### Módulo `modulos/veiculos/`

- **`README.md`** — a mecânica: ficha do veículo; escala de malha de 10 m **com a regra nova de
  convivência das duas escalas**; orientação, com a relação explícita com o posicionamento do
  núcleo; ações (sem *Procurar sucata*); matriz de colisão; 11 condições; integridade e reparo;
  cobertura do tripulante; sistema de equipamentos; Aptidão Veicular e Experiência de Veículos
  como opcionais, com a tabela das 4 combinações; guia de design; e uma seção "Módulos
  recomendados" — **primeira dependência módulo → módulo do projeto**.
- **`listas/lista-de-veiculos.md`** — as categorias Sem motor/A–E com velocidade, motor,
  integridade, ocupantes, slots e combustível, mais **as 5 partes do veículo**. Tudo proposta: o
  material Alpha trazia essa seção **vazia**, com um único *Motor 20* solto, e nunca listou as
  partes. Sem isso o módulo não rodava.
- **`listas/lista-de-equipamentos.md`** — os 12 equipamentos + os 2 itens de apoio + fabricação.
- **`listas/lista-de-habilidades.md`** — 19 habilidades.
- **`listas/lista-de-tracos.md`** — 10 traços.

### O insumo abstrato (decisão 1 do Daniel)

O módulo trabalha com **peças de reposição** em duas categorias — *peça comum* e *peça
especializada* — e fixa apenas **quanto** cada reparo consome. **O que a peça é** fica por conta do
cenário. Foi o desenho que permitiu tirar a sucata do módulo sem deixar o reparo sem freio: sem
nenhum limitador, um veículo com mecânico a bordo ficaria quase indestrutível numa perseguição
longa, e essa observação está escrita no próprio módulo.

### Cenário Colapso

- **`sucata.md` (novo)** — a sucata inteira num lugar só, com o mapeamento explícito (comum = peça
  comum; eletrônica = peça especializada), a tabela de custo por reparo, *Procurar sucata*, a
  conversão, e os dois traços ligados. Antes disso ela estava espalhada em três arquivos, sem
  nenhum ponto que a descrevesse por inteiro.
- **`veiculos.md`** — reescrito, curto: declara o uso do módulo e lista só as diferenças (a sucata
  como insumo, a ação nova, os traços próprios, o exaustor contra tempestade de areia) e as duas
  decisões que o módulo delega (o Colapso **liga as duas** mecânicas opcionais).
- **`equipamentos-de-veiculo.md`** — removido; conteúdo subiu para o módulo.
- **`habilidades-do-cenario.md`** e **`tracos-do-cenario.md`** — reduzidos ao que não é de veículo.
- Links ajustados em `arquetipos.md`, `README.md`, `00-visao-geral.md`, `arsenal.md`,
  `itens/README.md`, `lore/README.md` e no banco de ideias.

## Decisões tomadas

- **Peças de reposição abstratas** no módulo; o cenário declara o que são (Colapso: sucata).
- **Aptidão Veicular** passou de `1 exp.` fixo para a **escada padrão** das aptidões, alinhando com
  a Aptidão Mágica.
- **Experiência de Veículos** virou mecânica opcional com regras de ganho reais — copiando o padrão
  da Experiência de Magia. Resolve uma pendência aberta desde 11/07 (era citada sem nenhuma regra
  por trás).
- **Convenção nova do projeto:** *módulos não contêm arquétipos*. Arquétipos só existem no
  sistema-base (os genéricos) ou dentro de um cenário. Registrada em `CONVENCOES.md` §10,
  `modulos/README.md` e `INDICE.md`, e ela **descarta** o item 3 do roadmap de módulos da
  `arquitetura-da-informacao.md`, que previa um módulo `arquetipos`.
- **Convenção irmã, da mesma decisão:** *recursos econômicos do mundo* (moedas, matérias-primas,
  insumos) também não entram em módulo — o módulo declara a função, o cenário declara o que é.

## Pendências

**Criadas (6):** valores-base de integridade e as 5 partes (proposta a validar); convivência das
duas escalas de malha (proposta a validar); o novo preço da Aptidão Veicular; a falta de um traço
genérico ligado a peças no módulo; a ausência de preço em moeda para os equipamentos; e as 5
habilidades/traços genéricos que ficaram presos no Colapso sem serem junkpunk.

**Resolvida (1):** "Experiência de Veículos citada mas nunca definida" — resta só decidir quanto o
grupo começa.

**Parcialmente resolvida (1):** a mecânica de sucatas ganhou arquivo próprio, conversão e tabela de
gasto. Continuam abertos **quanto se acha** e **para que serve a sucata radioativa** — descobri que
nada no material a consome: ela só existe como degrau da tabela de conversão, o que torna o traço
*Serralheiro e soldador* parcialmente inútil.

**Reapontadas:** as pendências de veículo do Gabriel agora apontam para os arquivos do módulo. O
conteúdo não mudou de valor, só de lugar — ele revisa no lugar certo.

## Observações

Commitei, mas **não dei push** (não consigo — ver acima). Falta o clique em *Push origin* no GitHub
Desktop e o aviso ao grupo, em especial ao Gabriel, que é o dono do conteúdo do Colapso.

Vale registrar que este é o **segundo módulo extraído no mesmo dia** e que o primeiro serviu de
molde direto para o segundo: as duas mecânicas opcionais do módulo Magia (aptidão própria e segundo
tipo de `exp.`) viraram o padrão reaproveitado aqui sem discussão nova. O padrão parece bom o
bastante para virar o modelo de qualquer módulo futuro que precise de trilha própria.
