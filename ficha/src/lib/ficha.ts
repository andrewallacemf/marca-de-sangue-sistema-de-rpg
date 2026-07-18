/* Modelo de dados da ficha + fábricas. Centralizado para App e seções usarem. */

export const SCHEMA_VERSION = 1;
export type RulesVersion = "vigente" | "alternativa";

export type TotalUsado = { total: string; usado: string };

export type Arma = {
  nome: string;
  tipo: string;
  equipado: string;
  categoria: string;
  alcance: string;
  durabilidade: string;
  custoPA: string;
  dano: string;
  props: Record<string, boolean>;
};

export type Protecao = {
  nome: string;
  redPA: string;
  redDano: string;
  durabilidade: string;
  regioes: MembroKey[]; // regiões do corpo que a peça cobre
};

export type CaracteristicaCard = {
  tipo: "Habilidade" | "Traço";
  nome: string;
  efeito: string;
  requisitos: string;
  atributo: string;
  valorCompra: string;
  custoPA: string;
  usosPorNivel: number[]; // regras vigentes: quantos usos em cada nível (5 posições)
  nivel: number; // regras alternativas: nível único da habilidade (1–5)
};

export type ItemEquip = {
  equipado: boolean;
  item: string;
  qtd: string;
  pesoUnit: string;
  pesoTotal: string;
};

export type TesouroSlot = { label: string; valor: string };

export type Ficha = {
  info: { nome: string; jogador: string; cenario: string; ultimaSessao: string };
  exp: {
    baseTotal: string;
    baseUsada: string;
    qtdAptidoes: string;
    qtdHabilidades: string;
    qtdTracos: string;
  };
  aptidoes: Record<"fisica" | "agil" | "mental" | "social", TotalUsado>;
  pa: {
    base: string;
    redArmadura: string;
    redDano: string;
    redCarga: string;
    outros: string;
    total: string;
  };
  armas: Arma[];
  protecoes: Protecao[];
  saude: Record<MembroKey, number[]>; // 0 vazio · 1 superficial · 2 profundo · 3 permanente
  fadiga: number;
  guardas: string;
  equipamentos: ItemEquip[];
  carga: { capacidade: string; carregado: string };
  tesouro: TesouroSlot[];
  caracteristicas: CaracteristicaCard[];
  anotacoes: string;
};

export const PROP_KEYS = ["ARRE", "AGAR", "CORT", "CONT", "DEFL", "PERF", "PROJ"] as const;

export type MembroKey = "cabeca" | "tronco" | "bracoE" | "bracoD" | "pernaE" | "pernaD";

/** Ordem de exibição + número do d6 de acerto aleatório (ataque descuidado) + abreviação. */
export const MEMBROS: { key: MembroKey; label: string; d6: number; abbr: string }[] = [
  { key: "cabeca", label: "Cabeça", d6: 1, abbr: "Cab" },
  { key: "tronco", label: "Tronco", d6: 4, abbr: "Tro" },
  { key: "bracoD", label: "Braço dir.", d6: 2, abbr: "BD" },
  { key: "bracoE", label: "Braço esq.", d6: 5, abbr: "BE" },
  { key: "pernaD", label: "Perna dir.", d6: 6, abbr: "PD" },
  { key: "pernaE", label: "Perna esq.", d6: 3, abbr: "PE" },
];

export function novaArma(): Arma {
  return {
    nome: "",
    tipo: "",
    equipado: "",
    categoria: "",
    alcance: "",
    durabilidade: "",
    custoPA: "",
    dano: "",
    props: Object.fromEntries(PROP_KEYS.map((k) => [k, false])),
  };
}

export function novaProtecao(): Protecao {
  return { nome: "", redPA: "", redDano: "", durabilidade: "", regioes: [] };
}

export function novoItem(): ItemEquip {
  return { equipado: false, item: "", qtd: "", pesoUnit: "", pesoTotal: "" };
}

export function novaCaracteristica(): CaracteristicaCard {
  return {
    tipo: "Habilidade",
    nome: "",
    efeito: "",
    requisitos: "",
    atributo: "",
    valorCompra: "",
    custoPA: "",
    usosPorNivel: [0, 0, 0, 0, 0],
    nivel: 1,
  };
}

