import React from "react";
import Image from "next/image";
import projectsImg from "../../assets/projects.png";

const MyProjects: React.FC = () => {
  return (
    <div className="container flex flex-col items-center mx-auto pt-14 sm:py-24">
      <div className="flex-col items-start justify-center w-11/12 sm:flex sm:mt-20">
        <div className="flex flex-row">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20">
            <Image src={projectsImg} alt="projectsImage" layout="fill" />
          </div>
          <h1 className="mt-5 ml-2 text-5xl font-black leading-7 text-center text-white cursor-default md:text-7xl lg:mt-5 md:leading-10">
            Projects
          </h1>
        </div>
        <div>
          <div className="container mx-auto py-7 md:mt-2">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              <div className="transition duration-300 ease-in-out delay-150 bg-contain bg-os-image hover:-translate-y-1 hover:scale-105">
                <div className="flex flex-col justify-between w-full h-full px-4 py-5 mb-6 border-2 border-purple-500 rounded-lg shadow-lg backdrop-brightness-50 backdrop-blur-sm shadow-black">
                  <div>
                    <a
                      href="https://github.com/sct/overseerr"
                      target="_blank"
                      rel="noreferrer"
                      className="text-purple-500 hover:text-purple-500"
                    >
                      <h4 className="z-40 mb-3 text-3xl font-extrabold text-purple-500">
                        Overseerr
                      </h4>
                    </a>
                    <p className="font-bold text-gray-100 cursor-default sm:text-lg">
                      Overseerr is a free and open source software application
                      for managing requests for your media library.
                    </p>
                    <p className="mt-2 font-bold text-gray-100 cursor-default sm:text-lg">
                      Tech stack: TypeScript, React/NextJS, Node.js,
                      TailwindCSS, Express, Plex API
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-gray-100">
                      <p className="font-bold cursor-default text-md">
                        August 16, 2020
                      </p>
                      <div className="flex items-center justify-center w-8 h-8 text-gray-800 bg-gray-100 rounded-full">
                        <a
                          href="https://github.com/sct/overseerr"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="transition duration-300 ease-in-out delay-150 bg-cover bg-sd-image hover:-translate-y-1 hover:scale-105">
                <div className="flex flex-col justify-between w-full h-full px-4 py-5 mb-6 border-2 border-teal-500 rounded-lg shadow-lg backdrop-brightness-50 backdrop-blur-sm shadow-black">
                  <div>
                    <a
                      href="https://github.com/Charmander-Cluster/sweatdeck"
                      target="_blank"
                      rel="noreferrer"
                      className="text-teal-500 hover:text-teal-500"
                    >
                      <h4 className="mb-3 text-3xl font-extrabold text-teal-500">
                        Sweatdeck
                      </h4>
                    </a>
                    <p className="font-bold text-gray-100 cursor-default sm:text-lg">
                      Sweatdeck is a full stack web application to log your
                      workouts along with one of your Spotify playlists.
                    </p>
                    <p className="mt-2 font-bold text-gray-100 cursor-default sm:text-lg">
                      Tech Stack: Javascript, React/Redux, Node.js, Spotify API,
                      PWA, Express, Firebase, TailwindCSS
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-gray-100">
                      <p className="font-bold cursor-default text-md">
                        January 27, 2022
                      </p>
                      <div className="flex items-center justify-center w-8 h-8 text-gray-800 bg-gray-100 rounded-full">
                        <a
                          href="https://github.com/Charmander-Cluster/sweatdeck"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="transition duration-300 ease-in-out delay-150 bg-cover rounded-lg bg-gs-image hover:-translate-y-1 hover:scale-105">
                <div className="flex flex-col justify-between w-full h-full px-4 py-5 mb-6 border-2 border-amber-500 rounded-lg shadow-lg backdrop-brightness-50 backdrop-blur-sm shadow-black">
                  <div>
                    <a
                      href="https://github.com/Prime-Directive-Detectives/GraceShopper"
                      target="_blank"
                      rel="noreferrer"
                      className="text-amber-500 hover:text-amber-500"
                    >
                      <h4 className="mb-3 text-3xl font-extrabold text-amber-500">
                        Graceshopper
                      </h4>
                    </a>
                    <p className="font-bold text-gray-100 cursor-default sm:text-lg">
                      An ecommerce app built and designed in a week to showcase
                      my coding skills.
                    </p>
                    <p className="mt-2 font-bold text-gray-100 cursor-default sm:text-lg">
                      Tech stack: Javascript, React, TailwindCSS, Swiper.js,
                      Stripe, Heroku
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-gray-100">
                      <p className="font-bold cursor-default text-md">
                        January 19, 2022
                      </p>
                      <div className="flex items-center justify-center w-8 h-8 text-white bg-gray-100 rounded-full">
                        <a
                          href="https://github.com/Prime-Directive-Detectives/GraceShopper"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="transition duration-300 ease-in-out delay-150 bg-cover bg-hu-image hover:-translate-y-1 hover:scale-105">
                <div className="flex flex-col justify-between w-full h-full px-4 py-5 mb-6 border-2 border-cyan-500 rounded-lg shadow-lg backdrop-brightness-50 backdrop-blur-sm shadow-black">
                  <div>
                    <a
                      href="https://github.com/OwsleyJr/Home-UI"
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-500 hover:text-cyan-500"
                    >
                      <h4 className="mb-3 text-3xl font-extrabold text-cyan-500">
                        Home-UI
                      </h4>
                    </a>
                    <p className="font-bold text-gray-100 cursor-default sm:text-lg">
                      Home-UI is a custom built Home assistant frontend tailored
                      to your specific UI and home automation needs.
                    </p>
                    <p className="mt-2 font-bold text-gray-100 cursor-default sm:text-lg">
                      Tech stack: TypeScript, React/NextJS, Node.js,
                      TailwindCSS, Home Assistant
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-gray-100">
                      <p className="font-bold cursor-default text-md">
                        January 25, 2022
                      </p>
                      <div className="flex items-center justify-center w-8 h-8 text-white bg-gray-100 rounded-full">
                        <a
                          href="https://github.com/OwsleyJr/Home-UI"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="transition duration-300 ease-in-out delay-150 bg-center bg-pf-image hover:-translate-y-1 hover:scale-105">
                <div className="flex flex-col justify-between w-full h-full px-4 py-5 mb-6 border-2 border-blue-500 rounded-lg shadow-lg backdrop-blur-sm backdrop-brightness-50 shadow-black">
                  <div>
                    <a
                      href="https://github.com/OwsleyJr/portfolio"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-500 hover:text-blue-500"
                    >
                      <h4 className="mb-3 text-3xl font-extrabold text-blue-500">
                        Portfolio
                      </h4>
                    </a>
                    <p className="font-bold text-gray-100 cursor-default sm:text-lg">
                      My portfolio was created to showcase my projects and
                      skills with a fast and beautiful design.
                    </p>
                    <p className="mt-2 font-bold text-gray-100 cursor-default sm:text-lg">
                      Tech stack: TypeScript, React/NextJS, TailwindCSS,
                      Animate.css, Vercel
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-gray-100">
                      <p className="font-bold cursor-default text-md">
                        February 15, 2022
                      </p>
                      <div className="flex items-center justify-center w-8 h-8 text-white bg-gray-100 rounded-full">
                        <a
                          href="https://github.com/OwsleyJr/portfolio"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
