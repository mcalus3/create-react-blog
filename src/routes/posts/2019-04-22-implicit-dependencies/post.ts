export default {
  title: `Implicit dependencies and how to spot them`,
  tags: ['thoughts', 'code'],
  spoiler:
    "There is one rule that comes to my head about which I haven't seen any detailed description on blogs and books. Avoid implicit dependencies in the code.",
  languages: ['English'],
  getContent: () => import('./document-' + 'English' + '.mdx')
};
