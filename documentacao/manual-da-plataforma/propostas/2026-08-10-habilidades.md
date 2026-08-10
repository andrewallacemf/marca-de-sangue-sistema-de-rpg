# Proposta de curadoria — Habilidades

Esta proposta prepara a página pública de consulta das 38 habilidades básicas. Ela complementa a
regra geral já publicada em Regras básicas e transforma o catálogo oficial numa referência
pesquisável, sem incluir a lista social experimental.

## Base analisada

- Página pública proposta: `jogador.recursos.habilidades`.
- Rota: `/manual/jogador/recursos/habilidades`.
- Público: Manual do Jogador.
- Estado anterior no mapa: `mapeada`.
- Regra canônica do funcionamento: `jogador.regras-basicas.habilidades`.

## Fontes analisadas

- `sistema-base/conceitos/05-habilidades.md`;
- `sistema-base/listas/habilidades-base.md` e as quatro listas por atributo;
- `sistema-base/listas/habilidades-base-gerais.md`;
- `sistema-base/progressao/01-experiencia-e-evolucao.md`;
- `contrato/catalogo.json`;
- `INDICE.md` e `PENDENCIAS.md`;
- implementação atual da ficha e da batalha na plataforma.

## Análise de impacto

O catálogo possui **38 habilidades básicas**: 10 Físicas, 9 Ágeis, 10 Mentais e 9 Sociais. As 14
habilidades da lista social experimental não fazem parte desta publicação.

Cada habilidade define sua própria quantidade de níveis. A menor progressão atual possui três
níveis e a maior possui nove; portanto, a página não pode comunicar cinco como teto geral. A
experiência investida continua sendo o custo-base multiplicado pelo nível atual.

`Alcance corpo a corpo` modifica o custo de ativação em cada nível. `Reparar` não possui custo de
conflito e não deve ser apresentada como ação de batalha. Essas duas formas já foram reconciliadas
com a plataforma antes desta proposta editorial.

O campo `observacoes` do contrato não contém datas, indicadores de revisão, pendências ou notas de
autoria nas 38 entradas básicas. Ele contém complementos de regra e pode ser publicado com o
rótulo **Detalhes**, convertendo separadores técnicos em frases ou tópicos legíveis.

Persistem redações antigas como “consumir”, “reativar” ou “uso da mudança de alvo”. Pela decisão
de publicar o conteúdo oficial atual mesmo antes da revisão ampla de design, esta curadoria não
inventa efeitos substitutos nem mostra avisos internos. Alterações futuras devem acontecer primeiro
nas fontes e voltar pelo contrato.

Não foi encontrada necessidade de schema ou migration para a página. Como ela precisa funcionar
fora do ambiente autenticado, o server component deve consultar `HabilidadeBase` diretamente e
entregar uma saída plana ao componente de busca. O procedimento é equivalente ao bestiário
público e não exige tornar o router protegido do catálogo público.

## Decisões confirmadas

- publicar somente as 38 habilidades básicas, sem as 14 experimentais;
- não impor limite geral de níveis;
- custo de evolução = custo-base × nível atual;
- custos de ativação variáveis seguem o nível descrito;
- `Reparar` é explicitamente **Fora de conflito**;
- nenhuma pendência, data, autoria, histórico ou estado editorial aparece na página pública.

## Estrutura proposta

### Abertura curta

Explica o propósito da página e liga para:

