import type { ReactNode } from "react";
import { rise } from "#/lib/animation";

export function TerminalWindow({
    title,
    index,
    children,
}: {
    title: string;
    index: number;
    children: ReactNode;
}) {
    return (
        <section
            style={rise(index)}
            className="animate-rise flex w-full flex-col border border-terminal-border bg-terminal font-mono text-[15px]"
        >
            <div className="flex items-center gap-2.5 border-b border-terminal-border px-5 py-3">
                <span aria-hidden className="flex gap-1.5">
                    <span className="size-3 bg-terminal-border" />
                    <span className="size-3 bg-terminal-border" />
                    <span className="size-3 bg-terminal-border" />
                </span>
                <span className="ml-1 text-[13px] text-terminal-muted">{title}</span>
            </div>
            <div className="flex-1 space-y-6 p-6 leading-relaxed sm:p-9">{children}</div>
        </section>
    );
}
