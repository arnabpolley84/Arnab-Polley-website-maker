import {
  Project,
  HeroSlide,
  StatItem,
  CapabilityCard,
  ExperienceItem,
  SkillCategory,
  CertificationItem,
  EducationRecord,
  IndustryItem,
  ProjectCategory,
} from '../types';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    badge: '10+ Years of Professional Engineering',
    title: '10+ Years of Building Digital Experiences',
    subtitle:
      'Senior Software Engineer with extensive experience building websites, e-commerce platforms, custom applications and digital solutions for businesses across multiple industries.',
    ctaText: 'Explore My Work',
    ctaTarget: '#work',
    secondaryCtaText: 'Let’s Discuss a Project',
    secondaryCtaTarget: '#contact',
    imageUrl:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop',
    imageAlt: 'Modern high-end executive workspace and engineering technology',
    highlightTag: 'Full-Stack & E-Commerce',
  },
  {
    id: 2,
    badge: 'Shopify Ecosystem & Scaling',
    title: 'E-Commerce That Goes Beyond the Storefront',
    subtitle:
      'From customized Shopify experiences to complex integrations, automation and international e-commerce solutions.',
    ctaText: 'View E-Commerce Work',
    ctaTarget: '#ecommerce',
    secondaryCtaText: 'Discuss Your Store',
    secondaryCtaTarget: '#contact',
    imageUrl:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop',
    imageAlt: 'Modern retail storefront and luxury e-commerce experience',
    highlightTag: 'Shopify & International Scaling',
  },
  {
    id: 3,
    badge: 'Healthcare, Legal & Professional',
    title: 'Websites Built for Real Businesses',
    subtitle:
      'Healthcare, legal, home services, retail, fitness, travel and other businesses brought to life through custom digital experiences.',
    ctaText: 'Browse Business Websites',
    ctaTarget: '#healthcare',
    secondaryCtaText: 'Book a Consultation',
    secondaryCtaTarget: '#contact',
    imageUrl:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop',
    imageAlt: 'Professional clinic and business consultation environment',
    highlightTag: 'Client-Centric Solutions',
  },
  {
    id: 4,
    badge: 'Full-Stack Architecture & APIs',
    title: 'From Frontend Experiences to Backend Systems',
    subtitle:
      'Experience across custom applications, APIs, databases, integrations, booking systems and business platforms.',
    ctaText: 'See System Architecture',
    ctaTarget: '#skills',
    secondaryCtaText: 'Let’s Connect',
    secondaryCtaTarget: '#contact',
    imageUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
    imageAlt: 'Complex system telemetry, backend data, and high-performance engineering',
    highlightTag: 'Laravel, APIs & Cloud',
  },
  {
    id: 5,
    badge: 'Proven Track Record',
    title: 'Work That Speaks for Itself',
    subtitle:
      'Explore selected projects and discover the range of digital experiences I have helped build.',
    ctaText: 'Explore Selected Work',
    ctaTarget: '#work',
    secondaryCtaText: 'Start a Project',
    secondaryCtaTarget: '#contact',
    imageUrl:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop',
    imageAlt: 'Visual digital portfolio and cross-industry software deliverables',
    highlightTag: '40+ Selected Projects',
  },
];

export const TRUST_STATS: StatItem[] = [
  {
    number: '10+',
    label: 'Years IT Experience',
    detail: 'Total hands-on engineering across full lifecycle software systems',
  },
  {
    number: '5+',
    label: 'Years Shopify Experience',
    detail: 'Deep storefronts, Liquid, APIs, and custom theme engineering',
  },
  {
    number: '5–7',
    label: 'Years Laravel Experience',
    detail: 'Robust backend architecture, databases, and custom web applications',
  },
  {
    number: '40+',
    label: 'Selected Projects',
    detail: 'Real-world websites, stores, portals, and software integrations',
  },
  {
    number: 'Multiple',
    label: 'Industries Served',
    detail: 'Healthcare, legal, retail, dental, finance, fitness, and more',
  },
];

export const WHAT_I_CAN_BUILD: CapabilityCard[] = [
  {
    id: 'ecommerce',
    title: 'E-Commerce Experiences',
    category: 'Storefronts & Sales',
    description:
      'Online stores with customized shopping experiences, product systems, integrations, payment solutions and automation.',
    clientBenefit:
      'Tailored purchasing flows that make browsing intuitive, increase cart conversions, and handle payments smoothly.',
    iconName: 'ShoppingBag',
    examples: 'SACVIN, Brownkind Skincare, Audioengine, MillionCarats',
  },
  {
    id: 'business-websites',
    title: 'Custom Business Websites',
    category: 'Brand & Credibility',
    description:
      'Bespoke, high-performance websites engineered to represent established companies, trade contractors, and growing service firms.',
    clientBenefit:
      'Establish immediate market authority, educate prospective buyers, and convert inquiries into booked clients.',
    iconName: 'Building2',
    examples: 'Deschutes Plumbing, Canterbury, Aquavia',
  },
  {
    id: 'healthcare-websites',
    title: 'Healthcare Websites',
    category: 'Medical & Clinical',
    description:
      'Professional websites designed to help clinics and healthcare businesses present services, build trust and make it easier for visitors to connect.',
    clientBenefit:
      'Patient-first navigation, procedure information galleries, and direct appointment inquiry channels.',
    iconName: 'Stethoscope',
    examples: 'Aesthetic Smiles Dental, Prime Cardiology, KSOSN Nephrology',
  },
  {
    id: 'legal-websites',
    title: 'Professional & Legal Websites',
    category: 'Legal & Advisory',
    description:
      'Sophisticated web presence tailored for law firms, legal practitioners, and advisory partnerships.',
    clientBenefit:
      'Communicates deep legal expertise, case practice areas, and discreet consultation request workflows.',
    iconName: 'Scale',
    examples: 'Benjamin & Associates Immigration Law',
  },
  {
    id: 'custom-web-apps',
    title: 'Custom Web Applications',
    category: 'Software Solutions',
    description:
      'Dynamic web applications with secure user logins, real-time dashboards, administrative controls, and tailored logic.',
    clientBenefit:
      'Eliminates manual bottlenecks by automating proprietary business workflows in a dedicated portal.',
    iconName: 'Cpu',
    examples: 'WeeklyBaskets, Tutopics, Doorvela, ConcealedCoalition',
  },
  {
    id: 'booking-platforms',
    title: 'Booking Platforms',
    category: 'Scheduling & Appointments',
    description:
      'Interactive scheduling workflows, calendar booking systems, and automated email notifications.',
    clientBenefit:
      'Allows clients or customers to reserve services, tours, or rides around the clock without manual coordination.',
    iconName: 'CalendarCheck',
    examples: 'StuffyRider Kids Rides, Aquavia Tour Booking',
  },
  {
    id: 'business-automation',
    title: 'Business Automation',
    category: 'Operational Efficiency',
    description:
      'System-to-system data synchronization, automated inventory updates, and order routing.',
    clientBenefit:
      'Saves dozens of manual hours weekly by ensuring orders, products, and fulfillment flow automatically.',
    iconName: 'Workflow',
    examples: 'ITFRetail BigBuy Sync, Evolve Partner Systems',
  },
  {
    id: 'api-integrations',
    title: 'API Integrations',
    category: 'Connected Services',
    description:
      'Connecting websites to third-party payment gateways, logistics carriers, SMS alerts, and mobile apps.',
    clientBenefit:
      'Extends your platform with international payment options, automated freight calculation, and live tracking.',
    iconName: 'Network',
    examples: 'Paystack Gateway, GIG Logistics, Rowlout / Wahchat APIs',
  },
  {
    id: 'database-applications',
    title: 'Database-Driven Applications',
    category: 'Data Management',
    description:
      'Structured database architectures engineered for fast searches, dynamic filtering, reporting, and secure records.',
    clientBenefit:
      'Provides bulletproof data consistency, high-speed queries, and reliable reporting as user volume scales.',
    iconName: 'Database',
    examples: 'MakeYourTax, Virbula Barcode System, BlackFinSquar',
  },
  {
    id: 'shopify-solutions',
    title: 'Shopify Solutions',
    category: 'E-Commerce Platform',
    description:
      'Complete theme engineering, Liquid template development, Storefront API integrations, and checkout custom rules.',
    clientBenefit:
      'Bypasses theme limitations to deliver unique brand experiences, custom mega menus, and localized features.',
    iconName: 'Layers',
    examples: 'PouchShop, DrinkFlowBrew, Peak EnergyGum, OneSide',
  },
  {
    id: 'wordpress-solutions',
    title: 'WordPress Solutions',
    category: 'Content & CMS',
    description:
      'Custom theme creation, Elementor implementation, custom PHP hooks, translation plugins, and managed hosting.',
    clientBenefit:
      'Gives your marketing and operational teams full control over page content without sacrificing code speed.',
    iconName: 'FileCode2',
    examples: 'Melbourne Hip Surgeon, Repair Translate, IAdInfo',
  },
  {
    id: 'backend-systems',
    title: 'Backend Systems',
    category: 'Server & Architecture',
    description:
      'Enterprise backend services written in Laravel and PHP with clean MVC architecture, REST endpoints, and security layers.',
    clientBenefit:
      'Reliable, scalable foundation designed for uptime, data protection, role permissions, and seamless future growth.',
    iconName: 'Server',
    examples: 'IBC-Asia Multisite, IHelpMyCity Municipal Platform',
  },
];

