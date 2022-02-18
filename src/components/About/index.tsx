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
              <p className="text-3xl font-black leading-7 text-teal-600 cursor-default sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl md:leading-10">
                I am a Software Engineer who lives and works in South Florida.
                Coding is my passion.{" "}
              </p>
              {/* <p className="mt-6 text-3xl font-bold leading-7 text-teal-600 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl md:leading-10 md:mt-8">
                Check out the links at the top to learn more about what I do!
              </p> */}
              <Link href="/contact" passHref>
                <button className="px-6 py-4 mt-8 text-lg leading-none text-white bg-teal-600 rounded-md shadow-md cursor-pointer sm:py-5 sm:mt-10 sm:text-4xl focus:outline-none shadow-black">
                  {/* <svg
                  className="mr-2 w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg> */}
                  Contact me!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
