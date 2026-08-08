---
data: 2026-08-08
pessoa: andre
ferramenta: claude-code
objetivo: resolver as tensões entre os dois repositórios identificadas na auditoria de 07/08 (protocolo de mudança de regra, ficha offline defasada, mesa com "usos" legados, contrato sem magias/veículos)
arquivos-alterados:
  - contrato/README.md
  - AGENTS.md
  - CHECKLIST.md
  - PENDENCIAS.md
  - notas-de-design/pendencias-ficha-plataforma.md
  - notas-de-design/2026-08-08-proposta-mesa-debita-pa-fadiga.md
  - ficha/src/ (port reverso das regras de 01/08 na ficha offline)
  - contrato/exportar_catalogo.py
  - contrato/catalogo.json
  - registro-ia/2026/2026-08-08-andre-protocolo-entre-repos-e-ficha.md
---

# Sessão: protocolo entre repos e atualização da ficha offline

## Prompts dados

Sessão orquestrada (vários agentes do Claude Code em paralelo, coordenados por um
script; o André revisa e faz o push). Pedidos principais, resumidos com fidelidade:

> Resolver as tensões entre os repositórios (sistema × plataforma) identificadas na
> auditoria de 07/08. Frente 1 — **protocolo entre repos**: no `contrato/README.md`,
> ampliar a noção de consumidor para além do `catalogo.json` (a engine da plataforma
> consome o TEXTO das regras; a ficha offline também) e criar o **checklist de mudança
> de regra** com o aviso à plataforma obrigatório NO MESMO commit (correção da falha de
> 01/08, quando a mudança de fadiga não avisou a plataforma); regra 14 no AGENTS.md;
> item "IRMÃO" no CHECKLIST.md; marcar a plataforma como consumidora afetada nas
> pendências de ameaça/tiers/ações complexas/fadiga; registrar no backlog de ficha e
> plataforma os avisos vindos da plataforma (decisões 046 e 048 de lá).

> Frente 2 — **ficha offline**: portar de volta as regras de 01/08 (fadiga máxima =
> total de PV, penalidade em passo de 10, sem modo de usos de habilidade), devolvendo
> o round-trip do `.mds.json` com a plataforma.

> Frente 3 — **mesa sem "usos"**: escrever a proposta da mesa que debita `PA` + fadiga
> ao usar habilidade (`notas-de-design/2026-08-08-proposta-mesa-debita-pa-fadiga.md`),
> substituindo o item obsoleto "Usos de habilidades na tabela".

> Frente 4 — **contrato**: exportar `magias` e `veiculos` no `catalogo.json` como
> proposta (dados marcados como não fechados), para a plataforma consumir quando
> houver modelo/tela.

## O que foi feito

- **Protocolo entre repos** (`contrato/README.md`): seções novas "Consumidores da regra
  (não só dos dados)" — engine da plataforma e ficha offline consomem o TEXTO das regras —
  e "Quando a REGRA muda (checklist de mudança de regra)", com 7 passos encadeados; o
  passo 3 (linha de aviso em `notas-de-design/pendencias-ficha-plataforma.md` no MESMO
  commit) é a correção da falha de 01/08. Rastreabilidade bidirecional virou regra.
- **AGENTS.md**: regra inegociável 14 (mudou mecânica que a plataforma executa → seguir
  o checklist; aviso no backlog obrigatório no mesmo commit). **CHECKLIST.md**: item 8
  "IRMÃO" no bloco DEPOIS (itens seguintes renumerados; segue em 1 página).
- **PENDENCIAS.md**: plataforma anotada como consumidora afetada nas pendências de
  validação de fadiga (penalidade e relação 1:1), nome "ameaça", presets fraco/médio/forte,
  tiers do kit e 17 ações complexas; a parte "ficha desatualizada" da pendência de 01/08
  foi marcada RESOLVIDA em 08/08/2026 (André/IA) — os PDFs continuam pendentes.
- **Backlog ficha/plataforma** (`notas-de-design/pendencias-ficha-plataforma.md`): registro
  da atualização da ficha offline (round-trip válido de novo); item obsoleto "Usos de
  habilidades na tabela" substituído pelo ponteiro para a proposta nova; seção 8 nova com
  os avisos de mudança vindos da plataforma (decisões 046 e 048 de lá).
- **Ficha offline** (`ficha/`): port reverso das regras de 01/08 — fadiga máxima = total
  de `PV`, penalidade em passo de 10, fim do modo de usos de habilidade.
- **Proposta nova**: `notas-de-design/2026-08-08-proposta-mesa-debita-pa-fadiga.md` —
  a mesa da plataforma passa a debitar `PA` + fadiga no uso de habilidade (a validar
  antes de implementar).
- **Contrato**: exportador passa a emitir as chaves `magias` e `veiculos` no
  `catalogo.json`, marcadas como proposta (regra não fechada).

## Decisões tomadas

- **Aviso à plataforma no MESMO commit é obrigatório** quando uma regra que ela executa
  muda (regra 14 do AGENTS.md + passo 3 do checklist do contrato). Não é opcional nem
  "pra depois".
- **Rastreabilidade bidirecional virou regra** (era só prática): item de backlog cita a
  decisão da plataforma que o fechou, e vice-versa.
- **O protocolo tem direção inversa**: mudança da plataforma que afeta quem usa o sistema
  ganha linha de aviso no backlog daqui (estreado com as decisões 046 e 048 de lá).
- **A ficha offline continua legado** (a plataforma é o destino), mas atualizada para as
  regras de 01/08 — defasagem futura deve ser registrada explicitamente se não for
  corrigida.

## Pendências criadas

- Nenhuma pendência de regra nova. As existentes ganharam a anotação de **consumidor
  afetado (plataforma)**; a parte "ficha desatualizada" da pendência de 01/08 foi
  resolvida (PDFs seguem pendentes, só antes do próximo playtest).
- A proposta da mesa que debita `PA` + fadiga fica **a validar** antes de implementar
  na plataforma (item correspondente no backlog de ficha/plataforma).

## Observações

- Sessão dividida entre agentes com escopos separados; o commit é único, feito pelo
  orquestrador, e o push é do André (regra 6 do AGENTS.md).
- As chaves novas do contrato (`magias`, `veiculos`) só serão consumidas pela plataforma
  quando houver modelo/tela — já anotado no `docs/PENDENCIAS.md` de lá.
