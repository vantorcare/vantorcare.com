<script setup lang="ts">
import { site } from "~~/data/site";
import { serviceGroups, getService } from "~~/data/services";
import { locations, states } from "~~/data/locations";
import { guides } from "~~/data/guides";
import { posts } from "~~/data/posts";
import { formatDate } from "~/utils/format";

usePageMeta({
	title: "Home Health and Private Duty Nursing in the Southeast",
	description:
		"Skilled nursing, therapy, wound care, infusion and private duty nursing at home in South Carolina, North Carolina, Georgia and Tennessee. Most new patients are seen within 48 hours.",
	path: "/",
});

const stateNames: Record<string, string> = { SC: "South Carolina", NC: "North Carolina", GA: "Georgia", TN: "Tennessee" };
const latest = posts.slice(0, 3);
</script>

<template>
	<div>
		<section class="hero">
			<div class="container hero-grid">
				<div>
					<p class="eyebrow">Home health · Private duty nursing</p>
					<h1>Nursing and therapy at home, from people who live down the road.</h1>
					<p class="lede">
						Vantor Care sends registered nurses, therapists and aides to patients' homes across the Southeast, from a
						few visits after surgery to round-the-clock nursing for a child on a ventilator. Fourteen offices, one intake
						line, and most new patients seen within 48 hours.
					</p>
					<div class="hero-actions">
						<a :href="site.intakePhoneHref" class="button">Call {{ site.intakePhone }}</a>
						<NuxtLink to="/referrals" class="button button-ghost">Make a referral</NuxtLink>
					</div>
				</div>
				<img src="/img/home-visit.svg" alt="A nurse checking a patient's blood pressure at a kitchen table" class="hero-art" />
			</div>
		</section>

		<section class="section">
			<div class="container">
				<h2>What we do</h2>
				<div class="two-col">
					<div v-for="group in serviceGroups" :key="group.name" class="card">
						<h3>{{ group.name }}</h3>
						<p>{{ group.blurb }}</p>
						<ul class="link-list">
							<li v-for="slug in group.slugs" :key="slug">
								<NuxtLink :to="`/services/${slug}`">{{ getService(slug)?.name }}</NuxtLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>

		<section class="section section-tint">
			<div class="container">
				<h2>Where we are</h2>
				<p class="section-intro">Each office has its own director of nursing and its own nurses, who live in the counties they cover.</p>
				<div class="state-grid">
					<div v-for="st in states" :key="st">
						<h3>{{ stateNames[st] }}</h3>
						<ul class="link-list">
							<li v-for="loc in locations.filter((l) => l.state === st)" :key="loc.slug">
								<NuxtLink :to="`/locations/${loc.slug}`">{{ loc.city }}</NuxtLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>

		<section class="section">
			<div class="container stats">
				<div><strong>1,900+</strong><span>patients cared for each month</span></div>
				<div><strong>48 hrs</strong><span>typical time from referral to first visit</span></div>
				<div><strong>4.8 / 5</strong><span>average family rating on our discharge survey</span></div>
				<div><strong>ACHC</strong><span>accredited since 2014</span></div>
			</div>
		</section>

		<section class="section section-tint">
			<div class="container">
				<h2>Guides for patients and families</h2>
				<p class="section-intro">Written and reviewed by our nurses, for the conditions we help people manage every day.</p>
				<div class="card-grid">
					<NuxtLink v-for="g in guides.slice(0, 4)" :key="g.slug" :to="`/guides/${g.slug}`" class="card card-link">
						<h3>{{ g.name }}</h3>
						<p>{{ g.summary }}</p>
					</NuxtLink>
				</div>
				<p><NuxtLink to="/guides">All condition guides →</NuxtLink></p>
			</div>
		</section>

		<section class="section">
			<div class="container">
				<h2>From the blog</h2>
				<div class="card-grid">
					<NuxtLink v-for="p in latest" :key="p.slug" :to="`/blog/${p.slug}`" class="card card-link">
						<p class="meta">{{ formatDate(p.date) }}</p>
						<h3>{{ p.title }}</h3>
					</NuxtLink>
				</div>
			</div>
		</section>
	</div>
</template>
