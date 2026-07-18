import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "./input";
import type { GrupoCatalogo } from "./catalogo-select";

/** Caixa de texto que também é seletor de catálogo.
 *  - Digitar livremente = entrada custom (não puxa nada do catálogo).
 *  - Abrir a setinha e escolher um item = autopreenche (onPick).
 *  O menu e a setinha não aparecem na impressão. */
export function CatalogoCombo<T>({
  value,
  onChangeText,
  grupos,
  onPick,
  placeholder,
  className,
  inputClassName,
}: {
  value: string;
  onChangeText: (s: string) => void;
  grupos: GrupoCatalogo<T>[];
  onPick: (valor: T) => void;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [q, setQ] = React.useState("");
  const wrapRef = React.useRef<HTMLDivElement>(null);

  const termo = q.trim().toLowerCase();
  const gruposFiltrados = grupos
    .map((g) => ({
      label: g.label,
      itens: g.itens.filter((it) => !termo || it.rotulo.toLowerCase().includes(termo)),
    }))
    .filter((g) => g.itens.length > 0);

  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  return (
    <div ref={wrapRef} className={cn("relative", className)}>
      <Input
        className={cn("pr-8", inputClassName)}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChangeText(e.target.value);
          setQ(e.target.value);
          if (!open) setOpen(true);
        }}
        onKeyDown={(e) => {
          if (e.key === "Escape") setOpen(false);
        }}
      />
      <button
        type="button"
        title="Escolher do catálogo"
        className="no-print absolute right-1 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded text-muted-foreground hover:bg-secondary"
        onClick={() => {
          setQ("");
          setOpen((o) => !o);
        }}
      >
        <ChevronDown className="h-3.5 w-3.5" />
      </button>

      {open && gruposFiltrados.length > 0 && (
        <div className="no-print absolute z-30 mt-1 max-h-64 w-full min-w-[15rem] overflow-auto rounded-md border bg-card shadow-lg">
          {gruposFiltrados.map((g, gi) => (
            <div key={gi}>
              <div className="sticky top-0 bg-muted px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                {g.label}
              </div>
              {g.itens.map((it, ii) => (
                <button
                  key={ii}
                  type="button"
                  className="block w-full px-2 py-1 text-left text-xs hover:bg-secondary"
                  onClick={() => {
                    onPick(it.valor);
                    setOpen(false);
                  }}
                >
                  {it.rotulo}
                </button>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
