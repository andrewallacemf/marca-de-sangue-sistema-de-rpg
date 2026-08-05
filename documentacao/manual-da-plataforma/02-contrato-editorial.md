# Contrato editorial do manual da plataforma

Este documento define a fronteira entre o material de trabalho do repositório e o manual
oficial publicado na plataforma. Ele deve ser aplicado a todo texto, tabela, imagem ou dado
antes da publicação.

O contrato não é um filtro automático. Sua função é orientar uma decisão editorial: o que
publicar, o que reescrever, a qual público destinar e o que manter somente no bastidor.

## 1. Os quatro destinos possíveis

Todo trecho analisado deve receber um destes destinos:

### Publicar

Use quando o conteúdo:

- apresenta uma regra vigente de forma clara;
- oferece informação útil a jogadores ou narradores;
- pode ser entendido sem conhecer o repositório;
- usa a terminologia atual do sistema;
- não depende de uma nota interna para fazer sentido.

Publicar não significa copiar literalmente. Ajustes de título, ordem, transições, links e
exemplos podem ser necessários para integrar o trecho à página pública.

### Reescrever

Use quando existe conteúdo aproveitável, mas sua forma atual:

- foi escrita para colaboradores, e não para leitores do manual;
- mistura regra, histórico, justificativa e pendência;
- pressupõe a estrutura de pastas do repositório;
- perde o sentido quando as notas internas são removidas;
- repete informações que devem ter uma explicação canônica;
- apresenta tabelas ou listas sem contexto suficiente;
- usa termos antigos ou versões concorrentes da mesma regra.

A reescrita deve preservar o significado aprovado. Ela não pode completar lacunas com regras ou
lore inventados.

### Encaminhar a outro público

Use quando o conteúdo é publicável, mas está no percurso errado:

- informação de uso da personagem vai para o Manual do Jogador;
- arbitragem, preparação, ameaças e segredos vão para o Manual do Narrador;
- regra compartilhada permanece em uma única página canônica e é ligada pelo outro manual;
- aventura ou campanha pronta não é incorporada à apresentação geral de um cenário.

### Manter no bastidor

Use quando o trecho existe para registrar o processo de criação, e não para ensinar ou consultar
o jogo. Ele continua no repositório, mas não é levado ao manual.

## 2. Conteúdo permitido

O manual pode apresentar:

- regras vigentes;
- definições e terminologia do sistema;
- procedimentos de jogo;
- custos, efeitos, requisitos e consequências;
- exemplos curtos que demonstrem a regra vigente;
- tabelas e listas de consulta;
- dicas de uso na mesa realmente destinadas ao leitor;
- contexto, lore, personagens, povos, facções e lugares de cenário;
- orientação de preparação e condução no Manual do Narrador;
- módulos, dependências e recursos associados;
- imagens, mapas e diagramas autorizados para publicação;
- links para outras páginas e âncoras do próprio manual.

O conteúdo pode ter sido classificado como `rascunho` ou `revisao` no repositório. Esse status
não aparece na plataforma e não impede, sozinho, a publicação. Ao ser aprovado para o manual, o
texto apresentado passa a ser a formulação oficial publicada daquele conteúdo.

## 3. Conteúdo proibido

Não pode aparecer em página pública:

### Metadados e histórico editorial

- frontmatter do repositório;
- status como `rascunho`, `revisao`, `estavel`, “experimental” ou “em teste”;
- data de criação, importação, decisão, revisão ou última alteração;
- autoria, nome de quem decidiu ou de quem precisa revisar;
- histórico de versões e regras substituídas;
- hash de commit, branch, pull request ou caminho de trabalho.

### Processo de criação

- “A DEFINIR”, “pendente”, “a revisar” ou equivalentes;
- “proposta da IA”, “nota de curadoria” ou justificativas de redação;
- atas de reunião e referências a conversas do grupo;
- roteiros, resultados ou observações de playtest;
- “estado da importação”, origem no Notion ou estágio de migração;
- instruções para preencher templates;
- planos, roadmaps e listas de trabalho;
- explicações sobre por que uma mecânica foi promovida, descartada ou movida de pasta.

### Estrutura interna

