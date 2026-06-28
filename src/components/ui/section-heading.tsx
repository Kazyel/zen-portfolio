import type { ReactNode } from "react";
import { cn } from "#/lib/cn";

type SectionHeadingProps = {
	children: ReactNode;
	/** Optional kanji watermark, shown quietly on the right. */
	kanji?: string;
	className?: string;
};

/**
 * Bold uppercase eyebrow with the shu accent bar from the reference layout.
 * Uses the sans face (not the display serif) so it reads as a label.
 */
export function SectionHeading({
	children,
	kanji,
	className,
}: SectionHeadingProps) {
	return (
		<div className={cn("flex items-center justify-between gap-4", className)}>
			<h2 className="flex items-center gap-3 font-sans text-sm font-bold uppercase tracking-[0.18em]">
				<span aria-hidden className="h-4 w-[3px] shrink-0 bg-accent" />
				{children}
			</h2>
			{kanji ? (
				<span
					aria-hidden
					className="select-none font-display text-xl leading-none text-muted opacity-40"
				>
					{kanji}
				</span>
			) : null}
		</div>
	);
}
