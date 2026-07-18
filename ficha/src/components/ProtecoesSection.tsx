import { Plus, Trash2, Shield } from "lucide-react";
import { Button, Card, CardContent, CardHeader, CardTitle, Input, Label } from "@/components/ui";
import { cn } from "@/lib/utils";
import { MEMBROS, novaProtecao, type MembroKey, type Protecao } from "@/lib/ficha";

export function ProtecoesSection({
  protecoes,
  setProtecoes,
}: {
  protecoes: Protecao[];
  setProtecoes: (v: Protecao[]) => void;
}) {
  function upd(i: number, patch: Partial<Protecao>) {
    const arr = [...protecoes];
    arr[i] = { ...arr[i], ...patch };
    setProtecoes(arr);
  }

  function toggleRegiao(i: number, key: MembroKey) {
    const atual = protecoes[i].regioes;
    const regioes = atual.includes(key) ? atual.filter((k) => k !== key) : [...atual, key];
    upd(i, { regioes });
  }

  return (
    <Card className="col-full lg:col-span-3">
      <CardHeader>
        <CardTitle className="flex items-center gap-1.5">
          <Shield className="h-4 w-4" /> Proteções
          <span className="ml-2 text-[11px] font-normal normal-case text-muted-foreground">
            o redutor de PA vale só por estar usando; o redutor de dano e a durabilidade só quando acertam uma região coberta
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {protecoes.map((p, i) => (
          <div key={i} className="flex flex-wrap items-end gap-x-3 gap-y-2 rounded-md border p-2 print-avoid-break">
            <div className="min-w-[10rem] flex-1">
              <Label>Nome da proteção</Label>
              <Input
                className="mt-1 h-8"
                placeholder="ex.: Peitoral, Capacete, Cota, Calça…"
                value={p.nome}
                onChange={(e) => upd(i, { nome: e.target.value })}
              />
            </div>

            <div>
              <Label>Regiões cobertas</Label>
              <div className="mt-1 flex gap-1">
                {MEMBROS.map((m) => {
                  const on = p.regioes.includes(m.key);
                  return (
                    <button
                      key={m.key}
                      type="button"
                      title={m.label}
                      onClick={() => toggleRegiao(i, m.key)}
                      className={cn(
                        "h-8 w-9 rounded-md border text-[11px] font-medium",
                        on ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
                      )}
                    >
                      {m.abbr}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex items-end gap-2">
              <div className="w-14">
                <Label>R. PA</Label>
                <Input className="mt-1 h-8 text-center" value={p.redPA} onChange={(e) => upd(i, { redPA: e.target.value })} />
              </div>
              <div className="w-14">
                <Label>R. Dano</Label>
                <Input className="mt-1 h-8 text-center" value={p.redDano} onChange={(e) => upd(i, { redDano: e.target.value })} />
              </div>
              <div className="w-14">
                <Label>Durab.</Label>
                <Input
                  className="mt-1 h-8 text-center"
                  value={p.durabilidade}
                  onChange={(e) => upd(i, { durabilidade: e.target.value })}
                />
              </div>
              <button
                type="button"
                className="no-print mb-0.5 flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-secondary"
                title="Remover proteção"
                onClick={() => setProtecoes(protecoes.filter((_, j) => j !== i))}
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ))}

        <Button variant="outline" size="sm" className="no-print self-start" onClick={() => setProtecoes([...protecoes, novaProtecao()])}>
          <Plus className="h-3.5 w-3.5" /> Adicionar proteção
        </Button>
      </CardContent>
    </Card>
  );
}
