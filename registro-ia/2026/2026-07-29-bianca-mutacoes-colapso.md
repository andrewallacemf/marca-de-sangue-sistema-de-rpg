---
data: 2026-07-29
pessoa: bianca
ferramenta: claude-cowork
objetivo: revisar as mutações do Colapso (novas Púrpuras, fim do uso de vantagem/desvantagem nas Cromáticas) e registrar as pendências do Gabriel
arquivos-alterados:
  - cenarios/colapso/mecanicas-unicas/mutacoes.md
  - PENDENCIAS.md
  - INDICE.md
---

# Sessão: mutações do Colapso — Púrpuras novas e fim da vantagem/desvantagem nas Cromáticas

## Prompts dados

> Preciso falar de vários assuntos diferentes no cenário Colapso.
>
> * Adicione nas mutações púrpuras: Amnésia: a grave radiação ao qual você se expôs faz seu
>   cérebro se degenerar e você perde diversas memórias. Perca características, aptidões,
>   maestrias e PAs, à sua escolha, que equivalham a no mínimo 20 pontos de experiência de
>   qualquer tipo.
> * Adicione nas mutações púrpuras (sugira um nome): "Realiza todos os testes de Reação com
>   desvantagem."
> * Também sobre as mutações, algumas mutações cromáticas estão dando desvantagem. Todas que
>   estiverem dando desvantagem, troque para "Após rolar um Teste [Atributo], considere o valor
>   rolado -1." E nas mutações púrpuras que fazem com que custe o dobro para comprar
>   características etc de cada atributo, adicione também que o personagem rola todo teste
>   daquele tipo de teste com desvantagem.
> * Adicione na lista de pendências geral como tarefa para Gabriel: revisar ações de veículo do
>   sistema (mecânicas e custos), revisar habilidades após a mudança geral no sistema e a revisão
>   do cenário; revisar mutações cromáticas; criar mutações cromáticas faltando (algumas estão
>   com "Mutação abaixo 👇" só porque não consegui criar na época, precisam ser outras mutações);
>   criar mutações cromáticas faltando; revisar itens; criar mecânicas de itens, habilidades e
>   traços no banco de ideias; criar mecânicas de clima; revisar mecânica de sucatas. Se qualquer
>   uma dessas pendências já estava na lista, desconsidere
> * Pode substituir alguma dessas mutações na tabela que estão como "Mutação abaixo 👇" pela
>   seguinte (sugira o nome): "Após rolar um Teste durante uma reação, considere o valor rolado -1."

Respostas da Bianca às perguntas de esclarecimento (durante a sessão):

> Nome da nova Púrpura: **Torpor**. Nome da nova Cromática: **Marcha lenta**.

> Sobre a #48 Pele espelhada (os dois lados penalizam o atacante): marcar ⚠️ A DEFINIR para o
> Gabriel decidir.

Correção da Bianca, já aplicada (a primeira rodada tinha convertido desvantagens demais e
retirado as vantagens):

> Corrigindo minha fala: quando algo der vantagem em uma perícia específica e desvantagem em
> outro, pode reverter para como estava. Desvantagens em trilhas específicas de conflitos sociais
> também podem seguir. O que eu queria era retirar desvantagens fortes demais de mutações
> cromáticas (que são mais fracas), então o objetivo seria tirar as desvantagens em testes de
> atributos. Desvantagens em aptidões específicas quando explicitamente acompanhadas de vantagem
> em outra podem permanecer. Desvantagens puras em uma trilha específica do conflito social podem
> permanecer, mesmo que não tenham ponto positivo (talvez eu adicione no futuro dependendo do
> contexto). Use esse crivo para reverter mudanças onde for pertinente.

## O que foi feito

Reescrita da tabela de mutações do Colapso. Nas **Cromáticas**, as `desvantagem` que atingiam um
**teste de atributo inteiro** viraram "após rolar um Teste [Atributo], considere o valor rolado
−1" (5 entradas); o slot repetido **#23** ("Adquire a mutação abaixo 👇") virou a mutação nova
**Marcha lenta**. Nas **Púrpuras**, as quatro mutações de custo dobrado por atributo (3–6)
passaram a impor também `desvantagem` em todo teste daquele atributo, e os slots vazios 9 e 10
foram preenchidos com **Amnésia** e **Torpor**. Sete pendências novas do Gabriel entraram no
`PENDENCIAS.md` e o `INDICE.md` ganhou a entrada **Mutação (Cromática / Púrpura)**, que não
existia.

