import { join } from "path";
export default (language: string = "English") => ({
  title: `Why I started writing?`,
  tags: ["announcments", "thoughts"],
  spoiler: "Rationale for starting the blog.",
  languages: ["English"],
  getContent: () => import(join("./document-", language, ".mdx"))
});
