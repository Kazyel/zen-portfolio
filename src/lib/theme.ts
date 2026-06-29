export type Theme = "light" | "dark";

export const THEMES: Theme[] = ["light", "dark"];
export const STORAGE_KEY = "theme";
export const DEFAULT_THEME: Theme = "dark";

// Applied before first paint to avoid a flash of the wrong theme.
export const THEME_SCRIPT = `(function(){try{var d=localStorage.getItem("${STORAGE_KEY}")!=="light";var e=document.documentElement;e.classList.toggle("dark",d);e.style.colorScheme=d?"dark":"light";}catch(e){}})();`;

export function applyTheme(theme: Theme): void {
  const dark = theme === "dark";
  const el = document.documentElement;
  el.classList.toggle("dark", dark);
  el.style.colorScheme = dark ? "dark" : "light";
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* storage blocked */
  }
}

export function getStoredTheme(): Theme {
  try {
    const t = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (t && THEMES.includes(t)) return t;
  } catch {
    /* ignore */
  }
  return DEFAULT_THEME;
}
