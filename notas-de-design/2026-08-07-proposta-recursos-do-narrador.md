---
titulo: Proposta — Recursos do narrador (inimigos como recursos, não navegação)
tipo: design
cenario: base
status: fase-C-concluida
tags: [plataforma, inimigos, recursos, campanha, manual, compartilhamento]
atualizado-em: 2026-08-07
---

# Proposta — Inimigos como recursos do narrador

> Análise e mapeamento pedidos pelo André em 07/08/2026, depois de concluído o item 4 do
> mapeamento de UX. **v2**: respostas do André incorporadas (07/08) — ver seção 8.

## 1. Problema

O pedido rejeita explicitamente o destino que o mapeamento de UX tinha dado a `/inimigos`
(item "Navegação: **inimigos no header**"):

1. **Inimigos não são navegação** — não devem ficar no header. Devem ser vistos/adicionados
   **dentro de uma campanha** (contexto do narrador) ou **nos manuais dos cenários**
   (inimigos genéricos no manual do sistema base).
2. **Sem diferenciação de origem** — o produto trata inimigos padrão (contrato) e inimigos
   criados pelo usuário na mesma tela, sem distinção clara entre "padrão do sistema",
   "padrão do cenário" e "meu".
3. **Não existe área de recursos do narrador** — hoje a criação vive na rota órfã
   `/inimigos`, alcançável só pelo link "gerenciar biblioteca" do gestor de batalha
   (`batalha-board.tsx:766`) ou URL direta. Não há compartilhamento nem notificações.

### O que existe hoje (mapeado)

| Aspecto | Estado atual |
|---|---|
| Rota `/inimigos` | Órfã do header e da home; sem back button (mapeamento UX seção 4). |
| `InimigoBase` (padrão) | Global, só leitura, semeados do contrato (decisão 009/013). 14 blocos do kit de playtest, todos com `proposta: true`, agrupados por `cenarioNumero` 1–6. **Não há inimigos "do sistema base"** — a fonte do contrato é fixa em `playtest/cenarios/inimigos-do-kit.md`. |
| `Inimigo` (do usuário) | Escopo `userId`, tipos `AMEAÇA` (bloco enxuto) e `NARRADOR` (envelope `.mds.json`). **Sem vínculo com campanha ou batalha** — vira combatente como snapshot (decisões 011/013, sem FK). |
| Batalha | Pertence a campanha (decisão 024). Consome `inimigo.list` com seletor `BASE:<id>` / `MEU:<id>` e copia o bloco/envelope para `Combatente`. |
| Campanha | `userId` = narrador; membros = jogadores (`CampanhaMembro`); campo `cenario String?` livre. **Nenhuma noção de visibilidade de conteúdo para membros.** |
| Manual da plataforma | Escrito à mão em TSX (`src/content/manual/`) — regra 009 proíbe transcrever regra no código; cartão "Manual do Narrador" em `/manual` está **vazio** (sem nenhum link). |
| Notificações | **Não existe** infraestrutura de notificação no sistema (nenhum modelo/UI). |
| Header | `Campanhas`, `Meus personagens`, `Manual` — já **não** tem Inimigos. |

## 2. Modelo de domínio proposto — três camadas

```
┌─────────────────────────────────────────────────────────────┐
│ 1. CANÔNICO (contrato — só leitura, decisão 009)            │
│    • Inimigos genéricos do SISTEMA BASE                     │
│    • Inimigos por CENÁRIO (colapso, mukashi, …)             │
│    → vistos nos manuais; adicionáveis à batalha             │
├─────────────────────────────────────────────────────────────┤
│ 2. DO NARRADOR (biblioteca pessoal — "Recursos")            │
│    • Criado na área de recursos OU dentro da campanha       │
│      (criou na campanha, entrou na área do narrador)        │
│    • Pode ser "personalizado para um cenário pronto"        │
│      (tag de cenário — só aparece para o dono)              │
│    • Compartilhado por E-MAIL (convite pendente) ou LINK     │
│      (gerenciável); o outro narrador COPIA para a sua área  │
├─────────────────────────────────────────────────────────────┤
│ 3. USO NA CAMPANHA (o que a mesa usa)                       │
│    • Batalha consome (1) e (2); snapshot em Combatente      │
│    • O narrador GERENCIA o que os membros veem               │
│      (recurso inteiro e/ou campos) — padrão: escondido      │
└─────────────────────────────────────────────────────────────┘
```

Princípios que sustentam o modelo:

