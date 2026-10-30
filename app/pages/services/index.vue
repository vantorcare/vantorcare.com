<script setup lang="ts">
import { serviceGroups, getService } from "~~/data/services";

usePageMeta({
	title: "Home Health and Private Duty Nursing Services",
	description:
		"Skilled nursing, physical, occupational and speech therapy, wound care, infusion nursing, home health aides, and adult and pediatric private duty nursing.",
	path: "/services",
});
</script>

<template>
	<div class="container page">
		<Breadcrumbs :items="[{ label: 'Services' }]" />
		<h1>Services</h1>
		<p class="lede">
			We offer two kinds of care. Home health brings a nurse or therapist for visits while you recover. Private duty
			puts a nurse in the home for a shift. Many patients use both.
		</p>
		<section v-for="group in serviceGroups" :key="group.name" class="section-tight">
			<h2>{{ group.name }}</h2>
			<p>{{ group.blurb }}</p>
			<div class="card-grid">
				<NuxtLink v-for="slug in group.slugs" :key="slug" :to="`/services/${slug}`" class="card card-link">
					<h3>{{ getService(slug)?.name }}</h3>
					<p>{{ getService(slug)?.summary }}</p>
				</NuxtLink>
			</div>
		</section>
		<CallBox heading="Not sure what you need?" />
	</div>
</template>
