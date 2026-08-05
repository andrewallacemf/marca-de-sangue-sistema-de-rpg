# Proposta de atualização do manual — fundamentos das Regras básicas

Esta proposta é um documento interno de curadoria. A redação foi aprovada e implementada
localmente na plataforma; ela será considerada oficial somente depois da confirmação funcional e
do registro da publicação.

## Base analisada

- Origem anterior: primeira publicação; ainda não existe uma versão oficial destas seções na
  plataforma.
- Origem proposta: commit `9a9c01843f48daccbf17c34af6d9186da0f1f7fa` do repositório do
  sistema.
- Página pública prevista: `jogador.regras-basicas`, rota
  `/manual/jogador/regras-basicas`.
- Seções deste lote:
  - `jogador.regras-basicas.introducao` — `#como-funciona-o-jogo`;
  - `jogador.regras-basicas.testes` — `#testes-e-contratestes`;
  - `jogador.regras-basicas.atributos` — `#atributos`.

## Fontes analisadas

- `sistema-base/00-introducao.md`;
- `sistema-base/conceitos/01-testes-e-contratestes.md`;
- `sistema-base/conceitos/02-atributos.md`;
- `INDICE.md`, para localizar dependências e ocorrências relacionadas;
- decisões de design referenciadas pelas fontes, usadas apenas para confirmar qual regra está
  vigente.

## Alterações encontradas

- A introdução atual mistura apresentação do sistema, materiais, preparação da sessão, criação de
  personagem e orientação para o narrador. Esse conteúdo precisa ser distribuído entre **Comece
  aqui**, **Regras básicas** e, futuramente, o **Manual do Narrador**.
- A regra de testes está completa, mas sua organização repete conceitos e intercala regra pública
  com datas, decisões e links de bastidor.
- O resultado anunciado antes da janela de aptidões é provisório. A fonte descreve a sequência,
  mas não usa essa palavra; adotá-la evita que o leitor interprete o primeiro anúncio como
  definitivo.
- A abertura de Atributos afirma que habilidades e aptidões possuem “usos limitados”. Essa frase
  não representa mais o modelo oficial: habilidades possuem nível e custam fadiga, enquanto
  aptidões têm sua própria reserva.
- A seção **Atributos específicos** ensina a criar um quinto atributo para um cenário. Isso é
  orientação de construção e arbitragem, não uma regra necessária para o jogador.
- O índice de conceitos ainda cita o `KI` de Mukashi como exemplo de quinto atributo, embora o
  próprio arquivo de Atributos registre que Mukashi não usa mais esse modelo. Essa referência não
  deve chegar ao manual público.

## Páginas afetadas

- `jogador.regras-basicas` — criar as três primeiras seções.
- `jogador.comece-aqui` — receber posteriormente materiais, preparação e início de jogo.
- `narrador.conducao-do-jogo` — receber posteriormente a orientação sobre escolher cenário,
  preparar sessão e representar o mundo.
- Futuro conteúdo de criação ou adaptação de cenários no Manual do Narrador — candidato a receber
  a regra opcional de quinto atributo, caso o grupo queira mantê-la como ferramenta oficial.
- `manual.glossario` — futuramente indexar teste, contrateste, vantagem, desvantagem e atributos.

## Curadoria proposta

### Publicar neste lote

- uma explicação curta do papel de jogadores e narrador;
- o ciclo básico: descrição da situação, declaração da ação, teste quando houver chance de falha,
  contrateste e narração do resultado;
- tipos de teste e contrateste;
- vantagens, desvantagens, cancelamentos, desvantagem natural e influência do ambiente;
- sequência de resolução, janela de aptidões, desempate e arredondamento;
- função e escopo dos quatro atributos base.

### Reescrever

- a introdução como explicação do funcionamento, sem apresentar a estrutura antiga do livro;
- Testes e Contratestes em ordem operacional, eliminando repetições;
- Atributos como categorias que orientam testes e organizam características, sem afirmar que o
  atributo concede sozinho um bônus numérico.

### Encaminhar ao Manual do Narrador

- escolha ou criação de cenário;
- preparação de uma sessão e de seus desafios;
- arbitragem contextual do atributo aplicável;
- orientação para criar um quinto atributo específico de cenário, se essa ferramenta continuar
  oficial.

### Manter no bastidor

- frontmatter, status, datas e autoria;
- histórico de decisões e versões substituídas;
- links para notas de design;
- observações sobre revisão, playtest ou tarefas futuras;
- referência desatualizada ao `KI` como quinto atributo de Mukashi.

## Contradições encontradas e decisões confirmadas

