import { Route } from "navi";
import React from "react";
import { Link } from "react-navi";
import siteMetadata from "../siteMetadata";
import ArticleSummary from "./ArticleSummary";
import Bio from "./Bio";
import Pagination from "./Pagination";
import styles from "./BlogIndexPage.module.css";

interface BlogIndexPageProps {
  blogRoot: string;
  pageCount: number;
  pageNumber: number;
  postRoutes: Route[];
}

function BlogIndexPage({
  blogRoot: blogRoot,
  pageCount,
  pageNumber,
  postRoutes
}: BlogIndexPageProps) {
  return (
    <div>
      <header>
        <h1 className={styles.title}>
          <Link href={blogRoot}>{siteMetadata.title}</Link>
        </h1>
        <Bio />
      </header>
      <ul className={styles.articlesList}>
        {postRoutes.map(route => (
          <li key={route.url.href}>
            <ArticleSummary blogRoot={blogRoot} route={route} />
          </li>
        ))}
      </ul>
      {pageCount > 1 && (
        <Pagination
          blogRoot={blogRoot}
          pageCount={pageCount}
          pageNumber={pageNumber}
        />
      )}
      <footer className={styles.footer}>
        <div>
          <Link href="./about">About me</Link> &bull;{" "}
          <Link href="./tags">Tags</Link> &bull;{" "}
          <a href="https://github.com/mcalus3/create-react-blog">
            Send me a pull request!
          </a>{" "}
          &bull;{" "}
          <a href="http://eepurl.com/gmEEnX">Subscribe to my newsletter</a>{" "}
          &bull;{" "}
          <a href="./rss.xml" target="_blank">
            RSS
          </a>
        </div>
      </footer>
    </div>
  );
}

export default BlogIndexPage;
