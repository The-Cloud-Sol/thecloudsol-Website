import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  type?: string;
  noindex?: boolean;
}

export function SEO({ 
  title = "The Cloud Sol - Cloud Computing Solutions | Azure, AWS, Google Cloud | Enterprise Cloud Services",
  description = "Leading cloud computing company in India. Expert Azure, AWS, Google Cloud services, cloud migration, Microsoft 365 solutions. 99.9% uptime SLA, 24/7 support. Get your free cloud consultation today.",
  keywords = "cloud computing, cloud solutions, Azure services, AWS solutions, Google Cloud, Microsoft 365, cloud migration, cloud security, enterprise cloud, cloud consulting, cloud infrastructure, digital transformation, cloud services India, Vadodara cloud company",
  canonical = "https://www.thecloudsol.com",
  ogImage = "https://www.thecloudsol.com/og-image.jpg",
  type = "website",
  noindex = false
}: SEOProps) {
  
  useEffect(() => {
    // Update document title
    const fullTitle = title.includes('The Cloud Sol') ? title : `${title} | The Cloud Sol`;
    document.title = fullTitle;
    
    // Update or create meta tags
    const updateMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        if (name.startsWith('og:')) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    
    // Primary Meta Tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'The Cloud Sol');
    
    // Robots Meta
    if (noindex) {
      updateMetaTag('robots', 'noindex, nofollow');
    } else {
      updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    }
    
    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;
    
    // Open Graph Meta Tags
    updateMetaTag('og:title', fullTitle);
    updateMetaTag('og:description', description);
    updateMetaTag('og:type', type);
    updateMetaTag('og:url', canonical);
    updateMetaTag('og:image', ogImage);
    updateMetaTag('og:site_name', 'The Cloud Sol');
    updateMetaTag('og:locale', 'en_US');
    
    // Twitter Card Meta Tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:site', '@thecloudsol');
    updateMetaTag('twitter:creator', '@thecloudsol');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    
    // Geographic Meta Tags
    updateMetaTag('geo.region', 'IN-GJ');
    updateMetaTag('geo.placename', 'Vadodara, Gujarat');
    updateMetaTag('geo.position', '22.3072;73.1812');
    updateMetaTag('ICBM', '22.3072,73.1812');
    
    // Business Meta Tags
    updateMetaTag('business:contact_data:street_address', '436, Vihav Trade Center, Near Waves Club, Bhayli, Vadodara');
    updateMetaTag('business:contact_data:locality', 'Vadodara');
    updateMetaTag('business:contact_data:region', 'Gujarat');
    updateMetaTag('business:contact_data:postal_code', '391410');
    updateMetaTag('business:contact_data:country_name', 'India');
    
    // Service Meta Tags
    updateMetaTag('service', 'cloud computing, cloud migration, cloud security, cloud consulting');
    updateMetaTag('industry', 'technology, information technology, cloud services');
    updateMetaTag('category', 'business, technology, professional services');
    
    // Additional Meta Tags
    updateMetaTag('theme-color', '#0f172a');
    updateMetaTag('msapplication-TileColor', '#0f172a');
    
    // Structured Data
    let structuredDataScript = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script') as HTMLScriptElement;
      structuredDataScript.type = 'application/ld+json';
      document.head.appendChild(structuredDataScript);
    }
    
    const structuredData = {
      "@context": "https://schema.org",
      "@type": type === "website" ? "Organization" : "WebPage",
      "name": "The Cloud Sol",
      "url": canonical,
      "logo": "https://www.thecloudsol.com/logo.png",
      "description": description,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "436, Vihav Trade Center, Near Waves Club, Bhayli",
        "addressLocality": "Vadodara",
        "addressRegion": "Gujarat",
        "postalCode": "391410",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-XXXXXXXXXX",
        "contactType": "customer service",
        "email": "info@thecloudsol.com",
        "availableLanguage": ["English"]
      },
      "sameAs": [
        "https://www.linkedin.com/company/thecloudsol",
        "https://twitter.com/thecloudsol"
      ],
      "services": [
        "Cloud Computing Solutions",
        "Azure Services",
        "AWS Solutions",
        "Google Cloud Platform",
        "Microsoft 365",
        "Cloud Migration",
        "Cloud Security",
        "Cloud Consulting"
      ],
      "areaServed": ["India", "Global"],
      "knowsLanguage": ["English"]
    };
    
    structuredDataScript.textContent = JSON.stringify(structuredData);
    
    return () => {
      // Cleanup if needed
    };
  }, [title, description, keywords, canonical, ogImage, type, noindex]);
  
  return null; // This component doesn't render anything
}
