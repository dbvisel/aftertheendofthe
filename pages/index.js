import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>After the end of the</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="After the end of the" />
        <p className="description">soon.</p>
      </main>

      <Footer />
    </div>
  );
}
