import { Plus, Trash2, Package, Coins } from "lucide-react";
import { Button, Card, CardContent, CardHeader, CardTitle, Field, Input, Label } from "@/components/ui";
import { novoItem, type ItemEquip, type TesouroSlot } from "@/lib/ficha";

export function EquipamentosSection({
  equipamentos,
  setEquipamentos,
  carga,
  setCarga,
  tesouro,
  setTesouro,
}: {
  equipamentos: ItemEquip[];
  setEquipamentos: (v: ItemEquip[]) => void;
  carga: { capacidade: string; carregado: string };
  setCarga: (v: { capacidade: string; carregado: string }) => void;
  tesouro: TesouroSlot[];
  setTesouro: (v: TesouroSlot[]) => void;
}) {
  function updItem(i: number, patch: Partial<ItemEquip>) {
    const arr = [...equipamentos];
    arr[i] = { ...arr[i], ...patch };
    setEquipamentos(arr);
  }

  return (
    <Card className="col-full lg:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-1.5">
          <Package className="h-4 w-4" /> Equipamentos
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="flex items-center gap-1 pb-1 text-[10px] uppercase text-muted-foreground">
          <span className="w-10 text-center">Equip.</span>
          <span className="flex-1">Item</span>
          <span className="w-12 text-center">Qtd.</span>
          <span className="w-16 text-center">Peso un.</span>
          <span className="w-16 text-center">Peso tot.</span>
          <span className="w-7" />
        </div>

        {equipamentos.map((it, i) => (
          <div key={i} className="flex items-center gap-1">
            <div className="flex w-10 justify-center">
              <input
                type="checkbox"
                className="h-4 w-4 accent-[hsl(var(--primary))]"
                checked={it.equipado}
                onChange={(e) => updItem(i, { equipado: e.target.checked })}
                title="Equipado"
              />
            </div>
            <Input
              className="h-7 flex-1"
              value={it.item}
              onChange={(e) => updItem(i, { item: e.target.value })}
            />
            <Input
              className="h-7 w-12 text-center"
              value={it.qtd}
              onChange={(e) => updItem(i, { qtd: e.target.value })}
            />
            <Input
              className="h-7 w-16 text-center"
              value={it.pesoUnit}
              onChange={(e) => updItem(i, { pesoUnit: e.target.value })}
            />
            <Input
              className="h-7 w-16 text-center"
              value={it.pesoTotal}
              onChange={(e) => updItem(i, { pesoTotal: e.target.value })}
            />
            <button
              type="button"
              className="no-print flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground hover:bg-secondary"
              title="Remover linha"
              onClick={() => setEquipamentos(equipamentos.filter((_, j) => j !== i))}
            >
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          </div>
        ))}

        <Button
          variant="outline"
          size="sm"
          className="no-print mt-1 self-start"
          onClick={() => setEquipamentos([...equipamentos, novoItem()])}
        >
          <Plus className="h-3.5 w-3.5" /> Adicionar item
        </Button>

        <div className="mt-2 grid grid-cols-2 gap-3 border-t pt-2 sm:grid-cols-4">
          <Field label="Capacidade de carga">
            <Input value={carga.capacidade} onChange={(e) => setCarga({ ...carga, capacidade: e.target.value })} />
          </Field>
          <Field label="Peso carregado">
            <Input value={carga.carregado} onChange={(e) => setCarga({ ...carga, carregado: e.target.value })} />
          </Field>
        </div>

        <div className="mt-1">
          <Label className="flex items-center gap-1">
            <Coins className="h-3.5 w-3.5" /> Tesouro
          </Label>
          <div className="mt-1 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {tesouro.map((t, i) => (
              <div key={i} className="flex flex-col gap-1 rounded-md border p-1.5">
                <Input
                  className="h-6 text-[11px]"
                  placeholder="rótulo"
                  value={t.label}
                  onChange={(e) => {
                    const arr = [...tesouro];
                    arr[i] = { ...t, label: e.target.value };
                    setTesouro(arr);
                  }}
                />
                <Input
                  className="h-7 text-center font-medium"
                  value={t.valor}
                  onChange={(e) => {
                    const arr = [...tesouro];
                    arr[i] = { ...t, valor: e.target.value };
                    setTesouro(arr);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
