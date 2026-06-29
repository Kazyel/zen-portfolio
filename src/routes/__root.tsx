import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import { SiteFooter } from "#/components/site-footer";
import { SiteHeader } from "#/components/site-header";
import { site } from "#/lib/site";
import { THEME_SCRIPT } from "#/lib/theme";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ title: site.title },
			{ name: "description", content: site.description },
			{ name: "theme-color", content: "#0e0e0c" },
			{ property: "og:title", content: site.title },
			{ property: "og:description", content: site.description },
			{ property: "og:type", content: "website" },
		],
		links: [
			// Fonts: warm up the connection, then load Inter + JetBrains Mono.
			{ rel: "preconnect", href: "https://fonts.googleapis.com" },
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous",
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap",
			},
			{ rel: "stylesheet", href: appCss },
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			className="dark"
			style={{ colorScheme: "dark" }}
			suppressHydrationWarning
		>
			<head>
				{/* No-FOUC: resolve + apply the stored theme before first paint. */}
				{/* biome-ignore lint/security/noDangerouslySetInnerHtml: trusted inline theme bootstrap */}
				<script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
				<HeadContent />
			</head>
			<body>
				<div className="flex min-h-dvh flex-col">
					<SiteHeader />
					<main className="w-full flex-1 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
						{children}
					</main>
					<SiteFooter />
				</div>

				<TanStackDevtools
					config={{ position: "bottom-right" }}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
