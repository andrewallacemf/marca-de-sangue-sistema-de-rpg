# Manual da plataforma

Esta pasta define como o manual oficial do Marca de Sangue é organizado, escrito,
revisado e atualizado dentro da plataforma.

O repositório do sistema e o manual da plataforma têm responsabilidades diferentes:

- **O repositório do sistema é a oficina das regras.** Pode conter material em revisão,
  decisões, pendências, alternativas, relatórios de teste e histórico.
- **O manual da plataforma é a publicação oficial.** Contém apenas textos preparados para
  jogadores e narradores consultarem durante o jogo.

O conteúdo do repositório **não é espelhado nem publicado automaticamente**. Levar uma
alteração ao manual exige seleção, reorganização, eventual reescrita, revisão e aprovação
das pessoas responsáveis pelo sistema.

## Documentos

Leia estes documentos na ordem:

1. [Arquitetura do manual](01-arquitetura-do-manual.md) — públicos, hierarquia, páginas e
   critérios para organizar o conteúdo.
2. [Contrato editorial](02-contrato-editorial.md) — o que pode e o que não pode aparecer,
   quando reescrever e quando pedir uma decisão antes da publicação.
3. [Mapa de conteúdo](03-mapa-de-conteudo.md) — relação entre páginas públicas, fontes,
   dependências e impactos. Os dados ficam em [`mapa-de-conteudo.yaml`](mapa-de-conteudo.yaml).
4. [Fluxo de publicação](04-fluxo-de-publicacao.md) — como promover alterações, revisar,
   confirmar e registrar a publicação entre os dois repositórios. O histórico fica em
   [`historico-de-publicacoes.yaml`](historico-de-publicacoes.yaml).
5. [Guia de escrita](05-guia-de-escrita.md) — linguagem, composição, exemplos, tabelas,
   links e padrões para cada tipo de página.
6. [Checklist de revisão](06-checklist-de-revisao.md) — conferência obrigatória da análise à
   auditoria posterior à publicação.

## Propostas em avaliação

- [Fundamentos das Regras básicas](propostas/2026-08-04-regras-basicas-fundamentos.md) —
  primeira curadoria de “Como funciona o jogo”, “Testes e contratestes” e “Atributos”.
- [Características, Aptidões e Traços](propostas/2026-08-04-caracteristicas-aptidoes-tracos.md)
  — curadoria das escolhas que definem a personagem.
- [Pontos de Ação, Fadiga e Habilidades](propostas/2026-08-04-pontos-de-acao-fadiga-habilidades.md)
  — oficialização do modelo de habilidades por nível e fadiga.
- [Saúde e proteção](propostas/2026-08-04-saude-e-protecao.md) — simplificação dos
  tipos de dano, estados dos membros, cura, defesa e sobreposição de proteções.
- [Descanso e recuperação](propostas/2026-08-09-descanso-e-recuperacao.md) — diferenças entre
  descanso curto e longo, recursos recuperados e distribuição da cura entre membros.
- [Experiência e progressão](propostas/2026-08-09-experiencia-e-progressao.md) — separação entre
  gastos do jogador, recompensas do narrador e custos oficiais de evolução.
- [Criação de personagem](propostas/2026-08-10-criacao-de-personagem.md) — fluxo online principal,
  fichas imprimíveis alternativas, valores iniciais e revisão final.
- [Arquétipos genéricos](propostas/2026-08-10-arquetipos-genericos.md) — matriz das 12 combinações
  ordenadas entre atributo principal e secundário, com fichas iniciais de `15 exp.`.
- [Ações](propostas/2026-08-10-acoes.md) — estrutura da página consultável, decisões transversais
  e revisão das ações complexas em três blocos.
- [Aptidões](propostas/2026-08-10-aptidoes.md) — reservas por atributo, saldo disponível, custo
  escalonado e relação com trilhas opcionais de módulos.
- [Habilidades](propostas/2026-08-10-habilidades.md) — catálogo pesquisável das 38 habilidades
  básicas, progressões variáveis, custos e exclusão das entradas experimentais.
- [Traços](propostas/2026-08-10-tracos.md) — catálogo das 14 Técnicas, 11 Maestrias e 25
  Aspectos oficiais, com custos, gatilhos, requisitos e exclusão das entradas experimentais.
- [Furtividade](propostas/2026-08-15-furtividade.md) — separação entre procedimento do jogador,
  preparação do narrador e opções ainda não oficializadas.
- [Conduzindo Furtividade](propostas/2026-08-15-conduzindo-furtividade.md) — preparação de cenas,
  arbitragem de exposição, redução do alerta e administração do alarme.
- [Conflito social](propostas/2026-08-15-conflito-social.md) — malha emocional, pontuação por
  campo, rodadas, ações do embate, agência e separação da futura orientação do narrador.
- [Conduzindo conflitos sociais](propostas/2026-08-15-conduzindo-conflito-social.md) — objetivos,
  complexidade, participantes, informações abertas, interferência, concessão e encerramento.
- [Magia](propostas/2026-08-15-magia.md) — custos de ativação, progressão, opções de Aptidão e
  Experiência de Magia, catálogo oficial e separação do conteúdo próprio de cenários.

## Regra para IAs

Antes de criar, reescrever, sincronizar ou publicar qualquer página do manual da
plataforma, uma IA deve:

1. ler todos os documentos existentes nesta pasta;
2. consultar o `MAPA-DE-CONTEUDO` quando ele existir;
3. analisar os arquivos de origem indicados, sem considerar que sua organização atual é
   adequada para publicação;
4. apresentar a proposta e as dúvidas encontradas;
5. aguardar confirmação antes de oficializar o conteúdo na plataforma.

Filtros automáticos podem detectar vazamentos editoriais, mas **não substituem curadoria**.
Remover frontmatter, datas ou avisos internos não transforma, por si só, um arquivo de
trabalho em uma página de manual.
