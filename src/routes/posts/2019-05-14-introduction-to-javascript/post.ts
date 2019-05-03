export default {
  title: `React course 1 - the Javascript language`,
  tags: ['react course'],
  spoiler: 'What is the Javascript language and how to learn it.',
  languages: ['English', 'Polish'],
  getContent: () => import('./document-' + 'English' + '.mdx')
};
