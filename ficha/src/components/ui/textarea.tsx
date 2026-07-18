import * as React from "react";
import { cn } from "@/lib/utils";

/* Textarea do shadcn + auto-crescimento (mostra todo o conteúdo, inclusive na impressão). */
function Textarea({ className, value, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const ref = React.useRef<HTMLTextAreaElement>(null);
  React.useLayoutEffect(() => {
    const el = ref.current;
    if (el) {
      el.style.height = "auto";
      el.style.height = `${el.scrollHeight}px`;
    }
  }, [value]);
  return (
    <textarea
      ref={ref}
      value={value}
      rows={2}
      className={cn(
        "flex min-h-[56px] w-full resize-none overflow-hidden rounded-md border border-input bg-transparent px-2 py-1 text-sm shadow-sm",
        "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
