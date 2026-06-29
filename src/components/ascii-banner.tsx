const BANNER = `█  █  ████  ████  █  █  ████  █
█ █   █  █    █   █  █  █     █
██    ████   █     ██   ███   █
█ █   █  █  █      █    █     █
█  █  █  █  ████   █    ████  ████`;

export function AsciiBanner() {
    return (
        <pre
            role="img"
            aria-label="kazyel"
            className="select-none overflow-hidden font-mono text-[7px] leading-[1.05] text-terminal-accent/70 sm:text-[10px]"
        >
            {BANNER}
        </pre>
    );
}
