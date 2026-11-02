import { siteRoutes } from "./data/routes";

export default defineNuxtConfig({
	compatibilityDate: "2026-09-01",
	devtools: { enabled: false },
	css: ["~/assets/main.css"],
	app: {
		head: {
			htmlAttrs: { lang: "en" },
			meta: [
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{ name: "theme-color", content: "#1f4e5f" },
			],
			link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
		},
	},
	nitro: {
		prerender: {
			crawlLinks: false,
			routes: [...siteRoutes(), "/sitemap.xml", "/llms.txt"],
		},
	},
});
