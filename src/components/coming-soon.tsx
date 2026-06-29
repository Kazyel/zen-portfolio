import { Kanji } from "#/components/kanji";

type ComingSoonProps = {
    title: string;
    blurb: string;
};

export function ComingSoon({ title, blurb }: ComingSoonProps) {
    return (
        <section className="animate-rise relative mx-auto flex min-h-[60vh] max-w-3xl flex-col justify-center overflow-hidden">
            <Kanji
                char="次"
                className="pointer-events-none absolute -right-6 -top-12 size-72 text-foreground opacity-[0.05]"
            />

            <p className="relative font-mono text-sm uppercase tracking-[0.3em] text-accent">
                次回予告 <span className="text-muted-foreground">{"// next"}</span>
            </p>

            <h1 className="relative mt-4 font-display text-5xl font-bold uppercase tracking-tight sm:text-7xl">
                {title}
            </h1>

            <p className="relative mt-6 max-w-xl text-[15px] leading-relaxed text-muted">
                {blurb}
            </p>

            <p className="relative mt-10 flex items-center gap-3 font-mono text-sm text-muted-foreground">
                <span aria-hidden className="h-px w-12 bg-accent" />
                つづく · to be continued
            </p>
        </section>
    );
}
