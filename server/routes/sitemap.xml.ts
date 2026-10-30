import { siteRoutes } from "../../data/routes";
import { site } from "../../data/site";

export default defineEventHandler((event) => {
	setHeader(event, "content-type", "application/xml; charset=utf-8");
	const urls = siteRoutes()
		.map((path) => `  <url><loc>${site.url}${path === "/" ? "" : path}</loc></url>`)
		.join("\n");
	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
});
