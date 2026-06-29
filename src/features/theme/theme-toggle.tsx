import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import {
    applyTheme,
    DEFAULT_THEME,
    getStoredTheme,
    type Theme,
} from "#/features/theme/theme";
import { cn } from "#/lib/cn";

function Icon({ active, children }: { active: boolean; children: React.ReactNode }) {
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

    function toggle() {
        const next: Theme = theme === "dark" ? "light" : "dark";
        const commit = () => {
            flushSync(() => setTheme(next));
            applyTheme(next);
        };
        const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduced || typeof document.startViewTransition !== "function") {
            commit();
            return;
        }
        document.startViewTransition(commit);
    }

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={theme === "dark" ? "Dark" : "Light"}
            suppressHydrationWarning
            className="relative grid size-10 place-items-center text-muted transition-[color,scale] duration-200 hover:text-foreground active:scale-[0.96]"
        >
            <span className="relative block size-4.5">
                <Icon active={mounted && theme === "light"}>
                    <Sun className="size-4.5" strokeWidth={1.75} />
                </Icon>
                <Icon active={!mounted || theme === "dark"}>
                    <Moon className="size-4.5" strokeWidth={1.75} />
                </Icon>
            </span>
        </button>
    );
}
