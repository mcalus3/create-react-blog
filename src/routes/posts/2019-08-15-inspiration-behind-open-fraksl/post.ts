export default {
  title: `Inspiration behind open-fraksl`,
  tags: ['react', 'open-fraksl'],
  spoiler: 'My current pet project - its inspiration, goals, and history.',
  languages: ['English'],
  getContent: () => import('./document-' + 'English' + '.mdx')
};
