---
titulo: Mapeamento de UX da plataforma
tipo: ux
cenario: base
status: estavel
tags: [ux, plataforma, backlog]
atualizado-em: 2026-08-07
---

# Mapeamento de UX da plataforma (07/08/2026)

Mapeamento da experiência do produto `plataforma-rpg-marca-de-sangue` (21 páginas, área
autenticada + manual público + ficha + gestor de batalha), pedido pelo André em 07/08/2026,
para identificar problemas de usabilidade e consistência — em especial **fluxos que deveriam
abrir em modal em vez de criar/editar dentro da tela**.

O que já funciona bem: feedback por toast consistente, `aria-label` extenso, overlays com
focus trap (Base UI), estados de loading/erro uniformes por seção. Os problemas concentram-se
em **padrões divergentes** — o mesmo tipo de ação feito de 3–4 maneiras diferentes.

As pendências aprovadas estão no [pendencias-ficha-plataforma.md](pendencias-ficha-plataforma.md),
seção 7.

---

## 1. Criação e edição — 4 padrões concorrentes

| Recurso | Hoje | Problema |
|---|---|---|
| Personagem | Modal Dialog + navega pós-criação | ✅ padrão bom |
| Habilidade/Traço | **Modal** com catálogo (busca) + modal editor | ✅ padrão bom |
| Campanha | Form inline no card da lista | Espaço apertado; sem edição depois |
| Batalha | Input inline no card da campanha | Idem |
| Inimigo | Form inline no card (mesmo form cria e edita) | A linha vira formulário no lugar |
| **Arma / Proteção** | **Botão cria card em branco** → preencher no `<details>` "Editar detalhes" escondido | **2 passos, tudo à mão, sem catálogo** — o recurso mais comum da mesa é o pior fluxo |
| Item / Moeda | Botão cria "Novo item"/"Nova moeda" + inputs inline | OK, mas remoção sem confirmação |

Recomendação: criar/editar **arma e proteção em modal com catálogo**, no molde do
`CharacteristicCatalogDialog` (busca no catálogo → preenche tudo em 1 passo, com botão
"personalizada" para o que não está no manual). Armas são o item que mais depende de regra
(dano, propriedades, munição).

**Moeda é híbrido incoerente**: quantidade é input inline com stepper, mas "Adicionar
quantidade / Definir valor / Renomear" abrem modal para fazer o que o input já faz — passo
extra; simplificar (deixar inline) ou converter tudo em um único fluxo.

## 2. AlertDialog usado como formulário (semântica errada)

`AlertDialog` (confirmação) é usado como **modal de formulário** em 6 lugares: curar/aplicar
dano, descanso, editor de habilidade, catálogo de habilidade, moeda, avatar. O `Dialog` existe
mas só é usado em 2 (criar personagem, drawer do manual).

Recomendação: migrar os formulários para `Dialog` (componente já pronto); `AlertDialog` fica só
para confirmações. É o refactor mais barato com o maior ganho de consistência semântica.

## 3. Destrutivos: confirmação em alguns lugares, sem em outros

**Sem confirmação hoje**: remover arma/escudo/proteção/item/moeda, excluir habilidade/traço
(ficha); **encerrar batalha** (ação irreversível de tabela!).
**Com confirmação**: campanha, batalha, personagem, inimigo, combatente, mapa, nova rodada.

- Na ficha a exclusão é reversível até o autosave — mas o padrão visual difere do resto e
  dados digitados (peso, efeito, dano) são descartados em 1 clique.
- **Encerrar batalha** é o caso mais sério: botão toggle inline, sem confirmação, congela a tabela.
- Verbos sem critério: "**Excluir**" (personagem, campanha, habilidade, traço, inimigo) vs
  "**Remover**" (arma, item, membro, combatente, mapa).

Recomendação: confirmação nas remoções de coleção da ficha; confirmação em encerrar batalha;
unificar o verbo (sugestão: "Excluir" para tudo, ou "Remover" para itens de coleção com
justificativa registrada).

## 4. Navegação e ilhas

- **`/inimigos` é órfã**: não está no header, nem na home — só alcançável pelo board da
  batalha. Sem back button.
- **Destaque do menu só por igualdade exata**: `/campanhas/[id]`, `/batalhas/[id]` e
  `/perfil*` ficam sem item "ativo". No mobile há case especial na home que o desktop não tem.
- **Manual sem menu mobile**: a nav some em telas < `sm` sem hambúrguer (a área autenticada tem).
- **Metadata inconsistente**: `"Página - Marca de Sangue"` (auth/perfil) vs
  `"Página | Marca de Sangue"` (resto).
- **Sem breadcrumbs em lugar nenhum**; ficha esconde o header global ("Sair da ficha" é o único
  caminho).
- **Campanha/batalha não são renomeáveis**; personagem só renomeia dentro do `<details>`
  escondido no rodapé da ficha (secao-identidade) — **o nome do personagem está no lugar mais
  escondido da tela**.

## 5. Perda de dados silenciosa (ficha)

Autosave com debounce de 700ms é sólido — **mas sem `beforeunload`/aviso**: fechar a aba ou
recarregar dentro da janela perde a última digitação, sem nenhum aviso. O indicador de status é
`sr-only` (invisível) e só aparece em tela no erro.

Recomendação: `beforeunload` quando houver pendência + indicador visível discreto
("salvando…/salvo ✓").

## 6. Consistência visual

- **"Excluir campanha" e "Sair da campanha" em `variant="outline"`** — único destrutivo fora
  do vermelho em toda a app.
- Capitalização variada: "Criar novo Personagem" vs "Criar Personagem"; "Salvar Alterações" vs
  "Salvar edição" vs "Salvar".
- "Criando..." (ASCII) vs "Criando…" no resto.
- Empty states em 3 estilos: ícone centralizado (personagens — melhor), texto simples
  (campanhas/batalha) e card tracejado (seções da ficha).
- `menu-ficha.tsx` é o único item destrutivo de dropdown sem `variant="destructive"`.

## 7. Acessibilidade e dívida de código

- **Menu mobile é overlay manual** (`authenticated-header.tsx`): tem `role="dialog"` mas **sem
  focus trap nem foco inicial** — os overlays Base UI têm.
- `<select>` nativo com classe CSS repetida em ~15 lugares; `<textarea>`/`<checkbox>` crus —
  vale primitivo `Select` (não crítico).
- `tabs.tsx` é primitivo **morto** (0 imports; a ficha usa tabs custom).
- `aoConfirmar` (persistir no blur) existe em `campos.tsx` e não é usado por nenhum componente
  — infraestrutura órfã do período pré-autosave.

---

## Priorização

| # | Item | Impacto | Esforço |
|---|---|---|---|
| 1 | Arma/Proteção: modal com catálogo (moldado no de habilidades) | Alto (fluxo mais usado da ficha) | Médio |
| 2 | Migrar AlertDialog→Dialog nos formulários | Médio (consistência) | Baixo |
| 3 | Confirmação em remoções da ficha + encerrar batalha + unificar verbos | Médio | Baixo |
| 4 | Navegação: inimigos no header, destaque por prefixo, menu mobile do manual, metadata | Médio | Baixo |
| 5 | `beforeunload` + indicador de save visível na ficha | Médio | Baixo |
| 6 | Glossário de botões + empty state único | Baixo | Baixo |
| 7 | Focus trap no menu mobile | Baixo | Baixo |
| 8 | Renomear campanha/batalha + nome do personagem acessível | Baixo | Baixo |
