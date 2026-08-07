---
titulo: Pendências de ficha e plataforma
tipo: mecanica
cenario: base
status: rascunho
tags: [pendencias, ficha, plataforma, ux, backlog]
atualizado-em: 2026-08-07
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

- [x] **⭐ Catálogo gerado do manual** (24/07) — **feito:** os dados de autopreenchimento da
      ficha deixaram de ser transcritos à mão; `ficha/src/lib/catalogo.ts` agora é adaptador
      sobre [`contrato/catalogo.json`](../contrato/README.md), gerado das listas. A correção
      trouxe a ficha de volta ao manual atual (39 armas com dano defasado, 3 habilidades e
      6 traços que faltavam, efeito de `PROJ.` atualizado).
- [x] **Expor a propriedade `ACUI.` (Acuidade) na ficha** — o manual e o catálogo já a têm;
      a grade de propriedades da ficha tinha só as 7 colunas antigas (ARRE/AGAR/CORT/CONT/
      DEFL/PERF/PROJ) — **feito na plataforma** (07/08, decisão 030): `ACUI` entrou em
      `PROP_KEYS` do modelo, o autopreenchimento lê `propAcuidade` do catálogo e a UI mostra o
      chip "Acuidade" nas armas leves e precisas. A ficha offline do playtest segue com a
      grade de 7 (legado).
- [ ] **Usar as `municoes` do catálogo** nas armas à distância (dano vem da munição; o
      contrato já traz a lista compatível por arma + a tabela de munições com dano/preço) —
      conecta com o item de **contador de munição** da seção 3. **(parcial)**: o stepper de
      munição e o débito automático no disparo existem (decisão 028 da plataforma); falta o
      dano por munição (flecha madeira × ferro) e sugerir as munições do catálogo como itens.

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

## 4. Apoio de regras dentro do produto

- [x] **⭐ Tutorial de uso da ficha** (pedido do Daniel, 19/07) — **feito (19/07):** (a) botão
      **"Como usar"** no topo da ficha abre um painel com o básico (salvar/carregar `.mds.json`,
      marcar dano/usos/fadiga, botões); (b) passo-a-passo curto em texto para WhatsApp entregue no
      chat. *(Publicado via GitHub Pages; offline atualizado.)*
- [x] **⭐ Portal do sistema** (24/07) — **feito:** o site virou plataforma. Raiz = **manual web**
      (base + módulos + cenários, versão limpa como o PDF, gerado do repo via VitePress); a ficha
      vive em **`/ficha/`**. Botão **Manual** na ficha e **Abrir a ficha** no manual ligam os dois.
      Republica sozinho a cada push (ver `manual/README.md` e `registro-ia/2026/2026-07-24-…`).
- [ ] **Manual consultável dentro da própria ficha** (drawer/painel lateral) para ler a regra sem
      trocar de página — evolução do portal (hoje o link abre o manual em `/`). Recomendado:
      drawer lateral com iframe do `/manual` na plataforma (observação: o **Manual do Narrador**
      em si é trabalho de conteúdo, não de UI). Adiado para depois do lote atual.
- [ ] **Tabela de referência rápida** (ações e custos de PA, alcances, modificadores) com busca —
      houve **muita parada** para procurar regra nas duas sessões. **(base pronta)**: os custos
      já são dados estruturados na engine da plataforma (`CUSTO_PA_POR_ACAO`, `dados.ts`) —
      página `/manual/referencia` data-driven. Adiado para depois do lote atual.

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
- [ ] **Usos de habilidades na tabela** — **obsoleta**: a revisão de regra de 01/08/2026
      **removeu os usos de habilidade** (limitada por fadiga na regra alternativa). Manter
      aberta só se as usos voltarem à regra vigente.
- [ ] **Iniciativa/ordem de turno arrastável** — **adiado (decisão)**: a ordem segue por
      botões cima/baixo + custo de fadiga (decisão da mesa), que é o comportamento intencional.
- [ ] **Versão front-only "offline" na ficha de playtest** — **mantido como legado**: a ficha
      offline segue sem servidor (GitHub Pages); a plataforma é o destino. Sem prazo.

## 6. Estética / aberto

- [x] **Espaço para imagem do personagem** — **feito na plataforma** (29/07): avatar com
      upload/preview via Supabase Storage (bucket `character-avatars`, envs na Vercel). A
      **ficha offline** segue sem imagem (decisão: não inflar o `.mds.json`).

---

## Origem

Anotações colhidas dos playtests de **18/07/2026**:

- [Playtest 1 — Cenário 1 (brecha)](playtests/2026-07-18-playtest-cenario-1.md) (fila de UX na
  seção 4 do relatório).
- [Playtest 2 — Cenário 2 (furtividade)](playtests/2026-07-18-playtest-cenario-2.md) (fila de UX
  na seção 4 do relatório).
