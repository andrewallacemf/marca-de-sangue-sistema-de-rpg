# Proposta de atualização do manual — Características, Aptidões e Traços

Esta proposta é um documento interno de curadoria. A redação foi aprovada em 4 de agosto de
2026 e implementada na prévia funcional da plataforma; a oficialização permanece condicionada
à validação final e à publicação.

## Base analisada

- Origem anterior: a página pública já possui a introdução, Testes e contratestes e Atributos;
  estas três novas seções ainda não existem na plataforma.
- Origem proposta: commit `9a9c01843f48daccbf17c34af6d9186da0f1f7fa` do repositório do
  sistema.
- Página pública afetada: `jogador.regras-basicas`, rota
  `/manual/jogador/regras-basicas`.
- Seções deste lote:
  - `jogador.regras-basicas.caracteristicas` — `#caracteristicas`;
  - `jogador.regras-basicas.aptidoes` — `#aptidoes`;
  - `jogador.regras-basicas.tracos` — `#tracos`.

## Fontes analisadas

- `sistema-base/conceitos/03-caracteristicas.md`;
- `sistema-base/conceitos/04-aptidoes.md`;
- `sistema-base/conceitos/06-tracos.md`;
- `sistema-base/listas/aptidoes-base.md`;
- `sistema-base/listas/tracos-base.md`;
- `sistema-base/progressao/01-experiencia-e-evolucao.md`;
- `sistema-base/criacao-de-personagem/01-passo-a-passo.md`;
- `INDICE.md`, para localizar dependências e formulações relacionadas;
- `contrato/catalogo.json`, para conferir categorias e campos dos traços oficiais;
- implementação da ficha, do catálogo e da rerrolagem por aptidão na plataforma.

## Alterações e inconsistências encontradas

### Características ainda mistura duas versões de habilidades

A abertura da fonte afirma que habilidades são gastas, compradas várias vezes para ganhar usos e
fundidas para ficarem mais fortes. A seção **Utilizando Características**, no mesmo arquivo, já
registra a regra vigente: habilidades são permanentes, possuem nível e são limitadas por pontos
de ação e fadiga.

A redação pública deve descartar integralmente a versão antiga. A explicação detalhada de
habilidades ficará para o lote que vier depois de Pontos de ação e Fadiga.

### Nem toda característica pertence a um atributo

A fonte afirma que toda característica se relaciona a Físico, Ágil, Mental ou Social. Isso é
verdade para as aptidões base e para várias habilidades e técnicas, mas não para todos os traços.
O catálogo possui maestrias e aspectos sem atributo, e módulos podem introduzir trilhas próprias
de aptidão.

A proposta substitui a afirmação absoluta por uma formulação operacional: aptidões base sempre
pertencem a um dos quatro atributos; outras características indicam atributo somente quando isso
for relevante para seu uso.

### A regra completa da rerrolagem ainda não está na página pública

O primeiro lote explica a janela de aptidões e o desempate, mas ainda não informa que:

- é possível rerrolar o dado do próprio lado ou o do outro lado;
- entre o valor anterior e o novo, permanece aquele que beneficia quem gastou a aptidão;
- os dois lados podem responder com novas aptidões, formando uma sequência alternada;
- cada uso consome uma aptidão, mas não gasta `PA`;
- nunca se rerrola dano com aptidão.

A plataforma já implementa o resultado mantido, o consumo, a alternância entre lados e a
proibição de rerrolar dano. A nova seção completa a explicação pública e exige um pequeno ajuste
na seção anterior de Testes e contratestes para criar o link canônico.

### Compra repetida do mesmo traço diverge da plataforma

O passo a passo de criação afirma que o mesmo traço não pode ser comprado duas vezes porque seus
efeitos não se acumulam. A regra conceitual de Traços não repete esse limite, e a plataforma não
impõe unicidade: hoje é possível adicionar duas cópias do mesmo traço à personagem.

Essa divergência não impede explicar o que são traços, requisitos e categorias, mas precisa ser
resolvida antes de oficializar a regra de compra na página de Criação ou Progressão.

## Páginas afetadas

- `jogador.regras-basicas` — acrescentar as três seções e complementar a ligação a partir de
  Testes e contratestes.
- `jogador.recursos.aptidoes` — futura página de consulta para custo escalonado e reserva por
  atributo; não será criada neste lote.
