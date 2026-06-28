import type { CSSProperties, ReactNode } from "react";
import { cn } from "#/lib/cn";

type CardProps = {
	children: ReactNode;
	className?: string;
	style?: CSSProperties;
	/** Lift on hover — for cards that act as links/interactive surfaces. */
	interactive?: boolean;
};

/**
 * Square surface. Structure comes from a hairline border plus a barely-there
 * layered shadow (skill: shadows for depth, kept subtle so it reads as paper,
 * not chrome). Corners stay sharp — square by intent.
 */
export function Card({ children, className, style, interactive }: CardProps) {
	return (
		<section
			style={style}
			className={cn(
				"relative border border-border bg-surface p-6",
				"shadow-[0_1px_2px_rgb(0_0_0/0.04),0_10px_30px_-22px_rgb(0_0_0/0.45)]",
				interactive &&
					"transition-[border-color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.2,0,0,1)] hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_1px_2px_rgb(0_0_0/0.05),0_18px_40px_-24px_rgb(0_0_0/0.5)]",
				className,
			)}
		>
			{children}
		</section>
	);
}
