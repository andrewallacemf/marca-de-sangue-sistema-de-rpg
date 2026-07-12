---
data: 2026-07-12
pessoa: andre
ferramenta: claude-cowork
objetivo: varredura de consistência do sistema-base (estado atual) para alimentar o PENDENCIAS
arquivos-alterados:
  - PENDENCIAS.md
---

# Sessão: varredura de consistência do sistema-base

## Prompts dados

> Faça uma nova varredura de todo o sistema base buscando inconsistências e problemas para alimentar a lista de pendências a resolver.

## O que foi feito

Varredura de leitura (somente leitura) de todo o `sistema-base/` no estado **pós-decisões** (Seções 1 e 2 + preços), feita por três auditorias em paralelo (conceitos; conflitos/criação/progressão; listas). Os achados foram cruzados com o `PENDENCIAS.md` atual (para não duplicar) e com as decisões de 12/07 (para não tratar mudança intencional como erro).

Adicionada ao `PENDENCIAS.md` uma nova subseção — **"Sistema-base — consistência e redação (varredura de 12/07/2026)"** — com **15 itens agrupados**. Nenhum arquivo de conteúdo foi alterado nesta sessão (só a lista de pendências).

Principais achados novos (resumo):

- **Descanso**: ainda há pontos dizendo que "qualquer/um descanso" recupera usos (03-caracteristicas, 04-aptidoes, 02-acoes, progressao) — falta terminar de aplicar a regra de 2.7. *(É um resíduo da aplicação de 2.7; posso finalizar rápido se aprovado.)*
- **Conceitos sem definição**: custo de PA por espaço; "gatilho"; "valor total de aptidão do Ágil"; "durante um dia"; relação fundir × subir nível.
- **Estados de membro** (incapacitado/invalidado/desabilitado) usados para o personagem inteiro; "nocauteado" sem definição.
- **Saúde**: redutor de armadura "todos os membros" × "só a região protegida".
- **Reação** × contrateste (conceito conflitante entre 01 e 02).
- **Levantar guarda** (2 PA × 3 PA engajado) e um 3º nome ("entrar em defensiva").
- **Conflito social**: falta ligar movimento na malha aos "pontos" de vitória; "redutor de armadura" sobre PA não existe.
- **Progressão**: escala de dificuldade diverge do social; "tarefa" com dois valores.
- **Criação**: não cobre mão hábil nem PA/PV iniciais.
- **Listas**: siglas de arma sem definição (CURT./LONG./DIST), DEFL. sem item (escudo ainda usa PROT.), "X PA" placeholder, "aptidões consumidas" sem origem, ações duplicadas, aspectos fora de ordem, nomenclatura de local no corpo, arquivo experimental social a revisar, e menores.

## Decisões tomadas

- Nenhuma. A sessão só **cataloga** problemas para o grupo decidir/resolver depois.

## Pendências criadas

- 15 novas linhas no `PENDENCIAS.md` (subseção de consistência/redação de 12/07). Ver a lista para o detalhe.

## Observações

- Itens deduplicados contra o que já estava no `PENDENCIAS.md` (VERS./PROT., Firme, Animar-inconsciente, duração do descanso curto, estados sem definição, etc. já constavam e não foram repetidos).
- Ressalva das auditorias: links para fora do `sistema-base/` (notas-de-design, PLANO, assets) não foram verificados.
- Destaque: a pendência do **descanso** é resíduo direto da aplicação de 2.7 — dá para finalizar num passo curto, se você quiser, em vez de deixar em aberto.
- Ambiente: só leitura + edição do PENDENCIAS, sem git. Lembrete do `.git/index.lock` antes do commit.

Sugestão de mensagem de commit:
`alimenta PENDENCIAS com varredura de consistencia do sistema-base (15 itens)`
