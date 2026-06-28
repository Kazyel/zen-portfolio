type ComingSoonProps = {
	title: string;
	kanji: string;
	blurb: string;
};

/** Minimal placeholder for scaffolded sections not yet built out. */
export function ComingSoon({ title, kanji, blurb }: ComingSoonProps) {
	return (
		<section className="animate-rise mx-auto flex max-w-xl flex-col items-center py-24 text-center">
			<span aria-hidden className="font-display text-7xl text-accent/80">
				{kanji}
			</span>
			<h1 className="mt-6 font-display text-3xl font-bold">{title}</h1>
			<p className="mt-3 leading-relaxed text-muted">{blurb}</p>
			<span className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-muted">
				— in progress —
			</span>
		</section>
	);
}