- [Habilidades em Regras básicas](/manual/jogador/regras-basicas#habilidades);
- [Pontos de ação](/manual/jogador/regras-basicas#pontos-de-acao);
- [Fadiga](/manual/jogador/regras-basicas#fadiga);
- [Experiência e progressão](/manual/jogador/regras-basicas#experiencia-e-progressao).

A página não repete o procedimento completo de uso. Ela resume que cada ativação paga `PA` e a
mesma quantidade de fadiga, salvo texto específico, e que cada novo nível custa novamente o
valor-base.

### Ferramentas de consulta

- busca por nome, efeito, requisito e detalhe;
- filtro por atributo: Todos, Físico, Ágil, Mental e Social;
- filtro por forma de custo: custo fixo, custo com arma, custo variável e fora de conflito;
- filtro por quantidade de níveis;
- ordenação padrão alfabética, com alternativas por atributo, custo de compra e quantidade de
  níveis;
- contagem dos resultados e ação para limpar filtros;
- parâmetros de busca refletidos na URL para que uma consulta possa ser compartilhada.

“Origem” não vira filtro nesta primeira página porque todas as entradas publicadas pertencem ao
sistema-base. Quando habilidades de cenários ou módulos forem publicadas, o mesmo controle poderá
receber Sistema-base, Cenário e Módulo sem mudar o card.

### Card de habilidade

Cada card possui âncora estável derivada do nome e apresenta:

1. nome e atributo;
2. custo de ativação literal;
3. custo-base de compra por nível;
4. efeito;
5. requisitos;
6. progressão completa, numerada do nível 1 até o último nível definido;
7. bloco **Detalhes**, somente quando houver observações oficiais.

No mobile os cards formam uma coluna. Em telas largas podem usar duas colunas, mas a progressão
expandida nunca deve ficar truncada. O título de cada card é um link para sua própria âncora.

## Inventário público

### Físico — 10

- Ataques múltiplos & médios — 4 níveis;
- Ataques múltiplos & pesados — 3 níveis;
- Atordoar — 5 níveis;
- Desarmar leve — 3 níveis;
- Desarmar pesado — 3 níveis;
- Encontrão — 5 níveis;
- Esmagar — 5 níveis;
- Golpe destruidor — 4 níveis;
- Investida — 4 níveis;
- Quebrar guarda — 3 níveis.

### Ágil — 9

- Alcance à distância — 5 níveis;
- Alcance corpo a corpo — 4 níveis e custo variável;
- Arremesso improvisado — 5 níveis;
- Arremessos concentrados — 4 níveis;
- Ataques à distância concentrados — 4 níveis;
- Ataques múltiplos & leves — 5 níveis;
- Disparada — 5 níveis;
- Golpe surpresa — 4 níveis;
- Ocultar-se à vista — 4 níveis.

### Mental — 10

- Analisar fraquezas — 6 níveis;
- Auto cura — 5 níveis;
- Auto tratamento — 4 níveis;
- Confundir inimigo — 4 níveis;
- Consumir — 3 níveis;
- Criar armadilha — 6 níveis;
- Intimidação generalizada — 4 níveis;
- Recompor — 3 níveis;
- Reparar — 4 níveis, fora de conflito;
- Urro de Intimidação — 5 níveis.

### Social — 9

- Animar — 4 níveis;
- Brado de guerra — 6 níveis;
- Comandar — 9 níveis;
- Cura especializada — 5 níveis;
- Desorientar — 5 níveis;
- Grito de alerta — 6 níveis;
- Revigorar — 5 níveis;
- Revitalizar — 5 níveis;
- Tratamento especializado — 4 níveis.

## Curadoria proposta

### Publicar

- nome, atributo, custos, efeito, requisitos, progressão e detalhes das 38 entradas básicas;
- links para as regras das quais o uso depende;
- ferramentas de busca e filtros;
- âncora individual por habilidade.

### Reescrever para apresentação

- separar requisitos e detalhes que chegam delimitados por ponto e vírgula em listas legíveis;
- converter “Não há” e equivalentes em um rótulo uniforme **Sem requisitos**;
- apresentar custo-base como “por nível”, sem sugerir compra acumulativa triangular;
- exibir o custo de `Reparar` como **Fora de conflito**;
- apresentar a progressão como lista numerada, sem preencher degraus inexistentes.

### Manter no bastidor

- frontmatter, datas, estados de revisão e autoria;
- caminhos de arquivos e campos técnicos do contrato;
- flag `experimental`, fontes e observações internas de implementação;
- pendências de balanceamento, decisões e histórico de mudanças;
- a lista social experimental inteira.

## Impactos na plataforma

- **Manual:** criar rota pública, entrada no índice e navegação do Manual do Jogador.
- **Dados:** ler `HabilidadeBase` no servidor, filtrando `experimental: false`, com saída plana e
  explícita antes de alcançar o cliente.
- **Busca:** componente cliente sem acesso direto ao banco; URL sincronizada com filtros.
- **Links:** Regras básicas, Criação e Progressão apontam para a referência quando mencionarem a
  lista ou o custo de habilidades.
- **Ficha e batalha:** correções técnicas já preparadas sob a decisão 063; a página apenas documenta
  o comportamento.
- **Testes:** inventário 10/9/10/9, exclusão experimental, busca, filtros, âncoras, progressões de
  3 a 9 níveis, custo variável e `Reparar` fora de conflito.
- **Schema e migration:** nenhum impacto.

## Validações editoriais

- a página contém exatamente 38 habilidades e nenhuma experimental;
- cada habilidade possui uma âncora única e copiável;
- nenhum card é truncado no quinto nível;
- `Comandar` mostra nove níveis;
- `Alcance corpo a corpo` mostra a mudança de custo em todos os quatro níveis;
- `Reparar` não recebe custo inventado de `PA`;
- nenhum marcador de bastidor aparece no HTML público;
- o funcionamento geral não é duplicado integralmente;
- a página funciona logada, deslogada e dentro do drawer da ficha.

## Prévia da abertura pública

---

# Habilidades

Consulte as habilidades básicas do Marca de Sangue, compare seus custos e acompanhe o efeito de
cada nível. Use a busca e os filtros para encontrar uma habilidade por nome, atributo, requisito
ou efeito.

Uma habilidade é comprada uma vez e fortalecida por níveis. Cada novo nível custa novamente o
valor-base indicado no card. Ao usar uma habilidade, pague seu custo em pontos de ação (`PA`) e a
mesma quantidade de fadiga, salvo quando a própria habilidade trouxer uma regra específica.

Para aprender o procedimento completo, consulte
[Habilidades em Regras básicas](/manual/jogador/regras-basicas#habilidades).

---

## Confirmação humana

- Estrutura da página: aprovada em 10/08/2026.
- Inventário das 38 habilidades básicas: aprovado em 10/08/2026.
- Busca, filtros, ordenação e card: aprovados em 10/08/2026.
- Redação da abertura: aprovada em 10/08/2026.
- Publicação na plataforma: implementada sob a decisão 064 da plataforma.
