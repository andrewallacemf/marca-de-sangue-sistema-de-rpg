# Proposta — Descanso e recuperação

**Estado editorial:** implementada localmente, aguardando aprovação funcional
**Público:** jogador
**Destino:** `/manual/jogador/saude-e-recuperacao#descanso-e-recuperacao`

## Fontes curadas

- `sistema-base/conceitos/09-descanso.md`;
- `sistema-base/conflitos/03-saude-e-protecao.md`;
- `sistema-base/conceitos/04-aptidoes.md`;
- `sistema-base/conceitos/08-fadiga.md`;
- `sistema-base/listas/tracos-base.md`.

## Decisões aprovadas

1. Descanso curto dura cerca de 1 hora, zera a fadiga, recupera 1 aptidão de cada atributo e
   produz `1d4` pontos de cura.
2. Descanso longo exige pelo menos 8 horas com sono, zera a fadiga, recupera todas as aptidões
   e produz `1d6` pontos de cura.
3. Dorminhoco troca apenas o dado do descanso longo por `1d8`.
4. O resultado da cura pode ser distribuído livremente entre um ou mais membros, sem remover
   dano permanente nem ultrapassar o dano curável de cada membro.
5. Permitir um descanso depende da situação narrativa comunicada pelo narrador.
6. Habilidades não possuem usos a recuperar; o descanso volta a liberá-las porque zera a fadiga.

## Organização pública

A página de Saúde e recuperação recebe uma seção própria depois de Cura. Ela apresenta primeiro
o resultado compartilhado pelos dois tipos, compara curto e longo, explica a distribuição da cura
com um exemplo e encerra com a decisão narrativa sobre quando é possível descansar.

Regras básicas mantém somente um resumo e liga para a explicação canônica. A referência rápida
preserva os dados de cura e passa a ligar para a nova seção.

## Impactos e pendências internas

- Não há mudança de schema neste lote editorial.
- A engine já diferencia os tipos e recupera fadiga e aptidões corretamente.
- O diálogo da ficha ainda aplica toda a cura a um único membro; a correção de distribuição foi
  registrada no backlog e não será escondida por texto público ou pelo campo genérico de PA.
- Condições com duração até descanso, como Atordoar, aguardam uma regra geral e uma estrutura
  própria na plataforma. O descanso não deve zerar automaticamente o campo “Outros”.

## Critério de aprovação

O lote pode ser oficializado depois de confirmar a legibilidade da seção, a soma correta do
exemplo, os links e âncoras e o registro explícito das duas pendências da plataforma.
