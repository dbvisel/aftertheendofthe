import { Fragment } from "react";
import Head from "next/head";
import Footer from "@components/Footer";
import Header from "@components/Header";

export default function Layout({ children, title, slug }) {
  console.log(slug);
  return (
    <div className="wrapper">
      <Head>
        <title>After the end of the {title}</title>
        <meta name="description" content="A project by Dan Visel" />
        <link rel="canonical" href={`https://aftertheendofthe.world/${slug}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title={title} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
