import * as React from "react";
import { cn } from "@/lib/utils";

export type GrupoCatalogo<T> = {
  label: string;
  itens: { rotulo: string; valor: T }[];
};

/** Seletor (dropdown nativo) para escolher um item do catálogo do manual e
 *  autopreencher os campos. Não aparece na impressão (no-print). */
export function CatalogoSelect<T>({
  placeholder,
  grupos,
  onPick,
  className,
}: {
  placeholder: string;
  grupos: GrupoCatalogo<T>[];
  onPick: (valor: T) => void;
  className?: string;
}) {
  return (
    <select
      className={cn(
        "no-print h-7 max-w-full rounded-md border border-input bg-secondary/50 px-2 text-xs text-foreground",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        className
      )}
      value=""
      onChange={(e) => {
        const v = e.target.value;
        if (!v) return;
        const [gi, ii] = v.split(":").map(Number);
        const item = grupos[gi]?.itens[ii];
        if (item) onPick(item.valor);
        e.target.value = "";
      }}
    >
      <option value="">{placeholder}</option>
      {grupos.map((g, gi) => (
        <optgroup key={gi} label={g.label}>
          {g.itens.map((it, ii) => (
            <option key={ii} value={`${gi}:${ii}`}>
              {it.rotulo}
            </option>
          ))}
        </optgroup>
      ))}
    </select>
  );
}
