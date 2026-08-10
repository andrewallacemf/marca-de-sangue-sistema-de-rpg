# Proposta de atualização do manual — Pontos de Ação, Fadiga e Habilidades

**Status:** aprovada e implementada localmente em 4 de agosto de 2026.

Esta proposta permanece como registro interno da curadoria. A redação pública foi incorporada à
plataforma junto da correção simultânea das regras que a ficha ainda tratava como vigentes.

## Base analisada

- Página pública afetada: `jogador.regras-basicas`, rota
  `/manual/jogador/regras-basicas`.
- Seções deste lote:
  - `jogador.regras-basicas.pontos-de-acao` — `#pontos-de-acao`;
  - `jogador.regras-basicas.fadiga` — `#fadiga`;
  - `jogador.regras-basicas.habilidades` — `#habilidades`.
- Ordem editorial proposta: Pontos de Ação → Fadiga → Habilidades. Habilidades dependem dos dois
  recursos; por isso não devem aparecer antes de ambos serem apresentados.

## Fontes analisadas

- `sistema-base/conceitos/05-habilidades.md`;
- `sistema-base/conceitos/07-pontos-de-acao.md`;
- `sistema-base/conceitos/08-fadiga.md`;
- `sistema-base/conceitos/09-descanso.md`;
- `sistema-base/conflitos/01-conflito-fisico.md`;
- `sistema-base/conflitos/02-acoes-em-conflito.md`;
- `sistema-base/conflitos/03-saude-e-protecao.md`;
- `sistema-base/progressao/01-experiencia-e-evolucao.md`;
- `sistema-base/variantes/habilidades-por-fadiga/README.md`, apenas para conferir o histórico da
  promoção da variante;
- decisões posteriores sobre dano, fadiga, PA e rebalanceamento, apenas para resolver a cronologia;
- implementação da ficha, das fórmulas, do armazenamento e da batalha na plataforma.

## Regra canônica identificada

A antiga variante de habilidades por fadiga foi promovida ao sistema base em 1º de agosto de
2026, com ajustes. A regra oficial é:

- a habilidade é adquirida uma vez e evolui por nível, em vez de possuir pacotes de usos;
- cada uso custa o `PA` indicado e a mesma quantidade de fadiga, salvo regra específica;
- habilidades iguais não são fundidas nem adquiridas novamente;
- a fadiga máxima da personagem é igual ao seu total de pontos de vida;
- personagens perdem `1 PA` a cada 10 pontos de fadiga;
- ao alcançar a fadiga máxima, a personagem fica inconsciente;
- qualquer descanso zera a fadiga.

As diferenças registradas nos documentos históricos da variante — fadiga igual ao nível da
habilidade, penalidade a cada 5 pontos e teto fixo de 40 ou 50 — não são regras publicáveis.

## Alterações e inconsistências encontradas

### A ficha inverte a versão oficial das habilidades

Na plataforma, `VIGENTE` ainda significa habilidades com usos por nível, enquanto
`ALTERNATIVA` significa habilidade com nível e fadiga. O menu permite alternar entre as duas e
novas fichas continuam usando `VIGENTE` por padrão.

Isso contradiz a regra oficial e a decisão já confirmada para o manual. A correção deve:

- tornar o modelo de nível e fadiga a única regra vigente para novas fichas;
- retirar a escolha pública entre “vigente” e “alternativa”;
- preservar e migrar os dados de fichas existentes sem perder características;
- manter compatibilidade explícita ao importar arquivos antigos, em vez de reapresentar a regra
  superada como opção de jogo.

### A trilha de fadiga da plataforma usa números superados

A ficha e a mesa limitam a fadiga a 50, consideram 50 como inconsciência e calculam a perda de
`PA` em intervalos de 5. A regra oficial determina máximo igual ao total de `PV` — normalmente 60
— e perda de `1 PA` a cada 10 pontos.

Esse não é apenas um ajuste visual. Afeta validação, banco, importação, fórmulas, ficha, batalha e
testes. O lote só deve ser publicado depois que esses pontos coincidirem com o texto canônico.

### Ações em conflito ainda contém instrução de riscar usos

`sistema-base/conflitos/02-acoes-em-conflito.md` ainda manda riscar e recuperar espaços de uso de
habilidades. O trecho está superado e não será levado ao manual. Ele deve ser corrigido no
repositório do sistema junto com a implementação, para não continuar reaparecendo em curadorias
futuras.

### O histórico sobre dano foi substituído por regra posterior

Uma decisão intermediária afirmava que apenas dano superficial gerava fadiga. A regra atual de
Saúde e Fadiga foi reformulada depois: cada ponto de dano recebido, de qualquer tipo, gera um
ponto de fadiga. A única exceção atual é o `PV` pago como custo de ativação de magia. A redação
pública segue a regra mais recente e não expõe a cronologia.

### Orientação de design não pertence às regras básicas do jogador