export const FEATURED_PROJECT_SACVIN: Project = {
  id: 'sacvin',
  name: 'SACVIN',
  category: 'E-Commerce',
  industry: 'Manufacturing & Consumer Goods',
  featured: true,
  clientSummary:
    'Built and customized a modern international e-commerce store for the Nigerian market, implementing seamless local payment processing, specialized freight carrier integrations, interactive brand storytelling, and a modular content management layout.',
  workCompleted: [
    'Maintained and structured the catalog of store products',
    'Engineered custom homepage and landing page sections with flexible merchant settings',
    'Configured complex regional shipping rules and carrier rate calculations',
    'Integrated GIG Logistics custom carrier services for reliable Nigerian deliveries',
    'Integrated Paystack payment gateway for frictionless local currency payments',
    'Created custom interactive visual history timeline blocks inside the "Our Story" section',
    'Managed dynamic merchant settings using advanced Shopify Page Builder schemas',
  ],
  technologies: [
    'Shopify',
    'Liquid',
    'Paystack API',
    'GIG Logistics API',
    'Theme Customization',
    'Page Builder Schemas',
    'JavaScript',
  ],
  platform: 'Shopify',
  liveUrl: 'https://s6bcd1-ar.myshopify.com/',
  imageCategory: 'International E-Commerce',
  imageUrl:
    'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop',
  keyHighlight:
    'Full-featured Nigerian e-commerce implementation with Paystack & GIG Logistics integration.',
};

