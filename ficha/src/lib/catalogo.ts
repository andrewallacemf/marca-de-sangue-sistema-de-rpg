// Catálogo do manual base — ADAPTADOR sobre o catálogo oficial gerado.
//
// A fonte dos dados é `contrato/catalogo.json`, gerado pelo exportador do
// CONTRATO DE CONTEÚDO (`python contrato/exportar_catalogo.py`) a partir das
// listas do manual (sistema-base/listas/ + módulos). NÃO transcreva dados aqui:
// mudou uma lista no manual → rode o exportador e o JSON (e a ficha) atualizam.
// Ver contrato/README.md.

import catalogoJson from "../../../contrato/catalogo.json";

export type PropKey = "ARRE" | "AGAR" | "CORT" | "CONT" | "DEFL" | "PERF" | "PROJ";

export type CatArma = {
  nome: string;            // nome principal (o primeiro nome da linha da tabela)
  variantes?: string[];    // demais nomes listados na mesma linha
  tipo: string;            // tamanho: "Leve" | "Média" | "Pesada" | "" (desarmado)
  categoria: string;       // classe de alcance da coluna: "Curta" (CURT.) | "Longa" (LONG.) | ""
  custoPA: string;         // só o número, ex: "2", "4", "6", "1", "" (improvisada sem PA)
  alcance: string;         // ex: "1m", "2m a 5m", "1m / 2m a 5m", ""
  dano: string;            // ex: "3d4 CONT · 1d8 PERF (+1d4 a 2 mãos)", "1d12", "1d4"
  props: PropKey[];        // subconjunto (NÃO inclui VERS aqui; use o campo versatil)
  versatil?: boolean;      // true se a linha tem VERS.
  distancia?: boolean;     // true para armas à distância
  municoes?: string[];     // armas à distância: munições compatíveis (dano vem delas)
  preco?: string;          // ex: "6 moedas"
  durabilidade?: string;   // ex: "20"
};

export type CatProtecao = {
  nome: string;            // p/ armaduras use "Peça leve"/"Peça média"/"Peça pesada"; p/ escudos o nome principal da linha
  variantes?: string[];    // outros nomes na mesma linha (escudos)
  classe: "Armadura" | "Escudo";
  tipo: string;            // "Leve" | "Média" | "Pesada"
  redPA: string;           // ex: "-1"
  redDano: string;         // ex: "-1"
  durabilidade: string;    // ex: "10"
  paUso?: string;          // escudos: PA para levantar guarda, só número ex "2"
  preco?: string;
};

export type CatHabilidade = {
  nome: string;
  atributo: "Físico" | "Ágil" | "Mental" | "Social" | "Geral";
  custoPA: string;         // custo de PA de ativação conforme o manual (ex: "1 PA", "1 PA + PA da arma")
  valorCompra: string;     // custo de compra em exp (só o número, nível base)
  efeito: string;          // Descrição da habilidade (texto literal do manual)
  requisitos?: string;     // requisitos de uso; opcional
};

export type CatTraco = {
  nome: string;
  categoria: "Técnica" | "Maestria" | "Aspecto";
  atributo?: string;       // quando o manual indicar (técnicas têm atributo)
  valorCompra: string;     // custo de compra em exp (só o número)
  efeito: string;          // Descrição (texto literal do manual)
  requisitos?: string;
};

export type PropInfo = {
  nome: string;
  efeito: string;
  /** traço de maestria que ativa a propriedade (undefined = não exige maestria). */
  maestria?: string;
};

// ---------------------------------------------------------------------------
// Formato do catálogo gerado (subconjunto que o adaptador usa)
// ---------------------------------------------------------------------------

