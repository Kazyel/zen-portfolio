import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { profile } from "#/data/site";
import { delay } from "#/lib/animation";
import { AsciiBanner } from "./ascii-banner";
import { TerminalCommand } from "./terminal-command";
import { Cmd } from "./terminal-prompt";
import { TerminalWindow } from "./terminal-window";

export function AboutTerminal() {
    return (
        <TerminalWindow title="~/about" index={0}>
            <div className="reveal" style={delay(0)}>
                <AsciiBanner />
            </div>

            <div>
                <Cmd cmd="whoami" at={100} />
                <h1
                    className="reveal mt-1.5 font-mono text-[15px] font-normal text-terminal-fg"
                    style={delay(420)}
                >
                    {profile.name}
                    <span className="text-terminal-muted"> — {profile.role}</span>
                </h1>
            </div>

            <div>
                <Cmd cmd="cat ~/about" at={560} />
                <div className="reveal mt-1.5 text-terminal-muted" style={delay(900)}>
                    {profile.about.map((line) => (
                        <p key={line}>- {line}</p>
                    ))}
                </div>
            </div>

            <div className="reveal" style={delay(1040)}>
                <TerminalCommand>
                    <Link
                        to="/contact"
                        className="flex shrink-0 items-center gap-1.5 border border-terminal-accent/60 px-3 py-1 font-mono text-[13px] text-terminal-accent transition-colors duration-200 hover:bg-terminal-accent hover:text-terminal"
                    >
                        ./contact
                        <ArrowUpRight className="size-3.5" strokeWidth={2} />
                    </Link>
                </TerminalCommand>
            </div>
        </TerminalWindow>
    );
}
