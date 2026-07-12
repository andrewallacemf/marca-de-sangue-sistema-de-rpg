---
data: 2026-07-12
pessoa: andre
ferramenta: claude-cowork
objetivo: aplicar as decisões de regra da Seção 2 da revisão de consistência (contradições que exigiam decisão)
arquivos-alterados:
  - sistema-base/progressao/01-experiencia-e-evolucao.md
  - sistema-base/listas/acoes-em-combate.md
  - sistema-base/listas/habilidades-base-fisicas.md
  - sistema-base/listas/habilidades-base-mentais.md
  - sistema-base/listas/habilidades-base-gerais.md
  - sistema-base/listas/tracos-base.md
  - sistema-base/conflitos/01-conflito-fisico.md
  - sistema-base/conflitos/02-acoes-em-conflito.md
  - sistema-base/conflitos/04-conflito-social.md
  - sistema-base/conceitos/03-caracteristicas.md
  - sistema-base/conceitos/04-aptidoes.md
  - sistema-base/conceitos/05-habilidades.md
  - sistema-base/conceitos/10-descanso.md
  - INDICE.md
  - PENDENCIAS.md
---

# Sessão: decisões de regra da Seção 2 (contradições da revisão)

## Prompts dados

> agora vamos para "2. Contradições que exigem decisão (mudança de regra/número)"
> 2.1: O valor canonico deve ser 5
> 2.2: Agarrar deve ser 1 PA
> 2.3: Considerar que as informações da entrada detalhada são os canonicos
> 2.4: Pode seguir a proposta "A" que você indicou
> 2.5: Seguir o conceito de 3 espaços de frente e 5 de costas (avisar que as laterais são consideradas costas em malhas quadriculadas)
> 2.6: proposta aprovada
> 2.7: Confirmo a proposta. Mas pode detalhar que descanso curto recupera 1 aptidão de cada tipo, e descanso logo recupera tudo.
> 2.8: pode corrigir as inconsistências como achar melhor e marcar pra eu revisar sua correção proposta.

*(Contexto: as decisões seguem o relatório de revisão de consistência do sistema-base entregue nesta mesma data; a Seção 1 — editorial — foi aplicada antes.)*

## O que foi feito

- **2.1 — Custo do PA extra = `5 exp.`** (`progressao/01-experiencia-e-evolucao.md`): a progressão foi de 7/14/21/28/35 para **5/10/15/20/25**, ficando igual à lista de ações. O PA inicial (`7 PA`) não mudou.
- **2.2 — Agarrar = `1 PA`** (`listas/acoes-em-combate.md`): a tabela de ações básicas passou de `2 PA` para `1 PA`, batendo com a tabela de ações complexas.
- **2.3 — Entrada detalhada é canônica** (`habilidades-base-fisicas.md`, `-mentais.md`, `-gerais.md`): tabelas-resumo corrigidas para **Esmagar = `4 PA`**, **Investida = `3 exp.`**, **Recompor = `4 exp.`**; removidos os avisos ⚠️ de divergência e os marcadores ⚠️ do índice alfabético (+ a nota de rodapé que os explicava).
- **2.4 — Saltar vira Técnica pura (proposta A)** (`listas/acoes-em-combate.md`): "especialização" → "técnica"; o bônus que **aumentava o salto para 10 m foi removido** (técnica não concede vantagem, só anula a desvantagem natural). Deixei `⚠️ A DEFINIR` indicando que esse aumento de alcance deve virar habilidade/traço próprio.
- **2.5 — Postura/posicionamento na malha quadriculada = 3 frente / 5 costas** (`conflitos/01-conflito-fisico.md`, `02-acoes-em-conflito.md`): padronizado, com o aviso de que **os 2 espaços laterais contam como costas** na malha quadriculada (antes, em `02-acoes`, as laterais eram "neutras").
- **2.6 — Aspectos por rodada** (`listas/tracos-base.md`): Alerta, Reativo e Vigilante agora dizem "**Não ter usado seu ataque de oportunidade nesta rodada**" (antes "neste turno"/"não ter gasto"), alinhado à reação ser 1 por rodada.
- **2.7 — Recuperação no descanso** (`conceitos/10-descanso.md`, `04-aptidoes.md`, `03-caracteristicas.md`, `05-habilidades.md`): **descanso curto recupera 1 aptidão de cada tipo (uma por atributo)** e **não** recupera usos de habilidades; **descanso longo recupera tudo** (todas as aptidões e todos os usos de habilidades). As menções genéricas a "descanso" em Características e Habilidades foram alinhadas (habilidades só no longo).
- **2.8 — Conflito social** (`conflitos/04-conflito-social.md`): "duas ações principais" → "**três**"; no exemplo, "quarta rodada" → "**quarto turno**" (a duração da seção é contada em turnos); deixei `⚠️ A DEFINIR` (marcado para sua revisão) sobre os termos "influência necessária" e "valor necessário", que não têm número.
- **INDICE.md**: entradas de Aptidão e Descanso curto atualizadas para a nova regra de recuperação; ponteiro da categoria extinta "Especialização" ajustado (Saltar já alinhado).
- **PENDENCIAS.md**: removidas as pendências resolvidas (Saltar/especialização, aspectos turno×rodada, social "duas × três", divergências resumo×detalhe); a do PA extra virou nota de anti-duplicação; adicionadas as novas (salto de 10 m a re-homar; termos indefinidos do social).

