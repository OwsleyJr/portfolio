import { NextPage } from "next";
import Resume from "../components/Resume";
import Layout from "../components/Layout";

const ResumePage: NextPage = () => {
  return (
    <Layout>
      <Resume />
    </Layout>
  );
};

export default ResumePage;
