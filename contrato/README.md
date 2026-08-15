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
| [`catalogo.json`](catalogo.json) | O **artefato do contrato**: armas, munições, proteções, itens gerais, habilidades (com progressão por nível), traços, propriedades de armas, os inimigos do kit de playtest (proposta), magias oficiais e veículos (proposta), em JSON estruturado. **Gerado — não edite à mão.** |

## Consumidores

| Consumidor | O que usa | Como |
|------------|-----------|------|
| Manual web (`manual/gerar-conteudo.py`) | `limpeza.py` | importa `limpa_arquivo` e espelha o repo limpo no VitePress |
| PDF de playtest (`playtest/geracao-pdf/gerar_manual_pdf.py`) | `limpeza.py` | mesma limpeza → PDF e site sempre idênticos |
| Ficha interativa (`ficha/src/lib/catalogo.ts`) | `catalogo.json` | adaptador TypeScript importa o JSON no build |
| Plataforma (`plataforma-rpg-marca-de-sangue`) | `catalogo.json` | seed do banco (`HabilidadeBase`, `TracoBase`, `EquipamentoBase` e a biblioteca padrão de inimigos) — pode consumir a URL raw do GitHub |

## Consumidores da regra (não só dos dados)

O `catalogo.json` cobre os **dados** (listas). Mas dois consumidores dependem do
**texto das regras** — fórmulas, custos, encadeamentos — e uma mudança de regra os
afeta mesmo quando nenhuma lista muda:

| Consumidor | O que consome | Consequência de uma mudança de regra |
|------------|---------------|--------------------------------------|
| **Engine da plataforma** (`plataforma-rpg-marca-de-sangue`, `src/lib/game-engine/`) | O **texto** das regras, implementado como funções puras (fadiga, custos de `PA`, descanso, saúde…) | Toda mudança de regra que a plataforma executa exige o **passo 3** do checklist abaixo — aviso no backlog dela, **no mesmo commit** |
| **Ficha offline** (`ficha/`) | O texto das regras + o `catalogo.json` | Atualizada em **08/08/2026** para as regras de 01/08 (fadiga máx = `PV`, penalidade em passo 10, sem modo de usos). Qualquer mudança de regra futura deve **atualizá-la** OU **registrar a defasagem explicitamente** no [PENDENCIAS.md](../PENDENCIAS.md) |

## Quando a REGRA muda (checklist de mudança de regra)

Regenerar o catálogo não basta: em 01/08/2026 a mudança de fadiga saiu sem aviso
para a plataforma, que ficou executando a regra antiga. Sempre que uma **regra**
mudar, siga o encadeamento:

1. **Edite a regra** em `sistema-base/`/`modulos/` e atualize o `INDICE.md` e o
   `PENDENCIAS.md` (protocolo de análise de impacto do [AGENTS.md](../AGENTS.md)).
2. **Mexeu em lista?** Regenere o `contrato/catalogo.json` **no mesmo commit**
   (regra 12 do AGENTS.md).
3. **AVISO OBRIGATÓRIO NO MESMO COMMIT:** acrescente uma linha em
   [notas-de-design/pendencias-ficha-plataforma.md](../notas-de-design/pendencias-ficha-plataforma.md)
   marcando a **plataforma como afetada** pela mudança. *Esta é a correção da falha
   de 01/08, quando a mudança de fadiga não avisou a plataforma.*
4. **A plataforma implementa** (seed/engine/migration/testes/manual — o manual passa
   por curadoria editorial, regra 13 do AGENTS.md) e **fecha o aviso citando a
   decisão dela** (`docs/DECISIONS.md` de lá).
5. **Ficha offline** (`ficha/`): atualize-a OU registre a defasagem explicitamente.
6. **Manual web**: regenera sozinho no deploy — nada a fazer.
7. **PDFs**: só antes de playtest (pendência de regeração já anotada no
   `PENDENCIAS.md`).

