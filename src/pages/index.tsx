import type { NextPage } from "next";
import About from "../components/About";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <About />
    </Layout>
  );
};

export default Home;
