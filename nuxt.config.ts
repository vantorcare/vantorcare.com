import { siteRoutes } from "./data/routes";

export default defineNuxtConfig({
	compatibilityDate: "2026-09-01",
	devtools: { enabled: false },
	css: ["~/assets/main.css"],
	app: {
		head: {
			htmlAttrs: { lang: "en" },
			meta: [
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{ name: "theme-color", content: "#1f4e5f" },
			],
			link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
			script: [
				// Letter
				{
					innerHTML: `(function(w,d){var h=null;try{var l=w.localStorage,p=JSON.parse(l.getItem("lv:vp:"+"lv_pub_fj0lucvly3kd7j5658voab8x")||"[]"),q=(location.pathname||"/").replace(/\\/{2,}/g,"/").replace(/(.)\\/+$/,"$1");if(p.indexOf(q)>=0){w.__lvHeld=1;h=d.createElement("style");h.textContent="html{opacity:0!important}";d.head.appendChild(h)}}catch(e){}w.__lvReveal=function(){if(h&&h.parentNode)h.parentNode.removeChild(h);h=null};setTimeout(function(){if(h)w.__lvLate=1;w.__lvReveal()},300);var s=d.createElement("script");s.src="https://lettervisit.com/v.js?k=lv_pub_fj0lucvly3kd7j5658voab8x";s.async=true;s.setAttribute("data-key","lv_pub_fj0lucvly3kd7j5658voab8x");s.onerror=w.__lvReveal;d.head.appendChild(s)})(window,document)`,
				},
			],
		},
	},
	nitro: {
		prerender: {
			crawlLinks: false,
			routes: [...siteRoutes(), "/sitemap.xml"],
		},
	},
});
