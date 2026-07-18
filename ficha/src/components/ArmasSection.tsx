import { Swords, PackagePlus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CatalogoCombo, Field, Input, Label } from "@/components/ui";
import { cn } from "@/lib/utils";
import { PROP_KEYS, type Arma } from "@/lib/ficha";
import { CAT_ARMAS, PROP_INFO, type CatArma } from "@/lib/catalogo";

const GRUPOS_ARMAS = [
  {
    label: "Corpo a corpo",
    itens: CAT_ARMAS.filter((a) => !a.distancia).map((a) => ({ rotulo: a.nome, valor: a })),
  },
  {
    label: "À distância",
    itens: CAT_ARMAS.filter((a) => a.distancia).map((a) => ({ rotulo: a.nome, valor: a })),
  },
];

function armaDoCatalogo(cat: CatArma, base: Arma): Arma {
  const tipo = [
    cat.tipo,
    cat.versatil ? "versátil" : null,
    cat.distancia ? "à distância" : cat.categoria === "Longa" ? "longo alcance" : null,
  ]
    .filter(Boolean)
    .join(" · ");
  const props = Object.fromEntries(PROP_KEYS.map((k) => [k, cat.props.includes(k as never)]));
  return {
    ...base,
    nome: cat.nome,
    tipo,
    categoria: cat.categoria,
    custoPA: cat.custoPA,
    alcance: cat.alcance,
    dano: cat.dano,
    props,
  };
}

export function ArmasSection({
  armas,
  setArmas,
  className,
  temMaestria,
  onAddItem,
}: {
  armas: Arma[];
  setArmas: (v: Arma[]) => void;
  className?: string;
  temMaestria: (p: (typeof PROP_KEYS)[number]) => boolean;
  onAddItem: (nome: string) => void;
}) {
  function upd(i: number, patch: Partial<Arma>) {
    const arr = [...armas];
    arr[i] = { ...arr[i], ...patch };
    setArmas(arr);
  }

  const campos: [keyof Arma, string, string][] = [
    ["tipo", "Tipo", "leve/média/pesada"],
    ["equipado", "Equipado", "mão hábil/inábil…"],
    ["custoPA", "Custo de PA", ""],
    ["dano", "Dano", ""],
    ["alcance", "Alcance", ""],
    ["durabilidade", "Durab.", ""],
  ];

  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-1.5">
          <Swords className="h-4 w-4" /> Armas
        </CardTitle>
      </CardHeader>
      <CardContent className="armas-grid grid grid-cols-1 gap-4 lg:grid-cols-2">
        {armas.map((arma, i) => (
          <div key={i} className="flex flex-col gap-2 rounded-md border p-2 print-avoid-break">
            <div className="flex flex-wrap items-center gap-2">
              <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-wide text-primary">
                Arma {i + 1}
              </span>
              <CatalogoCombo
                className="w-full min-w-0 flex-1 sm:w-auto"
                placeholder="Nome (digite ou escolha do catálogo)"
                value={arma.nome}
                onChangeText={(v) => upd(i, { nome: v })}
                grupos={GRUPOS_ARMAS}
                onPick={(cat) => upd(i, armaDoCatalogo(cat, arma))}
              />
              <button
                type="button"
                title="Adicionar esta arma à lista de itens/equipamentos"
                disabled={!arma.nome.trim()}
                onClick={() => onAddItem(arma.nome.trim())}
                className="no-print flex h-8 shrink-0 items-center gap-1 rounded-md border px-2 text-[11px] font-medium text-muted-foreground hover:bg-secondary disabled:opacity-40"
              >
                <PackagePlus className="h-3.5 w-3.5" /> itens
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {campos.map(([campo, label, ph]) => (
                <Field key={campo} label={label}>
                  <Input
                    className="h-8"
                    placeholder={ph}
                    value={arma[campo] as string}
                    onChange={(e) => upd(i, { [campo]: e.target.value } as Partial<Arma>)}
                  />
                </Field>
              ))}
            </div>

            <div>
              <Label>
                Propriedades{" "}
                <span className="font-normal normal-case text-muted-foreground">
                  · preenchido = a arma tem · anel dourado = você tem a maestria
                </span>
              </Label>
              <div className="mt-1 flex flex-wrap gap-1">
                {PROP_KEYS.map((p) => {
                  const info = PROP_INFO[p];
                  const armaTem = arma.props[p];
                  const precisaMaes = !!info.maestria;
                  const maes = precisaMaes && temMaestria(p);
                  const linhaMaes = precisaMaes
                    ? `\nRequisito: ${info.maestria} — ${maes ? "✓ você tem" : "✗ você não tem"}`
                    : "\nNão exige maestria.";
                  return (
                    <button
                      key={p}
                      type="button"
                      title={`${info.nome} (${p})\n${info.efeito}${linhaMaes}`}
                      onClick={() => upd(i, { props: { ...arma.props, [p]: !arma.props[p] } })}
                      className={cn(
                        "rounded border px-1.5 py-0.5 text-[11px] font-medium",
                        armaTem ? "bg-primary text-primary-foreground" : "hover:bg-secondary",
                        maes && "ring-2 ring-accent ring-offset-1"
                      )}
                    >
                      {p}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
