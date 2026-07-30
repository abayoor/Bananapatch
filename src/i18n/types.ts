export type Locale = 'ru' | 'kk' | 'en';

export type SiteContent = {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  language: {
    aria: string;
    ru: string;
    kk: string;
    en: string;
  };
  nav: {
    problem: string;
    solution: string;
    formula: string;
    team: string;
    contact: string;
    homeAria: string;
    openMenu: string;
    closeMenu: string;
    navigationAria: string;
  };
  hero: {
    badge: string;
    titleLines: { text: string; accent?: boolean }[];
    titleAria: string;
    lead: string;
    learnMore: string;
    contact: string;
    imageAlt: string;
    imageLabel: string;
    productLabel: string;
    plantMetric: string;
    costMetric: string;
    scrollCue: string;
  };
  ticker: string[];
  problem: {
    eyebrow: string;
    title: [string, string];
    copy: string;
    annualLoss: string;
    price: string;
    responseTime: string;
    hourUnit: string;
  };
  solution: {
    eyebrow: string;
    title: string;
    copy: string;
    benefits: { title: string; copy: string }[];
    imageAlt: string;
    imageLabel: string;
    package: string;
    dressing: string;
    powder: string;
  };
  formula: {
    eyebrow: string;
    title: [string, string];
    copy: string;
    conclusion: string;
    visualAria: string;
    bananaAlt: string;
    bananaLabel: string;
    crossAlt: string;
    crossLabel: string;
    caption: string;
    layers: { title: string; copy: string }[];
  };
  uniqueness: {
    eyebrow: string;
    title: [string, string];
    copy: string;
    unitPrice: string;
    costStructure: string;
    barAria: string;
    donutAria: string;
    costLabel: string;
    costEntries: string[];
    marginCopy: string;
  };
  audience: {
    eyebrow: string;
    title: string;
    copy: string;
    flagLabel: string;
    countries: { name: string; points: string[] }[];
  };
  scaling: {
    eyebrow: string;
    title: string;
    copy: string;
    tableAria: string;
    indicator: string;
    pilot: string;
    growth: string;
    scale: string;
    rowLabels: string[];
    costDownTitle: string;
    costDownCopy: string;
    marginUpTitle: string;
    marginUpCopy: string;
  };
  trust: { title: string; subtitle: string }[];
  team: {
    eyebrow: string;
    title: string;
    copy: string;
    members: { name: string; role: string; copy: string; alt: string }[];
  };
  footer: {
    eyebrow: string;
    title: [string, string];
    copy: string;
    copyright: string;
    backToTop: string;
  };
  notFound: {
    title: string;
    back: string;
  };
  mediaFallback: string;
};
