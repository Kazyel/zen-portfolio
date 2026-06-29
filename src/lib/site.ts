import type { LucideIcon } from "lucide-react";
import { Globe, Linkedin, Mail } from "lucide-react";

export type NavItem = {
    label: string;
    to: string;
};

export type SocialLink = {
    label: string;
    href: string;
    icon: LucideIcon;
};

export type Tool = {
    name: string;
    desc: string;
    href: string;
};

export const site = {
    brand: "kazyel",
    title: "kazyel | full-stack developer",
    description:
        "Portfolio of a Brazilian full-stack developer. Clean, minimal, terminal-flavoured — built with TanStack Start.",
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
    whoami: "brazilian full-stack developer",
    about: [
        "student & intern, mostly self-taught",
        "chill, curious and creative",
        "i like video games, music and animes / mangas",
        "fluent portuguese · good enough english",
    ],
} as const;

export const learning = {
    reading: ["the pragmatic programmer", "clean code"],
} as const;

export const tools: Tool[] = [
    { name: "CachyOS", desc: "current distro", href: "https://cachyos.org" },
    { name: "Ghostty", desc: "terminal emulator", href: "https://ghostty.org" },
    { name: "Starship", desc: "shell prompt", href: "https://starship.rs" },
    {
        name: "VS Code",
        desc: "coding editor",
        href: "https://code.visualstudio.com",
    },
];

export const socials: SocialLink[] = [
    { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { label: "Portfolio", href: "/", icon: Globe },
    { label: "Email", href: "mailto:hello@kazyel.dev", icon: Mail },
];
