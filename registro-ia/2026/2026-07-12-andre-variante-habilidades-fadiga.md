---
data: 2026-07-12
pessoa: andre
ferramenta: claude-cowork
objetivo: criar a área e a primeira versão da variante experimental "habilidades por nível e fadiga" para playtest
arquivos-alterados:
  - sistema-base/variantes/habilidades-por-fadiga/README.md
  - sistema-base/variantes/habilidades-por-fadiga/00-visao-geral.md
  - sistema-base/variantes/habilidades-por-fadiga/01-habilidades.md
  - sistema-base/variantes/habilidades-por-fadiga/02-fadiga.md
  - sistema-base/variantes/habilidades-por-fadiga/03-impactos-nas-demais-mecanicas.md
  - sistema-base/variantes/habilidades-por-fadiga/04-extensoes-opcionais.md
  - sistema-base/variantes/habilidades-por-fadiga/pendencias-e-testes.md
  - PENDENCIAS.md
---

# Sessão: variante "habilidades por nível e fadiga" (v1 para playtest)

## Prompts dados

> Beleza, vamos trabalhar na mecânica alternativa que a gente queria experimentar. Eu quero que você crie uma área separada para a gente trabalhar essa mecânica alternativa, onde você vai resgatar a nossa proposta, o que a gente queria fazer. Você vai criar essa primeira versão de como fica a mecânica do sistema, o que muda em cada mecânica, para que a gente tenha principalmente aquela questão ali da utilização de fadiga como o critério que define quanto você pode utilizar uma habilidade que você comprou. [...] Comece a fazer um planejamento [...] Depois, estrutura o campo [...] e, por último, vai criando essa alternativa, uma coisa de cada vez [...]

> Respostas de direção: área **dentro de `sistema-base/`** (`sistema-base/variantes/habilidades-por-fadiga/`); a IA **propõe os números iniciais** (marcados como proposta + pendência da variante); escopo = **núcleo + extensões opcionais** marcadas.

## O que foi feito

Criada a área **`sistema-base/variantes/habilidades-por-fadiga/`** com a primeira versão da
variante, resgatada de `conceitos/09-mecanica-alternativa-habilidades-e-fadiga.md` e das notas
de design de 11/07. Sete arquivos:

- `README.md` — o que é, aviso de experimental/fora do canon, índice, relação com o base.
- `00-visao-geral.md` — motivação + tabela "o que muda" (habilidades, fadiga, PA, aptidões, características, descanso).
- `01-habilidades.md` — habilidades **por nível** (sem usos, sem fusão); **uso custa `PA` + fadiga**.
- `02-fadiga.md` — fadiga como combustível; **limiar livre 10**, **−1 `PA` a cada 5**, inconsciência 40, piso 4; recuperação por descanso; registro na barra/dado.
- `03-impactos-nas-demais-mecanicas.md` — PA permanecem; aptidões **fora**; sem fusão; descanso recupera fadiga.
- `04-extensoes-opcionais.md` — **A** (dois tipos de fadiga) e **B** (fadiga em contratestes + descansar em batalha + limiar maior), marcadas como opcionais.
- `pendencias-e-testes.md` — números a ajustar, decisões a confirmar e roteiro de playtest.

No `PENDENCIAS.md` central, a linha do 🧪 playtest foi atualizada para apontar para a nova área.

## Decisões tomadas

- Local da área: `sistema-base/variantes/habilidades-por-fadiga/` (escolha do André).
- Números iniciais **propostos pela IA** (a validar no playtest): custo de fadiga por uso **= nível** da habilidade; limiar livre **10**; penalidade **−1 `PA` a cada 5**; inconsciência **40**; piso **4 `PA`**.
- Escopo v1: **núcleo** + duas **extensões opcionais** marcadas (não integradas ao núcleo).
- A área fica **fora do `INDICE.md`** enquanto experimental (evita definições concorrentes) — registrado no README.

## Pendências criadas

- Ajustar os números propostos e decidir promover/descartar (rastreado no `PENDENCIAS.md` central e detalhado em `pendencias-e-testes.md`).
- Extensão B (fadiga em contratestes) depende de conversa **com o Gabriel**.
- Vários `⚠️ A DEFINIR` internos (custo exato por uso, recuperação dos dois tipos de fadiga, custos da extensão B).

## Observações

- **Nada do sistema-base canônico foi alterado**: a variante é aditiva e isolada; o doc
  `conceitos/09` (que descreve a proposta em avaliação) foi mantido como está.
- Nenhum número da variante é regra vigente — tudo é `💡 PROPOSTA` para teste.
- Ambiente: arquivos criados com as ferramentas de edição, sem git. Lembrete do `.git/index.lock` antes do commit.

Sugestão de mensagem de commit:
`cria variante experimental habilidades-por-fadiga (v1 para playtest) em sistema-base/variantes/`
