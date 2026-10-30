<script setup lang="ts">
import { site } from "~~/data/site";

usePageMeta({
	title: "About Vantor Care",
	description:
		"Vantor Care was founded in Greenville, South Carolina in 2012 by two hospital nurses. Today it has twelve branches across four Southeastern states.",
	path: "/about",
});

const leaders = [
	{ name: "Patricia Vance, RN, MBA", role: "Co-founder and chief executive officer", bio: "Spent fourteen years as a cardiac step-down nurse and nurse manager before starting Vantor. Still makes a home visit with a different branch every month." },
	{ name: "Thomas Ankrom, RN", role: "Co-founder and chief clinical officer", bio: "A former ICU and transport nurse who built our pediatric trach and ventilator program and the competency checks every private duty nurse completes." },
	{ name: "Gloria Esposito, CPA", role: "Chief financial officer", bio: "Joined in 2018 from a regional hospital system, where she ran revenue cycle for its post-acute services." },
	{ name: "Dr. Raymond Okafor", role: "Medical director", bio: "A board-certified internist and geriatrician in Greenville who reviews our clinical protocols and chairs the quality committee." },
];
</script>

<template>
	<div class="container page">
		<Breadcrumbs :items="[{ label: 'About' }]" />
		<div class="page-grid">
			<article class="prose">
				<h1>About Vantor Care</h1>
				<p class="lede">
					We started Vantor because we kept discharging patients to home health agencies we would not have sent our own
					parents to.
				</p>
				<p>
					Patricia Vance and Thomas Ankrom met on the night shift at a Greenville hospital. In {{ site.founded }} they
					started Vantor Care with three nurses, a borrowed conference room and a rule they still use: every patient gets
					a nurse who works their part of town, and that nurse's name is written on the refrigerator at the first visit.
				</p>
				<p>
					Private duty nursing came first, for a handful of children going home on ventilators whose families could not
					find nurses. Medicare-certified home health followed in 2014. Today Vantor has twelve branches in South Carolina,
					North Carolina, Georgia and Tennessee and about 640 employees, nearly all of them nurses, therapists and aides.
				</p>
				<h2>How we work</h2>
				<p>
					Our clinicians are W-2 employees with benefits, not per-visit contractors, and each one works a fixed territory.
					That costs more, and it is the reason our patients see the same few faces from the first visit to the last. Every
					branch has a director of nursing who answers to a clinical leader, not a sales target.
				</p>
				<p>
					We are accredited by ACHC, licensed in all four states we serve and certified by Medicare. We publish our
					patient survey results to every employee each quarter, branch by branch.
				</p>
				<img src="/img/southeast-map.svg" alt="Map of South Carolina, North Carolina, Georgia and Tennessee with a dot for each Vantor branch" width="520" height="360" class="figure" />
				<h2>Leadership</h2>
				<ul class="people">
					<li v-for="p in leaders" :key="p.name">
						<h3>{{ p.name }}</h3>
						<p class="meta">{{ p.role }}</p>
						<p>{{ p.bio }}</p>
					</li>
				</ul>
			</article>
			<aside class="sidebar">
				<div class="card">
					<h2 class="card-title">Support office</h2>
					<p>{{ site.hq.street }}<br />{{ site.hq.city }}, {{ site.hq.state }} {{ site.hq.zip }}</p>
					<p><NuxtLink to="/locations">See all branches →</NuxtLink></p>
				</div>
			</aside>
		</div>
	</div>
</template>
