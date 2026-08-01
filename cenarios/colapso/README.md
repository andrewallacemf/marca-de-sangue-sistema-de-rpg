---
titulo: Colapso — Crônicas do Mundo Destroçado
tipo: cenario
cenario: colapso
status: revisao
tags: [junkpunk, pos-apocaliptico, veiculos, mutacoes, brasil]
atualizado-em: 2026-07-11
---

# 💥 Colapso — Crônicas do Mundo Destroçado

**Junkpunk pós-apocalíptico.** Em 2128, uma invasão alienígena — resposta ao sinal
enviado pela humanidade em 2017 — devastou a Terra. Trinta anos depois, o que restou do
Brasil são desertos radioativos, sucateiros, piratas de areia e combate veicular em alta
velocidade. Personagens têm prazo de validade; veículos também.

**É o cenário mais desenvolvido do sistema** (versão Alpha desde a 1.0.0a): conflito de
veículos completo, mutações (Radiação Cromática e Púrpura), condições ambientais, abrigo,
arquétipos e listas próprias de habilidades, traços e equipamentos.

## Módulos utilizados

| Módulo/coleção | Estado / por quê |
|----------------|------------------|
| [`armas-de-fogo`](../../modulos/armas-de-fogo/README.md) | **Existe** — armas de pólvora e balas. O Colapso pode sobrepor com regra própria (encravamento/superaquecimento). |
| Coleção [`armas`](../../modulos/colecoes.md) ([`armas-brancas`](../../modulos/armas-brancas/README.md), [`armas-exoticas`](../../modulos/armas-exoticas/README.md)) + improvisadas | Sucata e armas de rua (ver [arsenal](arsenal.md)). |
| [`protecoes`](../../modulos/protecoes/README.md) | Coletes/sucata como flavor de armadura por tipo. |
| [`furtividade`](../../modulos/furtividade/README.md) | Emboscadas e incursões (ex.: o [cenário-teste do vale](../../playtest/cenarios/06-colapso-vale-dos-atiradores.md)). |
| [`veiculos`](../../modulos/veiculos/README.md) | **Extraído daqui em 01/08/2026.** O conflito veicular inteiro (ficha, malha de 10 m, ações, colisão, condições, equipamentos, habilidades e traços) virou módulo; a **sucata** ficou no cenário como insumo próprio — ver [veículos no Colapso](mecanicas-unicas/veiculos.md) e [sucata](mecanicas-unicas/sucata.md). |
| **`mutacoes`** | Por ora vive em [`mecanicas-unicas/`](mecanicas-unicas/) (só o Colapso usa). **Candidato a módulo** quando um segundo cenário precisar — regra "promova quando repetir". |

## Estrutura

| Arquivo/pasta | Conteúdo |
|---------------|----------|
| [`00-visao-geral.md`](00-visao-geral.md) | Pitch, tom, o que adiciona/muda no base. |
| [`arquetipos.md`](arquetipos.md) | Papéis do ermo + arquétipos de veículo (Piloto, Mecânico copiloto, Combatente, Invasor). |
| [`arsenal.md`](arsenal.md) | Onde estão as armas do Colapso (fogo, sucata, improvisadas, montadas). |
| [`mecanicas-unicas/veiculos.md`](mecanicas-unicas/veiculos.md) | O que o Colapso muda no [módulo `veiculos`](../../modulos/veiculos/README.md) (a mecânica em si mora lá). |
| [`mecanicas-unicas/sucata.md`](mecanicas-unicas/sucata.md) | A sucata: 3 tipos, Procurar sucata, conversão e o que cada reparo custa. |
| [`mecanicas-unicas/radiacao.md`](mecanicas-unicas/radiacao.md) | Radiação, radiômetro, condições de ambiente e abrigo. |
| [`mecanicas-unicas/mutacoes.md`](mecanicas-unicas/mutacoes.md) | Mutações Cromáticas (1d100) e Púrpuras (1d12). |
| [`mecanicas-unicas/armas-de-fogo.md`](mecanicas-unicas/armas-de-fogo.md) | Confiabilidade das armas de fogo (5 níveis, tiro pela culatra). |
| [`mecanicas-unicas/habilidades-do-cenario.md`](mecanicas-unicas/habilidades-do-cenario.md) · [`tracos-do-cenario.md`](mecanicas-unicas/tracos-do-cenario.md) | Listas próprias do cenário. |
| [`lore/`](lore/README.md), [`locais/`](locais/README.md), [`criaturas/`](criaturas/README.md), [`itens/`](itens/README.md) | Mundo, facções, lugares, criaturas e itens. |

## Estado da importação

**Importado do Notion (24/07/2026), adaptado às regras atuais:** lore (o Colapso, clima e
radiação, 13 comunidades, ~23 facções), 10 regiões em [locais](locais/README.md), e as mecânicas
— veículos (promovidos ao [módulo `veiculos`](../../modulos/veiculos/README.md) em 01/08/2026;
o que ficou aqui é a [sucata](mecanicas-unicas/sucata.md) e as
[diferenças do cenário](mecanicas-unicas/veiculos.md)),
[radiação/abrigo](mecanicas-unicas/radiacao.md), [mutações](mecanicas-unicas/mutacoes.md),
[armas de fogo](mecanicas-unicas/armas-de-fogo.md) e as
[listas de habilidades](mecanicas-unicas/habilidades-do-cenario.md) e
[traços](mecanicas-unicas/tracos-do-cenario.md).

**Falta (curadoria do Gabriel):** bestiário mutante; tabela de armas de fogo (dado/alcance/munição);
Mutações Púrpuras 9–12; reconciliar a exp. inicial de veículo; e revisar as divergências de números
que o material Alpha trazia (marcadas com `⚠️` nos arquivos). Ver
[ganchos](lore/ganchos-e-a-desenvolver.md) e [PENDENCIAS.md](../../PENDENCIAS.md).

> As pontas soltas usam `⚠️ A DEFINIR` nos arquivos e **não aparecem no manual publicado** (versão
> limpa).
