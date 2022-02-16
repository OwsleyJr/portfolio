import type { NextPage } from "next";
import MyProjects from "../components/Layout/MyProjects";

const Home: NextPage = () => {
  return (
    <div className="pb-12 overflow-y-hidden">
      {/* Code block starts */}
      <div>
        <div>
          <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
            <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-12">
              <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-6xl xl:text-7xl text-center text-white font-black leading-7 md:leading-10">
                Brandon Cohen
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-teal-600 font-black leading-7 md:leading-10 mt-2 md:mt-4">
                Software Engineer
              </p>
            </div>
            <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mt-20">
              <h1 className="text-2xl sm:text-xl md:text-2xl lg:text-5xl xl:text-6xl text-center text-white font-black leading-7 md:leading-10">
                About Me
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center text-teal-600 font-black leading-7 md:leading-10 mt-2 md:mt-4">
                Experienced Software Engineer skilled in developing and readying
                web applications for production. Proficient in various
                platforms, languages, and trained in the latest cutting-edge
                development tools.
              </p>
            </div>
            <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mt-20">
              <h1 className="text-2xl sm:text-xl md:text-2xl lg:text-5xl xl:text-6xl text-center text-white font-black leading-7 md:leading-10">
                Latest Projects
              </h1>
              <MyProjects />
            </div>
            <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mt-20">
              <h1 className="text-2xl sm:text-xl md:text-2xl lg:text-5xl xl:text-6xl text-center text-white font-black leading-7 md:leading-10">
                Contact
              </h1>
              <div className="flex flex-row justify-center items-center mt-2 md:mt-4">
                <div className="w-8 h-8 rounded-full text-white flex items-center justify-center">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                </div>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center text-teal-600 font-black leading-7 md:leading-10 ml-1">
                  Email
                </p>
              </div>
              <div className="flex flex-row justify-center items-center mt-2 md:mt-4">
                <div className="w-8 h-8 rounded-full text-white flex items-center justify-center">
                  <svg
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center text-teal-600 font-black leading-7 md:leading-10 ml-1">
                  Github
                </p>
              </div>
              <div className="flex flex-row justify-center items-center mt-2 md:mt-4">
                <div className="w-8 h-8 rounded-full text-white flex items-center justify-center">
                  <svg
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer fill-white"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"
                      stroke="#1F2937"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 9H2V21H6V9Z"
                      stroke="#1F2937"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                      stroke="#1F2937"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center text-teal-600 font-black leading-7 md:leading-10 ml-1">
                  LinkedIn
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Code block ends */}
    </div>
  );
};

export default Home;
