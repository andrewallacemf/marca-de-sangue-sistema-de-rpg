---
data: 2026-07-11
pessoa: andre
ferramenta: claude-cowork
objetivo: montar o processo de colaboração para leigos, o diário de bordo de IA e criar o repositório no GitHub
arquivos-alterados:
  - registro-ia/README.md
  - registro-ia/_template-sessao.md
  - registro-ia/2026/2026-07-11-andre-setup-inicial.md
  - PENDENCIAS.md
  - CHECKLIST.md
  - .gitattributes
  - AGENTS.md
  - CONVENCOES.md
  - README.md
  - COMECE-AQUI.md
  - CONFIGURACAO-INICIAL.md
  - manuais/04-fluxo-de-trabalho.md
  - manuais/05-editando-com-ia.md
---

# Sessão: setup inicial do processo e do repositório

## Prompts dados

> Eu comecei no chat do Claude uma conversa sobre como criar um repositório de
> documentações para um sistema de RPG que eu estou criando com os amigos meus, que
> pudesse ser atualizado por todo mundo (com ou sem uso de IA) sem utilizar o Notion.
> [...] A partir disso, eu quero que você entenda o que já foi recomendado e me faça uma
> série de perguntas para a gente criar um sistema e processo eficiente e maduro, pronto
> para leigos utilizarem, que possa ajudar as IAs a pegar na mão da pessoa e seguir o
> passo a passo, evitando que a pessoa tenha problemas, fique perdida ou faça coisas que
> ela não deveria fazer sem querer, por falta de conhecimento no GitHub e em processos
> Git no geral. Além disso, depois que a gente tiver toda essa estrutura e processo
> montado eu quero que você acesse o meu GitHub pessoal, crie um projeto novo privado
> chamado "Marca de sangue sistema de RPG" e prepare todo o setup necessário. [...]
> Quero que a gente saia com: ler tudo com facilidade, encontrar com facilidade,
> consultar, alterar, ter noção do que alteramos ao longo do tempo, e manter o registro
> de cada prompt que nós demos às IAs (um log/histórico das conversas com IA, para além
> do histórico do projeto em si).

## O que foi feito

Sessão de fundação do processo, sobre o kit criado na conversa anterior do Claude:

- Criado o **diário de bordo de IA** (`registro-ia/` com README, template e este primeiro registro).
- Criado o **`PENDENCIAS.md`** (lista viva do que falta definir) e o **`CHECKLIST.md`** (ciclo em 1 página).
- **`AGENTS.md`** ganhou: protocolo obrigatório de registro de sessão, manutenção do
  PENDENCIAS.md, lista de comandos Git proibidos e o "fluxo guiado para leigos".
- **`CONVENCOES.md`** ganhou as seções 7 (registro-ia) e 8 (pendências).
- README, COMECE-AQUI, CONFIGURACAO-INICIAL e manuais 04/05 atualizados para refletir
  o novo processo e o nome **Marca de Sangue**.
- Adicionado `.gitattributes` (normalização de quebras de linha Windows/Mac/Linux).
- Repositório privado criado no GitHub: `andrewallacemf/marca-de-sangue-sistema-de-rpg`.

## Decisões tomadas

- **Fluxo Git:** todos commitam direto na `main`, com a regra "pull antes, push depois"
  + aviso no grupo. Sem branches/PR por enquanto (simplicidade para leigos).
- **Log de IA:** 1 arquivo por sessão, em `registro-ia/<ANO>/AAAA-MM-DD-pessoa-tema.md`;
  a própria IA cria ao final da sessão.
- **Pendências:** rastreadas em `PENDENCIAS.md` na raiz (não em GitHub Issues).
- **Nome do repo:** `marca-de-sangue-sistema-de-rpg` (privado).
- **Ferramentas do grupo:** qualquer agente de IA que edite arquivos (Claude Code/Cowork,
  Codex, Cursor, Kimi, Minimax...) + editores manuais. O AGENTS.md é o contrato comum.

## Pendências criadas

- Importar o material v1 do Marca de Sangue (existe pronto, fora do repo).
- Convidar os colaboradores no GitHub (aguardando usernames).
- Definir canal de avisos e guardião do Git.

## Observações

Este arquivo é também o **exemplo vivo** do padrão de registro. Na dúvida sobre como
preencher o seu, olhe este.
