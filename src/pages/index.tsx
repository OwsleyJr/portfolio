import type { NextPage } from "next";
import MyProjects from "../components/MyProjects";

const Home: NextPage = () => {
  return (
    <div className="pb-12 overflow-y-hidden">
      {/* Code block starts */}
      <div>
        <div>
          <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
            <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-start flex-col mb-5 sm:mb-12">
              <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-6xl xl:text-7xl text-center text-white font-black leading-7 md:leading-10">
                Brandon Cohen
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-teal-600 font-black leading-7 md:leading-10 mt-2 md:mt-4">
                Software Engineer
              </p>
            </div>
            <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-start flex-col mt-20">
              <h1 className="text-2xl sm:text-xl md:text-2xl lg:text-5xl xl:text-6xl text-center text-white font-black leading-7 md:leading-10">
                About Me
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl  text-teal-600 font-black leading-7 md:leading-10 mt-2 md:mt-4">
                I am a Software Engineer who loves to code and even run my own
                media server as a hobby. I always strive to know the latest tech
                and the projects below showcase that.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Code block ends */}
    </div>
  );
};

export default Home;
