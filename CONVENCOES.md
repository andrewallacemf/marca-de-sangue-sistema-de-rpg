# 📐 Convenções do projeto

Estas são as regras de organização. Segui-las mantém o projeto navegável para pessoas
**e** para IAs. Se você usa uma IA, peça para ela **ler este arquivo antes de editar**.

---

## 1. Idioma e formato

- Tudo em **português (Brasil)**.
- Todo conteúdo é escrito em **Markdown** (arquivos `.md`). É texto simples com uns
  poucos símbolos para títulos (`#`), listas (`-`) e **negrito** (`**`).
- Um assunto = um arquivo. Prefira **muitos arquivos pequenos** a poucos arquivos gigantes.
  Isso deixa a leitura melhor e **reduz drasticamente os conflitos** (ver manual de conflitos).

## 2. Nomes de arquivos e pastas

- Só letras minúsculas, números e hífen. **Sem acento, sem espaço, sem maiúscula.**
  - ✅ `magia-de-cura.md`, `criacao-de-personagem.md`
  - ❌ `Magia de Cura.md`, `Criação_De_Personagem.MD`
- Use um número na frente quando a **ordem importa**: `01-conceitos.md`, `02-atributos.md`.
- Arquivos que começam com `_` são **modelos/templates** (ex.: `_template-item.md`).
  Nunca escreva conteúdo real dentro deles — **copie** e renomeie.

## 3. O cabeçalho de cada página (frontmatter)

Todo arquivo de conteúdo começa com um pequeno bloco entre `---`. Ele não aparece na
leitura, mas serve para busca e organização (e no futuro permite listas automáticas).

```yaml
---
titulo: Magia de Cura
tipo: item          # regra | item | criatura | mecanica | local | lore | cenario
cenario: base       # base | colapso | mukashi | gaeria | peabiru | o-sindicato | rodentia
status: rascunho    # rascunho | revisao | estavel
tags: [magia, cura, suporte]
atualizado-em: 2026-07-11
---
```

Regras dos campos:

| Campo | Obrigatório | Observação |
|-------|:-----------:|------------|
| `titulo` | sim | Nome legível, com acentos, como aparece pro leitor. |
| `tipo` | sim | Use um dos valores da lista acima. |
| `cenario` | sim | `base` para regras universais; o nome da pasta para conteúdo de cenário. |
| `status` | sim | Em que ponto está a maturidade do texto. |
| `tags` | não | Palavras-chave para buscar depois. |
| `atualizado-em` | sim | Data da última mudança (formato `AAAA-MM-DD`). |
| `publico` | não | Só quando `false`. Marca a página inteira como **bastidor** (guia de criação, pitch pra quem monta o cenário, notas de curadoria) — some do [manual web](manual/README.md) publicado, mas continua existindo e editável normalmente aqui no repo. Sem o campo, a página é pública por padrão. Ver seção 12. |

## 4. Como o sistema-base e os cenários se relacionam

- **`sistema-base/`** contém as regras que valem para **todos** os cenários.
- **`cenarios/<nome>/`** contém o que é **exclusivo** daquele cenário: mecânicas extras,
  itens próprios, criaturas, locais e lore.
- Um cenário **nunca reescreve** uma regra do sistema-base copiando-a. Ele **referencia**
  a regra base e descreve apenas a **diferença** (o que muda, o que adiciona).
  - ✅ "No cenário Junkpunk, a regra de Fadiga (ver `sistema-base/testes-e-combate/`)
    ganha o nível extra *Radiação*, descrito abaixo."
  - ❌ Copiar a regra de Fadiga inteira e alterar um pedaço.
- Ao referenciar outra página, use um link relativo:
  `[Fadiga](../../sistema-base/testes-e-combate/fadiga.md)`.

## 5. Status e maturidade

- `rascunho` — ideia jogada, ainda não revisada. Pode estar incompleta ou errada.
- `revisao` — pronta na cabeça de quem escreveu, aguardando outra pessoa conferir.
- `estavel` — revisada e em uso nas mesas. Mudar aqui exige cuidado e aviso ao grupo.

## 6. Imagens e arquivos grandes

Não jogue imagens pesadas direto no repositório sem ler **[assets/README.md](assets/README.md)**.
Arquivos grandes incham o projeto e deixam tudo lento para todo mundo.

## 7. Registro de sessões com IA (`registro-ia/`)

Toda sessão com IA que altera o projeto deixa um arquivo em `registro-ia/<ANO>/`,
criado a partir do `_template-sessao.md`:

- Nome: `AAAA-MM-DD-pessoa-tema.md` (ex.: `2026-07-11-andre-magia-de-cura.md`).
  Segunda sessão igual no mesmo dia: sufixo `-2`.
- Frontmatter próprio (diferente do conteúdo): `data`, `pessoa`, `ferramenta`,
  `objetivo`, `arquivos-alterados`.
- Registros são **históricos**: não se editam nem se apagam depois de commitados.
- Detalhes e exemplo: [registro-ia/README.md](registro-ia/README.md).

## 8. Pendências (`PENDENCIAS.md`)

Toda marcação `> ⚠️ A DEFINIR:` deixada em um texto deve ter uma linha correspondente
no **[PENDENCIAS.md](PENDENCIAS.md)** (e ser removida de lá quando resolvida, no mesmo
commit). Assim ninguém precisa caçar buracos pelo repositório.

## 9. Índice remissivo (`INDICE.md`) — atualização obrigatória

