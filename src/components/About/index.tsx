/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import vrImg from "../../assets/vr.png";

const About: React.FC = () => {
  return (
    <div className="overflow-y-hidden">
      <div>
        <div>
          <div className="container flex flex-col items-center justify-center min-h-screen py-12 mx-auto sm:py-24">
            <div className="flex-col items-start justify-center w-11/12 mb-48 sm:w-2/3 lg:flex sm:mb-12">
              <div className="flex flex-row">
                <h1 className="mt-3 text-4xl font-black leading-10 text-center text-white cursor-default sm:text-2xl md:text-4xl lg:text-7xl xl:text-8xl md:mt-0 md:leading-10">
                  Hi, I'm Brandon!
                </h1>
                <div className="relative w-16 h-16 ml-2 sm:w-24 sm:h-24">
                  <Image src={vrImg} alt="vrImage" layout="fill" />
                </div>
              </div>
              <p className="mt-2 text-3xl font-black leading-7 text-teal-600 cursor-default sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl md:leading-10 md:mt-4">
                I am a Software Engineer who lives and works in South Florida.
                Coding is my passion.{" "}
              </p>
              {/* <p className="mt-6 text-3xl font-bold leading-7 text-teal-600 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl md:leading-10 md:mt-8">
                Check out the links at the top to learn more about what I do!
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
