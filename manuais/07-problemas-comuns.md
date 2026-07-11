# 🩹 07 — Problemas comuns

*Um guia de "deu ruim, e agora?". Procure seu sintoma.*

Antes de qualquer coisa, lembre-se do princípio que traz calma: **quase nada se perde de
verdade neste sistema.** Trabalho commitado fica registrado; dá quase sempre para voltar
atrás. Se algo aqui não resolver, chame o **guardião do Git** da equipe.

---

## "Como sei se minha versão está atualizada?"

No **GitHub Desktop**, clique em **Fetch origin** (ele checa a nuvem sem baixar nada).
- Se aparecer **Pull origin** com um número, você está **atrasado(a)**: clique para
  atualizar antes de trabalhar.
- Se aparecer só **Fetch origin** e a mensagem **"No local changes"**, você está em dia.

Faça esse Fetch **toda vez** que sentar para trabalhar. É o jeito de garantir que você
começa da versão certa.

## "O botão Push falhou / pediu para eu puxar primeiro"

Alguém subiu algo depois de você começar. É o comportamento normal e esperado.
1. Clique em **Pull origin** para trazer as novidades.
2. Se não houver conflito, o Git junta tudo sozinho — aí é só **Push origin** de novo.
3. Se houver conflito, vá para o [manual de conflitos](06-conflitos.md).

## "Editei o arquivo errado / quero desfazer o que fiz (ainda não commitei)"

No GitHub Desktop, aba **Changes**, clique com o botão direito no arquivo →
**Discard changes**. Ele volta ao estado da última versão salva no projeto.
⚠️ Isso apaga o que você tinha feito nele desde o último commit. Use com atenção.

## "Já commitei uma bobagem, mas ainda NÃO dei push"

Você pode desfazer o último commit: menu **Repository → Undo last commit** (ou o botão
**Undo** que aparece logo após commitar). As mudanças voltam para a aba Changes, como se
você não tivesse carimbado. Ajuste e commite de novo.

## "Já subi (push) uma bobagem"

Não apague nada na mão nem entre em pânico. A forma segura é **fazer uma nova mudança que
corrige** e subir por cima (o histórico registra os dois passos, o que é ótimo). Se foi
algo sério (apagou um arquivo importante, por ex.), chame o guardião do Git: como tudo
fica no histórico, dá para recuperar a versão anterior.

## "Sumiu conteúdo / um arquivo desapareceu"

Provavelmente está no histórico. No GitHub Desktop, aba **History**, você vê todos os
commits e consegue ver o que cada um mudou. O guardião do Git consegue restaurar uma
versão anterior de um arquivo a partir daí.

## "Apareceu um monte de arquivo estranho na aba Changes que eu não mexi"

Costuma ser lixo do sistema (`.DS_Store`, caches do Obsidian). O projeto já tem um
`.gitignore` para ignorar os mais comuns. Se aparecer algo assim, **não commite** —
confirme com o grupo antes.

## "O GitHub Desktop não mostra o repositório para clonar"

Você provavelmente ainda não tem acesso. Confirme com o dono do projeto que:
1. você mandou seu **nome de usuário do GitHub**;
2. você **aceitou o convite** que chegou por e-mail.

## "Está tudo muito confuso e eu quero recomeçar limpo"

Se você **não subiu nada** que valha a pena salvar, a saída mais simples é: feche o
projeto, renomeie/mova a pasta local para um canto (como backup) e **clone de novo** do
zero (ver [primeiro acesso](03-primeiro-acesso.md)). Você volta a uma cópia limpa e
atualizada. Faça isso com o guardião do Git se tiver medo de perder algo.

---

## Quando chamar o guardião do Git

Elejam **uma pessoa** da equipe (idealmente quem tem mais familiaridade técnica) como
"guardião do Git". Chame essa pessoa quando:
- um conflito ficou grande demais e você travou;
- algo importante parece ter sumido;
- você não tem certeza se uma ação vai apagar trabalho.

Não há vergonha nenhuma em chamar. É mais rápido e seguro do que tentar adivinhar.

---

**Próximo:** [Boas práticas →](08-boas-praticas.md)