**Rastreabilidade bidirecional (regra):** o item de backlog daqui cita a decisão da
plataforma que o fechou, e a decisão de lá cita o item daqui. Já era praticado —
agora é regra.

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
  "itens": [{
    "nome": "Corda (10m)", "observacao": "",
    "preco": "2 moedas", "modulo": "sistema-base"
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
    "reducaoRegioes": ["tronco"],   // OPCIONAL: membros cobertos (cabeca, tronco,
                                    // bracoE/D, pernaE/D). Ausente ou [] = vale em
                                    // qualquer golpe. Só quando a célula declara
                                    // "−N <regiões> (…)" — ver inimigos-do-kit.md
    "tatica": "…",
    "proposta": true                // SEMPRE true: o pacote de minion (tiers 10/20/30)
                                    // é proposta de playtest — regra não fechada
                                    // (PENDENCIAS.md, "Minions — tratamento único")
  }],
  "magias": [{                      // módulo Magia
    "nome": "Punho da Montanha", "atributo": "Físico",
    "custoPA": "1 PA + PA da arma (ou desarmado)",  // texto literal do manual
    "custoAtivacao": "2 dano curável (fixo em todos os níveis)",  // texto literal
    "tipoCusto": "dano curável",    // fadiga | dano curável | vida máxima — o tipo
                                    // cobrado no NÍVEL 1 (primeiro tipo citado no
                                    // texto; magias que trocam de tipo em níveis
                                    // altos mantêm o texto completo em custoAtivacao)
    "valorCompra": "2",             // custo de compra em exp (nível base)
    "efeito": "…", "requisitos": "…; …",
    "niveis": ["…", "…"],          // seção Progressão (índice 0 = nível 1)
    "proposta": false               // magias oficializadas em 15/08/2026
  }],
  "veiculos": {                     // módulo Veículos — TUDO com "proposta": true
                                    // (números do material Alpha do Colapso, ainda
                                    // não validados em playtest)
    "categorias": [{                // moldes de veículo (tabela de categorias)
      "nome": "B", "exemplos": "Carro de passeio, picape leve",
      "velocidadeMax": "70 m/t", "motor": "15",       // "" = sem motor
      "integridadePorParte": "12", "ocupantes": "4",
      "slotsEquipamento": "3", "combustivel": "6",    // "" = não usa combustível
      "proposta": true
    }],
    "partes": [{                    // as cinco partes + o motor
      "nome": "Rodagem", "descricao": "Pneus, rodas, eixos, suspensão",
      "observacao": "…", "proposta": true
    }],
    "equipamentos": [{
      "nome": "Âncora",
      "tipo": "ativo",              // ativo | passivo | apoio (item carregado)
      "atributo": "Físico",         // só ativos (atributo do teste de uso)
      "durabilidade": "5",          // literal — passivos podem vir "10 (não conserta)"
      "paUso": "2 (lançar/recolher) + 1 por −10 m/t",  // só ativos
      "instalar": "8 PA",           // "" nos itens de apoio (não se instalam)
      "cobertura": "Não",           // Sim | Não — operar mantém a meia cobertura?
      "efeito": "…",
      "fabricacao": {               // linha da tabela de fabricação (casada por nome)
        "pecasComuns": "10", "pecasEspecializadas": "", "testes": "Físico · Ágil"
      },
      "proposta": true
    }],
    "habilidades": [{               // formato em bullets no manual
      "nome": "Atropelar", "atributo": "Ágil",
      "custoPA": "2 PA + 2 de dano ao próprio motor",  // texto literal
      "valorCompra": "3", "efeito": "…",
      "niveis": "+2 / +4 / +6 / +8 / +10 de dano adicional.",  // TEXTO único, não
                                    // lista (formato compacto dos bullets);
                                    // "" = sem progressão declarada (custo por nível)
      "observacao": "…",            // opcional (parêntese em itálico do bullet)
      "proposta": true
    }],
    "tracos": [{
      "nome": "Baliza", "atributo": "Mental", "valorCompra": "3",
      "efeito": "…", "proposta": true
    }]
  }
}
```

### Fontes por chave

A lista completa (na ordem de leitura) está na chave `fontes` do próprio JSON.

| Chave | Fonte(s) no repositório |
|-------|-------------------------|
| `propriedades` | `sistema-base/listas/equipamentos-base.md` (nomes das maestrias: `tracos-base.md`) |
| `armas`, `municoes` | `sistema-base/listas/equipamentos-base.md` + `acoes-em-combate.md` (desarmado/improvisadas); módulos `armas-brancas`, `armas-exoticas`, `arcos-e-bestas`, `armas-de-fogo` |
| `protecoes` | `modulos/protecoes/README.md` |
| `habilidades` | `sistema-base/listas/habilidades-base-*.md` + `habilidades-experimentais-sociais.md` |
| `tracos` | `sistema-base/listas/tracos-base.md` (+ traços das listas de habilidades) |
| `inimigos` | `playtest/cenarios/inimigos-do-kit.md` + `sistema-base/criaturas/criaturas-genericas.md` |
| `magias` | `modulos/magia/listas/lista-de-magias.md` |
| `veiculos` | `modulos/veiculos/listas/` — `lista-de-veiculos.md` (categorias e partes), `lista-de-equipamentos.md`, `lista-de-habilidades.md`, `lista-de-tracos.md` |

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
