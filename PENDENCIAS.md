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
| Contundente: definir **quantos** PA o acerto reduz (texto ficou genérico) | [listas/equipamentos-base.md](sistema-base/listas/equipamentos-base.md) | grupo | 2026-07-11 |
| Salto além do padrão: o antigo bônus da especialização de Saltar (aumentar o alcance para 10 m) foi removido da técnica — como técnica não concede vantagem, esse aumento precisa virar uma habilidade ou traço próprio | [listas/acoes-em-combate.md](sistema-base/listas/acoes-em-combate.md) | grupo | 2026-07-12 |
| Revisar as propriedades de armas **resgatadas** do material antigo (Projéteis, Agarrar, Arremesso, Deflexão) e aprovar as redações | [listas/equipamentos-base.md](sistema-base/listas/equipamentos-base.md) | grupo | 2026-07-11 |
| Propriedade **versátil (`VERS.`)** sem descrição em nenhuma fonte + sigla `PROT.` órfã (escudo de arremesso) — definir efeitos | [listas/equipamentos-base.md](sistema-base/listas/equipamentos-base.md) | grupo | 2026-07-11 |
| Aprovar a proposta **Firme / Firme aprimorado** (progressão da antiga Versatilidade condensada em 2 traços por requisito) | [listas/tracos-base.md](sistema-base/listas/tracos-base.md) | grupo | 2026-07-11 |
| Discutir **com o Gabriel** a extensão da variante: fadiga em contratestes (+ ação de descansar em batalha, limiar maior) | [conceitos/09-mecanica-alternativa-habilidades-e-fadiga.md](sistema-base/conceitos/09-mecanica-alternativa-habilidades-e-fadiga.md) | grupo | 2026-07-11 |
| Agendar discussão própria sobre **durabilidade** (armas × armaduras): IA localizou a regra base antiga (perde 1 ponto por acerto/disparo; 0 = destruída), valores da v0.4.1 para escudos/armaduras e a escala de 5 níveis das armas de fogo do Colapso | [listas/equipamentos-base.md](sistema-base/listas/equipamentos-base.md) | grupo | 2026-07-11 |
| Criação de personagem: como cenários encaixam espécies/classes (variante nº 7) — **adiado para a fase Gaéria** | [criacao-de-personagem/01-passo-a-passo.md](sistema-base/criacao-de-personagem/01-passo-a-passo.md) | grupo | 2026-07-11 |
| Rebalanceamento PA/movimento/XP/fadiga-5 e armas com dado: propostas prontas no plano, **aguardando playtest** | [PLANO-DE-MELHORIAS.md](PLANO-DE-MELHORIAS.md) (Lote 3) | grupo | 2026-07-11 |
| Conflito social: definir "influência necessária" (custo das ações) e o "valor necessário" da diferença de pontuação para vencer — ambos sem número no texto | [conflitos/04-conflito-social.md](sistema-base/conflitos/04-conflito-social.md) | grupo | 2026-07-12 |
| "Arremessos concentrados": havia duas versões quase idênticas no manual (2 vs 3 Exp.) | [listas/habilidades-base-ageis.md](sistema-base/listas/habilidades-base-ageis.md) | grupo | 2026-07-11 |
| Ações complexas: 15 de 16 sem descrição (só "Saltar" está completa); "Derrubar" na tabela sem entrada | [listas/acoes-em-combate.md](sistema-base/listas/acoes-em-combate.md) | grupo | 2026-07-11 |
| Equipamentos: coluna **Durabilidade** das armas ainda vazia; **preços dos itens** com 💡 proposta da IA aguardando aprovação do grupo (inclui munição "Pedras" = grátis) | [listas/equipamentos-base.md](sistema-base/listas/equipamentos-base.md), [listas/itens-base.md](sistema-base/listas/itens-base.md) | grupo | 2026-07-12 |
| Conferir 3 trocas de redação da varredura: "postura"→"campo da emoção" em Ressignificar/Dilema; "Animar" exige aliado **inconsciente** para recuperar aptidões (regra herdada soa estranha); frase "invalidado ou impedido"→"desabilitado" na saúde | [listas/habilidades-experimentais-sociais.md](sistema-base/listas/habilidades-experimentais-sociais.md), [conflitos/03-saude-e-protecao.md](sistema-base/conflitos/03-saude-e-protecao.md) | grupo | 2026-07-11 |
| Descanso curto: definir duração mínima e o número/forma das rolagens de recuperação | [conceitos/10-descanso.md](sistema-base/conceitos/10-descanso.md) | grupo | 2026-07-11 |
| Custo do PA extra unificado em **5 exp.** (progressão e lista de ações concordam); resta decidir se a regra fica centralizada em um só lugar (anti-duplicação) | [progressao/01-experiencia-e-evolucao.md](sistema-base/progressao/01-experiencia-e-evolucao.md), [listas/acoes-em-combate.md](sistema-base/listas/acoes-em-combate.md) | grupo | 2026-07-12 |
| Estados sem definição: "desabilitado"/"impedido" usados em requisitos de listas, mas a saúde só define "incapacitado" e "invalidado" | [conflitos/03-saude-e-protecao.md](sistema-base/conflitos/03-saude-e-protecao.md) | grupo | 2026-07-11 |
| 🧪 Playtest da variante **habilidades por nível × fadiga**: v1 redigida em `sistema-base/variantes/habilidades-por-fadiga/` (núcleo + extensões opcionais A e B); falta **ajustar os números propostos** (custo de fadiga por uso, limiar, penalidade) e decidir **promover ou descartar** | [sistema-base/variantes/habilidades-por-fadiga/](sistema-base/variantes/habilidades-por-fadiga/pendencias-e-testes.md) | grupo | 2026-07-12 |

