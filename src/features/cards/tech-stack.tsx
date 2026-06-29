import {
    SiCss,
    SiDocker,
    SiGithubactions,
    SiGo,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiPython,
    SiReact,
    SiRedis,
    SiSass,
    SiSqlite,
    SiTailwindcss,
    SiTypescript,
    SiVite,
    SiVitest,
} from "react-icons/si";
import { type Tech, Tile } from "#/features/cards/tile";

const GROUPS: { label: string; items: Tech[] }[] = [
    {
        label: "front-end",
        items: [
            { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
            { name: "Vite", Icon: SiVite, color: "#646CFF" },
            { name: "React", Icon: SiReact, color: "#61DAFB" },
            { name: "Next.js", Icon: SiNextdotjs },
            { name: "TanStack", abbreviation: "TAN" },
            { name: "Zustand", abbreviation: "ZUS" },
            { name: "CSS", Icon: SiCss, color: "#663399" },
            { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
            { name: "Sass", Icon: SiSass, color: "#CC6699" },
        ],
    },
    {
        label: "back-end",
        items: [
            { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
            { name: "Python", Icon: SiPython, color: "#3776AB" },
            { name: "Go", Icon: SiGo, color: "#00ADD8" },
            { name: "SQLite", Icon: SiSqlite, color: "#0F80CC" },
            { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
            { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
            { name: "Redis", Icon: SiRedis, color: "#FF4438" },
            { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
        ],
    },
    {
        label: "devops & testing",
        items: [
            { name: "Vitest", Icon: SiVitest, color: "#6E9F18" },
            { name: "Playwright", abbreviation: "PW" },
            { name: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF" },
            { name: "Docker", Icon: SiDocker, color: "#2496ED" },
        ],
    },
];

export function TechStack() {
    return (
        <div className="space-y-5">
            {GROUPS.map((group) => (
                <div key={group.label}>
                    <p className="font-mono text-[14px] uppercase tracking-[0.2em] text-muted-foreground">
                        {group.label}
                    </p>

                    <ul aria-label={group.label} className="mt-2.5 flex flex-wrap gap-2">
                        {group.items.map((t) => (
                            <li key={t.name}>
                                <Tile {...t} />
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
