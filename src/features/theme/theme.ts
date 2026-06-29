export type Theme = "light" | "dark";

export const THEMES: Theme[] = ["light", "dark"];
export const STORAGE_KEY = "theme";
export const DEFAULT_THEME: Theme = "dark";

// Applied before first paint to avoid a flash of the wrong theme.
export const THEME_SCRIPT = `(function(){try{var d=localStorage.getItem("${STORAGE_KEY}")!=="light";var e=document.documentElement;e.classList.toggle("dark",d);e.style.colorScheme=d?"dark":"light";}catch(e){}})();`;

export function applyTheme(theme: Theme): void {
    const isDark = theme === "dark";
    const element = document.documentElement;

    element.classList.toggle("dark", isDark);
    element.style.colorScheme = isDark ? "dark" : "light";

    try {
        localStorage.setItem(STORAGE_KEY, theme);
    } catch {
        return;
    }
}

export function getStoredTheme(): Theme {
    try {
        const t = localStorage.getItem(STORAGE_KEY) as Theme | null;
        if (t && THEMES.includes(t)) return t;
    } catch {}
    return DEFAULT_THEME;
}