export function fichaVazia(): Ficha {
  return {
    info: { nome: "", jogador: "", cenario: "", ultimaSessao: "" },
    exp: { baseTotal: "15", baseUsada: "", qtdAptidoes: "", qtdHabilidades: "", qtdTracos: "" },
    aptidoes: {
      fisica: { total: "", usado: "" },
      agil: { total: "", usado: "" },
      mental: { total: "", usado: "" },
      social: { total: "", usado: "" },
    },
    pa: { base: "10", redArmadura: "", redDano: "", redCarga: "", outros: "", total: "" },
    armas: [novaArma(), novaArma()],
    protecoes: Array.from({ length: 4 }, novaProtecao),
    saude: Object.fromEntries(MEMBROS.map((m) => [m.key, Array(10).fill(0)])) as Record<
      MembroKey,
      number[]
    >,
    fadiga: 0,
    guardas: "",
    equipamentos: Array.from({ length: 6 }, novoItem),
    carga: { capacidade: "", carregado: "" },
    tesouro: [
      { label: "Moedas", valor: "" },
      { label: "", valor: "" },
      { label: "", valor: "" },
      { label: "", valor: "" },
    ],
    caracteristicas: Array.from({ length: 6 }, novaCaracteristica),
    anotacoes: "",
  };
}

export const LS_KEY = "marca-de-sangue-ficha:v1";

/** Mescla dados carregados com a ficha vazia e migra formatos antigos. */
export function migrarFicha(data: unknown): Ficha {
  const base = fichaVazia();
  const d = (data ?? {}) as Record<string, unknown>;
  const f: Ficha = { ...base, ...(d as Partial<Ficha>) };

  // completa uma lista até o mínimo de slots vazios (para a ficha carregada
  // manter os mesmos campos em branco da ficha vazia, sem "sumir" slots).
  const preencher = <T,>(arr: T[] | undefined, min: number, criar: () => T): T[] => {
    const out = Array.isArray(arr) ? [...arr] : [];
    while (out.length < min) out.push(criar());
    return out;
  };

  const cards = Array.isArray(d.caracteristicas) ? (d.caracteristicas as unknown[]) : [];
  f.caracteristicas = cards.map((raw) => {
    const rawObj = (raw ?? {}) as Record<string, unknown>;
    const c = { ...novaCaracteristica(), ...rawObj } as CaracteristicaCard & { niveis?: boolean[] };
    // decide pela forma do dado BRUTO (não pelo default que acabamos de aplicar)
    if (!Array.isArray(rawObj.usosPorNivel)) {
      if (Array.isArray(rawObj.niveis)) {
        const niveis = rawObj.niveis as boolean[];
        c.usosPorNivel = niveis.map((b) => (b ? 1 : 0));
        const idx = niveis.lastIndexOf(true);
        c.nivel = idx >= 0 ? idx + 1 : 1;
      } else {
        c.usosPorNivel = [0, 0, 0, 0, 0];
      }
    }
    while (c.usosPorNivel.length < 5) c.usosPorNivel.push(0);
    if (typeof c.nivel !== "number") c.nivel = 1;
    delete c.niveis;
    return c;
  });

  // proteções: formato antigo {local,tipo,...} → {nome, regioes[], ...}
  const prots = Array.isArray(d.protecoes) ? (d.protecoes as unknown[]) : [];
  if (prots.length) {
    f.protecoes = prots.map((raw) => {
      const p = { ...novaProtecao(), ...(raw as Record<string, unknown>) } as Protecao & {
        local?: string;
        tipo?: string;
      };
      if (!p.nome) p.nome = p.tipo || p.local || "";
      if (!Array.isArray(p.regioes)) p.regioes = [];
      delete p.local;
      delete p.tipo;
      return p;
    });
  }

  // normaliza armas (garante todos os campos + objeto de propriedades) e completa slots
  const armasRaw = Array.isArray(d.armas) ? (d.armas as unknown[]) : [];
  f.armas = armasRaw.map((raw) => {
    const r = (raw ?? {}) as Record<string, unknown>;
    return {
      ...novaArma(),
      ...r,
      props: { ...novaArma().props, ...((r.props as Record<string, boolean>) ?? {}) },
    } as Arma;
  });

  // normaliza equipamentos
  const equipRaw = Array.isArray(d.equipamentos) ? (d.equipamentos as unknown[]) : [];
  f.equipamentos = equipRaw.map((raw) => ({ ...novoItem(), ...((raw ?? {}) as Record<string, unknown>) }) as ItemEquip);

  // completa todas as coleções até o mínimo da ficha vazia (slots vazios visíveis)
  f.armas = preencher(f.armas, base.armas.length, novaArma);
  f.protecoes = preencher(f.protecoes, base.protecoes.length, novaProtecao);
  f.equipamentos = preencher(f.equipamentos, base.equipamentos.length, novoItem);
  f.caracteristicas = preencher(f.caracteristicas, base.caracteristicas.length, novaCaracteristica);
  f.tesouro = preencher(f.tesouro, base.tesouro.length, () => ({ label: "", valor: "" }));

  // remove grade de habilidades legada (agora derivada dos cards)
  delete (f as Record<string, unknown>).habilidades;
  return f;
}
