import React from "react";
import Image from "next/image";
import emailImg from "../../assets/email.png";
import linkedinImg from "../../assets/linkedin.png";
import githubImg from "../../assets/github.png";
import contactImg from "../../assets/contact.png";

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
      <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-start flex-col md:mt-20">
        <div className="flex flex-row">
          <div className="w-16 h-16 sm:w-24 sm:h-24 relative">
            <Image src={contactImg} alt="contactImage" layout="fill" />
          </div>
          <h1 className="text-5xl sm:text-lg md:text-4xl ml-2 mt-5 sm:mt-0 lg:text-7xl xl:text-8xl text-center text-white font-black leading-7 md:leading-10">
            Contact
          </h1>
        </div>
        <div className="flex flex-row ml-4 mt-2 md:mt-4">
          <div className="rounded-full text-white flex items-center justify-center">
            <Image src={emailImg} alt="emailImage" />
          </div>
          <a
            href="mailto:cohbrandon@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-teal-600 font-black mt-3 md:mt-0 leading-7 md:leading-10 ml-2">
              Email
            </p>
          </a>
        </div>
        <div className="flex flex-row  ml-4 mt-3 md:mt-4">
          <div className="rounded-full text-white flex items-center justify-center">
            <Image src={githubImg} alt="githubImage" />
          </div>
          <a
            href="https://github.com/OwsleyJr"
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-teal-600 font-black mt-3 md:mt-0 leading-7 md:leading-10 ml-2">
              Github
            </p>
          </a>
        </div>
        <div className="flex flex-row ml-4 mt-3 md:mt-4">
          <div className="rounded-full text-white flex items-center justify-center">
            <Image src={linkedinImg} alt="linkedinImage" />
          </div>
          <a
            href="https://www.linkedin.com/in/cohbrandon/"
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-teal-600 font-black mt-3 md:mt-0 leading-7 md:leading-10 ml-2">
              LinkedIn
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
