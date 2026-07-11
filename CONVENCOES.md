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
