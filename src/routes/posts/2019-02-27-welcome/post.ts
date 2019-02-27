export default {
  title: `Welcome to my blog!`,
  tags: ["blog"],
  spoiler: "Announcment of the blog.",
  getContent: () => import("./document.mdx")
};
