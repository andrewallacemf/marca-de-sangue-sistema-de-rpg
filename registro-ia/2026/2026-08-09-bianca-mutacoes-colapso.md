---
data: 2026-08-09
pessoa: bianca
ferramenta: claude-cowork
objetivo: revisar a tabela de mutações Cromáticas do Colapso, normalizar a nomenclatura de dano e reescrever as primeiras entradas
arquivos-alterados:
  - cenarios/colapso/mecanicas-unicas/mutacoes.md
  - cenarios/colapso/mecanicas-unicas/radiacao.md
  - cenarios/colapso/mecanicas-unicas/habilidades-do-cenario.md
  - cenarios/colapso/mecanicas-unicas/tracos-do-cenario.md
  - PENDENCIAS.md
  - INDICE.md
  - notas-de-design/pendencias-ficha-plataforma.md
---

# Sessão: mutações do Colapso — leitura da tabela e primeira leva de revisões

## Prompts dados

> Vamos trabalhar nas mutações do Colapso. Primeiro de tudo, me traga a lista com 100 (mesmo com as
> mutações ainda a definir) pra eu ler e revisar tudo. Quando tiver finalizado minha leitura, te
> passo novas instruções

> antes de continuar, uma dúvida: na tabela existem várias menções a "dano curável" onde acredito
> que devesse ser "dano superficial". A nomenclatura oficial foi alterada no sistema todo ou foi
> apenas algum ruído ao trazer o material antigo pra dentro do git?

> antes que eu continue, troque no colapso tudo que ainda estiver "superficial" para "curável". Eu
> já vou fazer a revisão naturalmente de tudo, então vou aparando as arestas conforme forem
> aparecendo. E deixe uma pendência de recalibração e explicação onde antes havia menção a "dano
> profundo"

> Adicione as seguintes alterações nas mutações já existentes: [lista com as mutações 2, 5, 6, 7, 8,
> 11, 14, 24, 34, 39, 40, 42 a 45, 48, 49 e 50 — reproduzidas na seção "O que foi feito"]

## O que foi feito

Levantamento da tabela `1d100` inteira em documento de leitura para a Bianca revisar (68 prontas,
26 slots vazios das entradas "Adquire a mutação acima/abaixo", 5 só com nome, 1 com problema
apontado).

Normalização da nomenclatura de dano em todo o cenário Colapso: 9 ocorrências de *superficial*
viraram **dano curável**, alinhando com a decisão de 04/08/2026 que aposentou as faixas
superficial/profundo. Onde *profundo* era **degrau de gravidade** (e não só um nome), ficou marcado
com 🔧 e nota explicativa, porque a troca de palavra não resolve — o valor precisa ser redefinido.

Reescrita de 17 mutações Cromáticas conforme a revisão da Bianca (2, 5, 6, 7, 8, 11, 14, 24, 34, 39,
40, 42–45, 48, 49, 50).

## Decisões tomadas

- **#2 Olho de gato** — o revés virou desvantagem em **Investigar/Observar** durante o dia (era "andar
  em ambiente claro fica difícil"). O nome da perícia foi conferido no `acoes-em-combate.md`: não
  existem "Encontrar" nem "Rastrear" no sistema, só a ação **Investigar/Observar** (`Mental`).
- **#5 Guelras** — respira sob a água sem testes por até 1 rodada; o revés virou redução de 1 `PA` no
  teto de deslocamento em terra por turno (era genérico, "perde o fôlego fácil").
- **#6 Focinho** — "Mestre" → "narrador".
- **#7 Ruminante** e **#8 Ouriçase** — marcadas como **cosméticas**, sem efeito prático em jogo.
- **#11 Autofagia** — descrição substituída por inteiro: a fadiga é aplicada normalmente; se o uso
  fosse incapacitar um membro, exige Teste Mental para conseguir; em conflito custa **5 `PA`**.
- **#14 Olhos de águia** — o revés virou desvantagem em Investigar/Observar a 5 m ou menos.
- **#24 Tomada** — "come o dobro" → "come o dobro de comida".
- **#34 Radioterapia** — recalibrada (fecha o 🔧 aberto nesta sessão): cura 1 de dano curável a cada
  **2 de dano cromático** recebido num mesmo momento. O revés se manteve.
