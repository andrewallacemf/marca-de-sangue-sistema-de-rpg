import { Plus, Trash2, ScrollText, Zap } from "lucide-react";
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
import { CatalogoCombo } from "@/components/ui";
import { cn } from "@/lib/utils";
import {
  custoCard,
  custoFadigaEfetivo,
  ehMaestria,
  novaCaracteristica,
  type CaracteristicaCard,
} from "@/lib/ficha";
import { CAT_HABILIDADES, CAT_TRACOS } from "@/lib/catalogo";
import { HABILIDADES_NIVEIS } from "@/lib/catalogo-niveis";

type PickItem =
  | { kind: "hab"; nome: string; efeito: string; requisitos?: string; atributo: string; valorCompra: string; custoPA: string }
  | { kind: "trc"; nome: string; efeito: string; requisitos?: string; atributo?: string; valorCompra: string };

const ATRIBUTOS = ["Físico", "Ágil", "Mental", "Social"] as const;
const CATEGORIAS = ["Técnica", "Maestria", "Aspecto"] as const;

const GRUPOS_CARS = [
  ...ATRIBUTOS.map((atr) => ({
    label: `Habilidades — ${atr}`,
    itens: CAT_HABILIDADES.filter((h) => h.atributo === atr).map((h) => ({
      rotulo: h.nome,
      valor: { kind: "hab", ...h } as PickItem,
    })),
  })),
  ...CATEGORIAS.map((cat) => ({
    label: `Traços — ${cat}s`,
    itens: CAT_TRACOS.filter((t) => t.categoria === cat).map((t) => ({
      rotulo: t.nome,
      valor: { kind: "trc", ...t } as PickItem,
    })),
  })),
].filter((g) => g.itens.length > 0);

function cardDoCatalogo(item: PickItem, base: CaracteristicaCard): CaracteristicaCard {
  if (item.kind === "hab") {
    const niveis = HABILIDADES_NIVEIS[item.nome] ?? [];
    const niveisDesc = [0, 1, 2, 3, 4].map((i) => niveis[i] ?? "");
    const m = /-?\d+/.exec(item.custoPA || "");
    return {
      ...base,
      tipo: "Habilidade",
      nome: item.nome,
      efeito: item.efeito,
      requisitos: item.requisitos ?? "",
      atributo: item.atributo,
      valorCompra: `${item.valorCompra} exp.`,
      custoPA: item.custoPA,
      custoPANum: m ? m[0] : "",
      custoPAArma: /arma/i.test(item.custoPA || ""),
      custoFadiga: "",
      niveisDesc,
    };
  }
  return {
    ...base,
    tipo: "Traço",
    nome: item.nome,
    efeito: item.efeito,
    requisitos: item.requisitos ?? "",
    atributo: item.atributo ?? "—",
    valorCompra: `${item.valorCompra} exp.`,
    custoPA: "—",
  };
}

