import * as Navi from "navi";

export default Navi.route({
  title: "Invitation",
  getView: () => import("./document.mdx")
});
