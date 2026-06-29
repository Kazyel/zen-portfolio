import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { cn } from "#/lib/cn";
import {
	applyTheme,
	DEFAULT_THEME,
	getStoredTheme,
	type Theme,
} from "#/lib/theme";

/** Cross-fade between icons (skill: keep both in DOM, animate opacity/scale/blur). */
function Icon({
	active,
	children,
}: {
	active: boolean;
	children: React.ReactNode;
}) {
	return (
		<span
			aria-hidden
			className={cn(
				"absolute inset-0 grid place-items-center transition-[opacity,scale,filter] duration-300 ease-[cubic-bezier(0.2,0,0,1)]",
				active
					? "scale-100 opacity-100 blur-0"
					: "scale-[0.25] opacity-0 blur-[4px]",
			)}
		>
			{children}
		</span>
	);
}

export function ThemeToggle() {
	const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);
	const [mounted, setMounted] = useState(false);

	// Sync to the persisted choice after hydration (avoids SSR mismatch).
	useEffect(() => {
		setTheme(getStoredTheme());
		setMounted(true);
	}, []);

	function toggle() {
		const next: Theme = theme === "dark" ? "light" : "dark";

		const commit = () => {
			// flushSync so the icon swap is captured inside the same transition snapshot.
			flushSync(() => setTheme(next));
			applyTheme(next);
		};

		// No View Transitions support (or reduced motion) → just swap.
		const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (reduced || typeof document.startViewTransition !== "function") {
			commit();
			return;
		}

		// Cross-fade old → new theme (see ::view-transition-* in styles.css).
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
			<span className="relative block size-[18px]">
				<Icon active={mounted && theme === "light"}>
					<Sun className="size-[18px]" strokeWidth={1.75} />
				</Icon>
				<Icon active={!mounted || theme === "dark"}>
					<Moon className="size-[18px]" strokeWidth={1.75} />
				</Icon>
			</span>
		</button>
	);
}
