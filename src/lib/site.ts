import type { LucideIcon } from "lucide-react";
import { Github, Linkedin, Mail, Youtube } from "lucide-react";

/**
 * Single source of truth for the portfolio's content. Swap these values to
 * re-skin the template — no component edits required.
 */

export type NavItem = {
	label: string;
	to: string;
	/** A short kanji "stamp" shown as a quiet zen accent next to the label. */
	kanji: string;
};

export type SocialLink = {
	label: string;
	href: string;
	icon: LucideIcon;
};

export type SkillGroup = {
	title: string;
	/** kanji watermark for the card corner */
	kanji: string;
	items: string[];
};

export const site = {
	/** Short brand shown in the header, e.g. "./name". */
	brand: "佐藤",
	brandRoman: "sato.dev",
	title: "Sato — Full-Stack Developer",
	description:
		"Portfolio of a full-stack developer. Calm, square, zen-minimal — built with TanStack Start.",
	url: "https://example.com",
} as const;

export const nav: NavItem[] = [
	{ label: "Profile", to: "/", kanji: "人" },
	{ label: "Projects", to: "/projects", kanji: "作" },
	{ label: "Experience", to: "/experience", kanji: "道" },
	{ label: "Writing", to: "/writing", kanji: "筆" },
	{ label: "Contact", to: "/contact", kanji: "縁" },
];

export const profile = {
	name: "Aoi Sato",
	handle: "sato.dev",
	roles: ["Full-Stack Developer", "TypeScript", "Systems & UI"],
	location: "Kyoto, Japan",
	email: "hello@sato.dev",
	github: "/aoisato",
	/** A short statement, displayed in the lead "INTRO" card. */
	intro:
		"I build full-stack products end to end — from data models and APIs to the last pixel of the interface. I care about software that is calm to use, fast to load, and quiet to maintain.",
	/** Pull-quote shown beneath the intro. */
	note: "I favour clarity over cleverness: small, composable pieces, strong types, and interfaces that get out of the way.",
} as const;

export const socials: SocialLink[] = [
	{ label: "GitHub", href: "https://github.com", icon: Github },
	{ label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
	{ label: "YouTube", href: "https://youtube.com", icon: Youtube },
	{ label: "Email", href: "mailto:hello@sato.dev", icon: Mail },
];

/** Compact tags shown in the sidebar "FOCUS" card. */
export const focus: string[] = [
	"Product Eng",
	"Design Systems",
	"DX / Tooling",
	"Performance",
	"Accessibility",
];

/** The skill grid — mirrors the reference layout, generic dev content. */
export const skills: SkillGroup[] = [
	{
		title: "Core Stack",
		kanji: "核",
		items: ["TypeScript", "React", "TanStack", "Node.js", "PostgreSQL"],
	},
	{
		title: "Languages",
		kanji: "語",
		items: ["TypeScript", "Go", "Rust", "Python", "SQL"],
	},
	{
		title: "Frontend",
		kanji: "面",
		items: ["Tailwind", "Vite", "Web Platform", "Motion", "Accessibility"],
	},
	{
		title: "Infra & Data",
		kanji: "礎",
		items: ["Docker", "CI/CD", "Drizzle", "Redis", "Observability"],
	},
];
