import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dartway.studio',
  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'ru',
    routing: { prefixDefaultLocale: false },
  },
});
