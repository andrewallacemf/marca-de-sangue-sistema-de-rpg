---
data: 2026-07-19
pessoa: andre (decisões do grupo)
ferramenta: claude-cowork
objetivo: estrutura de arquétipos genéricos no sistema-base (antes dos cenários)
arquivos-alterados:
  - sistema-base/arquetipos/00-como-funcionam.md (novo)
  - sistema-base/arquetipos/01-arquetipos-genericos.md (novo)
  - sistema-base/criacao-de-personagem/01-passo-a-passo.md
  - playtest/geracao-pdf/gerar_manual_pdf.py
  - INDICE.md, PENDENCIAS.md
---

# Sessão: arquétipos genéricos (núcleo)

## Prompts dados

> "Vamos pra fase D, mas eu queria primeiro uma estrutura de arquétipos genéricos sem ser de
> sistema nenhum, pra ficar no sistema base. Depois as coisas dos cenários."

## O que foi feito

- **Framework de arquétipos** em `sistema-base/arquetipos/00-como-funcionam.md`: o que é
  (caminho de build **opcional**, não trava nada), a **estrutura padrão** (atributo primário +
  secundário; sugestões de maestrias/técnicas/aspectos/habilidades; descrição), as **habilidades
  de caminho** (pré-requisito de ≥ 2 habilidades do caminho — ideia do Daniel) e a relação
  genérico (núcleo) × de cenário.
- **8 arquétipos genéricos** (universais, sem tema) em `01-arquetipos-genericos.md`: Guerreiro,
  Baluarte, Duelista, Atirador, Assassino (usa Furtividade), Estrategista, Curandeiro, Líder
  (usa Conflito social). Cobrem os 4 atributos como primário.
- Ligados na criação de personagem, no INDICE e incluídos no **PDF do manual base** (rodado e
  verificado). `PENDENCIAS` atualizada (estrutura feita; falta os arquétipos de cenário + suporte
  na ficha).

## Decisões tomadas

- Arquétipos genéricos ficam no **núcleo**; cenários adicionam os seus (dō do Mukashi) dando
  flavor aos genéricos + próprios.

## Pendências / próximo

- **Fase D**: encaixar os mundos; no **Mukashi**, criar os *dō* (nome/flavor sobre os genéricos +
  próprios), a magia e apontar as armas nas famílias.
