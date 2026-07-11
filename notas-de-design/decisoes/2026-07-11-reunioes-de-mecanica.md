---
titulo: Decisões das reuniões de mecânica de 11/07/2026
tipo: regra
cenario: base
status: estavel
tags: [decisoes, reuniao, design]
atualizado-em: 2026-07-11
---

# Decisões — reuniões de 11/07/2026

*Fontes: gravação da mesa (André, Daniel, Gabriel e Pedro) + 5 conversas André & Daniel.
Este arquivo registra **o que foi decidido e por quê**. A execução está organizada no
[PLANO-DE-MELHORIAS.md](../../PLANO-DE-MELHORIAS.md).*

---

## Decisões fechadas (viram regra)

### 1. Conflito social: vitória com 5 pontos × nº de personagens ✅

Confirmada a versão do manual. Nos testes de mesa, 10 pontos demorava demais.
Falta: completar os exemplos (estavam "???" no manual). *(Resolve a variante nº 1.)*

### 2. Fadiga: mecânica base definida ✅

- O personagem **ganha fadiga ao sofrer certos danos/efeitos** e **pode gastar fadiga
  voluntariamente para ganhar PA extras**: **2 pontos de fadiga = 1 PA**.
- Teto por turno: PA extras até o **total de PA do personagem** (ex.: 7 PA totais →
  até +7 PA por 14 de fadiga).
- A fadiga acumulada **só sai com descanso** (reseta no descanso) e o personagem sofre
  as penalidades de acúmulo (tabela atual: a cada 10 pontos, −1 PA; será revista no
  rebalanceamento — ver plano, Lote 3). *(Resolve a variante nº 5.)*

### 3. Desvantagem natural + traços de conhecimento ✅

- Documentar a mecânica de **desvantagem natural**: certas ações exigem conhecimento
  (nadar, ferraria...); quem não tem o conhecimento testa com desvantagem. Andar, todo
  mundo sabe; nadar, não.
- Novo desenho dos traços em cima disso, **sem níveis**:
  1. Traço de **conhecimento em X** — apenas **anula a desvantagem natural** daquela
     ação. Não dá vantagem. *(Nome em aberto: "especialização" engana, "aptidão" colide
     com mecânica existente, "conhecimento" talvez soe intelectual demais.)*
  2. **Especialização em X** — dá vantagem; tem o conhecimento como **requisito**.
  3. Poderes especiais (ex.: "nadar na lava") — desbloqueiam o impossível; requisito:
     o conhecimento correspondente.
