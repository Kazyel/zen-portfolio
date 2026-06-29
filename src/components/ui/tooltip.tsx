import type { ReactNode } from "react";
import { cn } from "#/lib/cn";

export function Tooltip({
    label,
    side = "top",
    children,
}: {
    label: string;
    side?: "top" | "bottom";
    children: ReactNode;
}) {
    return (
        <span className="group/tooltip relative inline-flex">
            {children}
            <span
                aria-hidden
                className={cn(
                    "pointer-events-none absolute left-1/2 z-50 -translate-x-1/2 whitespace-nowrap bg-foreground px-2 py-1 font-mono text-[11px] leading-none text-background opacity-0 transition-opacity duration-150 group-hover/tooltip:opacity-100 group-focus-within/tooltip:opacity-100",
                    side === "top" ? "bottom-full mb-2" : "top-full mt-2",
                )}
            >
                {label}
            </span>
        </span>
    );
}
