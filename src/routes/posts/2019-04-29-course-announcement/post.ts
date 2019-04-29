export default {
  title: `Announcing my react course post series`,
  tags: ['announcements, react course'],
  spoiler:
    'I will be writing posts with lessons about web development aimed at beginners.',
  languages: ['English', 'Polish'],
  getContent: () => import('./document-' + 'English' + '.mdx')
};
