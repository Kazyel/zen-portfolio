import { SiCplusplus } from "react-icons/si";
import { learning } from "#/data/site";
import { Section } from "./card";
import { Tile } from "./tech-stack";

export function Learning() {
    return (
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
    );
}
