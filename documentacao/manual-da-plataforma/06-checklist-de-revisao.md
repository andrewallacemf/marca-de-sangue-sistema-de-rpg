# Checklist de revisão do manual da plataforma

Use este checklist em toda criação ou atualização do manual. Ele não substitui os documentos
anteriores; funciona como conferência operacional antes de avançar entre análise, redação,
aprovação e publicação.

Marque um item somente depois de verificá-lo. Quando um item não se aplicar, registre `N/A` e o
motivo no relatório de curadoria.

## 1. Antes de começar

- [ ] Li `AGENTS.md` e `CONVENCOES.md` no repositório do sistema.
- [ ] Li toda a documentação de `documentacao/manual-da-plataforma/`.
- [ ] Verifiquei branch e `git status` nos dois repositórios.
- [ ] Identifiquei e preservei alterações locais fora do escopo.
- [ ] Confirmei se os repositórios estão sincronizados ou informei que não estão.
- [ ] Consultei a última entrada do histórico de publicações.
- [ ] Identifiquei o commit de origem da última publicação.
- [ ] Declarei o objetivo e o recorte desta atualização.
- [ ] Confirmei se o pedido autoriza apenas análise, edição, publicação ou também Git.

## 2. Fontes e mapa de conteúdo

- [ ] Localizei a página ou seção no `mapa-de-conteudo.yaml`.
- [ ] Li todas as fontes indicadas no mapa.
- [ ] Consultei o `INDICE.md` para encontrar ocorrências adicionais.
- [ ] Verifiquei módulos e cenários que dependem da regra.
- [ ] Verifiquei páginas relacionadas e dependências nos dois sentidos.
- [ ] Identifiquei fontes internas que servem apenas como contexto.
- [ ] Não tratei arquivo, pasta ou tabela como publicável apenas porque existe.
- [ ] Atualizei o mapa se fontes, rotas, público ou dependências mudaram.
- [ ] Validei IDs, rotas, estados e existência dos arquivos mapeados.

## 3. Análise de impacto

- [ ] Comparei o commit publicado com o commit proposto.
- [ ] Li o diff e identifiquei mudanças de significado, não apenas arquivos alterados.
- [ ] Verifiquei testes, contratestes, custos, efeitos, requisitos, limites e exceções afetados.
- [ ] Verifiquei interações com `PA`, `PV`, fadiga, descanso, progressão e saúde quando relevantes.
- [ ] Verifiquei catálogo e listas estruturadas quando relevantes.
- [ ] Verifiquei ficha, banco, migrações e código da plataforma quando a regra é automatizada.
- [ ] Procurei exemplos e tabelas que usam os valores alterados.
- [ ] Marquei como `desatualizada` toda página publicada atingida.
- [ ] Declarei explicitamente se encontrei ou não efeitos colaterais.

## 4. Condições para parar e pedir decisão

Pare antes de redigir ou publicar o trecho afetado se encontrar:

- [ ] duas formulações incompatíveis sem precedência confiável;
- [ ] custo, efeito, requisito, duração ou limite essencial indefinido;
- [ ] exemplo que contradiz a regra;
- [ ] catálogo, ficha e texto com valores diferentes;
- [ ] dúvida entre sistema-base, módulo e cenário;
- [ ] dúvida entre conteúdo de jogador, narrador e bastidor;
- [ ] segredo ou lore contraditório;
- [ ] necessidade de inventar regra, contexto ou conteúdo para completar a página;
- [ ] dúvida de licença ou autorização de imagem ou texto;
- [ ] alteração local de outra pessoa que conflita com o trabalho.

Se qualquer item acima ocorrer:

- [ ] registrei o conflito e suas fontes;
- [ ] expliquei o impacto para o leitor e para a plataforma;
- [ ] apresentei opções sem escolher silenciosamente;
- [ ] solicitei confirmação das pessoas responsáveis;
- [ ] mantive o estado real da página no mapa.

## 5. Classificação editorial

Para cada trecho analisado:

- [ ] classifiquei como publicar, reescrever, encaminhar a outro público ou manter no bastidor;
- [ ] defini se pertence ao Manual do Jogador ou ao Manual do Narrador;
- [ ] preservei uma única explicação canônica para regras compartilhadas;
- [ ] removi a dependência da estrutura de pastas do repositório;
- [ ] identifiquei partes que perdem sentido quando notas internas são retiradas;
- [ ] não converti pendência em regra vaga ou “a critério do narrador” sem aprovação;
- [ ] não criei página vazia para representar conteúdo futuro;
- [ ] não confundi conteúdo incompleto com conteúdo inutilizável;

