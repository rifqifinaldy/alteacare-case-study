import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/layouts/layouts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Meta Tags */}
      <Head>
        <title>Alteacare - Case Study- Rifqi Finaldy</title>
        <meta
          name="description"
          content="Alteacare - Case Study - Rifqi Finaldy"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Actual UI/Page/Components */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