- **Fronteira 009 intacta**: padrão = contrato, nunca transcrito; usuário = `Inimigo` (userId).
- **Snapshot em vez de vínculo** (decisões 011/013): copiar para a batalha já é o padrão.
  Compartilhar entre narradores usa a MESMA semântica — **copiar** (não linkar), tanto por
  e-mail quanto por link.
- **Criar na campanha não cria vínculo de dado**: cria com `userId` do narrador; a campanha
  é o contexto de descoberta/criação. Um marcador opcional (`origemCampanhaId`) existe só
  para o filtro "criados nesta campanha" (ver 8.4).
- **Visibilidade para membros é configurada por campanha** (junction), nunca global:
  o mesmo recurso pode estar visível numa campanha e escondido em outra.

## 3. Onde cada coisa aparece (UI)

### 3.1 Campanha (página de detalhe) — o contexto primário

O narrador entra na campanha e encontra a seção **"Inimigos"**:

- **Lista dos recursos dele** com chip de filtro "Desta campanha" / "Todos" (recomendação,
  ver 8.4 — padrão "Todos").
- Ações: **"Adicionar do catálogo"** (padrão por cenário + genéricos), **"Criar novo"**
  (form da área; entra nos recursos do narrador, marcado como "desta campanha") e
  **"Adicionar à batalha"** quando houver batalha ativa.
- **Controles de visibilidade** (ao lado de cada inimigo, só narrador): o que os membros da
  campanha veem — `Escondido` (padrão) / `Bloco` / `Bloco + tática` / `Tudo`. Ver 5.3.

O **membro da campanha** vê só o que foi liberado (por padrão, nada). Ver 8.5.

### 3.2 Área "Recursos do narrador" — a casa do que é dele

- Rota **`/recursos`**, entrada no menu do usuário (avatar) — **nunca** no header principal.
- Substitui `/inimigos` e a `InimigoBiblioteca` atual. Seções:
  - **"Meus recursos"**: agrupados por origem — *sem cenário* / *cenário pronto
    (personalizado, só dele — tag do 8.6)* / *copiado de …*.
  - **"Padrão"** (consulta): por origem — *sistema base* / *cenário*.
  - **"Compartilhamentos"**: convites **pendentes** (recebidos e enviados, com aceitar/
    recusar) e **links** gerados (gerenciamento, ver 5.2).
- Preparada para crescer: inimigos hoje, futuramente NPCs, itens personalizados, mapas.
- Toda criação/edição/exclusão que hoje existe em `/inimigos` migra para cá sem mudança de
  comportamento (mesmos forms, mesma validação).

### 3.3 Manual — inimigos padrão como conteúdo de referência

- **Manual do sistema base**: página de **bestiário genérico** (quando houver criaturas
  genéricas — anexo A propõe um primeiro lote).
- **Manual do narrador** (o cartão vazio em `/manual`): página por **cenário** listando os
  inimigos daquele cenário (bloco enxuto + contexto + tática), com os 14 blocos do kit já
  disponíveis hoje (`cenarioNumero`/`cenarioTitulo` do contrato).
- **Regra 009**: as páginas de bestiário são **geradas a partir do contrato** (padrão da
  `referencia.ts`, que monta os números da engine), nunca transcritas à mão no TSX.
- O link "gerenciar biblioteca" do gestor de batalha passa a apontar para `/recursos`; o
  board continua sendo o lugar de **adicionar à batalha**.

### 3.4 Notificações (infra nova, habilitada pelo compartilhamento por e-mail)

- Sino no header (ao lado do menu do usuário) com contador de não lidas.
- Tipos iniciais: **convite de compartilhamento** recebido (aceitar/recusar direto no
  painel) e **convite aceito/recusado** (feedback para quem enviou). Modelo `Notificacao`
  preparado para crescer (rolagens? avisos de campanha?).

## 4. Mudanças de dados (todas com migration nova)

### `InimigoBase` — origem do padrão

```prisma
// hoje: cenarioNumero Int (1–6, do kit de playtest)
origem  InimigoOrigem @default(CENARIO)   // SISTEMA_BASE | CENARIO
cenarioNumero Int?                        // nullable: genéricos não têm cenário
cenarioTitulo String?
```

Seed mapeia: inimigos de `sistema-base/criaturas/` → `SISTEMA_BASE`; os de cenário mantêm
número/título. Dados existentes migram como `CENARIO` — seguro.

### `Inimigo` — contexto e compartilhamento

