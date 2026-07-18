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
