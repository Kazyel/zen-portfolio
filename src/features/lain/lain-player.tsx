import { useRef, useState } from "react";

export function LainPlayer() {
    const boxRef = useRef<HTMLDivElement>(null);
    const offset = useRef({ x: 0, y: 0 });
    const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

    return (
        <div
            ref={boxRef}
            className={`fixed z-80 w-64 overflow-hidden border border-accent/60 bg-terminal ${
                pos ? "" : "bottom-4 left-4"
            }`}
            style={pos ? { left: pos.x, top: pos.y } : undefined}
        >
            <div
                onPointerDown={(e) => {
                    const rect = boxRef.current?.getBoundingClientRect();
                    if (!rect) return;
                    offset.current = {
                        x: e.clientX - rect.left,
                        y: e.clientY - rect.top,
                    };
                    setPos({ x: rect.left, y: rect.top });
                    e.currentTarget.setPointerCapture(e.pointerId);
                }}
                onPointerMove={(e) => {
                    if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
                    setPos({
                        x: e.clientX - offset.current.x,
                        y: e.clientY - offset.current.y,
                    });
                }}
                onPointerUp={(e) => e.currentTarget.releasePointerCapture(e.pointerId)}
                className="flex cursor-grab touch-none select-none items-center gap-2 border-b border-terminal-border px-2.5 py-1.5 active:cursor-grabbing"
            >
                <span aria-hidden className="flex gap-1">
                    <span className="size-2 bg-terminal-border" />
                    <span className="size-2 bg-terminal-border" />
                    <span className="size-2 bg-terminal-border" />
                </span>

                <span className="font-mono text-[11px] text-terminal-muted">
                    lain.mp4
                </span>
            </div>

            <iframe
                title="serial experiments lain — opening"
                className="aspect-video w-full"
                src="https://www.youtube-nocookie.com/embed/JlBLcLdTYr4?autoplay=1&rel=0&start=8"
                allow="autoplay; encrypted-media"
            />
        </div>
    );
}