## Decisões tomadas

- **Nenhuma Cromática impõe `desvantagem` em teste de atributo inteiro.** Esse peso é de Púrpura;
  na Cromática, que é o tier fraco, vira "após rolar um Teste [Atributo], considere o valor rolado
  −1". `Vantagem`/`desvantagem` **seguem valendo** nas Cromáticas quando o efeito é **estreito**:
  perícia ou uso específico (em geral vantagem de um lado, desvantagem de outro) ou **trilha do
  conflito social** — aí a desvantagem pode até vir sozinha, sem ponto positivo.
- **Converteram para −1 (5):** Bússola (Teste Mental), Terceiro braço (Teste Mental), Terceira
  perna (Teste Ágil), Cola viva (Teste Ágil), Troca de pele (Teste Ágil). São exatamente as
  entradas cujo revés nomeava um atributo.
- **Continuam com `vantagem`/`desvantagem` (efeito estreito):** Baba de cupim (trilha da Atração),
  Megafone (intimidar × persuadir), Garras (tarefas de finesse), Gêmeo parasita (defender o
  tronco), Domador, Pele espelhada, Boneca de porcelana, Pele de seda, Saco de pancada, Pele
  oleosa.
- **Púrpuras 3–6 acumulam os dois efeitos**: custo dobrado de `exp.` **e** `desvantagem` em todo
  teste do atributo. É a mutação mais pesada da tabela por atributo — coerente com o tier.
- **Torpor** (Púrpura 10) age sobre a **Reação** como recurso de fora do turno (1 por rodada), não
  sobre contratestes — que, pela regra base, não consomem reação. **Marcha lenta** (Cromática 23) é
  a versão branda do mesmo gatilho.
- **Julgamentos de fronteira** (a Bianca delegou o crivo, então ficam registrados para revisão):
  **Garras** ("tarefas de finesse") e **Gêmeo parasita** ("defender o tronco") são reveses puros,
  sem vantagem par e sem trilha social, mas nenhum dos dois nomeia um atributo — por isso ficaram
  como `desvantagem`. **Cola viva** é o caso híbrido: a vantagem (segurar/agarrar) é estreita e
  ficou, mas a desvantagem era em *testes ágeis* inteiros e virou −1.
- **#98** continua "Adquire a mutação abaixo 👇" apontando para a #99; o slot escolhido para a
  Marcha lenta foi o **#23**, que não é referenciado por nenhuma entrada 👆 vizinha (a #22 aponta
  para a #21).

## Pendências criadas

- ⚠️ A DEFINIR no `mutacoes.md`: **#48 Pele espelhada** — o texto penaliza o atacante nos dois
  lados, então não há revés. Sugestão a validar: quem ataca de longe teria `vantagem`.
- ⚠️ A DEFINIR no `mutacoes.md`: **Púrpuras 11–12** ainda em branco (era 9–12, agora só 11–12).
- Sete linhas novas no `PENDENCIAS.md`, todas para o **Gabriel**: revisar ações de veículo
  (mecânicas e custos); revisar as habilidades do cenário; revisar as Cromáticas (incl. as que
  ficaram só com revés); criar as Cromáticas que faltam (~20 slots 👆/👇); revisar os itens; criar
  as mecânicas de clima; revisar a mecânica de sucatas.
- **Não** foi criada linha para "criar mecânicas de itens, habilidades e traços no banco de
  ideias": já existe desde 28/07 como *"Colapso — banco de ideias dos arquétipos de veículo"*,
  conforme a instrução de desconsiderar duplicatas.

## Observações

A conversão de `desvantagem` para "−1 no valor rolado" muda a natureza do modificador: sai um
efeito de ~−2,5 em média num `d10` e entra um **−1 fixo**, que não interage com a regra de
[modificadores inversos](../../sistema-base/conceitos/01-testes-e-contratestes.md#modificadores-inversos)
(vantagens e desvantagens que se anulam). O efeito colateral é que o −1 **empilha sem teto** e não
se anula com nenhuma vantagem: um personagem com Cola viva e Troca de pele acumula −2 em todo
Teste Ágil. Com cinco entradas convertidas o risco é pequeno, mas vale olhar na revisão.

Três entradas usam a palavra "dificuldade" em vez de `desvantagem` (#2 Olho de gato, #14 Olhos de
águia, #92 Pele oleosa) — ficaram como estavam, por não serem o mecanismo de dado. Se a intenção
era que também fossem `desvantagem`, entram na revisão.
