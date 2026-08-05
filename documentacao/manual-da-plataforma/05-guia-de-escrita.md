# Guia de escrita do manual da plataforma

Este guia define como transformar as regras e materiais do repositório em páginas claras,
coerentes e consultáveis. Ele deve ser usado junto da
[arquitetura](01-arquitetura-do-manual.md), do
[contrato editorial](02-contrato-editorial.md), do
[mapa de conteúdo](03-mapa-de-conteudo.md) e do
[fluxo de publicação](04-fluxo-de-publicacao.md).

O objetivo não é padronizar a personalidade de todos os textos. É garantir que o leitor sempre
encontre regra, contexto, custo, efeito e links no lugar esperado.

## 1. Voz e tom

O manual usa português do Brasil, com tom:

- direto;
- acolhedor;
- seguro, sem parecer burocrático;
- explicativo sem presumir experiência com RPG;
- preciso quando descreve regras;
- evocativo, mas não obscuro, quando apresenta cenários.

Prefira frases curtas e verbos concretos. Explique termos técnicos na primeira vez em que forem
necessários.

### Faça

> Quando usa uma habilidade, você paga o custo indicado em pontos de ação e recebe a mesma
> quantidade de fadiga.

### Evite

> Conforme previamente estabelecido nas deliberações acerca do novo funcionamento das
> habilidades, deverão ser contabilizados os respectivos custos.

Não use a voz de quem está editando um repositório. O texto fala com pessoas que querem aprender
ou consultar o jogo.

## 2. Ordem de apresentação

Dentro de uma explicação, use esta ordem sempre que os itens existirem:

1. **O que é.** Definição em uma ou duas frases.
2. **Para que serve.** Papel da regra no jogo.
3. **Quando acontece.** Gatilho ou situação de uso.
4. **Como funciona.** Procedimento na ordem de execução.
5. **Quanto custa.** Recursos consumidos.
6. **Qual é o efeito.** Resultado e duração.
7. **Limites.** Quantidade, alcance, teto, piso ou frequência.
8. **Exceções.** Somente as exceções vigentes.
9. **Exemplo.** Demonstração curta com valores atuais.
10. **Relações.** Links para conceitos necessários ou próximos passos.

Não comece por exceções, histórico ou caso raro. O leitor precisa entender a regra comum antes
de suas variações.

## 3. Estrutura básica de uma página

Toda página deve ter:

1. um único título principal;
2. uma descrição curta que diga o que o leitor encontrará;
3. conteúdo dividido por títulos descritivos;
4. links para pré-requisitos quando necessários;
5. links para assuntos relacionados ao final ou nos pontos relevantes.

Modelo geral:

```markdown
# Título da página

Descrição curta da função desta página.

## O conceito

Definição e finalidade.

## Como funciona

Procedimento na ordem em que acontece.

## Limites e exceções

Somente o que modifica a regra geral.

## Exemplo

Exemplo curto com valores vigentes.

## Veja também

- [Conceito relacionado](/manual/jogador/regras-basicas#conceito-relacionado)
```

O modelo é uma referência, não uma obrigação de criar seções vazias. Se não houver exceção ou
exemplo útil, não crie o título.

## 4. Hierarquia de títulos

- `H1`: título da página; use apenas um.
- `H2`: grandes assuntos ou etapas.
- `H3`: subdivisões de um `H2`.
- `H4`: evite; use somente em documentos realmente extensos.

Não pule níveis. Um `H3` sempre pertence ao `H2` anterior.

Títulos devem descrever o conteúdo:

- prefira **“Como a fadiga reduz os pontos de ação”**;
- evite **“Outras informações”**;
- prefira **“Recuperando fadiga”**;
- evite **“Observações importantes”**.

Não inclua emojis decorativos no título canônico. Ícones podem fazer parte da interface sem
alterar o texto ou a âncora.

## 5. Âncoras e identificadores

Cada `H2` e cada `H3` consultável recebe uma âncora estável registrada pelo conteúdo ou pelo
mapa. A âncora:

- usa letras minúsculas, números e hífens;
- não depende de acentos;
- descreve o conceito, não a posição da seção;
- não muda apenas porque o título foi melhorado.

