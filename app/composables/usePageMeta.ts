import { site } from "~~/data/site";

interface PageMeta {
	title: string;
	description?: string;
	path: string;
}

export function usePageMeta({ title, description, path }: PageMeta) {
	const url = `${site.url}${path === "/" ? "" : path}`;
	useSeoMeta({
		title,
		description,
		ogTitle: `${title} | ${site.name}`,
		ogDescription: description,
		ogUrl: url,
		ogType: "website",
		ogSiteName: site.name,
	});
	useHead({ link: [{ rel: "canonical", href: url }] });
}
