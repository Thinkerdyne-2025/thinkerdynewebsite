/**
 * Updates document title and meta tags for SEO and social sharing.
 * @param {{ title: string, description: string, keywords?: string }} seo
 * @param {string} [pathname] - Current path for canonical/og:url
 */
export function updatePageMeta(seo, pathname = '/') {
  if (!seo) return;

  const { title, description, keywords } = seo;

  if (title) document.title = title;

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const canonicalUrl = baseUrl + (pathname || '/');

  const metaTags = [
    { name: 'description', content: description },
    ...(keywords ? [{ name: 'keywords', content: keywords }] : []),
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:type', content: 'website' },
  ];

  metaTags.forEach(({ name, property, content }) => {
    if (!content) return;
    const attr = name ? 'name' : 'property';
    const value = name || property;
    let el = document.querySelector(`meta[${attr}="${value}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, value);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  });
}
