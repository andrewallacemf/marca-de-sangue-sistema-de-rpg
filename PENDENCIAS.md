# 📌 Pendências e decisões em aberto

Lista viva de tudo que **falta definir, escrever ou decidir** no projeto. É a primeira
parada para saber "no que dá pra ajudar?".

**Como funciona:**

- Toda marcação `> ⚠️ A DEFINIR:` deixada em um arquivo deve ganhar uma linha aqui,
  com link para o arquivo de origem.
- Resolveu uma pendência? Remova a marcação no arquivo de origem **e** a linha daqui,
  no mesmo commit.
- As IAs são instruídas (via [AGENTS.md](AGENTS.md)) a manter esta lista em dia
  automaticamente. Humanos também podem — é só editar.

---

## Projeto e organização

| Pendência | Onde | Quem | Desde |
|-----------|------|------|-------|
| Importação do Notion — Fase 2: cenário Colapso (mecânica veicular, mutações, condições, listas) + resgate do lore antigo (lugares, comunidades, gangues, clima) | [cenarios/colapso/](cenarios/colapso/) | IA + grupo | 2026-07-11 |
| Importação do Notion — Fase 3: Mukashi, Gaéria (incl. camada fantasia como rascunho), Peabiru; resgates da v0.4.1 (armaduras orientais, ~15 habilidades, traço Aproveitador) | [cenarios/](cenarios/) | IA + grupo | 2026-07-11 |
| Guardar o zip do export do Notion como backup permanente fora do repositório | — | André | 2026-07-11 |
| Convidar os demais colaboradores no GitHub (Daniel/danielm-jor já convidado em 2026-07-11, aguardando aceite; faltam os outros usernames) | [CONFIGURACAO-INICIAL.md](CONFIGURACAO-INICIAL.md) (passo 2) | André | 2026-07-11 |
| Definir canal de avisos do grupo e o "guardião do Git" | [CONFIGURACAO-INICIAL.md](CONFIGURACAO-INICIAL.md) (passo 4) | grupo | 2026-07-11 |

## Sistema-base — decisões de regra

*Detalhes das variantes em [notas-de-design/variantes-pendentes.md](notas-de-design/variantes-pendentes.md).*

