import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const languages = ['en', 'fr', 'pt', 'es', 'de', 'it'];
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
  },
  'pt': {
    home: {
      title: 'RAPID© Framework - Acelere sua empresa com inteligência artificial',
      description: 'O framework RAPID© é um método comprovado para integrar IA nas empresas sem disrupção brutal. Adoção progressiva e mensurável.',
      keywords: 'inteligência artificial, IA empresarial, framework RAPID, transformação digital, integração IA, método RAPID',
      ogTitle: 'RAPID© Framework - Acelere sua empresa com inteligência artificial',
      ogDescription: 'O framework RAPID©: Recopilar, Analisar, Pilotar, Iterar, Implementar. Seu GPS para a integração bem-sucedida de IA em sua empresa.',
    },
    legals: {
      title: 'Aviso Legal - Framework RAPID©',
      description: 'Aviso legal e condições de uso dos serviços Framework RAPID©. Informações sobre nossa empresa, proteção de dados, propriedade intelectual e condições de serviço.',
      keywords: 'aviso legal, condições uso, proteção dados, propriedade intelectual, condições serviço, framework RAPID legal',
      ogTitle: 'Aviso Legal - Framework RAPID©',
      ogDescription: 'Aviso legal e condições de uso dos serviços Framework RAPID©.',
    },
    about: {
      title: 'Sobre Nós - Framework RAPID©',
      description: 'Conheça nossa equipe e expertise em integração de IA. Somos Apps Velocity, especialistas em transformação digital e integração de IA com mais de 20 anos de experiência.',
      keywords: 'sobre nós, equipe, expertise, integração IA, Apps Velocity, transformação digital, 20 anos experiência',
      ogTitle: 'Sobre Nós - Framework RAPID©',
      ogDescription: 'Conheça nossa equipe e expertise em integração de IA.',
    },
    cgv: {
      title: 'Termos de Venda - Framework RAPID©',
      description: 'Termos e condições gerais de venda dos serviços Framework RAPID©. Preços, prazos de entrega, garantias e condições de serviço para nossos serviços de integração de IA.',
      keywords: 'termos venda, condições gerais, preços, prazos entrega, garantias, serviços integração IA',
      ogTitle: 'Termos de Venda - Framework RAPID©',
      ogDescription: 'Termos e condições gerais de venda dos serviços Framework RAPID©.',
    },
    contact: {
      title: 'Entre em Contato - Framework RAPID©',
      description: 'Entre em contato com nossos especialistas em integração de IA. Deixe seus dados de contato e retornaremos para discutir seu projeto de transformação IA.',
      keywords: 'contato, integração IA, entre em contato, consultoria, especialistas IA, formulário contato',
      ogTitle: 'Entre em Contato - Framework RAPID©',
      ogDescription: 'Entre em contato com nossos especialistas em integração de IA para seu projeto.',
    }
  },
  'es': {
    home: {
      title: 'RAPID© Framework - Acelera tu empresa con inteligencia artificial',
      description: 'El framework RAPID© es un método probado para integrar la IA en las empresas sin disrupciones brutales. Adopción progresiva y medible.',
      keywords: 'inteligencia artificial, IA empresarial, framework RAPID, transformación digital, integración IA, método RAPID',
      ogTitle: 'RAPID© Framework - Acelera tu empresa con inteligencia artificial',
      ogDescription: 'El framework RAPID©: Recopilar, Analizar, Pilotar, Iterar, Desplegar. Tu GPS para la integración exitosa de la IA en tu empresa.',
    },
    legals: {
      title: 'Aviso Legal - Framework RAPID©',
      description: 'Aviso legal y condiciones de uso de los servicios Framework RAPID©. Información sobre nuestra empresa, protección de datos, propiedad intelectual y condiciones de servicio.',
      keywords: 'aviso legal, condiciones uso, protección datos, propiedad intelectual, condiciones servicio, framework RAPID legal',
      ogTitle: 'Aviso Legal - Framework RAPID©',
      ogDescription: 'Aviso legal y condiciones de uso de los servicios Framework RAPID©.',
    },
    about: {
      title: 'Acerca de Nosotros - Framework RAPID©',
      description: 'Conoce nuestro equipo y experiencia en integración de IA. Somos Apps Velocity, expertos en transformación digital e integración de IA con más de 20 años de experiencia.',
      keywords: 'acerca nosotros, equipo, experiencia, integración IA, Apps Velocity, transformación digital, 20 años experiencia',
      ogTitle: 'Acerca de Nosotros - Framework RAPID©',
      ogDescription: 'Conoce nuestro equipo y experiencia en integración de IA.',
    },
    cgv: {
      title: 'Términos de Venta - Framework RAPID©',
      description: 'Términos y condiciones generales de venta de los servicios Framework RAPID©. Precios, plazos de entrega, garantías y condiciones de servicio para nuestros servicios de integración de IA.',
      keywords: 'términos venta, condiciones generales, precios, plazos entrega, garantías, servicios integración IA',
      ogTitle: 'Términos de Venta - Framework RAPID©',
      ogDescription: 'Términos y condiciones generales de venta de los servicios Framework RAPID©.',
    },
    contact: {
      title: 'Contáctanos - Framework RAPID©',
      description: 'Ponte en contacto con nuestros expertos en integración de IA. Deja tus datos de contacto y nos pondremos en contacto contigo para discutir tu proyecto de transformación IA.',
      keywords: 'contacto, integración IA, ponerse en contacto, consultoría, expertos IA, formulario contacto',
      ogTitle: 'Contáctanos - Framework RAPID©',
      ogDescription: 'Ponte en contacto con nuestros expertos en integración de IA para tu proyecto.',
    }
  },
  'de': {
    home: {
      title: 'RAPID©-Framework - Beschleunigen Sie Ihr Unternehmen mit künstlicher Intelligenz',
      description: 'Das RAPID©-Framework ist eine bewährte Methode zur Integration von KI in Unternehmen ohne brutale Disruption. Progressive und messbare Adoption.',
      keywords: 'künstliche Intelligenz, Unternehmens-KI, RAPID-Framework, digitale Transformation, KI-Integration, RAPID-Methode',
      ogTitle: 'RAPID©-Framework - Beschleunigen Sie Ihr Unternehmen mit künstlicher Intelligenz',
      ogDescription: 'Das RAPID©-Framework: Erfassen, Analysieren, Pilotieren, Iterieren, Bereitstellen. Ihr GPS für die erfolgreiche KI-Integration in Ihrem Unternehmen.',
    },
    legals: {
      title: 'Impressum - RAPID©-Framework',
      description: 'Impressum und Nutzungsbedingungen für RAPID©-Framework Services. Informationen über unser Unternehmen, Datenschutz, geistiges Eigentum und Servicebedingungen.',
      keywords: 'impressum, nutzungsbedingungen, datenschutz, geistiges eigentum, servicebedingungen, RAPID framework rechtlich',
      ogTitle: 'Impressum - RAPID©-Framework',
      ogDescription: 'Impressum und Nutzungsbedingungen für RAPID©-Framework Services.',
    },
    about: {
      title: 'Über Uns - RAPID©-Framework',
      description: 'Lernen Sie unser Team und unsere Expertise in der KI-Integration kennen. Wir sind Apps Velocity, Experten für digitale Transformation und KI-Integration mit über 20 Jahren Erfahrung.',
      keywords: 'über uns, team, expertise, KI integration, Apps Velocity, digitale transformation, 20 jahre erfahrung',
      ogTitle: 'Über Uns - RAPID©-Framework',
      ogDescription: 'Lernen Sie unser Team und unsere Expertise in der KI-Integration kennen.',
    },
    cgv: {
      title: 'Verkaufsbedingungen - RAPID©-Framework',
      description: 'Allgemeine Geschäftsbedingungen für RAPID©-Framework Services. Preise, Lieferzeiten, Garantien und Servicebedingungen für unsere KI-Integrationsdienste.',
      keywords: 'verkaufsbedingungen, allgemeine geschäftsbedingungen, preise, lieferzeiten, garantien, KI integrationsdienste',
      ogTitle: 'Verkaufsbedingungen - RAPID©-Framework',
      ogDescription: 'Allgemeine Geschäftsbedingungen für RAPID©-Framework Services.',
    },
    contact: {
      title: 'Kontaktieren Sie uns - RAPID©-Framework',
      description: 'Kontaktieren Sie unsere KI-Integrationsexperten. Hinterlassen Sie Ihre Kontaktdaten und wir melden uns bei Ihnen, um Ihr KI-Transformationsprojekt zu besprechen.',
      keywords: 'kontakt, KI integration, kontakt aufnehmen, beratung, KI experten, kontaktformular',
      ogTitle: 'Kontaktieren Sie uns - RAPID©-Framework',
      ogDescription: 'Kontaktieren Sie unsere KI-Integrationsexperten für Ihr Projekt.',
    }
  },
  'it': {
    home: {
      title: 'RAPID© Framework - Accelera la tua azienda con l\'intelligenza artificiale',
      description: 'Il framework RAPID© è un metodo collaudato per integrare l\'IA nelle aziende senza disruzioni brutali. Adozione progressiva e misurabile.',
      keywords: 'intelligenza artificiale, IA aziendale, framework RAPID, trasformazione digitale, integrazione IA, metodo RAPID',
      ogTitle: 'RAPID© Framework - Accelera la tua azienda con l\'intelligenza artificiale',
      ogDescription: 'Il framework RAPID©: Rilevare, Analizzare, Pilotare, Iterare, Distribuire. Il tuo GPS per l\'integrazione riuscita dell\'IA nella tua azienda.',
    },
    legals: {
      title: 'Note Legali - Framework RAPID©',
      description: 'Note legali e condizioni d\'uso per i servizi Framework RAPID©. Informazioni sulla nostra azienda, protezione dei dati, proprietà intellettuale e condizioni di servizio.',
      keywords: 'note legali, condizioni uso, protezione dati, proprietà intellettuale, condizioni servizio, framework RAPID legale',
      ogTitle: 'Note Legali - Framework RAPID©',
      ogDescription: 'Note legali e condizioni d\'uso per i servizi Framework RAPID©.',
    },
    about: {
      title: 'Chi Siamo - Framework RAPID©',
      description: 'Scopri il nostro team e la nostra esperienza nell\'integrazione di IA. Siamo Apps Velocity, esperti in trasformazione digitale e integrazione di IA con oltre 20 anni di esperienza.',
      keywords: 'chi siamo, team, esperienza, integrazione IA, Apps Velocity, trasformazione digitale, 20 anni esperienza',
      ogTitle: 'Chi Siamo - Framework RAPID©',
      ogDescription: 'Scopri il nostro team e la nostra esperienza nell\'integrazione di IA.',
    },
    cgv: {
      title: 'Termini di Vendita - Framework RAPID©',
      description: 'Termini e condizioni generali di vendita per i servizi Framework RAPID©. Prezzi, tempi di consegna, garanzie e condizioni di servizio per i nostri servizi di integrazione IA.',
      keywords: 'termini vendita, condizioni generali, prezzi, tempi consegna, garanzie, servizi integrazione IA',
      ogTitle: 'Termini di Vendita - Framework RAPID©',
      ogDescription: 'Termini e condizioni generali di vendita per i servizi Framework RAPID©.',
    },
    contact: {
      title: 'Contattaci - Framework RAPID©',
      description: 'Mettiti in contatto con i nostri esperti di integrazione IA. Lascia i tuoi dati di contatto e ti ricontatteremo per discutere il tuo progetto di trasformazione IA.',
      keywords: 'contatto, integrazione IA, mettersi in contatto, consulenza, esperti IA, modulo contatto',
      ogTitle: 'Contattaci - Framework RAPID©',
      ogDescription: 'Mettiti in contatto con i nostri esperti di integrazione IA per il tuo progetto.',
    }
  }
};

