<script setup lang="ts">
import type { NuxtError } from "#app";
const props = defineProps<{ error: NuxtError }>();
useSeoMeta({ title: props.error.statusCode === 404 ? "Page not found" : "Something went wrong", robots: "noindex" });
</script>

<template>
	<div class="shell">
		<SiteHeader />
		<main class="container page narrow">
			<h1>{{ error.statusCode === 404 ? "We couldn't find that page" : "Something went wrong" }}</h1>
			<p class="lede">
				The page may have moved. Try our <NuxtLink to="/services">services</NuxtLink>,
				<NuxtLink to="/locations">locations</NuxtLink> or the <NuxtLink to="/">home page</NuxtLink>.
			</p>
		</main>
		<SiteFooter />
	</div>
</template>
