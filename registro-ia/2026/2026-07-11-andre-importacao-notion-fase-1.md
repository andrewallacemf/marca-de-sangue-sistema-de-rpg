---
data: 2026-07-11
pessoa: andre
ferramenta: claude-cowork
objetivo: analisar o export do Notion, definir a estrutura de organização e importar a Fase 1 (fundação + sistema-base)
arquivos-alterados:
  - LICENCA.md
  - historico-de-versoes.md
  - notas-de-design/ (README, variantes-pendentes, hipoteses-de-design)
  - cenarios/ (renomeados colapso, mukashi, rodentia; criados gaeria, peabiru, o-sindicato; READMEs reais)
  - sistema-base/00-introducao.md
  - sistema-base/conceitos/ (00-indice + 8 arquivos)
  - sistema-base/conflitos/ (4 arquivos)
  - sistema-base/criacao-de-personagem/ (2 arquivos)
  - sistema-base/progressao/ (1 arquivo)
  - sistema-base/listas/ (13 arquivos)
  - sistema-base/README.md
  - assets/fichas/ (3 PDFs) e assets/imagens/malha/ (12 PNGs)
  - CONVENCOES.md, README.md, PENDENCIAS.md
---

# Sessão: importação do Notion — análise e Fase 1

## Prompts dados

> Vou te mandar aqui a pasta que eu exportei do Notion com a versão que a gente tem do
> sistema atualmente. Mas eu não confio na estrutura que está ali hoje. Provavelmente vai
> ter algumas coisas que vão estar duplicadas, porque eu lembro que a gente tinha uma
> versão que estava separada em blocos e outra versão que estava tudo unificada para os
> jogadores poderem ler com mais facilidade. Vai ter coisas duplicadas, vai ter várias
> coisas que são contraditórias entre si, vai ter estruturas que vão estar bagunçadas.
> Então eu também queria avaliar como criar uma estrutura mais eficiente e organizada
> para todo o material que você vai receber.

Decisões colhidas em perguntas estruturadas:

- Material de mestre (campanhas, missões com segredos): **fora do repo**.
- Camada fantasia/D&D: **importar tudo como rascunho** (na Fase 3, em Gaéria).
- Contradições: **manual v1.1.0b vence**; cada contradição vira pendência para o grupo
  decidir caso a caso; variantes preservadas em notas-de-design.
- Importação **por fases**: Fase 1 = fundação + sistema-base (esta sessão); Fase 2 =
  Colapso; Fase 3 = demais cenários e resgates.

## O que foi feito

1. **Análise completa do export** (1.369 arquivos) com 4 agentes: inventário, comparação
   blocos × manual unificado, cenários e material antigo. Conclusões no
   `relatorio-importacao-notion.md` (fora do repo, na pasta mãe).
2. **Fundação:** LICENCA.md (CC BY-NC-SA + créditos), historico-de-versoes.md (Alpha
   1.0.0a → 1.1.0b), notas-de-design/ (7 variantes pendentes + hipóteses), cenários
   renomeados para os nomes reais (colapso, mukashi, rodentia) e criados gaeria, peabiru,
   o-sindicato; CONVENCOES.md atualizada com os novos valores de `cenario:`.
3. **Sistema-base completo** convertido do Manual básico v1.1.0b (fonte canônica) por 3
   agentes: introdução + 8 conceitos, 4 arquivos de conflitos, criação de personagem,
   progressão e 13 arquivos de listas. Artefatos do Notion removidos, duplicações
   internas eliminadas, inconsistências marcadas com `⚠️ A DEFINIR` (nunca resolvidas por
   conta própria).
4. **Assets:** 3 fichas oficiais (PDF v1.0) e 12 ilustrações de malha copiadas do export.
5. **PENDENCIAS.md** atualizado: 12 decisões de regra do sistema-base + 3 de cenários +
   fases 2 e 3 da importação.

## Decisões tomadas

- Manual básico v1.1.0b = fonte canônica; pasta "Construção" usada só para variantes e cenários.
- Listas de habilidades divididas por atributo (menos conflitos de edição).
- Nome das pastas de cenário = nomes reais dos mundos.
- Material antigo (v0.3.0/v0.4.0, livro obsoleto) não entra no repo; v0.4.1 tem itens a resgatar na Fase 3.

## Pendências criadas

Ver seções "Sistema-base — decisões de regra" e "Cenários" do [PENDENCIAS.md](../../PENDENCIAS.md)
(15 novas linhas) + Fases 2 e 3 da importação.

## Observações

O export bruto do Notion deve ser guardado como backup fora do repositório. As três
análises detalhadas dos agentes (frescor de versões, cenários, material antigo) estão
resumidas no relatório da pasta mãe.
