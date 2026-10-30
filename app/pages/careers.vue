<script setup lang="ts">
import { site } from "~~/data/site";

usePageMeta({
	title: "Careers in Home Health and Private Duty Nursing",
	description:
		"Nursing, therapy and aide jobs at Vantor Care: W-2 employment, a fixed territory, paid drive time and mileage, and a pediatric trach and vent program that trains you.",
	path: "/careers",
});

const roles = [
	{ title: "Registered nurse, home health case manager", places: "Charlotte, Columbia, Knoxville", type: "Full time" },
	{ title: "Licensed practical nurse, pediatric private duty", places: "Greenville, Charlotte, Augusta, Chattanooga", type: "Full time, part time, PRN" },
	{ title: "Physical therapist", places: "Spartanburg, Hickory, Knoxville", type: "Full time" },
	{ title: "Speech-language pathologist", places: "Athens, Asheville", type: "Part time" },
	{ title: "Certified wound care nurse", places: "Savannah", type: "Full time" },
	{ title: "Certified home health aide", places: "All branches", type: "Full time, part time" },
	{ title: "Intake coordinator", places: "Greenville support office", type: "Full time, hybrid" },
];
</script>

<template>
	<div class="container page">
		<Breadcrumbs :items="[{ label: 'Careers' }]" />
		<div class="page-grid">
			<article class="prose">
				<h1>Work at Vantor</h1>
				<p class="lede">
					Home care is nursing the way most of us imagined it in school: one patient at a time, with time to teach. We
					try to run the company so that it stays that way.
				</p>
				<img src="/img/care-team.svg" width="520" height="300" class="figure" />
				<h2>What you can expect</h2>
				<ul class="check-list">
					<li>W-2 employment with health, dental and vision from your first month</li>
					<li>A fixed territory near where you live, so you are not driving across three counties</li>
					<li>Paid drive time between visits and mileage at the IRS rate</li>
					<li>A paid two-week orientation with a preceptor before your first solo visit</li>
					<li>Our own trach and vent course for private duty nurses, with annual skills checks</li>
					<li>$2,500 a year toward certification or tuition after your first year</li>
				</ul>
				<h2>Open roles</h2>
				<table class="roles">
					<thead>
						<tr><th scope="col">Role</th><th scope="col">Where</th><th scope="col">Schedule</th></tr>
					</thead>
					<tbody>
						<tr v-for="r in roles" :key="r.title">
							<td>{{ r.title }}</td><td>{{ r.places }}</td><td>{{ r.type }}</td>
						</tr>
					</tbody>
				</table>
				<p>
					To apply, send a résumé and the branch you would like to work from to
					<a :href="`mailto:${site.careersEmail}`">{{ site.careersEmail }}</a>. A recruiter replies within two business
					days, and most offers are made within a week of the first conversation.
				</p>
			</article>
			<aside class="sidebar">
				<div class="card">
					<h2 class="card-title">New graduates</h2>
					<p>
						New RNs and LPNs are welcome in pediatric private duty. You will spend your first month on shifts alongside an
						experienced nurse before taking your own case.
					</p>
				</div>
			</aside>
		</div>
	</div>
</template>
