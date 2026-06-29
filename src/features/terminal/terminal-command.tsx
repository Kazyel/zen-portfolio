import { useNavigate } from "@tanstack/react-router";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { nav } from "#/data/site";
import { cn } from "#/lib/cn";
import { Prompt } from "./terminal-prompt";

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

export function TerminalCommand({ children }: { children?: ReactNode }) {
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement>(null);
    const [query, setQuery] = useState("");
    const [focused, setFocused] = useState(false);
    const [index, setIndex] = useState(0);

    const results = COMMANDS.filter((c) =>
        c.label.toLowerCase().includes(query.trim().toLowerCase()),
    );
    const activeIndex = Math.min(index, Math.max(0, results.length - 1));

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "/" && !isTyping(e.target)) {
                e.preventDefault();
                inputRef.current?.focus();
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const run = (to: string) => {
        setQuery("");
        inputRef.current?.blur();
        navigate({ to });
    };

    return (
        <div>
            <div className="flex items-center justify-between gap-4">
                <p className="flex min-w-0 flex-1 items-center gap-2 text-terminal-fg">
                    <Prompt />
                    <input
                        ref={inputRef}
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setIndex(0);
                        }}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        onKeyDown={(e) => {
                            if (e.key === "Escape") {
                                e.preventDefault();
                                inputRef.current?.blur();
                            } else if (e.key === "ArrowDown") {
                                e.preventDefault();
                                setIndex((i) => Math.min(i + 1, results.length - 1));
                            } else if (e.key === "ArrowUp") {
                                e.preventDefault();
                                setIndex((i) => Math.max(i - 1, 0));
                            } else if (e.key === "Enter") {
                                e.preventDefault();
                                const command = results[activeIndex];
                                if (command) run(command.to);
                            }
                        }}
                        placeholder="type / for commands"
                        aria-label="Terminal command"
                        autoComplete="off"
                        spellCheck={false}
                        className="w-full bg-transparent text-terminal-fg caret-terminal-fg outline-none placeholder:text-terminal-muted"
                    />
                </p>

                {children}
            </div>

            {focused ? (
                <ul className="mt-3 border-t border-terminal-border pt-2 text-[13px]">
                    {results.length === 0 ? (
                        <li className="px-1 py-1 text-terminal-muted">
                            no matching command
                        </li>
                    ) : (
                        results.map((command, i) => (
                            <li key={command.to}>
                                <button
                                    type="button"
                                    onMouseDown={(e) => {
                                        e.preventDefault();
                                        run(command.to);
                                    }}
                                    onPointerEnter={() => setIndex(i)}
                                    className={cn(
                                        "flex w-full items-center justify-between gap-4 px-1 py-1 text-left transition-colors",
                                        i === activeIndex
                                            ? "bg-terminal-accent text-terminal"
                                            : "text-terminal-fg",
                                    )}
                                >
                                    <span>
                                        <span
                                            className={
                                                i === activeIndex
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
                                            i === activeIndex
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
            ) : null}
        </div>
    );
}
