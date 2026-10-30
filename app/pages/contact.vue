<script setup lang="ts">
import { site } from "~~/data/site";
import { locations } from "~~/data/locations";

usePageMeta({
	title: "Contact Us",
	description:
		"Call Vantor Care intake at (888) 555-0190, seven days a week. Phone numbers and addresses for all twelve branches and our Greenville support office.",
	path: "/contact",
});
</script>

<template>
	<div class="container page">
		<Breadcrumbs :items="[{ label: 'Contact' }]" />
		<h1>Contact us</h1>
		<div class="page-grid">
			<article class="prose">
				<h2>Starting care</h2>
				<p>
					One number reaches intake for every service we offer, home health or private duty, adult or pediatric:
					<a :href="site.intakePhoneHref"><strong>{{ site.intakePhone }}</strong></a>. An intake coordinator will ask a
					few questions about the patient, check insurance while you are on the phone if you have the card handy, and
					tell you when the first visit can happen.
				</p>
				<p>{{ site.hours }}</p>
				<h2>Physicians and discharge planners</h2>
				<p>
					Fax referrals to {{ site.fax }} or email <a :href="`mailto:${site.intakeEmail}`">{{ site.intakeEmail }}</a>.
					See <NuxtLink to="/referrals">making a referral</NuxtLink> for what to include.
				</p>
				<h2>Branch offices</h2>
				<p>For a question about a current patient's schedule, the branch office is usually fastest.</p>
				<table class="roles">
					<thead>
						<tr><th scope="col">Branch</th><th scope="col">Address</th><th scope="col">Phone</th></tr>
					</thead>
					<tbody>
						<tr v-for="loc in locations" :key="loc.slug">
							<td><NuxtLink :to="`/locations/${loc.slug}`">{{ loc.city }}, {{ loc.state }}</NuxtLink></td>
							<td>{{ loc.address }}</td>
							<td>{{ loc.phone }}</td>
						</tr>
					</tbody>
				</table>
			</article>
			<aside class="sidebar">
				<div class="card">
					<h2 class="card-title">Support office</h2>
					<p>{{ site.legalName }}<br />{{ site.hq.street }}<br />{{ site.hq.city }}, {{ site.hq.state }} {{ site.hq.zip }}</p>
					<p>Careers: <a :href="`mailto:${site.careersEmail}`">{{ site.careersEmail }}</a></p>
				</div>
			</aside>
		</div>
	</div>
</template>
