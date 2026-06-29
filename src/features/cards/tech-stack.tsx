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
            { name: "TypeScript", Icon: SiTypescript },
            { name: "Vite", Icon: SiVite },
            { name: "React", Icon: SiReact },
            { name: "Next.js", Icon: SiNextdotjs },
            { name: "TanStack", abbreviation: "TAN" },
            { name: "Zustand", abbreviation: "ZUS" },
            { name: "CSS", Icon: SiCss },
            { name: "Tailwind", Icon: SiTailwindcss },
            { name: "Sass", Icon: SiSass },
        ],
    },
    {
        label: "back-end",
        items: [
            { name: "Node.js", Icon: SiNodedotjs },
            { name: "Python", Icon: SiPython },
            { name: "Go", Icon: SiGo },
            { name: "SQLite", Icon: SiSqlite },
            { name: "MySQL", Icon: SiMysql },
            { name: "PostgreSQL", Icon: SiPostgresql },
            { name: "Redis", Icon: SiRedis },
            { name: "MongoDB", Icon: SiMongodb },
        ],
    },
    {
        label: "devops & testing",
        items: [
            { name: "Vitest", Icon: SiVitest },
            { name: "Playwright", abbreviation: "PW" },
            { name: "GitHub Actions", Icon: SiGithubactions },
            { name: "Docker", Icon: SiDocker },
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

                    <div className="mt-2.5 flex flex-wrap gap-2">
                        {group.items.map((t) => (
                            <Tile key={t.name} {...t} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
