# Fluxo de publicação do manual da plataforma

Este documento define como uma alteração sai da oficina de regras, é transformada em texto de
manual, recebe aprovação e passa a ser considerada oficial na plataforma.

O processo envolve dois repositórios:

- **repositório do sistema:** desenvolvimento das regras e documentação de origem;
- **repositório da plataforma:** páginas públicas e comportamento da aplicação.

Nenhum dos fluxos abaixo autoriza publicação automática. A análise, a proposta editorial e a
confirmação continuam obrigatórias.

## 1. Princípios operacionais

1. **Começar de uma base conhecida.** Antes de comparar ou editar, verificar branch, alterações
   locais e sincronização dos dois repositórios.
2. **Preservar trabalho existente.** Alterações locais de outras pessoas ficam fora do escopo e
   nunca são descartadas para facilitar uma atualização.
3. **Comparar desde a última publicação.** Usar o commit registrado, não apenas os arquivos
   modificados no momento.
4. **Analisar impacto antes de escrever.** Consultar o mapa, dependências, relações, catálogo,
   ficha e código que executa a regra.
5. **Curar em vez de espelhar.** A origem fornece fatos e decisões; a página pública recebe uma
   composição adequada ao leitor.
6. **Confirmar antes de oficializar.** A IA apresenta o que propõe e aguarda aprovação.
7. **Registrar os dois lados.** Cada publicação guarda o commit de origem e o commit publicado na
   plataforma.
8. **Não reescrever histórico Git.** Nunca usar força, rebase destrutivo ou comandos que apaguem
   trabalho para sincronizar os repositórios.

## 2. Estados durante o trabalho

Os estados do [`mapa-de-conteudo.yaml`](mapa-de-conteudo.yaml) acompanham o processo:

```text
planejada ou mapeada
        ↓
em_curadoria
        ↓
aguardando_aprovacao
        ↓
publicada
        ↓  se a origem mudar novamente
desatualizada
```

- `planejada`: falta fonte suficiente.
- `mapeada`: fontes conhecidas, sem trabalho editorial iniciado.
- `em_curadoria`: análise ou redação em andamento.
- `aguardando_aprovacao`: proposta pronta para conferência.
- `publicada`: versão confirmada e disponível na plataforma.
- `desatualizada`: a origem mudou depois da versão publicada.

Uma página pode voltar de `aguardando_aprovacao` para `em_curadoria` quantas vezes forem
necessárias. Reprovação não apaga o trabalho nem obriga uma publicação.

## 3. Preparação obrigatória

Antes de qualquer fluxo, a IA deve:

1. ler `AGENTS.md` e `CONVENCOES.md` no repositório do sistema;
2. ler toda esta pasta de documentação;
3. verificar `git status` nos dois repositórios;
4. identificar a branch e os remotos sem trocar de branch automaticamente;
5. preservar alterações locais que não pertençam ao pedido;
6. conferir o último registro em
   [`historico-de-publicacoes.yaml`](historico-de-publicacoes.yaml);
7. consultar o mapa de conteúdo;
8. verificar se a pessoa sincronizou os repositórios ou se o ambiente permite fazer isso;
9. declarar o recorte da atualização antes de editar.

Se o histórico estiver vazio, trata-se da primeira publicação. Nesse caso, a base de comparação
é o estado explicitamente escolhido e confirmado para iniciar a migração.

## 4. Fluxo A — repositório do sistema para o manual

Use quando as regras foram trabalhadas no repositório e chegou o momento de oficializá-las na
plataforma.

### Etapa A1 — determinar a diferença

1. Obter o commit `repositorio_origem` da última publicação.
2. Compará-lo com o commit atual escolhido para a nova atualização.
3. Listar alterações relevantes em `sistema-base/`, `modulos/`, `cenarios/`, `contrato/` e
   documentação relacionada.
4. Não considerar apenas o nome dos arquivos: ler o diff e identificar mudança de significado.
5. Se houver alterações locais não commitadas que devam participar, dizer explicitamente que a
   base ainda não possui um commit estável.

### Etapa A2 — mapear impacto

1. Procurar cada arquivo alterado nos campos `fontes` do mapa.
2. Incluir páginas que dependem das seções afetadas.
3. Percorrer `depende_de` e `relacionados`.
4. Consultar o `INDICE.md` para ocorrências mecânicas adicionais.
5. Verificar `contrato/catalogo.json` quando listas ou valores estruturados mudarem.
6. Verificar ficha, banco e código da plataforma quando a regra possuir comportamento
   automatizado.
7. Marcar como `desatualizada` qualquer página publicada atingida pela mudança.

### Etapa A3 — classificar o conteúdo

