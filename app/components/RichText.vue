<script setup lang="ts">
const props = defineProps<{ text: string }>();

const parts = computed(() => {
	const out: { text: string; to?: string }[] = [];
	const re = /\[([^\]]+)\]\(([^)]+)\)/g;
	let last = 0;
	let m: RegExpExecArray | null;
	while ((m = re.exec(props.text))) {
		if (m.index > last) out.push({ text: props.text.slice(last, m.index) });
		out.push({ text: m[1]!, to: m[2]! });
		last = m.index + m[0].length;
	}
	if (last < props.text.length) out.push({ text: props.text.slice(last) });
	return out;
});
</script>

<template>
	<p>
		<template v-for="(part, i) in parts" :key="i">
			<NuxtLink v-if="part.to" :to="part.to">{{ part.text }}</NuxtLink>
			<template v-else>{{ part.text }}</template>
		</template>
	</p>
</template>
