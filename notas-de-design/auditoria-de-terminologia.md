---
titulo: Auditoria de terminologia
tipo: regra
cenario: base
status: revisao
tags: [auditoria, terminologia]
atualizado-em: 2026-07-11
---

# Auditoria de terminologia

Auditoria pedida na **decisão nº 6 de 11/07/2026** (ver
[decisoes/2026-07-11-revisao-testes-aptidoes-fadiga.md](decisoes/2026-07-11-revisao-testes-aptidoes-fadiga.md)):
detectar termos ou grafias diferentes usados para o mesmo conceito e **reportar para
decisão do grupo**.

- **Escopo lido:** todos os 34 arquivos `.md` de `sistema-base/` (em 11/07/2026).
- **Nada foi alterado por esta auditoria.** Toda linha marcada como *proposta* é
  sugestão da IA para o grupo aceitar, mudar ou rejeitar.
- Caminhos citados são relativos à raiz do repositório; `conceitos/`, `conflitos/`,
  `listas/` etc. referem-se a subpastas de `sistema-base/`.
- Contexto: as padronizações já executadas em 11/07/2026 foram **"mestre" → "narrador"**
  (decisão nº 1) e **`d` minúsculo** na notação de dados (decisão nº 6). Os resíduos que
  elas não puderam resolver estão na seção (c).

## a) Termos diferentes para o mesmo conceito

