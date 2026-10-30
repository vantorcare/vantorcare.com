# vantorcare.com

The public website for Vantor Care: home health and private duty nursing across South Carolina,
North Carolina, Georgia and Tennessee. Live at https://vantorcare.com.

## Stack

- Nuxt 4 (Vue 3), TypeScript
- Statically generated with `nuxt generate`; there is no server, database or CMS at runtime
- One stylesheet (`app/assets/main.css`) with the colour and type tokens at the top
- Hosted on Vercel; `main` is production
- pnpm (pinned through `packageManager`, use corepack)

## Running it locally

You need Node 22 or newer (`.nvmrc` pins 22).

```bash
corepack enable
pnpm install
pnpm dev          # http://localhost:3000
```

To check the production build before pushing:

```bash
pnpm build        # nuxt generate → .output/public
pnpm preview
```

## Where things live

```
data/
  site.ts          company name, intake phone, fax, emails, header nav
  locations.ts     one entry per branch → /locations/<slug>
  services.ts      one entry per service → /services/<slug>, plus the groups on /services
  guides.ts        condition guides → /guides/<slug>
  posts.ts         blog posts → /blog/<slug>
  routes.ts        every route to prerender (also feeds sitemap.xml)
app/
  pages/           one file per static page, [slug].vue templates for the data-driven ones
  components/      SiteHeader, SiteFooter, CallBox, Breadcrumbs, RichText
  composables/     usePageMeta (title, description, canonical, Open Graph)
  error.vue        404 and error page
server/routes/
  sitemap.xml.ts   prerendered into /sitemap.xml at build time
public/            logo, favicon, robots.txt and the SVG illustrations
```

Most content changes are edits to a file in `data/` and need no template changes.

### Adding a branch, service, guide or post

Add an entry to the right file in `data/`. The slug becomes the URL. `routes.ts` reads the same
arrays, so the new page is prerendered and listed in the sitemap automatically.

Paragraph text in locations and posts can contain inline links written as `[text](/path)`;
`RichText.vue` turns them into router links.

### Page metadata

Each page calls `usePageMeta({ title, description, path })`. The app adds ` | Vantor Care` to
titles.

## Deploying

Vercel builds every push with `pnpm build` and serves `.output/public`. Pull requests get a
preview URL; merging to `main` deploys to production. No environment variables are needed.

Questions: #web in Slack, or ask Jordan in marketing.
