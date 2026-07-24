---
data: 2026-07-24
pessoa: andre
ferramenta: claude-cowork
objetivo: importar o material do Colapso do Notion para o cenário, reorganizando na estrutura definida e adaptando as regras à versão atual
arquivos-alterados:
  - cenarios/colapso/00-visao-geral.md
  - cenarios/colapso/README.md
  - cenarios/colapso/arquetipos.md
  - cenarios/colapso/arsenal.md
  - cenarios/colapso/lore/ (README + 01-o-colapso, 02-clima-e-radiacao, 03-comunidades, 04-faccoes, ganchos-e-a-desenvolver)
  - cenarios/colapso/locais/README.md
  - cenarios/colapso/criaturas/README.md
  - cenarios/colapso/itens/README.md
  - cenarios/colapso/mecanicas-unicas/ (veiculos, equipamentos-de-veiculo, radiacao, mutacoes, armas-de-fogo, habilidades-do-cenario, tracos-do-cenario)
---

# Sessão: importação do Colapso (Notion → cenário)

## Prompt

> "Revisado, comece o colapso" (após aprovar Mukashi). Escopo/decisões da leva: fontes = "não
> adicionados" + útil do "Material antigo"; **adaptar às regras atuais na importação**.

## O que foi feito

Material espalhado por várias páginas do Notion (uma grande de ~2.266 linhas + subpáginas do
"Material antigo"). Usei subagentes para extrair de forma estruturada as fontes maiores
(sistema veicular completo, habilidades, traços, lugares/comunidades/facções), e importei eu
mesmo as seções de mundo, mutações, abrigo e arquétipos.

**Lore:** o Colapso (mundo de 2128, invasão, pós-colapso), clima e radiação (ciclos + Cromática/
Púrpura), 13 comunidades, ~23 gangues/facções, ganchos e cena de abertura ("Cicatrizes do
Deserto"). **Locais:** 10 regiões do ermo (AMR, Deserto Florido, Cidade dos Sussurros, Cânion,
Praia da Eternidade, Sertão em Chamas, Enclave das Máquinas, Pântano do Crepúsculo, Cidade dos
Ventos Errantes).

**Mecânicas (adaptadas às regras atuais):**
- **Veículos** — ficha do veículo, iniciativa/malha/orientação, todas as ações com custo de PA,
  tabela de dano de colisão, condições de veículo, integridade/reparo, **Aptidão Veicular** e a
  segunda moeda de exp. (Veículo).
- **Equipamentos de veículo** — catálogo ativos/passivos + fabricação por sucata.
- **Radiação/abrigo** — radiômetro, dano radioativo, hipotermia/insolação, 4 níveis de abrigo.
- **Mutações** — Cromáticas (1d100 completa) e Púrpuras (1d12; 9–12 em branco no original).
- **Armas de fogo** — confiabilidade em 5 níveis, 3 testes, tiro pela culatra.
- **Listas do cenário** — habilidades (por atributo) e traços; arquétipos de veículo (Piloto,
  Mecânico copiloto, Combatente, Invasor).

## Decisões / notas

- O material era **Alpha** com seções vazias e números divergentes entre tabela-resumo e
  descrição. Reconstruí a partir das regras espalhadas, mantendo a versão do material principal e
  marcando as divergências com `⚠️ A DEFINIR` (some do manual publicado).
- "Olho de gato" reposicionado como Mutação Cromática (não traço), conforme o material principal.
- Ignorada a campanha escolar "Volumes perdidos" (fora do escopo do rulebook).

## Verificação

- Preprocessador + build VitePress: **OK** (83 páginas; +21 do Colapso). Corrigido 1 vazamento de
  "A DEFINIR" numa célula de tabela (movido para blockquote). Zero vazamentos após o ajuste.

## Pendências (Gabriel)

- Bestiário mutante; tabela de armas de fogo (dado/alcance/munição); Púrpuras 9–12; reconciliar
  exp. inicial de veículo (material sugeria 8 × base atual 15); revisar divergências marcadas.