| Pendência | Onde | Quem | Desde |
|-----------|------|------|-------|
| **Revisar o diff do Lote 1 + ajustes pós-Lote 1** (aplicados pela IA em 11/07): fadiga, desvantagem natural, reação, posicionamento, migração de 14 especializações → "Técnicas", aptidão corrigida para re-rolagem em 8 lugares, exemplo do conflito social e lista de ambiente/terreno propostos | [PLANO-DE-MELHORIAS.md](PLANO-DE-MELHORIAS.md) (Lote 1) | grupo | 2026-07-11 |
| Armadura: decisão diz "reduz 1 de dano", mas a tabela de proteções tem coluna "Redutor Dano" de 1–12 — alinhar regra × tabela | [listas/protecoes-base.md](sistema-base/listas/protecoes-base.md) | grupo | 2026-07-11 |
| Contundente: definir **quantos** PA o acerto reduz (texto ficou genérico) | [listas/equipamentos-base.md](sistema-base/listas/equipamentos-base.md) | grupo | 2026-07-11 |
| Definir custo em Exp. da nova "Especialização em ataque desarmado" | [listas/tracos-base.md](sistema-base/listas/tracos-base.md) | grupo | 2026-07-11 |
| "Saltar" (lista de ações) descreve especialização com efeito além de anular desvantagem — alinhar com a nova categoria Conhecimentos | [listas/acoes-em-combate.md](sistema-base/listas/acoes-em-combate.md) | grupo | 2026-07-11 |
| Revisar a propriedade **perfurante** das armas (cortante e contundente já decididos) | [listas/equipamentos-base.md](sistema-base/listas/equipamentos-base.md) | grupo | 2026-07-11 |
| Criação de personagem: como cenários encaixam espécies/classes (variante nº 7) — **adiado para a fase Gaéria** | [criacao-de-personagem/01-passo-a-passo.md](sistema-base/criacao-de-personagem/01-passo-a-passo.md) | grupo | 2026-07-11 |
| Rebalanceamento PA/movimento/XP/fadiga-5 e armas com dado: propostas prontas no plano, **aguardando playtest** | [PLANO-DE-MELHORIAS.md](PLANO-DE-MELHORIAS.md) (Lote 3) | grupo | 2026-07-11 |
| Conflito social: texto anuncia "duas ações principais" mas lista três | [conflitos/04-conflito-social.md](sistema-base/conflitos/04-conflito-social.md) | grupo | 2026-07-11 |
| "Arremessos concentrados": havia duas versões quase idênticas no manual (2 vs 3 Exp.) | [listas/habilidades-base-ageis.md](sistema-base/listas/habilidades-base-ageis.md) | grupo | 2026-07-11 |
| Divergências tabela-resumo × descrição: Esmagar (PA), Investida e Recompor (Exp.) | [listas/](sistema-base/listas/) | grupo | 2026-07-11 |
| Tabela de Aspectos: "Lépido" duplicado, "Versatilidade" sem descrição, 5 custos divergentes, 4 aspectos fora da tabela | [listas/tracos-base.md](sistema-base/listas/tracos-base.md) | grupo | 2026-07-11 |
| Ações complexas: 15 de 16 sem descrição (só "Saltar" está completa); "Derrubar" na tabela sem entrada | [listas/acoes-em-combate.md](sistema-base/listas/acoes-em-combate.md) | grupo | 2026-07-11 |
| Equipamentos: coluna Durabilidade vazia; itens sem preço e moeda inconsistente ("ouros" × "moedas") | [listas/equipamentos-base.md](sistema-base/listas/equipamentos-base.md), [listas/itens-base.md](sistema-base/listas/itens-base.md) | grupo | 2026-07-11 |
| **Auditoria de terminologia**: decidir as padronizações propostas (18 achados de termos + 13 de grafia — ex.: "conflito × combate × batalha", 5 grafias de Exp., malha emocional × social) | [notas-de-design/auditoria-de-terminologia.md](notas-de-design/auditoria-de-terminologia.md) | grupo | 2026-07-11 |
| **Regra duplicada com números divergentes**: custo do PA extra = 7 Exp. (progressão) × 5 Exp. (lista de ações) — achado da auditoria | [progressao/01-experiencia-e-evolucao.md](sistema-base/progressao/01-experiencia-e-evolucao.md), [listas/acoes-em-combate.md](sistema-base/listas/acoes-em-combate.md) | grupo | 2026-07-11 |
| Estados sem definição: "desabilitado"/"impedido" usados em requisitos de listas, mas a saúde só define "incapacitado" e "invalidado" | [conflitos/03-saude-e-protecao.md](sistema-base/conflitos/03-saude-e-protecao.md) | grupo | 2026-07-11 |
| 🧪 Testar em mesa a mecânica alternativa "habilidades por nível × fadiga" e decidir: promover ou descartar | [conceitos/09-mecanica-alternativa-habilidades-e-fadiga.md](sistema-base/conceitos/09-mecanica-alternativa-habilidades-e-fadiga.md) | grupo | 2026-07-11 |

## Cenários

| Pendência | Onde | Quem | Desde |
|-----------|------|------|-------|
| Custo da magia: saúde vs sangue vs fadiga (variante nº 4) — **adiado para a fase de cenários** | [notas-de-design/variantes-pendentes.md](notas-de-design/variantes-pendentes.md) | grupo | 2026-07-11 |
| "Experiência de Veículos" citada mas nunca definida (variante nº 6) — resolver na Fase 2 do Colapso; **pedir contexto ao Gabriel** | [cenarios/colapso/](cenarios/colapso/) | grupo | 2026-07-11 |
| Converter (ou remover) o catálogo de magias derivado de D&D 5e — entra como rascunho na Fase 3, não coberto pela licença CC | [cenarios/gaeria/](cenarios/gaeria/) | grupo | 2026-07-11 |
