// Google Analytics y Google Ads utilities
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Configuración de Google Analytics
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';
export const GOOGLE_ADS_CONVERSION_ID = import.meta.env.VITE_GOOGLE_ADS_CONVERSION_ID || 'AW-XXXXXXXXX';

// Inicializar Google Analytics
export const initGA = () => {
  if (typeof window === 'undefined') return;
  
  // Cargar Google Analytics
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
  
  // Configurar gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
  
  // Configurar Google Ads
  window.gtag('config', GOOGLE_ADS_CONVERSION_ID);
};

// Eventos de tracking
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', eventName, {
    event_category: 'engagement',
    event_label: parameters?.label || '',
    value: parameters?.value || 0,
    ...parameters,
  });
};

// Eventos específicos para la campaña
export const trackVolunteerSignup = (location?: string) => {
  trackEvent('volunteer_signup', {
    event_category: 'conversion',
    event_label: location || 'unknown',
    value: 1,
  });
  
  // Conversión de Google Ads
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `${GOOGLE_ADS_CONVERSION_ID}/volunteer_signup`,
      value: 1.0,
      currency: 'USD',
    });
  }
};

export const trackNewsletterSignup = () => {
  trackEvent('newsletter_signup', {
    event_category: 'conversion',
    value: 1,
  });
};

export const trackResourceDownload = (resourceName: string) => {
  trackEvent('resource_download', {
    event_category: 'engagement',
    event_label: resourceName,
    value: 1,
  });
};

export const trackSocialShare = (platform: string, content: string) => {
  trackEvent('social_share', {
    event_category: 'engagement',
    event_label: `${platform}_${content}`,
    value: 1,
  });
};

export const trackPageView = (pageName: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_title: pageName,
    page_location: window.location.href,
  });
};