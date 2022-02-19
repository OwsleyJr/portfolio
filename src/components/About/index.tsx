/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import vrImg from "../../assets/vr.png";
import meImg from "../../assets/me.jpg";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <div className="overflow-y-hidden">
      <div>
        <div>
          <div className="container flex flex-col items-center justify-center min-h-screen py-12 mx-auto sm:py-24">
            <div className="flex-col items-start justify-center w-11/12 mb-48 sm:w-2/3 lg:flex sm:mb-12">
              <div className="flex flex-row">
                <div>
                  <h1 className="mt-2 text-4xl font-black leading-10 text-center text-white cursor-default sm:text-2xl md:text-4xl lg:text-7xl xl:text-8xl md:mt-1 md:leading-10">
                    Hi, I'm Brandon!
                  </h1>
                </div>

                <div className="relative ml-4 w-14 h-14 sm:w-28 sm:h-28">
                  <Image
                    src={meImg}
                    alt="meImage"
                    layout="fill"
                    className="object-cover my-4 rounded-full shadow-sm shadow-black"
                  />
                </div>
              </div>
              <div className="animate__animated animate__backInLeft">
                <p className="text-3xl font-black leading-7 text-teal-600 cursor-default sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl md:leading-10">
                  I am a Software Engineer who lives and works in South Florida.
                  Coding is my passion.{" "}
                </p>
              </div>

              <div className=" animate__animated animate__backInLeft animate__delay-1s">
                <Link href="/contact" passHref>
                  <button className="px-6 py-4 mt-6 text-lg leading-none text-white bg-teal-600 rounded-md shadow-md cursor-pointer sm:py-5 sm:mt-10 sm:text-4xl focus:outline-none shadow-black">
                    Contact me!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
