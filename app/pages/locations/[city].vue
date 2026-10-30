<script setup lang="ts">
import { getLocation, locations } from "~~/data/locations";
import { getService } from "~~/data/services";

const route = useRoute();
const loc = getLocation(String(route.params.city));
if (!loc) {
	throw createError({ statusCode: 404, statusMessage: "Location not found", fatal: true });
}

usePageMeta({ title: loc.title, description: loc.description, path: `/locations/${loc.slug}` });

const nearby = locations.filter((l) => l.state === loc.state && l.slug !== loc.slug);
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`;
const telHref = `tel:+1${loc.phone.replace(/\D/g, "")}`;
</script>

<template>
	<div v-if="loc" class="container page">
		<Breadcrumbs :items="[{ label: 'Locations', to: '/locations' }, { label: `${loc.city}, ${loc.state}` }]" />
		<div class="page-grid">
			<article>
				<p class="eyebrow">{{ loc.stateName }} · Since {{ loc.opened }}</p>
				<h1>Vantor Care {{ loc.city }}</h1>
				<RichText v-for="(para, i) in loc.paragraphs" :key="i" :text="para" />

				<h2>Services from this office</h2>
				<ul class="link-list columns">
					<li v-for="slug in loc.services" :key="slug">
						<NuxtLink :to="`/services/${slug}`">{{ getService(slug)?.name }}</NuxtLink>
					</li>
				</ul>

				<h2>Hospitals we work with</h2>
				<p>
					Our liaison nurses take referrals from {{ loc.hospitals.slice(0, -1).join(", ") }} and
					{{ loc.hospitals[loc.hospitals.length - 1] }}, and from physician practices throughout the area.
				</p>

				<template v-if="nearby.length">
					<h2>Other offices in {{ loc.stateName }}</h2>
					<ul class="link-list">
						<li v-for="n in nearby" :key="n.slug">
							<NuxtLink :to="`/locations/${n.slug}`">{{ n.city }}</NuxtLink>
						</li>
					</ul>
				</template>
			</article>
			<aside class="sidebar">
				<div class="card">
					<h2 class="card-title">Office</h2>
					<p>
						<a :href="mapsHref" rel="noopener">{{ loc.address }}</a>
					</p>
					<p>Office: <a :href="telHref">{{ loc.phone }}</a></p>
					<p>Director of nursing: {{ loc.director }}</p>
					<h3 class="card-subtitle">Counties served</h3>
					<p>{{ loc.counties.join(" · ") }}</p>
				</div>
				<CallBox />
			</aside>
		</div>
	</div>
</template>
