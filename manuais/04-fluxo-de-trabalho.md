# 🔄 04 — O fluxo de trabalho ⭐

*Este é o manual mais importante. É a rotina que você repete toda vez que for contribuir.*

Guarde a regra de ouro:

> ### 🟢 PUXE no começo. SUBA no fim.

Abaixo, o passo a passo completo, do momento em que você senta para trabalhar até o
momento em que termina.

---

## O ciclo, em 6 passos

### ① Antes de começar: PUXAR (pull)
Você precisa começar da versão mais recente, com o que os outros já fizeram.

- No **GitHub Desktop**, clique em **Fetch origin** (canto superior direito).
- Se aparecer **Pull origin** com um número, clique nele para baixar as novidades.
- Espere terminar. Agora sua cópia está atualizada.

> Pular este passo é a causa nº 1 de conflitos. **Sempre puxe primeiro.**

### ② Avise o grupo o que você vai mexer
Não é uma regra técnica, é **combinado de equipe** — e é o que mais evita dor de cabeça.
Mande uma mensagem curta no grupo:

> "Vou mexer na magia de cura do sistema-base agora."

Assim ninguém edita o mesmo arquivo ao mesmo tempo que você. Enquanto formos poucas
pessoas, essa coordenação simples resolve quase tudo.

### ③ Trabalhe (você ou a IA)
Edite os arquivos no seu editor (Obsidian, VS Code…) **ou** peça para a IA editar
(ver [manual da IA](05-editando-com-ia.md)). Siga as [convenções](../CONVENCOES.md).
Salve os arquivos normalmente (Ctrl+S / Cmd+S).

> **Usou IA?** Toda sessão com IA deixa um registro em `registro-ia/` — a própria IA
> cria (é regra do AGENTS.md), você só confere. Detalhes no [manual 05](05-editando-com-ia.md).

### ④ Confira o que mudou
Volte ao **GitHub Desktop**. Na aba **Changes** (Mudanças), à esquerda, aparecem todos os
arquivos que você alterou. Clique em cada um para ver, em verde/vermelho, o que foi
adicionado e removido. **Sempre dê essa olhada** — é sua chance de pegar um engano antes
de enviar.

### ⑤ Carimbe: COMMIT
Um commit é um "ponto de salvamento" com uma etiqueta explicando o que você fez.

- No campo **Summary** (embaixo, à esquerda), escreva uma frase curta e clara **do que
  você fez**, em português. Exemplos bons:
  - `adiciona magia de cura ao sistema-base`
  - `corrige custo de energia da criatura Golem`
  - `cria cenário shogunato: mecânica de honra`
- Clique em **Commit to main**.

> Uma frase por commit. Se você fez duas coisas bem diferentes, pode fazer dois commits.
> Evite `alteracoes` ou `update` — daqui a um mês ninguém vai saber o que era.

### ⑥ No fim: ENVIAR (push)
O commit ainda está só no seu computador. Para os outros verem:

- Clique em **Push origin** (canto superior direito).
- Espere terminar. **Agora sim** seu trabalho está na nuvem e disponível para todos.

### ⑦ Avise que terminou
Volte ao grupo: "Terminei a magia de cura, já subi." Isso libera o arquivo para os outros
e mantém todo mundo no mesmo ritmo.

---

## Resumo visual para colar na parede

```
1. PULL      ← baixe as novidades (GitHub Desktop: Pull origin)
2. AVISO     ← "vou mexer em X" no grupo
3. EDITAR    ← você ou a IA alteram os arquivos
4. CONFERIR  ← aba Changes: olhe o que mudou
             ← usou IA? confira o registro em registro-ia/
5. COMMIT    ← escreva a frase + "Commit to main"
6. PUSH      ← "Push origin" para subir
7. AVISO     ← "terminei X, já subi"
```

Há uma versão pronta para imprimir na raiz do projeto: **[CHECKLIST.md](../CHECKLIST.md)**.

---

## Perguntas que aparecem já no começo

**"Preciso commitar e subir toda vez, mesmo que eu não tenha terminado o texto?"**
Não precisa a cada frase, mas **não termine seu dia com trabalho grande parado sem subir**.
Trabalho que fica só na sua máquina por dias é trabalho em risco e fonte de conflito.
Um bom hábito: ao interromper por mais de algumas horas, faça commit + push do que já tem
(mesmo com status `rascunho`).

**"Fiz besteira num arquivo. E agora?"**
Se você **ainda não commitou**: no GitHub Desktop, clique com o botão direito no arquivo
na aba Changes → **Discard changes**. Ele volta ao que era antes. (Cuidado: isso apaga o
que você fez nele.)
Se você **já commitou e/ou subiu**: não se desespere, nada se perde de verdade. Veja o
[manual de problemas comuns](07-problemas-comuns.md).

**"Apareceu 'conflito'."**
Respire. É normal e tem solução. Vá para o [manual de conflitos](06-conflitos.md).

---

**Próximo:** [Editando com IA →](05-editando-com-ia.md)
