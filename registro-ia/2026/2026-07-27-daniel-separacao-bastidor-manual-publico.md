---
data: 2026-07-27
pessoa: daniel
ferramenta: claude-cowork
objetivo: separar o bastidor de edição do manual web público (GitHub Pages) — investigar
  a infraestrutura existente, consertar furos e aplicar no Mukashi como prova de conceito
arquivos-alterados:
  - contrato/limpeza.py
  - contrato/README.md
  - contrato/catalogo.json
  - manual/gerar-conteudo.py
  - CONVENCOES.md
  - PENDENCIAS.md
  - cenarios/mukashi/00-visao-geral.md
  - cenarios/mukashi/README.md
  - cenarios/mukashi/arquetipos-do.md
  - cenarios/mukashi/arsenal.md
  - cenarios/mukashi/mecanicas-unicas/habilidades-do.md
  - cenarios/mukashi/mecanicas-unicas/magia.md
  - modulos/armas-brancas/README.md
  - modulos/armas-exoticas/README.md
  - modulos/armas-de-fogo/README.md
  - modulos/furtividade/README.md
  - modulos/protecoes/README.md
  - sistema-base/conflitos/01-conflito-fisico.md
  - sistema-base/listas/equipamentos-base.md
  - sistema-base/listas/habilidades-base-ageis.md
  - sistema-base/listas/habilidades-experimentais-sociais.md
  - sistema-base/listas/itens-base.md
  - sistema-base/variantes/habilidades-por-fadiga/01-habilidades.md
  - sistema-base/variantes/habilidades-por-fadiga/02-fadiga.md
  - sistema-base/variantes/habilidades-por-fadiga/README.md
  - manual/gerar-conteudo.py
---

# Sessão: separação bastidor × manual público

## Prompts dados

> Atualmente, o sistema Marca de Sangue está sendo disponibilizado online... Isso facilita o
> acesso dos jogadores. Mas notei que muitas coisas que são apenas notas de edição também
> aparecem por lá... Vamos então separar as coisas. Configure para que a versão online seja uma
> versão "canônica" e "amigável ao usuário" do sistema... A versão pública deve adotar tom de
> livro de RPG mesmo... a versão pública deveria ocultar comentários como pedidos de revisão,
> etc. Sugira um caminho para como fazer essa segregação e como apresentar o projeto dessa forma
> garantindo que seja atualizado de acordo com os arquivos de "backstage".

## O que foi feito

Antes de propor qualquer coisa nova, investiguei o que já existe — e existe bastante. O André
já projetou exatamente essa separação em 24/07/2026
(`notas-de-design/decisoes/2026-07-24-arquitetura-plataforma-e-backstages.md`): um "contrato de
conteúdo" (`contrato/limpeza.py` + `contrato/exportar_catalogo.py`) que gera uma versão limpa do
manual, consumida por um site VitePress (`manual/`) publicado via GitHub Actions
(`.github/workflows/deploy-ficha.yml`) toda vez que alguém dá push em `main` — é exatamente o
site que o Daniel está usando. Ou seja, a peça "atualiza sozinho a partir do bastidor" **já
existia e já funciona** — não precisei construir isso do zero.

O problema real, que investiguei lendo `manual/gerar-conteudo.py` e testando a limpeza
diretamente: a pipeline já filtra pastas de bastidor puro (`manuais/`, `notas-de-design/`,
`registro-ia/`, `PENDENCIAS.md`, etc. — nenhuma delas entra no site, só `sistema-base/`,
`modulos/` e `cenarios/`), mas dentro dessas três pastas a limpeza só remove **marcações
explícitas** (blocos de citação com ✅/💡/🧪/"A DEFINIR"/datas de decisão). Ela não sabia lidar
com três coisas, que testei e confirmei uma por uma:

1. **Rodapés em itálico vazando.** O checador só pegava o texto exato `*💡 PROPOSTA` — minhas
   próprias notas de hoje (`*💡 Itens adicionados em 27/07/2026...`, `*🔧 Ajuste de 27/07/2026...`)
   não batiam com esse padrão e apareceriam no site como estão.
2. **Emoji de marcação dentro de células de tabela.** A tabela do arsenal do Mukashi tem `💡`/`🔧`
   soltos dentro de células (ex.: `"Wakizashi, Kodachi" 💡`) — tabelas nunca passam pela limpeza,
   então esses marcadores apareceriam literalmente na página pública.
