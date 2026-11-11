<script setup lang="ts">
usePageMeta({
	title: "Glossary of Home Care Terms",
	description:
		"Short definitions of the home care terms families see on our pages: PICC line, TEFRA and wound vac (negative pressure wound therapy).",
	path: "/guides/glossary",
});

const terms = [
	{
		id: "picc-line",
		term: "PICC line",
		paragraphs: [
			"The IV line many patients go home with for long courses of IV medication. Patients who would once have stayed in the hospital for six weeks of IV antibiotics now go home with a PICC line and a pump.",
			"Our infusion nurses provide PICC, midline and implanted port care. They teach the patient or a family member to connect and disconnect safely, handle the weekly dressing change and lab draw, watch for signs of line infection or clotting, and report lab results to the prescriber the same day.",
		],
		links: [{ label: "Home infusion nursing", to: "/services/infusion-therapy" }],
	},
	{
		id: "tefra",
		term: "TEFRA",
		paragraphs: [
			"The Medicaid program that covers private duty nursing for children in South Carolina. In every state we serve, Medicaid covers private duty nursing for children who qualify medically, regardless of household income, through programs like TEFRA or a state waiver. In the other states we serve, it is covered through CAP/C in North Carolina, the GAPP program in Georgia and Katie Beckett in Tennessee.",
			"Our pediatric intake coordinators walk families through the application and the physician paperwork.",
		],
		links: [
			{ label: "Pediatric private duty nursing", to: "/services/pediatric-private-duty" },
			{ label: "Insurance and payment", to: "/insurance" },
		],
	},
	{
		id: "wound-vac",
		term: "Wound vac (negative pressure wound therapy)",
		paragraphs: [
			"Wound vac is the common name for negative pressure wound therapy. Wound vac changes are typically three times a week, and our nurses handle the pump, canister and supply orders.",
			"Every Vantor branch has at least one nurse certified in wound care who reviews every open wound on the branch's census each week, and we measure and photograph each wound at least weekly and share the images with the ordering physician or wound clinic.",
		],
		links: [{ label: "Home wound care", to: "/services/wound-care" }],
	},
];
</script>

<template>
	<div class="container page">
		<Breadcrumbs :items="[{ label: 'Condition guides', to: '/guides' }, { label: 'Glossary' }]" />
		<div class="page-grid">
			<article class="prose">
				<h1>Glossary</h1>
				<p class="lede">
					Short, plain-language definitions of terms you will see on our service and insurance pages. They are not a
					substitute for your own care team's advice.
				</p>
				<section v-for="t in terms" :id="t.id" :key="t.id" class="glossary-entry">
					<h2>{{ t.term }}</h2>
					<p v-for="(para, i) in t.paragraphs" :key="i">{{ para }}</p>
					<p class="meta">
						See
						<template v-for="(link, i) in t.links" :key="link.to">
							<NuxtLink :to="link.to">{{ link.label }}</NuxtLink><span v-if="i < t.links.length - 1"> and </span>
						</template>
					</p>
				</section>
			</article>
			<aside class="sidebar">
				<div class="card">
					<h2 class="card-title">Terms on this page</h2>
					<ul class="link-list">
						<li v-for="t in terms" :key="t.id">
							<a :href="`#${t.id}`">{{ t.term }}</a>
						</li>
					</ul>
				</div>
				<CallBox />
			</aside>
		</div>
	</div>
</template>
