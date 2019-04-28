import React from 'react';
import { Helmet } from 'react-helmet';
import siteMetadata from './siteMetadata';

const Head = () => (
  <Helmet>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-139205117-1"
    />
    <script>
      {`
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'UA-139205117-1');
  `}
    </script>

    <meta charSet="utf-8" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="apple-mobile-web-app-title" content="mcalus blog" />
    <meta name="application-name" content="mcalus blog" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="theme-color" content="#cf000f" />
    <meta
      name="Description"
      content="Personal blog for programmers by Marek Calus"
    />
    <link rel="canonical" href="https://mcalus.netlify.com" />
    <title>mcalus blog</title>
  </Helmet>
);

export default Head;
