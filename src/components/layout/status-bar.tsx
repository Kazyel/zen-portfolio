import { useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { site, socials } from "#/data/site";

export function StatusBar() {
    const path = useRouterState({ select: (s) => s.location.pathname });
    const [time, setTime] = useState("");

    useEffect(() => {
        const tick = () => setTime(new Date().toTimeString().slice(0, 8));
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    const cwd = `~${path === "/" ? "/profile" : path}`;

    return (
        <footer className="fixed inset-x-0 bottom-0 z-40 flex h-7 items-center justify-between gap-3 border-t border-border bg-surface px-3 font-mono text-[11px] text-muted">
            <div className="flex min-w-0 items-center gap-3">
                <span className="bg-accent px-1.5 font-semibold text-accent-foreground">
                    NORMAL
                </span>
                <span className="hidden truncate sm:inline">{cwd}</span>
                <span className="hidden text-muted-foreground md:inline">
                    <span className="text-accent">/</span> commands
                </span>
            </div>

            <div className="flex items-center gap-3">
                <div className="flex items-center gap-2.5">
                    {socials.map((s) => (
                        <a
                            key={s.label}
                            href={s.href}
                            aria-label={s.label}
                            {...(s.href.startsWith("http")
                                ? { target: "_blank", rel: "noreferrer" }
                                : {})}
                            className="text-muted/70 transition-colors hover:text-foreground"
                        >
                            <s.icon className="size-3.5" strokeWidth={1.75} />
                        </a>
                    ))}
                </div>
                <span className="hidden text-muted-foreground sm:inline">
                    © 2026 {site.brand}
                </span>
                <span suppressHydrationWarning className="tabular-nums">
                    {time}
                </span>
            </div>
        </footer>
    );
}
