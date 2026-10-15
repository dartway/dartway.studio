# dartway.studio

Landing of DartWay Studio. Astro, static, GitHub Pages from `master` (`.github/workflows/deploy.yml`), apex domain via `public/CNAME`.

- Copy: `src/i18n/en.ts` (default, `/`) and `src/i18n/ru.ts` (`/ru/`) — edit both together. `/` sends a browser whose first language is Russian to `/ru/` unless the visitor picked a language (`localStorage.lang`).
- Layout and markup: `src/components/Page.astro`; styles: `src/styles/site.css`.
- Hero numbers: `stats` in the copy files — the owner's figures, edited by hand.
- Analytics: shared DartWay counter (worker in `dartway.dev/analytics`); endpoint from the repo variable `ANALYTICS_ENDPOINT`; CTA clicks are `data-cta` attributes. Read with `npm run stats -- --site dartway.studio` in `dartway.dev`.
- `npm run build` must pass before pushing.
