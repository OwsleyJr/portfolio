import { NextPage } from "next";
import MyProjects from "../components/MyProjects";
import Layout from "../components/Layout";

const ProjectsPage: NextPage = () => {
  return (
    <Layout>
      <MyProjects />
    </Layout>
  );
};

export default ProjectsPage;