- `jogador.recursos.tracos` — futura página com busca e filtros por categoria, custo, origem e
  requisitos; não será criada neste lote.
- `jogador.criacao-de-personagem` e `jogador.regras-basicas.progressao` — receber posteriormente as
  regras completas de compra, inclusive a decisão sobre traços duplicados.
- `jogador.regras-basicas.descanso` — será a explicação canônica da recuperação de aptidões.
- `narrador.testes-e-arbitragem` — receber posteriormente a orientação de avisar, durante a janela
  de rerrolagem, qual dado tende a ser mais vantajoso para o jogador.

## Curadoria proposta

### Publicar neste lote

- característica como conceito que reúne habilidades, aptidões e traços;
- diferença básica entre opção ativa, recurso consumível e efeito passivo;
- relação não obrigatória entre características e atributos;
- momento e procedimento de uso das aptidões;
- valor mantido, múltiplos usos, resposta do outro lado, desempate e proibição para dano;
- recuperação de aptidões em descanso curto e longo;
- funcionamento passivo dos traços e seus requisitos;
- categorias Técnica, Maestria e Aspecto;
- ausência de níveis nos traços.

### Reescrever

- Características sem os parágrafos superados sobre usos e fusão;
- Aptidões na ordem real de mesa: janela, escolha do dado, valor mantido, respostas, desempate e
  recuperação;
- Traços começando pela regra geral e só depois apresentando requisitos e categorias.

### Encaminhar ao Manual do Narrador

- obrigação de comunicar o resultado provisório antes das consequências;
- orientação de ajudar jogadores a identificar qual rerrolagem é mais vantajosa;
- liberdade para definir outros momentos de compra ou formas excepcionais de recuperar recursos.

### Manter no bastidor

- frontmatter, datas, autoria e status;
- notas de decisão e de playtest;
- histórico das especializações e da mudança de nome para Técnicas;
- justificativas de balanceamento dos custos escalonados;
- explicações sobre a antiga fusão e os usos de habilidades;
- referências a arquivos, fichas antigas e modos de registrar recursos fora da plataforma.

## Decisão confirmada

### O mesmo traço não pode ser comprado mais de uma vez

Foi confirmado que **duplicatas não são permitidas**. Traços não possuem níveis, e seus efeitos
não se acumulam. Com isso:

- a regra será explicitada em Criação de personagem e Progressão;
- o catálogo continuará contendo uma única entrada por traço;
- a plataforma bloqueia novas duplicatas na interface e no servidor;
- fichas antigas e arquivos importados com duplicatas são preservados, sem exclusão silenciosa;
- um saneamento futuro dependerá de decisão e fluxo explícitos.

A regra passa a aparecer diretamente na seção pública de Traços.

## Impactos na plataforma

- Banco ou migração neste lote: nenhum; isso preserva duplicatas legadas e importadas.
- Navegação: adicionar três âncoras ao índice da página de Regras básicas.
- Conteúdo: ampliar a página e atualizar a ligação da explicação de Testes para Aptidões.
- Rolagem: nenhuma mudança; o comportamento atual coincide com a regra proposta de resultado
  mantido e proibição de rerrolar dano.
- Ficha: impedir adição e renomeação que criem uma duplicata. O servidor repete a validação;
  duplicatas anteriores continuam editáveis enquanto o nome não for alterado.
- Catálogo: os dados atuais confirmam as categorias Técnica, Maestria e Aspecto. A página pública
  de consulta será tratada em outro lote.

## Validações da proposta

- as três seções seguem Atributos e antecedem os conceitos que dependem de `PA` e fadiga;
- a redação não reproduz as versões superadas de habilidades;
- os procedimentos de aptidão coincidem com a regra escrita e com a implementação da mesa;
- a classificação dos traços coincide com o catálogo estruturado;
- a prévia não contém metadados, datas, decisões, pendências ou links de bastidor;
- os únicos links propostos apontam para âncoras da própria página e podem ser ativados junto com
  as novas seções.

## Prévia da redação pública

---

## Características

As **características** representam os recursos, conhecimentos e capacidades especiais de uma
personagem. Elas são divididas em três tipos:

- **Habilidades** são opções ativas. A personagem escolhe usá-las e paga os custos indicados.
- **Aptidões** são recursos consumíveis usados para rerrolar testes e contratestes.
- **Traços** são efeitos passivos que permanecem ativos enquanto seus requisitos forem atendidos.

