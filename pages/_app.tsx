// pages/_app.js or pages/_app.tsx, or in a specific page like pages/index.js
import Layout from "../src/app/components/Layout";

const MyApp = ({ Component, pageProps }: any) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
