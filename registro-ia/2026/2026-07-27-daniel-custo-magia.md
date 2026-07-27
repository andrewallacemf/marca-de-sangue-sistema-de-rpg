---
data: 2026-07-27
pessoa: daniel
ferramenta: claude-cowork
objetivo: decidir o custo da magia no Mukashi (resolve pendência antiga de saúde × sangue × fadiga)
arquivos-alterados:
  - cenarios/mukashi/mecanicas-unicas/magia.md
  - cenarios/mukashi/README.md
  - PENDENCIAS.md
---

# Sessão: custo da magia (Mukashi)

## Prompts dados

> Vamos excluir todas as citações a KI do Mukashi.

> [em resposta ao mapeamento de impacto, perguntando o que substituiria o papel do KI na magia
> e nas raças] Vamos usar o mesmo sistema de magia de Gaéria, onde a magia tem custo de pontos
> de saúde.

> [em resposta à pergunta sobre qual atributo passaria a reger os testes mágicos sem o KI]
> Mudei de ideia. Vamos manter o KI.

> A magia segue custando pontos de saúde. Mas o KI segue como um atributo mágico, para fins de
> aptidão, por exemplo.

## O que foi feito

O pedido inicial ("excluir todas as citações a KI") foi tratado como mudança de mecânica: antes
de apagar qualquer coisa, mapeei todos os lugares que citam KI (8 arquivos do Mukashi + 3
menções do sistema-base/INDICE que usam "KI, Mukashi" só como exemplo de quinto atributo) e
identifiquei que remover o KI quebraria três coisas ao mesmo tempo — a base da magia, os bônus
de raça de Tanuki/Oni e a identidade do dō Onmyōdō. Levei isso ao Daniel antes de mexer em
qualquer arquivo.

Na conversa, o Daniel cogitou substituir o KI por um custo de saúde ao estilo Gaéria, mas depois
decidiu manter o KI como atributo (usado para aptidões/testes mágicos) e **só formalizar o custo
de conjuração como pontos de vida** — ou seja, nada de KI foi removido; o único ajuste real foi
no *custo* da magia, não no atributo que a rege.

Reescrevi `magia.md`: mantive o KI como atributo de referência dos testes, e adicionei a seção
"Custo: pontos de saúde", explicando que conjurar causa dano superficial no próprio conjurador
(no membro à escolha, tronco por padrão), seguindo as mesmas regras de dano/cura de
`03-saude-e-protecao.md` (soma aos 10 espaços do membro, gera fadiga, cura com descanso, pode
evoluir a ferida profunda/permanente em uso excessivo). Deixei a calibração exata de "quantos
pontos de vida por nível de feitiço" como `💡 A DEFINIR`, já que o Daniel não deu números — só a
direção. Atualizei a linha correspondente em `PENDENCIAS.md` (antes "adiado para a fase de
cenários", agora "decidido para o Mukashi, falta calibrar") e o resumo de "Estado da importação"
em `cenarios/mukashi/README.md`.

## Decisões tomadas

- **KI não é removido do Mukashi** — continua como o quinto atributo, usado nos testes/aptidões
  mágicas.
- **Custo da magia = pontos de vida** (dano superficial ao conjurador), não fadiga nem "sangue
  alheio" — resolve a pendência da variante nº 4 **para o Mukashi**. Outros cenários com magia
  (Gaéria) ainda decidem por conta própria quando forem retomados.
- Números exatos (quantos pontos de vida por nível de feitiço) ficam como proposta em aberto —
  não inventei valores sem o Daniel.

## Pendências criadas

- Nenhuma marcação `⚠️ A DEFINIR` nova — já existia uma para o custo da magia, agora com escopo
  reduzido (só falta calibrar os números e escrever a lista de habilidades mágicas).

## Observações

Sessão começou com um pedido (remover KI) que foi revertido no meio da conversa — o resultado
final é mais estreito que o pedido original: só o custo da magia mudou, o resto do Mukashi
(incluindo o KI) ficou intocado.
