import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import {
    applyTheme,
    DEFAULT_THEME,
    getStoredTheme,
    THEMES,
    type Theme,
} from "#/features/theme/theme";
import { cn } from "#/lib/cn";

function ThemeIcon({ active, children }: { active: boolean; children: React.ReactNode }) {
    return (
        <span
            aria-hidden
            className={cn(
                "absolute inset-0 grid place-items-center transition-[opacity,scale,filter] duration-300 ease-[cubic-bezier(0.2,0,0,1)]",
                active
                    ? "scale-100 opacity-100 blur-0"
                    : "scale-[0.25] opacity-0 blur-xs",
            )}
        >
            {children}
        </span>
    );
}

export function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setTheme(getStoredTheme());
        setMounted(true);
    }, []);

    function cycle() {
        const nextTheme = THEMES[(THEMES.indexOf(theme) + 1) % THEMES.length];

        const commit = () => {
            flushSync(() => setTheme(nextTheme));
            applyTheme(nextTheme);
        };

        const preferReduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (preferReduced || typeof document.startViewTransition !== "function") {
            commit();
            return;
        }

        document.startViewTransition(commit);
    }

    return (
        <button
            type="button"
            title={`Theme: ${theme}`}
            className="relative grid size-10 place-items-center text-muted transition-[color,scale] duration-200 hover:text-foreground active:scale-[0.96]"
            aria-label={`Theme: ${theme}. Activate to cycle.`}
            onClick={cycle}
            suppressHydrationWarning
        >
            <span className="relative block size-4.5">
                <ThemeIcon active={mounted && theme === "light"}>
                    <Sun className="size-4.5" strokeWidth={1.75} />
                </ThemeIcon>

                <ThemeIcon active={!mounted || theme === "dark"}>
                    <Moon className="size-4.5" strokeWidth={1.75} />
                </ThemeIcon>

                <ThemeIcon active={mounted && theme === "amber"}>
                    <span className="size-3.5 bg-[#ffb000]" />
                </ThemeIcon>

                <ThemeIcon active={mounted && theme === "green"}>
                    <span className="size-3.5 bg-[#33ff66]" />
                </ThemeIcon>
            </span>
        </button>
    );
}
