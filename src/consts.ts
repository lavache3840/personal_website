// Site-wide settings. Edit these first.

export const SITE = {
  // The persona used everywhere on the site (header, footer, page titles, home page).
  name: 'The Rambling Somnambulist',
  title: 'The Rambling Somnambulist',
  description: 'Wandering thoughts, half-awake notes, and whatever has my attention lately.',
  // One-line tagline shown on the home page.
  tagline: 'Random thoughts, sleep-walking through life.',
  email: 'you@example.com', // TODO: replace or remove
};

// Your real name. Only the About page uses it.
export const AUTHOR = {
  name: 'Rajiv Punja',
};

// Leave a value as '' to hide that link.
export const SOCIAL = {
  github: '',
  linkedin: 'https://www.linkedin.com/in/rajiv-punja/',
  instagram: '',
};

// `dot` matches the colored dot in each page's pill (see .dot-* in global.css).
export const NAV = [
  { href: '/', label: 'Home', dot: 'dot-green' },
  { href: '/about/', label: 'About', dot: 'dot-amber' },
  { href: '/interests/', label: 'Interests', dot: 'dot-pink' },
  { href: '/blog/', label: 'Blog', dot: 'dot-violet' },
];
