<script setup lang="ts">
import { site } from "~~/data/site";

usePageMeta({
	title: "Making a Referral",
	description:
		"How physicians, case managers and discharge planners refer patients to Vantor Care for home health or private duty nursing, and what to send with the referral.",
	path: "/referrals",
});
</script>

<template>
	<div class="container page">
		<Breadcrumbs :items="[{ label: 'Referrals' }]" />
		<div class="page-grid">
			<article class="prose">
				<h1>Making a referral</h1>
				<p class="lede">
					Call, fax or email. We confirm every referral within two hours during intake hours and tell you the date of the
					first visit.
				</p>
				<h2>How to send it</h2>
				<ul>
					<li>Phone: <a :href="site.intakePhoneHref">{{ site.intakePhone }}</a></li>
					<li>Fax: {{ site.fax }}</li>
					<li>Email: <a :href="`mailto:${site.intakeEmail}`">{{ site.intakeEmail }}</a> (secure email preferred)</li>
				</ul>
				<p>Many hospitals in our area also send referrals to us electronically through their discharge planning system.</p>
				<h2>What to include</h2>
				<ul class="check-list">
					<li>Face sheet with demographics and insurance</li>
					<li>The order, with the disciplines and frequency you want</li>
					<li>History and physical, and discharge summary if available</li>
					<li>Medication list</li>
					<li>Face-to-face encounter note for Medicare patients</li>
					<li>Wound measurements, line type or vent settings where relevant</li>
				</ul>
				<h2>After the referral</h2>
				<p>
					You will receive the signed plan of care within five days of the start of care, and a summary from the case
					manager at every recertification or sooner if anything changes. For pediatric private duty referrals, we contact
					the family the same day and keep the referring team updated while Medicaid approval is pending.
				</p>
			</article>
			<aside class="sidebar">
				<div class="card">
					<h2 class="card-title">Liaisons</h2>
					<p>Most branches have a hospital liaison nurse on-site on weekdays. <NuxtLink to="/locations">Find your branch →</NuxtLink></p>
				</div>
			</aside>
		</div>
	</div>
</template>