3. **Nenhum jeito de esconder uma seção inteira ou uma página inteira** que é puramente de
   bastidor mas não está marcada com os gatilhos de sempre — como o `00-visao-geral.md` do
   Mukashi (que mistura pitch de tom, bom para o jogador, com "o que este cenário adiciona ao
   sistema-base", que é comparação de arquitetura só interessante para quem edita) ou a seção
   "Estado da importação" do README de cenário (puro status de curadoria).

Consertei os três, sempre reaproveitando/estendendo o mecanismo que já existia em vez de criar
um sistema paralelo:

1. Generalizei o checador de rodapé (`*⚠️`/`*💡`/`*🔧`, qualquer texto depois, não só a frase
   exata) e passei a **remover o emoji de qualquer linha que sobreviver** à limpeza (célula de
   tabela, item de lista, frase corrida) — segue a mesma lógica que já existia pra ⚠️/🧪 nessas
   posições, só faltava fazer o mesmo para 💡/🔧.
2. Criei um marcador de bloco explícito, `<!-- bastidor:inicio -->`...`<!-- bastidor:fim -->`,
   para trechos maiores que uma citação (uma seção de README, por exemplo) sem precisar
   transformar tudo em blockquote.
3. Criei o campo de frontmatter `publico: false` (documentado em `CONVENCOES.md`, seção nova
   §12) para marcar uma **página inteira** como bastidor — ela some do manual mas continua
   normal aqui no repo. Implementei em `gerar-conteudo.py` (lê só o frontmatter antes de decidir
   se inclui o arquivo, sem precisar abrir/limpar o resto).

Testei os três com o próprio conteúdo do Mukashi como prova de conceito:

- `00-visao-geral.md`: mantive Pitch/Tom (é lore boa pro jogador), reescrevi "O que este cenário
  adiciona ao sistema-base" para linguagem de mundo em vez de comparação de arquitetura, e
  escondi a nota de arquitetura ("aponta, não recria") num bloco `bastidor:inicio/fim`.
- `README.md`: a seção "Estado da importação" (puro status de curadoria pro Daniel) virou um
  bloco de bastidor.
- `arquetipos-do.md`: três blockquotes de comentário editorial meu (explicando decisões de
  design pro Daniel, tipo "chamei de X em vez de Y") viraram blocos de bastidor — eram o tipo de
  nota que nenhuma das marcações antigas pegava, porque não continham as palavras-gatilho
  exatas.
- `arsenal.md`: dois comentários "✅ Decidido em 27/07/2026: ..." dentro de células de tabela
  viraram texto direto (a informação em si — Naginata sem contundente, Teppō na linha média —
  é regra real e fica; só o "decidido em tal data" editorial saiu).

Rodei o gerador (`python3 manual/gerar-conteudo.py`) depois de cada rodada de ajuste e escrevi um
scanner de QA reaproveitando `verifica_limpeza` (já existia em `limpeza.py`, mas nunca tinha sido
rodado varrendo o site inteiro gerado) para contar quantas linhas ainda pareciam bastidor. Antes
das correções: 40 linhas suspeitas nos 4 arquivos do Mukashi que editei hoje. Depois: **0**.

Também rodei o scanner no site inteiro (116 páginas, todas as pastas) — sobrou bastante coisa
marcada com `💡`, mas ao conferir manualmente é **conteúdo legítimo**: o sistema-base já usa
blockquotes `> 💡 Dica: ...` como caixa de dica pro jogador/mestre há tempos (ex.: "💡 Na mesa:
com miniaturas..."), não como marcador de proposta. Não toquei nessas — apagar o emoji delas via
`_tira_inline` só tira o símbolo decorativo, mantém o texto (efeito colateral aceitável); mas
**não** adicionei `💡` puro à lista `BASTIDOR` de remoção de bloco inteiro, porque isso apagaria
essas dicas legítimas do site. Isso significa que `💡` continua tendo dois sentidos no projeto
(dica-pro-jogador × nota-de-bastidor) — expliquei essa ambiguidade ao Daniel na resposta, com a
recomendação de, daqui pra frente, converter notas de bastidor sem palavra-gatilho pro marcador
`<!-- bastidor:inicio -->` explícito em vez de depender só do emoji.

## Decisões tomadas

- Reaproveitar e estender a pipeline `contrato/` + `manual/` já existente (decisão do André de
  24/07), em vez de criar um sistema de publicação novo.
- Três mecanismos de ocultação, por escopo: emoji cosmético (`_tira_inline`, já existia pra
  ⚠️/🧪, estendido pra 💡/🔧), bloco explícito (`<!-- bastidor:inicio/fim -->`, novo) e página
  inteira (`publico: false` no frontmatter, novo).
- Não alterei a lista `BASTIDOR` de remoção de blockquote pra incluir `💡`/`🔧` soltos — geraria
  falsos positivos nas dicas legítimas que o sistema-base já usa com esse formato.
- Prova de conceito aplicada só no Mukashi (4 arquivos) — o resto do repositório (sistema-base,
  módulos, outros cenários) não foi tocado; a ferramenta está pronta, mas passar por todo o
  conteúdo é tarefa maior, sinalizada como próximo passo.

## Pendências criadas

- Nenhuma nova em `PENDENCIAS.md` (é infraestrutura de publicação, não regra de jogo) — mas
  sinalizei ao Daniel, na resposta, que falta: (a) uma passada de reescrita de tom em
  sistema-base/módulos/outros cenários pra ficar "livro de RPG" de verdade, não só limpo de
  bastidor; (b) avisar o André, já que ele é o dono declarado dessa pipeline
  (`contrato/README.md` chama isso de "fronteira oficial entre os dois backstages").

## Observações

Não commitei nem dei push — as mudanças estão só no working directory, como de costume. O
próximo deploy do GitHub Pages (automático, no próximo push em `main` que toque
`sistema-base/`, `modulos/`, `cenarios/` ou `contrato/`) já vai publicar a versão limpa nova,
sem precisar de nenhum passo manual extra.

## Parte 2 — resolvendo a ambiguidade do 💡 (mesmo dia, continuação)

O Daniel leu a observação acima (💡 com dois sentidos) e decidiu: **"💡 tem dois sentidos no
projeto. Vamos dividir em dois símbolos diferentes. Não use esse emoji como nota de bastidor,
escolha outro. Em seguida continue fazendo a limpeza."**

Escolhi **📝 (memo)** como o novo símbolo exclusivo de nota de bastidor/curadoria, mantendo
**💡 só para dica de mesa** (nunca mais usado como marcador de proposta/pendência/curadoria daqui
pra frente). Trabalho em duas frentes:

**1. Infraestrutura (`contrato/limpeza.py`, `CONVENCOES.md`, `contrato/README.md`):**
adicionei `📝` à lista `BASTIDOR` (remove o blockquote inteiro), troquei `💡` por `📝` no checador
de rodapé em itálico e em `_tira_inline` (que já cuidava de ⚠️/🧪/🔧), e no scanner de QA
`verifica_limpeza`. Documentei a distinção em `CONVENCOES.md` §12 com uma tabela dos 6 emojis de
marcação e a regra prática ("é pro jogador na mesa → 💡; é sobre o processo de criação → 📝").
Corrigi também `contrato/README.md`, que ainda citava `💡` na lista de marcadores removidos.

**2. Conteúdo — troquei `💡` por `📝` em todo uso que era proposta/nota de curadoria** (não dica),
em duas rodadas:

- **Arquivos do Mukashi editados hoje**: `habilidades-do.md`, `arquetipos-do.md`, `magia.md`,
  `arsenal.md` — as três "Nota de curadoria" de `arquetipos-do.md`, todos os custos marcados
  como proposta (`5 exp. 💡` → `📝`, etc.), a heurística de calibragem de `magia.md`, os itens
  novos do arsenal (Wakizashi/Kodachi, Bô, Sasumata). Também achei e corrigi dois casos onde o
  texto de proposta ("(proposta — a validar; ...)") estava **fora** de um blockquote — Iaijutsu e
  Máscara Impassível tinham a ressalva colada na mesma linha do `**Custo de compra:**`, o que
  vazaria pro site mesmo com o emoji trocado (o `_tira_inline` só apaga o símbolo, não o texto ao
  redor). Movi a ressalva para uma linha `> 📝` própria, que agora some inteira.
- **Módulos ligados ao Mukashi de hoje**: as duas notas de rodapé em `modulos/armas-brancas/README.md`
  e `modulos/armas-exoticas/README.md` (itens adicionados hoje), e uma frase "✅ Decidido em
  27/07/2026" solta (sem marcação) no rodapé do Teppō em `modulos/armas-de-fogo/README.md`, que
  reescrevi como texto direto — o mesmo tipo de vazamento que a Parte 1 já tinha corrigido no
  Mukashi.
- **Resto do repositório** (a pedido do "continue fazendo a limpeza"): varri `sistema-base/`,
  `modulos/` e os demais cenários por `💡` e por padrões de bastidor sem marcação. A maioria dos
  `💡` no sistema-base é dica de mesa legítima (ex.: "💡 Na mesa: com miniaturas...") — não toquei.
  Troquei para `📝` os que eram claramente proposta/curadoria: `conflitos/01-conflito-fisico.md`
  ("💡 PROPOSTA (IA) — lista..."), `listas/equipamentos-base.md` (2 ocorrências, calibragem de
  durabilidade e dano), `listas/habilidades-base-ageis.md` (2, custo proposto + nota "para o André
  revisar"), `listas/itens-base.md` (preços propostos), `modulos/furtividade/README.md` e
  `modulos/protecoes/README.md` (calibragem de durabilidade/preço, e uma habilidade marcada
  "proposta"). Em `listas/habilidades-experimentais-sociais.md`, troquei para `🧪` (não `📝`) —
  "Seção experimental — em teste" é o caso de uso exato desse marcador, não bastidor genérico.
  Também troquei os 3 usos de `💡` nos arquivos de `sistema-base/variantes/habilidades-por-fadiga/`
  por consistência de vocabulário, embora essa pasta já seja 100% excluída do manual publicado
  (filtro de `variantes/` em `gerar-conteudo.py`, sem relação com o `💡`/`📝`).
- **`PENDENCIAS.md`**: também não é publicado, mas troquei os 5 usos de `💡`-como-proposta por
  `📝` por consistência — é o mesmo vocabulário do resto do projeto.

**Verificação:** rodei `python3 manual/gerar-conteudo.py` + o scanner `verifica_limpeza` sobre as
116 páginas geradas depois de cada rodada. Resultado final: **1 linha suspeita** em
`modulos/index.md` — falso positivo (o texto documenta literalmente o formato do frontmatter,
`` `cenario: modulo` + `modulo: <nome-do-modulo>` ``, como exemplo dentro de uma frase, não é
frontmatter de verdade vazando). Conferi manualmente que os `💡` legítimos (yamamba.md, mizuki.md,
habilidades-do.md linha "Mais forte que Mão rápida", magia.md linha "Diferença deliberada em
relação a Atordoar") continuam visíveis no site — são dica/explicação de regra, não bastidor.
Rodei `contrato/exportar_catalogo.py` de novo: só os 8 avisos pré-existentes de sempre (maestrias
de armadura sem efeito, inimigos dos cenários 3/4 sem tier de queda) — nenhum novo.

## Parte 3 — ocultando "A Caça dos Yokais" (mesmo dia, continuação)

O Daniel pediu: **"Também deixe oculto do site os arquivos de 'A Caça dos Yokais'."** É a pasta
`cenarios/mukashi/Cenário-Yokai-Taiji/` — memória de mesa da campanha dele (fichas de PJ/NPC com
segredos de mestre, sessões jogadas, material bruto) — o próprio `README.md` da pasta já diz que
não é lore oficial nem conteúdo do sistema. Como fica dentro de `cenarios/mukashi/` só por
proximidade temática, e os arquivos não têm frontmatter (não seguem `CONVENCOES.md`), o mecanismo
`publico: false` por página não se aplicava — e conferindo o `manual/conteudo/` gerado, a pasta
inteira (~33 arquivos: fichas de PJ, NPCs, sessões, segredos de mestre) **estava vazando pro site
publicado**.

Corrigido com uma exclusão por pasta em `manual/gerar-conteudo.py` — criei o conjunto
`PASTAS_DE_MESA` (hoje só com `"Cenário-Yokai-Taiji"`) e um novo checo em `incluir()`: qualquer
caminho com uma dessas pastas no meio fica de fora do manual, sem precisar tocar frontmatter em
cada um dos ~33 arquivos (e sem precisar lembrar de repetir isso para cada sessão nova que o
Daniel adicionar lá — a pasta inteira já sai por padrão). Reaproveita o mesmo padrão que já existia
para excluir `variantes/`.

**Verificação:** rodei o gerador de novo — o `sidebar.json` (navegação do site) não tem mais
nenhuma entrada de Yokai-Taiji, e nenhum arquivo do sistema (fora da pasta) linka pra dentro dela,
então não sobra link quebrado. Conferi o `verifica_limpeza` no resto do conteúdo gerado: segue só
o mesmo 1 falso positivo de sempre (`modulos/index.md`).

*Nota técnica: o ambiente onde rodei isso não conseguiu apagar os arquivos antigos já gerados
dentro de `manual/conteudo/Cenário-Yokai-Taiji/` de uma rodada anterior (erro de permissão do
sistema de arquivos, o mesmo tipo de trava que já vi antes com o `.git/index.lock`) — então essas
cópias órfãs ainda aparecem se você olhar a pasta local. Isso é só uma sobra da minha máquina de
trabalho, sem efeito real: `manual/conteudo/` está no `.gitignore` (nunca foi commitado) e o site
de verdade é gerado do zero a cada deploy no GitHub Actions, que não tem esses arquivos velhos
para começo de conversa.*

## Pendências criadas — atualização

Nenhuma pendência de jogo nova (de novo, é infraestrutura de publicação). Removi da lista de
"próximos passos" o item "resolver a ambiguidade do 💡" — está resolvido. Seguem em aberto, sem
mudança: (a) a passada de reescrita de tom "livro de RPG" além da limpeza de bastidor; (b) avisar
o André, dono da pipeline `contrato/`.
