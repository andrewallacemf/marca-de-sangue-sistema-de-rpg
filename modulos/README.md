# 🧩 Módulos

Um **módulo** é uma mecânica **opcional e reutilizável** com todos os seus recursos:
regras, listas, itens, traços e habilidades daquela mecânica. A relação é **1 módulo =
1 mecânica**. Exemplos previstos: *veículos*, *armas-de-fogo*, *mutações*.

## Como as camadas se encaixam

```
sistema-base/     ← mecânicas básicas, valem em qualquer jogo
modulos/<nome>/   ← 1 mecânica opcional + seus recursos (reutilizável)
colecoes.md       ← conjuntos nomeados de módulos (ex.: coleção "armas")
cenarios/<nome>/  ← narrativa + mecânicas exclusivas + "Módulos utilizados"
```

- Um cenário **declara** os módulos que usa na seção "Módulos utilizados" do seu README.
- **Cenário referencia módulo, módulo referencia base** — cada camada escreve apenas a
  própria diferença, nunca copia a outra.
- Uma mecânica **só vira módulo** quando mais de um cenário a usa (ou há perspectiva
  concreta disso). Mecânica de um mundo só fica no próprio cenário (ex.: radiação, do
  Colapso).

## Estrutura de um módulo

```
modulos/veiculos/
  README.md            ← a mecânica em si (ou visão geral + arquivos numerados)
  listas/              ← recursos do módulo (equipamentos, traços, habilidades...)
```

Frontmatter dos arquivos de módulo (ver [CONVENCOES.md](../CONVENCOES.md), seção 10):
`cenario: modulo` + `modulo: <nome-do-modulo>`.

## Como criar um módulo

1. Copie `_template-modulo/`, renomeie (minúsculas, hífens) e preencha.
2. Registre o módulo na tabela abaixo e, se fizer parte de um conjunto, em
   [colecoes.md](colecoes.md).
3. Atualize a seção "Módulos utilizados" dos cenários que o usam e o [INDICE.md](../INDICE.md).

## Módulos existentes

| Módulo | Mecânica | Usado por | Estado |
|--------|----------|-----------|--------|
| *(nenhum ainda — os primeiros nascem na Fase 2 da importação: veículos, armas-de-fogo e mutações, extraídos do Colapso)* | | | |
