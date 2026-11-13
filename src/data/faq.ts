// Frequently asked questions on the About page, shown in this order.
// Answers can include simple HTML such as <a href="...">links</a> or <em>emphasis</em>.

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: 'Why "the Rambling Somnambulist"?',
    // DRAFT: suggested answer based on the site's tagline. Replace with the real story.
    answer:
      'A somnambulist is a sleepwalker, and some days that is exactly how life feels: moving through it half-awake, noticing odd little things along the way. The rambling part is the writing. This site is where those wandering thoughts end up, unpolished and in no particular order.',
  },
  {
    question: 'What do you write about?',
    answer:
      'Whatever has my attention: half-formed ideas, things I am learning, books and articles I have stumbled onto, and the occasional late-night tangent. The <a href="/interests/">Interests</a> page has the topics I keep coming back to.',
  },
  {
    question: 'How often do you post?',
    // PLACEHOLDER: replace with your own answer, or delete this question.
    answer: 'Placeholder: say roughly how often new posts appear, or that it is whenever inspiration strikes.',
  },
];
