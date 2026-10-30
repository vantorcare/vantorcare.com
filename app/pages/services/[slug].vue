<script setup lang="ts">
import { getService } from "~~/data/services";
import { guides } from "~~/data/guides";
import { locations } from "~~/data/locations";

const route = useRoute();
const service = getService(String(route.params.slug));
if (!service) {
	throw createError({ statusCode: 404, statusMessage: "Service not found", fatal: true });
}

usePageMeta({ title: service.title, description: service.description, path: `/services/${service.slug}` });

const relatedGuides = guides.filter((g) => g.services.includes(service.slug)).slice(0, 3);
const offeredAt = locations.filter((l) => l.services.includes(service.slug));
</script>

<template>
	<div v-if="service" class="container page">
		<Breadcrumbs :items="[{ label: 'Services', to: '/services' }, { label: service.name }]" />
		<div class="page-grid">
			<article>
				<h1>{{ service.title }}</h1>
				<p class="lede">{{ service.summary }}</p>
				<p v-for="(para, i) in service.paragraphs" :key="i">{{ para }}</p>

				<h2>What's included</h2>
				<ul class="check-list">
					<li v-for="item in service.includes" :key="item">{{ item }}</li>
				</ul>

				<h2>How it's paid for</h2>
				<p>{{ service.payers }} See <NuxtLink to="/insurance">insurance and payment</NuxtLink> for details.</p>

				<template v-if="offeredAt.length">
					<h2>Where it's available</h2>
					<p>
						<template v-for="(loc, i) in offeredAt" :key="loc.slug">
							<NuxtLink :to="`/locations/${loc.slug}`">{{ loc.city }}, {{ loc.state }}</NuxtLink><span v-if="i < offeredAt.length - 1"> · </span>
						</template>
					</p>
				</template>

				<template v-if="relatedGuides.length">
					<h2>Related guides</h2>
					<ul class="link-list">
						<li v-for="g in relatedGuides" :key="g.slug">
							<NuxtLink :to="`/guides/${g.slug}`">{{ g.title }}</NuxtLink>
						</li>
					</ul>
				</template>
			</article>
			<aside class="sidebar">
				<CallBox :phone="service.phone" />
				<div class="card">
					<h2 class="card-title">Related services</h2>
					<ul class="link-list">
						<li v-for="slug in service.related" :key="slug">
							<NuxtLink :to="`/services/${slug}`">{{ getService(slug)?.name }}</NuxtLink>
						</li>
					</ul>
				</div>
			</aside>
		</div>
	</div>
</template>
