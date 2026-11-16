export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

export const defaultSEO: SEOConfig = {
  title: 'Innovix Industries | Premium Metal Scrap, Ferrous, Non-Ferrous & Recycling Solutions',
  description:
    'INNOVIX INDUSTRIES PRIVATE LIMITED is India’s premier processor and exporter of heavy melting ferrous scrap, bare Millberry copper wire, aluminium extrusions, and secondary foundry metals.',
  keywords:
    'metal scrap supplier, ferrous scrap India, non ferrous scrap, copper wire scrap, millberry copper, aluminium scrap, brass scrap, ISRI grade scrap, recycling materials',
  canonical: 'https://innovixindustries.com/',
  ogImage: 'https://innovixindustries.com/industry-solutions-hero.jpg',
};

export const pageSEOMap: Record<string, SEOConfig> = {
  home: {
    title: 'Innovix Industries | Premium Metal Scrap, Ferrous, Non-Ferrous & Recycling Materials',
    description:
      'Premier industrial scrap metal supply and secondary raw materials. High-density HMS 1 & 2, bare copper wire, EC aluminium, and precision circular economy alloys.',
    canonical: 'https://innovixindustries.com/',
  },
  about: {
    title: 'About Us | Innovix Industries - Sustainable Metallurgy & Metal Processing',
    description:
      'Discover the legacy of Innovix Industries. Over 15+ years of sustainable metallurgy, sorting excellence, and nationwide scrap supply networks.',
    canonical: 'https://innovixindustries.com/about',
  },
  products: {
    title: 'Product Catalog | Ferrous, Copper, Aluminium & Brass Scrap - Innovix Industries',
    description:
      'Explore our full catalog of industrial metal scrap: HMS 1 & 2, Millberry wire, aluminium casting purja, ADC-12, Honey brass, and circular manufacturing materials.',
    canonical: 'https://innovixindustries.com/products',
  },
  team: {
    title: 'Our Team | Innovix Industries',
    description:
      'Meet the team driving Innovix Industries forward: CA Amar Prasad, CA Dheeraj kr Singh, Amandeep Singh, Amar Verma, Mohit Mishra, Vikram Thakur, Irshad Ali, Abhishek Singh, and Sufiyan Mallik.',
    canonical: 'https://innovixindustries.com/team',
  },
  careers: {
    title: 'Careers & Job Openings | Work With Us - Innovix Industries',
    description:
      'Explore career opportunities in industrial secondary metal recycling, international scrap trade, maritime logistics, and metallurgy at Innovix Industries Noida.',
    canonical: 'https://innovixindustries.com/careers',
  },
  career: {
    title: 'Careers & Job Openings | Work With Us - Innovix Industries',
    description:
      'Explore career opportunities in industrial secondary metal recycling, international scrap trade, maritime logistics, and metallurgy at Innovix Industries Noida.',
    canonical: 'https://innovixindustries.com/careers',
  },
  contact: {
    title: 'Contact Us & Request Metal Quotes | Innovix Industries Noida Headquarters',
    description:
      'Connect with Innovix Industries. Head office in Noida Sector 6, UP. Fast quotes for bulk industrial metal scrap orders, logistics support, and certified weighbridge deliveries.',
    canonical: 'https://innovixindustries.com/contact',
  },
  terms: {
    title: 'Terms & Conditions | Innovix Industries Official Trade Policies',
    description:
      'Official commercial terms, weighbridge tolerance, payment terms (LC/RTGS), Incoterms 2020, and legal jurisdiction for INNOVIX INDUSTRIES PRIVATE LIMITED transactions.',
    canonical: 'https://innovixindustries.com/terms',
  },
  privacy: {
    title: 'Privacy Policy | Innovix Industries Data Protection Standards',
    description:
      'Comprehensive data protection standards, client confidentiality, DPDP compliance, and zero-sale policy for corporate trade information at Innovix Industries.',
    canonical: 'https://innovixindustries.com/privacy',
  },
};

export const updateSEO = (config: SEOConfig) => {
  // Update Title
  document.title = config.title;

  // Update or create Meta Description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', config.description);

  // Update or create Meta Keywords
  if (config.keywords) {
    let metaKey = document.querySelector('meta[name="keywords"]');
    if (!metaKey) {
      metaKey = document.createElement('meta');
      metaKey.setAttribute('name', 'keywords');
      document.head.appendChild(metaKey);
    }
    metaKey.setAttribute('content', config.keywords);
  }

  // Update Canonical
  const canonicalUrl = config.canonical || window.location.href;
  let linkCanonical = document.querySelector('link[rel="canonical"]');
  if (!linkCanonical) {
    linkCanonical = document.createElement('link');
    linkCanonical.setAttribute('rel', 'canonical');
    document.head.appendChild(linkCanonical);
  }
  linkCanonical.setAttribute('href', canonicalUrl);

  // Update OG Title & Description
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', config.title);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', config.description);

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);

  // Update Twitter Title & Description
  const twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle) twTitle.setAttribute('content', config.title);

  const twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc) twDesc.setAttribute('content', config.description);
};

