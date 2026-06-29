import { useEffect, useState } from "react";

export function HitCounter() {
    const [count, setCount] = useState<number | null>(null);

    useEffect(() => {
        let next = 41;
        try {
            next = Number(localStorage.getItem("hits") || "41") + 1;
            localStorage.setItem("hits", String(next));
        } catch {
            /* storage blocked */
        }
        setCount(next);
    }, []);

    return (
        <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-muted">
            visitor
            <span
                suppressHydrationWarning
                className="border border-border bg-terminal px-1.5 py-0.5 tabular-nums text-terminal-accent"
            >
                {String(count ?? 0).padStart(6, "0")}
            </span>
        </span>
    );
}
