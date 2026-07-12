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
| 🧪 Testar em mesa a mecânica alternativa "habilidades por nível × fadiga" e decidir: promover ou descartar | [conceitos/09-mecanica-alternativa-habilidades-e-fadiga.md](sistema-base/conceitos/09-mecanica-alternativa-habilidades-e-fadiga.md) | grupo | 2026-07-11 |

## Cenários

| Pendência | Onde | Quem | Desde |
|-----------|------|------|-------|
| Custo da magia: saúde vs sangue vs fadiga (variante nº 4) — **adiado para a fase de cenários** | [notas-de-design/variantes-pendentes.md](notas-de-design/variantes-pendentes.md) | grupo | 2026-07-11 |
| "Experiência de Veículos" citada mas nunca definida (variante nº 6) — resolver na Fase 2 do Colapso; **pedir contexto ao Gabriel** | [cenarios/colapso/](cenarios/colapso/) | grupo | 2026-07-11 |
| Converter (ou remover) o catálogo de magias derivado de D&D 5e — entra como rascunho na Fase 3, não coberto pela licença CC | [cenarios/gaeria/](cenarios/gaeria/) | grupo | 2026-07-11 |
