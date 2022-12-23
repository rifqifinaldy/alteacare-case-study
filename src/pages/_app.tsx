import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "src/layouts/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Alteacare - Case Study- Rifqi Finaldy</title>
        <meta
          name="description"
          content="Alteacare - Case Study - Rifqi Finaldy"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1 className="text-[20px] text-primary">Toolbar</h1>
        <Component {...pageProps} />;
      </Layout>
    </>
  );
}
