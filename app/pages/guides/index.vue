<script setup lang="ts">
import { guides } from "~~/data/guides";

usePageMeta({
	title: "Condition Guides for Patients and Families",
	description:
		"Practical, nurse-reviewed guides to managing heart failure, COPD, diabetes, stroke recovery, joint replacement, dementia, Parkinson's disease and tracheostomy care at home.",
	path: "/guides",
});
</script>

<template>
	<div class="container page">
		<Breadcrumbs :items="[{ label: 'Condition guides' }]" />
		<h1>Condition guides</h1>
		<p class="lede">
			Plain-language guides to the conditions our nurses and therapists help people manage at home. Each one is
			reviewed by a Vantor nurse at least once a year. They are not a substitute for your own care team's advice.
		</p>
		<div class="card-grid">
			<NuxtLink v-for="g in guides" :key="g.slug" :to="`/guides/${g.slug}`" class="card card-link">
				<h2 class="card-title">{{ g.name }}</h2>
				<p>{{ g.summary }}</p>
			</NuxtLink>
		</div>
		<p>
			Seen a term like PICC line, TEFRA or wound vac on our pages? The
			<NuxtLink to="/guides/glossary">glossary</NuxtLink> explains it in a few lines.
		</p>
	</div>
</template>
