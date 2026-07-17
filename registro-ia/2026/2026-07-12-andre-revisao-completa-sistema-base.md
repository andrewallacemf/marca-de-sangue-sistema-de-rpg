---
data: 2026-07-12
pessoa: andre
ferramenta: claude-cowork
objetivo: revisão completa de consistência do sistema-base após o ciclo de rebalanceamento
arquivos-alterados:
  - notas-de-design/2026-07-12-revisao-completa-sistema-base.md (relatório, novo)
  - sistema-base/conflitos/02-acoes-em-conflito.md (custos de ataque 2/4/6)
  - sistema-base/conflitos/04-conflito-social.md (redutor de PA de armadura ignorado no social)
  - sistema-base/conceitos/00-indice.md (Manual base)
  - sistema-base/listas/equipamentos-base.md (armas improvisadas 2/3/4)
  - sistema-base/criacao-de-personagem/01-passo-a-passo.md (PA 10, PV 60, mão hábil)
  - PENDENCIAS.md
---

# Sessão: revisão completa do sistema-base

## Prompts dados

> Faz uma revisão completa do sistema base considerando as mudanças que fizemos.

## O que foi feito

Auditoria de consistência de todo o `sistema-base/` via 3 varreduras paralelas
(conceitos; conflitos+criação+progressão; listas), cruzando cada arquivo com o estado
atual das regras pós-rebalanceamento.

- **Núcleo consistente** — números-chave, categorias de traço, terminologia e grafias
  conferem; sem resíduos de 7 PA, mestre, carta, redutor 1–12.
- **5 correções objetivas aplicadas**: custos de ataque na escala antiga em
  02-acoes-em-conflito; "ignorando redutores de armadura" no social; "Manual básico" no
  índice; armas improvisadas incoerentes; e completude da criação de personagem
  (PA 10, PV 60, mão hábil).
- Relatório consolidado em `notas-de-design/2026-07-12-revisao-completa-sistema-base.md`.

## Decisões tomadas

Correções objetivas de consistência (sem mudar regra) — não exigiram decisão do grupo.
A regra do social (armadura não reduz PA num embate) preservou a intenção original.

## Pendências criadas / atualizadas

- Efeitos sobre o dano da arma agora que é dado: "metade do dano" + "dobra o dano"
  (Emboscador) — atualizada.
- Demais itens (habilidades de custo fixo, ações complexas vazias com "especialização",
  armas ⚠️, duplicações, Esmagar) seguem em PENDENCIAS para o grupo.

## Observações

Recomendação ao grupo: reconciliar a seção "consistência e redação (varredura de 12/07)"
do PENDENCIAS — vários itens já foram resolvidos pelas mudanças recentes.
