<script setup lang="ts">
import { site } from "~~/data/site";
const props = defineProps<{ phone?: string; heading?: string }>();
const number = computed(() => props.phone ?? site.intakePhone);
const href = computed(() => `tel:+1${number.value.replace(/\D/g, "")}`);
</script>

<template>
	<aside class="callbox">
		<h2>{{ heading ?? "Talk to an intake coordinator" }}</h2>
		<p>Tell us what's going on and we'll tell you what we can do, what it will likely cost and when we can start. Most new patients are seen within 48 hours.</p>
		<a :href="href" class="button">Call {{ number }}</a>
		<p class="callbox-note">{{ site.hours }}</p>
	</aside>
</template>
