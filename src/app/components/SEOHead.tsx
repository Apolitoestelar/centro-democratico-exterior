import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

export function SEOHead({
  title = 'Centro Democrático Exterior - Lista Cerrada Cámara de Colombianos en el Exterior 2026',
  description = 'Vota por experiencia, orden y representación efectiva. Lista cerrada del Centro Democrático: Alejandro Murcia, Olga Lucía Murcia y Camilo Florido para la Cámara de Colombianos en el Exterior. Elecciones 2-8 marzo 2026.',
  keywords = 'Centro Democrático, elecciones 2026, colombianos exterior, lista cerrada, Alejandro Murcia, Olga Lucía Murcia, Camilo Florido, voto exterior, cámara colombianos exterior, elecciones Colombia',
  ogImage = 'https://tudominio.com/og-image.jpg',
  ogType = 'website',
  canonicalUrl
}: SEOHeadProps) {
  
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Centro Democrático Exterior');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'Spanish');
    updateMetaTag('revisit-after', '7 days');

    // Open Graph meta tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:locale', 'es_CO', true);
    
    if (canonicalUrl) {
      updateMetaTag('og:url', canonicalUrl, true);
    }

    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Canonical URL
    if (canonicalUrl) {
      let linkElement = document.querySelector('link[rel="canonical"]');
      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'canonical');
        document.head.appendChild(linkElement);
      }
      linkElement.setAttribute('href', canonicalUrl);
    }
  }, [title, description, keywords, ogImage, ogType, canonicalUrl]);

  return null;
}
