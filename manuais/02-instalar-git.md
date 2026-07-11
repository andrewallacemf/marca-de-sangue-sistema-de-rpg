# 💻 02 — Instalar o programa

*Você faz isto **uma única vez** em cada computador que for usar.*

Existem duas "trilhas". Escolha conforme como você vai trabalhar. Não tem problema fazer
as duas.

- **Trilha A — só edição manual (sem IA):** você vai escrever/editar os textos à mão.
  Precisa apenas do **GitHub Desktop**. **Zero linha de comando.**
- **Trilha B — com IA:** você vai usar Claude Code, Codex ou similar para editar.
  Aí também precisa do **Git** instalado "de verdade". (O GitHub Desktop já traz o Git
  junto, então na prática instalar o GitHub Desktop costuma resolver as duas.)

Comece pela Trilha A. Se e quando for usar IA, veja a Trilha B.

---

## Antes de tudo: crie sua conta no GitHub

1. Acesse **https://github.com** e clique em **Sign up**.
2. Crie a conta com seu e-mail. Anote o **nome de usuário** e a **senha**.
3. Avise a pessoa dona do repositório (o André) qual é o seu nome de usuário. Ela vai te
   dar acesso — sem isso você não consegue abrir o projeto, porque ele é **privado**.

> Você vai receber um e-mail de convite. Aceite-o. Só depois disso o projeto aparece pra você.

---

## Trilha A — GitHub Desktop (todo mundo)

O GitHub Desktop é o aplicativo visual que você vai usar no dia a dia.

### Windows
1. Acesse **https://desktop.github.com** e clique em **Download for Windows**.
2. Abra o arquivo baixado e siga a instalação (é só avançar).
3. Ao abrir, clique em **Sign in to GitHub.com** e entre com a conta que você criou.

### Mac
1. Acesse **https://desktop.github.com** e clique em **Download for macOS**.
2. Abra o arquivo `.zip`, arraste o **GitHub Desktop** para a pasta **Aplicativos**.
3. Abra o app, clique em **Sign in to GitHub.com** e entre com sua conta.

> ✅ Pronto. O GitHub Desktop **já vem com o Git embutido**, então, se você só for editar
> à mão, **acabou a instalação**. Vá para o [primeiro acesso](03-primeiro-acesso.md).

---

## Trilha B — Git "de verdade" (só se for usar IA por linha de comando)

Ferramentas de IA como o **Claude Code** e o **Codex** conversam com o projeto pelo Git.
Se você instalou o GitHub Desktop, provavelmente o Git já está disponível. Para conferir
ou instalar:

### Como conferir se o Git já existe
1. Abra o **Terminal** (Mac) ou o **Prompt de Comando / PowerShell** (Windows).
2. Digite `git --version` e aperte Enter.
3. Se aparecer algo como `git version 2.xx`, **já está instalado**. Se der erro, instale abaixo.

### Instalar o Git
- **Windows:** baixe em **https://git-scm.com/download/win** e instale avançando as telas
  (pode aceitar tudo padrão).
- **Mac:** a forma mais simples é rodar `xcode-select --install` no Terminal e confirmar.

### Dizer ao Git quem é você (faça uma vez)
No Terminal / Prompt, rode estes dois comandos, trocando pelos seus dados:

```
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@exemplo.com"
```

Use **o mesmo e-mail da sua conta do GitHub**. Isso é o que faz cada mudança aparecer
com o seu nome no histórico.

---

## O editor de texto (recomendado, opcional)

Os arquivos são `.md` (Markdown). Você pode abri-los em qualquer editor, mas o
**[Obsidian](https://obsidian.md)** (grátis) é a melhor experiência: ele mostra os links
entre as páginas, tem busca boa e visual agradável. Para usar:

1. Instale o Obsidian.
2. Em **Open folder as vault**, aponte para a pasta do projeto que você vai baixar no
   próximo passo.

Se preferir algo mais simples, o **VS Code** ou até o Bloco de Notas abrem os arquivos
sem problema.

---

**Próximo:** [Primeiro acesso →](03-primeiro-acesso.md)
