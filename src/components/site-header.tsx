import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { type CSSProperties, useEffect, useState } from "react";
import { nav, site } from "#/lib/site";
import { ThemeToggle } from "./theme-toggle";

const rise = (i: number) => ({ "--rise-index": i }) as CSSProperties;

function Brand({ onNavigate }: { onNavigate?: () => void }) {
	return (
		<Link
			to="/"
			onClick={onNavigate}
			aria-label={site.brand}
			className="font-mono text-[15px] font-bold lowercase tracking-tight transition-opacity hover:opacity-80"
		>
			{site.brand}
			<span className="text-accent">_</span>
		</Link>
	);
}

function NavItem({
	to,
	label,
	exact,
}: {
	to: string;
	label: string;
	exact: boolean;
}) {
	return (
		<Link
			to={to}
			activeOptions={{ exact }}
			className="font-mono text-[13px] text-muted transition-colors duration-200 hover:text-foreground"
			activeProps={{ className: "!text-foreground" }}
		>
			{label}
		</Link>
	);
}

export function SiteHeader() {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (!open) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setOpen(false);
		};
		document.addEventListener("keydown", onKey);
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
		};
	}, [open]);

	return (
		<header>
			<div className="flex h-14 items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
				<Brand />

				<nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
					{nav.map((item) => (
						<NavItem
							key={item.to}
							to={item.to}
							label={item.label}
							exact={item.to === "/"}
						/>
					))}
				</nav>

				<div className="-mr-2 flex items-center">
					<ThemeToggle />
					<button
						type="button"
						onClick={() => setOpen(true)}
						aria-label="Open menu"
						aria-expanded={open}
						className="grid size-10 place-items-center text-muted transition-[color,scale] duration-200 hover:text-foreground active:scale-[0.96] md:hidden"
					>
						<Menu className="size-[18px]" strokeWidth={1.75} />
					</button>
				</div>
			</div>

			{/* Full-screen menu (mobile). */}
			{open ? (
				<div
					className="fixed inset-0 z-50 flex flex-col bg-background md:hidden"
					role="dialog"
					aria-modal="true"
					aria-label="Menu"
				>
					<div className="flex h-14 items-center justify-between px-4 sm:px-6">
						<Brand onNavigate={() => setOpen(false)} />
						<button
							type="button"
							onClick={() => setOpen(false)}
							aria-label="Close menu"
							className="grid size-10 place-items-center text-muted transition-[color,scale] duration-200 hover:text-foreground active:scale-[0.96]"
						>
							<X className="size-[18px]" strokeWidth={1.75} />
						</button>
					</div>

					<nav
						aria-label="Primary"
						className="flex flex-1 flex-col justify-center gap-1 px-6"
					>
						{nav.map((item, i) => (
							<Link
								key={item.to}
								to={item.to}
								onClick={() => setOpen(false)}
								activeOptions={{ exact: item.to === "/" }}
								style={rise(i)}
								className="animate-rise group flex items-baseline gap-4 py-2 font-mono text-3xl font-bold tracking-tight text-muted transition-colors duration-200 hover:text-foreground"
								activeProps={{ className: "!text-foreground" }}
							>
								<span aria-hidden className="text-sm text-accent">
									{String(i + 1).padStart(2, "0")}
								</span>
								{item.label}
							</Link>
						))}
					</nav>
				</div>
			) : null}
		</header>
	);
}