```prisma
// contexto (opcional, só para filtro e agrupamento)
origemCampanhaId String?                  // campanha onde foi criado (SetNull)
cenarioNumero Int?                        // personalizado para um cenário pronto
cenarioTitulo String?

// compartilhamento por LINK (gerenciável pelo dono)
slugCompartilhamento String? @unique      // ex. "saqueador-v2-9f3a"
linkAtivo Boolean @default(false)         // desativar = link morto, sem apagar
compartilhadoEm DateTime?

// compartilhamento por E-MAIL (fluxo pendente) — junction própria, ver abaixo
```

### Novas tabelas

```prisma
model Notificacao {
  id        String   @id @default(cuid())
  userId    String                       // dono da notificação
  tipo      String                       // "convite_compartilhamento" | "compartilhamento_aceito" | ...
  dados     Json                          // { compartilhamentoId, inimigoNome, deNome, ... }
  lidaEm    DateTime?
  criadaEm  DateTime @default(now())
  @@index([userId, lidaEm])
}

model Compartilhamento {
  id          String    @id @default(cuid())
  inimigoId   String    // do dono
  donoId      String    // narrador que compartilha
  emailAlvo   String    // e-mail digitado
  alvoId      String?   // preenchido no aceite (para conferir usuário)
  status      CompartilhamentoStatus     // PENDENTE | ACEITO | RECUSADO
  criadoEm    DateTime  @default(now())
  respondidoEm DateTime?
}

model CampanhaInimigo {                  // visibilidade POR CAMPANHA (narrador)
  id          String   @id @default(cuid())
  campanhaId  String
  inimigoId   String   // pode ser Inimigo (do narrador) ou InimigoBase (padrão)
  visibilidade VisibilidadeInimigo       // ESCONDIDO | BLOCO | TATICA | TUDO
  @@unique([campanhaId, inimigoId])
}
```

- `VisibilidadeInimigo` (default `ESCONDIDO`): `ESCONDIDO` → nada; `BLOCO` → atributos do
  bloco (PA, arma, dano, queda); `TATICA` → bloco + tática/contexto; `TUDO` → tudo que o
  bloco tem. Campo a campo fica para evolução futura (8.5).
- **Copiar** (nos dois fluxos) = clone do `bloco`/`envelope` para o `userId` do destino, com
  `copiadoDe` registrado — sem FK, sem vínculo, coerentemente com o snapshot da batalha.
- `Inimigo.copiadoDe String?` registra a atribuição ("copiado de Fulano").

### Inalterado

- `Batalha.addInimigo` (já resolve `BASE`/`MEU`), `Combatente` (snapshot), `catalogo.json`
  no consumível — o seed apenas ganha a leitura da nova origem.
- `campanha.cenario` continua **livre** (o narrador cria cenários próprios ou usa recursos
  prontos — ver 8.6).

## 5. Fluxos

### 5.1 Compartilhar por e-mail

1. Narrador A, em `/recursos` → ⋯ do inimigo → **Compartilhar por e-mail** → digita o
   e-mail de B.
2. Cria `Compartilhamento` (PENDENTE) e, se o e-mail pertence a um usuário do sistema,
   `Notificacao` para B ("Fulano compartilhou um inimigo com você" — Aceitar/Recusar).
3. B abre a notificação → vê o card (bloco/tática/envelope) → **Aceitar** copia para os
   recursos de B (`copiadoDe` preenchido) e a notificação resolve; **Recusar** marca
   RECUSADO e notifica A do resultado.
4. E-mail inexistente no sistema: convite fica pendente até a pessoa entrar/se cadastrar —
   se um dia o e-mail aparecer, o pendente é resolvido (decisão: manter simples, ver 8.3).

### 5.2 Compartilhar por link

1. A gera um link: `…/recursos/compartilhado/<slug>` (`linkAtivo = true`).
2. A **gerencia** o link na área de recursos: ativar/desativar (link morto sem apagar),
   copiar o link, desativar e reativar quando quiser.
3. B abre o link (página para usuário logado): vê o card e **"Adicionar aos meus
   recursos"** → copia para a área de B. Link desativado = 404/aviso.
4. Atualizações de A nunca chegam a B (cópia, igual ao snapshot de batalha).

### 5.3 Visibilidade para membros (narrador gerencia)

1. Na campanha, o narrador abre o inimigo → seletor de visibilidade (padrão: Escondido).
2. Membro vê na campanha só o que foi liberado, e só os campos do nível escolhido.
   Inimigos nunca são **editáveis** por membro — apenas consultáveis (se liberados).
3. Mesma lógica serve para padrão (InimigoBase) e para recursos do narrador.

## 6. Pendências do repo do sistema (pré-requisitos de conteúdo)

