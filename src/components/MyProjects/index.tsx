"use client";

import Image from "next/image";
import projectsImg from "../../assets/images/chest.png";
import githubSVG from "../../assets/svgs/github.svg";

const MyProjects: React.FC = () => {
  return (
    <div className="flex flex-col mx-auto max-w-7xl">
      <div className="z-0 flex-1 px-4 pt-10 md:px-6 md:py-20">
        <div className="flex flex-row items-center">
          <Image
            src={projectsImg}
            alt="projectsImage"
            placeholder="blur"
            className="w-16 h-16 sm:w-24 sm:h-24"
          />
          <h1 className="ml-2 text-5xl font-black leading-7 text-center text-white cursor-default sm:text-7xl 2xl:text-8xl 2xl:mb-3 sm:leading-10">
            Projects
          </h1>
        </div>
        <div>
          <div className="container mx-auto py-7 md:mt-2">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              <a
                href="https://github.com/sct/overseerr"
                target="_blank"
                rel="noreferrer"
                className="bg-contain bg-os-image rounded-lg transition duration-300 ease-in-out delay-150 sm:hover:-translate-y-1 sm:hover:scale-105 hover:no-underline"
              >
                <div className="flex flex-col justify-between w-full h-full px-4 py-5 mb-6 border-2 border-purple-500 rounded-lg shadow-lg backdrop-brightness-50 backdrop-blur-sm shadow-black">
                  <div>
                    <h4 className="z-40 mb-3 text-3xl font-extrabold text-purple-500">
                      Overseerr
                    </h4>
                    <p className="font-bold text-gray-100 sm:text-lg">
                      Overseerr is a free and open source software application
                      for managing requests for your media library.
                    </p>
                    <p className="mt-2 font-bold text-gray-100 sm:text-lg">
                      Tech stack: TypeScript, React/NextJS, Node.js,
                      TailwindCSS, Express, Plex API
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-gray-100">
                      <p className="font-bold text-md">August 16, 2020</p>
                      <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
                        <Image src={githubSVG} alt="Github icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="https://github.com/Charmander-Cluster/sweatdeck"
                target="_blank"
                rel="noreferrer"
                className="bg-cover bg-sd-image rounded-lg transition duration-300 ease-in-out delay-150 sm:hover:-translate-y-1 sm:hover:scale-105 hover:no-underline"
              >
                <div className="flex flex-col justify-between w-full h-full px-4 py-5 mb-6 border-2 border-teal-500 rounded-lg shadow-lg backdrop-brightness-50 backdrop-blur-sm shadow-black">
                  <div>
                    <h4 className="mb-3 text-3xl font-extrabold text-teal-500">
                      Sweatdeck
                    </h4>
                    <p className="font-bold text-gray-100 sm:text-lg">
                      Sweatdeck is a full stack web application to log your
                      workouts along with one of your Spotify playlists.
                    </p>
                    <p className="mt-2 font-bold text-gray-100 sm:text-lg">
                      Tech Stack: Javascript, React/Redux, Node.js, Spotify API,
                      PWA, Express, Firebase, TailwindCSS
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-gray-100">
                      <p className="font-bold text-md">January 27, 2022</p>
                      <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
                        <Image src={githubSVG} alt="Github icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="https://github.com/OwsleyJr/json-parser-app"
                target="_blank"
                rel="noreferrer"
                className="bg-cover bg-js-image rounded-lg transition duration-300 ease-in-out delay-150 sm:hover:-translate-y-1 sm:hover:scale-105 hover:no-underline"
              >
                <div className="flex flex-col justify-between w-full h-full px-4 py-5 mb-6 border-2 border-red-500 rounded-lg shadow-lg backdrop-brightness-50 backdrop-blur-sm shadow-black">
                  <div>
                    <h4 className="z-40 mb-3 text-3xl font-extrabold text-red-500">
                      JSON Parser
                    </h4>
                    <p className="font-bold text-gray-100 sm:text-lg">
                      A JSON Parsing app I built that provides you with
                      beautiful responsive cards and allows you to input custom
                      JSON data.
                    </p>
                    <p className="mt-2 font-bold text-gray-100 sm:text-lg">
                      Tech stack: Javascript, React/NextJS, CSS, Styled
                      Components, Framer-Motion
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-gray-100">
                      <p className="font-bold text-md">May 6, 2022</p>
                      <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
                        <Image src={githubSVG} alt="Github icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="https://github.com/Prime-Directive-Detectives/GraceShopper"
                target="_blank"
                rel="noreferrer"
                className="bg-cover bg-gs-image rounded-lg transition duration-300 ease-in-out delay-150 sm:hover:-translate-y-1 sm:hover:scale-105 hover:no-underline"
              >
                <div className="flex flex-col justify-between w-full h-full px-4 py-5 mb-6 border-2 border-amber-500 rounded-lg shadow-lg backdrop-brightness-50 backdrop-blur-sm shadow-black">
                  <div>
                    <h4 className="mb-3 text-3xl font-extrabold text-amber-500">
                      Graceshopper
                    </h4>
                    <p className="font-bold text-gray-100 sm:text-lg">
                      An e-commerce app built and designed in just a week to
                      showcase my coding abilities.
                    </p>
                    <p className="mt-2 font-bold text-gray-100 sm:text-lg">
                      Tech stack: Javascript, React, TailwindCSS, Swiper.js,
                      Stripe, Heroku
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-gray-100">
                      <p className="font-bold text-md">January 19, 2022</p>
                      <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
                        <Image src={githubSVG} alt="Github icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="https://github.com/OwsleyJr/Home-UI"
                target="_blank"
                rel="noreferrer"
                className="bg-cover bg-hu-image rounded-lg transition duration-300 ease-in-out delay-150 sm:hover:-translate-y-1 sm:hover:scale-105 hover:no-underline"
              >
                <div className="flex flex-col justify-between w-full h-full px-4 py-5 mb-6 border-2 border-cyan-500 rounded-lg shadow-lg backdrop-brightness-50 backdrop-blur-sm shadow-black">
                  <div>
                    <h4 className="mb-3 text-3xl font-extrabold text-cyan-500">
                      Home-UI
                    </h4>
                    <p className="font-bold text-gray-100 sm:text-lg">
                      Home-UI is a custom built Home assistant frontend tailored
                      to your specific UI and home automation needs.
                    </p>
                    <p className="mt-2 font-bold text-gray-100 sm:text-lg">
                      Tech stack: TypeScript, React/NextJS, Node.js,
                      TailwindCSS, Home Assistant
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-gray-100">
                      <p className="font-bold text-md">January 25, 2022</p>
                      <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
                        <Image src={githubSVG} alt="Github icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="https://github.com/OwsleyJr/portfolio"
                target="_blank"
                rel="noreferrer"
                className="bg-center bg-pf-image rounded-lg transition duration-300 ease-in-out delay-150 sm:hover:-translate-y-1 sm:hover:scale-105 hover:no-underline"
              >
                <div className="flex flex-col justify-between w-full h-full px-4 py-5 mb-6 border-2 border-blue-500 rounded-lg shadow-lg backdrop-blur-sm backdrop-brightness-50 shadow-black">
                  <div>
                    <h4 className="mb-3 text-3xl font-extrabold text-blue-500">
                      Portfolio
                    </h4>
                    <p className="font-bold text-gray-100 sm:text-lg">
                      My portfolio was created to showcase my projects and
                      skills with a fast and beautiful design.
                    </p>
                    <p className="mt-2 font-bold text-gray-100 sm:text-lg">
                      Tech stack: TypeScript, React/NextJS, TailwindCSS,
                      Animate.css, Vercel
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-gray-100">
                      <p className="font-bold text-md">February 15, 2022</p>
                      <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
                        <Image src={githubSVG} alt="Github icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
