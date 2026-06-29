import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "#/components/coming-soon";

export const Route = createFileRoute("/experience")({
    component: () => (
        <ComingSoon
            title="Experience"
            blurb="A timeline of roles, teams, and the path so far. Coming next."
        />
    ),
});