| # | Conceito | Termos encontrados | Arquivos / exemplos | Uso dominante | Recomendação (proposta — grupo decide) |
|---|----------|--------------------|---------------------|---------------|------------------------------------------|
| 1 | O confronto em si | "conflito", "combate", "batalha", "embate"; "partida" | `conflitos/01-conflito-fisico.md` ("um conflito (ou combate)"; seção "Sequência de ações em um combate"; "iniciativa da batalha"); `conceitos/05-habilidades.md` (títulos "dentro/fora de combate", corpo "Dentro de uma batalha"); `conceitos/04-aptidoes.md` ("dentro e fora de conflito", exemplos "em batalha"); `conflitos/04-conflito-social.md` ("embate social", "finalizar uma partida") | "conflito" nos títulos oficiais; "combate" e "batalha" no corpo | Adotar **conflito** como termo oficial (conflito físico / conflito social); aceitar **combate** só como sinônimo de *conflito físico* (definir no glossário); eliminar "batalha", "embate" e "partida" de texto de regra |
| 2 | A grade tática do conflito físico | "malha de combate", "malha de batalha", "malha de conflito", "malha hexagonal/quadriculada" | `conflitos/01-conflito-fisico.md` (título "Malha de conflito físico", corpo "malha de combate"); `00-introducao.md` ("malha de batalha hexagonal" e "malha de conflito" no mesmo arquivo) | dividido | Padronizar **malha de conflito** (com "hexagonal"/"quadriculada" como qualificadores) |
| 3 | A grade do conflito social | "malha emocional", "malha social", "malha de conflito social", "Malha de Conflito Social"; e um erro: "malha de combate" | `conflitos/04-conflito-social.md` (usa "malha emocional" e "trilha da malha social" no mesmo arquivo); `listas/habilidades-experimentais-sociais.md` ("malha de conflito social", "Malha de Conflito Social" em Dilema/Psicólogo; em **Meditação** o requisito diz "malha de **combate**", claramente engano) | "malha emocional" no conceito; "malha de conflito social" nas habilidades | Escolher **um** nome (sugestão: **malha de conflito social**, simétrico ao físico) e corrigir o requisito de Meditação |
| 4 | Subdivisões da malha social | "trilha emocional", "trilha de sentimentos", "campo da [emoção]", "postura" | `listas/habilidades-experimentais-sociais.md` (Otimista: "trilha da alegria"; Companheiro de festa: "campo da alegria"; Turrão: "trilha de sentimentos"; Dilema/Ressignificar: "Posturas adjacentes"/"sem passar pela postura") | "trilha" | Padronizar **trilha emocional** ("trilha da alegria" etc.); definir formalmente o que é **postura** na malha ou renomear |
| 5 | Espaço unitário da malha | "casa", "espaço", "quadrado"/"hexágono", "painel" | `listas/acoes-em-combate.md` ("por metro (casa, ou espaço da malha)"); `conflitos/01-conflito-fisico.md` ("casas", "espaços"); `conflitos/02-acoes-em-conflito.md` (ataque de oportunidade: "se mova para outro **painel**") | "casa" e "espaço" empatam; "painel" é isolado | Padronizar **casa** (1 casa = 1 metro), aceitando "hexágono"/"quadrado" só ao falar do formato; eliminar "painel" |
| 6 | Membro fora de uso | "incapacitado" (= 10 de dano profundo), "invalidado" (= 10 de dano permanente), "desabilitado" (sem definição), "impedido/desabilitado", "inválido" | Definições em `conflitos/03-saude-e-protecao.md`; mas `listas/tracos-base.md` (Corredor, Maratonista, Empacado, Firme: "perna/mão **desabilitada**"), `listas/habilidades-base-ageis.md` (Disparada), `listas/habilidades-base-fisicas.md` (Esmagar, Investida), `listas/habilidades-base-mentais.md` e `listas/habilidades-base-sociais.md` ("Não estar impedido/desabilitado"); `listas/acoes-em-combate.md` (Saltar usa o par correto "incapacitada ou invalidada"); `conflitos/01-conflito-fisico.md` ("nocauteado, invalidado") | "desabilitado" domina nas listas, mas **não é definido em lugar nenhum** | Manter o par definido (**incapacitado** = 10 profundo; **invalidado** = 10 permanente) e reescrever cada "desabilitado"/"impedido" indicando **qual** dos dois estados vale (afeta o balanceamento dos requisitos — decisão de regra, não só de texto) |
| 7 | Sigla de experiência | `Exp.`, `Exp` (sem ponto), `exp.`, `EXP`, `xp` | `Exp.` na maioria das listas e em `progressao/01-experiencia-e-evolucao.md`; `8 Exp` sem ponto (mesmo arquivo, linha 16); `exp.` minúsculo nas tabelas de `listas/tracos-base.md`; `EXP` em `conceitos/03-caracteristicas.md` ("Pontos de Experiência (EXP)"); `xp` em todo o `listas/habilidades-experimentais-sociais.md` | **`Exp.`** (~160 ocorrências) | Padronizar **`Exp.`** em todo o material (e grafar a definição como "Pontos de Experiência (`Exp.`)") |
| 8 | Pontos de vida | "pontos de vida (PV)", "pontos de saúde", "vida", "saúde" | `conflitos/03-saude-e-protecao.md` define "60 pontos de vida (PV)" mas manda curar "`1d4` pontos de **saúde**" na cura desajeitada; título "Saúde e Proteção"; tags `[saude, vida]` | "pontos de vida"/"PV" | Usar **pontos de vida (`PV`)** em regra; reservar "saúde" para o nome do capítulo/conceito geral |
| 9 | Postura de defesa | "levantar guarda", "postura defensiva", "posicionamento defensivo", "postura de defesa", "entrar em defensiva" | `conflitos/02-acoes-em-conflito.md` (título "Levantar guarda (Entrar em postura defensiva)", corpo alterna "postura defensiva" e "posicionamento defensivo"); `conflitos/01-conflito-fisico.md` ("o posicionamento defensivo é um tipo de posicionamento definido"); `conflitos/03-saude-e-protecao.md` (ação "entrar em defensiva"); `listas/acoes-em-combate.md` ("Forçar Posicionamento ... por mudança de **postura**") | dividido | Fixar: **levantar guarda** = ação; **posicionamento defensivo** = estado resultante (coerente com a família "posicionamento aberto/definido"); aposentar "postura defensiva"/"entrar em defensiva" |
| 10 | Zona que gera ataque de oportunidade | "área de engajamento", "área de acerto", "área de alcance" | `conflitos/01-conflito-fisico.md` (define engajamento pela "área de acerto corpo-a-corpo", depois usa "área de engajamento"); `conflitos/02-acoes-em-conflito.md` ("área de acerto"); `listas/tracos-base.md` (Alerta/Reativo: "área de engajamento"; Vigilante: "área de **alcance**") | "área de engajamento" | Padronizar **área de engajamento** para a zona tática; reservar **alcance (ideal)** para a propriedade da arma |
| 11 | Alcance da arma | "alcance ideal", "alcance normal" | `listas/equipamentos-base.md` (coluna "Alc. ideal" nas armas corpo a corpo × "Alc. Normal" nas armas à distância); "alcance ideal" também em `conflitos/01-conflito-fisico.md` e habilidades de Alcance | "alcance ideal" | Usar **alcance ideal** nas duas tabelas |
| 12 | Cartas de característica | "baralho" × "deck"; "pilha de cartas utilizadas" × "pilha temporária de descarte"; "cartas de características" × "cartas de habilidade" | `conceitos/03-caracteristicas.md` ("baralho de características", "pilha de cartas utilizadas"); `conflitos/02-acoes-em-conflito.md` ("deck de cartas", "deck de habilidades disponíveis", "pilha temporária de descarte"); `criacao-de-personagem/01-passo-a-passo.md` ("cartas de características"); `progressao/01-experiencia-e-evolucao.md` ("cartas de habilidade") | dividido | Escolher o par oficial (sugestão: **baralho** e **pilha de descarte**, em português) e um único nome para as cartas (**cartas de característica**) |
| 13 | Descanso | "descanso" (genérico), "descanso longo", "momento de descanso" | `conceitos/08-fadiga.md` ("só zera com **descanso**"); `conceitos/04-aptidoes.md` e `criacao-de-personagem/01-passo-a-passo.md` ("a cada **descanso longo**"); `conflitos/03-saude-e-protecao.md` ("Durante um descanso longo"); `conceitos/03-caracteristicas.md` ("momento de descanso") | dividido | Definir os **tipos de descanso** (existe "curto"? só "longo"?) e usar o termo qualificado em cada regra — hoje "descanso longo" aparece sem que tipos de descanso estejam definidos em lugar algum |
| 14 | Moeda do jogo | "moedas" × "ouros" | `listas/equipamentos-base.md` e `listas/protecoes-base.md` ("moedas"); `listas/itens-base.md` (Bússola "8 ouros" etc. — já sinalizado no ⚠️ A DEFINIR do arquivo) | "moedas" | Padronizar **moedas** |
| 15 | Nome do atributo Ágil | "Ágil" × "Agilidade" | `conflitos/02-acoes-em-conflito.md` linha 176 ("se esquivar (com atributo **Agilidade**)") × "Ágil" em `conceitos/02-atributos.md` e todo o resto | "Ágil" | Usar **Ágil** sempre (nome oficial do atributo) |
| 16 | Nomes das obras/manuais | "Manual do Jogador", "livro do jogador", "manual básico", "manual de regras básicas", "livro base", "livro do narrador", "este manual" | `00-introducao.md` ("Manual do Jogador"); `progressao/01-experiencia-e-evolucao.md` ("livro do jogador", "Neste manual"); `conceitos/03-caracteristicas.md` ("manual de regras básicas"); `sistema-base/README.md` ("Manual básico v1.1.0b"); `conceitos/01-testes-e-contratestes.md` ("livro do narrador"); decisões usam "livro base" | dividido | Fixar os títulos oficiais das obras (sugestão: **livro base**, **livro do narrador**, **livro de cenário**) e usar sempre os mesmos |
| 17 | Personagem sem sentidos | "inconsciente" × "desacordado" | `conflitos/03-saude-e-protecao.md` ("fica **inconsciente**"); `listas/habilidades-base-sociais.md` (Animar/Revitalizar: "aliado **desacordado**") | empate | Escolher um (sugestão: **inconsciente**, que já está na regra de saúde) |
| 18 | Teste ligado a atributo | "teste físico", "teste mental", "teste social", "teste ágil de esconder-se" × "teste `Físico`" etc. | `listas/habilidades-base-fisicas.md` (Esmagar: "teste físico"), `listas/habilidades-base-mentais.md` ("teste mental"), `listas/habilidades-base-ageis.md` (Golpe surpresa: "teste ágil de 'esconder-se'") × `conceitos/04-aptidoes.md` ("o teste `Social` falhou") | minúsculo informal | Definir a forma canônica (sugestão: "teste de [atividade] com o atributo `Físico`" ou simplesmente "teste `Físico`") e aplicar nas listas |