Escadas de custo, critérios para criar habilidades e justificativas de balanceamento são úteis
para autores e narradores, mas interrompem o percurso básico. Esse material não entra neste lote.
Ele deve ser avaliado futuramente para uma página de criação de conteúdo no Manual do Narrador.

## Curadoria proposta

### Publicar neste lote

- o que os `PA` representam e como são recuperados a cada novo turno;
- valor inicial recomendado de 10, piso de 3 após penalidades e teto de 7 `PA` gastos diretamente
  com deslocamento;
- fadiga máxima derivada dos pontos de vida;
- todas as fontes gerais de fadiga;
- conversão voluntária de 2 fadigas em 1 `PA` e seu teto por turno;
- penalidade de `1 PA` por faixa completa de 10 e inconsciência no máximo;
- habilidade como opção ativa comprada uma vez e evoluída por nível;
- custo padrão de `PA` mais fadiga em relação 1:1;
- pagamento do custo mesmo em caso de falha;
- requisitos, múltiplos usos, gatilhos e ordem fora de combate;
- ausência de usos, duplicação e fusão;
- recuperação da capacidade de usar habilidades por meio do descanso.

### Reescrever

- Pontos de Ação começando pelo ciclo do turno, antes de limites especiais;
- Fadiga como um recurso acumulado, explicando primeiro o máximo, depois as fontes e por fim as
  consequências;
- Habilidades na ordem real de uso: adquirir, verificar requisitos, pagar custos, resolver e
  acumular fadiga.

### Encaminhar ao Manual do Narrador

- quando permitir surpresa fora de combate;
- como arbitrar tempo e viabilidade de habilidades fora de conflito;
- como criar e balancear novas habilidades;
- formas excepcionais de recuperar ou descartar características durante combate.

### Manter no bastidor

- frontmatter, datas, pessoas, status e decisões;
- referências a playtests e justificativas de rebalanceamento;
- todo o histórico da variante e da antiga mecânica de usos;
- notas sobre valores ainda sujeitos a observação em mesa;
- instruções para fichas de papel, arquivos e implementação.

## Impactos obrigatórios na plataforma

Antes da publicação, o modelo operacional precisa ser reconciliado:

1. remover da interface a seleção entre regras vigentes e alternativas;
2. adotar nível e fadiga como regra única das habilidades;
3. definir migração segura das habilidades que ainda possuem usos por nível;
4. calcular fadiga máxima a partir da vida máxima atual da personagem;
5. alterar validações e trilhas de 50 para o máximo derivado;
6. aplicar penalidade de `1 PA` a cada 10 pontos de fadiga;
7. deixar a inconsciência dependente do máximo individual;
8. atualizar ficha, batalha, importação, exportação e testes automatizados;
9. substituir textos de descanso que ainda prometem recuperar usos de habilidade.

Não se propõe apagar campos legados imediatamente. Eles podem permanecer internamente durante a
migração e ser retirados apenas quando os arquivos antigos puderem ser importados sem perda.

## Validações da proposta

- a ordem das seções respeita as dependências de conhecimento;
- a redação usa somente as regras promovidas ao núcleo;
- números antigos não aparecem como opção pública;
- o texto distingue `PA` do turno, fadiga acumulada e nível permanente da habilidade;
- a exceção da magia é mencionada sem tentar publicar o módulo antes de sua curadoria;
- nenhum link para página ainda inexistente é necessário neste lote;
- inconsistências de implementação foram tratadas como bloqueio de publicação, não escondidas.

## Prévia da redação pública

---

## Pontos de Ação

Os **pontos de ação**, ou `PA`, determinam quantas ações uma personagem pode realizar durante seu
turno. Mover-se, atacar, trocar um equipamento de mão, preparar um gatilho e usar uma habilidade
são exemplos de ações que podem gastar `PA`.

No início de cada novo turno, a personagem volta a ter seu total de `PA` disponível. O valor
recomendado para uma personagem iniciante é **10 PA**, mas características, equipamentos, carga e
fadiga podem modificar esse total.

### Limites de PA

Penalidades nunca reduzem uma personagem a menos de **3 PA por turno**, a não ser que ela esteja
inconsciente.

Uma personagem pode gastar no máximo **7 PA por turno diretamente com deslocamento**. Cada `PA`
normalmente permite andar um metro, mas terreno difícil e outros efeitos podem alterar essa
relação. Deslocamentos concedidos por habilidades ou traços não contam para esse limite, porque o
`PA` foi gasto na característica, e não diretamente para andar. Quando uma regra mencionar metade
da movimentação, use **3**.

