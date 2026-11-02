import { site } from "../../data/site";
import { services } from "../../data/services";
import { guides } from "../../data/guides";
import { locations } from "../../data/locations";
import { posts } from "../../data/posts";

const link = (label: string, path: string, line: string) =>
	`- [${label}](${site.url}${path === "/" ? "" : path}): ${line}`;

const andList = (items: string[]) =>
	items.length < 2 ? items.join("") : `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;

export default defineEventHandler((event) => {
	setHeader(event, "content-type", "text/plain; charset=utf-8");

	const states = [...new Set(locations.map((l) => l.stateName))];

	const sections: [string, string[]][] = [
		[
			"Services",
			[
				link("All services", "/services", "Home health visits and private duty nursing, grouped by type of care."),
				...services.map((s) => link(s.name, `/services/${s.slug}`, s.summary)),
			],
		],
		[
			"Insurance and referrals",
			[
				link(
					"Insurance and payment",
					"/insurance",
					"Medicare, Medicare Advantage, Medicaid, commercial plans, VA Community Care, long-term care insurance and private pay.",
				),
				link(
					"Making a referral",
					"/referrals",
					"How physicians, case managers and discharge planners refer patients, and what to send.",
				),
			],
		],
		[
			"Condition guides",
			[
				link("All condition guides", "/guides", "Nurse-reviewed guides to managing common conditions at home."),
				...guides.map((g) => link(g.name, `/guides/${g.slug}`, g.summary)),
			],
		],
		[
			"Locations",
			[
				link("All locations", "/locations", "Every branch and the counties it serves."),
				...locations.map((l) =>
					link(`${l.city}, ${l.state}`, `/locations/${l.slug}`, `Serves ${andList(l.counties)} counties.`),
				),
			],
		],
		[
			"Blog",
			[
				link("Blog", "/blog", "Notes from our nurses and therapists on Medicare, discharge and caring for someone at home."),
				...posts.map((p) => link(p.title, `/blog/${p.slug}`, p.description)),
			],
		],
		[
			"Company",
			[
				link("About", "/about", `How ${site.name} started in ${site.hq.city}, ${site.hq.state} in ${site.founded} and where it is today.`),
				link("FAQ", "/faq", "How fast care starts, who pays, choosing an agency and what happens after hours."),
				link("Careers", "/careers", "Nursing, therapy and aide jobs."),
				link("Contact", "/contact", `Intake at ${site.intakePhone}, plus phone numbers and addresses for every branch.`),
			],
		],
	];

	const intro = `${site.name} provides skilled home health and private duty nursing across ${andList(states)}, from ${locations.length} branches. Physician-ordered home health covers nursing, physical, occupational and speech therapy, wound care, infusion therapy and home health aides; private duty nursing places a nurse in the home for shifts of four to twenty-four hours for adults and medically complex children. The company was founded in ${site.founded} and is based in ${site.hq.city}, ${site.hq.state}. ${site.hours} Intake: ${site.intakePhone}.`;

	return `# ${site.name}

> ${site.tagline}.

${intro}

${sections.map(([title, lines]) => `## ${title}\n\n${lines.join("\n")}`).join("\n\n")}
`;
});