Aplicar o [contrato editorial](02-contrato-editorial.md) e registrar, por página:

- conteúdo publicável;
- conteúdo que precisa ser reescrito;
- conteúdo que pertence ao Manual do Narrador;
- conteúdo que permanece no bastidor;
- conflito que exige decisão;
- efeito esperado na interface ou nas regras automatizadas.

### Etapa A4 — apresentar a proposta

Antes de editar a versão oficial, apresentar um relatório contendo:

1. commit inicial e commit final analisados;
2. arquivos alterados na origem;
3. páginas e seções afetadas;
4. resumo do que muda para o leitor;
5. trechos que serão reescritos ou reorganizados;
6. conteúdo que não será levado ao manual;
7. conflitos e perguntas;
8. alterações necessárias na plataforma;
9. ordem de implementação proposta.

Se houver questão que altere regra, custo, efeito, requisito, lore ou público, aguardar a decisão
antes de redigir aquela parte.

### Etapa A5 — construir a atualização

Após autorização para editar:

1. alterar as páginas da plataforma;
2. atualizar navegação, links, âncoras e busca afetados;
3. atualizar componentes ou dados estruturados quando necessário;
4. manter páginas em `em_curadoria` durante a execução;
5. produzir uma prévia funcional nos tamanhos de tela relevantes;
6. executar validações editoriais, técnicas e visuais;
7. colocar as páginas em `aguardando_aprovacao`.

### Etapa A6 — confirmar

Apresentar:

- resumo final;
- páginas alteradas;
- antes e depois das formulações relevantes;
- dúvidas ou limitações restantes;
- resultado dos testes;
- prévia ou capturas quando houver mudança visual.

Aprovação da proposta editorial não implica automaticamente autorização para `commit` e
`push`. Respeitar o pedido explícito da pessoa e as regras Git de cada repositório.

### Etapa A7 — oficializar e registrar

Depois da aprovação e da publicação bem-sucedida:

1. registrar o commit do sistema usado como origem;
2. registrar o commit da plataforma que contém a publicação;
3. incluir os IDs das páginas publicadas;
4. atualizar seus estados para `publicada`;
5. atualizar `publicacao` no mapa;
6. adicionar uma entrada ao histórico estruturado;
7. registrar exceções, páginas adiadas e compatibilidades preservadas;
8. confirmar que a versão está acessível na plataforma antes de declará-la publicada.

## 5. Fluxo B — alteração pedida diretamente no manual

Use quando a pessoa pedir uma correção ou melhoria começando pela página pública.

### Etapa B1 — classificar a mudança

Determine se ela é:

- **visual ou de navegação:** layout, responsividade, componente, busca ou organização sem
  mudança de conteúdo;
- **editorial sem mudança de regra:** clareza, ordem, exemplo equivalente ou correção textual;
- **semântica:** altera interpretação, custo, efeito, requisito, exceção, lore ou opção;
- **estrutural:** cria, divide, une ou move páginas e âncoras.

### Etapa B2 — decidir o que volta ao repositório

- Mudança apenas visual fica na plataforma; atualize o mapa somente se rotas, páginas ou âncoras
  mudarem.
- Mudança editorial deve ser refletida na fonte correspondente quando melhora a formulação da
  regra, ou registrada na documentação de publicação quando a estrutura pública é
  intencionalmente diferente.
- Mudança semântica exige análise de impacto e atualização do repositório do sistema antes de ser
  oficializada no manual.
- Mudança estrutural atualiza arquitetura, mapa, aliases e redirecionamentos.

### Etapa B3 — manter os dois lados coerentes

1. Localizar a página no mapa.
2. Ler todas as fontes relacionadas.
3. Verificar se o pedido contradiz alguma regra ou módulo.
4. Apresentar os arquivos dos dois repositórios que serão alterados.
5. Atualizar primeiro a formulação de trabalho quando houver mudança semântica.
6. Atualizar a página pública a partir da formulação confirmada.
7. Validar, apresentar e pedir aprovação como no fluxo A.

O manual não deve se tornar uma terceira versão da regra diferente da documentação e da ficha.

## 6. Fluxo C — alteração simultânea de regra e plataforma

Use quando uma nova mecânica ou mudança de comportamento já nasce com impacto no manual e na
aplicação.

### Ordem recomendada

1. Formular a alteração no repositório do sistema.
2. Executar a análise de impacto obrigatória.
3. Resolver decisões e contradições.
4. Atualizar todas as regras e listas de origem afetadas.
5. Regenerar o catálogo quando necessário.
6. Adaptar banco, migrações, ficha e código da plataforma.
7. Redigir ou atualizar as páginas do manual.
8. Migrar dados antigos quando a alteração exigir compatibilidade.
9. Validar regra, interface e texto com os mesmos exemplos.
10. Apresentar o conjunto completo para aprovação.
11. Commitar e publicar somente quando os dois lados estiverem coerentes.

