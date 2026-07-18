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
import { cn } from "@/lib/utils";
import { novaCaracteristica, type CaracteristicaCard, type RulesVersion } from "@/lib/ficha";

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
    <Card className="lg:col-span-3">
      <CardHeader>
        <CardTitle className="flex items-center gap-1.5">
          <ScrollText className="h-4 w-4" /> Habilidades & traços (detalhado)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
          {itens.map((c, i) => (
            <div key={i} className="flex flex-col gap-2 rounded-md border p-2 print-avoid-break">
              <div className="flex items-center gap-1">
                <div className="flex overflow-hidden rounded-md border">
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
                <Input
                  className="h-7 flex-1"
                  placeholder="Nome"
                  value={c.nome}
                  onChange={(e) => upd(i, { nome: e.target.value })}
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
                <Field label="Val. compra">
                  <Input value={c.valorCompra} onChange={(e) => upd(i, { valorCompra: e.target.value })} />
                </Field>
                <Field label="Custo de PA">
                  <Input value={c.custoPA} onChange={(e) => upd(i, { custoPA: e.target.value })} />
                </Field>
              </div>

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
