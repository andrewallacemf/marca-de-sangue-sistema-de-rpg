# 🤖 05 — Editando com IA

*Como usar Claude, Codex ou outras IAs para alimentar, corrigir e melhorar o projeto.*

A IA é só uma **forma de editar os arquivos** — no lugar de você digitar tudo à mão. O
ciclo continua o mesmo do [manual do fluxo](04-fluxo-de-trabalho.md): você **puxa** antes,
a IA (ou você) **edita**, você **confere**, **carimba** e **sobe**.

Este projeto foi feito para ser **IA-agnóstico**: qualquer ferramenta que saiba ler e
editar arquivos de uma pasta serve. Existe até um arquivo de instruções para elas — o
[`AGENTS.md`](../AGENTS.md) — que a maioria dos agentes lê sozinha.

---

## As duas maneiras de usar IA

### Maneira 1 — IA "dentro da pasta" (recomendada para mudanças de verdade)
Aqui a IA abre a **sua cópia local** do projeto e edita os arquivos diretamente.
Ferramentas que fazem isso: **Claude Code**, **Codex**, **Cursor**, **Cline**, entre outras.

Fluxo:
1. **PUXE primeiro** (GitHub Desktop → Pull origin). A IA precisa começar do conteúdo atual.
2. Abra a ferramenta de IA **apontando para a pasta do projeto** que você clonou.
3. Peça o que quer, mencionando os arquivos ou a área. A IA vai ler o `AGENTS.md` e o
   `CONVENCOES.md` e trabalhar seguindo as regras. Exemplos de pedido:
   - *"Leia o AGENTS.md e o CONVENCOES.md. Crie um item novo de cura no sistema-base
     seguindo o template de itens."*
   - *"Revise as criaturas do cenário Junkpunk e padronize o frontmatter."*
4. **Confira no GitHub Desktop** (aba Changes) tudo o que a IA mexeu. **Você é o revisor.**
   A IA erra às vezes; a conferência é sua responsabilidade.
5. **Commit + Push** normalmente.

### Maneira 2 — IA "no navegador" (para textos avulsos)
Se você usa a IA numa janela de conversa (site/app), ela **não** mexe na pasta sozinha.
Aí o fluxo é manual:
1. Peça o texto à IA (ex.: "escreva a descrição da criatura X no formato do template abaixo",
   colando o template).
2. Copie a resposta.
3. Cole no arquivo certo, no seu editor. Salve.
4. Confira, commit e push como sempre.

Funciona, mas dá mais trabalho e é mais fácil furar as convenções. Para mudanças
frequentes, prefira a Maneira 1.

---

## Prompt inicial recomendado (cole no começo da conversa com a IA)

> Você vai editar a documentação do Marca de Sangue, um sistema de RPG de mesa. Antes de
> qualquer coisa, leia os arquivos `AGENTS.md` e `CONVENCOES.md` na raiz e siga-os à
> risca. Não invente regras nem lore: onde faltar informação, marque com `> ⚠️ A DEFINIR:`
> e anote no `PENDENCIAS.md`. Faça mudanças pequenas e me mostre o que pretende alterar
> antes de mexer em muitos arquivos. Ao final, crie o registro da sessão em `registro-ia/`
> conforme o protocolo do `AGENTS.md`, incluindo os prompts que eu dei.

---

## O diário de bordo (`registro-ia/`)

Além do histórico do Git, guardamos **o que foi pedido às IAs**: cada sessão vira um
arquivo em [`registro-ia/`](../registro-ia/) com os prompts dados, o que a IA fez e as
decisões tomadas. Assim, meses depois, dá para entender *por que* algo ficou daquele jeito.

- **Maneira 1 (IA na pasta):** a própria IA cria o registro no fim da sessão — é regra
  do `AGENTS.md`. Antes de commitar, **confira se o arquivo está lá** (aba Changes).
  Se a IA esqueceu, peça: *"crie o registro da sessão conforme o AGENTS.md"*.
- **Maneira 2 (navegador):** você copia [`registro-ia/_template-sessao.md`](../registro-ia/_template-sessao.md),
  renomeia (ex.: `registro-ia/2026/2026-07-15-joao-criatura-golem.md`) e preenche você
  mesmo, colando os prompts que usou.

O registro entra **no mesmo commit** das mudanças. Detalhes:
[registro-ia/README.md](../registro-ia/README.md).

---

## Cuidados ao usar IA

- **Sempre puxe antes.** Se a IA trabalhar sobre uma versão velha, você recria conflitos.
- **Você revisa, sempre.** Leia o que a IA escreveu antes de subir. Confira números,
  regras e coerência com o resto do sistema.
- **Uma tarefa por vez.** Peça mudanças focadas. "Refaça o sistema inteiro" costuma dar
  bagunça difícil de revisar.
- **Deixe a IA commitar só se você pediu.** Por padrão, prefira commitar você mesmo pelo
  GitHub Desktop, para ter controle do que sobe.
- **Não cole segredos.** Senhas, tokens e dados pessoais não entram no projeto nem na conversa.

---

**Próximo:** [Quando dá conflito →](06-conflitos.md)
