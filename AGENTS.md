# Instruções para agentes de IA

Este arquivo é lido por ferramentas de IA (Codex, Claude Code, Cursor, Cline, Aider,
Kimi, Minimax e outras) para entender como trabalhar neste repositório. Se você é um
agente de IA, **leia este arquivo inteiro antes de qualquer edição.**

## O que é este projeto

Documentação do **Marca de Sangue**, um sistema de RPG de mesa, dividida em:

- `sistema-base/` — regras universais, válidas para todos os cenários.
- `modulos/<nome>/` — mecânicas opcionais reutilizáveis (1 módulo = 1 mecânica + seus
  recursos); **coleções** são conjuntos nomeados de módulos (ver seção Camadas abaixo).
- `cenarios/<nome>/` — livros de cenário: narrativa + mecânicas **exclusivas** daquele
  mundo + a declaração de quais módulos usa.
- `manuais/` — guias operacionais para colaboradores humanos. **Não altere** sem pedido explícito.
- `registro-ia/` — diário de bordo das sessões com IA (ver protocolo abaixo).
- `INDICE.md` — índice remissivo: cada conceito e onde aparece. **Consulte antes de
  procurar por grep às cegas; atualize a cada edição.**
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
10. **Mantenha o `INDICE.md` em dia — obrigatório.** Toda modificação de conteúdo deve
    atualizar o índice remissivo: termo novo → entrada nova; menção nova a um conceito →
    acrescente o arquivo na linha do termo; menção removida → retire. Use o índice também
    para **localizar** conceitos rapidamente em vez de varrer o texto.
11. **Mudança de mecânica exige análise de impacto ANTES de editar** (protocolo abaixo).
    Nunca implemente direto uma alteração de regra que interage com outras.

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

## Protocolo de análise de impacto (mudanças de mecânica — obrigatório)

Quando a pessoa propuser **modificar uma mecânica** do livro:

1. **Mapeie o alcance:** use o `INDICE.md` para localizar onde o conceito é definido e
   todos os lugares que o citam (direta ou indiretamente).
2. **Analise as interações:** verifique como a mudança conversa com as demais mecânicas
   (custos, desempates, ações, listas, cenários/módulos que dependem dela) e com a
   jogabilidade — procure conflitos, efeitos colaterais e situações não previstas.
3. **Se identificar efeito colateral, inconsistência ou ponto que exige atenção:**
   **PARE antes de editar** e retorne à pessoa uma análise com (a) o contexto do
   problema, (b) o que exatamente conflita e onde, e (c) **propostas de como superar o
   problema** para viabilizar a alteração. A pessoa refina a proposta; só então implemente.
4. **Se não identificar nenhum impacto:** diga explicitamente que verificou e não
   encontrou interações problemáticas, e siga com a implementação.
5. Após implementar: atualize **todas** as ocorrências mapeadas no passo 1, o `INDICE.md`
   e, se restar algo aberto, o `PENDENCIAS.md`.

## Camadas do sistema (módulos e coleções)

O conteúdo do jogo se organiza em camadas — respeite-as ao criar ou mover conteúdo:

1. **`sistema-base/`** — mecânicas básicas, presentes em qualquer jogo.
2. **`modulos/<nome>/`** — 1 módulo = 1 mecânica opcional + todos os seus recursos
   (ex.: veículos, armas-de-fogo, mutações). Reutilizável por vários cenários.
   Módulos referenciam o sistema-base; nunca o copiam.
3. **Coleções** — conjuntos nomeados de módulos (ex.: coleção *armas*), definidas em
   `modulos/colecoes.md`.
4. **`cenarios/<nome>/`** — narrativa + mecânicas exclusivas do mundo + a seção
   **"Módulos utilizados"** no README (o manifesto). Uma mecânica só vira módulo quando
   mais de um cenário a usa (ou há perspectiva concreta disso); senão, fica no cenário.

Regra de ouro anti-duplicação: **cenário referencia módulo, módulo referencia base** —
cada um descreve apenas a sua diferença.

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
