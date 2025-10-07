import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const languages = ['en', 'fr'];
const buildDir = 'dist';

// Pages spéciales à générer
const specialPages = [
  { path: 'legals', component: 'LegalPage' },
  { path: 'about', component: 'AboutPage' },
  { path: 'cgv', component: 'CGVPage' },
  { path: 'contact', component: 'ContactFormPage' }
];

// Meta tags enrichis par langue et par page
const metaTagsByLang = {
  'en': {
    // Page d'accueil
    home: {
      title: 'RAPID© Framework - Accelerate your business with artificial intelligence',
      description: 'The RAPID© framework is a proven method for integrating AI into businesses without brutal disruption. Progressive and measurable adoption.',
      keywords: 'artificial intelligence, business AI, RAPID framework, digital transformation, AI integration, RAPID method',
      ogTitle: 'RAPID© Framework - Accelerate your business with artificial intelligence',
      ogDescription: 'The RAPID© framework: Survey, Analyze, Pilot, Iterate, Deploy. Your GPS for successful AI integration in your business.',
    },
    // Pages spéciales
    legals: {
      title: 'Legal Notice - RAPID© Framework',
      description: 'Legal notice and terms of use for RAPID© Framework services. Information about our company, data protection, intellectual property, and service conditions.',
      keywords: 'legal notice, terms of use, data protection, intellectual property, service conditions, RAPID framework legal',
      ogTitle: 'Legal Notice - RAPID© Framework',
      ogDescription: 'Legal notice and terms of use for RAPID© Framework services.',
    },
    about: {
      title: 'About Us - RAPID© Framework',
      description: 'Learn more about our team and expertise in AI integration. We are Apps Velocity, experts in digital transformation and AI integration with over 20 years of experience.',
      keywords: 'about us, team, expertise, AI integration, Apps Velocity, digital transformation, 20 years experience',
      ogTitle: 'About Us - RAPID© Framework',
      ogDescription: 'Learn more about our team and expertise in AI integration.',
    },
    cgv: {
      title: 'Terms of Sale - RAPID© Framework',
      description: 'General terms and conditions of sale for RAPID© Framework services. Pricing, delivery terms, guarantees, and service conditions for our AI integration services.',
      keywords: 'terms of sale, general conditions, pricing, delivery terms, guarantees, AI integration services',
      ogTitle: 'Terms of Sale - RAPID© Framework',
      ogDescription: 'General terms and conditions of sale for RAPID© Framework services.',
    },
    contact: {
      title: 'Contact Us - RAPID© Framework',
      description: 'Get in touch with our AI integration experts. Leave your contact details and we will get back to you to discuss your AI transformation project.',
      keywords: 'contact, AI integration, get in touch, consultation, AI experts, contact form',
      ogTitle: 'Contact Us - RAPID© Framework',
      ogDescription: 'Get in touch with our AI integration experts for your project.',
    }
  },
  'fr': {
    // Page d'accueil
    home: {
      title: 'RAPID© Framework - Accélérez votre entreprise avec l\'intelligence artificielle',
      description: 'Le framework RAPID© est une méthode éprouvée pour intégrer l\'IA dans les entreprises sans disruption brutale. Adoption progressive et mesurable.',
      keywords: 'intelligence artificielle, IA entreprise, framework RAPID, transformation digitale, intégration IA, méthode RAPID',
      ogTitle: 'RAPID© Framework - Accélérez votre entreprise avec l\'intelligence artificielle',
      ogDescription: 'Le framework RAPID© : Recenser, Analyser, Piloter, Itérer, Déployer. Votre GPS pour l\'intégration réussie de l\'IA dans votre entreprise.',
    },
    // Pages spéciales
    legals: {
      title: 'Mentions légales - Framework RAPID©',
      description: 'Mentions légales et conditions d\'utilisation des services Framework RAPID©. Informations sur notre entreprise, protection des données, propriété intellectuelle et conditions de service.',
      keywords: 'mentions légales, conditions utilisation, protection données, propriété intellectuelle, conditions service, framework RAPID légal',
      ogTitle: 'Mentions légales - Framework RAPID©',
      ogDescription: 'Mentions légales et conditions d\'utilisation des services Framework RAPID©.',
    },
    about: {
      title: 'À propos - Framework RAPID©',
      description: 'Découvrez notre équipe et notre expertise en intégration d\'IA. Nous sommes Apps Velocity, experts en transformation digitale et intégration d\'IA avec plus de 20 ans d\'expérience.',
      keywords: 'à propos, équipe, expertise, intégration IA, Apps Velocity, transformation digitale, 20 ans expérience',
      ogTitle: 'À propos - Framework RAPID©',
      ogDescription: 'Découvrez notre équipe et notre expertise en intégration d\'IA.',
    },
    cgv: {
      title: 'Conditions générales de vente - Framework RAPID©',
      description: 'Conditions générales de vente des services Framework RAPID©. Tarifs, délais de livraison, garanties et conditions de service pour nos services d\'intégration IA.',
      keywords: 'conditions générales vente, tarifs, délais livraison, garanties, services intégration IA',
      ogTitle: 'Conditions générales de vente - Framework RAPID©',
      ogDescription: 'Conditions générales de vente des services Framework RAPID©.',
    },
    contact: {
      title: 'Contactez-nous - Framework RAPID©',
      description: 'Prenez contact avec nos experts en intégration d\'IA. Laissez vos coordonnées et nous vous recontacterons pour discuter de votre projet de transformation IA.',
      keywords: 'contact, intégration IA, prendre contact, consultation, experts IA, formulaire contact',
      ogTitle: 'Contactez-nous - Framework RAPID©',
      ogDescription: 'Prenez contact avec nos experts en intégration d\'IA pour votre projet.',
    }
  }
};

