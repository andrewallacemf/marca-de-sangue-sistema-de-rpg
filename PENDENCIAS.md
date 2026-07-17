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
| Daniel e Gabriel convidados no GitHub — **aguardando aceite** dos convites | [CONFIGURACAO-INICIAL.md](CONFIGURACAO-INICIAL.md) (passo 2) | Daniel + Gabriel | 2026-07-11 |

## Sistema-base — decisões de regra

*Detalhes das variantes em [notas-de-design/variantes-pendentes.md](notas-de-design/variantes-pendentes.md).*

| Pendência | Onde | Quem | Desde |
|-----------|------|------|-------|
| **Revisar o diff do Lote 1 + ajustes pós-Lote 1** (aplicados pela IA em 11/07): fadiga, desvantagem natural, reação, posicionamento, migração de 14 especializações → "Técnicas", aptidão corrigida para rerrolagem em 8 lugares, exemplo do conflito social e lista de ambiente/terreno propostos | [PLANO-DE-MELHORIAS.md](PLANO-DE-MELHORIAS.md) (Lote 1) | grupo | 2026-07-11 |
| Discutir **com o Gabriel** a extensão da variante: fadiga em contratestes (+ ação de descansar em batalha, limiar maior) | [conceitos/09-mecanica-alternativa-habilidades-e-fadiga.md](sistema-base/conceitos/09-mecanica-alternativa-habilidades-e-fadiga.md) | grupo | 2026-07-11 |
| Agendar discussão própria sobre **durabilidade** (armas × armaduras): IA localizou a regra base antiga (perde 1 ponto por acerto/disparo; 0 = destruída), valores da v0.4.1 para escudos/armaduras e a escala de 5 níveis das armas de fogo do Colapso | [listas/equipamentos-base.md](sistema-base/listas/equipamentos-base.md) | grupo | 2026-07-11 |
| Criação de personagem: como cenários encaixam espécies/classes (variante nº 7) — **adiado para a fase Gaéria** | [criacao-de-personagem/01-passo-a-passo.md](sistema-base/criacao-de-personagem/01-passo-a-passo.md) | grupo | 2026-07-11 |
| **Rebalanceamento de PA aplicado em 12/07** (10 PA inicial; ataques 2/4/6; teto de movimento 7 m; fadiga até 50 com −1/5; piso 3; armaduras com redutor de PA por tipo cumulativo) — **playtest** para validar os números | [notas-de-design/decisoes/2026-07-12-rebalanceamento-pa-analise.md](notas-de-design/decisoes/2026-07-12-rebalanceamento-pa-analise.md) | grupo | 2026-07-12 |
| **Revisão ampla de design das habilidades** (escopo B, lista por lista): efeitos, progressões, custos de compra em exp. e clareza — por **propostas** para o grupo aprovar. Custos fixos de PA já reescalados e Esmagar corrigido em 12/07 | [listas/](sistema-base/listas/) | IA + grupo | 2026-07-12 |
| **Armaduras — peças e calibragem**: a mecânica (3 tipos genéricos; redutor dano/PA −1/−2/−3; montagem por peça+região) está definida. Falta o grupo detalhar **peças específicas** e **armaduras temáticas** (cenários/módulos) e **calibrar durabilidade/preço por peça** no playtest | [listas/protecoes-base.md](sistema-base/listas/protecoes-base.md) | grupo | 2026-07-12 |
| **Dano das armas pela matriz tamanho × tipo (12/07)**: revisar arma por arma e no playtest. Casos ⚠️: **lança montada** (perfurante pesada caiu de 10 → 1d8; conferir exceção de carga); **"Mangual pesado… Esp. de duas lâminas"** (nome contundente sem a propriedade `CONT.`); dano dos **itens improvisados** por tamanho | [listas/equipamentos-base.md](sistema-base/listas/equipamentos-base.md) | grupo | 2026-07-12 |
| Rebalanceamento de **XP**: proposta no plano, **aguardando playtest** | [PLANO-DE-MELHORIAS.md](PLANO-DE-MELHORIAS.md) (Lote 3) | grupo | 2026-07-11 |
| Ações complexas: 15 de 16 sem descrição (só "Saltar" está completa); "Derrubar" na tabela sem entrada | [listas/acoes-em-combate.md](sistema-base/listas/acoes-em-combate.md) | grupo | 2026-07-11 |
| Equipamentos: coluna **Durabilidade** das armas ainda vazia; **preços dos itens** com 💡 proposta da IA aguardando aprovação do grupo (inclui munição "Pedras" = grátis) | [listas/equipamentos-base.md](sistema-base/listas/equipamentos-base.md), [listas/itens-base.md](sistema-base/listas/itens-base.md) | grupo | 2026-07-12 |
| "Animar" (habilidade social) exige aliado **inconsciente** para recuperar aptidões — regra herdada que soa estranha; conferir | [listas/habilidades-base-sociais.md](sistema-base/listas/habilidades-base-sociais.md) | grupo | 2026-07-11 |
| Custo do PA extra unificado em **5 exp.** (progressão e lista de ações concordam); resta decidir se a regra fica centralizada em um só lugar (anti-duplicação) | [progressao/01-experiencia-e-evolucao.md](sistema-base/progressao/01-experiencia-e-evolucao.md), [listas/acoes-em-combate.md](sistema-base/listas/acoes-em-combate.md) | grupo | 2026-07-12 |
| 🧪 Playtest da variante **habilidades por nível × fadiga**: v1 redigida em `sistema-base/variantes/habilidades-por-fadiga/` (núcleo + extensões opcionais A e B); falta **ajustar os números propostos** (custo de fadiga por uso, limiar, penalidade) e decidir **promover ou descartar** | [sistema-base/variantes/habilidades-por-fadiga/](sistema-base/variantes/habilidades-por-fadiga/pendencias-e-testes.md) | grupo | 2026-07-12 |

