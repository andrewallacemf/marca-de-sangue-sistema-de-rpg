---
data: 2026-08-09
pessoa: andre
ferramenta: codex
objetivo: oficializar a distribuição da cura no descanso e registrar a futura estrutura de condições
arquivos-alterados:
  - sistema-base/conceitos/09-descanso.md
  - sistema-base/conflitos/03-saude-e-protecao.md
  - sistema-base/criacao-de-personagem/01-passo-a-passo.md
  - sistema-base/conceitos/06-tracos.md
  - INDICE.md
  - PENDENCIAS.md
  - notas-de-design/pendencias-ficha-plataforma.md
  - notas-de-design/decisoes/2026-08-09-distribuicao-cura-descanso.md
  - documentacao/manual-da-plataforma/mapa-de-conteudo.yaml
  - documentacao/manual-da-plataforma/README.md
  - documentacao/manual-da-plataforma/propostas/2026-08-09-descanso-e-recuperacao.md
---

# Sessão: descanso e condições

## Prompts dados

> Ao realizar um descanso, o jogador joga o dado daquele descanso e pode distribuir os pontos de
> cura obtidos como quiser entre os membros do corpo.

> Estruturar futuramente a regra de efeitos temporários, chamados de condições, e depois
> implementá-la na plataforma.

## O que foi feito

A regra de descanso foi esclarecida para transformar a rolagem em um total distribuível entre
membros. Referências antigas a usos de habilidade foram corrigidas, a proposta editorial do
manual foi preparada e os impactos conhecidos na plataforma foram registrados.

## Decisões tomadas

- A cura obtida em qualquer descanso pode ser distribuída livremente entre vários membros.
- O campo genérico “Outros” de PA não será zerado automaticamente pelo descanso.

## Pendências criadas

- Corrigir o diálogo de descanso da plataforma para permitir distribuição múltipla.
- Definir a regra geral de condições e então criar sua estrutura na plataforma.

## Observações

O exemplo público usa resultado 5 distribuído como 3 + 1 + 1, preservando a soma correta.
