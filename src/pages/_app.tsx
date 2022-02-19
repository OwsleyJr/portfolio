import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.css";
import "animate.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
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
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
