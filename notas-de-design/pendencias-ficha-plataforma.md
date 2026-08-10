---
titulo: Pendências de ficha e plataforma
tipo: mecanica
cenario: base
status: rascunho
tags: [pendencias, ficha, plataforma, ux, backlog]
atualizado-em: 2026-08-10
---

# Pendências de ficha e plataforma (UX / produto)

Este arquivo é o **backlog da ficha digital e da plataforma** — separado de propósito das
pendências de **regra** (que ficam em [PENDENCIAS.md](../PENDENCIAS.md)).

> 🔁 **Protocolo combinado (19/07/2026):** toda ideia nova de melhoria de ficha/plataforma —
> encontrada por mim ou trazida pelo André — entra **aqui** como pendência, **sem ser
> trabalhada na hora**. O foco atual é a **revisão das regras**. Quando o André disser que é
> hora de mexer na ficha/plataforma, a gente vem para cá e executa.

> 🧭 **Rumo decidido em 24/07/2026:** a plataforma robusta (contas, fichas no backend,
> campanhas, mesa ao vivo) será desenvolvida no repo **`plataforma-rpg-marca-de-sangue`**,
> alimentada por este repo via **contrato de conteúdo** (markdown limpo + `catalogo.json`).
> A ficha e o manual daqui continuam como produto de playtest. Detalhes e roteiro em
> [decisoes/2026-07-24-arquitetura-plataforma-e-backstages.md](decisoes/2026-07-24-arquitetura-plataforma-e-backstages.md).

---

## 1. Acesso e navegação (mobile)

- [x] **Abas ou atalhos no topo** para pular direto às seções (Armas, Habilidades, Saúde,
      Traços) — **feito na plataforma** (ficha pós-redesign, validada em 05/08): `ficha-tabs`
      com 4 abas no mobile/tablet (Saúde · Equipado · Habilidades e Traços · Itens) e 2 abas
      consolidadas no desktop.
- [x] **Ícones/caracteres antes dos rótulos** (biblioteca de ícones ou caractere especial) para
      identificar seções e tipos "de relance" — **feito na plataforma** (07/08): Saúde, Fadiga,
      Habilidades, Traços, Dinheiro, Carga, "Equipado nas mãos" (Hand), "Equipado no corpo"
      (Shield) e "Itens carregados" (Backpack) têm ícone; os chips de propriedade das armas
      mostram o rótulo por extenso ("Acuidade") com a sigla no `title` (decisão 030 da
      plataforma).
- [x] **Busca rápida** dentro da ficha (habilidades, armas, ações) — **feito na plataforma**
      (07/08): habilidades, traços, itens, armas e escudos e proteções têm busca
      (CollectionToolbar; armas e proteções em modo só-busca — decisão 030 da plataforma).

## 2. Densidade e leitura

- [ ] **Colapsar/minimizar** os cards de habilidade e de maestria (ocupam muito espaço; a
      caixona "maestria em perfurante" podia ser recolhível) — **(parcial na plataforma)**:
      o `CollectionViewToggle` da plataforma já permite trocar densidade (lista compacta ×
      cards); cards recolhíveis por item ficam adiados (prioridade baixa).
- [x] **⭐ PA total com destaque** (24/07, rodada 2) — **feito na plataforma:** stat-card "PA
      total / turno" no topo da ficha (junto de exp, fadiga e PV). Na ficha offline segue como
      estava (campo calculado na seção de PA).
- [x] **⭐ Redutor de dano por membro** (24/07, rodada 2) — **feito na plataforma:** badge
      "prot. −n" ao lado de cada membro no bloco de saúde, somando as proteções equipadas que
      cobrem a região. A função (`redDanoPorMembro`) existe também na ficha offline, mas ainda
      **sem exibição** lá.
- [ ] **Resumo de equipamentos**: hoje aparece **depois** do detalhamento; revisar ordem e
      nomenclatura. "Equipamentos" deve abarcar **itens gerais** (vela, corda, etc.), não só
      armas/proteções — **(parcial na plataforma)**: seção própria "Itens carregados" com
      busca/ordenação/filtro (inclui itens gerais), mas sem bloco resumo na barra lateral
      (`ficha-resumo`).

## 2b. Catálogo / contrato de conteúdo

