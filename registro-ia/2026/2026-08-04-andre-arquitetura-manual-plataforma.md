---
data: 2026-08-04
pessoa: andre
ferramenta: codex
objetivo: definir a arquitetura editorial do novo manual oficial na plataforma
arquivos-alterados:
  - documentacao/manual-da-plataforma/README.md
  - documentacao/manual-da-plataforma/01-arquitetura-do-manual.md
  - documentacao/manual-da-plataforma/02-contrato-editorial.md
  - documentacao/manual-da-plataforma/03-mapa-de-conteudo.md
  - documentacao/manual-da-plataforma/mapa-de-conteudo.yaml
  - documentacao/manual-da-plataforma/04-fluxo-de-publicacao.md
  - documentacao/manual-da-plataforma/historico-de-publicacoes.yaml
  - documentacao/manual-da-plataforma/05-guia-de-escrita.md
  - documentacao/manual-da-plataforma/06-checklist-de-revisao.md
  - documentacao/manual-da-plataforma/propostas/2026-08-04-regras-basicas-fundamentos.md
  - documentacao/manual-da-plataforma/propostas/2026-08-04-pontos-de-acao-fadiga-habilidades.md
  - documentacao/manual-da-plataforma/propostas/2026-08-04-saude-e-protecao.md
  - notas-de-design/decisoes/2026-08-04-saude-simplificada-e-protecoes.md
  - sistema-base/conflitos/03-saude-e-protecao.md
  - sistema-base/conceitos/09-descanso.md
  - sistema-base/listas/acoes-em-combate.md
  - sistema-base/listas/habilidades-base-mentais.md
  - sistema-base/listas/habilidades-base-sociais.md
  - sistema-base/listas/protecoes-base.md
  - sistema-base/oponentes/00-oponentes.md
  - sistema-base/oponentes/01-criando-uma-ameaca.md
  - sistema-base/oponentes/02-nivel-de-ameaca.md
  - sistema-base/progressao/01-experiencia-e-evolucao.md
  - cenarios/colapso/mecanicas-unicas/mutacoes.md
  - cenarios/colapso/mecanicas-unicas/radiacao.md
  - cenarios/colapso/mecanicas-unicas/tracos-do-cenario.md
  - cenarios/mukashi/arquetipos-do.md
  - cenarios/mukashi/mecanicas-unicas/habilidades-do.md
  - cenarios/mukashi/mecanicas-unicas/magia.md
  - modulos/magia/README.md
  - modulos/magia/listas/lista-de-magias.md
  - INDICE.md
  - PENDENCIAS.md
  - AGENTS.md
  - CONVENCOES.md
---

# Sessão: arquitetura do manual da plataforma

## Prompts dados

> Estruturar uma proposta para reconstruir o manual do sistema, com módulos e cenários,
> dentro da plataforma. O manual deve ser público, organizado por dependência de conhecimento,
> sem anotações, pendências, autoria ou datas editoriais, com índices, âncoras e links.

> Não confiar no gerador e na limpeza do site antigo: informações internas passaram e partes
> precisam ser reescritas para funcionar como manual. Separar visualmente Manual do Jogador e
> Manual do Narrador. O repositório continuará como lugar de trabalho; a plataforma será a
> publicação oficial depois de curadoria e confirmação.

> Vamos começar então. Sempre que a gente terminar uma parte, me indique qual é a parte que
> você faria em seguida.

> Pode seguir.

> Aprovo a simplificação para dano curável e permanente, a retirada da deterioração sem
> tratamento, o maior redutor de proteção por região, os 10 PV por membro para personagens
> de jogador, o bloqueio apenas das ações que dependem do membro e a ordem da defesa Física.

> Manter Auto tratamento e Tratamento especializado como curas diretas mais fortes e caras;
> unificar a cura comum em 4 PA e fazer a Técnica em Tratar/Curar remover a desvantagem por
> falta de material sem reduzir o custo. Pode seguir.

> Confirmo a proibição de duplicatas. Pode seguir.

> Pode seguir — iniciar a curadoria de Habilidades, Pontos de Ação e Fadiga.

> aprovado, pode seguir.

> pode seguir — iniciar a curadoria de Características, Aptidões e Traços.

> pode seguir — iniciar o primeiro piloto de curadoria das Regras básicas.

> pode seguir.

> pode seguir.

> pode seguir.

> Pode seguir.

## O que foi feito

