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
        Bootstrapped by{" "}
        <a href="https://github.com/frontarm/create-react-blog">
          create-react-blog
        </a>{" "}
        by James K Nelson.
      </p>
    </div>
  );
}

export default Bio;
