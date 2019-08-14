export default {
  title: `organisational post`,
  tags: ['announcments'],
  spoiler: 'What I will be writing in the nearest future.',
  languages: ['English'],
  getContent: () => import('./document-' + 'English' + '.mdx')
};
