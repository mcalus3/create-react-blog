export default {
  title: `About learning`,
  tags: ["thoughts"],
  spoiler: "Couple thoughts about how and how much should you learn.",
  languages: ["English", "Polish"],
  getContent: () => import("./document-" + "English" + ".mdx")
};