// Fonction pour enrichir les meta tags d'un fichier HTML
function enrichMetaTags(htmlContent, lang, pageType = 'home') {
  const langMeta = metaTagsByLang[lang] || metaTagsByLang['en'];
  const meta = langMeta[pageType] || langMeta['home'];
  
  // Remplacer le titre
  htmlContent = htmlContent.replace(
    /<title>.*?<\/title>/,
    `<title>${meta.title}</title>`
  );
  
  // Remplacer la description
  htmlContent = htmlContent.replace(
    /<meta name="description" content=".*?" \/>/,
    `<meta name="description" content="${meta.description}" />`
  );
  
  // Remplacer les keywords
  htmlContent = htmlContent.replace(
    /<meta name="keywords" content=".*?" \/>/,
    `<meta name="keywords" content="${meta.keywords}" />`
  );
  
  // Remplacer og:title
  htmlContent = htmlContent.replace(
    /<meta property="og:title" content=".*?" \/>/,
    `<meta property="og:title" content="${meta.ogTitle}" />`
  );
  
  // Remplacer og:description
  htmlContent = htmlContent.replace(
    /<meta property="og:description" content=".*?" \/>/,
    `<meta property="og:description" content="${meta.ogDescription}" />`
  );
  
  // Remplacer twitter:title
  htmlContent = htmlContent.replace(
    /<meta name="twitter:title" content=".*?" \/>/,
    `<meta name="twitter:title" content="${meta.ogTitle}" />`
  );
  
  // Remplacer twitter:description
  htmlContent = htmlContent.replace(
    /<meta name="twitter:description" content=".*?" \/>/,
    `<meta name="twitter:description" content="${meta.ogDescription}" />`
  );
  
  // Ajouter la langue dans l'attribut lang
  htmlContent = htmlContent.replace(
    /<html lang=".*?"/,
    `<html lang="${lang}"`
  );
  
  // Ajouter og:locale
  const ogLocale = lang === 'en' ? 'en_US' : `${lang}_${lang.toUpperCase()}`;
  htmlContent = htmlContent.replace(
    /<meta property="og:locale" content=".*?" \/>/,
    `<meta property="og:locale" content="${ogLocale}" />`
  );
  
  return htmlContent;
}

