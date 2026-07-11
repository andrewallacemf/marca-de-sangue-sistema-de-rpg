---
data: 2026-07-11
pessoa: andre
ferramenta: claude-cowork
objetivo: aplicar 3 decisões pós-Lote 1 — nome "técnica", aptidão como re-rolagem (varredura completa) e noção de ambiente/terreno
arquivos-alterados:
  - notas-de-design/decisoes/2026-07-11-ajustes-pos-lote-1.md (novo)
  - sistema-base/conceitos/01-testes-e-contratestes.md, 03-caracteristicas.md, 04-aptidoes.md, 05-habilidades.md, 06-tracos.md, 00-indice.md
  - sistema-base/conflitos/03-saude-e-protecao.md
  - sistema-base/criacao-de-personagem/01-passo-a-passo.md
  - sistema-base/progressao/01-experiencia-e-evolucao.md
  - sistema-base/listas/tracos-base.md
  - PENDENCIAS.md, PLANO-DE-MELHORIAS.md, notas-de-design/variantes-pendentes.md
---

# Sessão: técnica, aptidão re-rolagem e ambiente/terreno

## Prompts dados

> Sobre o tipo de traço "conhecimento": vai ser oficializado como **"técnica"** (ex.:
> "técnica em natação"). — Detalhar condições de ambiente e terreno vai para o futuro
> livro do narrador, mas vale ter uma noção breve no livro do jogador com as situações
> mais comuns. — Tem lugares tratando a aptidão como na versão anterior (acréscimo de
> vantagem). A mecânica atual: o usuário **escolhe re-rolar o dado do teste ou do
> contrateste após saber o resultado**; o mestre indica sucesso/falha antes de narrar;
> no desempate, quem usou aptidão vence; se ambos usaram, vence quem usou mais; se
> igual, vale o padrão (contrateste). Revisar a documentação inteira para garantir que a
> aptidão é tratada assim em todos os lugares, direta ou indiretamente.

## O que foi feito

- Nova nota de decisões: `decisoes/2026-07-11-ajustes-pos-lote-1.md` (3 decisões).
- **Renome aplicado**: categoria e entradas "Conhecimento em X" → "Técnica em X" em
  conceitos, listas e requisitos de especializações.
- **Varredura da aptidão** (grep em todo o sistema-base): 8 menções na versão antiga
  corrigidas para a re-rolagem — incluindo o passo a passo do teste (aptidão agora se
  gasta APÓS o anúncio de sucesso/falha), o exemplo do Heitor, criação de personagem,
  fontes de defesa e o limite "1 carta de aptidão por ação" (removido). Desempate
  reescrito com a cadeia completa. "Sucesso automático fora de conflito" mantido.
- **Ambiente e terreno**: nova seção breve no livro do jogador com 8 situações comuns
  (lista marcada `💡 PROPOSTA (IA)`), detalhamento remetido ao livro do narrador.

## Decisões tomadas

Nenhuma pela IA. Uma incompatibilidade não-decidível foi marcada em vez de resolvida
(ver pendências).

## Pendências criadas

- Fila de habilidades fora de combate dizia "aptidões anunciadas antes da rolagem" —
  incompatível com a re-rolagem pós-resultado; grupo precisa definir (05-habilidades.md).
- Revisar a lista proposta de ambiente/terreno.
- Removida (resolvida): nome do traço de conhecimento → **técnica**.

## Observações

A varredura preservou menções neutras às duas versões e não tocou na regra específica de
iniciativa (que já usava re-rolagem por outro motivo).