## Sistema-base — consistência e redação (varredura de 12/07/2026)

*Achados de redação/consistência (não são regra nova). **Reconciliada em 12/07 após a
revisão completa** — os itens já resolvidos pelas mudanças recentes foram removidos.*

| Pendência | Onde | Quem | Desde |
|-----------|------|------|-------|
| Descanso: `02-acoes-em-conflito` (l.124) e `progressao/01` (l.72) ainda dizem "um descanso" recupera usos, sem restringir os **usos de habilidade** ao descanso longo | [conflitos/02-acoes-em-conflito.md](sistema-base/conflitos/02-acoes-em-conflito.md), [progressao/01-experiencia-e-evolucao.md](sistema-base/progressao/01-experiencia-e-evolucao.md) | grupo | 2026-07-12 |
| Definições que faltam: "1 PA por metro" não está declarado em `07-pontos-de-acao` (só em conflitos); "valor total de aptidão do Ágil" (desempate) sem definição; "durante um dia" como unidade de tempo indefinida; falta link entre "fundir habilidades" (03) e "aumentar o nível" (05) | [conceitos/07-pontos-de-acao.md](sistema-base/conceitos/07-pontos-de-acao.md), [conceitos/05-habilidades.md](sistema-base/conceitos/05-habilidades.md) | grupo | 2026-07-12 |
| Estados de **membro** (incapacitado/invalidado/desabilitado) aparecem aplicados ao personagem inteiro (conflito físico l.14, saúde l.14, progressão l.48); "nocauteado" usado sem definição (status oficial: inconsciente) | [conflitos/01-conflito-fisico.md](sistema-base/conflitos/01-conflito-fisico.md), [conflitos/03-saude-e-protecao.md](sistema-base/conflitos/03-saude-e-protecao.md) | grupo | 2026-07-12 |
| "Reação": resíduo em `01-conflito-fisico` (l.211, "outra reação simples") atrita com a regra de que o contrateste **não** consome a reação-recurso (1/rodada) | [conflitos/01-conflito-fisico.md](sistema-base/conflitos/01-conflito-fisico.md) | grupo | 2026-07-12 |
| Levantar guarda: o passo numerado fixa "2 PA" (a ressalva de 3 PA engajado vem depois); alterna "guarda"/"espaço de guarda"; "entrar em defensiva" (saúde) é um 3º nome para a ação | [conflitos/02-acoes-em-conflito.md](sistema-base/conflitos/02-acoes-em-conflito.md), [conflitos/03-saude-e-protecao.md](sistema-base/conflitos/03-saude-e-protecao.md) | grupo | 2026-07-12 |
| Conflito social: falta a regra que **liga o movimento na malha aos "pontos"** que definem a vitória (5 × personagens) | [conflitos/04-conflito-social.md](sistema-base/conflitos/04-conflito-social.md) | grupo | 2026-07-12 |
| Progressão: escala de dificuldade diverge do social ("fácil/moderado/difícil" × "simples/moderados/complexos"); "tarefa" com dois valores (especial 1 exp. × "Tarefa" 2 exp.) | [progressao/01-experiencia-e-evolucao.md](sistema-base/progressao/01-experiencia-e-evolucao.md), [conflitos/04-conflito-social.md](sistema-base/conflitos/04-conflito-social.md) | grupo | 2026-07-12 |
| Criação de personagem: a lista de materiais não oferece a opção **"Ficha completa"** (citada em `02-fichas`) | [criacao-de-personagem/01-passo-a-passo.md](sistema-base/criacao-de-personagem/01-passo-a-passo.md) | grupo | 2026-07-12 |
| Siglas de armas: **CURT./LONG.** (alcance) sem legenda; **DIST/LONG/ARRE** às vezes sem ponto em `habilidades-base-ageis`; placeholder "**X PA**" em "Alcance corpo a corpo" | [listas/equipamentos-base.md](sistema-base/listas/equipamentos-base.md), [listas/habilidades-base-ageis.md](sistema-base/listas/habilidades-base-ageis.md) | grupo | 2026-07-12 |
| Colisão do termo **"Consumir"**: a habilidade Consumir afeta **habilidades**, mas "aptidões consumidas" (Recompor/Animar) usa o mesmo verbo para aptidões | [listas/habilidades-base-mentais.md](sistema-base/listas/habilidades-base-mentais.md), [listas/habilidades-base-sociais.md](sistema-base/listas/habilidades-base-sociais.md) | grupo | 2026-07-12 |
| Listas: **Agarrar e Levantar duplicados** (ações básicas × complexas); a "Lista de Aspectos (em ordem alfabética)" **não** está alfabética; o aspecto "Alerta" trata "ataque descuidado" e "ataque de oportunidade" como se fossem coisas diferentes | [listas/acoes-em-combate.md](sistema-base/listas/acoes-em-combate.md), [listas/tracos-base.md](sistema-base/listas/tracos-base.md) | grupo | 2026-07-12 |
| Padronizar a nomenclatura de localização no corpo: "componente", "parte do corpo", "membro" e "região/local" usados para a mesma noção | [listas/habilidades-base-mentais.md](sistema-base/listas/habilidades-base-mentais.md), [listas/protecoes-base.md](sistema-base/listas/protecoes-base.md) | grupo | 2026-07-12 |
| Experimental social: faxina textual feita em 12/07 (escopo Social+Mental esclarecido, "Agilizar derrota" com **x**, "Sinergia" destruncada). **Resta**, atrelado ao fechamento da **malha de embate social**: alinhar campo × trilha nos efeitos e finalizar a escada de `exp.` da lista | [listas/habilidades-experimentais-sociais.md](sistema-base/listas/habilidades-experimentais-sociais.md), [conflitos/04-conflito-social.md](sistema-base/conflitos/04-conflito-social.md) | grupo | 2026-07-12 |
| Menores: nome do manual oscila "Manual base" × "manual básico"; typo "um apenas membro" (Auto cura); capitalização "Ataque de Oportunidade" × "ataque de oportunidade" | vários | grupo | 2026-07-12 |

## Cenários

| Pendência | Onde | Quem | Desde |
|-----------|------|------|-------|
| Custo da magia: saúde vs sangue vs fadiga (variante nº 4) — **adiado para a fase de cenários** | [notas-de-design/variantes-pendentes.md](notas-de-design/variantes-pendentes.md) | grupo | 2026-07-11 |
| "Experiência de Veículos" citada mas nunca definida (variante nº 6) — resolver na Fase 2 do Colapso; **pedir contexto ao Gabriel** | [cenarios/colapso/](cenarios/colapso/) | grupo | 2026-07-11 |
| Converter (ou remover) o catálogo de magias derivado de D&D 5e — entra como rascunho na Fase 3, não coberto pela licença CC | [cenarios/gaeria/](cenarios/gaeria/) | grupo | 2026-07-11 |
