# Arquitetura do manual da plataforma

Este documento estabelece a estrutura editorial do manual oficial publicado na plataforma
do Marca de Sangue. Ele não descreve a organização interna do repositório; descreve a
experiência de leitura que jogadores e narradores devem encontrar.

## 1. Princípios

1. **A plataforma é o endereço público oficial.** O site antigo do repositório será
   encerrado e não deverá continuar recebendo atualizações.
2. **O repositório continua sendo a oficina das regras.** Ele preserva material de trabalho,
   contexto, pendências e histórico que não pertencem ao manual publicado.
3. **Publicar é um ato editorial.** Nenhum diretório do repositório é espelhado
   automaticamente para o manual.
4. **A estrutura segue dependências de conhecimento.** Um conceito necessário para
   compreender outro aparece antes ou é ligado de forma explícita.
5. **Jogador e narrador têm percursos separados.** Os dois manuais são públicos, mas possuem
   identidade visual, navegação e conteúdo próprios.
6. **Uma regra tem uma explicação canônica.** Outras páginas criam links para essa explicação
   e apresentam apenas o contexto ou a diferença pertinente.
7. **Links e âncoras fazem parte do conteúdo.** Títulos importantes recebem identificadores
   estáveis para consulta e compartilhamento.
8. **Conteúdo incompleto pode ser publicado quando houver texto útil.** Pendências, avisos de
   revisão e justificativas internas permanecem no repositório; páginas vazias ou compostas
   apenas por promessas não são publicadas.

## 2. Públicos

### Manual do Jogador

Reúne tudo que uma pessoa precisa para compreender o jogo, criar e desenvolver personagens,
usar a ficha e consultar suas opções durante uma sessão.

Uma informação pertence ao Manual do Jogador quando:

- explica uma regra que o jogador executa ou acompanha;
- descreve uma opção disponível ao personagem;
- apresenta contexto de cenário que personagens podem conhecer;
- ajuda a consultar custos, efeitos, requisitos ou consequências durante o jogo.

### Manual do Narrador

Reúne orientações para preparar, conduzir e arbitrar o jogo, além de informações de cenário
reservadas à preparação da narrativa.

Uma informação pertence ao Manual do Narrador quando:

- orienta decisões de arbitragem ou preparação;
- explica como construir cenas, conflitos, recompensas ou oponentes;
- contém ameaças, segredos, revelações ou bastidores de cenário;
- ensina a adaptar um módulo ou controlar suas variáveis;
- não precisa ser conhecida para um jogador utilizar corretamente sua personagem.

### Conteúdo compartilhado

Uma página não deve ser duplicada nos dois manuais. Quando narradores precisam consultar uma
regra do jogador, o Manual do Narrador cria um link para a explicação canônica. Introduções e
índices podem apresentar o mesmo destino por percursos diferentes.

## 3. Hierarquia pública

```text
/manual
├── /jogador
│   ├── /comece-aqui
│   ├── /regras-basicas
│   ├── /criacao-de-personagem
│   ├── /recursos
│   │   ├── /aptidoes
│   │   ├── /habilidades
│   │   ├── /tracos
│   │   ├── /arquetipos
│   │   ├── /acoes
│   │   ├── /equipamentos
│   │   └── /protecoes
│   ├── /modulos
│   └── /cenarios
│
├── /narrador
│   ├── /comece-aqui
│   ├── /conducao-do-jogo
│   ├── /testes-e-arbitragem
│   ├── /cenas-e-conflitos
│   ├── /oponentes
│   ├── /recompensas-e-progressao
│   ├── /modulos
│   └── /cenarios
│
├── /modulos
├── /cenarios
├── /glossario
└── /busca
```

As rotas acima indicam a arquitetura, não obrigam a criação imediata de páginas sem
conteúdo. Uma rota só entra na navegação pública quando possuir uma função editorial clara e
texto útil.

## 4. Ordem das regras do jogador

A página inicial de regras básicas deve seguir esta ordem:

1. proposta do jogo e funcionamento de uma sessão;
2. testes e contratestes;
3. atributos;
4. características;
5. aptidões;
6. traços;
7. habilidades;
8. pontos de ação;
9. fadiga;
10. criação de personagem;
11. cenas, rodadas, turnos e iniciativa;
12. ações, movimento e reações;
13. ataques, saúde, dano e proteção;
14. descanso e recuperação;
15. experiência e progressão.

A regra oficial de habilidades considera uma única aquisição com **um nível atual entre 1 e
5**. Habilidades não possuem pacotes de usos por nível: seu uso consome pontos de ação e
fadiga conforme a regra vigente.

