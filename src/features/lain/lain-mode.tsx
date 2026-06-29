import { useEffect, useState } from "react";
import { Toast } from "#/components/ui/toast";
import { isLain, KONAMI, setLain } from "./lain";
import { LainPlayer } from "./lain-player";

export function LainMode() {
    const [toastOpen, setToastOpen] = useState<string | null>(null);
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
                setToastOpen(
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
        if (!toastOpen) return;
        const id = setTimeout(() => setToastOpen(null), 2800);
        return () => clearTimeout(id);
    }, [toastOpen]);

    return (
        <>
            <div aria-hidden className="crt" />
            {toastOpen ? <Toast message={toastOpen} /> : null}
            {playing ? <LainPlayer /> : null}
        </>
    );
}
