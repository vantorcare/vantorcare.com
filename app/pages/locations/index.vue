<script setup lang="ts">
import { locations, states } from "~~/data/locations";

usePageMeta({
	title: "Our Locations",
	description:
		"Vantor Care branches in Greenville, Spartanburg, Columbia, Charleston, Charlotte, Asheville, Hickory, Savannah, Augusta, Athens, Chattanooga and Knoxville, with the counties each one serves.",
	path: "/locations",
});

const stateNames: Record<string, string> = { SC: "South Carolina", NC: "North Carolina", GA: "Georgia", TN: "Tennessee" };
</script>

<template>
	<div class="container page">
		<Breadcrumbs :items="[{ label: 'Locations' }]" />
		<h1>Locations</h1>
		<p class="lede">
			Every Vantor branch is run by its own director of nursing, and our nurses and therapists work the counties they
			live in. If you are not sure which office covers your address, call intake and we will tell you.
		</p>
		<section v-for="st in states" :key="st" class="section-tight">
			<h2>{{ stateNames[st] }}</h2>
			<div class="card-grid">
				<NuxtLink v-for="loc in locations.filter((l) => l.state === st)" :key="loc.slug" :to="`/locations/${loc.slug}`" class="card card-link">
					<h3>{{ loc.city }}, {{ loc.state }}</h3>
					<p class="meta">{{ loc.phone }}</p>
					<p>Serving {{ loc.counties.join(", ") }} {{ loc.counties.length > 1 ? "counties" : "county" }}.</p>
				</NuxtLink>
			</div>
		</section>
	</div>
</template>