Exemplo:

```text
Título: Como a fadiga reduz seus pontos de ação
Âncora: fadiga-e-reducao-de-pa
```

Evite âncoras como `parte-2`, `regra-nova` ou `explicacao-atualizada`.

Quando uma seção mudar de lugar ou virar página, preserve a âncora antiga por alias ou
redirecionamento.

## 6. Terminologia oficial

Use sempre a terminologia definida no sistema e no glossário. No estado atual:

| Conceito | Forma no manual |
|---|---|
| Pontos de ação | `PA` depois da primeira explicação |
| Pontos de vida | `PV` depois da primeira explicação |
| Experiência | `exp.` |
| Atributos | Físico, Ágil, Mental e Social |
| Pessoa que conduz o jogo | narrador |
| Pessoa que controla uma personagem | jogador |
| Unidade controlada | personagem |
| Regra de resolução | teste ou contrateste, conforme o caso |
| Opção ativa especial | habilidade |
| Opção passiva | traço |
| Recurso de esforço acumulado | fadiga |

Na primeira menção de uma página, prefira a forma extensa seguida da sigla:

> O personagem possui 10 pontos de ação (`PA`) no início do turno.

Depois disso, use `PA`.

Não alterne sinônimos em regras apenas para variar o texto. Se o conceito se chama “guarda”, não
troque por “postura defensiva” no parágrafo seguinte.

Quando o repositório trouxer dois nomes para o mesmo conceito, consulte o `INDICE.md` e apresente
a divergência em vez de escolher pela frequência.

## 7. Números, dados e notação

- Use algarismos para valores mecânicos: `2 PA`, `10 PV`, `3 m`.
- Use a notação de dados sem espaços: `1d6`, `2d10`.
- Use o sinal menos tipográfico em texto quando possível: `−1 PA`.
- Indique arredondamento sempre que uma divisão puder produzir fração.
- Especifique teto, piso e momento da aplicação.
- Diferencie “gastar”, “receber”, “recuperar” e “reduzir”.

Exemplo preciso:

> Você pode receber 2 pontos de fadiga para ganhar 1 `PA` adicional. Os `PA` obtidos dessa forma
> não podem ultrapassar metade do seu `PA` base, arredondada para baixo.

Exemplo impreciso:

> Você pode trocar um pouco de fadiga por ações extras, até certo limite.

Valores presentes em tabela, catálogo, exemplo e código devem coincidir.

## 8. Como escrever uma regra

Uma regra deve permitir que duas mesas diferentes cheguem ao mesmo procedimento.

Informe explicitamente:

- gatilho;
- agente;
- alvo, quando houver;
- custo;
- teste ou contrateste;
- efeito em sucesso e falha, quando diferentes;
- duração;
- limite;
- exceções.

### Modelo curto

```markdown
## Nome da regra

Quando [gatilho], [agente] pode [ação]. Para isso, gasta [custo] e realiza
[teste/contrateste]. Em caso de sucesso, [efeito]. Em caso de falha, [efeito ou ausência de
efeito]. A regra pode ser usada [limite] e dura [duração].
```

Não preencha itens que a regra não possui. Também não transforme ausência de definição em “a
critério do narrador” sem aprovação: essa frase cria uma regra nova.

## 9. Como escrever exemplos

Um exemplo deve esclarecer uma única dificuldade por vez.

### Regras

- use valores vigentes;
- apresente apenas personagens e contexto necessários;
- mostre as etapas na mesma ordem da regra;
- termine com o resultado;
- não introduza exceções que ainda não foram explicadas;
- não use o exemplo para definir uma regra ausente do texto principal.

### Estrutura

```markdown
> **Exemplo:** Lia usa uma habilidade de `3 PA`. Ela gasta `3 PA` e recebe 3 pontos de fadiga.
> Mesmo que falhe no teste, os dois custos permanecem gastos.
```

Se uma regra mudar, busque todos os exemplos relacionados no mapa, no índice e na plataforma.

## 10. Dicas, avisos e destaques

Use destaques com parcimônia e propósito único:

