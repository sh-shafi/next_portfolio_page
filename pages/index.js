import Head from "next/head";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Newsletter from "../src/components/Newsletter";
import Education from "../src/components/Education";
import Layout from "../src/layout/Layout";
import About from "../src/components/About";
import News from "../src/components/News";

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>Dizme | Home</title>
      </Head>
      <Home />
      <About />
      <News />
      <Newsletter />
      <Education />
      <Contact />
    </Layout>
  );
};
export default Index;
