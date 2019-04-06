export default {
  title: `Continous improvement part 2`,
  tags: ['thoughts'],
  spoiler: "Couple of things that I've noticed lately to be improved.",
  languages: ['English', 'Polish'],
  getContent: () => import('./document-' + 'English' + '.mdx')
};
