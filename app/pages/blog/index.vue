<script setup lang="ts">
import { posts } from "~~/data/posts";
import { formatDate } from "~/utils/format";

usePageMeta({
	title: "Blog",
	description:
		"Notes from Vantor Care's nurses and therapists on Medicare, hospital discharge, private duty nursing and caring for someone at home.",
	path: "/blog",
});
</script>

<template>
	<div class="container page narrow">
		<Breadcrumbs :items="[{ label: 'Blog' }]" />
		<h1>Blog</h1>
		<p class="lede">Practical notes from our nurses and therapists for patients, families and the people who refer them.</p>
		<ul class="post-list">
			<li v-for="p in posts" :key="p.slug">
				<p class="meta">{{ formatDate(p.date) }} · {{ p.author }}</p>
				<h2><NuxtLink :to="`/blog/${p.slug}`">{{ p.title }}</NuxtLink></h2>
				<p>{{ p.description }}</p>
			</li>
		</ul>
	</div>
</template>