Características podem ser adquiridas com experiência nos momentos de compra. Módulos e cenários
podem acrescentar novas opções às características disponíveis no sistema base.

As aptidões base sempre correspondem a um dos quatro [atributos](#atributos). Habilidades e
traços indicam um atributo quando isso for relevante para seu funcionamento; algumas dessas
características atuam por gatilhos e requisitos próprios, sem pertencer a um atributo.

## Aptidões

Aptidões são recursos consumíveis associados aos atributos **Físico**, **Ágil**, **Mental** e
**Social**. Cada aptidão disponível permite uma rerrolagem relacionada ao seu atributo. Gastá-la
não consome pontos de ação (`PA`).

### Quando usar uma aptidão

Depois que o narrador anuncia o resultado provisório de um teste ou contrateste, mas antes de
narrar suas consequências, quem controla a personagem pode gastar uma aptidão do atributo usado
na ação.

Ao gastar a aptidão, escolha rerrolar o dado do seu lado ou o dado do outro lado. Aptidões mudam o
resultado de um dado que já foi rolado; elas não concedem vantagem nem desvantagem e não alteram a
quantidade inicial de dados.

### Qual resultado permanece

Compare o novo valor com o valor anterior e mantenha aquele que beneficia quem gastou a aptidão:

- ao rerrolar o dado do próprio lado, permanece o maior valor;
- ao rerrolar o dado do outro lado, permanece o menor valor.

> **Exemplo:** seu teste resultou em `5` e o contrateste em `6`. Se você rerrolar o próprio dado e
> obtiver `3`, o `5` permanece. Se obtiver `8`, o resultado passa a ser `8`. Se preferir rerrolar o
> dado do contrateste e obtiver `4`, o valor do outro lado passa a ser `4`.

### Usando mais de uma aptidão

É possível gastar quantas aptidões disponíveis forem necessárias. Depois de uma rerrolagem, o
outro lado também pode gastar uma aptidão e responder. As rerrolagens podem continuar de forma
alternada enquanto alguém quiser e possuir aptidões do atributo adequado.

Se o resultado terminar empatado, vence o lado que gastou mais aptidões. Se os dois lados tiverem
gasto a mesma quantidade, o contrateste vence, seguindo a [regra geral de desempate](#como-resolver).

Aptidões só podem rerrolar dados de teste e contrateste. **Dados de dano nunca podem ser
rerrolados com aptidões.**

### Recuperando aptidões

Uma aptidão fica indisponível depois de ser gasta. Um descanso curto recupera uma aptidão de cada
atributo; um descanso longo recupera todas as aptidões gastas.

## Traços

Traços são características passivas. Seus efeitos se aplicam sempre que a situação descrita
acontece e seus requisitos estão atendidos. Traços não gastam `PA`, não são consumidos e não
precisam ser recuperados.

Traços não possuem níveis e uma personagem não pode adquirir o mesmo traço mais de uma vez.
Quando existe uma progressão entre dois traços, ela é representada por um requisito: cada entrada
continua sendo um traço diferente.

### Requisitos dos traços

Um requisito é uma condição necessária para que o efeito de um traço esteja ativo. Ele pode
exigir, por exemplo:

- uma condição da cena, como estar usando um escudo;
- outra característica, como uma técnica ou outro traço;
- uma condição corporal, como não possuir uma perna desabilitada.

É possível adquirir um traço sem atender aos seus requisitos. Nesse caso, o traço permanece
inativo até que todos eles sejam atendidos.

### Tipos de traço

**Técnicas** representam treinamento em atividades específicas. Sem a técnica adequada, a ação
recebe a desvantagem natural da atividade. Possuir a técnica remove essa desvantagem, mas não
concede vantagem.

**Maestrias** representam domínio de equipamentos, propriedades de armas e armaduras ou formas
de combate, incluindo o ataque desarmado. Cada maestria descreve o efeito que a personagem pode
aplicar enquanto seus requisitos forem atendidos.

**Aspectos** modificam a forma como a personagem responde a determinadas situações. Eles podem
permitir ações especiais, alterar efeitos ou criar exceções às regras gerais, sempre conforme o
gatilho e os requisitos indicados na própria entrada.

---

## Confirmação recebida

A redação foi aprovada e a proibição de traços duplicados foi confirmada. O lote seguiu para
implementação e validação na plataforma.
