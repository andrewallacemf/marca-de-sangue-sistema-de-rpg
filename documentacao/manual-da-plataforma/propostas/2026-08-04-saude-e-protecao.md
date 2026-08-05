# Proposta — Saúde e proteção

**Estado editorial:** implementada localmente, aguardando aprovação funcional
**Público:** jogador
**Destinos:** `/manual/jogador/saude-e-recuperacao` e
`/manual/jogador/recursos/protecoes`

## Fontes curadas

- `sistema-base/conflitos/03-saude-e-protecao.md`;
- `sistema-base/conceitos/09-descanso.md`;
- `sistema-base/listas/acoes-em-combate.md`;
- `sistema-base/listas/habilidades-base-mentais.md`;
- `sistema-base/listas/habilidades-base-sociais.md`;
- `sistema-base/listas/protecoes-base.md`;
- `modulos/protecoes/README.md`.

As fontes foram reconciliadas antes da redação pública. Notas de calibração,
frontmatter, histórico e pendências não foram transportados para o manual.

## Decisões aprovadas

1. Existem apenas **dano curável** e **dano permanente**. A distinção anterior entre
   superficial e profundo foi retirada.
2. Não há conversão de ferida por falta de tratamento durante o descanso.
3. Personagens de jogador possuem seis membros com 10 PV cada. Ameaças podem declarar
   exceções em suas regras próprias.
4. Um membro desabilitado impede somente ações que dependem dele. Uma personagem
   consciente ainda pode reagir se possuir os membros necessários.
5. Em uma defesa Física bem-sucedida: role o dano, divida-o por dois, aplique o maior
   redutor regional e respeite o dano mínimo de 1.
6. Redutores de dano sobrepostos não se somam; somente o maior se aplica. Redutores de PA
   continuam cumulativos.
7. A cura improvisada custa 4 PA. A Técnica em Tratar/Curar remove a desvantagem pela falta
   de material, mas não reduz esse custo.
8. Habilidades comuns de cura recuperam dano curável de `1d4` a `1d12` e custam 4 PA.
   Auto tratamento e Tratamento especializado são opções mais fortes e caras, de `1d4` a
   `3d6` e 5 PA. Nenhuma dessas opções devolve vida máxima.

## Organização pública

### Saúde e recuperação

A página explica, nesta ordem: corpo e PV, aplicação de dano, dano permanente, estados e
consequências dos membros, morte, defesa e esquiva, cura e relação entre dano e fadiga.
Regras básicas mantém apenas um resumo de ataques e liga para esta página.

### Proteções

A página explica armaduras e escudos, tipos e redutores, maestria, sobreposição,
durabilidade e a relação com a ordem de resolução do dano. O catálogo completo de itens
continua separado da regra de funcionamento.

## Impactos e limites deste lote

- A plataforma passou a calcular sobreposição pelo maior redutor regional.
- A apresentação visual das células pode mudar quando um membro fica cheio, mas isso não
  cria um terceiro tipo de dano: os dois estados continuam sendo dano curável.
- A ação de descanso da ficha ainda precisa ser reconciliada com descanso curto e longo.
  Esse trabalho pertence ao próximo lote, **Descanso e recuperação**.
- Magias que usavam dano profundo como faixa intermediária tiveram a terminologia retirada,
  mas seus custos precisam de recalibração antes de o módulo de magia ser publicado.

## Critério de aprovação

O lote pode ser oficializado depois de confirmar que as duas páginas estão legíveis nos
temas claro e escuro, em celular e desktop, e que a ordem de dano e o maior redutor regional
estão refletidos pela plataforma.
