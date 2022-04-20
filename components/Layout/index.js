import { Fragment } from "react";
import Head from "next/head";
import Footer from "@components/Footer";
import Header from "@components/Header";

export default function Layout({ children, title }) {
  return (
    <div className="wrapper">
      <Head>
        <title>After the end of the</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title={title} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
