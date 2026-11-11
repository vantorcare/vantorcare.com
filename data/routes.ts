import { locations } from "./locations";
import { services } from "./services";
import { guides } from "./guides";
import { posts } from "./posts";

export const staticRoutes = [
	"/",
	"/about",
	"/careers",
	"/insurance",
	"/contact",
	"/faq",
	"/referrals",
	"/locations",
	"/services",
	"/guides",
	"/guides/glossary",
	"/blog",
];

export function siteRoutes() {
	return [
		...staticRoutes,
		...locations.map((l) => `/locations/${l.slug}`),
		...services.map((s) => `/services/${s.slug}`),
		...guides.map((g) => `/guides/${g.slug}`),
		...posts.map((p) => `/blog/${p.slug}`),
	];
}
