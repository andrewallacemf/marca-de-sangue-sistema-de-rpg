import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Junta classes E resolve conflitos do Tailwind (ex.: w-full vs w-12 → vence w-12). */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
