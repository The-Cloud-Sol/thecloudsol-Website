import SEOHead from "@/components/SEOHead";

interface PageSEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
}

// Home Page SEO
export const HomeSEO = () => (
  <SEOHead
    title="Professional Cloud Solutions & Services"
    description="Transform your business with expert cloud solutions. The Cloud Sol offers Microsoft 365, Azure, AWS, Google Workspace, and custom cloud services with professional consulting and implementation."
    keywords="cloud solutions, cloud transformation, Microsoft 365, Azure, AWS, Google Workspace, cloud consulting, cloud migration, cloud services"
    canonical="/"
    ogImage="/images/og-home.png"
  />
);

// About Page SEO
export const AboutSEO = () => (
  <SEOHead
    title="About The Cloud Sol - Cloud Solutions Experts"
    description="Learn about The Cloud Sol - your trusted partner for cloud transformation. Meet our team of certified cloud experts and discover our commitment to delivering exceptional cloud solutions."
    keywords="about The Cloud Sol, cloud solutions company, cloud consulting team, cloud experts, cloud transformation company"
    canonical="/about"
    ogImage="/images/og-about.png"
  />
);

// Contact Page SEO
export const ContactSEO = () => (
  <SEOHead
    title="Contact The Cloud Sol - Get Cloud Solutions Today"
    description="Get in touch with The Cloud Sol for expert cloud solutions. Contact our team for Microsoft 365, Azure, AWS, Google Workspace, and custom cloud services. Free consultation available."
    keywords="contact cloud solutions, cloud consultation, cloud services contact, Microsoft 365 consultation, Azure consultation"
    canonical="/contact"
    ogImage="/images/og-contact.png"
  />
);

// Quote Page SEO
export const QuoteSEO = () => (
  <SEOHead
    title="Get a Free Cloud Solutions Quote - The Cloud Sol"
    description="Request a free quote for cloud solutions from The Cloud Sol. Get pricing for Microsoft 365, Azure, AWS, Google Workspace, and custom cloud services. Fast response guaranteed."
    keywords="cloud solutions quote, cloud services pricing, Microsoft 365 quote, Azure quote, AWS quote, cloud consultation cost"
    canonical="/quote"
    ogImage="/images/og-quote.png"
  />
);

// Microsoft 365 Page SEO
export const Microsoft365SEO = () => (
  <SEOHead
    title="Microsoft 365 Solutions - Professional Setup & Migration"
    description="Expert Microsoft 365 solutions for your business. The Cloud Sol provides professional setup, migration, training, and support for Microsoft 365. Boost productivity with our M365 services."
    keywords="Microsoft 365, Office 365, M365 setup, Microsoft 365 migration, M365 consulting, Office 365 business, Microsoft 365 support"
    canonical="/services/microsoft-365"
    ogImage="/images/og-microsoft365.png"
  />
);

// Azure Page SEO
export const AzureSEO = () => (
  <SEOHead
    title="Microsoft Azure Cloud Solutions - Enterprise Cloud Services"
    description="Professional Microsoft Azure cloud solutions and services. The Cloud Sol offers Azure migration, infrastructure setup, app development, and managed services. Transform with Azure today."
    keywords="Microsoft Azure, Azure cloud services, Azure migration, Azure consulting, cloud infrastructure, Azure solutions, Azure managed services"
    canonical="/services/azure"
    ogImage="/images/og-azure.png"
  />
);

// AWS Page SEO
export const AWSSEO = () => (
  <SEOHead
    title="AWS Cloud Services - Professional AWS Solutions & Migration"
    description="Expert AWS cloud services and solutions. The Cloud Sol provides AWS migration, infrastructure optimization, cost management, and 24/7 support. Scale your business with AWS."
    keywords="AWS cloud services, AWS migration, AWS consulting, Amazon Web Services, cloud infrastructure, AWS solutions, AWS cost optimization"
    canonical="/services/aws"
    ogImage="/images/og-aws.png"
  />
);

// Google Workspace Page SEO
export const GoogleWorkspaceSEO = () => (
  <SEOHead
    title="Google Workspace Solutions - Professional Setup & Migration"
    description="Professional Google Workspace solutions for businesses. The Cloud Sol provides expert setup, migration, training, and support for Google Workspace. Enhance collaboration today."
    keywords="Google Workspace, G Suite setup, Google Workspace migration, Google Workspace consulting, business collaboration tools, Gmail for business"
    canonical="/services/google-workspace"
    ogImage="/images/og-google-workspace.png"
  />
);

// Specialized Services Page SEO
export const SpecializedSEO = () => (
  <SEOHead
    title="Custom Cloud Solutions - Tailored Cloud Services"
    description="Custom cloud solutions tailored to your business needs. The Cloud Sol offers specialized cloud services, custom development, workflow automation, and enterprise solutions."
    keywords="custom cloud solutions, specialized cloud services, cloud consulting, cloud automation, enterprise cloud solutions, custom cloud development"
    canonical="/services/specialized"
    ogImage="/images/og-specialized.png"
  />
);

// Privacy Policy Page SEO
export const PrivacySEO = () => (
  <SEOHead
    title="Privacy Policy - The Cloud Sol"
    description="The Cloud Sol privacy policy. Learn how we collect, use, and protect your personal information when you use our cloud solutions and services."
    keywords="privacy policy, data protection, GDPR compliance, privacy statement, The Cloud Sol privacy"
    canonical="/privacy"
    noIndex={true}
  />
);

// Terms of Service Page SEO
export const TermsSEO = () => (
  <SEOHead
    title="Terms of Service - The Cloud Sol"
    description="The Cloud Sol terms of service and conditions. Read our terms for using our cloud solutions, services, and website."
    keywords="terms of service, terms and conditions, legal terms, service agreement, The Cloud Sol terms"
    canonical="/terms"
    noIndex={true}
  />
);

// 404 Page SEO
export const NotFoundSEO = () => (
  <SEOHead
    title="Page Not Found - The Cloud Sol"
    description="The page you're looking for doesn't exist. Find your way back to The Cloud Sol for professional cloud solutions and services."
    keywords="404 error, page not found, broken link, The Cloud Sol"
    noIndex={true}
  />
);