- [x] **Publicar Equipamentos e Itens no manual oficial da plataforma** (10/08/2026): consumir a
      matriz e as 9 propriedades, 50 linhas de armas, 5 munições, 8 proteções e 37 itens gerais
      oficializados na [decisão de equipamentos e valores](decisoes/2026-08-10-equipamentos-itens-e-valores.md).
      O contrato ganhou `itens`; a plataforma deve aceitar `ITEM`, manter Proteções em página
      própria e não misturar itens gerais nos seletores de armas/proteções — **feito em
      10/08/2026, decisão 066 da plataforma**. Migration e seed também concluídos em produção na
      mesma data.

- [x] **⭐ Catálogo gerado do manual** (24/07) — **feito:** os dados de autopreenchimento da
      ficha deixaram de ser transcritos à mão; `ficha/src/lib/catalogo.ts` agora é adaptador
      sobre [`contrato/catalogo.json`](../contrato/README.md), gerado das listas. A correção
      trouxe a ficha de volta ao manual atual (39 armas com dano defasado, 3 habilidades e
      6 traços que faltavam, efeito de `PROJ.` atualizado).
- [x] **Publicar Traços no manual oficial da plataforma** — **feito em 10/08/2026,
      decisão 065 da plataforma**: 50 entradas oficiais, busca e filtros; nove experimentais
      excluídas. A fonte e o contrato também receberam `Pele de ferro` na tabela, o efeito das
      maestrias de armadura e o gatilho corrigido de `Protetor`.
- [x] **Expor a propriedade `ACUI.` (Acuidade) na ficha** — o manual e o catálogo já a têm;
      a grade de propriedades da ficha tinha só as 7 colunas antigas (ARRE/AGAR/CORT/CONT/
      DEFL/PERF/PROJ) — **feito na plataforma** (07/08, decisão 030): `ACUI` entrou em
      `PROP_KEYS` do modelo, o autopreenchimento lê `propAcuidade` do catálogo e a UI mostra o
      chip "Acuidade" nas armas leves e precisas. A ficha offline do playtest segue com a
      grade de 7 (legado).
