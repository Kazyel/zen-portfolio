import { createFileRoute } from "@tanstack/react-router";
import { Card } from "#/features/cards/card";
import { Learning } from "#/features/cards/learning";
import { TechStack } from "#/features/cards/tech-stack";
import { Tools } from "#/features/cards/tools";
import { AboutTerminal } from "#/features/terminal/about-terminal";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
    return (
        <div className="space-y-5 sm:space-y-6">
            <AboutTerminal />

            <div className="grid grid-cols-1 items-start gap-5 sm:gap-6 lg:grid-cols-[2fr_1fr_1fr]">
                <Card label="tech stack" index={1}>
                    <TechStack />
                </Card>
                <Card label="learning" index={2}>
                    <Learning />
                </Card>
                <Card label="tools" index={3}>
                    <Tools />
                </Card>
            </div>
        </div>
    );
}
