import { ArrowUpRight } from "lucide-react";
import { SiCplusplus } from "react-icons/si";
import { currently } from "#/data/site";
import { CardSection } from "./card";
import { Tile } from "./tile";

export function Currently() {
    return (
        <div className="space-y-6">
            <CardSection label="now">
                <ul className="space-y-1.5 text-[15px]">
                    {currently.working.map((item) =>
                        item.href ? (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group/now inline-flex items-center gap-1 font-semibold text-foreground transition-colors hover:text-accent"
                                >
                                    {item.label}
                                    <ArrowUpRight
                                        className="size-3.5 text-muted transition-colors group-hover/now:text-accent"
                                        strokeWidth={1.75}
                                    />
                                </a>
                            </li>
                        ) : (
                            <li key={item.label} className="text-muted">
                                {item.label}
                                {item.soon ? (
                                    <span className="ml-1.5 border border-border-strong px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                                        soon
                                    </span>
                                ) : null}
                            </li>
                        ),
                    )}
                </ul>
            </CardSection>

            <CardSection label="reading">
                <p className="text-[15px] text-foreground">
                    {currently.reading.join(" · ")}
                </p>
            </CardSection>

            <CardSection label="learning">
                <ul aria-label="learning" className="flex gap-2">
                    <li>
                        <Tile name="C++" Icon={SiCplusplus} color="#00599C" />
                    </li>
                    <li>
                        <Tile name="C#" abbreviation="C#" />
                    </li>
                </ul>
            </CardSection>
        </div>
    );
}
