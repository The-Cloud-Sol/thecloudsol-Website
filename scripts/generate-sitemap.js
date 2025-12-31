import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define your site configuration
const siteConfig = {
  baseUrl: 'https://thecloudsol.com',
  outputPath: path.join(__dirname, '../dist/sitemap.xml'),
  pages: [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'weekly', priority: 0.8 },
    { url: '/contact', changefreq: 'weekly', priority: 0.8 },
    { url: '/quote', changefreq: 'weekly', priority: 0.8 },
    { url: '/privacy', changefreq: 'monthly', priority: 0.3 },
    { url: '/terms', changefreq: 'monthly', priority: 0.3 },
    { url: '/services/aws', changefreq: 'weekly', priority: 0.9 },
    { url: '/services/azure', changefreq: 'weekly', priority: 0.9 },
    { url: '/services/google-workspace', changefreq: 'weekly', priority: 0.9 },
    { url: '/services/microsoft-365', changefreq: 'weekly', priority: 0.9 },
    { url: '/services/specialized', changefreq: 'weekly', priority: 0.9 },
  ]
};

// Generate sitemap XML
function generateSitemap() {
  const currentDate = new Date().toISOString();
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  siteConfig.pages.forEach(page => {
    xml += '  <url>\n';
    xml += `    <loc>${siteConfig.baseUrl}${page.url}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  
  return xml;
}

// Write sitemap to file
function writeSitemap() {
  const sitemap = generateSitemap();
  
  // Ensure dist directory exists
  const distDir = path.dirname(siteConfig.outputPath);
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
  
  fs.writeFileSync(siteConfig.outputPath, sitemap, 'utf8');
  console.log(`✅ Sitemap generated at ${siteConfig.outputPath}`);
}

// Run the generator
try {
  writeSitemap();
} catch (error) {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
}
