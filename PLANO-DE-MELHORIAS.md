# 🗺️ Plano de melhorias

*Consolidado a partir das reuniões de 11/07/2026 (mesa completa + conversas André & Daniel).
As decisões e seus porquês estão em
[notas-de-design/decisoes/2026-07-11-reunioes-de-mecanica.md](notas-de-design/decisoes/2026-07-11-reunioes-de-mecanica.md).
Este arquivo é o **roteiro de execução**: o que fazer, em que ordem, e o estado de cada item.*

**Estados:** `[ ]` a fazer · `[~]` em andamento · `[x]` feito · `⏸` aguardando decisão/playtest

---

## Lote 1 — Aplicar decisões fechadas na documentação

*Mudanças de regra já decididas pelo grupo. IA pode executar; grupo revisa o diff.*

- [ ] 1.1 **Fadiga**: substituir o stub de `conceitos/08-fadiga.md` pela regra decidida
  (fadiga por dano; gasto voluntário 2 fadiga = 1 PA; teto = PA total; reset no descanso;
  penalidades por acúmulo), puxando o que já está espalhado em outras páginas.
- [ ] 1.2 **Conflito social**: manter 5 pts × personagens; IA propõe os exemplos que
  faltavam ("???"), grupo revisa.
- [ ] 1.3 **Desvantagem natural**: documentar a mecânica em
  `conceitos/01-testes-e-contratestes.md` (ou página própria).
- [ ] 1.4 **Traços de conhecimento**: reestruturar `conceitos/06-tracos.md` e
  `listas/tracos-base.md` — traço que anula desvantagem natural (nome ⏸ A DEFINIR),
  especializações com requisito, poderes com requisito; sem níveis.
- [ ] 1.5 **Reação**: adicionar a mecânica (1/rodada; ataque de oportunidade consome;
  traços podem dar +1) em `conflitos/` e ajustar as menções a ataque de oportunidade.
- [ ] 1.6 **Posicionamento**: remover "aberto" como escolha; esquecimento = desvantagem;
  definição automática pela última ação; costas mantêm vantagem do atacante.
- [ ] 1.7 **Propriedades de armas**: cortante → ataque de oportunidade ao sair do alcance
  (remove mirar-cabeça); contundente → confirmar texto "reduz PA sem teste";
  perfurante → ⏸ revisão pendente.
- [ ] 1.8 **Novo traço**: Especialização em ataque desarmado (mirar sem desvantagem, só desarmado).
- [ ] 1.9 **Armadura**: consolidar regra de registro (anota 1×, distribuição por locais,
  durabilidade por local, 3 espaços, não empilha) em `listas/protecoes-base.md` /
  `conflitos/03-saude-e-protecao.md`.

## Lote 2 — Reestruturação em camadas (módulos e coleções)

*Muda a arquitetura do repositório. Fazer antes da Fase 2 da importação, porque o
Colapso será o primeiro beneficiado.*

- [ ] 2.1 Criar `modulos/` com README explicando o conceito (módulo = 1 mecânica + seus
  recursos; coleção = conjunto de módulos).
- [ ] 2.2 Definir o formato do **manifesto de módulos** no cenário (seção "Módulos
  utilizados" no README de cada cenário, com links).
- [ ] 2.3 Atualizar `CONVENCOES.md` (novo valor de organização + frontmatter: campo
  `modulo:` quando aplicável), `AGENTS.md`, README raiz e `_template-cenario/`.
- [ ] 2.4 Replanejar a **Fase 2 da importação**: Colapso passa a ser importado como
  cenário enxuto (lore + radiação + listas exclusivas) + módulos extraídos:
  `modulos/veiculos/`, `modulos/armas-de-fogo/`, `modulos/mutacoes/`.
- [ ] 2.5 Mapear candidatos: veículos, armas de fogo, mutações, armas exóticas (resgate
  da v0.4.1), magia (futuro); coleção *armas*.

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
