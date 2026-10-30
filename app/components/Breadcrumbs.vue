<script setup lang="ts">
defineProps<{ items: { label: string; to?: string }[] }>();
</script>

<template>
	<nav class="breadcrumbs" aria-label="Breadcrumb">
		<ol>
			<li><NuxtLink to="/">Home</NuxtLink></li>
			<li v-for="item in items" :key="item.label">
				<NuxtLink v-if="item.to" :to="item.to">{{ item.label }}</NuxtLink>
				<span v-else aria-current="page">{{ item.label }}</span>
			</li>
		</ol>
	</nav>
</template>