Não foi encontrada contradição que impeça a redação das regras de testes ou dos quatro atributos
base. As duas decisões editoriais foram confirmadas:

1. **Quinto atributo:** foi removido do Manual do Jogador e reservado a uma futura página de
   criação ou adaptação de cenários no Manual do Narrador.
2. **Materiais e preparação:** dados, fichas, malha, tamanho do grupo e preparação da primeira
   sessão ficarão em **Comece aqui**, evitando que a página de Regras básicas comece com
   instruções logísticas.

A expressão **resultado provisório** é uma clarificação editorial da sequência já vigente, não
uma alteração mecânica.

## Impactos na plataforma

- Catálogo: nenhum.
- Ficha: nenhum.
- Banco ou migração: nenhum.
- Navegação: criar três âncoras e incluí-las no índice lateral da página.
- Links: relacionar **Como funciona o jogo** com **Comece aqui**; preparar links futuros para
  Aptidões, Características, Pontos de ação e Manual do Narrador.
- Busca: indexar os títulos e os termos definidos somente quando a página for oficializada.

## Validações da proposta e da implementação

- as três seções previstas estão presentes e na ordem de dependência definida pelo mapa;
- a prévia pública não contém frontmatter, datas, decisões, pendências ou links de bastidor;
- os YAMLs, IDs, rotas, dependências e caminhos de fonte foram validados;
- os links Markdown relativos estão válidos;
- `git diff --check` não encontrou erros de whitespace;
- a rota `/manual` e a página `/manual/jogador/regras-basicas` são públicas e estáticas;
- a navegação por âncoras foi validada em desktop e celular;
- a interface foi conferida nos temas claro e escuro, sem rolagem horizontal e sem erros no
  console do navegador;
- os testes automatizados relacionados passaram, assim como TypeScript, lint e build de produção;
- links para **Comece aqui** e **Aptidões** foram temporariamente omitidos da implementação para
  não apontar a destinos ainda inexistentes.

## Ordem de execução

1. ~~confirmar as duas decisões editoriais~~;
2. ~~ajustar e aprovar a redação~~;
3. ~~criar a estrutura do manual na plataforma~~;
4. ~~implementar estas três seções e suas âncoras~~;
5. ~~validar conteúdo, navegação, responsividade, tema claro/escuro e acessibilidade~~;
6. apresentar a prévia funcional;
7. oficializar somente após a confirmação funcional.

## Prévia da redação pública

O conteúdo entre esta seção e **Confirmação solicitada** é a proposta de texto para o Manual do
Jogador.

---

## Como funciona o jogo

Marca de Sangue é um sistema para criar e jogar histórias em grupo. Uma pessoa assume o papel de
**narrador**: ela apresenta o mundo, descreve as situações e interpreta os personagens que não
pertencem aos jogadores. As demais pessoas interpretam seus próprios personagens e dizem como
eles agem diante de cada situação.

O jogo avança como uma conversa:

1. o narrador descreve a situação;
2. os jogadores dizem o que seus personagens tentam fazer;
3. quando uma ação pode falhar, ela é resolvida com um **teste** e um **contrateste**;
4. depois da resolução, o narrador descreve como a situação mudou.

As regras básicas valem em qualquer cenário. Módulos acrescentam mecânicas opcionais, enquanto
cada cenário apresenta seu contexto, seus recursos e as regras exclusivas daquele mundo.

O dado central do sistema é o dado de dez faces, ou `d10`. Outros dados, fichas e uma malha de
combate podem ser usados conforme a cena e o cenário. Consulte [Comece aqui](/manual/jogador/comece-aqui)
para preparar sua primeira sessão.

## Testes e contratestes

Quando uma ação tem chance de falhar, o narrador pode pedir um **teste**. Todo teste é comparado a
um **contrateste**, que representa a resposta de outro personagem ou a dificuldade da própria
situação.

O teste inicia a resolução e é sempre uma ação. O contrateste determina o que se opõe a ela e pode
ser uma reação ou uma dificuldade natural.

### Tipos de teste

- **Teste de acerto:** resolve um ataque ou outra ação de combate direto.
- **Teste de desempenho:** resolve uma atividade, especialmente quando não existe um oponente
  agindo diretamente contra ela, como escalar uma parede ou atravessar um rio.
- **Teste de acontecimento:** resolve um evento iniciado pelo ambiente ou por algo que não é um
  personagem, como fogo se espalhando ou uma pedra rolando.

### Tipos de contrateste

- **Contrateste de esquiva:** responde diretamente a um ataque com uma tentativa de não ser
  atingido.
