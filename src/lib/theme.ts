export type Theme = "light" | "dark";

export const THEMES: Theme[] = ["light", "dark"];
export const STORAGE_KEY = "theme";
export const DEFAULT_THEME: Theme = "dark"; // dark-first

/**
 * Blocking script injected into <head> before paint. It resolves the stored
 * theme (defaulting to dark) and sets the `.dark` class + `color-scheme` on
 * <html> synchronously, so there is no flash of the wrong theme on load (FOUC).
 * Kept as a single minified string on purpose — it must run instantly.
 */
export const THEME_SCRIPT = `(function(){try{var d=localStorage.getItem("${STORAGE_KEY}")!=="light";var e=document.documentElement;e.classList.toggle("dark",d);e.style.colorScheme=d?"dark":"light";}catch(e){}})();`;

/** Apply a theme to the document and persist the choice. */
export function applyTheme(theme: Theme): void {
	const dark = theme === "dark";
	const el = document.documentElement;
	el.classList.toggle("dark", dark);
	el.style.colorScheme = dark ? "dark" : "light";
	try {
		localStorage.setItem(STORAGE_KEY, theme);
	} catch {
		/* storage blocked — ignore */
	}
}

/** Read the persisted theme choice (defaults to dark-first). */
export function getStoredTheme(): Theme {
	try {
		const t = localStorage.getItem(STORAGE_KEY) as Theme | null;
		if (t && THEMES.includes(t)) return t;
	} catch {
		/* ignore */
	}
	return DEFAULT_THEME;
}