// Fonction pour copier et enrichir les fichiers HTML
function copyAndEnrichHtmlFiles() {
  console.log('📁 Copie et enrichissement des fichiers HTML...');

  // 1. Traiter les pages d'accueil
  languages.forEach(lang => {
    const targetFile = lang === 'en' ? 'index.html' : `${lang}/index.html`;

    // chemin source DANS dist (sortie Vite)
    const builtSource = lang === 'en'
      ? path.join(buildDir, 'index.html')
      : path.join(buildDir, `${lang}.html`);

    if (fs.existsSync(builtSource)) {
      // Créer le dossier de destination si nécessaire
      if (lang !== 'en') {
        const targetDir = path.join(buildDir, lang);
        if (!fs.existsSync(targetDir)) {
          fs.mkdirSync(targetDir, { recursive: true });
        }
      }

      // Lire le contenu HTML
      let htmlContent = fs.readFileSync(builtSource, 'utf8');
      
      // Enrichir les meta tags pour la page d'accueil
      htmlContent = enrichMetaTags(htmlContent, lang, 'home');
      
      // Écrire le fichier enrichi
      const targetPath = path.join(buildDir, targetFile);
      fs.writeFileSync(targetPath, htmlContent);
      console.log(`✅ Copié et enrichi ${builtSource} vers ${targetPath}`);
    } else {
      console.warn(`⚠️  Fichier construit introuvable: ${builtSource}. Avez-vous exécuté "vite build" ?`);
    }
  });

  // 2. Générer les pages spéciales
  specialPages.forEach(page => {
    languages.forEach(lang => {
      // Déterminer le chemin de destination
      const targetFile = lang === 'en' 
        ? `${page.path}.html` 
        : `${lang}/${page.path}.html`;

      // Utiliser le fichier source de la langue correspondante
      const builtSource = lang === 'en'
        ? path.join(buildDir, 'index.html')
        : path.join(buildDir, `${lang}.html`);

      if (fs.existsSync(builtSource)) {
        // Créer le dossier de destination si nécessaire
        if (lang !== 'en') {
          const targetDir = path.join(buildDir, lang);
          if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
          }
        }

        // Lire le contenu HTML
        let htmlContent = fs.readFileSync(builtSource, 'utf8');
        
        // Enrichir les meta tags pour la page spéciale
        htmlContent = enrichMetaTags(htmlContent, lang, page.path);
        
        // Écrire le fichier enrichi
        const targetPath = path.join(buildDir, targetFile);
        fs.writeFileSync(targetPath, htmlContent);
        console.log(`✅ Généré page spéciale: ${targetPath}`);
      } else {
        console.warn(`⚠️  Fichier source introuvable pour ${page.path} (${lang}): ${builtSource}`);
      }
    });
  });
}