- **Contrateste de desempenho:** representa outra resposta possível à ação, como defender,
  agarrar uma arma ou conter um efeito.
- **Contrateste de dificuldade natural:** representa a dificuldade de uma tarefa ou a força de um
  acontecimento, como a correnteza durante uma travessia.

O tipo de resposta muda as consequências. Esquivar-se com sucesso evita o ataque. Tentar segurar
ou bloquear um golpe pode produzir outro resultado mesmo quando o contrateste é bem-sucedido.

### Vantagens e desvantagens

Cada teste ou contrateste começa com `1d10`. Circunstâncias favoráveis concedem **vantagem**;
circunstâncias desfavoráveis impõem **desvantagem**.

- Para cada vantagem, role um dado adicional e use o maior resultado.
- Para cada desvantagem, role um dado adicional e use o menor resultado.

Vantagens e desvantagens do mesmo participante se anulam uma a uma. Depois disso, vantagens dos
dois lados também se anulam entre si; o mesmo acontece com desvantagens dos dois lados. Role
somente depois de concluir esses cancelamentos.

Algumas atividades exigem treinamento. Um personagem sem a **técnica** correspondente realiza o
teste com **desvantagem natural**. A técnica remove essa desvantagem, mas não concede vantagem.

O ambiente e o terreno também podem alterar uma ação. Dependendo do contexto, eles podem conceder
vantagem ou desvantagem e ainda produzir efeitos próprios.

### Como resolver

1. O jogador declara a ação.
2. Se houver chance de falha, o narrador pede o teste, indica o [atributo](#atributos) relacionado
   e informa os modificadores aplicáveis.
3. Os dois lados calculam e cancelam suas vantagens e desvantagens.
4. Cada lado rola seus dados e determina seu resultado.
5. Compare os resultados:
   - o teste vence somente se for maior que o contrateste;
   - em caso de empate, o contrateste vence.
6. O narrador anuncia o resultado provisório. Antes de narrar as consequências, os envolvidos
   podem gastar aptidões do atributo relacionado para rerrolar o dado do teste ou do contrateste.
7. Encerrada a janela de aptidões, o narrador descreve o resultado final e suas consequências.

Aptidões podem alterar o desempate. Se apenas um lado usou aptidões e o resultado final ficou
empatado, esse lado vence. Se os dois lados usaram, vence quem gastou mais aptidões. Se gastaram a
mesma quantidade, o contrateste volta a vencer.

A rerrolagem por aptidão vale apenas para dados de teste e contrateste, nunca para dados de dano.
A regra completa será apresentada em [Aptidões](#aptidoes).

### Arredondamento

Sempre que uma regra produzir um número quebrado, arredonde para baixo. Isso vale para metade de
dano, reduções e qualquer outra divisão.

## Atributos

Os atributos representam quatro campos fundamentais das capacidades de um personagem: **Físico**,
**Ágil**, **Mental** e **Social**. Eles ajudam o narrador a definir como uma ação será resolvida e
organizam características como aptidões, habilidades e traços.

Quando pedir um teste ou contrateste, o narrador indica o atributo que melhor corresponde à ação
descrita. O atributo não concede sozinho um bônus ao dado: o resultado também pode ser afetado
pelas características do personagem, por seus equipamentos e pelo contexto da cena.

### Físico

O atributo **Físico** abrange força bruta, potência muscular e resistência corporal. Pode ser
usado para levantar ou arrastar peso, saltar, esmagar objetos, atacar com força ou resistir a
golpes e danos.

### Ágil

O atributo **Ágil** abrange velocidade, precisão, destreza, equilíbrio e atletismo. Pode ser usado
para correr, escalar, sustentar o próprio peso, realizar movimentos precisos ou esquivar-se.

### Mental

O atributo **Mental** abrange inteligência, conhecimento, percepção e capacidade de análise. Pode
ser usado para memorizar, investigar, compreender idiomas, lidar com animais, identificar
mentiras, resolver enigmas ou aplicar conhecimentos de medicina. Características Mentais também
podem aumentar os pontos de ação do personagem.

### Social

O atributo **Social** abrange comunicação, linguagem corporal, leitura de intenções e controle da
própria expressão. Pode ser usado para blefar, intimidar, persuadir, negociar, interpretar ou
discursar.

O atributo adequado depende principalmente da maneira como o personagem tenta agir. Quando mais
de um atributo parecer possível, o narrador escolhe aquele que melhor representa a abordagem
descrita.

---

## Estado atual

As decisões editoriais e a redação foram aprovadas. A versão funcional está implementada
localmente e pronta para conferência antes da oficialização.
