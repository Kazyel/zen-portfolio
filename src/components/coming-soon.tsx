type ComingSoonProps = {
    title: string;
    blurb: string;
};

export function ComingSoon({ title, blurb }: ComingSoonProps) {
    return (
        <section className="animate-rise mx-auto flex max-w-xl flex-col items-center py-24 text-center">
            <span aria-hidden className="mb-6 block h-10 w-1 bg-accent" />
            <h1 className="font-display text-3xl font-bold">{title}</h1>
            <p className="mt-3 leading-relaxed text-muted">{blurb}</p>
            <span className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                — in progress —
            </span>
        </section>
    );
}
