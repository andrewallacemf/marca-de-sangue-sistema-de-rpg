# 🧾 Registro de sessões com IA (diário de bordo)

Esta pasta guarda o **histórico das conversas com IA** que alteraram o projeto: o que
foi pedido (os prompts), o que a IA fez e por quê. É um complemento ao histórico do Git:

- O **Git** responde: *o que* mudou, *quando* e *quem* subiu.
- O **registro-ia/** responde: *o que foi pedido à IA* e *qual foi o raciocínio/decisão*
  por trás da mudança.

Daqui a meses, quando alguém perguntar "por que essa regra ficou assim?", a resposta
estará aqui.

---

## Como funciona

**1 sessão de trabalho com IA = 1 arquivo**, dentro da pasta do ano:

```
registro-ia/
  2026/
    2026-07-11-andre-setup-inicial.md
    2026-07-15-joao-criaturas-junkpunk.md
```

### Nome do arquivo

`AAAA-MM-DD-pessoa-tema.md` — data, primeiro nome de quem conduziu (minúsculo, sem
acento) e um tema curto. Se fizer duas sessões iguais no mesmo dia, acrescente `-2`.

### Conteúdo

Copie o **[`_template-sessao.md`](_template-sessao.md)** e preencha. O essencial:

1. **Prompts dados** — cole o que você pediu, fielmente (pode resumir conversas muito longas,
   mas preserve os pedidos principais palavra por palavra).
2. **O que foi feito** — resumo das mudanças e lista de arquivos alterados.
3. **Decisões** — escolhas feitas no meio do caminho (ex.: "decidimos que cura não
   funciona em constructos").

## Quem escreve o registro?

- **IA "dentro da pasta"** (Claude Code, Codex, Cursor...): **a própria IA cria o
  arquivo automaticamente ao final da sessão** — isso é regra do [`AGENTS.md`](../AGENTS.md).
  Você só confere se ele foi criado antes de commitar.
- **IA "no navegador"** (copiar-colar): você mesmo copia o template e preenche.
  Leva 3 minutos e vale ouro.

## Regras

- O registro **entra no mesmo commit** das mudanças que ele descreve (ou logo em seguida).
- Registro **não se apaga nem se edita depois** — é histórico. Errou? Crie um novo
  esclarecendo.
- Sessão que **não alterou nada** no projeto não precisa de registro.
- Não cole segredos (senhas, tokens, dados pessoais) — nem aqui, nem em lugar nenhum do repo.
