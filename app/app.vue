<script setup lang="ts">
useHead({
	titleTemplate: (title) => (title ? `${title} | Vantor Care` : "Vantor Care"),
});
</script>

<template>
	<div class="shell">
		<SiteHeader />
		<main>
			<NuxtPage />
		</main>
		<SiteFooter />
	</div>
</template>
