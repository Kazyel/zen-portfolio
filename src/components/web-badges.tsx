const BADGES = [
    { top: "BEST VIEWED", bottom: "IN A CRT" },
    { top: "100%", bottom: "HANDMADE" },
    { top: "POWERED BY", bottom: "☕ + ◓" },
    { top: "VIM", bottom: "SUPREMACY" },
    { top: "NO AI WAS", bottom: "HARMED" },
];

export function WebBadges() {
    return (
        <div className="flex flex-wrap items-center gap-1.5">
            {BADGES.map((b) => (
                <span
                    key={`${b.top}-${b.bottom}`}
                    className="grid h-[31px] w-[88px] place-items-center border border-border bg-surface-2 text-center font-mono text-[8px] uppercase leading-[1.2] tracking-wide text-muted"
                >
                    <span>
                        <span className="block text-foreground">{b.top}</span>
                        <span className="block">{b.bottom}</span>
                    </span>
                </span>
            ))}
        </div>
    );
}
