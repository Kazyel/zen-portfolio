import { useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { nav } from "#/data/site";
import { cn } from "#/lib/cn";

const COMMANDS = nav.map((item) => ({
    label: item.label,
    to: item.to,
    hint: item.to === "/" ? "~/" : `~${item.to}`,
}));

function isTyping(target: EventTarget | null) {
    const el = target as HTMLElement | null;
    if (!el) return false;
    return el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable;
}

export function CommandPalette() {
    const navigate = useNavigate();
    const path = useRouterState({ select: (s) => s.location.pathname });
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [index, setIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const results = COMMANDS.filter((c) =>
        c.label.toLowerCase().includes(query.trim().toLowerCase()),
    );
    const active = Math.min(index, Math.max(0, results.length - 1));

    // The home page resolves "/" inside the terminal itself, so the modal
    // only steps in elsewhere.
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (!open && e.key === "/" && path !== "/" && !isTyping(e.target)) {
                e.preventDefault();
                setOpen(true);
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, path]);

    useEffect(() => {
        if (!open) return;
        setQuery("");
        setIndex(0);
        const id = requestAnimationFrame(() => inputRef.current?.focus());
        return () => cancelAnimationFrame(id);
    }, [open]);

    if (!open) return null;

    const close = () => setOpen(false);
    const run = (to: string) => {
        close();
        navigate({ to });
    };

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            className="fixed inset-0 z-[95] flex items-start justify-center bg-background/70 px-4 pt-[16vh] backdrop-blur-sm"
            onPointerDown={(e) => {
                if (e.target === e.currentTarget) close();
            }}
        >
            <div className="w-full max-w-lg border border-terminal-border bg-terminal font-mono text-terminal-fg">
                <div className="flex items-center gap-2 border-b border-terminal-border px-4 py-3 text-sm">
                    <span className="shrink-0 text-terminal-accent">kazyel:~$</span>
                    <input
                        ref={inputRef}
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setIndex(0);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Escape") {
                                e.preventDefault();
                                close();
                            } else if (e.key === "ArrowDown") {
                                e.preventDefault();
                                setIndex((i) => Math.min(i + 1, results.length - 1));
                            } else if (e.key === "ArrowUp") {
                                e.preventDefault();
                                setIndex((i) => Math.max(i - 1, 0));
                            } else if (e.key === "Enter") {
                                e.preventDefault();
                                const command = results[active];
                                if (command) run(command.to);
                            }
                        }}
                        placeholder="type a command…"
                        aria-label="Command"
                        autoComplete="off"
                        spellCheck={false}
                        className="w-full bg-transparent text-sm text-terminal-fg outline-none placeholder:text-terminal-muted"
                    />
                </div>

                <ul className="max-h-72 overflow-auto py-1 text-sm">
                    {results.length === 0 ? (
                        <li className="px-4 py-2 text-terminal-muted">
                            no matching command
                        </li>
                    ) : (
                        results.map((command, i) => (
                            <li key={command.to}>
                                <button
                                    type="button"
                                    onPointerEnter={() => setIndex(i)}
                                    onClick={() => run(command.to)}
                                    className={cn(
                                        "flex w-full items-center justify-between gap-4 px-4 py-1.5 text-left transition-colors",
                                        i === active
                                            ? "bg-terminal-accent text-terminal"
                                            : "text-terminal-fg",
                                    )}
                                >
                                    <span>
                                        <span
                                            className={
                                                i === active
                                                    ? "opacity-70"
                                                    : "text-terminal-muted"
                                            }
                                        >
                                            cd{" "}
                                        </span>
                                        {command.label}
                                    </span>
                                    <span
                                        className={
                                            i === active
                                                ? "opacity-70"
                                                : "text-terminal-muted"
                                        }
                                    >
                                        {command.hint}
                                    </span>
                                </button>
                            </li>
                        ))
                    )}
                </ul>

                <div className="border-t border-terminal-border px-4 py-2 text-[11px] text-terminal-muted">
                    ↑↓ navigate · ↵ open · esc close
                </div>
            </div>
        </div>
    );
}
