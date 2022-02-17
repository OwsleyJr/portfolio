/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import vrImg from "../../assets/vr.png";

const About: React.FC = () => {
  return (
    <div className="pb-12 overflow-y-hidden">
      {/* Code block starts */}
      <div>
        <div>
          <div className="container mx-auto flex flex-col items-center justify-center min-h-screen py-12 sm:py-24">
            <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-start flex-col mb-28 sm:mb-12">
              <div className="flex flex-row">
                <h1 className="text-4xl sm:text-2xl md:text-4xl lg:text-7xl xl:text-8xl text-center mt-3 text-white font-black md:mt-0 leading-10 md:leading-10">
                  Hi, I'm Brandon!
                </h1>
                <div className="w-16 h-16 sm:w-24 sm:h-24 relative ml-2">
                  <Image src={vrImg} alt="vrImage" layout="fill" />
                </div>
              </div>

              <p className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-teal-600 font-black leading-7 md:leading-10 mt-2 md:mt-4">
                I am a Software Engineer who loves to code.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Code block ends */}
    </div>
  );
};

export default About;
