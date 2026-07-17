import { useEffect, useRef, useState } from "react";
import {
  Save,
  FolderOpen,
  Printer,
  FilePlus2,
  Shield,
  Swords,
  HeartPulse,
  BatteryLow,
} from "lucide-react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Field,
  Input,
  Label,
  Textarea,
} from "@/components/ui";
import { cn } from "@/lib/utils";

/* ============================ Modelo de dados ============================ */

const SCHEMA_VERSION = 1;
type RulesVersion = "vigente" | "alternativa";

type TotalUsado = { total: string; usado: string };
type Arma = {
  nome: string;
  tipo: string; // Leve / Média / Pesada
  equipado: string; // Mão hábil / inábil / Duas mãos
  categoria: string;
  alcance: string;
  durabilidade: string;
  custoPA: string;
  dano: string;
  props: Record<string, boolean>;
};
type Protecao = {
  local: string;
  tipo: string;
  redPA: string;
  redDano: string;
  durabilidade: string;
};
type Habilidade = { nome: string; niveis: boolean[] };

type Ficha = {
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
  habilidades: Habilidade[];
  armas: Arma[];
  protecoes: Protecao[];
  saude: Record<MembroKey, number[]>; // 0 vazio, 1 superficial, 2 profundo, 3 permanente
  fadiga: number; // pontos preenchidos (0..50)
  guardas: string;
  anotacoes: string;
};

const PROP_KEYS = ["ARRE", "AGAR", "CORT", "CONT", "DEFL", "PERF", "PROJ"] as const;

type MembroKey = "cabeca" | "tronco" | "bracoE" | "bracoD" | "pernaE" | "pernaD";
const MEMBROS: { key: MembroKey; label: string }[] = [
  { key: "cabeca", label: "Cabeça" },
  { key: "tronco", label: "Tronco" },
  { key: "bracoD", label: "Braço direito" },
  { key: "bracoE", label: "Braço esquerdo" },
  { key: "pernaD", label: "Perna direita" },
  { key: "pernaE", label: "Perna esquerda" },
];

function novaArma(): Arma {
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
function novaProtecao(local: string): Protecao {
  return { local, tipo: "", redPA: "", redDano: "", durabilidade: "" };
}
function fichaVazia(): Ficha {
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
    habilidades: Array.from({ length: 8 }, () => ({ nome: "", niveis: [false, false, false, false, false] })),
    armas: [novaArma(), novaArma()],
    protecoes: [novaProtecao("Superior"), novaProtecao("Inferior"), novaProtecao("Escudo")],
    saude: Object.fromEntries(MEMBROS.map((m) => [m.key, Array(10).fill(0)])) as Record<MembroKey, number[]>,
    fadiga: 0,
    guardas: "",
    anotacoes: "",
  };
}

const LS_KEY = "marca-de-sangue-ficha:v1";

/* ============================ Componentes auxiliares ============================ */

function DamageCell({ state, onClick }: { state: number; onClick: () => void }) {
  // 0 vazio · 1 superficial · 2 profundo · 3 permanente
  const styles = [
    "bg-transparent",
    "bg-accent/40",
    "bg-primary/60 text-primary-foreground",
    "bg-foreground text-background",
  ];
  const chars = ["", "／", "✕", "■"];
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "h-5 w-5 shrink-0 rounded-[3px] border border-input text-[10px] font-bold leading-none",
        "flex items-center justify-center transition-colors",
        styles[state]
      )}
      title={["vazio", "superficial", "profundo", "permanente"][state]}
    >
      {chars[state]}
    </button>
  );
}

function TotalUsadoRow({
  label,
  value,
  onChange,
}: {
  label: string;
  value: TotalUsado;
  onChange: (v: TotalUsado) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-16 text-sm">{label}</span>
      <Input
        className="h-7 w-14 text-center"
        placeholder="tot."
        value={value.total}
        onChange={(e) => onChange({ ...value, total: e.target.value })}
      />
      <span className="text-muted-foreground">/</span>
      <Input
        className="h-7 w-14 text-center"
        placeholder="usad."
        value={value.usado}
        onChange={(e) => onChange({ ...value, usado: e.target.value })}
      />
    </div>
  );
}

/* ============================ App ============================ */

