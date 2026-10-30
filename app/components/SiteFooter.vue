<script setup lang="ts">
import { site } from "~~/data/site";
import { locations, states } from "~~/data/locations";
</script>

<template>
	<footer class="site-footer">
		<div class="container footer-grid">
			<div>
				<img src="/logo-light.svg" alt="Vantor Care" width="148" height="32" />
				<p class="footer-tagline">{{ site.tagline }}.</p>
				<p>
					Intake: <a :href="site.intakePhoneHref">{{ site.intakePhone }}</a><br />
					Referral fax: {{ site.fax }}<br />
					<a :href="`mailto:${site.intakeEmail}`">{{ site.intakeEmail }}</a>
				</p>
			</div>
			<div>
				<h2 class="footer-heading">Care</h2>
				<ul>
					<li><NuxtLink to="/services">All services</NuxtLink></li>
					<li><NuxtLink to="/guides">Condition guides</NuxtLink></li>
					<li><NuxtLink to="/insurance">Insurance and payment</NuxtLink></li>
					<li><NuxtLink to="/faq">Questions families ask</NuxtLink></li>
					<li><NuxtLink to="/referrals">For physicians and discharge planners</NuxtLink></li>
				</ul>
			</div>
			<div>
				<h2 class="footer-heading">Locations</h2>
				<ul>
					<li v-for="st in states" :key="st">
						<span class="footer-state">{{ st }}</span>
						<template v-for="(loc, i) in locations.filter((l) => l.state === st)" :key="loc.slug">
							<NuxtLink :to="`/locations/${loc.slug}`">{{ loc.city }}</NuxtLink><span v-if="i < locations.filter((l) => l.state === st).length - 1">, </span>
						</template>
					</li>
				</ul>
			</div>
			<div>
				<h2 class="footer-heading">Company</h2>
				<ul>
					<li><NuxtLink to="/about">About us</NuxtLink></li>
					<li><NuxtLink to="/careers">Careers</NuxtLink></li>
					<li><NuxtLink to="/blog">Blog</NuxtLink></li>
					<li><NuxtLink to="/contact">Contact</NuxtLink></li>
				</ul>
			</div>
		</div>
		<div class="container footer-legal">
			<p>© 2021 {{ site.legalName }}. Licensed home health agency in South Carolina, North Carolina, Georgia and Tennessee. Accredited by ACHC.</p>
			<p>If this is a medical emergency, call 911.</p>
		</div>
	</footer>
</template>
