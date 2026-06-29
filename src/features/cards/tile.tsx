import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import { Tooltip } from "#/components/ui/tooltip";

export type Tech = {
    name: string;
    Icon?: IconType;
    abbreviation?: string;
    color?: string;
};

export function Tile({ name, Icon, abbreviation, color }: Tech) {
    return (
        <Tooltip label={name}>
            <span
                role="img"
                aria-label={name}
                style={{ "--brand": color ?? "var(--foreground)" } as CSSProperties}
                className="grid size-14 place-items-center border border-border bg-surface-2 text-muted transition-colors duration-200 hover:border-accent/50 hover:bg-accent/10 hover:text-[var(--brand)]"
            >
                {Icon ? (
                    <Icon className="size-7" />
                ) : (
                    <span className="font-mono text-[12px] font-bold tracking-wide">
                        {abbreviation}
                    </span>
                )}
            </span>
        </Tooltip>
    );
}
