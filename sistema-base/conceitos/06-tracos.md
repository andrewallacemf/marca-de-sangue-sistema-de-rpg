---
titulo: Traços
tipo: regra
cenario: base
status: revisao
tags: [tracos, tecnicas, maestrias, aspectos, requisitos]
atualizado-em: 2026-07-11
---

# Traços

Traços são características passivas e não consumíveis que podem ter efeito em determinadas situações. Uma vez comprado, o traço permanece **ativo** enquanto seus [requisitos](#requisitos) estiverem atendidos. Traços **não gastam** [pontos de ação](07-pontos-de-acao.md) (**`PA`**): são passivos, seus efeitos estão sempre ativos e não há gasto de nenhum tipo para mantê-los.

Tanto dentro quanto fora de batalha, basta observar os efeitos do traço e aplicá-los durante as situações propícias. **Os efeitos dos traços não são consumíveis e, portanto, não necessitam de recuperação.**

Note que os traços também diferem das [aptidões](04-aptidoes.md). Traços se aplicam sempre que for cabível (de forma passiva), enquanto as aptidões são consumidas a cada uso (de forma ativa): pode-se usar quantas estiverem disponíveis e a recuperação acontece em um descanso longo.

**Traços não possuem níveis** — níveis são característica das [habilidades](05-habilidades.md). A progressão entre traços acontece por **requisitos**: um traço mais avançado pode exigir a posse de outro traço (como uma técnica). "Traços encadeados" não são níveis — são apenas traços ligados por requisito, e o requisito determina se o traço está **ativo**, não impede a compra (veja abaixo).

## Requisitos

Traços podem ter **requisitos**: condições que precisam estar atendidas para que o efeito do traço se aplique. Os requisitos podem ser de tipos variados, por exemplo:

- **Condição simples** — ex.: estar usando escudo;
- **Possuir outra característica** — uma habilidade ou outro traço (é assim que funciona a progressão entre traços);
- **Integridade corporal** — ex.: ter as duas pernas, ou não ter nenhuma mão desabilitada.

O requisito determina se o traço está **ativo** — ele **não impede a compra**: é possível comprar um traço sem atender aos seus requisitos; ele apenas permanece **inativo** (sem efeito) até que sejam atendidos. Comprar um traço sem perspectiva de atender aos requisitos não costuma fazer sentido, mas não é proibido.

> ✅ Decidido em 11/07/2026 (ver [notas-de-design/decisoes/2026-07-11-reacao-posicionamento-propriedades.md](../../notas-de-design/decisoes/2026-07-11-reacao-posicionamento-propriedades.md)).

Existem diferentes categorias de traços, sendo:

## Técnicas

> ✅ Decidido em 11/07/2026: o nome oficial da categoria é **técnica** (ver [notas-de-design/decisoes/2026-07-11-ajustes-pos-lote-1.md](../../notas-de-design/decisoes/2026-07-11-ajustes-pos-lote-1.md)).

Algumas ações exigem conhecimento para serem realizadas: andar, todo mundo sabe; nadar ou trabalhar em uma forja, não. Quem não possui a técnica correspondente realiza os testes dessas ações com a **desvantagem natural** da atividade.

Técnicas são traços que representam esse saber: possuir a técnica em uma atividade (ex.: **"Técnica em natação"**) **apenas anula a desvantagem natural** dos testes daquela atividade. **Técnicas não concedem vantagem.**

As técnicas também servem de requisito para outros traços: maestrias e traços de poderes especiais (ex.: "nadar na lava", que desbloqueia o que normalmente seria impossível) podem ter a técnica correspondente como [requisito](#requisitos) — sem ela, o traço fica inativo.

## Maestrias

Maestrias são traços relacionados ao domínio de propriedades específicas de armas, armaduras, itens (equipamentos) e formas de combate — inclusive o **ataque desarmado**. Comprar maestrias permite que o personagem use os efeitos específicos daquela propriedade ou forma de combate.

Para ver as maestrias disponíveis, consulte a lista de maestrias base na “Lista de traços base” na seção “Recursos básicos do sistema” e a lista de maestrias específicas do cenário escolhido.

> ✅ Decidido em 11/07/2026: a categoria **especializações deixou de existir** — as antigas especializações que anulavam desvantagem natural viraram **técnicas**, e a "especialização em ataque desarmado" virou **maestria** (mesmo custo das demais). Ver [notas-de-design/decisoes/2026-07-11-fadiga-aspectos-organizacao.md](../../notas-de-design/decisoes/2026-07-11-fadiga-aspectos-organizacao.md).

## Aspectos

Aspectos são traços que afetam a forma como o personagem responde a determinadas situações. Comprar aspectos permite que o personagem realize ações ou ignore regras em determinadas situações.

Para ver os aspectos disponíveis, consulte a lista de aspectos base na “Lista de traços base” na seção “Recursos básicos do sistema” e a lista de aspectos específicos do cenário escolhido.
