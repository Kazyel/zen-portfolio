import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "#/lib/cn";
import {
	applyTheme,
	DEFAULT_THEME,
	getStoredTheme,
	type Theme,
} from "#/lib/theme";

const ORDER: Theme[] = ["light", "dark", "system"];
const LABEL: Record<Theme, string> = {
	light: "Light",
	dark: "Dark",
	system: "System",
};

/** Cross-fade between icons (skill: keep all in DOM, animate opacity/scale/blur). */
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

	// When following the OS, repaint as it changes.
	useEffect(() => {
		if (theme !== "system") return;
		const mq = matchMedia("(prefers-color-scheme: dark)");
		const onChange = () => applyTheme("system");
		mq.addEventListener("change", onChange);
		return () => mq.removeEventListener("change", onChange);
	}, [theme]);

	function cycle() {
		const next = ORDER[(ORDER.indexOf(theme) + 1) % ORDER.length];
		setTheme(next);
		applyTheme(next);
	}

	return (
		<button
			type="button"
			onClick={cycle}
			aria-label={`Theme: ${LABEL[theme]}. Activate to switch.`}
			title={`Theme: ${LABEL[theme]}`}
			suppressHydrationWarning
			className={cn(
				"relative grid h-10 w-10 place-items-center border border-border bg-surface text-muted",
				"transition-[color,border-color,scale] duration-200 hover:border-border-strong hover:text-foreground",
				"active:scale-[0.96]",
			)}
		>
			<span className="relative block size-[18px]">
				<Icon active={mounted && theme === "light"}>
					<Sun className="size-[18px]" strokeWidth={1.75} />
				</Icon>
				<Icon active={mounted && theme === "dark"}>
					<Moon className="size-[18px]" strokeWidth={1.75} />
				</Icon>
				<Icon active={mounted && theme === "system"}>
					<Monitor className="size-[18px]" strokeWidth={1.75} />
				</Icon>
			</span>
		</button>
	);
}