- caminhos de arquivo usados como texto visível;
- links para `PENDENCIAS.md`, `registro-ia/`, `notas-de-design/`, `playtest/` ou materiais
  equivalentes de bastidor;
- instruções para editar o repositório ou regenerar catálogos;
- comentários destinados a futuros colaboradores;
- texto que descreva o manual como repositório, pasta, importação ou documentação técnica.

### Conteúdo inadequado ao público

- segredos de cenário no Manual do Jogador;
- material de campanha particular apresentado como lore oficial;
- exemplos baseados em valores antigos;
- duas versões concorrentes apresentadas como regra vigente;
- páginas vazias, templates ou seções compostas apenas por promessas futuras;
- conteúdo sem autorização de uso, quando houver dúvida sobre direitos de imagem ou texto.

Os termos acima podem aparecer quando fizerem parte do universo do jogo e não do processo
editorial. Por exemplo, uma regra pode usar a palavra “teste”; o proibido é publicar um
“resultado de playtest” como nota de bastidor.

## 4. O que não pode ser resolvido apenas removendo trechos

Um arquivo deve ser reescrito quando a remoção do bastidor produzir qualquer uma destas
situações:

- a regra fica sem introdução ou sem explicar seu objetivo;
- uma exceção passa a parecer regra geral;
- uma decisão permanece sem o contexto necessário para aplicá-la;
- parágrafos começam respondendo a discussões que o leitor nunca viu;
- títulos refletem nomes de pastas ou etapas de migração, não assuntos do manual;
- uma tabela aparece sem explicar como suas colunas são usadas;
- o texto alterna entre versões antigas e atuais;
- referências como “acima”, “abaixo”, “esta proposta” ou “como decidido” ficam sem referente;
- o trecho é tecnicamente correto, mas está numa ordem que exige conhecimento ainda não
  apresentado;
- a página reúne assuntos distintos apenas porque estavam no mesmo arquivo de origem.

Nesses casos, a IA deve reconstruir a explicação usando as fontes mapeadas, sem se limitar a
limpar o texto existente.

## 5. Lacunas, pendências e contradições

### Incompletude que não bloqueia

A ausência de material futuro não impede publicar o que já é útil. Exemplos:

- um cenário pode ser publicado sem bestiário completo;
- um módulo pode apresentar sua mecânica mesmo sem todas as opções planejadas;
- uma página pode omitir uma seção que ainda não tem conteúdo.

O manual não anuncia a ausência nem cria uma página vazia para representá-la.

### Problema que exige confirmação

A IA deve parar e pedir uma decisão quando encontrar:

- duas regras incompatíveis sem indicação confiável de qual prevalece;
- número, custo, efeito ou requisito essencial ainda indefinido;
- trecho cuja remoção muda o funcionamento da regra;
- lore contraditório que altera a compreensão do cenário;
- classificação incerta entre regra base, módulo e cenário;
- dúvida sobre o que um jogador pode saber;
- conteúdo que exigiria inventar informação para ficar completo.

A proposta apresentada deve mostrar o conflito, suas fontes e opções de resolução. Nenhuma
dessas situações pode ser escondida pela simples retirada do aviso de pendência.

### Pendência interna com regra utilizável

Quando existe uma formulação operacional única, mas o repositório registra que ela ainda será
avaliada, a IA pode propor sua publicação sem o aviso interno. A aprovação das pessoas
responsáveis transforma aquela formulação na versão oficial do manual, sem apagar a pendência
do ambiente de trabalho caso ela ainda seja útil ao desenvolvimento.

## 6. Classificação por público

Use esta ordem de decisão:

1. A pessoa precisa da informação para criar, controlar ou compreender sua personagem?
   **Manual do Jogador.**
2. A informação ensina a preparar, arbitrar ou conduzir o jogo?
   **Manual do Narrador.**
3. A informação revela uma ameaça, surpresa, solução ou segredo de cenário?
   **Manual do Narrador.**
4. Os dois públicos precisam da mesma regra?
   **Uma página canônica**, normalmente no Manual do Jogador, ligada pelo Manual do Narrador.
5. A informação fala apenas sobre o processo de criação do sistema?
   **Bastidor.**

