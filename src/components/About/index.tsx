/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

const About: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-40">
      <div className="container flex flex-col items-center justify-center min-h-full py-12 mx-auto sm:py-24">
        <div className="flex-col items-start justify-center w-11/12 mb-48 sm:w-2/3 sm:flex sm:mb-12">
          <div className="flex flex-row">
            <div>
              <h1 className="mt-2 text-4xl font-black leading-10 text-center text-white cursor-default sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl 2xl:text-8xl sm:mt-1 sm:leading-11">
                Hi, I'm Brandon!
              </h1>
            </div>
          </div>
          <div>
            <p className="mt-2 text-3xl font-black leading-7 text-cyan-500 cursor-default sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl md:leading-10">
              I am a Software Engineer who lives and works in South Florida.
            </p>
          </div>

          <div>
            <p className="mt-4 text-xl font-black leading-7 text-cyan-500 cursor-default sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl md:leading-10">
              I work on an open-source project called{" "}
              <Link href="https://github.com/sct/overseerr">
                <a className="text-white hover:text-white">Overseerr</a>
              </Link>{" "}
              in my free time.
            </p>
          </div>

          <div>
            <Link href="/contact" passHref>
              <button className="px-6 py-4 mt-6 text-lg transition duration-300 ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 leading-none text-white bg-cyan-600 rounded-md shadow-md cursor-pointer sm:py-4 md:py-4 lg:py-4 xl:py-5 sm:mt-9 sm:text-4xl focus:outline-none shadow-black">
                Contact me!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