Inicialmente, as regras podem formar uma página longa com índice e âncoras. Uma parte deve ser
separada quando tiver navegação própria, for frequentemente consultada de forma independente
ou tornar a leitura da página principal excessivamente difícil. Os primeiros candidatos são
criação de personagem, conflitos e saúde.

## 5. Recursos

Páginas de recursos são instrumentos de consulta. Devem permitir busca, filtros e links
diretos para cada entrada quando isso for útil.

Cada recurso apresenta, conforme o tipo:

- nome e classificação;
- custo;
- efeito;
- requisitos;
- progressão;
- origem: sistema-base, módulo ou cenário;
- links para a regra que explica seu funcionamento;
- links para módulos e cenários relacionados.

Dados estruturados podem alimentar tabelas e filtros, mas o texto explicativo não deve ser
montado pela simples concatenação de campos.

## 6. Módulos

A página de módulos apresenta uma descrição curta de cada opção e permite compreendê-la sem
abrir todos os seus arquivos.

O índice separa **módulos de mecânica**, que podem receber páginas editoriais próprias, de
**módulos de catálogo**, cujos dados completos permanecem nas páginas canônicas de recursos.
Módulos de armas apontam para o catálogo de equipamentos já filtrado por origem; Proteções
aponta para o catálogo canônico de proteções. Não se criam páginas que apenas repitam essas
tabelas.

Cada módulo publicado deve informar:

1. o que acrescenta ao jogo;
2. quando utilizá-lo;
3. de quais regras básicas depende;
4. regras e recursos para jogadores;
5. orientações específicas para narradores;
6. cenários que o utilizam.

Conteúdo do jogador e conteúdo do narrador são separados visualmente e pela navegação. O
módulo referencia regras básicas em vez de copiá-las.

Os módulos conhecidos no início deste trabalho são:

- Furtividade;
- Conflito social;
- Armas brancas;
- Armas exóticas;
- Arcos e bestas;
- Armas de fogo;
- Proteções;
- Magia;
- Veículos.

A presença nesta lista não significa publicação automática. Cada módulo passa por curadoria
antes de entrar no manual.

## 7. Cenários

Cada cenário possui uma apresentação para jogadores e um complemento para narradores.

### Página para jogadores

Deve conter:

1. apresentação do contexto;
2. tom, temas e tipos de história;
3. elementos de sistema introduzidos;
4. módulos utilizados;
5. arquétipos e opções de personagem;
6. povos, facções, lugares e mapas que personagens podem conhecer;
7. recursos exclusivos disponíveis aos jogadores.

### Página para narradores

Pode conter:

1. conflitos centrais e segredos;
2. ameaças e oponentes;
3. orientação para iniciar e conduzir campanhas;
4. tabelas e ferramentas de preparação;
5. uso e adaptação dos módulos;
6. mapas ou informações reservadas à narração.

Mukashi e Colapso são os cenários iniciais. Cenários compostos apenas por esqueletos ou
pendências não entram na navegação pública. A campanha Yokai-Taiji não faz parte do manual de
Mukashi; se for publicada, deve integrar futuramente uma categoria própria de aventuras ou
campanhas prontas.

## 8. Navegação

O manual deve oferecer:

- índice geral estruturado;
- navegação lateral no desktop e menu móvel equivalente;
- índice da página com links para títulos;
- breadcrumbs;
- botão persistente para voltar ao índice;
- links copiáveis em títulos relevantes;
- busca por conceitos e recursos;
- tema claro e escuro;
- indicação visual inequívoca de Manual do Jogador e Manual do Narrador.

Âncoras publicadas são identificadores permanentes. Alterar a redação de um título não deve
quebrar links existentes; quando necessário, a âncora antiga é preservada como redirecionamento.

## 9. Critérios para criar ou dividir páginas

Crie uma página quando o conteúdo:

- possuir objetivo de leitura próprio;
- for consultado independentemente com frequência;
- precisar de índice ou filtros próprios;
- atender a um público diferente;
- for grande o bastante para prejudicar a leitura da página que o contém.

Mantenha como seção quando o conteúdo:

- depender completamente do contexto da página;
- for curto;
- não possuir utilidade isolada;
- existir apenas para explicar uma exceção local.

Não crie páginas para pastas vazias, promessas de conteúdo, estado de importação, histórico
de desenvolvimento ou pendências.

## 10. Limites desta arquitetura

Este documento define **onde** o conteúdo público deve aparecer. Ele não autoriza publicação,
não substitui o contrato editorial e não determina que os textos atuais estejam prontos.

Antes de migrar qualquer conteúdo será necessário definir:

- o que é proibido na publicação;
- como reescrever material de trabalho;
- como mapear páginas para seus arquivos de origem;
- como apresentar alterações para aprovação;
- como manter repositório e manual coerentes em mudanças futuras.
