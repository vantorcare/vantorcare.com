<script setup lang="ts">
import { site } from "~~/data/site";

usePageMeta({
	title: "Insurance and Payment",
	description:
		"Vantor Care accepts Medicare, Medicare Advantage, Medicaid in SC, NC, GA and TN, major commercial plans, VA Community Care, long-term care insurance and private pay.",
	path: "/insurance",
});

const groups = [
	{ name: "Medicare", body: "Traditional Medicare covers home health visits in full for patients who are homebound and need skilled care. There is no copay and no deductible for home health under Part A." },
	{ name: "Medicare Advantage", body: "We are in network with Humana, UnitedHealthcare, Aetna, Wellcare, BlueCross BlueShield of South Carolina, Blue Cross NC and Devoted Health Medicare Advantage plans. Most require prior authorization, which our intake team requests for you." },
	{ name: "Medicaid", body: "South Carolina Healthy Connections, NC Medicaid and its health plans, Georgia Medicaid and TennCare. Private duty nursing for children is covered through TEFRA in South Carolina, CAP/C in North Carolina, the GAPP program in Georgia and Katie Beckett in Tennessee." },
	{ name: "Commercial insurance", body: "BlueCross BlueShield, Aetna, Cigna, UnitedHealthcare and most employer plans. Home health benefits vary; we verify yours before the first visit and tell you about any copay." },
	{ name: "Veterans", body: "VA Community Care referrals for home health and private duty nursing are accepted at every branch. Our Columbia office coordinates VA authorizations network-wide." },
	{ name: "Long-term care insurance and private pay", body: "We bill long-term care insurers directly for private duty shifts. Private pay rates for nursing and aide shifts are quoted in writing before care starts, with no deposit and no minimum contract length." },
];
</script>

<template>
	<div class="container page">
		<Breadcrumbs :items="[{ label: 'Insurance' }]" />
		<div class="page-grid">
			<article class="prose">
				<h1>Insurance and payment</h1>
				<p class="lede">
					Before the first visit, our intake team verifies your coverage and tells you in plain numbers what, if anything,
					you will owe. Nobody should get a surprise bill from a home health agency.
				</p>
				<section v-for="g in groups" :key="g.name">
					<h2>{{ g.name }}</h2>
					<p>{{ g.body }}</p>
				</section>
			</article>
			<aside class="sidebar">
				<div class="card">
					<h2 class="card-title">Billing questions</h2>
					<p>For a question about a bill you have already received, call <a :href="site.intakePhoneHref">{{ site.intakePhone }}</a> and ask for billing, weekdays 8am to 5pm.</p>
				</div>
			</aside>
		</div>
	</div>
</template>