É possível obter mais `PA` por progressão e também assumir [fadiga](#fadiga) para ganhar `PA`
temporários durante um turno.

## Fadiga

A **fadiga** representa o desgaste físico e mental acumulado por uma personagem. Diferentemente
dos `PA`, ela não desaparece no início do turno nem ao fim de uma cena: a fadiga continua marcada
até que a personagem descanse.

### Fadiga máxima

A fadiga máxima de uma personagem é igual ao seu total de pontos de vida. Uma personagem padrão,
com seis membros de 10 pontos de vida, possui **60 pontos de fadiga máxima**. Se sua vida máxima
for reduzida, sua fadiga máxima também diminui.

Ao alcançar a fadiga máxima, a personagem fica **inconsciente**.

### Como acumular fadiga

Uma personagem acumula fadiga quando:

- usa uma habilidade, pagando fadiga igual ao custo em `PA` da habilidade;
- sofre dano: cada ponto de dano recebido gera 1 ponto de fadiga;
- sofre um efeito que indique ganho de fadiga;
- realiza uma reação, pagando fadiga igual ao custo em `PA` que a ação teria;
- assume fadiga voluntariamente para obter `PA` extras.

Ações comuns realizadas no próprio turno gastam `PA`, mas não geram fadiga por si mesmas.
Regras específicas podem estabelecer outro custo. Em especial, uma magia pode cobrar `PA` mais
fadiga ou `PA` mais pontos de vida; pontos de vida pagos para ativá-la não geram fadiga.

### Convertendo fadiga em PA

Durante seu turno, uma personagem pode assumir **2 pontos de fadiga para ganhar 1 PA extra**. Em
um mesmo turno, a quantidade de `PA` obtida dessa forma não pode ultrapassar metade do `PA` base,
arredondada para baixo.

Assim, uma personagem com 10 de `PA` base pode ganhar no máximo 5 `PA` extras no turno, acumulando
10 pontos de fadiga.

### Penalidades de fadiga

A cada 10 pontos completos de fadiga, a personagem perde 1 `PA` por turno:

| Fadiga acumulada | Penalidade |
|:---:|:---:|
| 0 a 9 | nenhuma |
| 10 a 19 | −1 `PA` |
| 20 a 29 | −2 `PA` |
| 30 a 39 | −3 `PA` |
| 40 a 49 | −4 `PA` |
| 50 a 59 | −5 `PA` |
| máximo da personagem | inconsciente |

O piso de 3 `PA` continua valendo enquanto a personagem estiver consciente.

### Recuperando fadiga

A fadiga não diminui sozinha e não é removida quando o dano que a gerou é curado. Qualquer
descanso, curto ou longo, zera toda a fadiga acumulada.

## Habilidades

Habilidades são ações especiais que oferecem vantagens em situações específicas ou permitem
realizar ações que, de outro modo, sofreriam penalidades.

Uma habilidade é adquirida uma única vez e evolui por **nível**. O nível atual determina qual
degrau da progressão descrita na habilidade a personagem alcançou. Cada habilidade define quantos
níveis possui; não existe um limite geral fixo.

Não existem pacotes de usos nem fusão de habilidades iguais. Para fortalecer uma habilidade, a
personagem aumenta seu nível em vez de adquiri-la novamente.

### Usando uma habilidade

Antes de usar uma habilidade, verifique se a personagem:

1. atende a todos os requisitos descritos;
2. possui `PA` suficiente para pagar o custo;
3. pode assumir a fadiga que o uso produzirá.

Cada uso custa o valor indicado em `PA` e a mesma quantidade de fadiga. Uma habilidade de `3 PA`,
por exemplo, custa **3 PA e 3 pontos de fadiga**. Se a própria habilidade indicar um custo de
fadiga diferente, use o valor específico.

Uma habilidade que falha ainda consome seus custos. Se a personagem for interrompida ou impedida
antes de chegar a tentar a ação, nenhum custo é pago.

Habilidades podem ser combinadas com aptidões e traços, mas não com outras habilidades.

### Habilidades durante um conflito

Durante seu turno, uma personagem pode usar quantas habilidades conseguir pagar. Também pode
preparar uma habilidade para um gatilho, pagando `1 PA` adicional. A fadiga acumulada permanece
entre turnos e reduz os `PA` disponíveis conforme aumenta.

### Habilidades fora de conflito

Fora de conflito, o narrador determina se existe tempo e oportunidade para usar a habilidade.
Quando várias habilidades precisam ser resolvidas em sequência, começa aquela que custa menos
`PA`. Em caso de empate, age primeiro quem possuir o maior total de aptidões do atributo Ágil.
Uma ação surpresa pode alterar essa ordem quando o narrador considerar apropriado.

### Recuperando a capacidade de usar habilidades

Habilidades não possuem usos para recuperar. O que limita sua repetição é a fadiga, e qualquer
descanso zera toda a fadiga acumulada.

---

## Confirmação registrada

A redação, a ordem Pontos de Ação → Fadiga → Habilidades e o tratamento da versão antiga apenas
como dado legado foram aprovados. A ficha, a batalha, a persistência e a importação passaram a
usar o modelo oficial; os campos antigos foram preservados somente para compatibilidade.

### Adendo de 10/08/2026

A frase que descrevia cinco níveis como padrão caiu após a auditoria do catálogo: cada habilidade
define sua própria quantidade de níveis, hoje entre três e nove. A referência detalhada e a
redação substituta estão em `propostas/2026-08-10-habilidades.md`.
