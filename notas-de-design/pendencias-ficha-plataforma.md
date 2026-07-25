---
titulo: Pendências de ficha e plataforma
tipo: mecanica
cenario: base
status: rascunho
tags: [pendencias, ficha, plataforma, ux, backlog]
atualizado-em: 2026-07-24
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

- [ ] **Abas ou atalhos no topo** para pular direto às seções (Armas, Habilidades, Saúde,
      Traços) — hoje, no mobile, rola-se muito para achar as coisas.
- [ ] **Ícones/caracteres antes dos rótulos** (biblioteca de ícones ou caractere especial) para
      identificar seções e tipos "de relance".
- [ ] **Busca rápida** dentro da ficha (habilidades, armas, ações).

## 2. Densidade e leitura

- [ ] **Colapsar/minimizar** os cards de habilidade e de maestria (ocupam muito espaço; a
      caixona "maestria em perfurante" podia ser recolhível).
- [x] **⭐ PA total com destaque** (24/07, rodada 2) — **feito na plataforma:** stat-card "PA
      total / turno" no topo da ficha (junto de exp, fadiga e PV). Na ficha offline segue como
      estava (campo calculado na seção de PA).
- [x] **⭐ Redutor de dano por membro** (24/07, rodada 2) — **feito na plataforma:** badge
      "prot. −n" ao lado de cada membro no bloco de saúde, somando as proteções equipadas que
      cobrem a região. A função (`redDanoPorMembro`) existe também na ficha offline, mas ainda
      **sem exibição** lá.
- [ ] **Resumo de equipamentos**: hoje aparece **depois** do detalhamento; revisar ordem e
      nomenclatura. "Equipamentos" deve abarcar **itens gerais** (vela, corda, etc.), não só
      armas/proteções.

## 2b. Catálogo / contrato de conteúdo

- [x] **⭐ Catálogo gerado do manual** (24/07) — **feito:** os dados de autopreenchimento da
      ficha deixaram de ser transcritos à mão; `ficha/src/lib/catalogo.ts` agora é adaptador
      sobre [`contrato/catalogo.json`](../contrato/README.md), gerado das listas. A correção
      trouxe a ficha de volta ao manual atual (39 armas com dano defasado, 3 habilidades e
      6 traços que faltavam, efeito de `PROJ.` atualizado).
- [ ] **Expor a propriedade `ACUI.` (Acuidade) na ficha** — o manual e o catálogo já a têm;
      a grade de propriedades da ficha tem só as 7 colunas antigas (ARRE/AGAR/CORT/CONT/
      DEFL/PERF/PROJ). Decidir como mostrar (coluna nova? badge?).
- [ ] **Usar as `municoes` do catálogo** nas armas à distância (dano vem da munição; o
      contrato já traz a lista compatível por arma + a tabela de munições com dano/preço) —
      conecta com o item de **contador de munição** da seção 3.

## 3. Marcadores de combate (jogador)

- [ ] **Marcador de "reação usada"** na rodada.
- [ ] **Contador de munição** (flechas — madeira/ferro) e de **itens de unidade** (faixas,
      shuriken, consumíveis): marcar unidades gastas.
- [ ] **Marcador de status de furtividade** para o jogador: **escondido** e **valor guardado do
      dado de furtividade** (a "qualidade" do esconderijo).

## 3b. Saúde e descanso (pós-rodada 2 do modelo v2, 24/07)

- [ ] **Descanso curto × longo** — hoje o botão Descanso é um reset único (fadiga + usos +
      aptidões). A regra ([09-descanso.md](../sistema-base/conceitos/09-descanso.md)) distingue:
      longo = tudo + cura 1d6 de superficial; curto = fadiga + 1 aptidão por atributo + 1
      rolagem de cura, **sem** usos de habilidade. Exigiria UI de rolagem/entrada do d6.
- [ ] **Falta de tratamento e tratamento improvisado** — automatizar "1 profundo vira
      permanente por descanso sem tratamento" e a rolagem de tratamento (1d10 vs contrateste)
      exigiria separar *profundo* de *superficial* dentro do curável (possível **v3** do modelo
      de saúde, com 3 contadores por membro). Ver decisão
      [2026-07-24-ficha-schema-v2-dano-permanente.md](decisoes/2026-07-24-ficha-schema-v2-dano-permanente.md).
- [ ] **Exibir o redutor de dano por membro também na ficha offline** (a função
      `redDanoPorMembro` já existe lá; falta o badge no bloco de saúde).
- [ ] **⚠️ Atualizar cópias soltas do HTML da ficha** — builds antigos (antes do schema v2)
      **zeram a saúde** de arquivos `.mds.json` v2 ao carregar. O GitHub Pages atualiza
      sozinho; cópias locais (ex.: `Marca-de-Sangue-Ficha.html`) precisam ser trocadas.

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
      trocar de página — evolução do portal (hoje o link abre o manual em `/`).
- [ ] **Tabela de referência rápida** (ações e custos de PA, alcances, modificadores) com busca —
      houve **muita parada** para procurar regra nas duas sessões.

## 5. Gestor de batalha (futuro, front-only)

- [ ] Carregar **vários `.mds.json`** numa tabela de combate para o **mestre** acompanhar PCs e
      NPCs (salva gerando novo arquivo, sem histórico/undo — mesma lógica da ficha).
- [ ] Colunas de acompanhamento: **dano por membro**, **PA**, **guarda levantada**, e — para
      furtividade — **nível de alerta (0–5) por inimigo** e **nível de alarme do ambiente**.
- [ ] **Aba/estado "memória"** da ficha (usos de habilidade gastos, marcações da rodada) que
      persiste no JSON salvo, para o mestre acompanhar.
- [ ] **Presets de minion** (fraco/médio/forte) para o mestre gerar inimigos rápido, com o
      limiar de queda (10/20/30) já embutido.

## 6. Estética / aberto

- [ ] **Espaço para imagem do personagem** — **aberto**: depende de não exigir back-end (guardar
      a imagem no próprio `.mds.json` sem inflar demais). Se aumentar muito a complexidade de
      baixar/carregar o arquivo, fica para a plataforma, não para a ficha.

---

## Origem

Anotações colhidas dos playtests de **18/07/2026**:

- [Playtest 1 — Cenário 1 (brecha)](playtests/2026-07-18-playtest-cenario-1.md) (fila de UX na
  seção 4 do relatório).
- [Playtest 2 — Cenário 2 (furtividade)](playtests/2026-07-18-playtest-cenario-2.md) (fila de UX
  na seção 4 do relatório).
