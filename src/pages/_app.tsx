import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  const url = `http://z3hn.dev${router.route}`;

  return (
    <>
      <Head>
        <title>z3hn.dev</title>
        <meta name="description" content="This is my portfolio" />
        <meta property="og:site_name" content="z3hn.dev" data-rh="true"></meta>
        <meta property="og:title" content="z3hn.dev" data-rh="true"></meta>

        <meta
          property="og:description"
          content="This is my portfolio"
          data-rh="true"
        ></meta>
        <meta
          property="og:url"
          content="https://z3hn.dev"
          data-rh="true"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} canonical={url} key={url} />
    </>
  );
}

export default MyApp;
