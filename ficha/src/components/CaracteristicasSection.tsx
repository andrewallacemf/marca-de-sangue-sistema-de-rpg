import { Plus, Trash2, ScrollText } from "lucide-react";
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
import { custoCard, novaCaracteristica, type CaracteristicaCard, type RulesVersion } from "@/lib/ficha";
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
    return {
      ...base,
      tipo: "Habilidade",
      nome: item.nome,
      efeito: item.efeito,
      requisitos: item.requisitos ?? "",
      atributo: item.atributo,
      valorCompra: `${item.valorCompra} exp.`,
      custoPA: item.custoPA,
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
  rulesVersion,
}: {
  itens: CaracteristicaCard[];
  setItens: (v: CaracteristicaCard[]) => void;
  rulesVersion: RulesVersion;
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
                  <Input value={c.custoPA} onChange={(e) => upd(i, { custoPA: e.target.value })} />
                </Field>
              </div>

              {c.nome.trim() && (
                <p className="text-[11px] text-muted-foreground">
                  Investido nesta característica:{" "}
                  <span className="font-semibold text-primary">{custoCard(c, rulesVersion)} exp</span>
                  {c.tipo === "Habilidade" && (
                    <span className="text-muted-foreground">
                      {" "}
                      ({rulesVersion === "vigente" ? "base × Σ usos por nível" : "base × soma dos degraus"})
                    </span>
                  )}
                </p>
              )}

              {c.tipo === "Habilidade" &&
                (rulesVersion === "vigente" ? (
                  <div>
                    <Label>Usos por nível</Label>
                    <div className="mt-1 grid grid-cols-5 gap-1">
                      {[0, 1, 2, 3, 4].map((ni) => (
                        <div key={ni} className="flex flex-col items-center gap-0.5">
                          <span className="text-[9px] uppercase text-muted-foreground">Nv{ni + 1}</span>
                          <Input
                            className="h-7 px-1 text-center"
                            inputMode="numeric"
                            value={c.usosPorNivel[ni] ? String(c.usosPorNivel[ni]) : ""}
                            onChange={(e) => {
                              const usosPorNivel = [...c.usosPorNivel];
                              usosPorNivel[ni] = parseInt(e.target.value, 10) || 0;
                              upd(i, { usosPorNivel });
                            }}
                          />
                        </div>
                      ))}
                    </div>

                    {(c.usosPorNivel.some((u) => u > 0) || c.niveisDesc.some((d) => d.trim())) && (
                      <div className="mt-2 border-t pt-2">
                        <Label>Níveis (valores) e usos disponíveis</Label>
                        <div className="mt-1 flex flex-col gap-1.5">
                          {[0, 1, 2, 3, 4].map((ni) => {
                            const total = c.usosPorNivel[ni] || 0;
                            const desc = c.niveisDesc[ni] || "";
                            if (!total && !desc.trim()) return null;
                            const gasto = c.usosGastosPorNivel[ni] || 0;
                            const avail = total - gasto;
                            return (
                              <div key={ni} className="flex items-start gap-2">
                                <span className="mt-1.5 w-8 shrink-0 text-[10px] uppercase text-muted-foreground">
                                  Nv{ni + 1}
                                </span>
                                <div className="flex min-w-0 flex-1 flex-col gap-1">
                                  <Input
                                    className="h-7 text-[12px]"
                                    placeholder="valores deste nível…"
                                    value={desc}
                                    onChange={(e) => {
                                      const arr = [...c.niveisDesc];
                                      arr[ni] = e.target.value;
                                      upd(i, { niveisDesc: arr });
                                    }}
                                  />
                                  {total > 0 && (
                                    <div className="flex items-center gap-2">
                                      <div className="flex flex-wrap gap-1">
                                        {Array.from({ length: total }, (_, j) => {
                                          const filled = j < avail;
                                          return (
                                            <button
                                              key={j}
                                              type="button"
                                              title={filled ? "disponível (clique p/ consumir)" : "usado (clique p/ devolver)"}
                                              onClick={() => {
                                                const novoAvail = filled ? j : j + 1;
                                                const arr = [...c.usosGastosPorNivel];
                                                arr[ni] = total - novoAvail;
                                                upd(i, { usosGastosPorNivel: arr });
                                              }}
                                              className={cn(
                                                "h-5 w-5 rounded-[3px] border border-input",
                                                filled ? "bg-primary" : "bg-transparent"
                                              )}
                                            />
                                          );
                                        })}
                                      </div>
                                      <span className="text-[11px] font-medium text-muted-foreground">
                                        {avail}/{total}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div>
                    <Label>Nível</Label>
                    <div className="mt-1 flex gap-1">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <button
                          key={n}
                          type="button"
                          onClick={() => upd(i, { nivel: n })}
                          className={cn(
                            "h-7 flex-1 rounded-[4px] border text-[11px] font-medium",
                            c.nivel === n ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
                          )}
                        >
                          Nv{n}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
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