## b) Grafias divergentes (maiúsculas, hífens, siglas, erros recorrentes)

| # | Item | Variantes encontradas | Arquivos / exemplos | Recomendação (proposta) |
|---|------|------------------------|---------------------|--------------------------|
| 1 | corpo a corpo | "corpo a corpo" (15×) × "corpo-a-corpo" (1×) | única hifenizada em `conflitos/01-conflito-fisico.md:129` | **corpo a corpo**, sem hífen |
| 2 | bem-sucedido | "bem sucedido" (6×) × "bem-sucedido" (2×) | sem hífen em `progressao/01-experiencia-e-evolucao.md`, `conceitos/01-testes-e-contratestes.md:44`, `listas/habilidades-base-ageis.md:214`, `listas/habilidades-experimentais-sociais.md:22`; com hífen em `conflitos/04-conflito-social.md:20` e `conceitos/01-testes-e-contratestes.md:52` | **bem-sucedido** (norma ortográfica), apesar de minoritário hoje |
| 3 | Sigla `PA` no plural | "PA" invariável × "PAs" | "PAs" em `conflitos/04-conflito-social.md:24` e `listas/habilidades-experimentais-sociais.md` (Psicólogo: "-2 PAs") | Sigla invariável: **"os `PA`"** |
| 4 | Acentuação | "área de engajamento" × "**area** de engajamento" | sem acento em `listas/tracos-base.md:101` (Alerta) | Corrigir para **área** |
| 5 | Crase em "à distância" | "arma/ataque **à** distância" × "a distância" | `conflitos/02-acoes-em-conflito.md` (título "Ataques consecutivos **a** distância" × corpo "arma **à** distância"); `listas/tracos-base.md` (Blindado: "ataques à distância" / "atacado a distância"; Vigilante: "a distância") | **à distância** quando qualifica arma/ataque (locução adjetiva) |
| 6 | Prefixo "auto" | "Auto cura", "Auto tratamento" | `listas/habilidades-base-mentais.md` e `listas/habilidades-base-gerais.md` | **Autocura** e **Autotratamento** (aglutinado, Acordo Ortográfico) |
| 7 | passo a passo | "passo-a-passo" × "passo a passo" | `00-introducao.md:20` e H1 de `criacao-de-personagem/01-passo-a-passo.md` com hífen × `titulo:` do frontmatter sem hífen | **passo a passo** (substantivo, sem hífen); nome de arquivo pode continuar `01-passo-a-passo.md` |
| 8 | Verbo "infligir" | "**Infringe** metade do dano" (infringir = descumprir) | `listas/habilidades-base-fisicas.md` (Atordoar, Desarmar leve, Desarmar pesado, Encontrão, Quebrar guarda — 5 entradas) × uso correto "infligem" em `conceitos/08-fadiga.md` | Corrigir para **inflige** |
| 9 | Maiúsculas em termos de jogo | "Características/Habilidade/Aptidão/Traço/Experiência" com inicial maiúscula no meio de frase × os mesmos em minúsculas; "Narrador" × "narrador"; "Cenário" × "cenário" | ex.: `progressao/01-experiencia-e-evolucao.md` ("adquirir Características", "recompensar ... com Experiência"); `conceitos/03-caracteristicas.md` ("uma Habilidade, Aptidão ou Traço"); `00-introducao.md:48-49` ("o narrador" e logo depois "A pessoa designada como Narrador"); `conceitos/04-aptidoes.md:16` ("cada Cenário pode ter Aptidões") | Definir critério (sugestão: **minúsculas no corpo do texto**, maiúscula só em títulos e cabeçalhos de tabela) e aplicar |
| 10 | Siglas de propriedades de arma | Com ponto (`CORT.`, `CONT.`, `PERF.`, `AGAR.`, `VERS.`, `ARRE.`, `PROJ.`, `PROT.`, `CURT.`, `LONG.`, `DEFL.`) × sem ponto (`DIST`, `LONG`, `ARRE` em requisitos de habilidades) | `listas/equipamentos-base.md` × `listas/habilidades-base-ageis.md` ("arma à distância (**`DIST`**)" — sigla que não existe nas tabelas de equipamento); `CURT.`/`CORT.` diferem por 1 letra e coexistem na mesma tabela; maestrias de `listas/tracos-base.md` cobrem `DEFL.`/`PROJ.` mas não `ARRE.`/`CURT.`/`LONG.`/`PROT.` | Criar **tabela única de siglas** (com ponto), incluir `DIST`/`CURT.`/`LONG.`/`PROT.` nas definições e revisar o risco de confusão **CURT. × CORT.** |
| 11 | Erros pontuais de digitação | "Bala **e** pólvora" (× "Bala de pólvora" 3×); "Boomerangue" (pt: bumerangue); "enxergar o **componente**" (deveria ser *oponente*); "retornar ... **a** consciência" (falta crase) | `listas/equipamentos-base.md:88`; `listas/equipamentos-base.md:44`; `listas/habilidades-base-mentais.md:38` (Analisar fraquezas); `listas/habilidades-base-sociais.md:190` (Revitalizar) | Corrigir na próxima passada de revisão |
| 12 | malha quadrada × malha quadriculada | os dois no mesmo arquivo | `conflitos/01-conflito-fisico.md` (corpo "malha quadrada", legendas e seção de movimentação "quadriculada") | Padronizar **malha quadriculada** |
| 13 | Tag × texto | tag `rerolagem` × texto "re-rolagem"/"re-rolar" | frontmatter de `conceitos/04-aptidoes.md` | Alinhar tag para `re-rolagem` (ou grafar "rerolagem" no texto — grupo decide; o texto atual usa hífen em ~100% dos casos) |

