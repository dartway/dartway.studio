# dartway.studio

Landing of DartWay Studio. Astro, static, GitHub Pages from `master` (`.github/workflows/deploy.yml`), apex domain via `public/CNAME`.

- Copy: `src/i18n/ru.ts` (default, `/`) and `src/i18n/en.ts` (`/en/`) — edit both together.
- Layout and markup: `src/components/Page.astro`; styles: `src/styles/site.css`.
- Weekly numbers: `src/data/metrics.json`, written by `npm run metrics` from Studio `get_throughput` (last closed week).
- Analytics: shared DartWay counter (worker in `dartway.dev/analytics`); endpoint from the repo variable `ANALYTICS_ENDPOINT`; CTA clicks are `data-cta` attributes. Read with `npm run stats -- --site dartway.studio` in `dartway.dev`.
- `npm run build` must pass before pushing.
