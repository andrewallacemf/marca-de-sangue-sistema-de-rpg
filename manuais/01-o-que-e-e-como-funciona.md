# 📖 01 — Como isto funciona

*Tempo de leitura: ~5 minutos. Você não precisa instalar nada ainda.*

---

## A metáfora do documento compartilhado

Você já editou um documento junto com outras pessoas? A diferença aqui é o **momento**
em que as mudanças se juntam.

- Num documento em tempo real (tipo Google Docs), todo mundo digita ao mesmo tempo e as
  letras aparecem na tela na hora.
- **Aqui não é assim.** Cada pessoa trabalha numa **cópia própria**, no seu computador,
  com calma. Quando termina, ela **envia** o resultado para a versão oficial. As mudanças
  de todo mundo se juntam nesse momento de envio.

Isso tem uma vantagem enorme: **nada nunca se perde** e **tudo fica registrado** — quem
mudou o quê, quando e por quê. E tem um preço: se duas pessoas mexerem exatamente no
mesmo trecho ao mesmo tempo, na hora de juntar alguém precisa decidir qual versão vale.
Isso se chama **conflito**, é raro quando seguimos as boas práticas, e tem
[um manual só para isso](06-conflitos.md).

## As três "coisas" que existem

Vale saber que existem três lugares/ferramentas. Você vai lidar com elas o tempo todo,
então guarde só o nome e a função:

1. **GitHub** — a **nuvem**. É onde mora a versão oficial do projeto (o "repositório").
   Fica num site, acessível de qualquer lugar. É pra lá que você **envia** seu trabalho e
   de lá que você **baixa** o dos outros.

2. **Git** — o **motor de sincronização**. É um programa que roda no seu computador e
   sabe conversar com o GitHub: baixar novidades, registrar mudanças, enviar de volta.
   Você quase nunca fala com ele diretamente.

3. **GitHub Desktop** — o **painel de controle visual**. É um aplicativo com botões que
   comanda o Git pra você, sem linha de comando. É por aqui que você vai clicar em
   "baixar novidades" e "enviar". É a sua interface principal.

> Analogia: o **GitHub** é o servidor de e-mail; o **Git** é o protocolo que envia e
> recebe; o **GitHub Desktop** é o aplicativo de e-mail bonitinho com botões. Você usa o
> aplicativo; o resto trabalha nos bastidores.

## O ciclo que se repete para sempre

Toda vez que você for contribuir, é sempre o mesmo ciclo:

```
   ┌──────────────────────────────────────────────────────┐
   │                                                      │
   ▼                                                      │
① PUXAR ──▶ ② EDITAR ──▶ ③ CARIMBAR ──▶ ④ ENVIAR ────────┘
(pull)      (você/IA)     (commit)       (push)
"baixo o    "faço meu     "registro o    "subo pra
 que há de   trabalho"     que fiz com    nuvem, todo
 novo"                     uma frase"     mundo vê"
```

Só isso. O [manual do fluxo de trabalho](04-fluxo-de-trabalho.md) detalha cada passo
com onde clicar. Mas a espinha dorsal é essa.

## E a parte da IA?

A IA entra no passo **② EDITAR**. Em vez de você digitar tudo à mão, você pode pedir para
uma inteligência artificial (Claude, Codex, etc.) escrever, corrigir ou reorganizar os
arquivos. A IA mexe nos **mesmos arquivos** que você mexeria. Depois, você confere e segue
o ciclo normal (carimbar e enviar). Está tudo no [manual de editar com IA](05-editando-com-ia.md).

O importante: **a IA é só uma forma de editar.** Ela não muda a natureza do projeto. O
lugar continua sendo o mesmo repositório, e as regras de organização
([CONVENCOES.md](../CONVENCOES.md)) valem para você e para a IA igualmente.

---

**Próximo:** [Instalar o programa →](02-instalar-git.md)