O fato de os dois manuais serem públicos não autoriza misturar seus percursos. A separação ajuda
o leitor a reconhecer o propósito do texto e permite futuras decisões sobre acesso sem exigir
uma reorganização completa.

## 7. Regra, exemplo e dica

### Regra

Deve dizer de forma inequívoca:

- quando se aplica;
- quem a executa;
- qual é o custo;
- qual é o efeito;
- quais são os limites;
- quais exceções realmente existem.

### Exemplo

Deve demonstrar apenas valores e procedimentos vigentes. Um exemplo é refeito quando a regra
muda, mesmo que sua narrativa continue adequada.

### Dica

É uma recomendação prática, não uma decisão de design. Deve ser escrita para jogador ou
narrador e continuar útil fora do contexto do repositório. O marcador `💡` na origem não garante
que a dica será publicada.

## 8. Tabelas, listas e dados estruturados

Tabelas e dados do `contrato/catalogo.json` podem alimentar componentes de consulta, desde que:

- a fonte corresponda à regra escolhida para publicação;
- campos vazios não sejam completados por suposição;
- cabeçalhos sejam compreensíveis ao leitor;
- siglas possuam explicação ou link para o glossário;
- filtros e agrupamentos reflitam a arquitetura pública;
- notas editoriais não sejam incorporadas a descrições ou observações;
- o texto explicativo seja curado separadamente.

Uma divergência entre catálogo, regra escrita e comportamento da plataforma bloqueia a
publicação do trecho afetado até que seja apresentada para decisão.

## 9. Links, referências e âncoras

Links públicos devem apontar para:

- outra página do manual;
- uma âncora estável;
- um recurso público autorizado;
- uma página da própria plataforma relacionada ao jogo.

Referências internas usadas para comprovar ou interpretar a origem permanecem no mapa de
conteúdo e no relatório de atualização, não na página pública.

Ao reescrever uma página:

- ligue a primeira menção relevante de um conceito à sua explicação canônica;
- evite repetir o mesmo link em todos os parágrafos;
- preserve âncoras já publicadas ou forneça redirecionamento;
- não use nomes de arquivos como rótulos visíveis.

## 10. Metadados públicos e internos

Metadados públicos permitidos:

- título;
- descrição curta;
- rota e slug;
- posição na navegação;
- público: jogador ou narrador;
- tipo: regra, recurso, módulo ou cenário;
- relações públicas com páginas, módulos e cenários;
- dados técnicos de acessibilidade, compartilhamento e busca.

Metadados internos de proveniência devem ficar no mapa de conteúdo, fora do texto renderizado:

- arquivos de origem;
- commit do repositório analisado;
- commit da plataforma que publicou a alteração;
- situação da sincronização;
- observações de revisão;
- decisões ainda necessárias.

O componente que renderiza o manual trabalha com uma lista explícita de campos públicos. Um
campo novo não se torna visível por padrão.

## 11. Relatório obrigatório de curadoria

Antes de oficializar uma página nova ou uma atualização relevante, a IA deve apresentar:

1. páginas afetadas;
2. arquivos de origem consultados;
3. conteúdo aproveitado sem mudança de sentido;
4. trechos reorganizados ou reescritos;
5. conteúdo encaminhado ao Manual do Narrador;
6. conteúdo mantido apenas no bastidor;
7. contradições ou dúvidas encontradas;
8. efeitos esperados na ficha, catálogo ou demais páginas;
9. prévia ou resumo da redação proposta.

A publicação só é considerada aprovada após confirmação explícita das pessoas responsáveis.

## 12. Definição editorial de pronto

Uma página está editorialmente pronta quando:

- possui um objetivo claro e um público definido;
- pode ser lida sem conhecimento do repositório;
- apresenta apenas a formulação escolhida da regra;
- está na ordem correta de dependência;
- não contém informações proibidas;
- não oculta uma contradição necessária para aplicar a regra;
- usa exemplos e valores vigentes;
- liga conceitos relacionados sem duplicá-los;
- possui títulos e âncoras adequados à consulta;
- teve seus impactos avaliados;
- foi apresentada e confirmada.

Estar editorialmente pronta não significa que o sistema inteiro esteja completo. Significa que
aquela página representa com clareza o conteúdo que o grupo decidiu oficializar naquele
momento.
