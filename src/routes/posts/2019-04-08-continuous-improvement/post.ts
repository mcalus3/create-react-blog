export default {
  title: `Continuous improvement`,
  tags: ['thoughts'],
  spoiler: "I've invented a method to improve my workplace.",
  languages: ['English', 'Polish'],
  getContent: () => import('./document-' + 'English' + '.mdx')
};
