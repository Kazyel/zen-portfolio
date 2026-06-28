import { Link } from "@tanstack/react-router";
import { nav, site } from "#/lib/site";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
			<div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-4 sm:px-6">
				{/* Brand */}
				<Link
					to="/"
					className="flex shrink-0 items-baseline gap-2 transition-opacity hover:opacity-80"
				>
					<span className="font-display text-xl leading-none text-accent">
						{site.brand}
					</span>
					<span className="hidden font-mono text-sm tracking-tight text-muted sm:inline">
						{site.brandRoman}
					</span>
				</Link>

				{/* Primary nav */}
				<nav
					aria-label="Primary"
					className="-mx-4 flex flex-1 items-center gap-1 overflow-x-auto px-4 [scrollbar-width:none] sm:justify-center"
				>
					{nav.map((item) => (
						<Link
							key={item.to}
							to={item.to}
							activeOptions={{ exact: item.to === "/" }}
							className="group relative flex items-center gap-1.5 whitespace-nowrap px-3 py-2 font-sans text-sm font-medium text-muted transition-colors hover:text-foreground"
							activeProps={{ className: "!text-foreground" }}
						>
							{({ isActive }) => (
								<>
									<span
										aria-hidden
										className="font-display text-xs text-muted/50 transition-colors group-hover:text-accent"
									>
										{item.kanji}
									</span>
									<span>{item.label}</span>
									{/* Active underline accent */}
									<span
										aria-hidden
										className="absolute inset-x-3 -bottom-px h-px origin-left bg-accent transition-transform duration-300 ease-[cubic-bezier(0.2,0,0,1)]"
										style={{ transform: `scaleX(${isActive ? 1 : 0})` }}
									/>
								</>
							)}
						</Link>
					))}
				</nav>

				<div className="shrink-0">
					<ThemeToggle />
				</div>
			</div>
		</header>
	);
}
