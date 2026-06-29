import type { IconType } from "react-icons";
import { Tooltip } from "#/components/ui/tooltip";

export type Tech = { name: string; Icon?: IconType; abbreviation?: string };

export function Tile({ name, Icon, abbreviation }: Tech) {
    return (
        <Tooltip label={name}>
            <span
                role="img"
                aria-label={name}
                className="grid size-14 place-items-center border border-border bg-surface-2 text-muted transition-colors duration-200 hover:border-border-strong hover:text-foreground"
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
