<script setup lang="ts">
import { getPost } from "~~/data/posts";
import { formatDate } from "~/utils/format";

const route = useRoute();
const post = getPost(String(route.params.slug));
if (!post) {
	throw createError({ statusCode: 404, statusMessage: "Post not found", fatal: true });
}

useSeoMeta({
	title: post.title,
	description: post.description,
	ogTitle: post.title,
	ogDescription: post.description,
	ogType: "article",
	articlePublishedTime: post.date,
	articleAuthor: [post.author],
});
</script>

<template>
	<div v-if="post" class="container page narrow">
		<Breadcrumbs :items="[{ label: 'Blog', to: '/blog' }, { label: post.title }]" />
		<article class="prose">
			<h1>{{ post.title }}</h1>
			<p class="meta">{{ formatDate(post.date) }} · {{ post.author }}</p>
			<section v-for="(section, i) in post.sections" :key="i">
				<h2 v-if="section.heading">{{ section.heading }}</h2>
				<RichText v-for="(para, j) in section.paragraphs" :key="j" :text="para" />
			</section>
		</article>
		<p class="back"><NuxtLink to="/blog">← All posts</NuxtLink></p>
	</div>
</template>