- **Regra:** resume uma formulação que precisa ser encontrada rapidamente.
- **Exemplo:** demonstra um procedimento.
- **Dica:** ajuda a aplicar a regra na mesa sem criar obrigação.
- **Atenção:** alerta sobre uma consequência ou erro comum do leitor.
- **Para narradores:** não deve aparecer dentro do percurso do jogador; use um link para a página
  correspondente do Manual do Narrador.

“Atenção” não serve para pendência editorial. “Dica” não serve para justificar uma decisão de
design.

Evite empilhar vários blocos antes de apresentar a regra principal.

## 11. Tabelas e listas

Use tabela quando o leitor precisar comparar campos repetidos. Use lista quando a ordem ou a
comparação em colunas não for importante.

Toda tabela deve:

- ter uma frase introdutória;
- usar cabeçalhos inequívocos;
- explicar siglas;
- possuir alternativa responsiva na interface quando for larga;
- manter unidades nos cabeçalhos ou nos valores;
- ser legível sem depender de cor;
- evitar parágrafos longos dentro de células.

No mobile, tabelas largas devem virar cartões, listas ou permitir rolagem horizontal claramente
indicada. Não reduza o texto até ficar ilegível apenas para encaixar colunas.

Não use tabela para esconder que uma regra ainda não foi explicada.

## 12. Links

Crie links quando eles reduzem repetição ou ajudam o leitor a avançar.

- Ligue a primeira menção relevante de um conceito à sua explicação canônica.
- Use rótulos descritivos: **“consulte a regra de fadiga”**, não **“clique aqui”**.
- Ligue módulos e cenários nas seções em que sua relação é explicada.
- Evite repetir o mesmo link em todas as menções.
- Não exponha caminhos internos do repositório.
- Não use links para notas de design, pendências, playtests ou registros de IA na página pública.
- Verifique links e âncoras automaticamente antes da aprovação.

Uma página de cenário referencia a página pública de um módulo; não copia sua regra.

## 13. Manual do Jogador

Textos para jogadores devem responder prioritariamente:

- o que minha personagem pode fazer;
- quanto custa;
- que teste faço;
- o que acontece;
- que opções posso escolher;
- como encontro a regra ou recurso relacionado.

Use segunda pessoa quando orientar uma ação:

> No seu turno, você pode gastar `PA` para se mover, atacar ou usar uma habilidade.

Use “o personagem” quando descrever uma regra geral que também possa ser aplicada a oponentes ou
outras entidades.

Não revele soluções, ameaças ocultas, segredos de cenário ou instruções de preparação.

## 14. Manual do Narrador

Textos para narradores devem responder prioritariamente:

- o que preparar;
- que decisão tomar;
- que informação comunicar;
- como graduar consequência e dificuldade;
- como controlar o ritmo e os recursos;
- como adaptar sem contradizer o núcleo;
- que informação deve ser preservada como descoberta.

Não repita a regra do jogador. Resuma apenas o necessário e crie um link:

> Os personagens resolvem a aproximação pelas [regras de furtividade](/manual/modulos/furtividade). Para preparar a
> cena, defina o campo de visão, o nível inicial de alerta e os caminhos possíveis antes de
> posicionar os oponentes.

Separe claramente obrigação, recomendação e possibilidade:

- **deve:** regra necessária;
- **recomenda-se:** prática indicada, mas opcional;
- **pode:** opção disponível.

## 15. Páginas de recursos

Uma página de recurso possui duas camadas:

1. **Explicação curta:** como ler e usar o catálogo.
2. **Consulta estruturada:** busca, filtros, ordenação e entradas individuais.

Cada entrada mostra somente campos pertinentes. Uma habilidade pode exibir atributo, nível,
`PA`, fadiga, efeito, requisitos e origem; um traço não deve exibir campos vazios copiados do
modelo de habilidade.

Filtros devem usar termos compreensíveis ao leitor. O nome técnico do campo no banco não precisa
ser o rótulo público.

Entradas recebem links permanentes para compartilhamento e referência por outras páginas.

## 16. Páginas de módulos

### Abertura

Comece com duas ou três frases que expliquem:

- o que o módulo acrescenta;
- que tipo de situação ele suporta;
- que recursos principais oferece.