## 6. Informações proibidas

Confirme que a página pública não contém:

- [ ] frontmatter editorial;
- [ ] status, datas, autoria ou nomes de responsáveis;
- [ ] histórico de decisões ou versões substituídas;
- [ ] “A DEFINIR”, pendências ou pedidos de revisão;
- [ ] notas de curadoria ou “proposta da IA”;
- [ ] resultados e roteiros de playtest;
- [ ] estado de importação, migração ou origem no Notion;
- [ ] caminhos internos ou instruções de repositório;
- [ ] links para notas de design, pendências ou registros de IA;
- [ ] material particular apresentado como conteúdo oficial;
- [ ] segredos de cenário no Manual do Jogador;
- [ ] metadados internos enviados ao componente de renderização.

## 7. Redação da página

- [ ] A página tem um único objetivo e público definido.
- [ ] O primeiro parágrafo explica o que o leitor encontrará.
- [ ] A regra geral aparece antes de exceções.
- [ ] A ordem segue dependências de conhecimento.
- [ ] Gatilho, agente, custo, teste, efeito, duração e limites estão claros quando aplicáveis.
- [ ] A linguagem é direta e compreensível sem conhecer o repositório.
- [ ] A terminologia coincide com o `INDICE.md` e o glossário.
- [ ] `PA`, `PV`, `exp.`, dados e medidas seguem a notação oficial.
- [ ] Não usei sinônimos que criem um segundo nome para a mesma regra.
- [ ] Não inventei informação para criar transição ou completar tabela.
- [ ] Parágrafos e listas são adequados à leitura em tela pequena.

## 8. Exemplos, dicas e tabelas

- [ ] Cada exemplo demonstra uma dificuldade por vez.
- [ ] Os valores do exemplo coincidem com regra, catálogo e código.
- [ ] O exemplo segue a mesma ordem do procedimento explicado.
- [ ] Nenhuma regra existe apenas dentro do exemplo.
- [ ] Dicas são recomendações de mesa, não justificativas de design.
- [ ] Avisos públicos tratam consequências ou erros do leitor, não pendências editoriais.
- [ ] Toda tabela possui introdução e cabeçalhos claros.
- [ ] Siglas e unidades estão explicadas.
- [ ] Tabelas largas possuem solução responsiva.
- [ ] Campos vazios não foram preenchidos por suposição.

## 9. Links, títulos e navegação

- [ ] Existe apenas um `H1`.
- [ ] A hierarquia de `H2` e `H3` não pula níveis.
- [ ] Títulos descrevem assuntos, não etapas editoriais.
- [ ] Âncoras são estáveis e registradas quando necessário.
- [ ] Âncoras antigas possuem alias ou redirecionamento após mudança.
- [ ] A primeira menção relevante liga para a explicação canônica.
- [ ] Rótulos de links são descritivos e não usam “clique aqui”.
- [ ] Cenários referenciam módulos e módulos referenciam o sistema-base sem duplicar regras.
- [ ] Links internos e âncoras foram validados automaticamente.
- [ ] A página aparece no índice e na navegação corretos.
- [ ] O índice de busca foi atualizado quando aplicável.

## 10. Jogador e Narrador

### Manual do Jogador

- [ ] Explica o que a personagem pode fazer, custos, testes e consequências.
- [ ] Permite encontrar opções e recursos relacionados.
- [ ] Não contém preparação, solução, ameaça oculta ou segredo.

### Manual do Narrador

- [ ] Explica o que preparar, decidir, comunicar e acompanhar.
- [ ] Diferencia obrigação, recomendação e possibilidade.
- [ ] Liga para a regra do jogador em vez de copiá-la.
- [ ] Separa informações públicas de revelações e segredos.

## 11. Recursos, módulos e cenários

### Recursos

- [ ] A página explica como ler o catálogo.
- [ ] Filtros usam rótulos compreensíveis ao leitor.
- [ ] Cada tipo mostra apenas campos pertinentes.
- [ ] Entradas possuem links permanentes.