export function CaracteristicasSection({
  itens,
  setItens,
  paArma,
  onUsarFadiga,
}: {
  itens: CaracteristicaCard[];
  setItens: (v: CaracteristicaCard[]) => void;
  paArma: number;
  onUsarFadiga: (qtd: number) => void;
}) {
  function upd(i: number, patch: Partial<CaracteristicaCard>) {
    const arr = [...itens];
    arr[i] = { ...arr[i], ...patch };
    setItens(arr);
  }

  return (
    <Card className="col-full lg:col-span-3">
      <CardHeader>
        <CardTitle className="flex items-center gap-1.5">
          <ScrollText className="h-4 w-4" /> Habilidades & traços (detalhado)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="cards-grid grid grid-cols-1 gap-3 md:grid-cols-2">
          {itens.map((c, i) => (
            <div key={i} className="flex flex-col gap-2 rounded-md border p-2 print-avoid-break">
              <div className="flex flex-wrap items-center gap-1">
                <div className="flex shrink-0 overflow-hidden rounded-md border">
                  {(["Habilidade", "Traço"] as const).map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => upd(i, { tipo: t })}
                      className={cn(
                        "px-2 py-0.5 text-[11px] font-medium",
                        c.tipo === t ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
                      )}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <CatalogoCombo
                  className="w-full min-w-0 flex-1 sm:w-auto"
                  inputClassName="h-7"
                  placeholder="Nome (digite ou escolha do catálogo)"
                  value={c.nome}
                  onChangeText={(v) => upd(i, { nome: v })}
                  grupos={GRUPOS_CARS}
                  onPick={(item) => upd(i, cardDoCatalogo(item, c))}
                />
                <button
                  type="button"
                  className="no-print flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground hover:bg-secondary"
                  title="Remover"
                  onClick={() => setItens(itens.filter((_, j) => j !== i))}
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>

              <Field label="Efeito">
                <Textarea
                  className="min-h-[56px] text-[13px]"
                  value={c.efeito}
                  onChange={(e) => upd(i, { efeito: e.target.value })}
                />
              </Field>
              <Field label="Requisitos">
                <Textarea
                  className="min-h-[40px] text-[13px]"
                  value={c.requisitos}
                  onChange={(e) => upd(i, { requisitos: e.target.value })}
                />
              </Field>

              <div className="grid grid-cols-3 gap-2">
                <Field label="Atributo">
                  <Input value={c.atributo} onChange={(e) => upd(i, { atributo: e.target.value })} />
                </Field>
                <Field label={c.tipo === "Habilidade" ? "Custo base (nv1)" : "Val. compra"}>
                  <Input value={c.valorCompra} onChange={(e) => upd(i, { valorCompra: e.target.value })} />
                </Field>
                <Field label="Custo de PA">
                  {c.tipo === "Habilidade" ? (
                    <div className="relative">
                      <Input
                        className="pr-[4.5rem]"
                        inputMode="numeric"
                        value={c.custoPANum}
                        onChange={(e) => upd(i, { custoPANum: e.target.value })}
                      />
                      <label
                        className="absolute right-1.5 top-1/2 flex -translate-y-1/2 cursor-pointer items-center gap-1 text-[10px] text-muted-foreground"
                        title="Somar também o PA da arma equipada"
                      >
                        <input
                          type="checkbox"
                          className="h-3.5 w-3.5 accent-[hsl(var(--primary))]"
                          checked={c.custoPAArma}
                          onChange={(e) => upd(i, { custoPAArma: e.target.checked })}
                        />
                        +arma
                      </label>
                    </div>
                  ) : (
                    <Input value={c.custoPA} onChange={(e) => upd(i, { custoPA: e.target.value })} />
                  )}
                </Field>
              </div>

              {c.nome.trim() &&
                (ehMaestria(c) ? (
                  <p className="text-[11px] text-muted-foreground">
                    Maestria — <span className="font-semibold text-primary">custo escalonado</span> (1ª=1,
                    2ª=2, 3ª=3…; entra na EXP usada total).
                  </p>
                ) : (
                  <p className="text-[11px] text-muted-foreground">
                    Investido nesta característica:{" "}
                    <span className="font-semibold text-primary">{custoCard(c)} exp</span>
                    {c.tipo === "Habilidade" && (
                      <span className="text-muted-foreground"> (base × soma dos degraus)</span>
                    )}
                  </p>
                ))}

              {c.tipo === "Habilidade" && (
                <div className="flex flex-col gap-2">
                  <div>
                    <Label>Nível · descrição</Label>
                    <div className="mt-1 flex items-center gap-2">
                      <select
                        className="h-7 shrink-0 rounded-md border border-input bg-transparent px-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        value={c.nivel}
                        onChange={(e) => upd(i, { nivel: parseInt(e.target.value, 10) || 1 })}
                      >
                        {[1, 2, 3, 4, 5].map((n) => (
                          <option key={n} value={n}>
                            Nv {n}
                          </option>
                        ))}
                      </select>
                      <Input
                        className="h-7 min-w-0 flex-1 text-[12px]"
                        placeholder="descrição do efeito neste nível…"
                        value={c.niveisDesc[c.nivel - 1] || ""}
                        onChange={(e) => {
                          const arr = [...c.niveisDesc];
                          arr[c.nivel - 1] = e.target.value;
                          upd(i, { niveisDesc: arr });
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap items-end gap-2">
                    <div className="flex flex-col items-start gap-1">
                      <Label>Custo de fadiga</Label>
                      <Input
                        className="h-8 w-16 text-center"
                        inputMode="numeric"
                        placeholder={String(custoFadigaEfetivo(c, paArma))}
                        value={c.custoFadiga}
                        onChange={(e) => upd(i, { custoFadiga: e.target.value })}
                      />
                    </div>
                    <span className="mb-1.5 text-[11px] text-muted-foreground">
                      vazio = 1:1 com o PA{c.custoPAArma ? " + arma" : ""} = {custoFadigaEfetivo(c, paArma)}
                    </span>
                    <button
                      type="button"
                      className="no-print mb-0.5 ml-auto flex h-8 items-center gap-1 rounded-md bg-primary px-2.5 text-[12px] font-medium text-primary-foreground hover:opacity-90"
                      title="Usar a habilidade: soma o custo de fadiga à fadiga acumulada"
                      onClick={() => onUsarFadiga(custoFadigaEfetivo(c, paArma))}
                    >
                      <Zap className="h-3.5 w-3.5" /> Usar (+{custoFadigaEfetivo(c, paArma)} fad.)
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          className="no-print mt-3"
          onClick={() => setItens([...itens, novaCaracteristica()])}
        >
          <Plus className="h-3.5 w-3.5" /> Adicionar habilidade/traço
        </Button>
      </CardContent>
    </Card>
  );
}
