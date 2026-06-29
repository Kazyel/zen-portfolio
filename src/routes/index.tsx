import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import { SiCplusplus } from "react-icons/si";
import { AsciiBanner } from "#/components/ascii-banner";
import { Kanji } from "#/components/motifs";
import { TechStack, Tile } from "#/components/tech-stack";
import { learning, profile, site, tools } from "#/lib/site";

export const Route = createFileRoute("/")({ component: Home });

const rise = (i: number) => ({ "--rise-index": i }) as CSSProperties;
const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

function Prompt() {
    return (
        <>
            <span className="text-terminal-accent">{site.brand}</span>
            <span className="text-terminal-muted">:~$</span>
        </>
    );
}

function Cmd({ cmd, at }: { cmd: string; at: number }) {
    return (
        <p className="text-terminal-fg">
            <Prompt />{" "}
            <span
                className="typed"
                style={
                    { "--n": cmd.length, "--delay": `${at}ms` } as CSSProperties
                }
            >
                {cmd}
            </span>
        </p>
    );
}

function TerminalWindow({
    title,
    index,
    children,
}: {
    title: string;
    index: number;
    children: ReactNode;
}) {
    return (
        <section
            style={rise(index)}
            className="animate-rise flex w-full flex-col border border-terminal-border bg-terminal font-mono text-[15px]"
        >
            <div className="flex items-center gap-2.5 border-b border-terminal-border px-5 py-3">
                <span aria-hidden className="flex gap-1.5">
                    <span className="size-3 bg-terminal-border" />
                    <span className="size-3 bg-terminal-border" />
                    <span className="size-3 bg-terminal-border" />
                </span>
                <span className="ml-1 text-[13px] text-terminal-muted">
                    {title}
                </span>
            </div>
            <div className="flex-1 space-y-6 p-6 leading-relaxed sm:p-9">
                {children}
            </div>
        </section>
    );
}

function Corners() {
    const base =
        "pointer-events-none absolute size-2.5 border-border-strong/70";
    return (
        <>
            <span
                aria-hidden
                className={`${base} left-2.5 top-2.5 border-l border-t`}
            />
            <span
                aria-hidden
                className={`${base} right-2.5 top-2.5 border-r border-t`}
            />
            <span
                aria-hidden
                className={`${base} bottom-2.5 left-2.5 border-b border-l`}
            />
            <span
                aria-hidden
                className={`${base} bottom-2.5 right-2.5 border-b border-r`}
            />
        </>
    );
}

function Panel({
    label,
    index,
    motif,
    children,
}: {
    label: string;
    index: number;
    motif: ReactNode;
    children: ReactNode;
}) {
    return (
        <section
            style={rise(index)}
            className="group animate-rise relative overflow-hidden border border-border bg-surface p-7 transition-colors duration-200 hover:border-accent/50 sm:p-8"
        >
            {motif}
            <Corners />
            <div className="relative">
                <div className="flex items-baseline justify-between gap-4">
                    <h2 className="glitch font-display text-2xl font-bold uppercase tracking-wide text-foreground">
                        {label}
                    </h2>
                    <span
                        aria-hidden
                        className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground"
                    >
                        {`0${index} //`}
                    </span>
                </div>
                <div className="mt-6">{children}</div>
            </div>
        </section>
    );
}

function Section({ label, children }: { label: string; children: ReactNode }) {
    return (
        <div>
            <p className="font-mono text-[14px] uppercase tracking-[0.2em] text-muted-foreground">
                {label}
            </p>
            <div className="mt-3">{children}</div>
        </div>
    );
}

const kanjiMotif = (char: string) => (
    <Kanji
        char={char}
        className="pointer-events-none absolute -bottom-10 -right-4 size-48 text-foreground opacity-[0.06] transition-[color,opacity] duration-300 group-hover:text-accent group-hover:opacity-[0.16]"
    />
);

function Home() {
    return (
        <div className="space-y-5 sm:space-y-6">
            <TerminalWindow title="~/about" index={0}>
                <div className="reveal" style={delay(0)}>
                    <AsciiBanner />
                </div>
                <div>
                    <Cmd cmd="whoami" at={250} />
                    <p
                        className="reveal mt-1.5 text-terminal-muted"
                        style={delay(800)}
                    >
                        {profile.whoami}
                    </p>
                </div>
                <div>
                    <Cmd cmd="cat ~/about" at={1000} />
                    <div
                        className="reveal mt-1.5 text-terminal-muted"
                        style={delay(1550)}
                    >
                        {profile.about.map((line) => (
                            <p key={line}>- {line}</p>
                        ))}
                    </div>
                </div>
                <p className="reveal text-terminal-fg" style={delay(1800)}>
                    <Prompt />{" "}
                    <span
                        aria-hidden
                        className="cursor-blink ml-0.5 inline-block h-4 w-[9px] translate-y-[2px] bg-terminal-fg"
                    />
                </p>
            </TerminalWindow>

            <div className="grid grid-cols-1 items-start gap-5 sm:gap-6 lg:grid-cols-[2fr_1fr_1fr]">
                <Panel label="tech stack" index={1} motif={kanjiMotif("技")}>
                    <TechStack />
                </Panel>

                <Panel label="learning" index={2} motif={kanjiMotif("学")}>
                    <div className="space-y-6">
                        <Section label="reading">
                            <p className="text-[15px] text-foreground">
                                {learning.reading.join(" · ")}
                            </p>
                        </Section>
                        <Section label="languages">
                            <div className="flex gap-2">
                                <Tile name="C++" Icon={SiCplusplus} />
                                <Tile name="C#" abbreviation="C#" />
                            </div>
                        </Section>
                    </div>
                </Panel>

                <Panel label="tools" index={3} motif={kanjiMotif("具")}>
                    <ul className="space-y-2.5">
                        {tools.map((tool) => (
                            <li key={tool.name}>
                                <a
                                    href={tool.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group/tool flex items-center gap-2 border border-border bg-surface-2 px-4 py-2.5 text-[15px] transition-colors duration-200 hover:border-accent/50"
                                >
                                    <span className="font-semibold text-foreground">
                                        {tool.name}
                                    </span>
                                    <span className="text-muted">
                                        — {tool.desc}
                                    </span>
                                    <ArrowUpRight
                                        className="ml-auto size-4 shrink-0 text-muted transition-all duration-150 group-hover/tool:-translate-y-px group-hover/tool:translate-x-0.5 group-hover/tool:text-foreground"
                                        strokeWidth={1.75}
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </Panel>
            </div>
        </div>
    );
}
