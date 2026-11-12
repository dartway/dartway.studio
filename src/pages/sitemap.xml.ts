// Every page of the site in both languages, for search engines; robots.txt points here.
import { caseStudies } from '../data/caseStudies';

export function GET({ site }: { site: URL }) {
  const paths = ['/', '/work/', ...caseStudies.map((c) => `/work/${c.slug}/`)];
  const url = (p: string) => new URL(p, site).href;
  const entries = paths.map((p) => {
    const en = url(p);
    const ru = url('/ru' + p);
    const alt = `<xhtml:link rel="alternate" hreflang="en" href="${en}"/><xhtml:link rel="alternate" hreflang="ru" href="${ru}"/>`;
    return `<url><loc>${en}</loc>${alt}</url><url><loc>${ru}</loc>${alt}</url>`;
  });
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${entries.join('')}</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