Não comece por histórico de extração, status ou lista de arquivos.

### Ordem do módulo para jogadores

1. visão geral;
2. quando usar;
3. regras necessárias;
4. procedimento;
5. opções e recursos;
6. exemplos;
7. cenários que utilizam o módulo;
8. link para orientação do narrador, quando existir.

### Ordem do módulo para narradores

1. objetivo da preparação;
2. variáveis que o narrador define;
3. montagem de cenas;
4. consequências e ritmo;
5. adaptação a cenários;
6. exemplos de preparação;
7. link para as regras do jogador.

## 17. Páginas de cenários

O texto de cenário pode ser mais evocativo, mas ainda precisa orientar escolhas e consulta.

### Cenário para jogadores

1. apresentação em um parágrafo;
2. proposta de jogo;
3. tom e temas;
4. o que personagens conhecem do mundo;
5. elementos de sistema introduzidos;
6. módulos utilizados;
7. povos e opções de personagem;
8. arquétipos;
9. equipamentos e recursos;
10. lugares, facções e mapas públicos.

### Cenário para narradores

1. conflitos centrais;
2. verdades e segredos;
3. como iniciar uma campanha;
4. ameaças e oponentes;
5. facções, objetivos e movimentos;
6. ferramentas e tabelas;
7. orientação para módulos;
8. mapas e informações reservadas.

O cenário explica somente suas diferenças. Regras completas permanecem no núcleo ou no módulo
correspondente.

## 18. Índices e páginas “Comece aqui”

Índices não são listas de pastas. Eles ajudam a escolher um percurso.

Cada item deve apresentar:

- título;
- descrição de uma ou duas frases;
- público ou objetivo;
- ação clara para continuar.

A página “Comece aqui” oferece poucos caminhos principais. Não coloque nela todos os links do
manual; o índice completo cumpre essa função.

## 19. Transformando material do repositório

### Histórico vira regra direta

Origem:

> Decidido em 01/08/2026: as habilidades deixaram de ter usos comprados.

Manual:

> Você compra cada habilidade uma vez e aumenta seu nível com experiência. Para usá-la, paga o
> custo em `PA` e recebe fadiga.

### Estado de importação é removido

Origem:

> Falta importar o bestiário e revisar os mapas.

Manual:

> Não criar seção de bestiário nem aviso de conteúdo futuro. Publicar apenas as partes existentes
> que foram aprovadas.

### Organização de pasta vira percurso

Origem:

> Veja `mecanicas-unicas/`, `listas/` e `locais/README.md`.

Manual:

> Apresentar links com função editorial: “Conheça as mutações”, “Consulte os equipamentos” e
> “Explore as regiões do Colapso”.

### Contradição não vira escolha da IA

Origem A define custo de `2 PA`; origem B define `3 PA`.

Manual:

> Não escolher, combinar ou omitir silenciosamente. Mostrar o conflito, seus impactos e pedir a
> formulação oficial antes de publicar.

## 20. Leitura online e acessibilidade

- Parágrafos devem ser curtos o suficiente para leitura em telas pequenas.
- Listas longas precisam de agrupamento ou filtros.
- Não dependa apenas de cor, posição ou ícone para transmitir significado.
- Imagens informativas precisam de texto alternativo.
- Imagens decorativas usam texto alternativo vazio.
- Links devem fazer sentido fora do parágrafo.
- Controles precisam de rótulos acessíveis.
- O foco por teclado deve acompanhar menus, busca, índices e diálogos.
- Títulos devem formar uma hierarquia navegável por leitores de tela.
- Evite animações necessárias para compreender o conteúdo.

## 21. Revisão de consistência

Antes de apresentar uma redação para aprovação, confira:

- terminologia no `INDICE.md`;
- números na regra, tabela, exemplo, catálogo e código;
- dependências e relacionados no mapa;
- títulos e âncoras;
- público correto;
- ausência de contexto editorial;
- links canônicos;
- responsividade das estruturas propostas;
- coerência com páginas já publicadas.

Se a revisão encontrar uma dúvida que altere significado, volte ao relatório de impacto e peça a
decisão. Não esconda a dúvida com uma redação vaga.
