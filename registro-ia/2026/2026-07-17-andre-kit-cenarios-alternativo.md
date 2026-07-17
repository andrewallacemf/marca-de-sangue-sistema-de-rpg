---
data: 2026-07-17
pessoa: andre
ferramenta: claude-cowork
objetivo: criar a versão do kit de cenários com as regras alternativas de habilidades/fadiga, para comparação no playtest
arquivos-alterados:
  - playtest/cenarios-alternativa/00-guia-do-narrador.md (novo)
  - playtest/cenarios-alternativa/01..05-*.md (novos)
  - playtest/Marca-de-Sangue-Kit-de-Cenarios-ALTERNATIVO.pdf (novo)
  - playtest/geracao-pdf/gerar_kit_cenarios_alternativo.py (novo)
---

# Sessão: kit de cenários — versão de regras alternativas

## Prompts dados

> faça uma versão desse kit de cenários de teste, aplicando as regras alternativas,
> adaptando tudo (...) para a gente poder comparar. (...) pode ser pelo positivo, me
> trazendo já uma recomendação.

## Decisões tomadas (André aprovou as recomendações)

1. **Custo de fadiga por uso de habilidade = o custo de PA da habilidade** (espelha a
   regra de reações que já existe). Aprovado.
2. **Extensão "contratestes/reações também custam fadiga" — LIGADA** neste kit ("já vamos
   testar junto agora"). Definido: cada esquiva/defesa fora do turno = **1 de fadiga**;
   ataque de oportunidade segue = PA da ação.
3. **Mantidos**: 2 de fadiga → +1 PA; inconsciência aos 50; piso de 3 PA. A alternativa só
   muda o limiar (10 livres) e a cadência (−1 PA a cada 5 acima de 10). Sub-ideias
   complexas (dois tipos de fadiga, descansar em batalha, limiar aumentado) ficaram de fora.

## O que foi feito

Kit paralelo em `playtest/cenarios-alternativa/` — **mesmos 5 cenários, mapas, inimigos,
objetivos e fichas** (mesmo custo de exp, verificado: as 18 batem), com:

- Guia do narrador reescrito para a mecânica alternativa (habilidades por nível sem usos,
  uso = PA + fadiga, tabela de penalidade de fadiga, extensão dos contratestes).
- Cada ficha ganhou um bloco **"Fadiga por uso"** (quanto cada habilidade custa em fadiga)
  e um **"Como jogar"** reescrito para a nova economia (dosar habilidades, ataques comuns
  não cansam, aptidões continuam grátis, reagir custa).
- PDF gerado (24 páginas), com **tema azul-petróleo** para distinguir visualmente do kit
  padrão (vermelho). Script versionado.

## Observações para o playtest (comparação)

Casos que o kit alternativo destaca: personagens de arma leve/ataque comum (Kaede, Elina,
Jiro, Syla) quase não cansam; suportes e controladores (Haruko, Doc, Isolde, Neriss,
Albrecht) precisam dosar; e o combo "arma pesada + habilidade + limiar" (Muro, Gareth,
Thorne) fica caríssimo de propósito — é o dado mais importante da comparação.