- Mantido: traços não têm níveis (níveis são coisa de habilidade); traços são passivos
  e usam requisitos como bloqueio. *(Substitui a variante nº 2 — a discussão "remove
  desvantagem vs dá vantagem" virou dois traços diferentes.)*

### 4. Mecânica de Reação (nova) ✅

Fora do seu turno, cada personagem tem **1 reação por rodada**. O ataque de oportunidade
passa a **consumir a reação** (deixa de ser ilimitado). Traços poderão conceder reações
extras. A ficha ganha um marcador de reação.

### 5. Posicionamento: só existe posicionamento definido ✅

- O conceito de "posicionamento aberto" **deixa de ser uma escolha** do jogador.
- Quem termina o turno sem definir posicionamento fica em aberto **como penalidade de
  esquecimento**: desvantagem contra ataques de qualquer direção.
- Definição automática de bom senso: a última ação define a direção (atacou alguém →
  está posicionado para ele). Não sacanear o jogador.
- Costas continuam dando vantagem ao atacante — flanquear é objetivo do sistema.
- O grupo passa a usar a regra de verdade nas mesas (não vinha usando).

### 6. Armas voltam a ter dano variável (dados) ✅

Dano fixo deixou o jogo "estratégico porém sem graça" e escondeu a letalidade. Diretrizes
de conversão aprovadas (aplicação é o Lote 3 do plano):

- O dano fixo atual passa a ser o **dano máximo** do dado.
- Dados possíveis: d4, d6, d8, d10, d12 ou combinações (ex.: d6+d4).
- **Cortantes/perfurantes**: 1 dado só (amplitude maior, mais extremos).
- **Contundentes**: 2 dados de valores menores (tende à média, extremos raros).
- **Arredondar** danos quebrados para múltiplos de 5 (ex.: katana 9 → 10; o nerf da
  katana foi reconhecido como erro — o sistema deve ser perigoso).
- Processo: IA redige a regra → grupo aprova → IA aplica arma a arma → ajuste fino manual.

### 7. Propriedades de armas ✅ (parcial)

- **Cortante**: o efeito atual (mirar cabeça sem desvantagem) está forte demais — sai.
  Novo efeito: **ataque de oportunidade se o alvo sair do alcance** (sinergia com Reação).
- **Contundente**: mantém redução de PA no acerto, **sem teste**; ficará naturalmente
  menos punitivo com o rebalanceamento de PA.
- **Perfurante**: revisão em aberto.

### 8. Novo traço: Especialização em ataque desarmado ✅

Permite **ataque mirado sem desvantagem apenas desarmado** (soco). Viabiliza builds de
lutador. Cuidado observado: combo com "Mão de Navalha" precisa de olhar de balanceamento.

### 9. Armadura: registro e uso ✅

- Regra (já existente, agora consolidada): armadura reduz 1 de dano por acerto na região
  protegida e perde 1 de durabilidade **na região atingida**.
- Registro na ficha: anota-se a proteção **uma vez** (nome, redução, redutor de PA) e a
  distribuição por locais com a durabilidade de cada local. Três espaços de proteção
  (ex.: superior, inferior, escudo). **Não empilha** armadura no mesmo local — vale a maior.

## Decisões experimentais (testar em mesa antes de virar regra — Lote 3)

- **Mais PA e movimento limitado**: PA iniciais maiores (12–15), limite de movimento
  por turno (7–10 m), custos rebalanceados ~2× (arma leve 2 PA, média 4, pesada 6) para
  granularizar custos e acabar com o dilema "andar OU agir".
- **Tabela de fadiga** acompanharia o dobro: perda de 1 PA a cada 5 pontos.
- **XP**: custos hoje baratos demais; granularizar na mesma proporção.
- Combinar sessão de playtest para validar os números antes de atualizar as listas.

## Hipóteses registradas (não fazer agora)

- **Matriz de ferimentos por membro** (quantidade × profundidade, "bolinhas" estilo
  Vampiro) como substituta do superficial/profundo/permanente — brainstorm do André;
  o grupo preferiu testar primeiro armas com dado + narrador mais agressivo.
- **Mecânica de cooperação** (agir junto, média de PA) para batalhas grandes — "pensar".
- **Cartinhas de arma/característica** — Daniel quer testar na mesa; André é cético
  (a ficha deve bastar). Experimento de mesa, não muda o repositório.

## Adiados explicitamente

| Tema | Para quando | Nota |
|------|-------------|------|
| Aptidões: "1×/dia" vs "livre com descanso longo" | Investigação separada | Pedir à IA a origem/contexto exato de cada versão antes de decidir |
| Custo da magia (saúde × sangue × fadiga) | Quando olhar cenários específicos | Grupo avaliou que havia confusão de contextos na pendência |
| Experiência de Veículos | Fase do Colapso | Pedir áudio/contexto ao Gabriel |
| Espécies/classes na criação (camada D&D) | Fase Gaéria | Material vem da adaptação de D&D; fora do sistema genérico |
| Arquétipos/presets de personagem | Depois da estruturação | Genéricos no base (estilo GURPS) + específicos por cenário; IA cruza sinergias |
| Livro do mestre (NPCs, encontros, terreno, dicas) | Depois das correções importantes | NPCs: bucha/minion/chefe, fadiga assimétrica, dano com dado |

## Decisão de arquitetura da documentação: camadas e módulos

Nova organização conceitual do sistema (detalhe no plano, Lote 2):

1. **Sistema-base** — o conjunto das mecânicas básicas, presente em qualquer jogo.
2. **Módulos** — relação 1:1 entre mecânica e módulo: a mecânica + todos os seus
   recursos (ex.: módulo *mutações*, módulo *armas de fogo*, módulo *armas exóticas*).
   Reutilizáveis por vários cenários.
3. **Coleções** — conjuntos nomeados de módulos (ex.: coleção *armas* = armas de fogo +
   armas marciais + armas exóticas).
4. **Cenários** — a camada superior: narrativa + mecânicas **exclusivas** daquele mundo
   + a **declaração de quais módulos/coleções usa**. Ex.: Colapso = módulos *armas de
   fogo* e *mutações* + mecânica exclusiva *radiação* (não promovida a módulo porque
   nenhum outro cenário usa).

Racional: mecânicas como veículos, magia e armas de fogo aparecem em mais de um cenário;
embuti-las no base incha o base, e copiá-las em cada cenário duplica conteúdo.