O **[INDICE.md](INDICE.md)** lista cada conceito/mecânica do jogo e **onde aparece**
(como o índice remissivo de um livro). Ele existe para ninguém — pessoa ou IA — precisar
varrer o texto inteiro atrás de um termo.

- **Toda modificação de conteúdo atualiza o índice, no mesmo commit**: termo novo →
  entrada nova; menção nova → acrescente o arquivo à linha do termo; menção removida →
  retire; conceito renomeado → crie a remissão ("Nome antigo → ver Nome novo").
- Antes de editar uma regra, **consulte o índice** para saber todos os lugares afetados.

## 10. Camadas: sistema-base, módulos, coleções e cenários

> 🧭 O mapa completo (o que é núcleo × módulo × cenário × variante, com árvore de decisão e
> plano de expansão) está em **[notas-de-design/arquitetura-da-informacao.md](notas-de-design/arquitetura-da-informacao.md)**.


- **`sistema-base/`** — mecânicas básicas de qualquer jogo.
- **`modulos/<nome>/`** — 1 módulo = 1 mecânica opcional + seus recursos (ex.:
  veículos, armas-de-fogo, mutações), reutilizável por vários cenários. Nomes seguem a
  regra da seção 2. Frontmatter de arquivo de módulo: use `cenario: modulo` **e** o campo
  extra `modulo: <nome-do-modulo>`.
- **Coleções** — conjuntos de módulos, definidos em [`modulos/colecoes.md`](modulos/colecoes.md).
- **`cenarios/<nome>/`** — narrativa + mecânicas exclusivas + a seção **"Módulos
  utilizados"** no README do cenário (com link para cada módulo).
- Anti-duplicação: **cenário referencia módulo, módulo referencia base** — cada camada
  escreve só a própria diferença. Mecânica só vira módulo quando mais de um cenário a
  usa (ou vai usar).

## 11. Contrato de conteúdo (`contrato/`) — quem consome o sistema, consome de lá

A ficha, o manual web, o PDF e a plataforma **não transcrevem** regras: eles consomem a
versão limpa e estruturada gerada em [`contrato/`](contrato/README.md). Consequência
prática: **ao editar uma lista** (`sistema-base/listas/` ou módulo de armas/proteções),
rode `python contrato/exportar_catalogo.py` e inclua o `contrato/catalogo.json`
atualizado **no mesmo commit**. O parser do exportador depende dos formatos padrões das
tabelas e seções (cabeçalhos das tabelas dos módulos, seções `### Descrição` /
`### Requisitos de uso` / `### Progressão` das habilidades) — mudou a estrutura, atualize
o exportador junto.

## 12. Separando bastidor de conteúdo público (o que os jogadores veem)

O [manual web](manual/README.md) publica **automaticamente** `sistema-base/`, `modulos/` e
`cenarios/` a cada push em `main` — é a versão "livro de RPG" do sistema, para jogadores. Nem
tudo que escrevemos nessas três pastas é para o jogador ler, então existem duas formas de manter
algo **fora do manual público** sem tirá-lo do repositório:

- **Marcação já existente (frase/bloco)**: qualquer citação (`>`) ou rodapé em itálico começando
  com `⚠️`, `📝` ou `🔧`, ou contendo palavras como "Decidido em"/"Aprovado em"/"A DEFINIR", já
  some sozinha — é a mesma marcação que já usamos para pendências e propostas. **`💡` é o único
  emoji de marcação que fica visível** — é dica de mesa pro jogador/mestre, não bastidor (ver a
  tabela abaixo).
- **Bloco de bastidor explícito**: para um trecho maior (uma seção inteira, sem virar uma citação
  gigante), envolva com `<!-- bastidor:inicio -->` e `<!-- bastidor:fim -->` — tudo entre os dois
  marcadores some do manual público. Exemplo: a seção "Estado da importação" de um README de
  cenário (que é status de curadoria, não lore).
- **Página inteira de bastidor**: adicione `publico: false` no frontmatter (ver seção 3). Use
  para páginas que são guias de criação para quem monta o cenário, não conteúdo para o jogador
  final — ex.: um "pitch e o que muda no base" endereçado a quem vai popular o cenário, não a
  quem vai jogá-lo.

Nos três casos, o conteúdo **continua no repositório, editável normalmente** — só não aparece no
site publicado. A limpeza roda em `contrato/limpeza.py` (também usada pelo PDF e pela ficha) e é
aplicada pelo gerador do manual (`manual/gerar-conteudo.py`) a cada deploy — nunca precisa lembrar
de "gerar a versão limpa" manualmente.

**Os emojis de marcação, e o que cada um significa** (não confundir — separados em 27/07/2026):

| Emoji | Significado | Aparece no site? |
|:--:|---|:--:|
| `💡` | **Dica** de mesa pro jogador/mestre (ex.: "💡 Na mesa: use tokens para marcar…") | ✅ Sim |
| `📝` | **Nota de bastidor/curadoria** — comentário de quem edita pro resto do grupo (ex.: "📝 Nota: troquei X por Y porque…") | ❌ Não |
| `⚠️` | Pendência/ponto em aberto (`A DEFINIR`) | ❌ Não |
| `🧪` | Mecânica em teste/experimental | ❌ Não |
| `🔧` | Ajuste/correção pontual feita numa data | ❌ Não |
| `✅` | Decisão já aprovada pelo grupo (registro de quando/por quem) | ❌ Não |

**Regra prática:** se a frase é *para o jogador usar na mesa*, use `💡`. Se é *sobre o processo
de criação do conteúdo* (por que essa escolha, o que falta, uma proposta a validar), use `📝` —
nunca `💡`.
