import type { LucideIcon } from "lucide-react";
import { Github, Linkedin, Mail, Youtube } from "lucide-react";

/**
 * Single source of truth for the portfolio's content. Swap these values to
 * re-skin the template — no component edits required.
 */

export type NavItem = {
	label: string;
	to: string;
};

export type SocialLink = {
	label: string;
	href: string;
	icon: LucideIcon;
};

export const site = {
	/** Short brand shown in the header. */
	brand: "kazyel",
	title: "kazyel — full-stack developer",
	description:
		"Portfolio of a full-stack developer. Clean, minimal, terminal-flavoured — built with TanStack Start.",
	url: "https://example.com",
} as const;

export const nav: NavItem[] = [
	{ label: "profile", to: "/" },
	{ label: "projects", to: "/projects" },
	{ label: "experience", to: "/experience" },
	{ label: "writing", to: "/writing" },
	{ label: "contact", to: "/contact" },
];

export const profile = {
	name: "aoi sato",
	role: "full-stack developer",
	location: "kyoto, japan",
	email: "hello@kazyel.dev",
	/** The terminal `cat ~/about` body. */
	about: [
		"i build full-stack products end to end — from data models",
		"and apis to the last pixel of the interface.",
	],
	/** Highlighted tech, rendered as the bright line in the about panel. */
	stack: ["typescript", "react", "node", "postgres", "docker", "go"],
	/** Quiet tag line / focus areas. */
	tags: ["product eng", "design systems", "performance"],
} as const;

export const socials: SocialLink[] = [
	{ label: "GitHub", href: "https://github.com", icon: Github },
	{ label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
	{ label: "YouTube", href: "https://youtube.com", icon: Youtube },
	{ label: "Email", href: "mailto:hello@kazyel.dev", icon: Mail },
];