type JsonArma = {
  nome: string; variantes: string[]; tamanho: string; categoria: string;
  custoPA: string; alcance: string; dano: string; props: string[];
  versatil: boolean; acuidade: boolean; distancia: boolean; municoes: string[];
  preco: string; durabilidade: string; modulo: string; observacao?: string;
};
type JsonProtecao = {
  nome: string; variantes: string[]; classe: string; tipo: string;
  redPA: string; redDano: string; durabilidade: string; paUso?: string;
  preco: string; modulo: string;
};
type JsonHabilidade = {
  nome: string; atributo: string; custoPA: string; valorCompra: string;
  efeito: string; requisitos: string; niveis: string[]; experimental: boolean;
  fonte: string; observacoes?: string;
};
type JsonTraco = {
  nome: string; categoria: string; atributo: string; valorCompra: string;
  efeito: string; requisitos: string; experimental: boolean;
  gatilho?: string; observacao?: string;
};
type CatalogoJson = {
  propriedades: Record<string, { nome: string; efeito: string; maestria?: string }>;
  armas: JsonArma[];
  municoes: { nome: string; categoria: string; dano: string; preco: string }[];
  protecoes: JsonProtecao[];
  habilidades: JsonHabilidade[];
  tracos: JsonTraco[];
};

const catalogo = catalogoJson as unknown as CatalogoJson;

const PROP_KEYS: PropKey[] = ["ARRE", "AGAR", "CORT", "CONT", "DEFL", "PERF", "PROJ"];
const ehPropKey = (p: string): p is PropKey => (PROP_KEYS as string[]).includes(p);
const capitaliza = (s: string) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);

// ---------------------------------------------------------------------------
// ARMAS
// ---------------------------------------------------------------------------

export const CAT_ARMAS: CatArma[] = catalogo.armas.map((a) => ({
  nome: a.nome,
  variantes: a.variantes.length ? a.variantes : undefined,
  tipo: a.tamanho,
  categoria: a.categoria,
  custoPA: a.custoPA,
  alcance: a.alcance,
  dano: a.dano,
  props: a.props.filter(ehPropKey),
  versatil: a.versatil || undefined,
  distancia: a.distancia || undefined,
  municoes: a.municoes.length ? a.municoes : undefined,
  preco: a.preco || undefined,
  durabilidade: a.durabilidade || undefined,
}));

// ---------------------------------------------------------------------------
// PROTEÇÕES
// ---------------------------------------------------------------------------

export const CAT_PROTECOES: CatProtecao[] = catalogo.protecoes.map((p) => ({
  nome: p.nome,
  variantes: p.variantes.length ? p.variantes : undefined,
  classe: p.classe === "Escudo" ? "Escudo" : "Armadura",
  tipo: p.tipo,
  redPA: p.redPA,
  redDano: p.redDano,
  durabilidade: p.durabilidade,
  paUso: p.paUso || undefined,
  preco: p.preco || undefined,
}));

// ---------------------------------------------------------------------------
// HABILIDADES (base; as experimentais ficam fora da ficha por enquanto)
// ---------------------------------------------------------------------------

export const CAT_HABILIDADES: CatHabilidade[] = catalogo.habilidades
  .filter((h) => !h.experimental)
  .map((h) => ({
    nome: h.nome,
    atributo: h.atributo as CatHabilidade["atributo"],
    custoPA: h.custoPA,
    valorCompra: h.valorCompra,
    efeito: h.efeito,
    requisitos: h.requisitos || undefined,
  }));

// ---------------------------------------------------------------------------
// TRAÇOS (base; os experimentais ficam fora da ficha por enquanto)
// ---------------------------------------------------------------------------

export const CAT_TRACOS: CatTraco[] = catalogo.tracos
  .filter((t) => !t.experimental)
  .map((t) => ({
    nome: t.nome,
    categoria: t.categoria as CatTraco["categoria"],
    atributo: t.atributo || undefined,
    valorCompra: t.valorCompra,
    efeito: t.efeito,
    requisitos:
      [t.gatilho ? `Gatilho: ${t.gatilho}` : "", t.requisitos]
        .filter(Boolean)
        .join(" · ") || undefined,
  }));

// ---------------------------------------------------------------------------
// PROPRIEDADES DAS ARMAS (glossário + maestria correspondente)
// ---------------------------------------------------------------------------

export const PROP_INFO: Record<PropKey, PropInfo> = Object.fromEntries(
  PROP_KEYS.map((sigla) => {
    const p = catalogo.propriedades[sigla];
    return [sigla, p
      ? { nome: p.nome, efeito: capitaliza(p.efeito), maestria: p.maestria }
      : { nome: sigla, efeito: "" }];
  })
) as Record<PropKey, PropInfo>;
