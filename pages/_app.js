import Layout from "@components/Layout";
import "@styles/globals.css";

function Application({ Component, pageProps }) {
  // console.log(pageProps);
  return (
    <Layout title={pageProps.title}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default Application;
