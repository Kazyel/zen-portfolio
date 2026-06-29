import { site } from "#/lib/site";

export function SiteFooter() {
	return (
		<footer>
			<div className="flex items-center justify-between gap-3 px-4 py-8 font-mono text-xs text-muted sm:px-6 lg:px-8">
				<p>© 2026 {site.brand}</p>
				<p>built with TanStack Start</p>
			</div>
		</footer>
	);
}
