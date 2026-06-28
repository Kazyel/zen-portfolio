import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "#/components/coming-soon";

export const Route = createFileRoute("/projects")({
	component: () => (
		<ComingSoon
			title="Projects"
			kanji="作"
			blurb="Selected work and case studies will live here — built from the same square, data-driven cards."
		/>
	),
});
