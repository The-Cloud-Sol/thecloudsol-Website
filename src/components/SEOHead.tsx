import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = "website",
  noIndex = false,
}) => {
  const siteTitle = "The Cloud Sol - Professional Cloud Solutions";
  const siteDescription = "Professional cloud solutions provider offering Microsoft 365, Azure, AWS, Google Workspace, and custom cloud services. Transform your business with expert cloud consulting and implementation.";
  const siteKeywords = "cloud solutions, Microsoft 365, Azure, AWS, Google Workspace, cloud consulting, cloud migration, cloud services, cloud infrastructure, cloud transformation";
  const siteUrl = import.meta.env.VITE_APP_URL || "https://thecloudsol.com";
  const defaultOgImage = `${siteUrl}/og-image.png`;

  const pageTitle = title ? `${title} | The Cloud Sol` : siteTitle;
  const pageDescription = description || siteDescription;
  const pageKeywords = keywords ? `${keywords}, ${siteKeywords}` : siteKeywords;
  const pageCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const pageOgImage = ogImage ? `${siteUrl}${ogImage}` : defaultOgImage;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "The Cloud Sol",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "description": siteDescription,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": import.meta.env.VITE_CONTACT_PHONE || "+1234567890",
      "contactType": "customer service",
      "email": import.meta.env.VITE_CONTACT_EMAIL || "info@thecloudsol.com"
    },
    "sameAs": [
      import.meta.env.VITE_FACEBOOK_URL,
      import.meta.env.VITE_LINKEDIN_URL,
      import.meta.env.VITE_TWITTER_URL
    ].filter(Boolean),
    "services": [
      "Microsoft 365 Consulting",
      "Azure Cloud Solutions",
      "AWS Cloud Services",
      "Google Workspace Setup",
      "Custom Cloud Solutions"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="author" content="The Cloud Sol" />
      <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow"} />
      <link rel="canonical" href={pageCanonical} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={pageCanonical} />
      <meta property="og:image" content={pageOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={pageTitle} />
      <meta property="og:site_name" content="The Cloud Sol" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageOgImage} />
      <meta name="twitter:site" content="@thecloudsol" />
      <meta name="twitter:creator" content="@thecloudsol" />

      {/* Additional Meta Tags */}
      <meta name="language" content="English" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0ea5e9" />
      <meta name="msapplication-TileColor" content="#0ea5e9" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://api.thecloudsol.com" />

      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Performance and Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
    </Helmet>
  );
};

export default SEOHead;
