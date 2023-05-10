import { NextPage } from "next";
import HomePage from "./home-page";

export const metadata = {
  title: "z3hn.dev",
  description: "This is my portfolio",
};

const Page: NextPage = () => {
  return <HomePage />;
};

export default Page;
