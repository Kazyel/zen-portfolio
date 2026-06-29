import { ArrowUpRight } from "lucide-react";
import { tools } from "#/data/site";

export function Tools() {
    return (
        <ul className="space-y-2.5">
            {tools.map((tool) => (
                <li key={tool.name}>
                    <a
                        href={tool.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group/tool flex items-center gap-2 border border-border bg-surface-2 px-4 py-2.5 text-[15px] transition-colors duration-200 hover:border-accent/50 hover:bg-accent/10"
                    >
                        <span className="font-semibold text-foreground font-mono">
                            {tool.name}
                        </span>

                        <span className="text-muted">— {tool.desc}</span>

                        <ArrowUpRight
                            className="ml-auto size-4 shrink-0 text-muted transition-all duration-150 group-hover/tool:-translate-y-px group-hover/tool:translate-x-0.5 group-hover/tool:text-foreground"
                            strokeWidth={1.75}
                        />
                    </a>
                </li>
            ))}
        </ul>
    );
}
