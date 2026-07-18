---
data: 2026-07-18
pessoa: andre
ferramenta: claude-cowork
objetivo: ficha v0.8 — automações de cálculo travadas e catálogos do manual
arquivos-alterados:
  - ficha/src/lib/ficha.ts (helpers de cálculo)
  - ficha/src/lib/catalogo.ts (novo — catálogo do manual)
  - ficha/src/components/ui/field.tsx (Computed / InlineComputed)
  - ficha/src/components/ui/catalogo-select.tsx (novo)
  - ficha/src/components/{Armas,Protecoes,Caracteristicas,Equipamentos}Section.tsx
  - ficha/src/App.tsx, ficha/src/index.css
  - playtest/fichas-salvas/*.mds.json + gerar_saves.py (correção do PA comprado)
---

# Sessão: ficha v0.8 — automações e catálogos

## Correção anterior (carregamento)
- Bug do slot que "sumia": `migrarFicha` agora completa as coleções (armas, proteções,
  equipamentos, características, tesouro) até o mínimo da ficha vazia e normaliza cada
  arma/equipamento. Ao carregar um save, os slots vazios voltam a aparecer.

## Decisões do André (nesta fase)
1. Campos calculados: **calculados e travados** (read-only).
2. Automatizar: **PA total, carga/peso, EXP usada e contadores de aptidões/hab/traços**.
3. Catálogos: **armas, proteções, habilidades e traços**.

## Automações (travadas)
Fórmulas extraídas do manual base:
- **EXP usada** = Σ aptidões (1 exp cada) + Σ valor de compra das características +
  custo do PA comprado. Custo de PA: base a partir de 10; +1 = 5 exp, +2 = +10… (5·n·(n+1)/2).
  Alerta em vermelho quando passa do total.
- **Contadores** (aptidões / habilidades / traços) derivados automaticamente.
- **PA total** = base − |red. armadura| − |red. dano| − |red. carga| + outros, piso de 3.
- **Peso**: peso total por linha (qtd × unit) e peso carregado somados; alerta de sobrecarga
  quando passa da capacidade. (O manual não define tabela de pesos nem fórmula de capacidade —
  peso unitário e capacidade seguem sendo entrada manual.)

Validação: a fórmula de EXP bate com as **18 fichas** do playtest.

## Catálogos do manual (autopreenchimento)
- Novo `catalogo.ts` transcrito do `sistema-base/listas/*`: **44 armas, 8 proteções,
  35 habilidades, 43 traços** (técnicas/maestrias/aspectos).
- Cada seção (Armas, Proteções, Habilidades & Traços) ganhou um seletor "do catálogo…"
  que autopreenche os campos (edição por cima continua liberada). Os seletores não
  aparecem na impressão nem no preview A4.

## Correção dos saves (PA comprado)
- Roland, Lyra (+1 PA) e Thorne (+3 PA) tinham o PA comprado lançado em "outros" em vez do
  `base`, então o custo em exp não era contabilizado. Corrigido no gerador (PA comprado entra
  no `base`) e regenerados os 18. Agora todos fecham exatamente no orçamento, inclusive pela
  fórmula automática da ficha.

## Observações
- Modelo de custo confirmado: `valorCompra` de cada card = exp **total** paga naquela
  característica (não o unitário). O seletor de catálogo preenche o custo base (nível 1);
  ao subir de nível, ajuste o valor de compra.
- Interpretação de "aptidões (usado)": o **contador** de aptidões (e sua entrada na EXP usada)
  é automático; a coluna **usado** por atributo segue manual (é marcação de mesa, consumida
  durante a sessão). Ajustável se você preferir outro comportamento.
- Mobile: os controles novos foram deixados à prova de quebra (wrap). Não consegui acionar a
  emulação de device por aqui — vale uma conferida rápida no celular/modo responsivo.
