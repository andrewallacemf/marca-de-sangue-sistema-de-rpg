# 🤝 Contrato de conteúdo

Esta pasta é a **fronteira oficial entre os dois backstages** do projeto
(ver [notas-de-design/decisoes/2026-07-24-arquitetura-plataforma-e-backstages.md](../notas-de-design/decisoes/2026-07-24-arquitetura-plataforma-e-backstages.md)):

- **Backstage do sistema** (este repositório): o time de criação escreve as regras em
  markdown, com notas de bastidor, decisões e pendências.
- **Backstage da plataforma** (repo `plataforma-rpg-marca-de-sangue`, e também a ficha
  e o manual web daqui): consome o conteúdo **limpo e estruturado** que sai desta pasta.

**Regra de ouro:** quem consome conteúdo do sistema consome **daqui** — nunca transcreve
regra à mão para dentro de código. Foi transcrição manual que fez a ficha divergir do
manual (39 armas com dano defasado, 9 itens faltando — corrigido em 24/07/2026).

## O que tem aqui

| Arquivo | O que é |
|---------|---------|
| [`limpeza.py`](limpeza.py) | A **limpeza oficial**: remove frontmatter, blocos de bastidor (`✅`, `📝`, `🔧`, `⚠️ A DEFINIR`, datas de decisão…), blocos explícitos `<!-- bastidor:inicio -->…<!-- bastidor:fim -->`, seção "Referências" e marcações internas. **`💡` nunca é removido** — é dica de mesa pro jogador/mestre, não bastidor (ver [CONVENCOES.md §12](../CONVENCOES.md) para a tabela completa dos emojis). Páginas inteiras marcadas `publico: false` no frontmatter são filtradas por quem consome (`manual/gerar-conteudo.py`), antes mesmo de chamar a limpeza. |
| [`exportar_catalogo.py`](exportar_catalogo.py) | O **exportador**: lê as listas do manual e gera o `catalogo.json`. |
| [`catalogo.json`](catalogo.json) | O **artefato do contrato**: armas, munições, proteções, habilidades (com progressão por nível), traços, propriedades de armas e os inimigos do kit de playtest (proposta), em JSON estruturado. **Gerado — não edite à mão.** |

## Consumidores

| Consumidor | O que usa | Como |
|------------|-----------|------|
| Manual web (`manual/gerar-conteudo.py`) | `limpeza.py` | importa `limpa_arquivo` e espelha o repo limpo no VitePress |
| PDF de playtest (`playtest/geracao-pdf/gerar_manual_pdf.py`) | `limpeza.py` | mesma limpeza → PDF e site sempre idênticos |
| Ficha interativa (`ficha/src/lib/catalogo.ts`) | `catalogo.json` | adaptador TypeScript importa o JSON no build |
| Plataforma (`plataforma-rpg-marca-de-sangue`) | `catalogo.json` | seed do banco (`HabilidadeBase`, `TracoBase`, `EquipamentoBase` e a biblioteca padrão de inimigos) — pode consumir a URL raw do GitHub |

## O fluxo (quem alimenta quem)

```
sistema-base/  modulos/  cenarios/        ← time de criação edita (com bastidor)
        │
        ▼
   contrato/limpeza.py                    ← remove bastidor/frontmatter
        │
        ├──▶ manual web (VitePress)       ← texto limpo
        ├──▶ PDF de playtest              ← texto limpo
        │
   contrato/exportar_catalogo.py          ← extrai dados estruturados (literal)
        │
        ▼
   contrato/catalogo.json                 ← artefato versionado
        │
        ├──▶ ficha (autopreenchimento)
        └──▶ plataforma (seed do banco)
```

## Quando você mexe nas listas do manual

Editou qualquer arquivo de `sistema-base/listas/` ou um módulo de armas/proteções?
**Regenere o catálogo no mesmo commit:**

```bash
python contrato/exportar_catalogo.py
```

O diff do `catalogo.json` no commit mostra exatamente o que a mudança de regra fez com
os dados — é revisão de conteúdo de graça. Se você esquecer, o deploy do site regenera
por conta própria (o site nunca publica dado velho) e avisa no log do GitHub Actions;
mas o JSON versionado fica para trás até alguém rodar o comando.

> **Por que o `catalogo.json` é versionado, se é gerado?** Exceção consciente à regra
> "gerado não versiona": (a) a plataforma consome o arquivo direto do GitHub;
> (b) o diff em cada commit torna mudanças de dados revisáveis pelo grupo;
> (c) quem desenvolve a ficha não precisa de Python instalado.

## Schema do `catalogo.json`

Campos de texto são **extração literal** do manual (limpos de bastidor). Lacunas do
manual saem **vazias** — o exportador nunca inventa conteúdo (avisa no console e a
lacuna vira pendência).

