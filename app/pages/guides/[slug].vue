<script setup lang="ts">
import { getGuide } from "~~/data/guides";
import { getService } from "~~/data/services";
import { formatDate } from "~/utils/format";

const route = useRoute();
const guide = getGuide(String(route.params.slug));
if (!guide) {
	throw createError({ statusCode: 404, statusMessage: "Guide not found", fatal: true });
}

usePageMeta({ title: guide.title, description: guide.description, path: `/guides/${guide.slug}` });
</script>

<template>
	<div v-if="guide" class="container page">
		<Breadcrumbs :items="[{ label: 'Condition guides', to: '/guides' }, { label: guide.name }]" />
		<div class="page-grid">
			<article class="prose">
				<h1>{{ guide.title }}</h1>
				<p class="meta">Reviewed by {{ guide.reviewedBy }} · Updated {{ formatDate(guide.updated) }}</p>
				<p v-for="(para, i) in guide.paragraphs" :key="i">{{ para }}</p>
				<div class="callout">
					<h2>Call your nurse or doctor if</h2>
					<ul>
						<li v-for="item in guide.callIf" :key="item">{{ item }}</li>
					</ul>
				</div>
			</article>
			<aside class="sidebar">
				<div class="card">
					<h2 class="card-title">How we can help</h2>
					<ul class="link-list">
						<li v-for="slug in guide.services" :key="slug">
							<NuxtLink :to="`/services/${slug}`">{{ getService(slug)?.name }}</NuxtLink>
						</li>
					</ul>
				</div>
				<CallBox />
			</aside>
		</div>
	</div>
</template>
