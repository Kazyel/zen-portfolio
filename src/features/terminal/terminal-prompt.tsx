import type { CSSProperties } from "react";
import { site } from "#/data/site";

export function Prompt() {
    return (
        <>
            <span className="text-terminal-accent">{site.brand}</span>
            <span className="text-terminal-muted">:~$</span>
        </>
    );
}

export function Cmd({ cmd, at }: { cmd: string; at: number }) {
    return (
        <p className="text-terminal-fg">
            <Prompt />{" "}
            <span
                className="typed"
                style={{ "--n": cmd.length, "--delay": `${at}ms` } as CSSProperties}
            >
                {cmd}
            </span>
        </p>
    );
}
