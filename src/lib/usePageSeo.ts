import { useEffect } from 'react';

interface PageSeoOptions {
  title: string;
  description: string;
  canonical?: string;
  /** true ise title olduğu gibi kullanılır, BASE_TITLE eklenmez */
  rawTitle?: boolean;
}

const BASE_TITLE = 'Pergule | Tente, Pergola ve Dış Mekan Sistemleri';

/**
 * Her sayfada document.title ve meta description'ı günceller.
 * SPA olduğu için server-side meta olmaz ama client-side
 * güncelleme sosyal paylaşım önizlemelerinde ve tarayıcı
 * sekmelerinde doğru görünümü sağlar.
 */
export function usePageSeo({ title, description, canonical, rawTitle }: PageSeoOptions) {
  useEffect(() => {
    // Title
    const fullTitle = rawTitle ? title : `${title} | ${BASE_TITLE}`;
    document.title = fullTitle;

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
    if (ogTitle) ogTitle.content = fullTitle;

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