Esse é o fluxo apropriado para a oficialização do modelo de habilidades com um nível atual e
custo de fadiga: documentação, dados antigos, ficha e manual precisam convergir.

## 7. Relatório de impacto padrão

Toda proposta de atualização deve usar esta estrutura:

```markdown
# Proposta de atualização do manual

## Base analisada
- Origem anterior: <commit ou primeira publicação>
- Origem proposta: <commit>

## Alterações encontradas
- <mudança e arquivos>

## Páginas afetadas
- <id> — <ação: criar, atualizar, revisar ou adiar>

## Curadoria proposta
- Publicar: ...
- Reescrever: ...
- Manual do Narrador: ...
- Manter no bastidor: ...

## Contradições e decisões necessárias
- ...

## Impactos na plataforma
- Catálogo: ...
- Ficha: ...
- Banco/migração: ...
- Navegação e links: ...

## Ordem de execução
1. ...

## Confirmação solicitada
- <decisões ou autorização necessária>
```

Quando não houver contradição, declarar explicitamente que ela foi procurada e não encontrada.

## 8. Validações antes da aprovação

### Editoriais

- contrato editorial aplicado;
- público correto;
- nenhuma nota interna exposta;
- ordem de dependência preservada;
- regra canônica única;
- exemplos e tabelas atualizados;
- links e âncoras coerentes.

### Estruturais

- YAML do mapa válido;
- IDs e rotas únicos;
- fontes existentes;
- aliases e redirecionamentos preservados;
- páginas novas incluídas na navegação correta;
- índice de busca atualizado.

### Técnicas

- lint, testes e build da plataforma;
- catálogo regenerado e validado quando afetado;
- migrações aplicáveis quando necessárias;
- comportamento da ficha compatível com o texto;
- rotas públicas acessíveis sem login;
- comportamento logado também verificado.

### Visuais e de acessibilidade

- mobile, tablet e desktop;
- temas claro e escuro;
- navegação por teclado;
- foco visível;
- hierarquia de títulos;
- contraste;
- imagens com texto alternativo;
- índice e botão de retorno utilizáveis durante a rolagem.

## 9. Registro da publicação

Cada entrada em [`historico-de-publicacoes.yaml`](historico-de-publicacoes.yaml) deve conter:

```yaml
- id: 2026-08-04-01
  data: 2026-08-04
  repositorio_origem: abc123
  plataforma_destino: def456
  paginas:
    - jogador.regras-basicas
  resumo: Primeira publicação das regras básicas.
  compatibilidade: []
  paginas_adiadas: []
```

Regras:

- uma publicação recebe um ID único e permanente;
- registros anteriores não são reescritos;
- correções posteriores recebem uma nova entrada;
- commits devem existir nos respectivos repositórios;
- páginas adiadas não são marcadas como publicadas;
- `compatibilidade` registra formatos antigos que a plataforma ainda aceita;
- o histórico é interno e não aparece no manual.

Como o commit da plataforma só existe depois de sua criação, o registro no repositório do
sistema pode ser um pequeno commit posterior de auditoria. Isso é preferível a inventar ou omitir
o identificador de destino.

## 10. Falha, interrupção e retomada

Se o trabalho for interrompido:

- não marcar páginas como `publicada`;
- registrar o estado real no mapa;
- informar o que foi concluído e o que falta;
- preservar alterações locais;
- retomar a partir dos commits e do relatório, não da memória da conversa.

Se a publicação falhar:

- manter o último registro válido como referência;
- corrigir em novo commit;
- não reescrever histórico nem forçar push;
- só atualizar o histórico após confirmar o deploy.

Se o conteúdo publicado estiver errado:

- avaliar impacto imediatamente;
- corrigir a fonte e a plataforma quando a falha for semântica;
- criar nova entrada de publicação;
- preservar o registro anterior para auditoria.

## 11. Encerramento do site antigo

O site antigo só deve ser encerrado quando:

1. as páginas escolhidas para o primeiro lançamento estiverem publicadas;
2. links internos da plataforma apontarem para `/manual`;
3. acesso público e logado estiver validado;
4. URLs antigas relevantes tiverem redirecionamento ou página de orientação;
5. a equipe confirmar que a plataforma assumiu a publicação oficial;
6. o repositório continuar acessível como oficina das regras.

Encerrar o site não significa apagar o repositório, suas decisões ou o histórico de trabalho.
