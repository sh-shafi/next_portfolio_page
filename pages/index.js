import Head from "next/head";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Newsletter from "../src/components/Newsletter";
import Education from "../src/components/Education";
import Layout from "../src/layout/Layout";
import About from "../src/components/About";
import Publications from "../src/components/Publications";
import News from "../src/components/News";
import Projects from "../src/components/Projects";
import Employment from "../src/components/Employment"

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>Ranjitha Kumar | Portfolio</title>
      </Head>
      <Home />
      <About />
      <Projects />
      <News />
      <Publications />
      <Newsletter />
      <Education />
      <Employment />
      <Contact />
    </Layout>
  );
};
export default Index;
