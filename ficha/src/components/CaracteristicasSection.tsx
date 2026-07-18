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
import { novaCaracteristica, type CaracteristicaCard } from "@/lib/ficha";

export function CaracteristicasSection({
  itens,
  setItens,
}: {
  itens: CaracteristicaCard[];
  setItens: (v: CaracteristicaCard[]) => void;
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

              <div>
                <Label>Níveis</Label>
                <div className="mt-1 flex gap-1">
                  {c.niveis.map((on, ni) => (
                    <button
                      key={ni}
                      type="button"
                      onClick={() => {
                        const niveis = [...c.niveis];
                        niveis[ni] = !on;
                        upd(i, { niveis });
                      }}
                      className={cn(
                        "h-6 flex-1 rounded-[4px] border text-[10px] font-medium",
                        on ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
                      )}
                    >
                      Nv{ni + 1}
                    </button>
                  ))}
                </div>
              </div>
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
