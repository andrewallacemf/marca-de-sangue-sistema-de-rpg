import * as React from "react";
import { cn } from "@/lib/utils";
import { Label } from "./label";
import { Input } from "./input";

/** Campo com rótulo em cima (padrão da ficha). */
export function Field({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <Label>{label}</Label>
      {children}
    </div>
  );
}

/** Campo com o rótulo DENTRO do input, alinhado à direita (para números curtos). */
export function InlineField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="relative">
      <Input className="pr-11" value={value} onChange={onChange} />
      <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

/** Versão CALCULADA (somente leitura) do InlineField — rótulo dentro, valor à esquerda.
 *  `alerta` deixa o número em vermelho (ex.: exp acima do total). */
export function InlineComputed({
  label,
  value,
  alerta,
  title,
}: {
  label: string;
  value: string | number;
  alerta?: boolean;
  title?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-8 items-center rounded-md border border-input bg-muted/60 px-2 text-sm shadow-sm",
        alerta && "border-destructive/60"
      )}
      title={title ?? "Calculado automaticamente"}
    >
      <span className={cn("font-semibold", alerta && "text-destructive")}>{value}</span>
      <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

/** Valor calculado (somente leitura) para usar dentro de um Field (rótulo em cima). */
export function Computed({
  value,
  alerta,
  className,
  title,
}: {
  value: string | number;
  alerta?: boolean;
  className?: string;
  title?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-8 items-center justify-center rounded-md border border-input bg-muted/60 px-2 text-sm font-semibold shadow-sm",
        alerta && "border-destructive/60 text-destructive",
        className
      )}
      title={title ?? "Calculado automaticamente"}
    >
      {value}
    </div>
  );
}