## c) Resíduos que as padronizações das tarefas 1–2 não puderam resolver

As substituições de 11/07/2026 cobriram `sistema-base/`, `cenarios/` e `modulos/`, **exceto
os arquivos reservados a outra frente de edição**. Neles ficaram os últimos resíduos:

| Arquivo (reservado) | Linha | Resíduo | Correção pendente |
|---------------------|-------|---------|-------------------|
| `sistema-base/conceitos/01-testes-e-contratestes.md` | 44 | "o mestre decide que a ação pretendida faz sentido" | → "o narrador decide" |
| `sistema-base/conceitos/01-testes-e-contratestes.md` | 52 | "então o mestre jogará um dado de contrateste" | → "então o narrador jogará" |
| `sistema-base/conceitos/01-testes-e-contratestes.md` | 102 | "**`+1D10 de vantagem`**" (exemplo de Heitor e Alexander) | → `+1d10` (`d` minúsculo) |
| `sistema-base/conceitos/04-aptidoes.md` | 53 | "O mestre também pode decretar outras formas" | → "O narrador também pode decretar" |
| `sistema-base/conceitos/05-habilidades.md` | 46 | "se o mestre permitir" | → "se o narrador permitir" |

Além disso:

- O `INDICE.md` não pôde ser atualizado nesta frente (reservado); ao liberá-lo, conferir
  se há entrada "mestre" a remeter para "narrador" e registrar os arquivos alterados.
