---
data: 2026-07-11
pessoa: andre
ferramenta: claude-cowork
objetivo: aplicar as revisões do livro base das conversas de 14h20/14h49 (elevação, terreno, aptidão refinada, mecânica alternativa) + padronizações e auditoria de terminologia
arquivos-alterados:
  - notas-de-design/decisoes/2026-07-11-revisao-testes-aptidoes-fadiga.md (novo)
  - notas-de-design/auditoria-de-terminologia.md (novo)
  - notas-de-design/transcricoes/ (2 novas transcrições)
  - sistema-base/conceitos/01-testes-e-contratestes.md, 04-aptidoes.md, 05-habilidades.md, 08-fadiga.md, 00-indice.md
  - sistema-base/conceitos/09-mecanica-alternativa-habilidades-e-fadiga.md (novo, 🧪)
  - sistema-base/ (7 arquivos: padronização mestre→narrador, 22 substituições)
  - INDICE.md, PLANO-DE-MELHORIAS.md, PENDENCIAS.md
---

# Sessão: revisão do livro base (testes, terreno, aptidões, fadiga)

## Prompts dados

> A gente ainda não vai trabalhar na fase dois. A gente vai passar por todo um processo
> de revisar uma série de mecânicas da versão base do sistema antes de começar a olhar
> para os módulos específicos e cenários. Vou te enviar mais duas transcrições de
> conversas que eu estava tendo com o Daniel sobre as revisões que a gente está fazendo
> dos conceitos e mecânicas do livro base.

Anexos: transcrições de 11/07 14h20 (testes, ambiente/terreno, elevação, modificadores
inversos, aptidão) e 14h49 (mecânica alternativa habilidades × fadiga).

## O que foi feito

- **Fase 2 formalmente adiada** no plano; nova seção "Revisão do livro base — EM
  ANDAMENTO" como prioridade atual.
- Decisões registradas e aplicadas: ambiente/terreno **contextual** com 2 tipos de
  efeito coexistentes (vantagem/desvantagem × efeitos próprios, ex. terreno difícil
  dobra PA); regra fechada de **Elevação** (≥1 m; à distância de cima = vantagem; corpo
  a corpo de cima = normal; de baixo = desvantagem); foreshadowing da janela de aptidões
  nos modificadores inversos; **aptidão: resultado mantido** (vale o valor que beneficia
  quem usou, re-rolando o próprio dado ou o do oponente; fila de re-rolagens; dever do
  narrador; nunca em dados de dano).
- 🧪 **Mecânica alternativa em avaliação** documentada sem substituir a vigente
  (conceitos/09): habilidades por nível com custo em fadiga, limiar livre, cansaço × dano.
- Padronizações: **narrador** (22 substituições em 7 arquivos + resíduos), dados com
  `d` minúsculo; exemplo do lanceiro Heitor ajustado à regra de elevação (virou arremesso).
- **Auditoria de terminologia** entregue (18 achados de termos + 13 de grafia), incluindo
  2 achados graves: custo do PA extra divergente (7 × 5 Exp.) e estados "desabilitado/
  impedido" sem definição. Tudo no PENDENCIAS para decisão do grupo.
- INDICE.md atualizado (Elevação, Terreno difícil, mecânica alternativa + novas menções).

## Decisões tomadas

Pela IA (revisáveis): `d` minúsculo como padrão de grafia de dados; exemplo do Heitor
reescrito como ataque à distância para cumprir a regra de elevação.

## Pendências criadas

5 novas linhas no PENDENCIAS (auditoria, PA extra 7×5, estados indefinidos, playtest da
alternativa) + continuação da revisão do livro base pelo grupo.

## Observações

O protocolo de análise de impacto funcionou: o refinamento da aptidão foi checado contra
a cadeia de desempate (compatível) e o exemplo conflitante com a elevação foi detectado
pelo agente e corrigido em vez de passar despercebido.
