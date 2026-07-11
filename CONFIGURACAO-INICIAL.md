# 🛠️ Configuração inicial (só para o dono do repositório)

*Este guia é para a pessoa que vai **criar** o repositório e dar acesso aos outros — o
André. Os colaboradores não precisam ler isto; eles começam pelo [COMECE-AQUI](COMECE-AQUI.md).*

Você faz isto **uma vez**. Depois é só o fluxo normal.

> **📍 Situação atual (2026-07-11):** o **passo 1 já foi executado** com ajuda do Claude —
> repositório privado criado em `github.com/andrewallacemf/marca-de-sangue-sistema-de-rpg`.
> Faltam os passos 2 (convidar colaboradores), 3 (importar a v1 do sistema) e 4 (combinados
> do grupo). Essas pendências estão listadas no [PENDENCIAS.md](PENDENCIAS.md).

---

## Passo 1 — Criar o repositório privado no GitHub ✅ *(feito)*

1. Instale o **GitHub Desktop** e entre na sua conta (ver [manual 02](manuais/02-instalar-git.md)).
2. No GitHub Desktop: **File → Add local repository** e aponte para a pasta deste kit
   (a pasta `rpg-mesa` que você baixou/descompactou).
3. Ele vai avisar que a pasta ainda não é um repositório Git e oferecer
   **"create a repository"**. Clique nisso.
   - **Name:** `rpg-mesa` (ou o nome que preferir).
   - Deixe o resto padrão e clique em **Create repository**.
4. Agora publique na nuvem: clique em **Publish repository** (canto superior direito).
   - ✅ **Marque "Keep this code private"** (repositório privado). Importante.
   - Confirme em **Publish repository**.

Pronto: o kit inteiro (estrutura + manuais) está na nuvem, privado, sob a sua conta.

> Alternativa pelo site: criar o repositório vazio em github.com (New → private), e no
> GitHub Desktop clonar e copiar os arquivos deste kit para dentro. O caminho acima é mais direto.

## Passo 2 — Dar acesso aos colaboradores

1. Abra o repositório no site: no GitHub Desktop, **Repository → View on GitHub**.
2. No site, vá em **Settings → Collaborators** (pode pedir sua senha).
3. Clique em **Add people**, digite o **nome de usuário do GitHub** de cada colaborador e
   convide. Eles recebem um e-mail e precisam **aceitar** para o projeto aparecer.

Peça a cada um o nome de usuário **antes**, e avise que precisam aceitar o convite.

## Passo 3 — Carregar a v1 do sistema

Agora traga sua primeira versão do sistema de RPG para dentro da estrutura:

- Regras universais → quebre em arquivos pequenos dentro de `sistema-base/`.
- Cada cenário → dentro da pasta correspondente em `cenarios/`, usando o
  `_template-cenario/` como molde.
- Siga o [CONVENCOES.md](CONVENCOES.md) (nomes, frontmatter).
- Você pode fazer isso com ajuda de IA — ver [manual 05](manuais/05-editando-com-ia.md).
  Um bom primeiro pedido à IA: *"Leia AGENTS.md e CONVENCOES.md. Vou colar a v1 do sistema;
  quebre em arquivos pequenos nas pastas certas, criando o frontmatter de cada um."*

Ao terminar cada bloco: **commit + push** (ver [manual 04](manuais/04-fluxo-de-trabalho.md)).

## Passo 4 — Combinar o funcionamento da equipe

- Eleja um **guardião do Git** (quem tiver mais traquejo técnico) para destravar casos difíceis.
- Defina o **canal de avisos** (um grupo de mensagens) para os "vou mexer / já subi".
- Peça para cada colaborador ler o **[COMECE-AQUI](COMECE-AQUI.md)** e fazer os manuais 01→04.

---

## (Opcional, depois) Site de leitura bonito

Quando quiserem uma versão navegável e agradável para leitura (além dos arquivos crus),
dá para publicar tudo como um site grátis com **MkDocs Material** ou **Astro Starlight**,
lendo os mesmos arquivos Markdown. Não precisa agora — é um "próximo nível" quando o
conteúdo estiver maduro. Fale comigo (Claude) quando chegar a hora.