| Pendência | Onde | Motivo |
|---|---|---|
| Criar **criaturas genéricas** (blocos no padrão do guia do narrador) | `sistema-base/criaturas/` (hoje só o `_template-criatura.md`) | "Inimigos genéricos no manual do sistema base" — **anexo A propõe o primeiro lote** |
| Criar criaturas dos cenários (blocos) | `cenarios/<nome>/criaturas/` (colapso tem "A DEFINIR"; mukashi tem `criaturas-e-ameacas/` na campanha) | Manual do narrador por cenário (não bloqueia: os 14 do kit já cobrem os 6 cenários de playtest) |
| Exportador aceitar **múltiplas fontes de inimigos** | `contrato/exportar_catalogo.py` (`FONTE_INIMIGOS` fixa, linha 48) | Alimentar `origem` e permitir sistema-base |
| Vocabulário | `sistema-base/oponentes/` usa "Ameaça" (proposta provisória) | Alinhar termo com o produto (hoje "Inimigo") antes de espalhar na UI |

## 7. Roteiro sugerido (etapas independentes)

- **Fase A — Fundação (plataforma)**: área "Recursos do narrador" (`/recursos`, entrada no
  menu do usuário); seção "Inimigos" na campanha (adicionar do catálogo + criar novo com
  `origemCampanhaId`); link do board aponta para `/recursos`; ajuste do item de navegação
  do mapeamento (sai "inimigos no header").
- **Fase B — Origem e manuais**: `origem`/`cenarioNumero?` no contrato + `InimigoBase` +
  seed; bestiário no manual (narrador por cenário com os 14 blocos; genéricos quando
  houver), gerado do contrato; anexo A revisado → `sistema-base/criaturas/`.
- **Fase C — Compartilhamento por link**: slug + `linkAtivo` + página de compartilhado +
  "Adicionar aos meus recursos".
- **Fase D — Notificações + e-mail**: `Notificacao` + `Compartilhamento` + sino no header +
  aceitar/recusar.
- **Fase E — Visibilidade por campanha**: `CampanhaInimigo` + seletor no narrador + leitura
  do membro (níveis; campo a campo depois).
- **Fase F — Evolução**: NPCs/itens/mapas na área de recursos; co-narração (se um dia).

### Fase A — ✅ implementada em 07/08/2026

Implementada na plataforma (commit a seguir):

- Migration `inimigo_origem_campanha`: `Inimigo.origemCampanhaId String?` (+ FK `Campanha` `onDelete: SetNull`, index).
- Router: `createMinion` aceita `origemCampanhaId` opcional (valida narrador); novo `createFromBase` (copia de `InimigoBase` — semântica de snapshot); `list.meus` retorna `origemCampanhaId`.
- Rota `/recursos`: componente `RecursosNarrador` (migrado de `InimigoBiblioteca`, rota `/inimigos` extinta); form extraído em `InimigoBlocoForm` compartilhado. Entrada no `UserMenu` ("Recursos do narrador", ícone `Layers`).
- Seção `CampanhaInimigos` na campanha: chip "Desta campanha"/"Todos"; criar com `origemCampanhaId`; "Adicionar do catálogo" (copia de padrão); "Adicionar à batalha" (preset para AMEAÇA sem queda).
- Link do board: "gerenciar recursos" → `/recursos`.
- DECISIONS.md: decisão 039.

### Fase B — ✅ implementada em 07/08/2026

Implementada em ambos os repos:

- Sistema: `sistema-base/criaturas/criaturas-genericas.md` (6 criaturas no formato de tabela do kit, Anexo A); `exportar_catalogo.py` multisource (`FONTE_CRIATURAS_BASE`, `parse_criaturas_base`, campo `origem`). Catalogo: 14 → 20 inimigos.
- Plataforma: migration `inimigo_base_origem` (enum `InimigoOrigem`, `origem` default CENARIO, `cenarioNumero`/`cenarioTitulo` nullable); seed + router + UI adaptados para `origem` (grupos Sistema base/Cenário em recursos-narrador, batalha-board e campanha-inimigos).
- Manual: `/manual/narrador/bestiario` — modulo `bestiario.ts` lê do banco (server component público, regra 009); agrupado por origem. Card "Manual do Narrador" em `/manual` com link.
- DECISIONS.md: decisão 040.

### Fase C — ✅ implementada em 07/08/2026

Implementada na plataforma (commit a seguir):

- Migration: `slugCompartilhamento @unique`, `linkAtivo`, `compartilhadoEm` em `Inimigo`.
- Router: `shareLink` (gera slug do nome ou manual), `deactivateLink` (desativa sem apagar), `getShared` (busca por slug ativo, publico), `copyShared` (copia para o usuario logado, bloqueia proprio).
- UI: `ShareDialog` (gerar/copiar/desativar/reativar link em cada recurso) + pagina `/recursos/compartilhado/[slug]` (`SharedInimigo`).
- DECISIONS.md: decisão 041.

