---
data: 2026-07-24
pessoa: andre
ferramenta: claude-cowork
objetivo: importar o material de Mukashi do Notion para o cenário, reorganizando na estrutura definida e adaptando a mecânica às regras atuais
arquivos-alterados:
  - cenarios/mukashi/00-visao-geral.md
  - cenarios/mukashi/README.md
  - cenarios/mukashi/lore/README.md
  - cenarios/mukashi/lore/01-mundo-de-yamato.md (novo)
  - cenarios/mukashi/lore/02-imperio-e-clas.md (novo)
  - cenarios/mukashi/lore/03-panteao-kami.md (novo)
  - cenarios/mukashi/lore/ganchos-e-a-desenvolver.md (novo)
  - cenarios/mukashi/locais/README.md
  - cenarios/mukashi/locais/myoko.md (novo)
  - cenarios/mukashi/criaturas/README.md
  - cenarios/mukashi/criaturas/racas-jogaveis.md (novo)
  - cenarios/mukashi/itens/README.md
---

# Sessão: importação de Mukashi (Notion → cenário)

## Prompts dados

> "vamos importar os materiais que temos do mukashi e do colapso pros seus respectivos cenários,
> reorganizando e atualizando tudo de acordo com a nossa estrutura definida."

Decisões (via perguntas): fontes = "Cenários não adicionados ainda" + o útil do "Material antigo"
(ignorar a campanha escolar "Volumes perdidos"); **adaptar as regras à versão atual já na
importação**; **Mukashi primeiro**, Colapso depois.

## O que foi feito (Mukashi)

Localizei o material real na exportação do Notion (`outputs/notion-export/…`), não nos esqueletos.
Consolidei três fontes quase idênticas (não-adicionados + Construção + Recursos antigos) e a
subpasta (Yamato, Grande Paz, Kami, raças) e preenchi a estrutura de cenário:

- **lore/** — mundo de Yamato (abertura, tom, período, equivalências Tang=China/Baekê=Coreia);
  Império da Grande Paz (imperador Sagama Kamiro, Shogun Minamoto Yoritomo, regiões, clãs Taira/
  Ouchi/Imagawa/Tokugawa, fronteiras); panteão dos Kami (Vida/Morte, Luz Celeste/Farol Noturno,
  Arte, Chama, Tempestade); e uma página de ganchos/pontas soltas (notas de mestre).
- **locais/** — Myoko (capital): Palácio Imperial, Castelo Yoritomo, portões, templos.
- **criaturas/** — raças jogáveis com **mecânica adaptada às regras atuais**: Humanos (base),
  Tanuki (+1 aptidão de KI, desvantagem em Físico, metamorfose), Oni (+1 aptidão de Físico,
  desvantagem em KI). Daitengu/Kitsune e bestiário de yokai ficam como A DEFINIR.
- **itens/** — aponta para o arsenal (armas) e reserva o espaço para itens únicos.
- **visão geral e README** — atualizados; removida a marca de "aguarda importação".

Frameworks **não** reescritos (seguem aguardando curadoria do Daniel): dō (arquetipos-do),
KI e magia. Verifiquei que o **arsenal** ainda casa com os catálogos atuais dos módulos de arma
(Katana, Yari, Naginata, Kusarigama, Yumi etc. — todos conferem). Fragmentos do Notion (Shikigami,
custo da magia fadiga×vida) ficaram registrados nos lugares certos.

## Decisões tomadas

- Mecânica racial expressa em termos atuais (aptidões + atributo KI); habilidade racial incompleta
  (Falsa Metamorfose) marcada como A DEFINIR em vez de inventar números.
- Notas internas usam `⚠️ A DEFINIR` — some do manual publicado (limpeza reaproveitada do PDF).

## Verificação

- Preprocessador + build VitePress: **OK** (74 páginas; +16 de Mukashi). Zero vazamento de
  "A DEFINIR"/"BASTIDOR" nas páginas publicadas; conteúdo real presente.

## Pendências

- **Colapso**: importação na próxima leva (material grande, com sistema veicular).
- Curadoria do Daniel: dō, custo da magia, clãs/feudos/tribos, bestiário.
