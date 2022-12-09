import Education from "../src/components/Education";
import Head from "next/head";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Publications from "../src/components/Publications";
import Newsletter from "../src/components/Newsletter";
import Process from "../src/components/Process";
import NewsList from "../src/components/NewsList";
import Layout from "../src/layout/Layout";

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>Dizme | Home</title>
      </Head>
      <Home />
      <About />
      <Process />
      <NewsList />
      <Publications />
      <Newsletter />
      <Education />
      <Contact />
    </Layout>
  );
};
export default Index;
