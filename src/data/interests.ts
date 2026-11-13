// Things you're into. The Interests page and the home page render this list.

export interface Interest {
  title: string;
  summary: string;
}

export const interests: Interest[] = [
  {
    title: 'Something I keep coming back to',
    summary:
      'A few sentences on a topic you can’t stop thinking about: what pulled you in and what you’re still trying to figure out.',
  },
  {
    title: 'A rabbit hole I fell into',
    summary:
      'Something you stumbled on and went way too deep into. Link to a post about it if you’ve written one.',
  },
  {
    title: 'Currently tinkering with',
    summary: 'A side project, hobby, or experiment in progress. Delete any of these you don’t need.',
  },
];
