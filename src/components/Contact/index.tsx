import React from "react";
import Image from "next/image";
import emailImg from "../../assets/email.png";
import linkedinImg from "../../assets/linkedin.png";
import githubImg from "../../assets/github.png";
import contactImg from "../../assets/contact.png";

const Contact: React.FC = () => {
  return (
    <div className="container flex flex-col items-center py-12 mx-auto sm:py-24">
      <div className="flex-col items-start justify-center w-11/12 sm:w-2/3 lg:flex md:mt-20">
        <div className="flex flex-row">
          <div className="relative w-16 h-16 sm:w-24 sm:h-24">
            <Image src={contactImg} alt="contactImage" layout="fill" />
          </div>
          <h1 className="mt-5 ml-2 text-5xl font-black leading-7 text-center text-white cursor-default sm:mt-8 md:text-7xl md:leading-10">
            Contact
          </h1>
        </div>
        <div className="animate__animated animate__backInLeft">
          <div className="flex flex-row mt-4 ml-2 md:mt-6">
            <div className="flex items-center justify-center text-white">
              <Image src={emailImg} alt="emailImage" />
            </div>
            <a href="mailto:brandon@z3hn.dev" target="_blank" rel="noreferrer">
              <p className="mt-3 ml-2 text-3xl font-black leading-7 text-center text-teal-500 sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl md:mt-0 md:leading-10">
                Email
              </p>
            </a>
          </div>
          <div className="flex flex-row mt-3 ml-2 md:mt-4">
            <div className="flex items-center justify-center text-white rounded-full">
              <Image src={githubImg} alt="githubImage" />
            </div>
            <a
              href="https://github.com/OwsleyJr"
              target="_blank"
              rel="noreferrer"
            >
              <p className="mt-3 ml-2 text-3xl font-black leading-7 text-center text-teal-500 sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl md:mt-0 md:leading-10">
                Github
              </p>
            </a>
          </div>
          <div className="flex flex-row mt-3 ml-2 md:mt-4">
            <div className="flex items-center justify-center text-white rounded-full">
              <Image src={linkedinImg} alt="linkedinImage" />
            </div>
            <a
              href="https://www.linkedin.com/in/cohbrandon/"
              target="_blank"
              rel="noreferrer"
            >
              <p className="mt-3 ml-2 text-3xl font-black leading-7 text-center text-teal-500 sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl md:mt-0 md:leading-10">
                LinkedIn
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