- Fora esses pontos, `sistema-base/`, `cenarios/` e `modulos/` estão 100% com
  "narrador" e sem notação de dado com `D` maiúsculo.

## Outras observações encontradas durante a leitura (além de terminologia)

Registradas por terem sido notadas na auditoria; são **divergências de regra**, não de grafia:

1. **Custo de `PA` adicional divergente:** `progressao/01-experiencia-e-evolucao.md`
   (7/14/21/28/35 `Exp.`) × `listas/acoes-em-combate.md` (5/10/15/20/25 `Exp.`) — a mesma
   regra escrita duas vezes com números diferentes (também viola a regra anti-duplicação).
2. **Aptidões "uma vez por dia":** `conceitos/06-tracos.md:16` descreve aptidões como
   aplicáveis "uma vez por dia", conflitando com a regra vigente (usos compráveis,
   recuperados por descanso).
3. **Redutor de proteção:** tabela de `listas/protecoes-base.md` (redutores 1–12) ×
   regra consolidada no mesmo arquivo ("a proteção reduz **1 de dano por acerto**").
4. **Animar** (`listas/habilidades-base-sociais.md`): requisito "aliado desacordado"
   parece copiado de Revitalizar (recuperar aptidões não deveria exigir alvo desacordado).
5. Divergências de custo já sinalizadas com ⚠️ A DEFINIR nos próprios arquivos
   (aspectos com dois valores, Lépido duplicado, Esmagar/Investida/Recompor/Arremessos
   concentrados, moedas × ouros).
