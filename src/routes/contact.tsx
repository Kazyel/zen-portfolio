import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "#/components/coming-soon";

export const Route = createFileRoute("/contact")({
	component: () => (
		<ComingSoon
			title="Contact"
			blurb="A way to start a conversation — form and links coming soon. Until then, email works."
		/>
	),
});
