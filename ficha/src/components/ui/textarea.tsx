import * as React from "react";
import { cn } from "@/lib/utils";

/* Textarea do shadcn. Por padrão auto-cresce (mostra todo o conteúdo, inclusive na impressão).
   Com autoGrow={false}, ocupa a altura definida pelo container e rola quando o texto excede. */
function Textarea({
  className,
  value,
  autoGrow = true,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { autoGrow?: boolean }) {
  const ref = React.useRef<HTMLTextAreaElement>(null);
  React.useLayoutEffect(() => {
    if (!autoGrow) return;
    const el = ref.current;
    if (el) {
      el.style.height = "auto";
      el.style.height = `${el.scrollHeight}px`;
    }
  }, [value, autoGrow]);
  return (
    <textarea
      ref={ref}
      value={value}
      rows={2}
      className={cn(
        "flex w-full resize-none rounded-md border border-input bg-transparent px-2 py-1 text-sm shadow-sm",
        autoGrow ? "min-h-[56px] overflow-hidden" : "overflow-auto",
        "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
