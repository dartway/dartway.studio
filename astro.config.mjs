import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dartway.studio',
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
});
