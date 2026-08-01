---
titulo: Histórico de versões do sistema
tipo: regra
cenario: base
status: estavel
tags: [changelog, versoes]
atualizado-em: 2026-07-11
---

# Histórico de versões do sistema

*Changelog do **sistema Marca de Sangue** (regras), diferente do histórico do Git
(que registra mudanças nos arquivos). Novas versões entram no topo.*

---

## v1.2.0 — 01/08/2026 — oponentes, fadiga como combustível e módulos

A maior mudança de regra desde a importação: mexe no **motor** do sistema (habilidades,
fadiga e dano), não só em conteúdo. Decisões de Daniel e André.

> ⚠️ **Nada disto foi testado em mesa ainda.** Em especial, a mecânica de habilidades ×
> fadiga foi promovida **sem** o playtest que a própria variante pedia.

### Adições

- **Seção `oponentes/`** — "oponente" como termo guarda-chuva, dividido em **personagem do
  narrador** (ficha completa) e **ameaça** (bloco simplificado). Inclui o guia de criação de
  ameaças (membros, regra do dado de local, ataques como arma × habilidade) e a escala de
  **Nível de Ameaça**, ancorada em `15 × N` de `exp.` investida.
- **17 ações complexas descritas** — 15 estavam vazias e **Derrubar** não tinha entrada.
- **Maestrias de armadura ganharam efeito** — sem a maestria do tipo, o redutor de `PA` da
  peça **dobra**. Antes eram compráveis e não faziam nada.
- **Módulo `magia`** e **módulo `veiculos`**, extraídos de Mukashi e Colapso.

### Mudanças

- **Habilidades não têm mais "usos".** Compradas uma vez, evoluem por **nível**; a **fusão de
  características deixou de existir**. Cada uso custa `PA` **+ a mesma quantidade de fadiga**.
- **Fadiga reestruturada.** O máximo deixou de ser fixo (50) e passou a ser **igual ao total de
  `PV`** (60 no padrão). A penalidade passou de `−1 PA` a cada 5 (a partir de 10) para
  **`−1 PA` a cada 10** — o teto caiu de −8 para −5 `PA`.
- **Dano permanente virou perda de vida máxima.** Deixou de ser um terceiro status do espaço de
  dano: um golpe em membro já em ferida profunda **reduz a vida máxima dele em 1**, para sempre.
  "Invalidado" passou a significar vida máxima zerada. Como a fadiga máxima acompanha os `PV`,
  um corpo castigado também cansa antes.
- **Aspecto Vigilante** passou a aceitar armas de munição (`PROJ.`), não só de arremesso —
  o arquétipo Atirador recomendava um aspecto que ele próprio não conseguia usar.

### Removido

- A pasta `variantes/habilidades-por-fadiga/` deixou de ser variante e virou **arquivo
  histórico**; suas extensões opcionais A e B **não** foram promovidas.

---

## v1.1.0b — consolidação do manual

Micro-revisão sobre a 1.1.0a: consolidação do manual básico unificado para jogadores.
*(Sem changelog detalhado registrado no Notion.)*

---

## Alpha 1.1.0a — 21/12/2024

**Adição da mecânica base de fadiga.** Modificações nas mecânicas de ataque com mão
inábil e ataque de oportunidade. Consolidação e reposicionamento de seções. Mudanças de
nomenclaturas e melhorias textuais.

### Adições

- Adição da mecânica base de fadiga.

### Mudanças

- Ataque com a mão inábil: agora possui desvantagem e causa metade do dano (arredondado para baixo).
- Ataque de oportunidade: agora gasta pontos de fadiga equivalentes aos pontos de ação da ação realizada.
- Todas as seções foram consolidadas em uma única página para facilitar a navegação (no Notion).
- Algumas seções do manual foram reposicionadas para melhorar a compreensão lógica da leitura.
- Mudança de nomenclatura: membros comprometidos por dano permanente passam a se chamar "Membro Inválido".
- Se movimentar depois de levantar guarda faz com que a guarda levantada seja perdida, a menos que uma habilidade ou traço diga o contrário.

### Correções

- Melhoria da introdução ao conceito de atributos para jogadores não familiarizados.
- Explicação do redutor de dano das armaduras: reduz os pontos de dano indicados, limitando o acerto ao mínimo de 1 ponto de dano superficial.
- Texto sobre a definição de frente e costas de personagens em malha quadrada ("o personagem possui 3 quadrados de frente e 5 de costas").
- Correções menores de texto e formatação.

---

## Alpha 1.0.0a — 11/12/2023

**Primeira versão disponibilizada** do sistema Marca de Sangue, contendo as regras
básicas do sistema, recursos genéricos e adição do cenário Colapso (versão alpha).

### Adições

- Textos introdutórios sobre o sistema e RPG.
- Mecânica base de Testes e contratestes.
- Mecânica base de Conflitos e Combates.
- Lista de ações possíveis em Conflitos e Combates.
- Mecânica base de Saúde e Proteção.
- Mecânica base de Atributos (Físico, Mental, Ágil e Social).
- Mecânica base de Características (Aptidões, Habilidades e Traços).
- Mecânica base de Experiência e Evolução.
- Mecânica base de Equipamentos.
- Passo a passo de criação de personagem.
- Recursos básicos (fichas de jogo).
- Cenário "Colapso" adicionado à lista de cenários.