// Fonction pour enrichir les meta tags d'un fichier HTML
function enrichMetaTags(htmlContent, lang, pageType = 'home') {
  const langMeta = metaTagsByLang[lang] || metaTagsByLang['en'];
  const meta = langMeta[pageType] || langMeta['home'];
  
  // Remplacer les meta tags existants
  let enrichedHtml = htmlContent;
  
  // Title
  enrichedHtml = enrichedHtml.replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`);
  
  // Meta description
  enrichedHtml = enrichedHtml.replace(/<meta name="description" content=".*?"/, `<meta name="description" content="${meta.description}"`);
  
  // Meta keywords
  enrichedHtml = enrichedHtml.replace(/<meta name="keywords" content=".*?"/, `<meta name="keywords" content="${meta.keywords}"`);
  
  // Open Graph title
  enrichedHtml = enrichedHtml.replace(/<meta property="og:title" content=".*?"/, `<meta property="og:title" content="${meta.ogTitle}"`);
  
  // Open Graph description
  enrichedHtml = enrichedHtml.replace(/<meta property="og:description" content=".*?"/, `<meta property="og:description" content="${meta.ogDescription}"`);
  
  return enrichedHtml;
}

// Fonction pour créer le sitemap
function createSitemap() {
  const baseUrl = 'https://rapid.appsvelocity.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Page d'accueil pour chaque langue
  languages.forEach(lang => {
    const url = lang === 'en' ? baseUrl : `${baseUrl}/${lang}`;
    sitemap += `
  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`;
  });

  // Pages spéciales pour chaque langue
  specialPages.forEach(page => {
    languages.forEach(lang => {
      const url = lang === 'en' 
        ? `${baseUrl}/${page.path}` 
        : `${baseUrl}/${lang}/${page.path}`;
      sitemap += `
  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
    });
  });

  sitemap += `
</urlset>`;

  fs.writeFileSync(path.join(buildDir, 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap généré');
}

// Fonction pour créer le robots.txt
function createRobotsTxt() {
  const robotsContent = `User-agent: *
Allow: /

Sitemap: https://rapid.appsvelocity.com/sitemap.xml`;

  fs.writeFileSync(path.join(buildDir, 'robots.txt'), robotsContent);
  console.log('✅ Robots.txt généré');
}

// Fonction principale de build SSG
async function buildSSG() {
  try {
    console.log('🚀 Démarrage de la génération SSG...');
    
    // Vérifier que le dossier dist existe
    if (!fs.existsSync(buildDir)) {
      fs.mkdirSync(buildDir, { recursive: true });
    }

    // Générer les pages pour chaque langue
    for (const lang of languages) {
      console.log(`📝 Génération des pages pour la langue: ${lang}`);
      
      // Page d'accueil
      const indexPath = lang === 'en' ? 'index.html' : `${lang}.html`;
      const indexContent = fs.readFileSync(path.join(buildDir, indexPath), 'utf8');
      const enrichedIndex = enrichMetaTags(indexContent, lang, 'home');
      fs.writeFileSync(path.join(buildDir, indexPath), enrichedIndex);
      
      // Créer le dossier pour la langue si ce n'est pas l'anglais
      if (lang !== 'en') {
        const langDir = path.join(buildDir, lang);
        if (!fs.existsSync(langDir)) {
          fs.mkdirSync(langDir, { recursive: true });
        }
      }
      
      // Pages spéciales
      for (const page of specialPages) {
        const pagePath = lang === 'en' 
          ? path.join(buildDir, `${page.path}.html`)
          : path.join(buildDir, lang, `${page.path}.html`);
        
        if (fs.existsSync(pagePath)) {
          const pageContent = fs.readFileSync(pagePath, 'utf8');
          const enrichedPage = enrichMetaTags(pageContent, lang, page.path);
          fs.writeFileSync(pagePath, enrichedPage);
        }
      }
    }
    
    // Créer le sitemap et robots.txt
    createSitemap();
    createRobotsTxt();
    
    console.log('🎉 Génération SSG terminée avec succès !');
    console.log('📁 Fichiers générés dans le dossier dist/');
    
  } catch (error) {
    console.error('❌ Erreur lors de la génération SSG:', error);
    process.exit(1);
  }
}

// Exécuter le script
buildSSG();
