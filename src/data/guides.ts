interface Guide {
  title: string;
  description: string;
  lang: 'en' | 'ru';
}

const files = import.meta.glob<Guide>('../pages/{guides,ru/guides}/*.md', {
  eager: true,
  import: 'frontmatter',
});

export const guides = Object.entries(files).map(([file, meta]) => ({
  ...meta,
  path: file.replace('../pages', '').replace(/\.md$/, '/'),
}));
