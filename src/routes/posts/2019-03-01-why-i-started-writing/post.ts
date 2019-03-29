export default (language: string = "English") => ({
  title: `Why I started writing?`,
  tags: ["announcments", "thoughts"],
  spoiler: "Rationale for starting the blog.",
  languages: ["English", "Polish"],
  getContent: () => import("./document-" + language + ".mdx")
});