export const ALL_PROJECTS: Project[] = [
  // 1. SACVIN (Featured)
  FEATURED_PROJECT_SACVIN,

  // 2. DESCHUTES PLUMBING
  {
    id: 'deschutes-plumbing',
    name: 'Deschutes Plumbing',
    category: 'Home Services',
    industry: 'Contractor & Home Services',
    clientSummary:
      'Full-service plumbing contractor website serving Central Oregon with 25+ years of trusted experience, engineered for local customer trust, service visibility, and direct quote requests.',
    workCompleted: [
      'Engineered custom WordPress theme for high-converting service calls',
      'Configured responsive Elementor layout components',
      'Custom PHP backend extensions for appointment inquiry handling',
      'Optimized performance and caching on WP Engine managed hosting',
    ],
    technologies: ['WordPress Custom Theme', 'Elementor', 'PHP', 'WP Engine Hosting'],
    platform: 'WordPress',
    liveUrl: 'https://deschutesplumbing.com',
    devUrl: 'https://deschutescldev.wpenginepowered.com',
    imageCategory: 'Home Services & Plumbing',
    imageUrl:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1000&auto=format&fit=crop',
    keyHighlight: '25+ years Central Oregon plumbing contractor presence on WP Engine',
  },

  // 3. BENJAMIN & ASSOCIATES
  {
    id: 'benjamin-associates',
    name: 'Benjamin & Associates',
    category: 'Professional Services',
    industry: 'Immigration Law Firm',
    clientSummary:
      'High-credibility immigration law firm website for Benjamin Wiesinger, an Arizona-based attorney with 15+ years of litigation and appellate experience, focusing on client reassurance and case intake.',
    workCompleted: [
      'Developed custom WordPress theme reflecting legal professionalism',
      'Built practice area navigation and attorney background highlights using Elementor',
      'Engineered secure, confidential consultation intake forms',
      'Deployed on WP Engine with high availability and SSL configuration',
    ],
    technologies: ['WordPress Custom Theme', 'Elementor', 'WP Engine Hosting', 'PHP'],
    platform: 'WordPress',
    liveUrl: 'https://benjaminandassociates.com',
    devUrl: 'https://benjaminassdev.wpenginepowered.com',
    imageCategory: 'Legal & Law Firm',
    imageUrl:
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop',
    keyHighlight: 'Prestigious legal platform for an Arizona immigration attorney with 15+ yrs litigation',
  },

  // 4. KSOSN
  {
    id: 'ksosn',
    name: 'KSOSN — Kidney Specialists of Southern Nevada',
    category: 'Healthcare',
    industry: 'Nephrology & Dialysis Clinic',
    clientSummary:
      'Comprehensive clinical healthcare website providing patient care information, dialysis coordination, and kidney transplant support with a compassionate nephrology specialist team.',
    workCompleted: [
      'Custom WordPress theme tailored for patient clarity and accessibility',
      'Clear doctor directories and facility location coordination',
      'Intuitive nephrology service guides and patient portal connection points',
      'Deployed and maintained on WP Engine enterprise infrastructure',
    ],
    technologies: ['WordPress Custom Theme', 'Elementor', 'WP Engine Hosting', 'PHP'],
    platform: 'WordPress',
    liveUrl: 'https://www.ksosn.com',
    devUrl: 'https://ksosndev.wpengine.com',
    imageCategory: 'Healthcare & Nephrology',
    imageUrl:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop',
    keyHighlight: 'Southern Nevada kidney care and dialysis specialty network',
  },

  // 5. AESTHETIC SMILES DENTAL CLINIC
  {
    id: 'aesthetic-smiles',
    name: 'Aesthetic Smiles Dental Clinic',
    category: 'Healthcare',
    industry: 'Cosmetic & Family Dentistry',
    clientSummary:
      'San Francisco-based dental practice website showcasing cosmetic transformations, patient smile galleries, and family dental procedures including veneers, cleanings, and restorative treatments.',
    workCompleted: [
      'Engineered custom interactive Smile Gallery before-and-after photo showcase',
      'Built custom WordPress theme with bespoke PHP logic for visual cases',
      'Designed frictionless appointment inquiry and treatment information modules',
      'Optimized image delivery for lightning-fast visual gallery browsing',
    ],
    technologies: ['WordPress Custom Theme', 'PHP', 'Elementor', 'Smile Gallery Engine'],
    platform: 'WordPress',
    liveUrl: 'https://aestheticsmiles.com/smile-gallery',
    devUrl: 'https://a5c.bd2.myftpupload.com/smile-gallery',
    imageCategory: 'Dental & Cosmetic',
    imageUrl:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop',
    keyHighlight: 'Interactive Smile Gallery for a premier San Francisco dental practice',
  },

  // 6. PRIME CARDIOLOGY
  {
    id: 'prime-cardiology',
    name: 'Prime Cardiology',
    category: 'Healthcare',
    industry: 'Cardiology Specialist Care',
    clientSummary:
      'Patient-centered cardiac care website highlighting advanced cardiovascular technology, diagnostic procedures, and compassionate heart specialists.',
    workCompleted: [
      'Built tailored WordPress theme focusing on clarity, trust, and patient comfort',
      'Structured diagnostic procedure overviews and cardiologist profiles',
      'Optimized mobile responsiveness for urgent patient searches',
      'Configured secure staging and production workflows on WP Engine',
    ],
    technologies: ['WordPress Custom Theme', 'Elementor', 'WP Engine Hosting', 'PHP'],
    platform: 'WordPress',
    liveUrl: 'https://prime-cardiology.com',
    devUrl: 'https://primecardiostg.wpenginepowered.com',
    imageCategory: 'Cardiology & Healthcare',
    imageUrl:
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1000&auto=format&fit=crop',
    keyHighlight: 'Patient-centric cardiovascular specialty platform',
  },

  // 7. MELBOURNE HIP SURGEON
  {
    id: 'melbourne-hip-surgeon',
    name: 'Melbourne Hip Surgeon',
    category: 'Healthcare',
    industry: 'Orthopedic Surgery',
    clientSummary:
      'Specialist surgical practice website focused on hip replacements, arthroscopy, patient recovery journeys, and surgical consultation bookings in Australia.',
    workCompleted: [
      'Constructed clean, authoritative medical information layout',
      'Presented surgical procedural guides and patient recovery FAQs',
      'Implemented clean contact and appointment request channels',
    ],
    technologies: ['WordPress', 'PHP', 'Medical Theme Customization'],
    platform: 'WordPress',
    liveUrl: 'https://melbournehipsurgeon.com.au/',
    imageCategory: 'Orthopedic & Surgical',
    imageUrl:
      'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1000&auto=format&fit=crop',
    keyHighlight: 'Australian orthopedic surgery specialty practice',
  },

  // 8. BROWNKIND SKINCARE
  {
    id: 'brownkind-skincare',
    name: 'Brownkind Skincare',
    category: 'E-Commerce',
    industry: 'Dermatology & Skincare',
    clientSummary:
      'Science-based inclusive skincare brand dedicated to melanin-rich skin and cultural diversity, featuring customized product matching and interactive discovery guides.',
    workCompleted: [
      'Engineered custom Shopify Liquid templates for both frontend and backend logic',
      'Developed tailored "For You" personalized skin regimen discovery pages',
      'Integrated brand storytelling elements and ingredient breakdowns',
      'Customized checkout styling and subscription incentives',
    ],
    technologies: ['Shopify', 'Liquid Templates', 'Custom Theme', 'JavaScript', 'CSS3'],
    platform: 'Shopify',
    liveUrl: 'https://brownkind.com/pages/for-you',
    imageCategory: 'Beauty & Skincare',
    imageUrl:
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000&auto=format&fit=crop',
    keyHighlight: 'Science-backed inclusive skincare with customized interactive recommendation flows',
  },

  // 9. AUDIOENGINE
  {
    id: 'audioengine',
    name: 'Audioengine',
    category: 'E-Commerce',
    industry: 'High-Performance Audio & Electronics',
    clientSummary:
      'Flagship e-commerce platform for high-performance audio systems, wireless speakers, and DACs with premium sound and user-friendly consumer design.',
    workCompleted: [
      'Full Shopify frontend and backend template engineering',
      'Custom product specification tabs, sound comparisons, and audio accessory bundles',
      'High-performance asset loading for rich multimedia imagery and video banners',
      'Fine-tuned checkout workflows and multi-warehouse fulfillment support',
    ],
    technologies: ['Shopify', 'Liquid Templates', 'Custom Theme', 'REST APIs'],
    platform: 'Shopify',
    liveUrl: 'https://audioengine.com',
    imageCategory: 'Audio & Premium Tech',
    imageUrl:
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1000&auto=format&fit=crop',
    keyHighlight: 'High-performance audio hardware store with rich interactive product specs',
  },

  // 10. MILLIONCARATS
  {
    id: 'millioncarats',
    name: 'MillionCarats',
    category: 'E-Commerce',
    industry: 'Luxury Jewelry & Diamonds',
    clientSummary:
      'Ultra-luxury diamonds and bespoke jewelry store combining a modern ReactJS / NextJS frontend with a robust Shopify headless backend via REST APIs for dynamic ring configurations.',
    workCompleted: [
      'Architected high-speed modern frontend using ReactJS and NextJS',
      'Connected custom user interface to Shopify headless backend via REST APIs',
      'Created dynamic diamond selection and ring builder interfaces',
      'Optimized high-resolution gem imagery zoom and certification inspection displays',
    ],
    technologies: ['ReactJS', 'NextJS Frontend', 'Shopify Backend', 'REST APIs', 'Headless'],
    platform: 'Shopify + React/Next.js',
    liveUrl: 'https://www.themillioncarats.com',
    imageCategory: 'Luxury Jewelry',
    imageUrl:
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop',
    keyHighlight: 'Headless React / Next.js e-commerce connected to Shopify for luxury diamonds',
  },

  // 11. ITFRETAIL
  {
    id: 'itfretail',
    name: 'ITFRetail',
    category: 'E-Commerce',
    industry: 'Retail & Multi-Category Dropshipping',
    clientSummary:
      'Large-scale e-commerce store synchronized directly with BigBuy for automated product catalog synchronization, live inventory tracking, and hands-off fulfillment.',
    workCompleted: [
      'Configured automated catalog synchronization with BigBuy distributor feeds',
      'Implemented automatic stock replenishment and price updating mechanisms',
      'Customized Shopify theme for swift navigation across thousands of items',
    ],
    technologies: ['Shopify', 'BigBuy API Sync', 'Inventory Automation', 'Liquid'],
    platform: 'Shopify',
    liveUrl: 'https://itfretail.myshopify.com',
    imageCategory: 'Automated Retail',
    imageUrl:
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop',
    keyHighlight: 'Automated product synchronization with BigBuy distributor APIs',
  },

  // 12. ELITEFITNESS
  {
    id: 'elitefitness',
    name: 'EliteFitness',
    category: 'Fitness',
    industry: 'Commercial & Home Gym Equipment',
    clientSummary:
      'Leading Australian online store selling commercial-grade fitness products, cardio machines, strength racks, and gym accessories.',
    workCompleted: [
      'Customized Shopify theme for heavy-freight equipment delivery options',
      'Designed categorized equipment filtering for commercial gyms vs. home studios',
      'Optimized product specification sheets and warranty registration access',
    ],
    technologies: ['Shopify', 'Custom Theme', 'Liquid', 'Freight Rules'],
    platform: 'Shopify',
    liveUrl: 'https://www.elitefitness.com.au',
    imageCategory: 'Fitness & Gym',
    imageUrl:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
    keyHighlight: 'Australian online fitness equipment store with heavy freight rules',
  },

  // 13. POUCHSHOP
  {
    id: 'pouchshop',
    name: 'PouchShop',
    category: 'Retail',
    industry: 'Packaging & Sustainable Bags',
    clientSummary:
      'Specialized e-commerce store in New Zealand selling pouch and bag solutions with advanced dimension filtering and custom attribute sorting.',
    workCompleted: [
      'Engineered bespoke product filtering based on bag capacity, material, and closure type',
      'Customized theme templates for wholesale and retail ordering quantities',
      'Streamlined cart review and localized New Zealand tax calculations',
    ],
    technologies: ['Shopify', 'Custom Filtering', 'Liquid', 'JavaScript'],
    platform: 'Shopify',
    liveUrl: 'https://pouchshop.co.nz',
    imageCategory: 'Packaging & Retail',
    imageUrl:
      'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop',
    keyHighlight: 'New Zealand packaging store with custom capacity and dimension filters',
  },

  // 14. DRINKFLOWBREW
  {
    id: 'drinkflowbrew',
    name: 'DrinkFlowBrew',
    category: 'E-Commerce',
    industry: 'Craft Beverages & Brewing Accessories',
    clientSummary:
      'Vibrant e-commerce storefront dedicated to craft beverages, cold-brew gear, and barista-grade brewing accessories.',
    workCompleted: [
      'Crafted dynamic product collection displays and brewing tutorial highlights',
      'Engineered responsive bundle builder for specialty coffee and drink gear',
      'Optimized checkout flows for recurring subscription options',
    ],
    technologies: ['Shopify', 'Custom Theme', 'Liquid', 'Bundle Logic'],
    platform: 'Shopify',
    liveUrl: 'https://drinkflowbrew.com',
    imageCategory: 'Craft Beverages',
    imageUrl:
      'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=1000&auto=format&fit=crop',
    keyHighlight: 'Artisan beverage and brewing gear e-commerce experience',
  },

  // 15. MEERMIN
  {
    id: 'meermin',
    name: 'Meermin',
    category: 'E-Commerce',
    industry: 'Handcrafted Footwear & Luxury Goods',
    clientSummary:
      'Global shoe brand offering handcrafted footwear using a modern headless CMS architecture powered by Shopify and Builder.io.',
    workCompleted: [
      'Implemented headless CMS integration utilizing Builder.io with Shopify backend',
      'Delivered pixel-perfect editorial landing pages with high visual fidelity',
      'Engineered multi-currency and regionalized international storefront flows',
    ],
    technologies: ['Shopify', 'Builder.io', 'Headless CMS', 'Liquid', 'JavaScript'],
    platform: 'Shopify + Builder.io',
    liveUrl: 'https://int.meermin.com',
    imageCategory: 'Luxury Footwear',
    imageUrl:
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop',
    keyHighlight: 'Headless Builder.io + Shopify architecture for international footwear brand',
  },

  // 16. TUTTIBELLY
  {
    id: 'tuttibelly',
    name: 'TuttiBelly',
    category: 'Retail',
    industry: 'Custom Frames & Home Decor',
    clientSummary:
      'Specialized e-commerce store offering custom picture frames with bespoke schema customization for product personalization.',
    workCompleted: [
      'Engineered custom Shopify schema allowing dynamic frame dimensions and finishes',
      'Built live frame preview calculations on the product page',
      'Configured streamlined order packaging details',
    ],
    technologies: ['Shopify', 'Liquid', 'Custom Schema', 'JavaScript'],
    platform: 'Shopify',
    liveUrl: 'https://tuttibellibyb.com/',
    imageCategory: 'Home Decor & Frames',
    imageUrl:
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000&auto=format&fit=crop',
    keyHighlight: 'Custom frame builder with dynamic schemas and personalized product sizing',
  },

  // 17. ONESIDE
  {
    id: 'oneside',
    name: 'OneSide',
    category: 'Retail',
    industry: 'Apparel & Streetwear',
    clientSummary:
      'Australian apparel e-commerce store with custom recent-search integration, personalized browsing memory, and high-energy collection showcases.',
    workCompleted: [
      'Implemented client-side recent-search memory and instant predictive filtering',
      'Built responsive apparel grid with hover state video/image toggles',
      'Streamlined size guide modals and inventory status triggers',
    ],
    technologies: ['Shopify', 'Liquid', 'Recent-Search Integration', 'JavaScript'],
    platform: 'Shopify',
    liveUrl: 'https://oneside.com.au/collections/t-shirts',
    imageCategory: 'Apparel & Fashion',
    imageUrl:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop',
    keyHighlight: 'Australian streetwear store with custom recent-search and smart browsing memory',
  },

  // 18. DRASHLEY
  {
    id: 'drashley',
    name: 'Dr. Ashley Wellness',
    category: 'Healthcare',
    industry: 'Medical Products & Wellness',
    clientSummary:
      'Physician-backed wellness and medical product storefront with interactive health challenge landing pages and doctor-approved supplement regimens.',
    workCompleted: [
      'Constructed dedicated multi-step Challenge onboarding funnel pages',
      'Implemented physician credential proof sections and product bundles',
      'Enhanced cart retention with smart recommendation add-ons',
    ],
    technologies: ['Shopify', 'Liquid', 'Funnel Optimization', 'Custom Sections'],
    platform: 'Shopify',
    liveUrl: 'https://drashleywellness.com/pages/challenge',
    imageCategory: 'Medical Wellness',
    imageUrl:
      'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop',
    keyHighlight: 'Interactive health challenge funnel for medical wellness brand',
  },

  // 19. HOLLYCHARLOTTE
  {
    id: 'hollycharlotte',
    name: 'Holly Charlotte',
    category: 'Retail',
    industry: 'Branded Quality Clothing & Fashion',
    clientSummary:
      'Fashion boutique e-commerce store presenting curated branded clothing lines with clean visual typography and seasonal editorial lookbooks.',
    workCompleted: [
      'Customized theme aesthetics emphasizing high-fashion imagery',
      'Implemented seasonal collection lookbooks with direct shop-the-look tags',
      'Tuned mobile checkout steps for maximum completion rate',
    ],
    technologies: ['Shopify', 'Liquid', 'Theme Design', 'CSS3'],
    platform: 'Shopify',
    liveUrl: 'https://hollycharlotte.com/',
    imageCategory: 'Boutique Fashion',
    imageUrl:
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop',
    keyHighlight: 'Curated boutique apparel store with editorial styling',
  },

  // 20. BREATHING PLACE
  {
    id: 'breathing-place',
    name: 'Breathing Place',
    category: 'Fitness',
    industry: 'Yoga & Pilates Studio Equipment',
    clientSummary:
      'Specialized e-commerce platform offering pilates reformers, studio mats, and mindful wellness gear for instructors and home enthusiasts.',
    workCompleted: [
      'Built product comparison matrices for heavy studio apparatus',
      'Engineered clean, serene brand aesthetic matching the wellness domain',
      'Configured freight shipping rules for studio apparatus delivery',
    ],
    technologies: ['Shopify', 'Liquid', 'Custom Sections', 'Freight Setup'],
    platform: 'Shopify',
    liveUrl: 'https://breathingplacepilates.com/',
    imageCategory: 'Pilates & Wellness',
    imageUrl:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop',
    keyHighlight: 'Pilates and yoga studio equipment store with custom equipment specs',
  },

  // 21. PEAK ENERGYGUM
  {
    id: 'peak-energygum',
    name: 'Peak EnergyGum',
    category: 'E-Commerce',
    industry: 'Performance Nutrition & CPG',
    clientSummary:
      'Direct-to-consumer functional energy gum brand engineered with high-impact custom hero sections, flavor selection swatches, and subscription bundles.',
    workCompleted: [
      'Built custom interactive product showcase sections and nutrition facts badges',
      'Engineered flavor selection pill toggles with dynamic bundle discounting',
      'Optimized page speed for paid social traffic conversion',
    ],
    technologies: ['Shopify', 'Liquid', 'Custom Sections', 'JavaScript'],
    platform: 'Shopify',
    liveUrl: 'https://peakenergygum.com/',
    imageCategory: 'Energy & Nutrition',
    imageUrl:
      'https://images.unsplash.com/photo-1514995669114-6081e934b693?q=80&w=1000&auto=format&fit=crop',
    keyHighlight: 'High-energy CPG storefront with interactive bundle swatches',
  },

  // 22. CANTERBURY
  {
    id: 'canterbury',
    name: 'Canterbury Timber & Building Supplies',
    category: 'Home Services',
    industry: 'Building Materials & Timber Merchant',
    clientSummary:
      'Building materials e-commerce store featuring a heavy-duty custom mega menu, extensive timber dimension catalogs, and trade pricing inquiries.',
    workCompleted: [
      'Engineered a comprehensive multi-level custom mega menu for complex trade categories',
      'Built custom dimension specification selectors for structural timber',
      'Streamlined quote request integration for commercial trade accounts',
    ],
    technologies: ['Shopify', 'Custom Mega Menu', 'Liquid', 'Theme Architecture'],
    platform: 'Shopify',
    liveUrl: 'https://canterburytimber.myshopify.com/',
    imageCategory: 'Building & Timber',
    imageUrl:
      'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?q=80&w=1000&auto=format&fit=crop',
    keyHighlight: 'Custom mega menu engineering for architectural timber and building materials',
  },

  // 23. BATHMATE
  {
    id: 'bathmate',
    name: 'Bathmate',
    category: 'E-Commerce',
    industry: 'Personal Wellness & Consumer Goods',
    clientSummary:
      'High-volume international e-commerce brand store with custom theme components, discreet packaging options, and secure multi-currency checkout.',
    workCompleted: [
      'Enhanced Shopify theme structure for international consumer trust',
      'Engineered custom product feature sections and authenticity verification guides',
      'Optimized checkout speed and localized language options',
    ],
    technologies: ['Shopify', 'Liquid', 'International Checkout', 'Custom Themes'],
    platform: 'Shopify',
    imageCategory: 'Personal Goods',
    imageUrl:
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000&auto=format&fit=crop',
    keyHighlight: 'High-volume international e-commerce implementation',
  },

  // 24. STUFFYRIDER
  {
    id: 'stuffyrider',
    name: 'StuffyRider',
    category: 'Custom Applications',
    industry: 'Family Entertainment & Ride Rentals',
    clientSummary:
      'Kids motorized animal ride rental and birthday party booking service featuring automated schedule booking and reliable transactional email dispatch.',
    workCompleted: [
      'Configured custom WordPress booking system for mall locations and event parties',
      'Configured reliable SMTP transactional email server for instant booking receipts',
      'Engineered automated time slot availability rules',
    ],
    technologies: ['WordPress', 'PHP', 'Booking Engine', 'SMTP Email Configuration'],
    platform: 'WordPress',
    liveUrl: 'https://stuffyrider.com/',
    imageCategory: 'Family Entertainment',
    imageUrl:
      'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?q=80&w=1000&auto=format&fit=crop',
    keyHighlight: 'Kids party and motorized ride booking platform with reliable SMTP configuration',
  },

  // 25. REPAIR TRANSLATE
  {
    id: 'repair-translate',
    name: 'Repair Translate',
    category: 'Custom Applications',
    industry: 'Software Tools & Localization',
    clientSummary:
      'Specialized WordPress localization plugin designed to detect, repair, and sync translated string databases without breaking underlying template schemas.',
    workCompleted: [
      'Engineered custom WordPress translation plugin architecture',
      'Implemented database schema validation to repair corrupt language keys',
      'Built developer settings page with clear backup and rollback safety',
    ],
    technologies: ['WordPress Plugin Architecture', 'PHP', 'MySQL', 'Localization Engine'],
    platform: 'WordPress Plugin',
    liveUrl: 'https://teamwp.mydevfactory.com/sudip/repairtranslate',
    imageCategory: 'Developer Software',
    imageUrl:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop',
    keyHighlight: 'Bespoke WordPress translation and string repair plugin engine',
  },

  // 26. AQUAVIA
  {
    id: 'aquavia',
    name: 'Aquavia',
    category: 'Travel',
    industry: 'Luxury Travel & Water Excursions',
    clientSummary:
      'Tour-package booking website featuring cinematic video banners, destination discovery galleries, and guided itinerary booking flows.',
    workCompleted: [
      'Engineered responsive video hero banner with high-performance video compression',
      'Built structured tour package cards with itinerary highlights and pricing tiers',
      'Developed interactive booking inquiry channels',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Video Banners', 'Responsive Layouts'],
    platform: 'Custom Frontend',
    liveUrl: 'https://aquavia.com/',
    imageCategory: 'Travel & Excursions',
    imageUrl:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop',
    keyHighlight: 'Cinematic tour-package booking platform with optimized video banners',
  },

  // 27. DOORVELA
  {
    id: 'doorvela',
    name: 'Doorvela',
    category: 'Custom Applications',
    industry: 'Financial Adjustments & Tracking',
    clientSummary:
      'Financial adjustments and auditing web platform built on Laravel to track enterprise balance adjustments, fee corrections, and accounting ledger trails.',
    workCompleted: [
      'Architected Laravel database models for multi-entry audit trails',
      'Built secure role-based permissions for accountants and auditing officers',
      'Implemented real-time financial balance validation and reconciliation logic',
    ],
    technologies: ['Laravel', 'PHP', 'MySQL', 'Role-Based Access Control', 'Financial Logic'],
    platform: 'Laravel',
    liveUrl: 'https://doorvela.com/',
    imageCategory: 'Fintech & Accounting',
    imageUrl:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop',
    keyHighlight: 'Laravel financial adjustments and balance auditing platform',
  },

  // 28. EVOLVE
  {
    id: 'evolve',
    name: 'Evolve',
    category: 'Custom Applications',
    industry: 'Partnership Cards & Merchant Rewards',
    clientSummary:
      'Comprehensive custom card management and partner distribution platform, enabling merchants to co-issue cards, track commissions, and manage partner accounts.',
    workCompleted: [
      'Engineered robust Laravel administrative dashboard for partner card distribution',
      'Implemented merchant commission calculations and card batch activation tools',
      'Built secure authentication and administrative audit logging',
    ],
    technologies: ['Laravel', 'PHP', 'MySQL', 'Admin Dashboard', 'Partner Management'],
    platform: 'Laravel',
    adminUrl: 'https://evolve.mydevfactory.com/evolve-admin/public/admin/login',
    imageCategory: 'Financial Cards',
    imageUrl:
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1000&auto=format&fit=crop',
    keyHighlight: 'Partner card issuance and merchant rewards administration portal',
  },

  // 29. TUTOPICS
  {
    id: 'tutopics',
    name: 'Tutopics',
    category: 'Custom Applications',
    industry: 'Education & Academic Support',
    clientSummary:
      'Academic support and homework collaboration platform with anti-bot protection via Google reCAPTCHA v3 and student question routing.',
    workCompleted: [
      'Architected Laravel application backend for academic question submissions',
      'Integrated Google reCAPTCHA v3 to eliminate automated spam submissions',
      'Built categorized question directories for tutor assignments',
    ],
    technologies: ['Laravel', 'PHP', 'MySQL', 'Google reCAPTCHA v3', 'Academic Workflows'],
    platform: 'Laravel',
    liveUrl: 'https://www.tutopics.com/',
    imageCategory: 'Education & Learning',
    imageUrl:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop',
    keyHighlight: 'Academic support platform with Google reCAPTCHA v3 anti-bot verification',
  },

  // 30. WEEKLYBASKETS
  {
    id: 'weeklybaskets',
    name: 'WeeklyBaskets',
    category: 'E-Commerce',
    industry: 'Food & Fresh Produce Delivery',
    clientSummary:
      'Online farm-to-table platform selling fresh organic food and weekly vegetable subscription baskets directly to households.',
    workCompleted: [
      'Built custom Laravel backend handling recurring weekly produce schedules',
      'Implemented dynamic delivery zone checking and order batching for warehouse packing',
      'Engineered customer subscription management portal',
    ],
    technologies: ['Laravel', 'PHP', 'MySQL', 'Subscription Management', 'REST API'],
    platform: 'Laravel',
    liveUrl: 'https://www.weeklybaskets.com/#/home',
    imageCategory: 'Fresh Produce & Grocery',
    imageUrl:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop',
    keyHighlight: 'Farm-fresh grocery and vegetable weekly subscription platform',
  },

  // 31. CONCEALCOALITION
  {
    id: 'concealcoalition',
    name: 'Concealed Coalition',
    category: 'Custom Applications',
    industry: 'Safety Training & Certification',
    clientSummary:
      'Safety and certified training portal featuring fire extinguisher and safety training courses, scheduled classroom sessions, and certificate generation.',
    workCompleted: [
      'Engineered Laravel training enrollment and location scheduling engine',
      'Built student progression tracking across required safety modules',
      'Generated verifiable digital training completion certificates',
    ],
    technologies: ['Laravel', 'PHP', 'MySQL', 'Certification Engine'],
    platform: 'Laravel',
    liveUrl: 'https://www.concealedcoalition.com/',
    imageCategory: 'Safety & Training',
    imageUrl:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000&auto=format&fit=crop',
    keyHighlight: 'National safety and certified fire training scheduling portal',
  },

  // 32. IBC-ASIA
  {
    id: 'ibc-asia',
    name: 'IBC-Asia',
    category: 'Custom Applications',
    industry: 'International Conferences & Events',
    clientSummary:
      'Enterprise conference management platform supporting multiple interconnected event subsites, delegate ticketing, and conference agenda scheduling.',
    workCompleted: [
      'Architected Drupal 7 multisite installation with shared database records',
      'Constructed delegate ticketing registration and corporate group discounts',
      'Engineered dynamic conference speaker agendas and downloadable materials',
    ],
    technologies: ['Drupal 7.33', 'PHP', 'MySQL', 'Multisite Architecture'],
    platform: 'Drupal',
    imageCategory: 'Conferences & Events',
    imageUrl:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop',
    keyHighlight: 'Drupal multisite platform managing international conference subsites',
  },

  // 33. MAKEYOURTAX
  {
    id: 'makeyourtax',
    name: 'MakeYourTax',
    category: 'Custom Applications',
    industry: 'Taxation & Financial Compliance',
    clientSummary:
      'E-filing and income tax management platform facilitating tax computations, deduction optimization, and structured government tax forms.',
    workCompleted: [
      'Engineered tax calculation engines using CodeIgniter 3.x and MySQL',
      'Implemented secure data encryption for taxpayer financial figures',
      'Built automated computation formulas for diverse tax brackets',
    ],
    technologies: ['CodeIgniter 3.x', 'PHP', 'MySQL', 'Encryption', 'Tax Engine'],
    platform: 'CodeIgniter',
    imageCategory: 'Taxation & Finance',
    imageUrl:
      'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1000&auto=format&fit=crop',
    keyHighlight: 'Income tax calculation and e-filing system in CodeIgniter',
  },

  // 34. BLACKFINSQUAR
  {
    id: 'blackfinsquar',
    name: 'BlackFinSquar',
    category: 'Custom Applications',
    industry: 'IT Troubleshooting & Helpdesk',
    clientSummary:
      'Technical support and troubleshooting services ticketing platform connecting corporate clients to certified IT resolution specialists.',
    workCompleted: [
      'Constructed customer ticket dispatch and technician assignment algorithms',
      'Built service tier management in CodeIgniter with SLA response tracking',
      'Implemented client status notifications and resolution knowledge base',
    ],
    technologies: ['CodeIgniter 3.x', 'PHP', 'MySQL', 'Ticketing System'],
    platform: 'CodeIgniter',
    imageCategory: 'IT Helpdesk',
    imageUrl:
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop',
    keyHighlight: 'IT technical troubleshooting services dispatch management platform',
  },

  // 35. VIRBULA
  {
    id: 'virbula',
    name: 'Virbula',
    category: 'Custom Applications',
    industry: 'Retail Logistics & Barcode Systems',
    clientSummary:
      'High-speed online product ordering and warehouse fulfillment system using instant barcode scanning for zero-error inventory dispatch.',
    workCompleted: [
      'Engineered barcode scanning decoding logic integrated with warehouse inventory',
      'Constructed order picking verification workflows in CodeIgniter',
      'Decreased dispatch errors with instant audio-visual scan confirmations',
    ],
    technologies: ['CodeIgniter 3.x', 'PHP', 'MySQL', 'Barcode Integration'],
    platform: 'CodeIgniter',
    imageCategory: 'Barcode Logistics',
    imageUrl:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop',
    keyHighlight: 'Barcode-driven online ordering and warehouse fulfillment platform',
  },

  // 36. ROWLOUT / WAHCHAT / FITIQUITY
  {
    id: 'rowlout-wahchat-fitiquity',
    name: 'Rowlout / Wahchat / Fitiquity',
    category: 'APIs & Integrations',
    industry: 'Mobile Apps (iOS & Android)',
    clientSummary:
      'High-throughput backend REST APIs powering native iOS and Android mobile applications across social communication, fitness tracking, and community sharing.',
    workCompleted: [
      'Designed and engineered RESTful API architecture for native mobile clients',
      'Built fast JSON payload serialization for mobile network bandwidth efficiency',
      'Implemented token-based authentication and secure device handshake protocols',
      'Integrated push notification dispatch triggers',
    ],
    technologies: ['API Development', 'REST APIs', 'PHP', 'MySQL', 'Mobile Backend (iOS & Android)'],
    platform: 'Backend APIs',
    imageCategory: 'Mobile APIs',
    imageUrl:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop',
    keyHighlight: 'Core REST APIs engineered for high-concurrency native Android and iOS apps',
  },

  // 37. IADINFO
  {
    id: 'iadinfo',
    name: 'IAdInfo',
    category: 'Other',
    industry: 'Classifieds & Social Marketing',
    clientSummary:
      'Classified advertisement posting hub with automatic Facebook API syndication to broadcast community listings to targeted social audiences.',
    workCompleted: [
      'Built custom ad submission categories on WordPress 4.22',
      'Integrated Facebook Graph API for automated social posting upon ad approval',
      'Implemented media upload validation and spam moderation',
    ],
    technologies: ['WordPress 4.22', 'PHP', 'MySQL', 'Facebook API Integration'],
    platform: 'WordPress',
    imageCategory: 'Advertising & Social',
    imageUrl:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop',
    keyHighlight: 'Classified ad platform with automated Facebook social integration',
  },

  // 38. IHELPMYCITY
  {
    id: 'ihelpmycity',
    name: 'IHelpMyCity',
    category: 'Custom Applications',
    industry: 'Municipal & Public Services',
    clientSummary:
      'Civic engagement platform enabling citizens to report municipal infrastructure defects (potholes, streetlights, sanitation) directly to municipal ward officers.',
    workCompleted: [
      'Developed custom PHP and AJAX grievance submission portal with photo uploads',
      'Constructed MySQLi database schema tracking complaint resolution statuses',
      'Built administrative ward dashboard for municipal department assignments',
    ],
    technologies: ['Custom PHP', 'AJAX', 'MySQLi', 'Civic Tech', 'Admin Workflows'],
    platform: 'Custom PHP',
    imageCategory: 'Civic & Municipality',
    imageUrl:
      'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?q=80&w=1000&auto=format&fit=crop',
    keyHighlight: 'Citizen complaint submission and municipal resolution tracking platform',
  },
];

export const CATEGORIES: ProjectCategory[] = [
  'All',
  'E-Commerce',
  'Healthcare',
  'Professional Services',
  'Home Services',
  'Retail',
  'Travel',
  'Fitness',
  'Custom Applications',
  'APIs & Integrations',
  'Other',
];

export const INDUSTRIES_LIST: IndustryItem[] = [
  {
    name: 'Healthcare & Nephrology',
    description: 'Specialist clinical networks, dialysis support, and patient communication',
    iconName: 'Stethoscope',
    projectCount: 'KSOSN, Prime Cardiology, Dr. Ashley',
  },
  {
    name: 'Dental Care',
    description: 'Cosmetic dentistry, smile galleries, and patient consultation booking',
    iconName: 'Smile',
    projectCount: 'Aesthetic Smiles Dental Clinic',
  },
  {
    name: 'Cardiology',
    description: 'Heart specialist diagnostics, patient education, and hospital coordination',
    iconName: 'HeartPulse',
    projectCount: 'Prime Cardiology',
  },
  {
    name: 'Orthopedic Surgery',
    description: 'Surgical procedural guides, doctor portfolios, and recovery journeys',
    iconName: 'Activity',
    projectCount: 'Melbourne Hip Surgeon',
  },
  {
    name: 'Legal Services',
    description: 'Immigration law, attorney credentials, and confidential case intake',
    iconName: 'Scale',
    projectCount: 'Benjamin & Associates',
  },
  {
    name: 'Home Services & Contracting',
    description: 'Plumbing, trade contracting, residential quotes, and local SEO',
    iconName: 'Wrench',
    projectCount: 'Deschutes Plumbing',
  },
  {
    name: 'Global E-Commerce',
    description: 'International markets, multi-currency, and localized payment gateways',
    iconName: 'Globe',
    projectCount: 'SACVIN (Nigeria), Meermin (International)',
  },
  {
    name: 'Skincare & Cosmetics',
    description: 'Inclusive science-based beauty, shade matching, and custom routines',
    iconName: 'Sparkles',
    projectCount: 'Brownkind Skincare',
  },
  {
    name: 'High-Performance Audio',
    description: 'Audiophile electronics, wireless systems, and interactive tech specs',
    iconName: 'Headphones',
    projectCount: 'Audioengine',
  },
  {
    name: 'Luxury Jewelry',
    description: 'Bespoke diamonds, ring customizers, and headless e-commerce speed',
    iconName: 'Gem',
    projectCount: 'MillionCarats',
  },
  {
    name: 'Fashion & Apparel',
    description: 'Boutique lookbooks, streetwear drops, and predictive search memory',
    iconName: 'Shirt',
    projectCount: 'OneSide, Holly Charlotte',
  },
  {
    name: 'Fitness & Sports',
    description: 'Commercial gym equipment, heavy freight rules, and studio apparatus',
    iconName: 'Dumbbell',
    projectCount: 'EliteFitness, Breathing Place',
  },
  {
    name: 'Travel & Excursions',
    description: 'Luxury tour packages, video banners, and itinerary reservation',
    iconName: 'Compass',
    projectCount: 'Aquavia Tours',
  },
  {
    name: 'Fresh Food & Groceries',
    description: 'Farm-to-table delivery, weekly subscription boxes, and route packing',
    iconName: 'Utensils',
    projectCount: 'WeeklyBaskets',
  },
  {
    name: 'Building Materials',
    description: 'Timber merchant catalogs, architectural mega menus, and trade quotes',
    iconName: 'Boxes',
    projectCount: 'Canterbury Timber',
  },
  {
    name: 'Education & Academics',
    description: 'Homework collaboration, anti-bot protection, and subject directories',
    iconName: 'GraduationCap',
    projectCount: 'Tutopics',
  },
  {
    name: 'Financial & Accounting',
    description: 'Audit trails, ledger adjustments, partner cards, and tax e-filing',
    iconName: 'Coins',
    projectCount: 'Doorvela, MakeYourTax, Evolve',
  },
  {
    name: 'Mobile App Ecosystems',
    description: 'High-throughput backend REST APIs for iOS and Android native apps',
    iconName: 'Smartphone',
    projectCount: 'Rowlout, Wahchat, Fitiquity',
  },
  {
    name: 'Certified Safety Training',
    description: 'Safety compliance, fire certification, and class scheduling portals',
    iconName: 'ShieldCheck',
    projectCount: 'Concealed Coalition',
  },
  {
    name: 'Municipal & Public Sector',
    description: 'Civic infrastructure reporting, photo uploads, and department routing',
    iconName: 'Building',
    projectCount: 'IHelpMyCity',
  },
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    id: 'navsoft',
    company: 'Navsoft',
    role: 'System Engineer',
    period: '11/2025 – 06/2026',
    highlights: [
      'Spearheaded enterprise system integrations and backend architecture development',
      'Engineered scalable microservices and robust database optimization strategies',
      'Collaborated closely with cross-functional product teams to deliver client-tailored digital solutions',
    ],
    technologies: ['System Architecture', 'Backend Engineering', 'Database Optimization', 'APIs'],
  },
  {
    id: 'int',
    company: 'Int',
    role: 'Software Engineer',
    period: '07/2025 – 09/2025',
    highlights: [
      'Engineered core web application features and refined high-traffic transaction modules',
      'Accelerated system performance through database query caching and code refactoring',
    ],
    technologies: ['Software Engineering', 'Performance Optimization', 'Full-Stack'],
  },
  {
    id: 'branium',
    company: 'Branium Infotech',
    role: 'Sr. Software Engineer',
    period: '08/2023 – 02/2025',
    highlights: [
      'Led technical architecture and engineering of high-profile client websites and e-commerce stores',
      'Architected custom Shopify apps, custom Liquid templates, and third-party API integrations',
      'Mentored developers in code quality, security best practices, and client requirement translation',
    ],
    technologies: ['Shopify', 'Liquid', 'Laravel', 'API Integrations', 'Client Delivery'],
  },
  {
    id: 'codeclouds',
    company: 'Codeclouds IT Solutions',
    role: 'Sr. Web Developer',
    period: '06/2019 – 04/2023',
    highlights: [
      'Four years of high-intensity senior development across e-commerce, custom CRM platforms, and payment gateways',
      'Engineered and launched 20+ specialized Shopify and WordPress web platforms for international clients',
      'Configured complex international shipping logic, tax rules, and localized payment processors (Paystack, Stripe)',
    ],
    technologies: ['Shopify', 'WordPress', 'PHP', 'Payment Gateways', 'Carrier Logistics'],
  },
  {
    id: 'tier5',
    company: 'TIER5',
    role: 'Software Engineer',
    period: '05/2018 – 04/2019',
    highlights: [
      'Developed proprietary SaaS web applications and business automation engines',
      'Integrated RESTful APIs and modern frontend user experiences',
    ],
    technologies: ['SaaS Engineering', 'REST APIs', 'Laravel', 'JavaScript'],
  },
  {
    id: 'karmick',
    company: 'Karmick Solutions',
    role: 'Programmer',
    period: '02/2017 – 09/2017',
    highlights: [
      'Implemented custom PHP database applications and WordPress customer sites',
      'Debugged legacy software modules and optimized SQL queries',
    ],
    technologies: ['PHP', 'MySQL', 'WordPress', 'HTML5/CSS3'],
  },
  {
    id: 'indusnet',
    company: 'Indusnet Ltd',
    role: 'Software Engineer',
    period: '08/2015 – 02/2017',
    highlights: [
      'Built multi-tier business websites, e-commerce stores, and custom client portals',
      'Collaborated with UX designers and business analysts to translate complex business specs into clean software',
    ],
    technologies: ['PHP MVC', 'E-Commerce', 'MySQL', 'JavaScript'],
  },
  {
    id: 'webspiders',
    company: 'Webspiders',
    role: 'PHP Developer',
    period: '01/2014 – 07/2015',
    highlights: [
      'Engineered custom PHP and CMS applications for corporate international clients',
      'Integrated payment gateways and dynamic form processing',
    ],
    technologies: ['Custom PHP', 'AJAX', 'CMS Solutions', 'Relational Databases'],
  },
  {
    id: 'wipro',
    company: 'WIPRO',
    role: 'Tech Associate',
    period: '06/2012 – 12/2013',
    location: 'Saltlake, Kolkata',
    highlights: [
      'Provided enterprise technical systems analysis, quality assurance, and technical infrastructure support',
      'Established disciplined professional foundation in IT operational standards and client communications',
    ],
    technologies: ['Enterprise IT', 'Systems Analysis', 'Process Engineering'],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Frontend Core',
    description: 'Client-facing responsive interfaces, user interactions, and clean semantics',
    skills: [
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'jQuery', level: 'Expert' },
      { name: 'HTML5', level: 'Expert' },
      { name: 'CSS3', level: 'Expert' },
    ],
  },
  {
    category: 'Backend & Server',
    description: 'Robust server architecture, databases, business logic, and security',
    skills: [
      { name: 'Laravel', level: 'Expert (5–7 Yrs)' },
      { name: 'Custom PHP', level: 'Expert (10 Yrs)' },
      { name: 'MySQL / MySQLi', level: 'Expert' },
    ],
  },
  {
    category: 'E-Commerce & CMS Platforms',
    description: 'Storefront custom development, checkout customizations, and content management',
    skills: [
      { name: 'Shopify Ecosystem', level: 'Specialist (5+ Yrs)' },
      { name: 'Liquid Development', level: 'Expert' },
      { name: 'WordPress Custom Themes', level: 'Expert' },
      { name: 'Elementor Engine', level: 'Advanced' },
    ],
  },
  {
    category: 'Cloud, DevOps & Development',
    description: 'Version control, asynchronous interactions, and system communication',
    skills: [
      { name: 'Git Version Control', level: 'Advanced' },
      { name: 'API Development & REST', level: 'Advanced' },
      { name: 'AJAX Asynchronous Workflows', level: 'Expert' },
    ],
  },
  {
    category: 'Frameworks & Tools Exposure',
    description: 'Verified certification training and multi-stack cross-platform capabilities',
    skills: [
      { name: 'ReactJS', level: 'Certified' },
      { name: 'NodeJS', level: 'Certified' },
      { name: 'AngularJS', level: 'Certified' },
      { name: 'MongoDB', level: 'Certified' },
      { name: 'ASP.NET & C#', level: 'Certified' },
      { name: 'Drupal CMS', level: 'Certified' },
      { name: 'CodeIgniter MVC', level: 'Certified' },
      { name: 'Android Application Basics', level: 'Certified' },
      { name: 'AWS Cloud', level: 'In Progress' },
      { name: 'Docker & Kubernetes', level: 'In Progress' },
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-shopify',
    title: 'Certified in Shopify App, Liquid Development and Storefront API',
    institution: 'Udemy',
    status: 'Completed',
  },
  {
    id: 'cert-react',
    title: 'Certified in ReactJS',
    institution: 'Udemy',
    status: 'Completed',
  },
  {
    id: 'cert-node',
    title: 'Certified in Node JS',
    institution: 'Udemy',
    status: 'Completed',
  },
  {
    id: 'cert-angular',
    title: 'Certified in AngularJS',
    institution: 'Udemy',
    status: 'Completed',
  },
  {
    id: 'cert-mongo',
    title: 'Certified in MongoDB',
    institution: 'Udemy',
    status: 'Completed',
  },
  {
    id: 'cert-php-mysql',
    title: 'Certified in Custom PHP / Ajax and MySQL',
    institution: 'CMC Ltd Barrackpore',
    status: 'Completed',
  },
  {
    id: 'cert-dotnet',
    title: 'Certified in ASP.NET and C#',
    institution: 'CMC Ltd Barrackpore',
    status: 'Completed',
  },
  {
    id: 'cert-wp',
    title: 'Certified in WordPress',
    institution: 'Acesoftech Pvt Ltd Kolkata',
    status: 'Completed',
  },
  {
    id: 'cert-drupal',
    title: 'Certified in Drupal',
    institution: 'Acesoftech Pvt Ltd Kolkata',
    status: 'Completed',
  },
  {
    id: 'cert-codeigniter',
    title: 'Certified in CodeIgniter',
    institution: 'Acesoftech Pvt Ltd Kolkata',
    status: 'Completed',
  },
  {
    id: 'cert-jquery',
    title: 'Certified in jQuery',
    institution: 'Acesoftech Pvt Ltd Kolkata',
    status: 'Completed',
  },
  {
    id: 'cert-android',
    title: 'Certified in Android',
    institution: 'Ejob India Kolkata',
    status: 'Completed',
  },
  {
    id: 'cert-aws',
    title: 'AWS Certification',
    institution: 'Udemy',
    status: 'In Progress',
  },
  {
    id: 'cert-docker-k8s',
    title: 'Docker and Kubernetes Certification',
    institution: 'Udemy',
    status: 'In Progress',
  },
];

