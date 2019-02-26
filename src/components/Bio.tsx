import React from "react";
import styles from "./Bio.module.css";
import { getGravatarURL } from "../utils/getGravatarURL";

interface BioProps {
  className?: string;
}

function Bio(props: BioProps) {
  let photoURL = getGravatarURL({
    email: "marek.calus3@gmail.com",
    size: 56
  });

  return (
    <div
      className={`
      ${styles.Bio}
      ${props.className || ""}
    `}
    >
      <img src={photoURL} alt="Me" />
      <p>
        Blog, by <a href="https://twitter.com/marek_us">Marek Calus</a>.
        <br />
        Created in{" "}
        <a href="https://github.com/frontarm/create-react-blog">
          npx create-react-blog
        </a>{" "}
        by James K Nelson, themed after Gatsby's blog starter and Dan Abramov's{" "}
        <a href="https://overreacted.io/">overreacted.io</a>.<br />
        Based on{" "}
        <a href="https://facebook.github.io/create-react-app/">
          create-react-app
        </a>
        , <a href="https://mdxjs.com/">MDX</a>, and{" "}
        <a href="https://frontarm.com/navi/">Navi</a>.
      </p>
    </div>
  );
}

export default Bio;
