import Head from "next/head";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Newsletter from "../src/components/Newsletter";
import Layout from "../src/layout/Layout";

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>Dizme | Home</title>
      </Head>
      <Home />
      <Newsletter />
      <Contact />
    </Layout>
  );
};
export default Index;