export default function App() {
  const [rulesVersion, setRulesVersion] = useState<RulesVersion>("vigente");
  const [ficha, setFicha] = useState<Ficha>(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed?.rulesVersion) setTimeoutSafe(() => setRulesVersion(parsed.rulesVersion));
        if (parsed?.data) return { ...fichaVazia(), ...parsed.data };
      }
    } catch {
      /* ignora */
    }
    return fichaVazia();
  });
  const [a4, setA4] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  // autosave
  useEffect(() => {
    const payload = JSON.stringify({
      app: "marca-de-sangue-ficha",
      schemaVersion: SCHEMA_VERSION,
      rulesVersion,
      data: ficha,
    });
    try {
      localStorage.setItem(LS_KEY, payload);
    } catch {
      /* ignora */
    }
  }, [ficha, rulesVersion]);

  function update<K extends keyof Ficha>(key: K, value: Ficha[K]) {
    setFicha((f) => ({ ...f, [key]: value }));
  }

  function salvar() {
    const payload = {
      app: "marca-de-sangue-ficha",
      schemaVersion: SCHEMA_VERSION,
      rulesVersion,
      salvoEm: new Date().toISOString(),
      data: ficha,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const nome = (ficha.info.nome || "personagem").replace(/[^\p{L}\p{N}_-]+/gu, "_");
    a.href = url;
    a.download = `${nome}.mds.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function carregar(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        if (parsed?.rulesVersion === "alternativa" || parsed?.rulesVersion === "vigente") {
          setRulesVersion(parsed.rulesVersion);
        }
        if (parsed?.data) setFicha({ ...fichaVazia(), ...parsed.data });
      } catch {
        alert("Não consegui ler esse arquivo de ficha.");
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  }

  function novo() {
    if (confirm("Começar uma ficha nova? As alterações não salvas serão perdidas.")) {
      setFicha(fichaVazia());
    }
  }

  const limiar = 10; // usado só na versão alternativa

  return (
    <div className={cn("min-h-screen pb-16", a4 && "a4-preview bg-muted")}>
      {/* Barra de ferramentas */}
      <header className="no-print sticky top-0 z-10 border-b bg-card/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-4 py-2">
          <span className="mr-1 text-sm font-semibold tracking-wide text-primary">
            Marca de Sangue <span className="text-muted-foreground">· Ficha</span>
          </span>

          <div className="ml-2 flex items-center gap-1 rounded-md border p-0.5">
            {(["vigente", "alternativa"] as RulesVersion[]).map((v) => (
              <button
                key={v}
                onClick={() => setRulesVersion(v)}
                className={cn(
                  "rounded px-2 py-1 text-xs font-medium capitalize",
                  rulesVersion === v ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
                )}
              >
                {v === "vigente" ? "Regras vigentes" : "Regras alternativas"}
              </button>
            ))}
          </div>

          <div className="ml-auto flex flex-wrap items-center gap-1.5">
            <Button variant="outline" size="sm" onClick={novo}>
              <FilePlus2 className="h-3.5 w-3.5" /> Nova
            </Button>
            <Button variant="outline" size="sm" onClick={() => fileRef.current?.click()}>
              <FolderOpen className="h-3.5 w-3.5" /> Carregar
            </Button>
            <input
              ref={fileRef}
              type="file"
              accept=".json,application/json"
              className="hidden"
              onChange={carregar}
            />
            <Button size="sm" onClick={salvar}>
              <Save className="h-3.5 w-3.5" /> Salvar
            </Button>
            <Button
              variant={a4 ? "default" : "outline"}
              size="sm"
              onClick={() => setA4((s) => !s)}
            >
              A4
            </Button>
            <Button variant="secondary" size="sm" onClick={() => window.print()}>
              <Printer className="h-3.5 w-3.5" /> Imprimir
            </Button>
          </div>
        </div>
      </header>

      <main className={cn("mx-auto max-w-6xl px-4 py-4", a4 && "px-0")}>
        <div className={cn(a4 && "sheet")}>
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
            {/* Informações */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Informações</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <Field label="Nome do personagem" className="col-span-2">
                  <Input
                    value={ficha.info.nome}
                    onChange={(e) => update("info", { ...ficha.info, nome: e.target.value })}
                  />
                </Field>
                <Field label="Jogador">
                  <Input
                    value={ficha.info.jogador}
                    onChange={(e) => update("info", { ...ficha.info, jogador: e.target.value })}
                  />
                </Field>
                <Field label="Cenário">
                  <Input
                    value={ficha.info.cenario}
                    onChange={(e) => update("info", { ...ficha.info, cenario: e.target.value })}
                  />
                </Field>
                <Field label="Última sessão" className="col-span-2 sm:col-span-1">
                  <Input
                    value={ficha.info.ultimaSessao}
                    onChange={(e) =>
                      update("info", { ...ficha.info, ultimaSessao: e.target.value })
                    }
                  />
                </Field>
              </CardContent>
            </Card>

            {/* Experiência */}
            <Card>
              <CardHeader>
                <CardTitle>Experiência & características</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-2">
                <Field label="Exp. base — total">
                  <Input
                    value={ficha.exp.baseTotal}
                    onChange={(e) => update("exp", { ...ficha.exp, baseTotal: e.target.value })}
                  />
                </Field>
                <Field label="Exp. base — usada">
                  <Input
                    value={ficha.exp.baseUsada}
                    onChange={(e) => update("exp", { ...ficha.exp, baseUsada: e.target.value })}
                  />
                </Field>
                <Field label="Aptidões">
                  <Input
                    value={ficha.exp.qtdAptidoes}
                    onChange={(e) => update("exp", { ...ficha.exp, qtdAptidoes: e.target.value })}
                  />
                </Field>
                <Field label="Habilidades">
                  <Input
                    value={ficha.exp.qtdHabilidades}
                    onChange={(e) =>
                      update("exp", { ...ficha.exp, qtdHabilidades: e.target.value })
                    }
                  />
                </Field>
                <Field label="Traços" className="col-span-2">
                  <Input
                    value={ficha.exp.qtdTracos}
                    onChange={(e) => update("exp", { ...ficha.exp, qtdTracos: e.target.value })}
                  />
                </Field>
              </CardContent>
            </Card>

            {/* Aptidões */}
            <Card>
              <CardHeader>
                <CardTitle>Aptidões (total / usado)</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-1.5">
                {([
                  ["fisica", "Física"],
                  ["agil", "Ágil"],
                  ["mental", "Mental"],
                  ["social", "Social"],
                ] as const).map(([k, label]) => (
                  <TotalUsadoRow
                    key={k}
                    label={label}
                    value={ficha.aptidoes[k]}
                    onChange={(v) => update("aptidoes", { ...ficha.aptidoes, [k]: v })}
                  />
                ))}
              </CardContent>
            </Card>

            {/* Pontos de ação */}
            <Card>
              <CardHeader>
                <CardTitle>Pontos de ação (P.A.)</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-2">
                <Field label="PA base">
                  <Input
                    value={ficha.pa.base}
                    onChange={(e) => update("pa", { ...ficha.pa, base: e.target.value })}
                  />
                </Field>
                <Field label="Red. armadura">
                  <Input
                    value={ficha.pa.redArmadura}
                    onChange={(e) => update("pa", { ...ficha.pa, redArmadura: e.target.value })}
                  />
                </Field>
                <Field label="Red. por dano">
                  <Input
                    value={ficha.pa.redDano}
                    onChange={(e) => update("pa", { ...ficha.pa, redDano: e.target.value })}
                  />
                </Field>
                <Field label="Red. carga">
                  <Input
                    value={ficha.pa.redCarga}
                    onChange={(e) => update("pa", { ...ficha.pa, redCarga: e.target.value })}
                  />
                </Field>
                <Field label="Outros modif.">
                  <Input
                    value={ficha.pa.outros}
                    onChange={(e) => update("pa", { ...ficha.pa, outros: e.target.value })}
                  />
                </Field>
                <Field label="PA TOTAL">
                  <Input
                    className="font-semibold"
                    value={ficha.pa.total}
                    onChange={(e) => update("pa", { ...ficha.pa, total: e.target.value })}
                  />
                </Field>
              </CardContent>
            </Card>

            {/* Guardas + Fadiga */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-1.5">
                  <BatteryLow className="h-4 w-4" /> Fadiga & guardas
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <Field label="Guardas levantadas">
                  <Input
                    className="w-20"
                    value={ficha.guardas}
                    onChange={(e) => update("guardas", e.target.value)}
                  />
                </Field>
                <div>
                  <Label>
                    Fadiga: {ficha.fadiga}
                    {rulesVersion === "alternativa"
                      ? ` (livre até ${limiar}; −1 PA a cada 5 acima)`
                      : " (−1 PA a cada 5 a partir de 10; 50 = inconsciente)"}
                  </Label>
                  <div className="mt-1 flex flex-wrap gap-0.5">
                    {Array.from({ length: 50 }, (_, i) => i + 1).map((n) => {
                      const filled = n <= ficha.fadiga;
                      const isThreshold =
                        rulesVersion === "alternativa"
                          ? n > limiar && (n - limiar) % 5 === 0
                          : n >= 10 && n % 5 === 0;
                      return (
                        <button
                          key={n}
                          type="button"
                          onClick={() => update("fadiga", ficha.fadiga === n ? n - 1 : n)}
                          title={`${n}`}
                          className={cn(
                            "h-4 w-4 rounded-[2px] border text-[8px] leading-none",
                            filled ? "bg-primary" : "bg-transparent",
                            isThreshold && "border-accent border-2"
                          )}
                        />
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Habilidades */}
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle className="flex items-center gap-1.5">
                  <Swords className="h-4 w-4" /> Habilidades
                  <span className="ml-2 text-[11px] font-normal normal-case text-muted-foreground">
                    marque os níveis adquiridos
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-1">
                <div className="flex items-center gap-2 pb-1 text-[11px] uppercase text-muted-foreground">
                  <span className="flex-1">Nome</span>
                  <span className="flex w-40 justify-between px-1">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <span key={n} className="w-6 text-center">
                        Nv{n}
                      </span>
                    ))}
                  </span>
                </div>
                {ficha.habilidades.map((h, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Input
                      className="h-7 flex-1"
                      placeholder="—"
                      value={h.nome}
                      onChange={(e) => {
                        const arr = [...ficha.habilidades];
                        arr[i] = { ...h, nome: e.target.value };
                        update("habilidades", arr);
                      }}
                    />
                    <div className="flex w-40 justify-between px-1">
                      {h.niveis.map((on, ni) => (
                        <button
                          key={ni}
                          type="button"
                          onClick={() => {
                            const arr = [...ficha.habilidades];
                            const niveis = [...h.niveis];
                            niveis[ni] = !on;
                            arr[i] = { ...h, niveis };
                            update("habilidades", arr);
                          }}
                          className={cn(
                            "h-5 w-6 rounded-[3px] border",
                            on ? "bg-primary" : "bg-transparent hover:bg-secondary"
                          )}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Armas */}
            {ficha.armas.map((arma, i) => (
              <Card key={i} className="lg:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-1.5">
                    <Swords className="h-4 w-4" /> Arma {i + 1}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  <Field label="Nome">
                    <Input
                      value={arma.nome}
                      onChange={(e) => {
                        const arr = [...ficha.armas];
                        arr[i] = { ...arma, nome: e.target.value };
                        update("armas", arr);
                      }}
                    />
                  </Field>
                  <div className="grid grid-cols-2 gap-2">
                    <Field label="Tipo (leve/média/pesada)">
                      <Input
                        value={arma.tipo}
                        onChange={(e) => {
                          const arr = [...ficha.armas];
                          arr[i] = { ...arma, tipo: e.target.value };
                          update("armas", arr);
                        }}
                      />
                    </Field>
                    <Field label="Equipado">
                      <Input
                        value={arma.equipado}
                        onChange={(e) => {
                          const arr = [...ficha.armas];
                          arr[i] = { ...arma, equipado: e.target.value };
                          update("armas", arr);
                        }}
                      />
                    </Field>
                    <Field label="Custo de PA">
                      <Input
                        value={arma.custoPA}
                        onChange={(e) => {
                          const arr = [...ficha.armas];
                          arr[i] = { ...arma, custoPA: e.target.value };
                          update("armas", arr);
                        }}
                      />
                    </Field>
                    <Field label="Dano">
                      <Input
                        value={arma.dano}
                        onChange={(e) => {
                          const arr = [...ficha.armas];
                          arr[i] = { ...arma, dano: e.target.value };
                          update("armas", arr);
                        }}
                      />
                    </Field>
                    <Field label="Alcance">
                      <Input
                        value={arma.alcance}
                        onChange={(e) => {
                          const arr = [...ficha.armas];
                          arr[i] = { ...arma, alcance: e.target.value };
                          update("armas", arr);
                        }}
                      />
                    </Field>
                    <Field label="Durabilidade">
                      <Input
                        value={arma.durabilidade}
                        onChange={(e) => {
                          const arr = [...ficha.armas];
                          arr[i] = { ...arma, durabilidade: e.target.value };
                          update("armas", arr);
                        }}
                      />
                    </Field>
                  </div>
                  <div>
                    <Label>Propriedades</Label>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {PROP_KEYS.map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => {
                            const arr = [...ficha.armas];
                            arr[i] = { ...arma, props: { ...arma.props, [p]: !arma.props[p] } };
                            update("armas", arr);
                          }}
                          className={cn(
                            "rounded border px-1.5 py-0.5 text-[11px] font-medium",
                            arma.props[p]
                              ? "bg-primary text-primary-foreground"
                              : "hover:bg-secondary"
                          )}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Proteções */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-1.5">
                  <Shield className="h-4 w-4" /> Proteções
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <div className="flex gap-1 text-[10px] uppercase text-muted-foreground">
                  <span className="flex-1">Espaço / tipo</span>
                  <span className="w-10 text-center">R.PA</span>
                  <span className="w-10 text-center">R.Dano</span>
                  <span className="w-10 text-center">Durab.</span>
                </div>
                {ficha.protecoes.map((p, i) => (
                  <div key={i} className="flex flex-col gap-1 border-t pt-1 first:border-0 first:pt-0">
                    <div className="flex gap-1">
                      <Input
                        className="h-7 flex-1"
                        placeholder={p.local}
                        value={p.tipo}
                        onChange={(e) => {
                          const arr = [...ficha.protecoes];
                          arr[i] = { ...p, tipo: e.target.value };
                          update("protecoes", arr);
                        }}
                      />
                      <Input
                        className="h-7 w-10 text-center"
                        value={p.redPA}
                        onChange={(e) => {
                          const arr = [...ficha.protecoes];
                          arr[i] = { ...p, redPA: e.target.value };
                          update("protecoes", arr);
                        }}
                      />
                      <Input
                        className="h-7 w-10 text-center"
                        value={p.redDano}
                        onChange={(e) => {
                          const arr = [...ficha.protecoes];
                          arr[i] = { ...p, redDano: e.target.value };
                          update("protecoes", arr);
                        }}
                      />
                      <Input
                        className="h-7 w-10 text-center"
                        value={p.durabilidade}
                        onChange={(e) => {
                          const arr = [...ficha.protecoes];
                          arr[i] = { ...p, durabilidade: e.target.value };
                          update("protecoes", arr);
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Saúde */}
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle className="flex items-center gap-1.5">
                  <HeartPulse className="h-4 w-4" /> Saúde — 60 PV (10 por membro)
                  <span className="ml-2 text-[11px] font-normal normal-case text-muted-foreground">
                    clique para marcar: 1× superficial ／ · 2× profundo ✕ · 3× permanente ■
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {MEMBROS.map((m) => (
                  <div key={m.key} className="flex items-center justify-between gap-2 rounded-md border p-2">
                    <span className="text-sm font-medium">{m.label}</span>
                    <div className="flex gap-0.5">
                      {ficha.saude[m.key].map((st, ci) => (
                        <DamageCell
                          key={ci}
                          state={st}
                          onClick={() => {
                            const saude = { ...ficha.saude };
                            const arr = [...saude[m.key]];
                            arr[ci] = (arr[ci] + 1) % 4;
                            saude[m.key] = arr;
                            update("saude", saude);
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Anotações */}
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Anotações</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  className="min-h-[90px]"
                  value={ficha.anotacoes}
                  onChange={(e) => update("anotacoes", e.target.value)}
                />
              </CardContent>
            </Card>
          </div>

          <p className="mt-4 text-center text-[11px] text-muted-foreground">
            Marca de Sangue — ficha v0 ({rulesVersion === "vigente" ? "regras vigentes" : "regras alternativas"}).
            Os dados ficam só no seu navegador; use “Salvar” para baixar um arquivo e “Carregar” para retomá-lo.
          </p>
        </div>
      </main>
    </div>
  );
}

/* util: evita chamar setState durante o render inicial do useState */
function setTimeoutSafe(fn: () => void) {
  setTimeout(fn, 0);
}
