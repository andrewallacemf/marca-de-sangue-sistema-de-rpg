---
data: 2026-07-11
pessoa: andre
ferramenta: claude-cowork
objetivo: criar o índice remissivo com atualização obrigatória, o protocolo de análise de impacto e a estrutura de módulos/coleções (Lote 2)
arquivos-alterados:
  - INDICE.md (novo — 82 termos, 12 remissões)
  - AGENTS.md (regras 10 e 11 + protocolo de impacto + seção Camadas)
  - CONVENCOES.md (seções 9 e 10)
  - CHECKLIST.md (passo 7 — índice)
  - modulos/ (README, colecoes.md, _template-modulo/)
  - cenarios/_template-cenario/README.md e cenarios/colapso/README.md (manifesto "Módulos utilizados")
  - README.md, PLANO-DE-MELHORIAS.md
---

# Sessão: índice remissivo, análise de impacto e módulos

## Prompts dados

> Vamos dar um passo pra trás e olhar para a forma como nossa estrutura da documentação
> e processo de trabalho está funcionando. — Criar um sistema de indexação de conceitos
> e onde eles aparecem ao longo do manual, semelhante ao índice remissivo de um livro;
> garanta que toda modificação atualize o index obrigatoriamente. — Acrescente a
> necessidade de, ao modificar uma mecânica, verificar como a mudança interage com o
> restante das mecânicas; sempre que a IA identificar efeito colateral, inconsistência
> ou situação que exige atenção, deve retornar uma análise com contexto e propostas de
> solução, para o usuário refinar antes da implementação real. — Além disso, podemos
> seguir com o Lote 2.

## O que foi feito

1. **INDICE.md**: índice remissivo do sistema-base construído por varredura completa —
   82 termos ("define" + "aparece", com contexto) e 12 remissões de sinônimos/nomes
   antigos (ex.: Conhecimento → Técnica). Atualização obrigatória institucionalizada:
   AGENTS.md (regra 10), CONVENCOES.md (§9) e CHECKLIST (passo 7).
2. **Protocolo de análise de impacto** no AGENTS.md (regra 11 + seção própria): mapear
   pelo índice → analisar interações → se houver efeito colateral, PARAR e devolver
   análise com contexto e propostas antes de editar → implementar só após refino →
   atualizar todas as ocorrências + índice.
3. **Lote 2**: pasta `modulos/` (README com o conceito e as camadas, `colecoes.md`,
   `_template-modulo/`), manifesto "Módulos utilizados" no template de cenário e no
   Colapso, CONVENCOES §10 (frontmatter `cenario: modulo` + `modulo:`), AGENTS seção
   Camadas, README raiz. A extração real dos módulos acontece na Fase 2 da importação.

## Decisões tomadas

Escolhas de implementação da IA (revisáveis): índice na raiz em formato "define/aparece"
por letra; coleções como arquivo único (`colecoes.md`) em vez de pastas; frontmatter de
módulo com dois campos (`cenario: modulo` + `modulo: <nome>`).

## Pendências criadas

Nenhuma nova. Lote 2 estrutural concluído; item 2.6 (extração dos módulos) aguarda a
Fase 2 da importação.

## Observações

O protocolo de impacto formaliza o que já aconteceu na prática hoje (caso da aptidão ×
fila de habilidades, em que a verificação prévia achou conflito e voltou com propostas).
