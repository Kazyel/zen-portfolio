import { SiCplusplus } from "react-icons/si";
import { learning } from "#/data/site";
import { CardSection } from "./card";
import { Tile } from "./tile";

export function Learning() {
    return (
        <div className="space-y-6">
            <CardSection label="reading">
                <p className="text-[15px] text-foreground">
                    {learning.reading.join(" · ")}
                </p>
            </CardSection>

            <CardSection label="languages">
                <div className="flex gap-2">
                    <Tile name="C++" Icon={SiCplusplus} />
                    <Tile name="C#" abbreviation="C#" />
                </div>
            </CardSection>
        </div>
    );
}
