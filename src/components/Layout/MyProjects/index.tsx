import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import Image from "next/image";

const MyProjects: React.FC = () => {
  return (
    <div>
      <div className="mx-auto container py-10 px-6">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          <div className="rounded">
            <div className="w-full h-64 flex flex-col justify-between bg-teal-500 rounded-lg border border-teal-500 mb-6 py-5 px-4">
              <div>
                <h4 className="text-gray-100 font-bold mb-3">Sweatdeck</h4>
                <p className="text-gray-100 text-sm">
                  Sweatdeck is a full stack RESTful web application to log your
                  cardio and strength workouts along with one of your Spotify
                  playlists.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-between text-gray-100">
                  <p className="text-sm">March 28, 2020</p>
                  <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-800 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded">
            <div className="w-full h-64 flex flex-col justify-between bg-purple-500 rounded-lg border border-purple-500 mb-6 py-5 px-4">
              <div>
                <h4 className="text-gray-100 font-bold mb-3">Overseerr</h4>
                <p className="text-gray-100 text-sm">
                  Overseerr is a free and open source software application for
                  managing requests for your media library.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-between text-gray-100">
                  <p className="text-sm">March 28, 2020</p>
                  <div className="w-8 h-8 rounded-full   bg-gray-100 text-gray-800 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded">
            <div className="w-full h-64 flex flex-col justify-between bg-cyan-500 rounded-lg border border-cyan-500 mb-6 py-5 px-4">
              <div>
                <h4 className="text-gray-100 font-bold mb-3">HASS Frontend</h4>
                <p className="text-gray-100 text-sm">
                  HASS Frontend is a custom built Home assistant tailored to
                  your specific needs.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-between text-gray-100">
                  <p className="text-sm">March 28, 2020</p>
                  <div className="w-8 h-8 rounded-full bg-gray-100 text-white flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
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
