---
titulo: "Armas de fogo do Colapso (confiabilidade)"
tipo: regra
cenario: colapso
status: rascunho
tags: [colapso, armas-de-fogo, durabilidade, mecanica-unica]
atualizado-em: 2026-07-24
---

# Armas de fogo — confiabilidade

No Colapso, quase toda arma de fogo é improvisada ou remendada, e **pode falhar**. Esta regra
**sobrepõe** o disparo comum do módulo [armas-de-fogo](../../../modulos/armas-de-fogo/README.md)
com uma camada de **durabilidade** e risco.

## Cinco níveis de durabilidade

Do melhor ao pior: **1. Manutenção em dia · 2. Bom estado · 3. Na média · 4. Mau estado ·
5. Capenga.** Uma arma **Capenga** que perca durabilidade é **destruída sem conserto** (ainda
dispara naquele disparo se passar nos testes).

## O disparo (2 a 3 testes)

Cada disparo faz, em ordem:

1. **Dano à arma (Teste Neutro).** Vence: durabilidade inalterada, pula para o 3º teste. Perde:
   durabilidade **−1 nível** e faz o 2º teste.
2. **Funcionalidade (Teste Neutro).** Vence: a bala dispara, faz o 3º teste. Perde: a bala **não
   dispara**, encerra.
3. **Acerto.** As mecânicas normais de acerto.

*Teste Neutro = pode aplicar qualquer [aptidão](../../../sistema-base/conceitos/04-aptidoes.md)
para rerrolar.*

## Tiro pela culatra

Se a arma está **Capenga** **e** ocorre o pior cenário (durabilidade danificada **e** bala não
disparada), o tiro sai pela culatra e pode ferir o atirador. Defesa: **Teste Ágil**; se o dano
for aplicado, é considerado **descuidado**.

> ⚠️ A DEFINIR (Gabriel): a **tabela de armas de fogo do cenário** (dado de dano, alcance,
> munição por arma) — o material trazia as regras de confiabilidade acima, mas **não** a tabela
> por arma. Até lá, use os valores do módulo [armas-de-fogo](../../../modulos/armas-de-fogo/README.md)
> e aplique esta camada de confiabilidade por cima.