## Decisões tomadas

- Custo do PA extra: **5 exp.** (canônico).
- Agarrar: **1 PA**.
- Em divergências resumo × detalhe, vale sempre a **entrada detalhada**.
- Saltar: **técnica pura** (proposta A); aumento de alcance sai da técnica e vira item próprio a definir.
- Postura defensiva na malha quadriculada: **3 frente / 5 costas**, laterais contam como **costas**.
- Requisito dos aspectos de ataque de oportunidade: medido em **rodada**.
- Descanso: **curto** recupera 1 aptidão de cada tipo (não recupera habilidades); **longo** recupera tudo.
- Conflito social: **três** ações; duração em **turnos**.

## Pendências criadas

- **Salto além do padrão** (10 m) precisa virar habilidade/traço próprio — `listas/acoes-em-combate.md` (⚠️ A DEFINIR no Saltar + linha no PENDENCIAS).
- **Conflito social**: definir "influência necessária" e o "valor necessário" da diferença para vencer — `conflitos/04-conflito-social.md` (⚠️ A DEFINIR + linha no PENDENCIAS), **marcado para revisão do André**.
- **Anti-duplicação do PA extra**: os dois locais concordam em 5 exp.; falta decidir se a regra fica centralizada em um só lugar.

## Pendências resolvidas

- Saltar citando categoria extinta com efeito extra.
- Aspectos Alerta/Reativo/Vigilante "turno" × "rodada".
- Conflito social "duas ações" × três.
- Divergências tabela-resumo × entrada detalhada (Esmagar/Investida/Recompor).
- Custo do PA extra divergente (7 × 5) — unificado em 5.

## Observações

- Escopo: aplicada **somente a Seção 2**. Os 13 achados novos da **Seção 4** do relatório seguem em aberto (André ainda não decidiu se entram no PENDENCIAS), assim como pendências pré-existentes (ex.: numeração da progressão de Esmagar, duração do descanso curto).
- **2.8 pede sua revisão**: confira a redação das correções do conflito social (contagem, turno/rodada e o aviso sobre os termos indefinidos).
- Ambiente: arquivos como *placeholders* de nuvem; trabalho feito com as ferramentas de edição (lado Windows), **sem** git. Continua valendo: **apagar `.git/index.lock` antes do próximo commit**.
- A fazer (André): conferir o diff no GitHub Desktop, commitar e sincronizar.

Sugestão de mensagem de commit:
`aplica decisoes de regra (secao 2): PA extra 5 exp, agarrar 1 PA, valores detalhados canonicos, saltar tecnica pura, postura 3-5 quadriculada, aspectos por rodada, descanso curto recupera 1 aptidao por tipo, conflito social`
