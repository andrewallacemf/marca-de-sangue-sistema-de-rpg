---
titulo: Pendências de ficha e plataforma
tipo: mecanica
cenario: base
status: rascunho
tags: [pendencias, ficha, plataforma, ux, backlog]
atualizado-em: 2026-07-19
---

# Pendências de ficha e plataforma (UX / produto)

Este arquivo é o **backlog da ficha digital e da plataforma** — separado de propósito das
pendências de **regra** (que ficam em [PENDENCIAS.md](../PENDENCIAS.md)).

> 🔁 **Protocolo combinado (19/07/2026):** toda ideia nova de melhoria de ficha/plataforma —
> encontrada por mim ou trazida pelo André — entra **aqui** como pendência, **sem ser
> trabalhada na hora**. O foco atual é a **revisão das regras**. Quando o André disser que é
> hora de mexer na ficha/plataforma, a gente vem para cá e executa.

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
- [ ] **PA total** com **destaque visual** maior (é o número que o jogador consulta o tempo todo).
- [ ] **Redutor de dano por membro** exibido no bloco de saúde (cabeça/tronco/braços/pernas), com
      base nas armaduras equipadas, para facilitar descontar o dano.
- [ ] **Resumo de equipamentos**: hoje aparece **depois** do detalhamento; revisar ordem e
      nomenclatura. "Equipamentos" deve abarcar **itens gerais** (vela, corda, etc.), não só
      armas/proteções.

## 3. Marcadores de combate (jogador)

- [ ] **Marcador de "reação usada"** na rodada.
- [ ] **Contador de munição** (flechas — madeira/ferro) e de **itens de unidade** (faixas,
      shuriken, consumíveis): marcar unidades gastas.
- [ ] **Marcador de status de furtividade** para o jogador: **escondido** e **valor guardado do
      dado de furtividade** (a "qualidade" do esconderijo).

## 4. Apoio de regras dentro do produto

- [ ] **Manual consultável dentro da ficha** (drawer/painel lateral) para ler a regra sem sair.
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
