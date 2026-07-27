---
data: 2026-07-27
pessoa: daniel
ferramenta: claude-cowork
objetivo: curar o segundo dō completo do Mukashi (Shinobi-dō — Caminho da Sombra)
arquivos-alterados:
  - cenarios/mukashi/arquetipos-do.md
  - modulos/armas-brancas/README.md
  - contrato/catalogo.json
---

# Sessão: Shinobi-dō — Caminho da Sombra

## Prompts dados

> Vamos seguir para o próximo do, que é o caminho do shinobi. O que acha dessas definições
> iniciais? Foco de Atributos: Ágil e Mental. Características Chave: Traço Técnica em
> Esconder-se, habilidade Golpe Surpresa e Técnica em Realizar Truques. Equipamentos: Armas
> curtas ocultas (yoroidōshi ou tantō) e ferramentas de escalada.

> [em resposta à pergunta sobre a propriedade Acuidade no Tantō] Adicionar ACUI. ao grupo
> "Adaga, Kukri, Kunai" (recomendado).

> Assim como feito anteriormente elabore o texto introdutório do caminho do shinobi com base
> nessas informações e alinhando com o tom geral da obra: [colou um trecho longo sobre o papel
> militar do shinobi, distinção de kanja, ninjutsu segundo a escola Natori-Ryū — disfarces,
> mobilidade, operações noturnas, sinais de terreno — e o debate histórico sobre status social
> (bushi × chūgen × rascal promovido a samurai), fechando com o preceito de Sun Tzu sobre o
> engano na guerra].

## O que foi feito

Antes de montar o bloco do dō, confirmei que o foco Ágil/Mental do Daniel bate exatamente com o
arquétipo genérico **Assassino** (já era a base do Shinobi-dō na tabela de esqueletos) e que
Técnica em Esconder-se e Golpe surpresa já são as sugestões padrão desse genérico — sem
conflito. "Técnica em Realizar Truques" existe na lista base, mas a ação em si ainda não tem
regra escrita (`acoes-em-combate.md` já marca isso como lacuna geral do sistema, não é problema
novo).

Encontrei um ponto real de atrito: o arquétipo Assassino pede arma cortante leve **de acuidade**
(pra rerrolar ataques com Ágil), mas o Tantō — mapeado ao grupo "Adaga, Kukri, Kunai" em
`armas-brancas` — não tinha a propriedade `ACUI.`. Levei a pergunta ao Daniel antes de mexer,
com 3 opções (adicionar ACUI ao grupo / deixar sem / trocar a arma-assinatura para a Wakizashi).
Ele escolheu adicionar `ACUI.` ao grupo. Editei o módulo compartilhado `armas-brancas` (afeta
qualquer cenário que use essas lâminas, não só o Mukashi) e rodei
`python contrato/exportar_catalogo.py` — sem avisos novos.

Depois, escrevi a descrição do Shinobi-dō a partir do texto longo do Daniel, cortando para o
tom do manual: mantive a distinção shinobi × kanja, o resumo do ninjutsu (disfarces, mobilidade,
operações noturnas) e o debate de status social (bushi × chūgen × rascal), fechando com a
citação de Sun Tzu. Completei o bloco no `arquetipos-do.md` com maestrias/técnicas/aspectos/
habilidades (usando as sugestões do Daniel + as do Assassino genérico) e equipamentos,
apontando `Corda (10m)` e `Gancho` de `itens-base.md` como as "ferramentas de escalada" (em vez
de criar item novo — já existiam prontos), com a observação de que esse par cumpre o papel do
*kaginawa* do folclore shinobi.

## Decisões tomadas

- Shinobi-dō segue o arquétipo genérico Assassino sem trocar atributos (Ágil/Mental).
- `ACUI.` adicionado ao grupo "Adaga, Kukri, Kunai" em `modulos/armas-brancas/README.md` —
  decisão do Daniel, aplicada ao módulo compartilhado (não é exclusiva do Mukashi).
- "Ferramentas de escalada" mapeadas aos itens já existentes (Corda 10m + Gancho), sem criar
  item novo.
- Nenhuma habilidade de caminho própria criada ainda para o Shinobi-dō (mesmo ponto de partida
  do Bushidō antes de o Daniel pedir as customizadas).

## Pendências criadas

- Nenhuma nova. A lacuna de "Realizar Truques" sem regra detalhada já está coberta pela linha
  geral de `PENDENCIAS.md` sobre ações complexas sem descrição.

## Observações

Nenhuma outra.
