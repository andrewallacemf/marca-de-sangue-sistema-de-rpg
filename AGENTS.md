# Instruções para agentes de IA

Este arquivo é lido por ferramentas de IA (Codex, Claude Code, Cursor, Cline, Aider,
Kimi, Minimax e outras) para entender como trabalhar neste repositório. Se você é um
agente de IA, **leia este arquivo inteiro antes de qualquer edição.**

## O que é este projeto

Documentação do **Marca de Sangue**, um sistema de RPG de mesa, dividida em:

- `sistema-base/` — regras universais, válidas para todos os cenários.
- `cenarios/<nome>/` — livros de cenário; cada um adiciona mecânicas, itens, criaturas,
  locais e lore específicos por cima do sistema-base.
- `manuais/` — guias operacionais para colaboradores humanos. **Não altere** sem pedido explícito.
- `registro-ia/` — diário de bordo das sessões com IA (ver protocolo abaixo).
- `PENDENCIAS.md` — lista viva do que falta definir no sistema.

**Importante: as pessoas deste projeto são leigas em Git/GitHub.** Seu papel inclui
guiá-las pelo processo, um passo de cada vez, e protegê-las de erros — não apenas editar
arquivos.

## Regras inegociáveis

1. **Leia `CONVENCOES.md` antes de criar ou editar conteúdo** e siga-o à risca
   (nomes de arquivo, frontmatter, idioma, estrutura).
2. **Não invente regras nem lore.** Se falta informação, escreva um trecho marcado
   `> ⚠️ A DEFINIR:` descrevendo a lacuna, em vez de preencher com suposições.
3. **Não duplique conteúdo.** Cenários referenciam o sistema-base por link; descrevem
   apenas a diferença, nunca copiam a regra base inteira.
4. **Faça edições pequenas e focadas.** Um assunto por arquivo. Prefira criar/editar
   poucos arquivos por vez a reorganizar tudo de uma vez.
5. **Preserve o frontmatter.** Ao editar, atualize `atualizado-em` e, se fizer sentido,
   `status`. Nunca remova campos obrigatórios.
6. **Não mexa em Git sozinho sem confirmação.** Você pode editar os arquivos, mas
   `commit` e `push` devem ser confirmados pela pessoa, a menos que ela peça explicitamente
   para você cuidar disso. Se for commitar, escreva uma mensagem curta e descritiva em
   português (ex.: `adiciona magia de cura ao sistema-base`).
7. **Antes de começar, verifique se o repositório está atualizado** (a pessoa deve ter
   feito `pull`). Ao terminar, lembre a pessoa de revisar as mudanças e sincronizar.
8. **Registre a sessão** (protocolo abaixo). Sessão que altera conteúdo e não deixa
   registro em `registro-ia/` está incompleta.
9. **Mantenha o `PENDENCIAS.md` em dia.** Criou uma marcação `⚠️ A DEFINIR`? Adicione a
   linha correspondente no `PENDENCIAS.md`. Resolveu uma? Remova dos dois lugares.

## Comandos Git proibidos

Nunca execute (nem sugira a um leigo executar): `push --force` (qualquer variação),
`reset --hard`, `rebase`, `checkout`/`restore` que descarte trabalho não commitado sem
confirmação explícita, apagar a pasta `.git`, ou reescrever histórico já enviado.
Se a situação parecer pedir um desses, **pare e explique** que a pessoa deve acionar o
guardião do Git do grupo.

## Protocolo de registro de sessão (obrigatório)

Ao final de **toda sessão em que você alterou conteúdo**, antes do commit final:

1. Copie `registro-ia/_template-sessao.md` para `registro-ia/<ANO>/AAAA-MM-DD-pessoa-tema.md`
   (crie a pasta do ano se não existir).
2. Preencha: os **prompts que a pessoa deu** (fielmente — resuma só o que for muito longo),
   o que você fez, decisões tomadas, pendências criadas e a lista de arquivos alterados
   no frontmatter.
3. Inclua esse arquivo no mesmo commit das mudanças.
4. Nunca edite ou apague registros de sessões anteriores.

## Fluxo guiado para a pessoa (leigos)

- **No início:** pergunte se a pessoa deu `pull` (GitHub Desktop → Fetch/Pull origin) e
  avisou o grupo. Se puder verificar o estado do repositório, verifique.
- **Durante:** faça mudanças pequenas; explique em linguagem simples o que está fazendo.
- **No fim:** mostre a lista do que mudou, confirme o registro da sessão, sugira a
  mensagem de commit e lembre: **conferir → commit → push → avisar o grupo**
  (ver `CHECKLIST.md`).

## Ao criar um cenário novo

Copie a pasta `cenarios/_template-cenario/` inteira, renomeie conforme `CONVENCOES.md`
e preencha a partir dos templates. Não escreva dentro do `_template-cenario/` original.

## Ao criar um item/criatura/mecânica

Comece a partir do template correspondente (`_template-*.md`) na pasta certa. Copie,
renomeie, remova as instruções entre `<!-- ... -->` e preencha.

## Estilo de escrita

- Português do Brasil, tom claro e direto, coerente com o material já existente.
- Regras devem ser inequívocas: descreva gatilho, efeito, custo e exceções.
- Mantenha exemplos curtos quando ajudarem a esclarecer uma regra.
