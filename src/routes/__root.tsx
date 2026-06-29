import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { SiteHeader } from "#/components/layout/site-header";
import { StatusBar } from "#/components/layout/status-bar";
import { profile, site, socials } from "#/data/site";
import { LAIN_SCRIPT } from "#/features/lain/lain";
import { LainMode } from "#/features/lain/lain-mode";
import { CommandPalette } from "#/features/terminal/command-palette";
import { THEME_SCRIPT } from "#/features/theme/theme";
import appCss from "../styles.css?url";

const PERSON_LD = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    url: site.url,
    sameAs: socials.filter((s) => s.href.startsWith("http")).map((s) => s.href),
});

export const Route = createRootRoute({
    head: () => ({
        meta: [
            { charSet: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            { title: site.title },
            { name: "description", content: site.description },
            { name: "author", content: site.author },
            { name: "theme-color", content: "#0e0e0c" },
            { property: "og:title", content: site.title },
            { property: "og:description", content: site.description },
            { property: "og:type", content: "website" },
            { property: "og:url", content: site.url },
            { property: "og:site_name", content: site.author },
            { name: "twitter:card", content: "summary" },
            { name: "twitter:title", content: site.title },
            { name: "twitter:description", content: site.description },
        ],
        links: [
            { rel: "preconnect", href: "https://fonts.googleapis.com" },
            {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
                crossOrigin: "anonymous",
            },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Sekuya&display=swap",
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
                {/* biome-ignore lint/security/noDangerouslySetInnerHtml: trusted inline bootstrap */}
                <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
                {/* biome-ignore lint/security/noDangerouslySetInnerHtml: trusted inline bootstrap */}
                <script dangerouslySetInnerHTML={{ __html: LAIN_SCRIPT }} />
                <script
                    type="application/ld+json"
                    /* biome-ignore lint/security/noDangerouslySetInnerHtml: trusted structured data */
                    dangerouslySetInnerHTML={{ __html: PERSON_LD }}
                />
                <HeadContent />
            </head>
            <body>
                <a
                    href="#main"
                    className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:border focus:border-accent focus:bg-surface focus:px-3 focus:py-1.5 focus:font-mono focus:text-sm focus:text-foreground"
                >
                    skip to content
                </a>

                <div className="flex min-h-dvh flex-col pb-7">
                    <SiteHeader />

                    <main id="main" className="w-full flex-1 px-4 sm:px-6 py-4 lg:px-8">
                        {children}
                    </main>
                </div>

                <LainMode />
                <CommandPalette />
                <StatusBar />

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
