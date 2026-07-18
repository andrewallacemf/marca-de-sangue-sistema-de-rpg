import { Plus, Trash2, Shield, PackagePlus } from "lucide-react";
import { Button, Card, CardContent, CardHeader, CardTitle, CatalogoCombo, Input, Label } from "@/components/ui";
import { cn } from "@/lib/utils";
import { MEMBROS, novaProtecao, type MembroKey, type Protecao } from "@/lib/ficha";
import { CAT_PROTECOES, type CatProtecao } from "@/lib/catalogo";

const GRUPOS_PROTECOES = [
  {
    label: "Armaduras",
    itens: CAT_PROTECOES.filter((p) => p.classe === "Armadura").map((p) => ({ rotulo: p.nome, valor: p })),
  },
  {
    label: "Escudos",
    itens: CAT_PROTECOES.filter((p) => p.classe === "Escudo").map((p) => ({ rotulo: p.nome, valor: p })),
  },
];

function protecaoDoCatalogo(cat: CatProtecao, base: Protecao): Protecao {
  const nota =
    cat.classe === "Escudo" && cat.paUso
      ? ` (${cat.tipo.toLowerCase()} · guarda ${cat.paUso} PA)`
      : ` (${cat.tipo.toLowerCase()})`;
  return {
    ...base,
    nome: cat.nome + nota,
    redPA: cat.redPA,
    redDano: cat.redDano,
    durabilidade: cat.durabilidade,
  };
}

export function ProtecoesSection({
  protecoes,
  setProtecoes,
  guardas,
  setGuardas,
  className,
  onAddItem,
}: {
  protecoes: Protecao[];
  setProtecoes: (v: Protecao[]) => void;
  guardas: string;
  setGuardas: (v: string) => void;
  className?: string;
  onAddItem: (nome: string) => void;
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
    <Card className={cn(className)}>
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
            <div className="min-w-[12rem] flex-1">
              <Label>Nome da proteção</Label>
              <div className="mt-1 flex items-center gap-1">
                <CatalogoCombo
                  className="min-w-0 flex-1"
                  placeholder="ex.: Peitoral, Capacete… (ou escolha do catálogo)"
                  value={p.nome}
                  onChangeText={(v) => upd(i, { nome: v })}
                  grupos={GRUPOS_PROTECOES}
                  onPick={(cat) => upd(i, protecaoDoCatalogo(cat, p))}
                />
                <button
                  type="button"
                  title="Adicionar esta proteção à lista de itens/equipamentos"
                  disabled={!p.nome.trim()}
                  onClick={() => onAddItem(p.nome.trim())}
                  className="no-print flex h-8 shrink-0 items-center gap-1 rounded-md border px-2 text-[11px] font-medium text-muted-foreground hover:bg-secondary disabled:opacity-40"
                >
                  <PackagePlus className="h-3.5 w-3.5" /> itens
                </button>
              </div>
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
              <label className="flex cursor-pointer flex-col items-center gap-1" title="Se está equipada (conta o redutor de PA)">
                <Label>Equip.</Label>
                <input
                  type="checkbox"
                  className="mb-1.5 h-4 w-4 accent-[hsl(var(--primary))]"
                  checked={p.equipada}
                  onChange={(e) => upd(i, { equipada: e.target.checked })}
                />
              </label>
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

        {/* Subseção: guardas levantadas */}
        <div className="mt-1 flex items-center gap-2 border-t pt-3">
          <Label className="whitespace-nowrap">Guardas levantadas</Label>
          <Button
            variant="outline"
            size="icon"
            className="no-print h-7 w-7"
            onClick={() => setGuardas(String(Math.max(0, (parseInt(guardas, 10) || 0) - 1)))}
          >
            −
          </Button>
          <Input
            className="w-14 text-center font-semibold"
            inputMode="numeric"
            value={guardas}
            onChange={(e) => setGuardas(e.target.value)}
          />
          <Button
            variant="outline"
            size="icon"
            className="no-print h-7 w-7"
            onClick={() => setGuardas(String((parseInt(guardas, 10) || 0) + 1))}
          >
            +
          </Button>
          <span className="text-[11px] text-muted-foreground">abaixe conforme recebe ataques, até zero.</span>
        </div>
      </CardContent>
    </Card>
  );
}