- [x] **Usar as `municoes` do catálogo** nas armas à distância (dano vem da munição; o
      contrato já traz a lista compatível por arma + a tabela de munições com dano/preço) —
      conecta com o item de **contador de munição** da seção 3. **feito na plataforma
      (07/08, decisão 034)**: o stepper e o débito automático no disparo existem desde a
      decisão 028; agora o card da arma PROJ. oferece o **tipo de munição do catálogo**
      (flecha madeira 1d6 × ferro 1d10, bala 1d12, pedras 1d4−1, dardo 1d4) e preenche o
      campo Dano no formato que o painel de dano da batalha interpreta ("Flecha ponta de
      ferro 1d10"); botão "Adicionar à mochila" sugere a munição como item do inventário.

## 3. Marcadores de combate (jogador)

- [x] **Marcador de "reação usada"** na rodada — **feito na plataforma** (05/08): checkbox no
      card do narrador + "reação usada" em âmbar na visão do jogador; "Nova rodada" devolve
      PA + reação (estado `reacaoUsada`, `novaRodada` no servidor).
- [x] **Contador de munição** (flechas — madeira/ferro) e de **itens de unidade** (faixas,
      shuriken, consumíveis): marcar unidades gastas — **feito na plataforma** (06/08):
      stepper "Munição" no cartão da arma `PROJ.` + débito automático no disparo declarado
      (decisão 028); itens com quantidade têm stepper de unidade (`inventory-item-card`).
- [ ] **Marcador de status de furtividade** para o jogador: **escondido** e **valor guardado do
      dado de furtividade** (a "qualidade" do esconderijo) — **(parcial)**: a escala de alerta
      0–5 por inimigo + alarme do ambiente existem na batalha (proposta playtest 2); falta o
      lado do jogador (marcador "escondido" + valor guardado).

## 3b. Saúde e descanso (pós-rodada 2 do modelo v2, 24/07)

- [x] **Descanso curto × longo** — hoje o botão Descanso é um reset único (fadiga + aptidões).
      A regra ([09-descanso.md](../sistema-base/conceitos/09-descanso.md)) distingue:
      longo = tudo + cura 1d6 de curável; curto = fadiga + 1 aptidão por atributo + 1
      rolagem de cura. Exigiria UI de rolagem/entrada do d6. **(sem usos de habilidade — a
      mudança de regra de 01/08 tirou os usos)**. Recomendado: diálogo com os dois tipos.
      — **feito na plataforma (07/08, decisão 031)**: diálogo com os dois tipos; o dado do
      curto ficou **1d4** (decisão do André, registrada no 09-descanso.md); longo 1d6 (1d8
      com o traço Dorminhoco); rolagem com as faces do tipo ou valor manual + membro.
- [ ] **Distribuir a cura do descanso entre vários membros** — correção aprovada em 09/08.
      A rolagem produz um total que o jogador divide livremente entre os membros; o diálogo
      atual aplica o valor inteiro a um único membro. Ajustar a UI para alocação múltipla,
      impedir que a soma ultrapasse o resultado e preservar dano permanente. Origem:
      [decisão de distribuição da cura](decisoes/2026-08-09-distribuicao-cura-descanso.md).
- [ ] **Condições e efeitos temporários na plataforma** — projetar somente depois de fechar a
      regra geral no `PENDENCIAS.md`. A estrutura deve representar origem, efeito, duração e
      gatilho de encerramento (incluindo descanso curto/longo). Não zerar automaticamente o
      campo genérico “Outros” de `PA`: ele também contém ajustes sem duração conhecida.
- [ ] **Falta de tratamento e tratamento improvisado** — automatizar "1 profundo vira
      permanente por descanso sem tratamento" e a rolagem de tratamento (1d10 vs contrateste)
      exigiria separar *profundo* de *superficial* dentro do curável (possível **v3** do modelo
      de saúde, com 3 contadores por membro). Ver decisão
      [2026-07-24-ficha-schema-v2-dano-permanente.md](decisoes/2026-07-24-ficha-schema-v2-dano-permanente.md).
- [x] **Exibir o redutor de dano por membro também na ficha offline** (a função
      `redDanoPorMembro` já existe lá; falta o badge no bloco de saúde) — **feito na
      plataforma** (24/07): badge "prot. −n" por membro. A ficha offline segue como produto
      de playtest (legado); a plataforma é o destino.
- [x] **⚠️ Atualizar cópias soltas do HTML da ficha** — builds antigos (antes do schema v2)
      **zeram a saúde** de arquivos `.mds.json` v2 ao carregar. O GitHub Pages atualiza
      sozinho; cópias locais (ex.: `Marca-de-Sangue-Ficha.html`) precisam ser trocadas —
      **operacional, sem código**: substituir as cópias locais pela versão publicada.

- [ ] **⚠️ AVISO DE MUDANÇA DE REGRA (09/08/2026) — o modelo de 6 membros deixou de ser universal.**
      As mutações **#42 Terceiro braço, #43 Terceira perna, #44 Segunda cabeça e #45 Gêmeo parasita**
      do [Colapso](../cenarios/colapso/mecanicas-unicas/mutacoes.md) passaram a conceder um **membro
      adicional de verdade**, com barra de vida própria de 10 `PV` e número próprio na localização do
      [ataque descuidado](../sistema-base/conflitos/02-acoes-em-conflito.md#ataque-descuidado).
      Isso colide com três premissas do produto: o **schema de saúde com seis membros fixos**, a
      **fadiga máxima** (soma da vida máxima dos membros) e a **rolagem `1d6`** de localização.
      **Ainda não exige implementação** — o cenário está em `rascunho` e a solução do dado está em
      aberto (ver [PENDENCIAS.md](../PENDENCIAS.md)) —, mas o schema precisa saber que o número de
      membros vai virar variável antes de o Colapso entrar na plataforma. Decidir junto com a equipe
      de lá se o schema já nasce com membros dinâmicos ou se o Colapso fica fora até a v3 da saúde.
- [ ] **Nomenclatura de dano no Colapso normalizada (09/08/2026)** — o cenário ainda usava
      *superficial*/*profundo*; foi todo convertido para **dano curável**, alinhando com a decisão de
      04/08. Nada a implementar; registrado para quem for importar o conteúdo do Colapso não estranhar
      o diff.

## 4. Apoio de regras dentro do produto

- [x] **Publicar a página de Ações no manual da plataforma** — a estrutura e as decisões
      transversais foram aprovadas em 10/08: Esconder-se custa `2 PA`, Negociar usa Social ou
      Mental e Técnicas anulam desvantagem natural. A rota
      `/manual/jogador/recursos/acoes` foi implementada localmente na plataforma com as 17 ações,
      navegação por âncoras e a regra compartilhada de Tentativas repetidas; falta integrar e
      publicar a mudança. Não ampliar a engine para ações sem avaliar separadamente quais efeitos
      precisam de automação.
      Origem: [decisão de curadoria](decisoes/2026-08-10-curadoria-acoes.md). Implementação:
      decisão 061 do `docs/DECISIONS.md` da plataforma.
      As manobras físicas foram aprovadas em 10/08; a próxima importação do catálogo também deve
      atualizar a descrição estruturada de **Burro de carga**.
      Correr foi aprovado como ação de `3 PA` por até 5 metros em linha reta; Maratonista também
      teve sua descrição estruturada esclarecida e deve entrar na próxima importação do catálogo.
      Esconder-se também foi aprovado com qualidade de furtividade guardada; a implementação futura
      deve manter uma única definição no núcleo e deixar alerta/alarme para o módulo Furtividade.
      A regra geral de Tentativas repetidas foi aprovada em 10/08 e deve entrar na página pública
      de Testes; não há automação genérica de rolagens a alterar na engine atual.
      Investigar/Observar, Levantar e Nadar também foram aprovadas. A página pública deve explicar
      a distinção entre percepção passiva e busca deliberada, a ordem do ataque de oportunidade ao
      levantar e as regras de fôlego e afogamento. Guelras, de Colapso, passou a conceder uma rodada
      submersa antes do limite normal. Não há automação de natação ou afogamento na engine atual.
      Ponderar foi aprovado distinguindo recordação gratuita, dedução, busca de evidências e a
      revelação mecânica específica de Analisar fraquezas.
      Intimidar também foi aprovado com concessão delimitada antes do teste, agência preservada para
      personagens de jogadores e sem duplicar os efeitos das habilidades de atraso de turno.
      Negociar foi aprovado com escolha entre Social e Mental, termos prévios e sem preço arbitrário
      acrescentado depois do sucesso.
      Performar foi aprovado com distração de um alvo sem bônus implícitos e sem proibir ataques no
      mesmo turno; a página deve vinculá-lo a Ocultar-se à vista.
      Persuadir/Seduzir foi renomeado para Persuadir em ação, técnica, arquétipos e fichas de
      playtest; a próxima importação deve substituir o nome estruturado no catálogo.
      Realizar Truques foi aprovado usando Ágil ou Social contra o Mental de cada observador; não
      concede vantagem automática no próximo ataque e sua Técnica remove só a desvantagem natural.

- [x] **Publicar Aptidões e apresentar o saldo disponível na ficha** — página aprovada com as
      quatro reservas básicas, custo escalonado, exemplos, recuperação e separação das trilhas de
      módulos. O resumo da ficha agora mostra `disponíveis/total`, calculado sem alterar o formato
      persistido; o editor identifica o segundo campo como aptidões gastas. Implementação:
      decisão 062 do `docs/DECISIONS.md` da plataforma. Aptidões de módulos continuam exigindo
      suporte próprio quando seus módulos forem publicados.

- [x] **Compatibilizar habilidades com a progressão canônica variável** — a plataforma deixou de
      truncar níveis no quinto degrau, calcula experiência como custo-base × nível, lê custos de
      ativação definidos em cada nível e mantém `Reparar` fora da batalha. Fichas antigas ligadas
      ao catálogo são corrigidas na leitura, sem migration. Implementação: decisão 063 do
      `docs/DECISIONS.md` da plataforma.

- [x] **Publicar a página consultável de Habilidades** — proposta aprovada e implementada na
      plataforma sob a decisão 064. Escopo: 38 habilidades básicas, sem a lista social
      experimental; busca, filtros, âncoras e progressão integral de cada entrada.

- [x] **⭐ Tutorial de uso da ficha** (pedido do Daniel, 19/07) — **feito (19/07):** (a) botão
      **"Como usar"** no topo da ficha abre um painel com o básico (salvar/carregar `.mds.json`,
      marcar dano/usos/fadiga, botões); (b) passo-a-passo curto em texto para WhatsApp entregue no
      chat. *(Publicado via GitHub Pages; offline atualizado.)*
- [x] **⭐ Portal do sistema** (24/07) — **feito:** o site virou plataforma. Raiz = **manual web**
      (base + módulos + cenários, versão limpa como o PDF, gerado do repo via VitePress); a ficha
      vive em **`/ficha/`**. Botão **Manual** na ficha e **Abrir a ficha** no manual ligam os dois.
      Republica sozinho a cada push (ver `manual/README.md` e `registro-ia/2026/2026-07-24-…`).
- [x] **Manual consultável dentro da própria ficha** (drawer/painel lateral) para ler a regra sem
      trocar de página — evolução do portal (hoje o link abre o manual em `/`). **feito na
      plataforma (07/08, decisão 033)**: drawer lateral com iframe do `/manual` da plataforma
      (observação: o **Manual do Narrador** em si é trabalho de conteúdo, não de UI). O item
      **Manual** do menu ⋯ da ficha abre o painel (botão "Abrir em nova aba" no header).
      - [ ] **REVISÃO pós-reestruturação (bloqueada)**: quando a reestruturação do manual
        dentro da plataforma terminar, verificar que (a) o iframe do drawer carrega o manual
        novo sem quebrar, (b) o link "Abrir em nova aba" aponta para rota existente, (c) a
        tabela de referência (decisão 032) ganha os links novos (ex.: alcances, manual de
        armas) no `src/content/manual/referencia.ts`. Desbloquear assim que o manual novo
        estiver no ar.
      - **⚠️ Indicação de processo**: Toda alteração no manual da plataforma (nova rota,
        renome de âncora, reestruturação de página) deve checar que o drawer da ficha
        (`ManualDrawer`) continua funcionando — se o manual quebrar, é nele que aparece.
- [x] **Tabela de referência rápida** (ações e custos de PA, alcances, modificadores) com busca —
      houve **muita parada** para procurar regra nas duas sessões. **(base pronta)**: os custos
      já são dados estruturados na engine da plataforma (`CUSTO_PA_POR_ACAO`, `dados.ts`) —
      página `/manual/referencia` data-driven. **feito na plataforma (07/08, decisão 032)**:
      `/manual/referencia` com 4 grupos (Ações e custos de PA, Limites do turno, Dados e
      modificadores, Cura por descanso), tudo derivado da engine, com busca e contador; links
      só para âncoras já publicadas no manual da plataforma. Os **alcances** ficam de fora até o
      manual de armas existir na plataforma (os links de regra entram no mesmo arquivo quando
      ele existir).

## 5. Gestor de batalha

> ⭐ **v1 do gestor feita na PLATAFORMA (25/07/2026)** — rota `/batalhas` (decisão 011 do
> repo da plataforma). Combatentes entram por personagem da conta ou por `.mds.json`
> carregado direto (snapshot: a batalha não altera a ficha de origem).

- [x] Carregar **vários `.mds.json`** numa tabela de combate para o **mestre** acompanhar PCs e
      NPCs — **feito na plataforma** (import direto na batalha; snapshot persistido no banco).
- [x] Colunas de acompanhamento: **dano por membro** (células v2, permanente protegido),
      **PA gastos**, **guarda levantada**, **nível de alerta 0–5 por inimigo** e **alarme do
      ambiente** — **feito na plataforma** (alerta/alarme marcados como proposta do playtest 2).
- [x] **Estado "memória" da rodada** (PA gastos, reação usada, fadiga, anotações por
      combatente; "Nova rodada" devolve PA + reação) — **feito na plataforma**. Usos de
      habilidade por combatente ficam para uma iteração futura.
- [x] **Presets de minion** (fraco/médio/forte, limiar 10/20/30 embutido) — **feito na
      plataforma**; ⚠️ valores ainda são **proposta de playtest** (regra não fechada:
      [PENDENCIAS.md](../PENDENCIAS.md), "Minions — tratamento único").
- [x] **Trilha de fadiga compacta no card da batalha** — **feito na plataforma** (25/07): card
      com fadiga + tooltip da faixa.
- [x] **Mesa debita PA + fadiga ao usar habilidade** (substitui o item obsoleto "Usos de
      habilidades na tabela" — a regra de 01/08/2026 removeu os usos) — **feito na
      plataforma (08/08/2026, decisão 052 de lá, Fases A–D)**: botão "Usar" no card do
      narrador com custo declarado, débito condicional no servidor (o `WHERE` decide o
      saldo, padrão das decisões 025–028) e fim da sincronização de usos mesa↔ficha.
      Proposta em [2026-08-08-proposta-mesa-debita-pa-fadiga.md](2026-08-08-proposta-mesa-debita-pa-fadiga.md)
      (`fase-D-concluida`). ⚠️ A relação 1:1 PA/fadiga segue aberta no grupo — se mudar,
      a engine de lá acompanha pelo checklist de mudança de regra do `contrato/README.md`.
- [ ] **Iniciativa/ordem de turno arrastável** — **adiado (decisão)**: a ordem segue por
      botões cima/baixo + custo de fadiga (decisão da mesa), que é o comportamento intencional.
- [ ] **Versão front-only "offline" na ficha de playtest** — **mantido como legado**: a ficha
      offline segue sem servidor (GitHub Pages); a plataforma é o destino. Sem prazo.
      **Atualizada em 08/08/2026 para as regras de 01/08** (fadiga máx = total de PV,
      penalidade em passo de 10, sem modo de usos de habilidade) — o round-trip do
      `.mds.json` com a plataforma voltou a valer.

## 6. Estética / aberto

- [x] **Espaço para imagem do personagem** — **feito na plataforma** (29/07): avatar com
      upload/preview via Supabase Storage (bucket `character-avatars`, envs na Vercel). A
      **ficha offline** segue sem imagem (decisão: não inflar o `.mds.json`).

## 7. Mapeamento de UX (07/08/2026)

> Mapeamento completo em
> [2026-08-07-mapeamento-ux-plataforma.md](2026-08-07-mapeamento-ux-plataforma.md). Itens em
> ordem de prioridade; **itens 1, 2, 3 e 4 implementados em 07/08** (commits `25fbdba`,
> `596f326`, `b0614f9` e `bd3c763` na plataforma, decisões 035, 036, 037 e 038). O item
> "Recursos do narrador" (ex-inimigos) foi implementado em 07/08 (fases A-F, decisões
> 039-044). Demais itens (navegação, beforeunload, glossário, focus trap, renomear) ainda
> não trabalhados.

- [x] **⭐ Arma/Proteção: criar e editar em modal com catálogo** — **feito na plataforma**
      (07/08): `EquipmentCatalogDialog` (busca no catálogo → preenche tudo em 1 passo, com
      botão "Criar personalizada") e `EquipmentEditorDialog` (edição completa em modal, nome
      do catálogo preenche junto), moldados no `CharacteristicCatalogDialog` das habilidades;
      o `<details>` escondido saiu dos cards (entrada ⋯/editar abre o modal). Os dois diálogos
      novos já usam `Dialog` (decisão 037).
- [x] **Moeda: simplificar o híbrido** — **feito na plataforma** (07/08): quantidade
      é só inline (input + stepper); "Adicionar quantidade / Definir valor" saíram do menu
      ⋯ (o input já fazia); renomear agora é inline (título vira campo ao clicar no lápis;
      Enter/blur confirmam, Escape cancela). O `AlertDialog` saiu do card de moeda.
- [x] **Migrar AlertDialog → Dialog nos formulários** — **feito na plataforma** (07/08):
      curar/aplicar dano, descanso, editor e catálogo de habilidade, catálogo e editor de
      equipamento e o recorte de avatar migraram para `Dialog` (maior, sem o chrome de
      alerta); `AlertDialog` ficou só nas confirmações de verdade (troca de mão, reset de
      fadiga, ações destrutivas, encerrar batalha etc. — decisão 037 da plataforma).
- [x] **Confirmação em remoções da ficha** (arma/escudo/proteção/item/moeda, excluir
      habilidade/traço) e em **encerrar batalha** (irreversível, hoje sem confirmação);
      unificar verbos "Excluir" × "Remover" sem critério. — **feito na plataforma** (07/08):
      `ConfirmDialog` compartilhado (`AlertDialog` com título pergunta + botão destrutivo,
      decisão 038) em todos os cards da ficha e no encerrar batalha. Verbos unificados com
      critério: **"Remover"** = edição da ficha (arma, escudo, proteção, item, moeda,
      habilidade, traço — nada é destruído, dá para recriar); **"Excluir"** = destruição de
      entidade (personagem, campanha, batalha, inimigo — já confirmados).
- [ ] **Navegação**: destaque do menu por prefixo (`/campanhas/[id]` etc. sem item ativo);
      menu mobile no manual público (a nav some < `sm`); metadata consistente (" | " em todo
      lugar). *(Link "Inimigos" no header foi **cancelado** em 07/08 — decisão do André:
      recursos do narrador ficam dentro da campanha/manuais; ver o item "Recursos do
      narrador" abaixo.)*
- [x] **⭐ Recursos do narrador** (ex-"Inimigos"): redesign completo da área como recursos do
      narrador — 3 camadas (canônico contrato / do narrador / uso na campanha). **Todas as 6
      fases implementadas na plataforma em 07/08**:
      - Fase A: `/recursos` (UserMenu), `CampanhaInimigos`, `origemCampanhaId`, `InimigoBlocoForm`
      - Fase B: `InimigoBase.origem` (SISTEMA_BASE|CENARIO), 6 criaturas genéricas, bestiário no manual
      - Fase C: compartilhamento por link (`slugCompartilhamento`, `SharedInimigo`, `ShareDialog`)
      - Fase D: notificações + e-mail (`Notificacao`, `Compartilhamento`, `NotificationBell`)
      - Fase E: visibilidade por campanha (`CampanhaInimigo`, seletor narrador + visão do membro)
      - Fase F: filtros de tipo + "Em breve" itens/mapas
      Proposta em [2026-08-07-proposta-recursos-do-narrador.md](2026-08-07-proposta-recursos-do-narrador.md)
      (status `fase-F-concluida` — 100% implementada). Decisões 039-044.
- [ ] **`beforeunload` + indicador de save visível na ficha**: fechar/recarregar dentro do
      debounce de 700ms perde a última digitação sem aviso; o status atual é `sr-only`.
- [ ] **Glossário de botões** (verbo + capitalização + reticências) e empty state único (hoje 3
      estilos); "Excluir campanha"/"Sair da campanha" em `outline` (único destrutivo fora do
      vermelho); "Criando..." ASCII.
- [ ] **Focus trap no menu mobile** (`authenticated-header.tsx` tem `role="dialog"` manual sem
      foco inicial); `tabs.tsx` é primitivo morto (0 imports) — candidato a remoção.
- [ ] **Renomear campanha/batalha na lista** e tirar o nome do personagem do `<details>`
      escondido da `secao-identidade` (hoje é o único lugar onde se renomeia).

## 8. Avisos de mudança vindos da plataforma (direção inversa)

> Espelho do protocolo de mudança de regra do [contrato/README.md](../contrato/README.md):
> quando a **plataforma** muda um comportamento que quem usa ou testa o sistema precisa
> conhecer, a decisão de lá ganha uma linha aqui.

- **Decisão 046 da plataforma (07/08/2026)** — compartilhamento de inimigo **por e-mail
  passou a exigir conta cadastrada**: e-mail sem conta não cria mais convite pendente
  (o erro avisa na hora quem convida).
- **Decisão 048 da plataforma (07/08/2026)** — os níveis de visibilidade de inimigo
  entregam dados distintos ao membro: **TUDO** passou a liberar **queda + redução**;
  membros **deixaram de ver a redução** em BLOCO/TATICA.
- **Decisão 052 da plataforma (08/08/2026)** — a mesa agora debita **PA + fadiga
  automaticamente ao usar habilidade** (botão "Usar" no card do narrador; sem saldo
  bloqueia). O modelo de "usos" deixou de existir também na mesa: a sincronização de
  usos mesa↔ficha foi removida (o round-trip com perda não existe mais).

---

## Origem

Anotações colhidas dos playtests de **18/07/2026**:

- [Playtest 1 — Cenário 1 (brecha)](playtests/2026-07-18-playtest-cenario-1.md) (fila de UX na
  seção 4 do relatório).
- [Playtest 2 — Cenário 2 (furtividade)](playtests/2026-07-18-playtest-cenario-2.md) (fila de UX
  na seção 4 do relatório).