### Módulos

- [ ] A abertura explica em duas ou três frases o que o módulo acrescenta.
- [ ] Dependências estão explícitas.
- [ ] Regras de jogador e orientação de narrador estão separadas.
- [ ] Cenários que utilizam o módulo estão ligados.
- [ ] Histórico de extração e estado de teste não aparecem.

### Cenários

- [ ] A página do jogador apresenta contexto, temas, opções, módulos e conhecimento público.
- [ ] A página do narrador apresenta conflitos, segredos, ameaças e ferramentas de condução.
- [ ] O cenário explica somente suas diferenças.
- [ ] Material de campanha particular não foi misturado ao cenário oficial.
- [ ] Mapas e imagens estão autorizados e destinados ao público correto.

## 12. Implementação e dados

- [ ] O conteúdo usa somente metadados públicos permitidos.
- [ ] Proveniência e observações internas permanecem fora da renderização.
- [ ] O catálogo foi regenerado quando listas foram alteradas.
- [ ] O diff do catálogo foi revisado.
- [ ] Ficha e componentes usam a mesma formulação publicada.
- [ ] Dados antigos possuem estratégia de compatibilidade ou migração quando necessário.
- [ ] Rotas do manual são públicas sem depender de sessão.
- [ ] A navegação no ambiente logado aponta para as mesmas páginas.
- [ ] Links para o site antigo foram removidos quando a substituição correspondente existe.

## 13. Validação técnica, visual e de acessibilidade

- [ ] Lint executado.
- [ ] Testes relevantes executados.
- [ ] Build de produção executado.
- [ ] Tema claro verificado.
- [ ] Tema escuro verificado.
- [ ] Mobile verificado.
- [ ] Tablet verificado.
- [ ] Desktop verificado.
- [ ] Navegação por teclado verificada.
- [ ] Foco visível verificado.
- [ ] Contraste verificado.
- [ ] Hierarquia para leitores de tela verificada.
- [ ] Imagens informativas possuem texto alternativo.
- [ ] Imagens decorativas possuem texto alternativo vazio.
- [ ] Índice, busca e retorno ao índice funcionam durante a rolagem.

Registre comandos executados, resultados e qualquer validação que não pôde ser realizada.

## 14. Relatório e aprovação

- [ ] O relatório informa commits inicial e final analisados.
- [ ] Lista arquivos e páginas afetados.
- [ ] Explica o que foi publicado, reescrito, movido ou mantido no bastidor.
- [ ] Registra contradições e decisões tomadas.
- [ ] Informa impactos em catálogo, ficha, banco e navegação.
- [ ] Apresenta prévia ou resumo da redação.
- [ ] Apresenta resultado das validações.
- [ ] A página foi colocada em `aguardando_aprovacao`.
- [ ] Recebi confirmação explícita para oficializar o conteúdo.
- [ ] Recebi autorização específica antes de `commit` ou `push`, quando necessária.

## 15. Publicação e auditoria

- [ ] O commit de origem do sistema existe e está registrado.
- [ ] O commit da plataforma existe e está registrado.
- [ ] O deploy terminou com sucesso.
- [ ] A página está acessível fora do ambiente logado.
- [ ] A página está acessível e ligada dentro do ambiente logado.
- [ ] Os IDs publicados foram registrados no histórico.
- [ ] Páginas adiadas não foram marcadas como publicadas.
- [ ] Compatibilidades preservadas foram registradas.
- [ ] O estado das páginas foi atualizado para `publicada`.
- [ ] O mapa recebeu a referência da última publicação.
- [ ] O registro de sessão com IA foi criado ou atualizado antes do commit.
- [ ] Alterações locais fora do escopo continuam preservadas.

## 16. Depois da publicação

- [ ] Conferi a versão publicada, não apenas o ambiente local.
- [ ] Testei links e âncoras no endereço final.
- [ ] Registrei correções necessárias como nova atualização, sem reescrever histórico.
- [ ] Indiquei à equipe o que foi oficializado e o que foi adiado.
- [ ] Informei qual é a próxima parte recomendada do manual.

Uma tarefa só é considerada concluída quando o estado informado corresponde ao que realmente
está publicado. Conteúdo editado localmente, commit criado e deploy confirmado são etapas
diferentes e devem ser comunicadas como tal.
