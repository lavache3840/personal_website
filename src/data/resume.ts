// Resume content for /resume/. This page is not linked from the top tabs.
//
// DRAFT: the roles and education below come from public third-party profiles
// (The Org and Village.ai), not from you. Check every line, then set DRAFT to false
// to remove the "draft" notice from the page.

export const DRAFT = true;

// Shown under Contact on the resume page. Leave '' to hide it.
export const email = 'rajivkpunja@gmail.com';

export interface Role {
  title: string;
  org: string;
  location?: string;
  start: string; // e.g. 'Mar 2021'
  end: string; // e.g. 'Dec 2023' or 'Present'
  points?: string[];
  // Small icon before the company name. Put the file in public/logos/.
  // Roles without a logo get a lettered badge (logoText, or the company's initials).
  logo?: string;
  logoBg?: string; // tile color behind the logo
  logoText?: string;
}

export interface Education {
  degree: string;
  school: string;
  year?: string;
}

export const summary =
  'Investor, operator, and founder working where finance, insurance, and technology meet. Experience building and running (re)insurance and investment businesses, from a Lloyd’s syndicate to insurance-linked securities and data products.';

export const experience: Role[] = [
  {
    title: 'Founder & Chief Executive Officer',
    org: 'DataBraid',
    location: 'London',
    logo: '/logos/databraid.png',
    logoBg: '#ffffff',
    start: 'Jan 2024',
    end: 'Jun 2025',
    points: ['Placeholder: one or two lines on what DataBraid does and what you built.'],
  },
  {
    title: 'Chief Investment Officer',
    org: 'Ledger Investing',
    logo: '/logos/ledger.svg',
    logoBg: '#ffffff',
    start: 'Mar 2021',
    end: 'Dec 2023',
    points: ['Placeholder: key responsibilities or results.'],
  },
  {
    title: 'Chief Executive Officer',
    org: 'Ledger ILS Managers',
    logo: '/logos/ledger.svg',
    logoBg: '#ffffff',
    start: 'Oct 2021',
    end: 'Jan 2023',
    points: ['Placeholder: key responsibilities or results.'],
  },
  {
    title: 'Chief Executive Officer & Founding Principal',
    org: 'Arcus 1856',
    logo: '/logos/arcus-1856.png',
    logoBg: '#ffffff',
    start: '2015',
    end: '2021',
    points: ['Led the set-up of a technology-focused Lloyd’s (re)insurance syndicate.'],
  },
  {
    title: 'Vice President, Insurance Linked Strategies',
    org: 'Credit Suisse',
    logo: '/logos/credit-suisse.svg',
    logoBg: '#ffffff',
    start: '2011',
    end: '2015',
    points: ['Placeholder: key responsibilities or results.'],
  },
];

export const education: Education[] = [
  { degree: 'Master’s (Finance)', school: 'Columbia University' },
  { degree: 'Juris Doctor (JD)', school: 'Case Western Reserve University School of Law' },
  { degree: 'Bachelor’s (Liberal Arts)', school: 'Oberlin College' },
];

export const skills: string[] = [
  'Insurance-linked securities',
  '(Re)insurance',
  'Structured credit',
  'Investment management',
  'Product strategy',
  'Company building',
];