Foi criada a documentação inicial do manual da plataforma, com os princípios, públicos,
hierarquia de páginas, ordem das regras, estrutura de módulos e cenários, navegação e critérios
para dividir conteúdo. O `AGENTS.md` passou a exigir que IAs leiam essa documentação e não
publiquem o repositório por espelhamento automático. O `CONVENCOES.md` foi corrigido para não
tratar a limpeza do site antigo como garantia de publicação segura. Também foi criado o contrato
editorial que classifica cada trecho como publicável, reescrito, encaminhado a outro público ou
mantido no bastidor, além de definir os bloqueios que exigem confirmação. O mapa inicial de
conteúdo relaciona páginas e seções públicas a arquivos de origem, dependências, relações,
estados editoriais e observações internas. O fluxo de publicação formaliza atualizações do
repositório para o manual, do manual para o repositório e alterações simultâneas, com análise por
commits, relatório de impacto, aprovação, validação e histórico estruturado. O guia de escrita
define voz, ordem das explicações, terminologia, exemplos, tabelas, links, acessibilidade e
modelos específicos para regras, recursos, módulos, cenários e os dois públicos.
O checklist final consolida preparação, impacto, curadoria, redação, dados, implementação,
acessibilidade, aprovação, publicação e auditoria em uma sequência operacional.
O primeiro piloto aplicou esse processo a “Como funciona o jogo”, “Testes e contratestes” e
“Atributos”. Foi criado um relatório com a análise das fontes, os encaminhamentos editoriais e a
prévia completa da redação pública, ainda sem publicação na plataforma.
O texto proposto e a estrutura foram validados quanto a marcadores internos, links, YAML,
dependências, fontes e whitespace.

Depois da aprovação, o primeiro lote foi implementado localmente no repositório da plataforma.
Foram criados o índice público do manual, a separação visual entre Manual do Jogador e Manual do
Narrador, a página de Regras básicas, a navegação por âncoras e o botão flutuante de retorno ao
índice em telas menores. Os acessos existentes ao manual antigo passaram a apontar para a rota
interna `/manual`, e o conteúdo editorial ficou isolado dos componentes de apresentação para
facilitar as próximas atualizações curadas.

A implementação foi validada com testes automatizados, TypeScript, lint, build de produção e
inspeção visual em desktop e celular, nos temas claro e escuro. Também foram conferidos o acesso
sem autenticação, as âncoras, a ausência de rolagem horizontal e o console do navegador.

Em seguida, foi iniciada a curadoria de Características, Aptidões e Traços. A nova proposta
reconstrói a explicação sem os usos e a fusão de habilidades já substituídos, completa a regra de
rerrolagem por aptidão e organiza os traços por funcionamento, requisitos e categorias. A análise
também registrou uma divergência entre o passo a passo, que proíbe comprar o mesmo traço duas
vezes, e a plataforma, que atualmente aceita duplicatas.

Depois da confirmação, Características, Aptidões e Traços foram incorporados à página pública
de Regras básicas, com âncoras próprias e ligações a partir das explicações anteriores. A regra
conceitual de Traços passou a registrar a unicidade também no repositório do sistema. Na
plataforma, novas duplicatas são recusadas pela interface e pelo servidor, inclusive em
gravações simultâneas; duplicatas legadas ou importadas continuam preservadas e editáveis
enquanto seu nome não mudar. O lote foi validado com 1.900 testes, TypeScript, lint, build e
inspeção responsiva em desktop e celular.

Na sequência, Pontos de Ação, Fadiga e Habilidades foram analisados como um único bloco por suas
dependências. A curadoria confirmou que a antiga variante de habilidades por fadiga já havia sido
promovida ao núcleo: habilidades possuem nível, não usos, e custam `PA` mais fadiga. Também foi
identificada uma divergência estrutural na plataforma: a ficha ainda chama o modelo antigo de
“vigente”, limita fadiga a 50 e aplica penalidades em intervalos de 5, enquanto a regra oficial
usa fadiga máxima igual aos pontos de vida e penalidade a cada 10. Foi preparada uma proposta de
redação pública e uma lista de correções obrigatórias antes da publicação.

Após a aprovação, esse lote foi implementado localmente. A plataforma passou a tratar o modelo
de nível e fadiga como regra única, sem seletor público de versões nem controles de usos de
habilidade. A fadiga máxima passou a acompanhar a vida máxima individual; dano gera fadiga na
mesma proporção; a penalidade ocorre a cada 10 pontos; e a inconsciência ocorre ao atingir o
limite individual. Ficha, batalha, importação, persistência e migração de banco foram atualizadas
em conjunto. Os campos de usos antigos permanecem apenas como compatibilidade de leitura e não
voltam a aparecer como opção de regra.

