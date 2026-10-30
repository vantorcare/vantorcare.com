<script setup lang="ts">
import { nav, site } from "~~/data/site";
const open = ref(false);
const route = useRoute();
watch(() => route.path, () => (open.value = false));
</script>

<template>
	<header class="site-header">
		<div class="container header-inner">
			<NuxtLink to="/" class="brand" aria-label="Vantor Care home">
				<img src="/logo.svg" alt="Vantor Care" width="164" height="36" />
			</NuxtLink>
			<button class="menu-toggle" :aria-expanded="open" aria-controls="primary-nav" @click="open = !open">
				Menu
			</button>
			<nav id="primary-nav" :class="['primary-nav', { open }]" aria-label="Primary">
				<NuxtLink v-for="item in nav" :key="item.to" :to="item.to">{{ item.label }}</NuxtLink>
				<a :href="site.intakePhoneHref" class="nav-phone">{{ site.intakePhone }}</a>
			</nav>
		</div>
	</header>
</template>
