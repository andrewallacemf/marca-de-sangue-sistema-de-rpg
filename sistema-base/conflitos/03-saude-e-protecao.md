---
titulo: Saúde e Proteção
tipo: regra
cenario: base
status: estavel
tags: [saude, dano, cura, defesa, vida]
atualizado-em: 2026-07-11
---

# Saúde e Proteção

## Defesa e esquiva

Ao ser atacado, um jogador que não esteja [desabilitado](#membro-desabilitado-incapacitado-ou-invalidado) possui a chance de rolar um contrateste de defesa para se proteger ou esquivar do ataque inimigo. A dificuldade do contrateste depende principalmente de onde o inimigo está mirando.

**Ser alvejado nas pernas ou braços não garante `vantagem`, porém se o inimigo mirar na sua cabeça ou tronco, ele terá `desvantagem` de acerto.**

Armaduras, habilidades e a ação “entrar em defensiva” podem garantir vantagens adicionais de defesa ou redutores de dano caso acertado. Já as [aptidões](../conceitos/04-aptidoes.md) não concedem vantagem: elas permitem rerrolar o dado do teste ou do contrateste depois de conhecido o resultado. Vantagens de esquiva ou redutores de dano provenientes de armaduras são aplicadas em todos os membros do corpo.

## Corpo e vida

**Marca de Sangue adota um sistema de vida dividido entre membros do corpo.** Cada personagem tem 60 pontos de vida (PV), no total. Cabeça, tronco, braço direito, braço esquerdo, perna direita e perna esquerda tem 10 pontos de vida cada um. Desse modo, um personagem pode invalidar ou até perder um braço ou perna e continuar vivendo. **O mesmo não se aplica à cabeça e ao tronco.**

## Pontos de vida e dano

Um dano sofrido em uma parte do corpo pode ser **superficial, profundo** ou **permanente.**

Um soco no olho, por exemplo, vai doer, inchar e te deixar tonto, mas eventualmente vai sarar sozinho e você vai voltar a ser o que era antes — **é o que chamamos de “dano superficial”.**

Um corte de espada, por outro lado, pode causar dano que precisa de atenção especial. Precisará limpar e talvez suturar. Mesmo assim, não são todos os tipos de cortes que vão te atrapalhar para o resto da vida. Esses machucados que demandam cuidado, mas são tratáveis, **é o que chamamos de “dano profundo**”. Ao levar 10 de dano profundo em um membro, ele é **incapacitado** e, de forma geral, passa a não poder ser usado para fazer ações, até que se recupere. Veja as consequências com detalhes mais abaixo.

Entretanto, levar uma facada em algum órgão vital ou ter algum tendão danificado, por exemplo, pode ter consequências para o resto da vida. **É o que chamamos de “dano permanente”. É importante ter atenção: se um dano profundo não for tratado, ele pode se tornar permanente.** Quando um membro leva 10 PV de dano permanente, ele é considerado um membro **invalidado**.

Um ponto de dano profundo se torna permanente em duas situações:

> 💡 **Falta de tratamento**
>
> Se o personagem passar um longo período de tempo ou um descanso sem tentar se tratar, um ponto de dano profundo se torna automaticamente em um dano permanente. *Exemplo: Claus, o espadachim, levou um horrível corte no braço que lhe conferiu 5 pontos de dano profundo. Se ele não passar por tratamento, no próximo dia, terá 4 pontos de dano profundo no braço e 1 ponto de dano permanente.*

> 💡 **Continuidade de danos**
>
> Uma vez que um membro do personagem está preenchido com danos superficiais e ele continuar a levar golpes naquele lugar, todo o novo dano será convertido em dano profundo. Se o membro do personagem está preenchido com danos profundos e ele continuar recebendo dano, todo o novo dano será convertido em dano permanente.

Cada arma pode infligir uma certa quantidade de dano (saiba mais na seção Equipamentos). Da mesma forma, as armaduras podem defender o seu personagem de uma determinada quantidade de pontos de dano.

### Redutor de dano das armaduras (dano mínimo 1)

A tabela de [proteções](../listas/protecoes-base.md) indica **quanto cada armadura reduz do dano de cada golpe** recebido na região protegida — por isso os redutores vão de 1 a 12. A cada golpe recebido na região protegida, a armadura também **perde 1 de durabilidade** naquele local.

**O redutor nunca reduz o dano abaixo de 1:** se o ataque acertou, o alvo sofre **no mínimo 1 ponto de dano**, mesmo que a redução da armadura supere o dano rolado.

> ✅ Decidido em 11/07/2026: a tabela define a redução (o antigo "reduz 1 de dano" era exemplo, não regra universal) e existe o dano mínimo 1 (ver [notas-de-design/decisoes/2026-07-11-terminologia-alcance-descanso.md](../../notas-de-design/decisoes/2026-07-11-terminologia-alcance-descanso.md), item A1).

### Membro desabilitado (incapacitado ou invalidado)

Três termos oficiais descrevem um membro fora de uso:

- **Incapacitado** — membro que acumulou **10 pontos de dano profundo**. Deixa de poder ser usado para ações até se recuperar (consequências em [Penalidades por perda de vida](#penalidades-por-perda-de-vida));
- **Invalidado** — membro que acumulou **10 pontos de dano permanente**. Não se recupera por meios convencionais;
- **Desabilitado** — **termo guarda-chuva**: um membro está desabilitado quando está **incapacitado OU invalidado**. É o termo usado nos gatilhos e requisitos de características (ex.: "não ter nenhuma perna desabilitada").

"Impedido" e "inválido" não são termos do sistema — use **desabilitado**.

> ✅ Decidido em 11/07/2026 (ver [notas-de-design/decisoes/2026-07-11-terminologia-alcance-descanso.md](../../notas-de-design/decisoes/2026-07-11-terminologia-alcance-descanso.md), item B5).

Na ficha de personagem, há um espaço em cada membro para que sejam preenchidos os danos já recebidos. Pontos de dano superficial, profundo e permanente precisam ser preenchidos de forma diferente, para que seja fácil de se distinguir um do outro.

A sugestão dada na ficha que você encontra no final deste manual é marcar os espaços da esquerda para a direita com um traço diagonal para marcar danos superficiais, e, após completar o membro com danos superficiais, usar um “x” para marcar danos profundos. Já os danos permanentes, devem ser indicados preenchendo todo o espaço de um dano. **Para este último caso, não se preocupe com a possibilidade de estragar a ficha, afinal, esse espaço não vai voltar.**

## Cura

Quando é possível descansar — e o que cada tipo de descanso recupera — está definido em [Descanso](../conceitos/10-descanso.md).

### Curando danos superficiais

Durante um [descanso longo](../conceitos/10-descanso.md#descanso-longo), o personagem recupera **`1d6`** pontos de dano superficial. Para curar mais do que isso de uma vez, é preciso a ação de um médico, algum item ou habilidade especial.

Para tentar curar um dano superficial sem descansar e sem um médico, o personagem pode fazer um teste de cura desajeitada. Se passar o resultado do contrateste, cura **`1d4`** pontos de vida. **Se falhar no teste de cura, recebe mais um ponto de dano superficial no local ferido.**

### Tratando danos profundos

Diferentemente dos danos superficiais, os danos profundos não se curam sozinhos com o tempo. Para que eles sejam revertidos, é preciso uma ação ativa do personagem.

Personagens comuns podem fazer, uma vez por dia, um teste de “tratamento improvisado” para tentar transformar um ponto de dano profundo em dano superficial. Para isso joga **`1d10`** e o narrador faz o contrateste.

Se o jogador ganhar, **`1d4`** pontos de dano profundo são transformados em superficial. Se perder, 1 ponto se torna em dano permanente, que não pode ser curado por meios convencionais.

## Penalidades por perda de vida

A cada 10 pontos de dano total que um personagem tiver em sua ficha, ele perde o direito de utilizar 1 ponto de ação. **O mínimo que um personagem pode ter de `PA` é `2 PA`.**

Membros se tornam **incapacitados** se receberem 10 pontos de dano profundo. Isso significa que uma ação que dependa daquele membro será mais difícil de realizar. As consequências são:

- Ao ter uma perna incapacitada, cada 1 metro de movimento passa a custar **`2 PA`**.
- Ao ter a mão hábil incapacitada, o jogador precisa gastar **`1 PA`** a mais para realizar qualquer ataque ou ação com a mão restante.
- Ao ter o tronco incapacitado, todas as ações recebem desvantagem, perde a capacidade de utilizar habilidades e não pode atacar.
- Ao ter a cabeça incapacitada, o jogador fica inconsciente e, se acordar, todas as ações recebem desvantagem e perde a capacidade de utilizar habilidades, não pode atacar.

Um personagem pode morrer de duas formas:

- **Um membro vital invalidado**: Ao ter a cabeça ou o tronco invalidados, ou seja, ao receber 10 pontos de dano permanente em uma dessas partes, que são consideradas vitais; ou
- **Dois membros não vitais invalidados:** Ao ter dois membros periféricos (braço direito, braço esquerdo, perna direita ou perna esquerda) invalidados, ou seja, com 10 pontos de dano permanente acumulados.
