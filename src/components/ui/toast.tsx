export function Toast({ message }: { message: string }) {
    return (
        <output className="toast-in fixed left-1/2 top-5 z-90 border border-accent/60 bg-surface px-4 py-2 font-mono text-xs text-foreground">
            {message}
        </output>
    );
}