As seções públicas Pontos de Ação, Fadiga e Habilidades foram acrescentadas às Regras básicas,
com âncoras no índice. Também foram corrigidos trechos contraditórios do repositório do sistema
que ainda instruíam o jogador a riscar usos ou fundir habilidades.

Na etapa seguinte, Saúde e proteção foram reconstruídas a partir de decisões explícitas. O
sistema passou a reconhecer somente dano curável e permanente, sem deterioração automática
por falta de tratamento. Foram consolidados os estados e consequências dos membros, o custo da
cura improvisada, a ordem da defesa Física e o uso do maior redutor de dano quando proteções se
sobrepõem. As referências vivas em habilidades, ameaças, progressão, magia e cenários foram
reconciliadas; a recalibração de custos do módulo de magia ficou registrada como pendência.

Na plataforma, foram criadas as páginas públicas “Saúde e recuperação” e “Proteções”, com
índice por âncoras e links entre os assuntos. A ficha e a batalha passaram a usar o maior
redutor regional; rótulos acessíveis deixaram de chamar os estados visuais do dano curável de
“superficial” ou “profundo”.

## Decisões tomadas

- A plataforma será o endereço público oficial do manual.
- O repositório continuará como oficina de desenvolvimento das regras.
- O conteúdo será curado e, quando necessário, reescrito antes da publicação.
- Manual do Jogador e Manual do Narrador serão públicos, porém separados visualmente e na
  navegação.
- Habilidades possuem um único nível atual entre 1 e 5 e usam pontos de ação e fadiga, sem
  pacotes de usos por nível.
- Mukashi e Colapso serão os cenários iniciais; páginas vazias não serão publicadas.
- A campanha Yokai-Taiji não será incorporada ao manual de Mukashi.
- O quinto atributo específico de cenário ficará fora do Manual do Jogador e reservado a uma
  futura orientação do Manual do Narrador.
- Materiais e preparação da sessão ficarão na futura página “Comece aqui”.
- A redação do primeiro lote de Regras básicas foi aprovada para implementação.
- Links para páginas ainda não publicadas não aparecem na versão funcional; serão adicionados
  quando os destinos existirem.
- Uma personagem não pode adquirir o mesmo traço mais de uma vez.
- Novas duplicatas são bloqueadas; duplicatas legadas e importadas não serão apagadas sem uma
  política de saneamento explicitamente aprovada.
- Pontos de Ação, Fadiga e Habilidades devem ser apresentados nessa ordem, porque o funcionamento
  das habilidades depende dos dois recursos.
- O modelo antigo de habilidades com usos não será oferecido como alternativa pública; arquivos
  legados devem ser migrados ou importados com compatibilidade explícita.
- Existem apenas dano curável e dano permanente; “superficial” e “profundo” deixam de ser
  categorias de regra.
- Personagens de jogador possuem 10 PV em cada membro; ameaças podem declarar exceções.
- Um membro desabilitado bloqueia somente ações que dependem dele.
- A defesa Física bem-sucedida divide o dano rolado antes de aplicar o maior redutor regional.
- Redutores de dano sobrepostos não se acumulam; redutores de PA continuam cumulativos.
- Cura improvisada custa 4 PA; a Técnica em Tratar/Curar remove a desvantagem por falta de
  material, mas não reduz o custo.

## Pendências criadas

- Recalibrar custos de magias que usavam dano profundo como faixa intermediária antes de
  publicar o módulo de magia.
- Reconciliar a ação de descanso da ficha com as regras de descanso curto e longo no próximo
  lote.
- A implementação local aguarda confirmação funcional antes de ser oficializada e registrada
  no histórico de publicações.

## Observações

A alteração local preexistente em `cenarios/mukashi/locais/README.md` foi preservada e não foi
incluída neste trabalho.

No repositório da plataforma, a implementação está concentrada em `src/app/manual/`,
`src/components/manual/` e `src/content/manual/`, com ajustes de navegação, middleware, estilos,
testes e registro da decisão técnica em `docs/DECISIONS.md`. As alterações locais preexistentes
nesse repositório também foram preservadas.

O lote de Saúde e proteção foi validado com exportação do catálogo, schema YAML, Prisma,
TypeScript, lint, build de produção, 123 testes direcionados e a execução das 150 suítes da
plataforma, com 1.888 testes aprovados. A suíte completa ainda encerra fora do limiar global de
100% de cobertura por lacunas preexistentes nos formulários de criação/exclusão de personagem
e no diálogo genérico; os arquivos deste lote ficaram cobertos. A inspeção visual confirmou as
duas páginas em 375 px e 2560 px, nos temas claro e escuro, sem rolagem horizontal ou erros no
console e com as âncoras funcionando.
