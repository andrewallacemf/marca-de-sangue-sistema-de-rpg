# 🗺️ Plano de melhorias

*Consolidado a partir das reuniões de 11/07/2026 (mesa completa + conversas André & Daniel).
As decisões e seus porquês estão em
[notas-de-design/decisoes/2026-07-11-reunioes-de-mecanica.md](notas-de-design/decisoes/2026-07-11-reunioes-de-mecanica.md).
Este arquivo é o **roteiro de execução**: o que fazer, em que ordem, e o estado de cada item.*

**Estados:** `[ ]` a fazer · `[~]` em andamento · `[x]` feito · `⏸` aguardando decisão/playtest

---

## Lote 1 — Aplicar decisões fechadas na documentação

*Mudanças de regra já decididas pelo grupo. **Aplicado pela IA em 11/07/2026 — aguardando
revisão do grupo (diff no GitHub).***

- [x] 1.1 **Fadiga**: `conceitos/08-fadiga.md` reescrito com a regra decidida.
- [x] 1.2 **Conflito social**: 5 pts confirmado; exemplo proposto pela IA marcado
  `💡 PROPOSTA` para revisão.
- [x] 1.3 **Desvantagem natural**: documentada em `conceitos/01-testes-e-contratestes.md`.
- [x] 1.4 **Traços de técnica**: reestruturado em `conceitos/06-tracos.md` e
  `listas/tracos-base.md` (14 especializações migradas) — nome oficializado como
  **Técnicas** em 11/07.
- [x] 1.10 **Aptidão = re-rolagem** (ajuste pós-Lote 1): varredura completa — 8 menções
  da versão antiga (vantagem) corrigidas; desempate atualizado com a cadeia de aptidões.
- [x] 1.11 **Ambiente e terreno**: noção breve publicada no livro do jogador
  (`conceitos/01-testes-e-contratestes.md`, lista `💡 PROPOSTA`); detalhamento completo
  segue no Lote 5.2 (livro do narrador).
- [x] 1.5 **Reação**: mecânica adicionada em `conflitos/`; ataque de oportunidade consome reação.
- [x] 1.6 **Posicionamento**: só existe definido; esquecimento = desvantagem; definição
  automática pela última ação; costas mantidas.
- [x] 1.7 **Propriedades de armas**: cortante e contundente aplicados em
  `listas/equipamentos-base.md` — ⏸ perfurante pendente de revisão.
- [x] 1.8 **Novo traço**: Especialização em ataque desarmado adicionada — ⏸ custo em Exp. a definir.
- [x] 1.9 **Armadura**: regra de uso/registro consolidada em `listas/protecoes-base.md` —
  ⏸ tensão "reduz 1 de dano" × coluna "Redutor Dano 1–12" da tabela, a resolver.

## Lote 2 — Reestruturação em camadas (módulos e coleções) ✅ *(estrutura pronta em 11/07)*

- [x] 2.1 `modulos/` criado com README, `colecoes.md` e `_template-modulo/`.
- [x] 2.2 Manifesto definido: seção "Módulos utilizados" no README do cenário
  (template atualizado; Colapso já declara os módulos previstos).
- [x] 2.3 `CONVENCOES.md` (seção 10 + frontmatter `cenario: modulo` + `modulo:`),
  `AGENTS.md` (seção Camadas) e README raiz atualizados.
- [x] 2.4 Fase 2 da importação replanejada: Colapso = cenário enxuto (lore + radiação +
  exclusivos) + módulos `veiculos/`, `armas-de-fogo/`, `mutacoes/`.
- [x] 2.5 Candidatos mapeados (em `modulos/README.md` e `colecoes.md`): veículos, armas
  de fogo, mutações, armas exóticas (resgate v0.4.1), magia (futuro); coleção *armas*.
- [ ] 2.6 ⏸ Extração real dos módulos — acontece na **Fase 2 da importação** (próximo passo).

## Lote 2b — Processo e busca ✅ *(11/07)*

- [x] **Índice remissivo** (`INDICE.md`): 82 termos + 12 remissões, cobrindo o
  sistema-base; atualização obrigatória a cada edição (AGENTS.md regra 10, CONVENCOES §9,
  CHECKLIST passo 7).
- [x] **Protocolo de análise de impacto** (AGENTS.md): mudança de mecânica → mapear pelo
  índice → analisar interações → reportar efeitos colaterais com propostas ANTES de
  implementar.

## Lote 3 — Rebalanceamento experimental ⏸ (playtest antes de virar regra)

- [ ] 3.1 **Armas → dano variável**: IA redige a regra de conversão (fixo atual = máximo;
  d4–d12 e combinações; cortante/perfurante 1 dado; contundente 2 dados; arredondar
  para múltiplos de 5) → grupo aprova → IA aplica em `listas/equipamentos-base.md` →
  ajuste fino item a item.
- [ ] 3.2 **PA e movimento**: proposta numérica (PA iniciais 12–15; movimento máx.
  7–10 m/turno; custos ~2×: leve 2 / média 4 / pesada 6; redutor de PA de armadura revisto).
- [ ] 3.3 **Fadiga**: tabela de penalidade a cada 5 pontos (acompanhando o dobro).
- [ ] 3.4 **XP**: granularizar custos na mesma proporção.
- [ ] 3.5 **Marcar sessão de playtest** → só depois atualizar as listas oficiais.

## Lote 4 — Ferramentas de mesa

- [ ] 4.1 **`consulta-rapida.md`** ("escudo do mestre"): a tabela das tabelas — links
  diretos para ações e custos, danos de armas, condições, fadiga, etc.
- [ ] 4.2 **Ficha**: novo layout do bloco de proteções (armadura anotada 1× com locais);
  gerar próxima versão dos PDFs em `assets/fichas/`.
- [ ] 4.3 Cartinhas de arma: experimento de mesa do Daniel (não altera o repositório).

## Lote 5 — Depois da estruturação

- [ ] 5.1 **Arquétipos/presets**: genéricos no sistema-base (estilo GURPS) + específicos
  por cenário; IA cruza habilidades por sinergia e propõe.
- [ ] 5.2 **Livro do mestre**: regras de NPC (bucha/minion/chefe; fadiga assimétrica;
  dano com dado), construção de encontros, **mecânicas de terreno**, dicas de narração.
- [ ] 5.3 Pendências adiadas: aptidões (IA apresenta origem das duas versões), custo da
  magia (fase cenários), Experiência de Veículos (áudio do Gabriel), espécies/classes
  (fase Gaéria).

---

## Processo combinado para mudanças de regra com IA

1. IA **propõe** a regra/conversão em texto (ou em `notas-de-design/`).
2. Grupo **aprova** (mesa ou chat).
3. IA **aplica** em massa nos arquivos afetados.
4. Grupo faz **ajuste fino** item a item (cherry picking).
5. Tudo com commit pequeno + registro em `registro-ia/`.
