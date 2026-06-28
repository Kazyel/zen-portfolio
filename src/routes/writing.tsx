import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "#/components/coming-soon";

export const Route = createFileRoute("/writing")({
	component: () => (
		<ComingSoon
			title="Writing"
			kanji="筆"
			blurb="Notes and essays on building calm, fast software. The first posts are on the way."
		/>
	),
});
