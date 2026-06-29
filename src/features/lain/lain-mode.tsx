import { useEffect, useState } from "react";
import { isLain, KONAMI, setLain } from "./lain";
import { LainPlayer } from "./lain-player";

export function LainMode() {
    const [toast, setToast] = useState<string | null>(null);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        let buffer: string[] = [];
        const onKey = (e: KeyboardEvent) => {
            buffer = [...buffer, e.key.toLowerCase()].slice(-KONAMI.length);
            if (
                buffer.length === KONAMI.length &&
                KONAMI.every((k, i) => buffer[i] === k)
            ) {
                const next = !isLain();
                setLain(next);
                setPlaying(next);
                setToast(
                    next
                        ? "present day,  present time.  ⌁  lain mode engaged"
                        : "lain mode disengaged",
                );
                buffer = [];
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    useEffect(() => {
        if (!toast) return;
        const id = setTimeout(() => setToast(null), 2800);
        return () => clearTimeout(id);
    }, [toast]);

    return (
        <>
            <div aria-hidden className="crt" />

            {toast ? (
                <output className="toast-in fixed left-1/2 top-5 z-[90] border border-accent/60 bg-surface px-4 py-2 font-mono text-xs text-foreground">
                    {toast}
                </output>
            ) : null}

            {playing ? <LainPlayer /> : null}
        </>
    );
}
