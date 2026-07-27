---
data: 2026-07-27
pessoa: daniel
ferramenta: claude-cowork
objetivo: criar o mecanismo de "traço de caminho" e o traço Iaijutsu do Bushidō
arquivos-alterados:
  - cenarios/mukashi/arquetipos-do.md
  - cenarios/mukashi/mecanicas-unicas/habilidades-do.md
---

# Sessão: traços de caminho — Iaijutsu (Bushidō)

## Prompts dados

> Em mukashi, os caminhos também tem habildiades exclusivas. Como funciona: para pegar uma
> habilidade exclusiva, o personagem vai ter que já ter comprado outras x habilidades daquele
> mesmo caminho. Iaijutsu deve ser um traço especial do bushido. Permite trocar de arma sem
> gastar PA. O sistema já tem algo parecido? Como diferenciar?

> [em resposta à pergunta sobre a colisão de nome com o dō avulso "Iaijutsu — Caminho do Corte
> Rápido"] Sim, remove o dô separado.

> Como assim "desvantagem de trocar de arma após o primeiro ataque"?

## O que foi feito

Confirmei que o mecanismo de habilidade exclusiva de caminho já é exatamente o que o Daniel
descreveu — já estava implementado desde o Bushidō (Resolução em Sete Sopros/Kachidoki) e o
Yamabushi. A novidade era estender o mesmo padrão para um **traço** (não uma habilidade).

Antes de escrever o Iaijutsu, chequei o que o sistema já tinha pra "trocar de arma": o custo
normal é `2 PA` (embainhar + sacar, `1 PA` cada), o aspecto **Mão rápida** (comum, `2 exp.`) já
reduz isso pra `1 PA`, e existe uma penalidade separada — trocar de arma **depois do primeiro
ataque** no turno dá `+1d10` de desvantagem nos ataques seguintes, acumulativo. O Daniel
perguntou sobre essa penalidade especificamente; expliquei a regra (é do sistema-base,
`conflitos/02-acoes-em-conflito.md`, não inventei nada).

Para diferenciar o Iaijutsu de "Mão rápida, mas melhor", propus: traço **exclusivo** do caminho
(≥ 2 habilidades do Bushidō), saque de arma embainhada **de graça** (`0 PA`, mais forte que a Mão
rápida) e, além disso, **ignora** a desvantagem de troca-após-ataque especificamente nesse
momento do saque — capturando o conceito de "sacar e cortar num movimento só", não só "trocar de
arma mais rápido". Registrei isso como proposta extra (não pedida literalmente, mas oferecida e
o Daniel não vetou).

Descobri que já existia um dō avulso "Iaijutsu — Caminho do Corte Rápido" (base Duelista) na
tabela de esqueletos — colisão de nome com o novo traço. Perguntei ao Daniel antes de mexer; ele
confirmou que o traço substitui o dō avulso. Removi a linha da tabela e adicionei, no bloco do
Bushidō, um novo campo "Traços de caminho" (paralelo ao já existente "Habilidades de caminho"),
apontando pro Iaijutsu.

O arquivo `habilidades-do.md` foi renomeado de escopo ("Habilidades de caminho" →
"Habilidades e traços de caminho") e ganhou uma seção "Resumo — traços de caminho" ao lado da de
habilidades, mais a entrada completa do Iaijutsu (formato de Aspecto: descrição, requisitos,
observações).

## Decisões tomadas

- Traços de caminho seguem o mesmo pré-requisito das habilidades de caminho (≥ 2 habilidades do
  caminho), mesmo sendo uma categoria de característica diferente (traço, não habilidade).
- Iaijutsu vira **traço exclusivo do Bushidō**, não um dō próprio — o dō avulso "Iaijutsu —
  Caminho do Corte Rápido" foi removido da tabela de esqueletos.
- Custo de compra do Iaijutsu: `5 exp.` — proposta minha (o Daniel não deu número), comparável a
  outros aspectos fortes de uso condicional (Vigilante/Blindado/Protetor = `4 exp.`).

## Pendências criadas

- Nenhuma nova (o custo de `5 exp.` do Iaijutsu já está marcado 💡 como proposta a validar).

## Observações

Faltam agora: Onmyōdō e Caminho da Corte.
