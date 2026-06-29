import { profile } from "#/data/site";
import { delay } from "#/lib/animation";
import { AsciiBanner } from "./ascii-banner";
import { Cmd, Prompt } from "./terminal-prompt";
import { TerminalWindow } from "./terminal-window";

export function AboutTerminal() {
    return (
        <TerminalWindow title="~/about" index={0}>
            <div className="reveal" style={delay(0)}>
                <AsciiBanner />
            </div>

            <div>
                <Cmd cmd="whoami" at={250} />
                <p className="reveal mt-1.5 text-terminal-muted" style={delay(800)}>
                    {profile.whoami}
                </p>
            </div>

            <div>
                <Cmd cmd="cat ~/about" at={1000} />
                <div className="reveal mt-1.5 text-terminal-muted" style={delay(1550)}>
                    {profile.about.map((line) => (
                        <p key={line}>- {line}</p>
                    ))}
                </div>
            </div>

            <p className="reveal text-terminal-fg" style={delay(1800)}>
                <Prompt />{" "}
                <span
                    aria-hidden
                    className="cursor-blink ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-terminal-fg"
                />
            </p>
        </TerminalWindow>
    );
}
