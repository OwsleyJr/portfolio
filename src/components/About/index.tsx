/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";

const About: React.FC = () => {
  return (
    <div className="flex flex-col mx-auto max-w-7xl">
      <div className="z-0 flex-1 px-4 pt-10 md:px-6 md:py-20">
        <div>
          <h1 className="mt-1 text-7xl font-black items-start flex text-white cursor-default sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl 2xl:text-9xl sm:leading-11">
            Hi, I'm Brandon!
          </h1>
          <div>
            <p className="mt-2 text-3xl font-black leading-8 text-cyan-500 cursor-default sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl 2xl:text-7xl sm:leading-10">
              I am a Software Engineer who lives and works from South Florida.
            </p>
          </div>
          <div>
            <p className="mt-3 sm:mt-2 text-2xl font-black leading-6 text-cyan-500 cursor-default sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl 2xl:text-6xl sm:leading-10">
              I work on an open-source project called{" "}
              <Link
                href="https://github.com/sct/overseerr"
                className="text-white hover:text-white"
              >
                Overseerr
              </Link>{" "}
              in my free time.
            </p>
          </div>
        </div>
        <div>
          <Link href="/contact" passHref legacyBehavior>
            <button className="px-5 sm:px-6 py-3 mt-6 text-lg transition duration-300 ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 text-white bg-cyan-600 rounded-md shadow-md cursor-pointer sm:py-4 2xl:py-5 sm:mt-9 sm:text-4xl shadow-black">
              Contact me!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
