import type { ReactNode } from "react";
import { rise } from "#/lib/animation";

function Corners() {
    const base = "pointer-events-none absolute size-2.5 border-border-strong/70";
    return (
        <>
            <span aria-hidden className={`${base} left-2.5 top-2.5 border-l border-t`} />
            <span aria-hidden className={`${base} right-2.5 top-2.5 border-r border-t`} />
            <span
                aria-hidden
                className={`${base} bottom-2.5 left-2.5 border-b border-l`}
            />
            <span
                aria-hidden
                className={`${base} bottom-2.5 right-2.5 border-b border-r`}
            />
        </>
    );
}

export function Card({
    label,
    index,
    children,
}: {
    label: string;
    index: number;
    children: ReactNode;
}) {
    return (
        <section
            style={rise(index)}
            className="group animate-rise relative overflow-hidden border border-border bg-surface p-7 transition-colors duration-200 hover:border-accent/50 sm:p-8"
        >
            <Corners />
            <div className="relative">
                <div className="flex items-baseline justify-between gap-4">
                    <h2 className="glitch font-display text-2xl font-bold uppercase tracking-wide text-foreground">
                        {label}
                    </h2>
                    <span
                        aria-hidden
                        className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground"
                    >
                        {`0${index} //`}
                    </span>
                </div>
                <div className="mt-6">{children}</div>
            </div>
        </section>
    );
}

export function Section({ label, children }: { label: string; children: ReactNode }) {
    return (
        <div>
            <p className="font-mono text-[14px] uppercase tracking-[0.2em] text-muted-foreground">
                {label}
            </p>
            <div className="mt-3">{children}</div>
        </div>
    );
}
