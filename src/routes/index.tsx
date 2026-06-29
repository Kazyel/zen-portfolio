import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "#/lib/cn";
import { profile, site, socials } from "#/lib/site";

export const Route = createFileRoute("/")({ component: Home });

const rise = (i: number) => ({ "--rise-index": i }) as CSSProperties;

/** The shell prompt: user@host:~$ */
function Prompt() {
	return (
		<>
			<span className="text-terminal-green">aoi@{site.brand}</span>
			<span className="text-terminal-muted">:~$</span>
		</>
	);
}

function Cmd({ children }: { children: ReactNode }) {
	return (
		<p className="text-terminal-fg">
			<Prompt /> {children}
		</p>
	);
}

/** Dark terminal window — used only for the about panel. */
function TerminalWindow({
	title,
	index,
	className,
	children,
}: {
	title: string;
	index: number;
	className?: string;
	children: ReactNode;
}) {
	return (
		<section
			style={rise(index)}
			className={cn(
				"animate-rise flex flex-col border border-terminal-border bg-terminal font-mono text-[15px]",
				className,
			)}
		>
			<div className="flex items-center gap-2.5 border-b border-terminal-border px-5 py-3">
				<span aria-hidden className="flex gap-1.5">
					<span className="size-3 bg-terminal-border" />
					<span className="size-3 bg-terminal-border" />
					<span className="size-3 bg-terminal-border" />
				</span>
				<span className="ml-1 text-[13px] text-terminal-muted">{title}</span>
			</div>
			<div className="flex-1 space-y-6 p-6 leading-relaxed sm:p-9">
				{children}
			</div>
		</section>
	);
}

/** Clean surface card with a bold mono label. */
function Panel({
	label,
	index,
	className,
	children,
}: {
	label: string;
	index: number;
	className?: string;
	children: ReactNode;
}) {
	return (
		<section
			style={rise(index)}
			className={cn(
				"animate-rise border border-border bg-surface p-6 sm:p-8",
				className,
			)}
		>
			<p className="flex items-center gap-2.5 font-mono text-[13px] font-semibold uppercase tracking-[0.15em] text-muted">
				<span aria-hidden className="size-2 bg-accent" />
				{label}
			</p>
			<div className="mt-6">{children}</div>
		</section>
	);
}

function Home() {
	return (
		<div className="grid gap-5 sm:gap-6 lg:grid-cols-3">
			{/* about — the only terminal, full page width */}
			<TerminalWindow title="~/about" index={0} className="lg:col-span-3">
				<div>
					<Cmd>whoami</Cmd>
					<p className="mt-1.5 text-terminal-muted">
						{profile.name} — {profile.role}
					</p>
				</div>
				<div>
					<Cmd>cat ~/about</Cmd>
					<div className="mt-1.5 text-terminal-muted">
						{profile.about.map((line) => (
							<p key={line}>{line}</p>
						))}
					</div>
				</div>
				<p className="text-terminal-fg">
					<Prompt />{" "}
					<span
						aria-hidden
						className="cursor-blink ml-0.5 inline-block h-4 w-[9px] translate-y-[2px] bg-terminal-fg"
					/>
				</p>
			</TerminalWindow>

			{/* stack */}
			<Panel label="stack" index={1}>
				<div className="flex flex-wrap gap-2.5">
					{profile.stack.map((tech) => (
						<span
							key={tech}
							className="border border-border-strong px-3 py-1.5 font-mono text-[13px] font-medium text-foreground"
						>
							{tech}
						</span>
					))}
				</div>
			</Panel>

			{/* status */}
			<Panel label="status" index={2}>
				<div className="space-y-3 text-[15px]">
					<p className="flex items-center gap-2.5 font-semibold text-foreground">
						<span aria-hidden className="size-2 bg-terminal-green" />
						available for work
					</p>
					<div className="flex gap-3 text-muted">
						<span className="w-20 shrink-0 text-muted-foreground">
							location
						</span>
						<span className="text-foreground">{profile.location}</span>
					</div>
					<div className="flex gap-3 text-muted">
						<span className="w-20 shrink-0 text-muted-foreground">focus</span>
						<span className="text-foreground">{profile.tags.join(", ")}</span>
					</div>
				</div>
			</Panel>

			{/* contact */}
			<Panel label="contact" index={3}>
				<ul className="-my-2">
					{socials.map((s) => (
						<li key={s.label}>
							<a
								href={s.href}
								{...(s.href.startsWith("mailto:")
									? {}
									: { target: "_blank", rel: "noreferrer" })}
								className="group flex items-center gap-3 py-2 text-[15px]"
							>
								<s.icon
									className="size-[18px] shrink-0 text-muted transition-colors group-hover:text-foreground"
									strokeWidth={1.75}
								/>
								<span className="flex-1 font-semibold text-foreground">
									{s.label.toLowerCase()}
								</span>
								<ArrowUpRight
									className="size-4 -translate-x-1 text-muted opacity-0 transition-[opacity,transform,color] duration-200 group-hover:translate-x-0 group-hover:text-foreground group-hover:opacity-100"
									strokeWidth={1.75}
								/>
							</a>
						</li>
					))}
				</ul>
			</Panel>
		</div>
	);
}
