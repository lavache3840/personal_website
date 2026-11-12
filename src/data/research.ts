// Research content. Edit these lists; the Research page renders them.

export interface Interest {
  title: string;
  summary: string;
}

export interface Publication {
  title: string;
  authors: string;
  venue: string; // journal, conference, or "Preprint"
  year: number;
  links?: { label: string; href: string }[]; // e.g. PDF, DOI, arXiv, code
}

export const interests: Interest[] = [
  {
    title: 'Research area one',
    summary:
      'A short paragraph on this area: the questions you care about, why they matter, and how you approach them.',
  },
  {
    title: 'Research area two',
    summary:
      'Another area of interest. Two to four sentences is usually right; link out to papers or posts for depth.',
  },
  {
    title: 'Research area three',
    summary: 'Optional third area. Delete any you do not need.',
  },
];

export const publications: Publication[] = [
  {
    title: 'Example paper title',
    authors: 'R. Punja, A. Collaborator',
    venue: 'Preprint',
    year: 2026,
    links: [{ label: 'PDF', href: '#' }],
  },
];
