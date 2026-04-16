import { useEffect } from 'react';

interface PageSeoOptions {
  title: string;
  description: string;
  canonical?: string;
}

const BASE_TITLE = 'Pergule | Tente ve Pergola Sistemleri';

/**
 * Her sayfada document.title ve meta description'ı günceller.
 * SPA olduğu için server-side meta olmaz ama client-side
 * güncelleme sosyal paylaşım önizlemelerinde ve tarayıcı
 * sekmelerinde doğru görünümü sağlar.
 */
export function usePageSeo({ title, description, canonical }: PageSeoOptions) {
  useEffect(() => {
    // Title
    document.title = `${title} | ${BASE_TITLE}`;

    // Meta description
    let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // OG title
    let ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = `${title} | ${BASE_TITLE}`;

    // OG description
    let ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = description;

    // Canonical
    if (canonical) {
      let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    // Reset on unmount
    return () => {
      document.title = BASE_TITLE;
    };
  }, [title, description, canonical]);
}
