<script setup lang="ts">
import { site } from "~~/data/site";

usePageMeta({
	title: "Frequently Asked Questions",
	description:
		"Answers to the questions families ask Vantor Care most: how fast care starts, who pays, whether you can choose your agency, and what happens after hours.",
	path: "/faq",
});

const faqs = [
	{ q: "How quickly can care start?", a: "For home health, most patients are seen within 48 hours of the referral, and often the day after discharge. Private duty cases take longer to staff because we build a named team; a typical start is five to ten days, sooner for overnight-only coverage." },
	{ q: "Do I need a doctor's order?", a: "Home health, yes: a physician or nurse practitioner orders it and signs the plan of care. We can request the order from your doctor for you. Private duty paid privately or by long-term care insurance does not always need one, though most cases have one." },
	{ q: "Can I choose my home health agency?", a: "Yes. If you have Medicare, federal rules give you the right to choose any certified agency that serves your area. Tell the hospital's discharge planner which agency you want, or call us and we will contact them." },
	{ q: "What does 'homebound' mean for Medicare?", a: "It means leaving home takes a considerable and taxing effort, for example because you need a walker and someone's help. You can still go to medical appointments, religious services, adult day care and the occasional haircut." },
	{ q: "Will I see the same nurse each time?", a: "As much as we can arrange. Our nurses work fixed territories, so most patients see the same two or three clinicians for their whole episode of care." },
	{ q: "What happens at night or on weekends?", a: `Call ${site.intakePhone} at any hour. After 9pm the call goes to the on-call nurse for your branch, who has your chart and can visit if needed.` },
	{ q: "Do you provide hospice?", a: "No. We work alongside hospice agencies, and our private duty nurses can provide shift nursing for patients who are also on hospice." },
];
</script>

<template>
	<div class="container page narrow">
		<Breadcrumbs :items="[{ label: 'FAQ' }]" />
		<h1 class="page-title">Frequently asked questions</h1>
		<p class="lede">If your question is not here, call intake. There is no such thing as a question too small.</p>
		<dl class="faq">
			<template v-for="item in faqs" :key="item.q">
				<dt>{{ item.q }}</dt>
				<dd>{{ item.a }}</dd>
			</template>
		</dl>
	</div>
</template>