## 8. Decisões — respostas do André (07/08) e status

| # | Pergunta | Resposta / status |
|---|---|---|
| 1 | Nome da área | **"Recursos do narrador"** ✓ |
| 2 | Criaturas genéricas | **Proposta minha primeiro** — anexo A; revisão depois ✓ |
| 3 | Compartilhamento | **Dois fluxos**: e-mail (notificação + pendente + aceitar/recusar) e link (gerenciável: ativar/desativar) ✓ — seções 5.1/5.2 |
| 4 | "Inimigos da campanha" | **✓ Decidido (07/08)**: mostrar todos com chip de filtro "Desta campanha" (padrão "Todos"); coluna `origemCampanhaId` para o filtro. |
| 5 | Membro vê o quê | Narrador gerencia **recurso e campos**; padrão **escondido** ✓ — seção 5.3 (níveis; campo a campo na evolução) |
| 6 | Campanha × cenário | **Manter livre**; o narrador pode criar cenários próprios, usar recursos de cenários prontos ou criar **personalizados para cenário pronto** (tag `cenarioNumero/cenarioTitulo` em `Inimigo` — só aparecem para ele) ✓ |
| 7 | Rota | **`/recursos`** ✓ |

## 9. O que NÃO muda

- **Regra 009** (contrato = única entrada de regra) — padrão continua no `catalogo.json`.
- **Snapshot da batalha** (decisões 011/013) — `Combatente` não ganha FK; copiar é a
  semântica de compartilhar.
- **Header** — inimigos ficam fora; Campanhas/Personagens/Manual permanecem.
- **Validação e forms atuais** de inimigo — mudam de casa, não de contrato.
- **`campanha.cenario`** — continua texto livre.

---

## Anexo A — Proposta de criaturas genéricas (sistema base)

Primeiro lote de **ameaças genéricas** para `sistema-base/criaturas/`, no padrão do bloco do
guia do narrador (PA, arma (dano), custo, alcance, red. dano, tática) e com tier de queda
no mesmo espírito dos playtests (proposta, regra não fechada — `proposta: true` no
contrato). Escolhidas para cobrir funções comuns de mesa: predador, humano bandido,
guarda, bruto e chefe. **Tudo sujeito a revisão.**

| Criatura | Tier | Queda | PA | Arma | Dano | Custo PA | Alcance | Red. dano | Tática |
|---|---|---|---|---|---|---|---|---|---|
| Lobo da estepe | fraco | 10 | 8 | Mordida | 1d4 | 2 | 1 m | — | Tenta flanquear; se tomar dano total ≥ 10, recua e busca presa mais fácil |
| Salteador | médio | 20 | 10 | Faca (leve) ou adaga | 1d4 / 1d6 | 2 / 3 | 1 m | — | Avança em bando de 2–3; mira em quem está longe do grupo |
| Miliciano de caravana | médio | 20 | 10 | Lança ou espada curta | 1d6 | 3 | 1–2 m | −1 tronco (gambeson) | Segura a linha e pede reforço; cai para trás se perder o colega |
| Bruto mercenário | forte | 30 | 12 | Maça grande | 1d8 | 4 | 1 m | −1 tronco (couraça) | Fecha o espaço e tenta derrubar; ignora golpes de 1d4 |
| Capataz | chefe | chefe — 4 regiões de 20 | 12 | Chicote + faca | 1d4 | 2 | 2 m | −1 tronco (couro pesado) | Comanda os minions; entra no combate só depois que eles caem; grita ordens |
| Predador noturno | especial | — | 14 | Garras (2x) | 1d4 + 1d4 | 2 + 2 | 1 m | — | Ataca das sombras; na primeira rolagem de iniciativa surpreendida, +1d4 de dano no primeiro golpe |

Observações do anexo:

- Redação em padrão de tática curta, igual aos blocos do kit.
- Red. dano segue o formato documentado em `playtest/cenarios/inimigos-do-kit.md` (`—`,
  `−N <regiões>`).
- Se aprovado, os arquivos nascem em `sistema-base/criaturas/` (um por criatura ou um
  `criaturas-genéricas.md` consolidado — decisão de escrita), e o `exportar_catalogo.py`
  ganha essa fonte com `origem: sistema-base`.
- "Capataz" e "Predador noturno" validam o tratamento de chefe/especial fora dos 6 cenários
  do kit (hoje o contrato só tem esse caso dentro de cenário).
