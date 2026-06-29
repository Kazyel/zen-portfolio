import { site, socials } from "#/data/site";

export function SiteFooter() {
    return (
        <footer>
            <div className="flex flex-col gap-5 px-4 pb-6 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-4 font-mono text-xs text-muted sm:flex-row">
                    <p>
                        © 2026 {site.brand} ·{" "}
                        <span className="text-muted-foreground">
                            last updated 2026-06-28
                        </span>
                    </p>

                    <div className="flex items-center gap-1">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                aria-label={s.label}
                                {...(s.href.startsWith("http")
                                    ? { target: "_blank", rel: "noreferrer" }
                                    : {})}
                                className="grid size-9 place-items-center text-muted/50 transition-colors duration-200 hover:text-foreground"
                            >
                                <s.icon className="size-4.5" strokeWidth={1.75} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
