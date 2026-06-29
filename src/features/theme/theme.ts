export type Theme = "light" | "dark" | "amber" | "green";

export const THEMES: Theme[] = ["light", "dark", "amber", "green"];
export const STORAGE_KEY = "theme";
export const DEFAULT_THEME: Theme = "dark";

const CLASSES = ["dark", "amber", "green"];

// Applied before first paint to avoid a flash of the wrong theme.
export const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem("${STORAGE_KEY}")||"${DEFAULT_THEME}";var e=document.documentElement;e.classList.remove("dark","amber","green");if(t!=="light")e.classList.add(t);e.style.colorScheme=t==="light"?"light":"dark";}catch(e){}})();`;

export function applyTheme(theme: Theme): void {
    const element = document.documentElement;

    element.classList.remove(...CLASSES);
    if (theme !== "light") element.classList.add(theme);
    element.style.colorScheme = theme === "light" ? "light" : "dark";

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