// Fonction pour créer un sitemap
function createSitemap() {
  console.log('🗺️  Création du sitemap...');
  
  const baseUrl = 'https://rapid.appsvelocity.com';
  const lastmod = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Ajouter les pages d'accueil
  languages.forEach(lang => {
    const url = lang === 'en' ? `${baseUrl}/` : `${baseUrl}/${lang}/`;
    const priority = lang === 'en' ? '1.0' : '0.9';
    
    sitemap += `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });

  // Ajouter les pages spéciales
  specialPages.forEach(page => {
    languages.forEach(lang => {
      const url = lang === 'en' 
        ? `${baseUrl}/${page.path}` 
        : `${baseUrl}/${lang}/${page.path}`;
      
      sitemap += `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
    });
  });

  sitemap += `
</urlset>`;

  fs.writeFileSync(path.join(buildDir, 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap créé avec pages spéciales');
}

// Fonction pour créer un robots.txt
function createRobotsTxt() {
  console.log('🤖 Création du robots.txt...');
  
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://rapid.appsvelocity.com/sitemap.xml

# Hreflang sitemap
Sitemap: https://rapid.appsvelocity.com/sitemap-hreflang.xml`;

  fs.writeFileSync(path.join(buildDir, 'robots.txt'), robotsTxt);
  console.log('✅ robots.txt créé');
}

// Fonction principale
function buildSSG() {
  console.log('🚀 Début de la génération SSG...');
  
  try {
    // Vérifier que le dossier dist existe
    if (!fs.existsSync(buildDir)) {
      console.log('❌ Le dossier dist n\'existe pas. Exécutez d\'abord "npm run build"');
      process.exit(1);
    }
    
    // Copier et enrichir les fichiers HTML
    copyAndEnrichHtmlFiles();
    
    // Créer le sitemap
    createSitemap();
    
    // Créer le robots.txt
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
