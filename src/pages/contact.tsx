import { NextPage } from "next";
import Contact from "../components/Contact";
import Layout from "../components/Layout";

const ContactPage: NextPage = () => {
  return (
    <Layout>
      <Contact />
    </Layout>
  );
};

export default ContactPage;
