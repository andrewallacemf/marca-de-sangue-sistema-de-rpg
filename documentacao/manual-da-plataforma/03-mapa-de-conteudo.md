# Mapa de conteúdo do manual da plataforma

O arquivo [`mapa-de-conteudo.yaml`](mapa-de-conteudo.yaml) relaciona a estrutura pública do
manual aos materiais de trabalho do repositório. Ele é a primeira referência para descobrir o
impacto de uma alteração e não substitui a leitura das fontes.

## 1. Para que o mapa serve

O mapa permite que pessoas e IAs respondam:

- qual página pública explica determinado assunto;
- quais arquivos devem ser analisados para atualizar uma página;
- que público deve receber o conteúdo;
- quais regras precisam ser conhecidas antes;
- que outras páginas podem ser afetadas por uma mudança;
- quais páginas ainda não têm fonte suficiente;
- qual versão do repositório foi usada na última publicação.

O mapa registra **proveniência**, não autoriza cópia literal. Todas as fontes continuam sujeitas
ao [contrato editorial](02-contrato-editorial.md).

## 2. Estrutura do arquivo

### Dados gerais

```yaml
versao_do_mapa: 1
publicacao:
  repositorio_origem: null
  plataforma_destino: null
```

Os commits permanecem `null` até a primeira publicação. Depois disso:

- `repositorio_origem` recebe o commit do sistema que foi analisado;
- `plataforma_destino` recebe o commit que oficializou o conteúdo na plataforma.

Esses dados são internos e nunca aparecem na interface pública.

### Página

```yaml
- id: jogador.regras-basicas
  titulo: Regras básicas
  rota: /manual/jogador/regras-basicas
  publico: jogador
  tipo: regra
  estado: mapeada
  ordem: 20
  objetivo: Explicar o núcleo do jogo na ordem de dependência.
  fontes:
    - sistema-base/conceitos/01-testes-e-contratestes.md
  depende_de: []
  relacionados:
    - jogador.criacao-de-personagem
  observacoes_internas: []
```

Campos:

| Campo | Função |
|---|---|
| `id` | Identificador permanente usado por documentação, código e relatórios. |
| `titulo` | Nome público proposto. Pode mudar sem alterar o `id`. |
| `rota` | Endereço público canônico. |
| `publico` | `geral`, `jogador` ou `narrador`. |
| `tipo` | `indice`, `regra`, `recurso`, `modulo`, `cenario` ou `ferramenta`. |
| `estado` | Situação editorial da página. |
| `ordem` | Posição relativa dentro do grupo de navegação. |
| `objetivo` | O que o leitor deve conseguir após consultar a página. |
| `fontes` | Arquivos que precisam ser analisados. Não são copiados automaticamente. |
| `depende_de` | Conteúdo que precisa ser compreendido antes. |
| `relacionados` | Páginas potencialmente afetadas ou úteis para continuidade. |
| `observacoes_internas` | Lacunas ou cuidados para curadoria. Nunca são renderizados. |

### Seção de uma página

Páginas longas podem declarar seções para mapear fontes e impactos com mais precisão:

```yaml
secoes:
  - id: jogador.regras-basicas.habilidades
    ancora: habilidades
    fontes:
      - sistema-base/conceitos/05-habilidades.md
    depende_de:
      - jogador.regras-basicas.pontos-de-acao
```

O identificador e a âncora são estáveis. Se uma seção virar página, o identificador antigo deve
ser registrado como redirecionamento ou alias.

## 3. Estados editoriais

| Estado | Significado |
|---|---|
| `planejada` | A página pertence à arquitetura, mas ainda não tem fonte suficiente. |
| `mapeada` | As fontes foram identificadas, porém a curadoria ainda não começou. |
| `em_curadoria` | A página está sendo selecionada, reorganizada ou reescrita. |
| `aguardando_aprovacao` | A proposta está pronta e foi apresentada para confirmação. |
| `publicada` | A versão aprovada está disponível na plataforma. |
| `desatualizada` | As fontes mudaram depois da publicação e exigem nova análise. |

Uma página `planejada` não aparece automaticamente na navegação. Uma página `mapeada` também
não é considerada pronta.

## 4. Como analisar impacto

Quando uma regra mudar:

1. procure o arquivo alterado em todos os campos `fontes`;
2. inclua as páginas encontradas no relatório de impacto;
3. percorra `relacionados` e `depende_de` nos dois sentidos;
4. confira catálogo, ficha e plataforma quando houver comportamento estruturado;
5. compare a mudança com `publicacao.repositorio_origem`;
6. marque páginas publicadas afetadas como `desatualizada` até a nova aprovação.

Não limite a análise ao nome do arquivo. Uma mudança em fadiga, por exemplo, pode afetar
habilidades, descanso, reações, magia, oponentes e a ficha mesmo quando esses arquivos não foram
editados no mesmo commit.

## 5. Como atualizar o mapa

Atualize o YAML quando:

- uma página ou seção for criada, dividida, unida ou removida;
- uma fonte passar a contribuir para outra página;
- uma rota ou âncora canônica for definida;
- uma dependência for descoberta;
- uma página mudar de público;
- começar ou terminar uma curadoria;
- uma publicação for oficializada;
- uma mudança no repositório deixar uma página publicada desatualizada.

Mudanças apenas de redação que não alterem estrutura, fontes, público ou estado não exigem
alteração do mapa.

## 6. Regras de segurança

- Arquivos de bastidor podem ser fontes, mas seus caminhos nunca aparecem na página pública.
- `observacoes_internas` não pode ser enviado ao componente de renderização.
- Uma fonte vazia nunca autoriza a IA a inventar conteúdo.
- O mapa não define qual versão de uma contradição é correta.
- Nenhuma página passa para `publicada` sem confirmação explícita.
- Identificadores removidos são preservados numa lista de aliases ou redirecionamentos.
- O mapa deve ser validado antes de uma publicação: YAML válido, IDs únicos, rotas únicas e
  arquivos de origem existentes.

## 7. Escopo inicial

O mapa inicial cobre:

- entrada geral do manual;
- Manual do Jogador e suas regras básicas;
- recursos do sistema-base;
- estrutura inicial do Manual do Narrador;
- nove módulos conhecidos;
- Mukashi e Colapso para jogadores e narradores;
- glossário e busca.

Gaéria, Peabiru, O Sindicato e Rodêntia não entram como páginas públicas iniciais porque seus
materiais atuais são predominantemente esqueletos. Eles devem ser adicionados ao mapa quando
possuírem conteúdo que cumpra uma função editorial.
