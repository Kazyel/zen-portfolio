import type { ReactNode } from "react";
import { cn } from "#/lib/cn";

type TagProps = {
	children: ReactNode;
	className?: string;
};

/** Square mono chip. Quiet by default, lifts to full contrast on hover. */
export function Tag({ children, className }: TagProps) {
	return (
		<span
			className={cn(
				"inline-flex items-center border border-border bg-surface-2 px-2.5 py-1",
				"font-mono text-xs text-muted",
				"transition-colors duration-200 hover:border-border-strong hover:text-foreground",
				className,
			)}
		>
			{children}
		</span>
	);
}
