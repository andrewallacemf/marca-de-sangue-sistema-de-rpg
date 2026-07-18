---
data: 2026-07-18
pessoa: andre
ferramenta: claude-cowork
objetivo: ficha v0.9 — cálculos corretos por nível, PA automático, combobox, propriedades e reconciliação de regra
arquivos-alterados:
  - sistema-base/conceitos/08-fadiga.md (dano superficial → fadiga)
  - sistema-base/conflitos/03-saude-e-protecao.md (remoção da regra dano-total→PA)
  - notas-de-design/decisoes/2026-07-18-dano-fadiga-pa.md (novo)
  - ficha/src/lib/{ficha.ts,catalogo.ts}
  - ficha/src/components/ui/{catalogo-combo.tsx (novo),field,textarea}.tsx
  - ficha/src/components/{Armas,Protecoes,Caracteristicas,Equipamentos}Section.tsx
  - ficha/src/App.tsx, ficha/src/index.css
  - playtest/fichas-salvas/*.mds.json + gerar_saves.py
---

# Sessão: ficha v0.9

## Regra reconciliada (manual)
- **Dano superficial gera 1 fadiga por ponto**; a perda de `PA` por dano passa a vir pela fadiga.
- Removida a regra separada "a cada 10 de dano total, −1 `PA`" (evita dupla contagem).
- Registrado em `notas-de-design/decisoes/2026-07-18-dano-fadiga-pa.md` (com impacto de balanceamento).

## Ficha
- **EXP de habilidade por nível:** `valorCompra` agora é o **custo base (nível 1)**. O custo real é
  vigente = base × Σ(usos × nível); alternativa = base × (n·(n+1)/2). Cada card mostra o "investido".
  Ex.: Atordoar base 4 com 1 uso Nv1 + 2 usos Nv2 = 20 exp (vigente). Os 18 saves foram regenerados
  com `valorCompra` unitário e continuam fechando no orçamento.
- **Red. armadura automático:** soma os redutores de `PA` das proteções **equipadas**. Como escudos
  não cobrem região, adicionei um marcador **"Equip."** por proteção (o redutor de dano/durabilidade
  continua ligado à região coberta).
- **Red. fadiga automático:** o antigo "Red. por dano" virou **"Red. fadiga"**, calculado da fadiga
  acumulada (−1 a cada 5 a partir de 10; 50 = inconsciente → `PA` 0). PA total travado, piso 3.
- **Dano superficial → fadiga:** marcar dano superficial na saúde soma 1 de fadiga; curar não remove
  (só descanso zera).
- **Combobox único:** a caixa de nome de armas, proteções e características virou "digite ou escolha
  do catálogo" — texto livre é custom; abrir a setinha e escolher autopreenche.
- **Adicionar aos itens:** botão em armas e proteções que joga o nome na lista de equipamentos.
- **Propriedades das armas:** chips indicam se a arma tem a propriedade (preenchido) e se o personagem
  tem a **maestria** correspondente (anel dourado, detectado pelos traços). Tooltip com efeito e
  requisito. **Glossário** das propriedades ao final da ficha.
- **Anotações** passou a ocupar a altura da coluna de equipamentos e a rolar quando excede.
- Preview A4 agora esconde toda a interface de edição (fiel à impressão).

## Verificado
- EXP (Usada 15), red. armadura −2, red. fadiga (fadiga 12 → −1, PA total 7), dano→fadiga,
  combobox (44 armas), adicionar aos itens, glossário e A4 limpo — no navegador.
- 18 saves recomputam certo pela fórmula por nível.

## A revisar no playtest
- Balanceamento do encadeamento dano→fadiga→PA (pode punir rápido demais) — ver a decisão.

## Adendo v0.10
- **Contador de usos consumíveis** (regras vigentes): cada habilidade mostra, por nível,
  os usos disponíveis/total em pips clicáveis (consumir/devolver). Novo campo
  `usosGastosPorNivel` no modelo (migração preenche com zeros).
- **Botão "Descanso"** no topo: recupera todas as aptidões (usado), devolve todos os usos de
  habilidades e zera a fadiga (helper `descansar`). O antigo "zerar" da fadiga foi removido.

## Adendo v0.11 — valores por nível
- Extraída a **progressão por nível** das 35 habilidades base (`ficha/src/lib/catalogo-niveis.ts`,
  do manual `habilidades-base-*.md`). Novo campo `niveisDesc` no card.
- Na regra vigente, cada habilidade mostra, por nível, a **descrição dos valores que mudam**
  (dano, alcance, alvos, PA…) junto com os pips de uso. Campos editáveis (habilidade custom também
  pode ter notas por nível).
- A **migração autopreenche** a progressão pelo nome da habilidade, então os 18 saves do playtest
  já exibem os valores por nível sem precisar regenerar.