## Sistema-base — consistência e redação (varredura de 12/07/2026)

*Achados de uma varredura da IA no estado pós-decisões. A maioria é redação/consistência (não regra nova); cada item precisa de conferência do grupo.*

| Pendência | Onde | Quem | Desde |
|-----------|------|------|-------|
| Terminar de aplicar a regra de descanso (curto = 1 aptidão de cada tipo; usos de habilidade só no longo): ainda há "qualquer/um descanso" recuperando usos em 03-caracteristicas (box da ficha), 04-aptidoes (nota de recuperação), 02-acoes-em-conflito e progressao/01; e a descrição do descanso curto em conceitos/00-indice está incompleta | [conceitos/03-caracteristicas.md](sistema-base/conceitos/03-caracteristicas.md), [conceitos/04-aptidoes.md](sistema-base/conceitos/04-aptidoes.md) | grupo | 2026-07-12 |
| Definições que faltam nos conceitos: custo de PA por espaço de locomoção (só há o teto de 10 PA); "gatilho" (tem custo em PA, mas sem definição própria); "valor total de aptidão do Ágil" (desempate fora de combate); "durante um dia" (unidade de tempo indefinida); relação entre "fundir habilidades iguais" (03) e "aumentar o nível" (05) | [conceitos/07-pontos-de-acao.md](sistema-base/conceitos/07-pontos-de-acao.md), [conceitos/05-habilidades.md](sistema-base/conceitos/05-habilidades.md) | grupo | 2026-07-12 |
| Estados que são de **membro** (incapacitado/invalidado/desabilitado) aparecem aplicados ao personagem/adversário inteiro (conflito físico l.14, saúde l.14, progressão l.48); e "nocauteado" é usado sem definição (status oficial: inconsciente) — relacionado à pendência "estados sem definição" acima | [conflitos/01-conflito-fisico.md](sistema-base/conflitos/01-conflito-fisico.md), [conflitos/03-saude-e-protecao.md](sistema-base/conflitos/03-saude-e-protecao.md) | grupo | 2026-07-12 |
| Saúde e proteção se contradiz sobre o redutor de armadura: "aplicado em todos os membros" (l.18) × "reduz na região protegida", com durabilidade por local (l.48) | [conflitos/03-saude-e-protecao.md](sistema-base/conflitos/03-saude-e-protecao.md) | grupo | 2026-07-12 |
| "Reação": o contrateste defensivo é chamado de "reação" no conflito físico, mas as ações dizem que contrateste **não** consome a reação-recurso (1/rodada) — alinhar o que conta como reação | [conflitos/01-conflito-fisico.md](sistema-base/conflitos/01-conflito-fisico.md), [conflitos/02-acoes-em-conflito.md](sistema-base/conflitos/02-acoes-em-conflito.md) | grupo | 2026-07-12 |
| Levantar guarda: o passo numerado fixa "2 PA" sem a ressalva do caso engajado (3 PA), que vem depois; alterna "guarda"/"espaço de guarda"; e "entrar em defensiva" (saúde) é um 3º nome para a mesma ação | [conflitos/02-acoes-em-conflito.md](sistema-base/conflitos/02-acoes-em-conflito.md), [conflitos/03-saude-e-protecao.md](sistema-base/conflitos/03-saude-e-protecao.md) | grupo | 2026-07-12 |
| Conflito social: as ações movem o alvo na malha, mas não há regra ligando o movimento aos "pontos" que definem a vitória (5 × personagens); e o texto manda ignorar "redutores de armadura" sobre PA, que não existem (armadura reduz dano, não PA) | [conflitos/04-conflito-social.md](sistema-base/conflitos/04-conflito-social.md) | grupo | 2026-07-12 |
| Progressão: a escala de dificuldade do conflito diverge do social ("fácil/moderado/difícil" × "simples/moderados/complexos"); e "tarefa" é usada com dois valores (tarefas especiais 1 exp. × "Tarefa" 2 exp.) | [progressao/01-experiencia-e-evolucao.md](sistema-base/progressao/01-experiencia-e-evolucao.md), [conflitos/04-conflito-social.md](sistema-base/conflitos/04-conflito-social.md) | grupo | 2026-07-12 |
| Criação de personagem não cobre: escolha da **mão hábil** (citada em 02-acoes como feita na criação) nem os valores iniciais de PA (7) e PV (60); e não menciona a opção "Ficha completa" | [criacao-de-personagem/01-passo-a-passo.md](sistema-base/criacao-de-personagem/01-passo-a-passo.md) | grupo | 2026-07-12 |
| Siglas/placeholders de armas: **CURT.**, **LONG.** e **DIST** usadas sem definição (DIST/LONG/ARRE às vezes sem ponto); **Deflexão (DEFL.)** sem nenhum item que a use, enquanto o escudo de arremesso segue com a sigla antiga **PROT.**; custo "**X PA**" placeholder em "Alcance corpo a corpo" | [listas/equipamentos-base.md](sistema-base/listas/equipamentos-base.md), [listas/habilidades-base-ageis.md](sistema-base/listas/habilidades-base-ageis.md) | grupo | 2026-07-12 |
| "Aptidões consumidas" (recuperadas por Recompor/Animar) não têm origem definida — a habilidade "Consumir" atinge **habilidades**, não aptidões | [listas/habilidades-base-mentais.md](sistema-base/listas/habilidades-base-mentais.md), [listas/habilidades-base-sociais.md](sistema-base/listas/habilidades-base-sociais.md) | grupo | 2026-07-12 |
| Estrutura das listas: Agarrar e Levantar aparecem duplicados nas tabelas de ações (unidade "por tentativa" × "por ação"); a "Lista de Aspectos (em ordem alfabética)" não está em ordem alfabética; o aspecto "Alerta" chama o gatilho de "ataque descuidado" e de "ataque de oportunidade" sem dizer que é o mesmo | [listas/acoes-em-combate.md](sistema-base/listas/acoes-em-combate.md), [listas/tracos-base.md](sistema-base/listas/tracos-base.md) | grupo | 2026-07-12 |
| Padronizar a nomenclatura de localização no corpo: "componente", "parte do corpo", "membro" e "região/local" são usados para a mesma noção | [listas/habilidades-base-mentais.md](sistema-base/listas/habilidades-base-mentais.md), [listas/protecoes-base.md](sistema-base/listas/protecoes-base.md) | grupo | 2026-07-12 |
| Revisar o arquivo experimental social: contém entradas de atributo **Mental** (apesar do título "sociais"); "Agilizar derrota" sem a variável "x" da progressão; "Sinergia" com descrição truncada; mistura "campo"/"trilha" | [listas/habilidades-experimentais-sociais.md](sistema-base/listas/habilidades-experimentais-sociais.md) | grupo | 2026-07-12 |
| Menores: nome do manual oscila "Manual base" × "Manual básico"; typo "um apenas membro" (Auto cura); tags de 04-conflito-social só listam "argumentar"; capitalização "Ataque de Oportunidade" × "ataque de oportunidade"; Rede/Kusarigama com custo "3/4 PA" sem a propriedade VERS. | vários | grupo | 2026-07-12 |

## Cenários

| Pendência | Onde | Quem | Desde |
|-----------|------|------|-------|
| Custo da magia: saúde vs sangue vs fadiga (variante nº 4) — **adiado para a fase de cenários** | [notas-de-design/variantes-pendentes.md](notas-de-design/variantes-pendentes.md) | grupo | 2026-07-11 |
| "Experiência de Veículos" citada mas nunca definida (variante nº 6) — resolver na Fase 2 do Colapso; **pedir contexto ao Gabriel** | [cenarios/colapso/](cenarios/colapso/) | grupo | 2026-07-11 |
| Converter (ou remover) o catálogo de magias derivado de D&D 5e — entra como rascunho na Fase 3, não coberto pela licença CC | [cenarios/gaeria/](cenarios/gaeria/) | grupo | 2026-07-11 |