export const EDUCATION_RECORDS: EducationRecord[] = [
  {
    degree: 'MCA — Master of Computer Applications',
    institution: 'Bengal College of Engineering & Technology, Durgapur',
    universityBoard: 'West Bengal University of Technology (WBUT)',
    year: '2011',
    score: 'First Class — 74%',
  },
  {
    degree: 'BCA — Bachelor of Computer Applications',
    institution: 'National Institute of Management and Technology (SMU)',
    universityBoard: 'Sikkim Manipal University',
    year: '2006',
    score: 'First Class — 76%',
  },
  {
    degree: 'Higher Secondary (10+2)',
    institution: 'Bholananda National Vidhlaya',
    universityBoard: 'CBSE Board',
    year: '2003',
    score: 'Second Class — 48%',
  },
  {
    degree: 'Secondary Examination (10th)',
    institution: 'St. Augustine Day School',
    universityBoard: 'ICSE Board',
    year: '2001',
    score: 'First Class — 61.2%',
  },
];

export const WHY_WORK_WITH_ME = [
  {
    title: 'REAL PROJECT EXPERIENCE',
    tagline: 'Production-tested digital solutions',
    description:
      'A rich portfolio spanning e-commerce, healthcare, professional services, custom applications, and business systems built for actual operating enterprises.',
    icon: 'FolderCheck',
  },
  {
    title: 'CROSS-INDUSTRY EXPERIENCE',
    tagline: 'Understanding your business domain',
    description:
      'Extensive experience adapting software to distinct business models — from specialized medical clinics and law firms to global direct-to-consumer retail brands.',
    icon: 'Briefcase',
  },
  {
    title: 'FULL-STACK EXPERIENCE',
    tagline: 'Frontend delight to backend stability',
    description:
      'Capability spanning frontend consumer interfaces, custom checkout flows, backend databases, API integrations, and payment processor logic.',
    icon: 'Layers',
  },
  {
    title: 'LONG-TERM ENGINEERING EXPERIENCE',
    tagline: '10 years of consistent technical delivery',
    description:
      'A decade of professional IT industry experience delivering dependable, secure, and maintainable software that scales with your business.',
    icon: 'Award',
  },
];
