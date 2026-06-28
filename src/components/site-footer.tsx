import { site } from "#/lib/site";

export function SiteFooter() {
	return (
		<footer className="mt-24 border-t border-border">
			<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 sm:flex-row sm:px-6">
				<p className="font-mono text-xs text-muted">
					© {site.brandRoman} — built with TanStack Start
				</p>
				<p className="flex items-center gap-2 font-mono text-xs text-muted">
					<span aria-hidden className="font-display text-sm text-accent/70">
						静
					</span>
					quiet software
				</p>
			</div>
		</footer>
	);
}