```jsonc
{
  "fontes": ["sistema-base/listas/…", "modulos/…"],   // arquivos de origem
  "propriedades": {                                    // glossário de propriedades de armas
    "CORT": { "nome": "Cortante", "efeito": "…", "maestria": "Maestria em armas cortantes" }
    // CONT, PERF, PROJ, AGAR, ARRE, DEFL, ACUI, VERS (ARRE/ACUI não têm maestria)
  },
  "armas": [{
    "nome": "Adaga", "variantes": ["Kukri", "Kunai"],
    "tamanho": "Leve",              // Leve | Média | Pesada | "" (desarmado)
    "categoria": "Curta",           // Curta (CURT.) | Longa (LONG.) | "" (à distância)
    "custoPA": "2",                 // só o número; "" = improvisada/sem custo próprio
    "alcance": "1m / 2m a 5m",      // segundo valor = alcance de arremesso
    "dano": "1d8 CORT · 1d6 PERF",  // "" nas armas à distância (dano vem da munição)
    "props": ["CORT", "PERF", "ARRE"],
    "versatil": false, "acuidade": false, "distancia": false,
    "municoes": [],                 // armas à distância: munições compatíveis
    "preco": "6 moedas", "durabilidade": "20",
    "modulo": "armas-brancas",      // origem: nome do módulo ou "sistema-base"
    "observacao": "…"               // opcional: parêntese da linha da tabela
  }],
  "municoes": [{ "nome": "Flecha ponta de ferro", "categoria": "PROJ", "dano": "1d10", "preco": "3 moedas", "modulo": "arcos-e-bestas" }],
  "protecoes": [{
    "nome": "Peça leve",            // armaduras: "Peça <tipo>"; escudos: nome da linha
    "classe": "Armadura",           // Armadura | Escudo
    "tipo": "Leve", "redDano": "-1", "redPA": "-1", "durabilidade": "10",
    "paUso": "2",                   // só escudos: PA para levantar guarda
    "preco": "20 moedas", "modulo": "protecoes"
  }],
  "habilidades": [{
    "nome": "Atordoar", "atributo": "Físico",
    "custoPA": "1 PA + PA da arma", // texto literal do manual
    "valorCompra": "4",             // custo de compra em exp (nível base)
    "efeito": "…",                  // seção Descrição, literal
    "requisitos": "…; …",           // bullets de Requisitos de uso
    "niveis": ["…", "…"],          // seção Progressão (índice 0 = nível 1)
    "observacoes": "…",             // opcional
    "experimental": false,          // true = lista experimental (fora da ficha)
    "fonte": "sistema-base/listas/habilidades-base-fisicas.md"
  }],
  "tracos": [{
    "nome": "Alerta", "categoria": "Aspecto",  // Técnica | Maestria | Aspecto
    "atributo": "",                 // técnicas (e experimentais) têm atributo
    "valorCompra": "4",
    "efeito": "…", "requisitos": "…",
    "gatilho": "…",                 // opcional (aspectos): condição de uso
    "observacao": "…",              // opcional (maestrias: custo escalonado)
    "experimental": false
  }],
  "inimigos": [{                    // blocos do kit de playtest (1 item por TIPO)
    "nome": "Sentinela",
    "cenarioNumero": 2, "cenarioTitulo": "O Selo do Templo",
    "contexto": "Mukashi · 30 exp · furto/infiltração",
    "qtd": "3",                     // quantos entram no cenário (texto literal)
    "tier": "medio",                // fraco | medio | forte | chefe | especial | ""
    "queda": "20",                  // dano TOTAL p/ cair — só nos tiers fraco/medio/forte
    "quedaTexto": "médio (20)",     // célula literal; "" = tier nunca anotado (A DEFINIR)
    "entrada": "Patrulhas — Entrada, Sala dos Sinos e Jardim (uma cada)",
    "pa": "10", "arma": "Naginata curta (média, perfurante)", "dano": "1d6",
    "custoPA": "4", "alcance": "1 m",
    "reducao": "",                  // redução de dano (armadura); "" = sem
    "tatica": "…",
    "proposta": true                // SEMPRE true: o pacote de minion (tiers 10/20/30)
                                    // é proposta de playtest — regra não fechada
                                    // (PENDENCIAS.md, "Minions — tratamento único")
  }]
}
```

## Regras do contrato

1. **Extração literal.** O exportador não resume nem reescreve; o texto do JSON é o
   texto do manual. Se o manual estiver ruim, conserta-se o manual.
2. **Lacuna não se preenche.** Campo sem definição no manual sai vazio + aviso no
   console + linha no `PENDENCIAS.md` (ex.: efeito das maestrias de armadura).
3. **Mudou lista → regenera no mesmo commit** (comando acima).
4. **Mudou a estrutura das tabelas/seções do manual → atualize o exportador junto.**
   O parser depende dos formatos documentados em `CONVENCOES.md` e dos cabeçalhos
   das tabelas dos módulos.
5. **Consumidor não transcreve.** Precisou de um dado que o JSON não tem? Evolua o
   exportador (e este schema), não copie o dado para o código.