- **#39 Wingsuit** — o revés virou **1 de dano permanente no tronco ao adquirir a mutação** (era "+1
  de dano no tronco", ambíguo).
- **#40 Constructo** — a fusão é temporária; Teste Ágil a cada 15 minutos de jogo para soltar.
- **#42–#45 (Terceiro braço, Terceira perna, Segunda cabeça, Gêmeo parasita)** — passaram a conceder
  um **membro adicional de verdade**: barra de vida própria de 10 `PV` e número próprio na rolagem de
  localização do ataque descuidado. Antes o texto só dizia que a contagem de membros para desmaiar
  mudava.
- **#48 Pele espelhada** — resolvida (o `⚠️ A DEFINIR` era que os dois lados penalizavam o atacante,
  então não havia revés): agora é **vantagem para esquivar de corpo a corpo** e **desvantagem para
  esquivar de ataques a distância** (projétil ou arremesso).
- **#49 Boneca de porcelana** e **#50 Pele de seda** — reescritas na forma "vantagem/desvantagem para
  **resistir a** ataques [tipo]", em vez de "vantagem contra [tipo]".
- **Nomenclatura** — confirmado que **dano curável** é o termo oficial (decisão de 04/08/2026) e que
  *superficial*/*profundo* é que era resíduo do material antigo. O `mutacoes.md` tinha sido atualizado
  pela última vez em 29/07, seis dias antes da mudança.

## Pendências criadas

- **`1d6` do ataque descuidado não cobre 7 membros** — consequência direta da mudança em #42–#45.
  Três opções anotadas (`1d8` rerrolando, `1d6` + desempate, ou o membro extra dividir o número do
  gêmeo). Afeta também fadiga máxima, vida total e o desenho da ficha. Anotada no `PENDENCIAS.md`, no
  `INDICE.md` (verbete *Ataque descuidado*) e no backlog da plataforma.
- **Recalibração do que usava "dano profundo"** — restam dois casos, ambos marcados com 🔧:
  **Bolsa de sangue** (`habilidades-do-cenario.md`, o caso mais grave: a habilidade inteira era a
  conversão 1 profundo → 1 superficial, virou transferência 1:1 crua; redefinir taxa, níveis 2/4/6 e
  o preço de `5 exp.`) e **Pele de chumbo** na versão Alpha (`tracos-do-cenario.md`, só recalibrar se
  a variante for retomada).
- **Confirmar o nome da perícia** em #2 e #14 — foi usado **Investigar/Observar** por ser o único
  nome existente no sistema; confirmar com a Bianca se era isso mesmo ou se falta criar perícia nova.
- **Aviso à plataforma** (`pendencias-ficha-plataforma.md`, obrigatório pelo passo 3 do
  `contrato/README.md`): o modelo de **6 membros fixos** deixou de ser universal. Não exige
  implementação agora — o Colapso está em `rascunho` —, mas o schema precisa saber que o número de
  membros vira variável antes de o cenário entrar na plataforma.

## Observações

- **Pendências fechadas nesta sessão:** o `⚠️ A DEFINIR` de #48 Pele espelhada e o 🔧 de #34
  Radioterapia. As linhas correspondentes no `PENDENCIAS.md` foram marcadas como resolvidas em vez de
  apagadas, para manter o rastro.
- **A revisão da tabela continua.** A Bianca parou na #50; as entradas de #51 em diante seguem como
  estavam. Vale notar que a **#51 Saco de pancada** é a terceira do trio 49/50/51 e ficou com a
  redação antiga ("vantagem contra contundente; desvantagem contra perfurante") enquanto as duas
  irmãs foram reescritas para "resistir a" — provavelmente só falta chegar nela.
- Os 26 slots vazios e as 5 mutações que só têm nome (Pele de lagarto, Camuflagem, Condutor,
  Exoesqueleto, Bioluminescência) continuam intocados; são o grosso do trabalho que resta.
- Nenhuma lista de `sistema-base/listas/` foi tocada, então **não foi preciso regenerar o
  `catalogo.json`** (regra 12 do AGENTS.md).
- O `historico-de-versoes.md` não foi mexido: é changelog de versão do **sistema**, e esta sessão
  alterou conteúdo de cenário, não o motor de regras.
