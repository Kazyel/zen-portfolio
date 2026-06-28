import { createFileRoute } from "@tanstack/react-router";
import { Github, Mail, MapPin } from "lucide-react";
import type { CSSProperties } from "react";
import { Card } from "#/components/ui/card";
import { SectionHeading } from "#/components/ui/section-heading";
import { Tag } from "#/components/ui/tag";
import { focus, profile, skills, socials } from "#/lib/site";

export const Route = createFileRoute("/")({ component: Home });

/** Helper to set the stagger index as a CSS custom property. */
const rise = (i: number) => ({ "--rise-index": i }) as CSSProperties;

function Home() {
	return (
		<div className="grid items-start gap-6 lg:grid-cols-[19rem_1fr]">
			{/* ── Sidebar: identity ─────────────────────────────────────────── */}
			<div className="grid gap-6">
				<Card className="animate-rise" style={rise(0)}>
					{/* Square avatar with a 1px accent ring (skill: subtle image outline). */}
					<div className="mb-5 grid size-20 place-items-center border border-accent/40 bg-surface-2 outline outline-1 -outline-offset-1 outline-white/10">
						<span className="font-display text-3xl text-accent">青</span>
					</div>

					<h1 className="font-display text-2xl font-bold leading-tight">
						{profile.name}
					</h1>
					<p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
						{profile.roles.join(" · ")}
					</p>

					<dl className="mt-5 grid gap-2.5 text-sm text-muted">
						<div className="flex items-center gap-2.5">
							<MapPin
								className="size-4 shrink-0 text-accent/80"
								strokeWidth={1.75}
							/>
							<span>{profile.location}</span>
						</div>
						<a
							href={`mailto:${profile.email}`}
							className="flex items-center gap-2.5 transition-colors hover:text-foreground"
						>
							<Mail
								className="size-4 shrink-0 text-accent/80"
								strokeWidth={1.75}
							/>
							<span>{profile.email}</span>
						</a>
						<div className="flex items-center gap-2.5">
							<Github
								className="size-4 shrink-0 text-accent/80"
								strokeWidth={1.75}
							/>
							<span>{profile.github}</span>
						</div>
					</dl>

					{/* Social links — each a 40×40 hit area (skill). */}
					<div className="mt-6 flex flex-wrap gap-2">
						{socials.map((s) => (
							<a
								key={s.label}
								href={s.href}
								target="_blank"
								rel="noreferrer"
								aria-label={s.label}
								className="grid size-10 place-items-center border border-border bg-surface-2 text-muted transition-[color,border-color,scale] duration-200 hover:border-border-strong hover:text-foreground active:scale-[0.96]"
							>
								<s.icon className="size-[18px]" strokeWidth={1.75} />
							</a>
						))}
					</div>
				</Card>

				<Card className="animate-rise" style={rise(1)}>
					<SectionHeading kanji="点">Focus</SectionHeading>
					<div className="mt-4 flex flex-wrap gap-2">
						{focus.map((f) => (
							<Tag key={f}>{f}</Tag>
						))}
					</div>
				</Card>
			</div>

			{/* ── Main: intro + skills ──────────────────────────────────────── */}
			<div className="grid gap-6">
				<Card className="animate-rise" style={rise(1)}>
					<SectionHeading kanji="序">Intro</SectionHeading>
					<p className="mt-5 text-[15px] leading-relaxed text-muted">
						{profile.intro}
					</p>
					<blockquote className="mt-5 border-l-2 border-accent bg-accent-soft py-3 pl-4 pr-3 text-sm italic leading-relaxed text-muted">
						{profile.note}
					</blockquote>
				</Card>

				<div className="grid gap-6 sm:grid-cols-2">
					{skills.map((group, i) => (
						<Card
							key={group.title}
							className="animate-rise"
							style={rise(2 + i)}
						>
							<SectionHeading kanji={group.kanji}>{group.title}</SectionHeading>
							<div className="mt-4 flex flex-wrap gap-2">
								{group.items.map((item) => (
									<Tag key={item}>{item}</Tag>
								))}
							</div>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
