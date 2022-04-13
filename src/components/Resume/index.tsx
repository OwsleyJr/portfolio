import React from "react";

const Resume: React.FC = () => {
  return (
    <div className="flex flex-col mx-auto max-w-7xl">
      <div className="z-40 flex-1 px-4 pt-6 pb-24 md:px-6 md:py-8">
        <div className="relative z-50 flex flex-col justify-center mx-auto space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-left text-gray-100 sm:text-5xl md:text-6xl">
            <span className="block leading-tight xl:inline">Brandon Cohen</span>
          </h1>
          <p className="flex flex-col text-base text-gray-300 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">
            <span>
              <span className="mr-2">🇺🇸</span>
              <span>Boca Raton, Florida</span>
            </span>
            <span>
              <span className="mr-2">📨</span>
              <a href="mailto:brandon@z3hn.dev">brandon@z3hn.dev</a>
            </span>
          </p>
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-extrabold">Skills</h2>
          <div className="mt-6 info-block">
            <h3>Languages/Frameworks</h3>
            <p>
              JavaScript, React/NextJS, Redux, Node.js, Tailwind CSS, Express
              Sequelize/SQL
            </p>
            <h3>Cloud Technology</h3>
            <p>Heroku, Netlify, Vercel, Firebase</p>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-extrabold">Experience</h2>
          <div className="mt-6 info-block">
            <div className="flex flex-col space-y-1">
              <span className="text-sm text-gray-200">
                November 2021 to Present
              </span>
              <span className="flex items-center text-2xl font-semibold text-gray-100">
                <span className="mr-2">Fullstack Academy</span>
                <span className="teal-badge">Software Engineer</span>
              </span>
            </div>
            <div className="ml-4 prose">
              <ul className="text-gray-200">
                <li>
                  Fullstack Academy’s Full-Time Software Engineering Immersive
                  is a 17-week preparation course for software engineer roles at
                  top-tier technology companies. Through an advanced curriculum
                  and project-based structure, students learn today’s cutting
                  edge development technologies. The JavaScript-driven
                  curriculum provides immersion in the latest web technologies.
                </li>
                <li>Front-End Skills: Javascript, React, Redux, HTML, CSS</li>
                <li>
                  Back-End Skills: Node.js, Express, PostgreSQL, Sequelize
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 info-block">
            <div className="flex flex-col space-y-1">
              <span className="text-sm text-gray-200">
                June 2015 to January 2022
              </span>
              <span className="flex items-center text-2xl font-semibold text-gray-100">
                <span className="mr-2">Arlene Segal Designs</span>
                <span className="teal-badge">IT Technician</span>
              </span>
            </div>
            <div className="ml-4 prose">
              <ul className="text-gray-200">
                <li>
                  Ensure usability and functionality across company devices in a
                  fast and efficient manner
                </li>
                <li>
                  Complete proper software installation on all employee
                  computers, while safeguarding all security, backup, and
                  network solutions
                </li>
                <li>
                  Troubleshoot hardware and software issues, making sure
                  performance was at 100%
                </li>
                <li>
                  Set up an entirely new user workspace, providing secure
                  passwords and profiles in the company software systems
                </li>
                <li>
                  Implement, manage, and monitor devices across the network,
                  backing up all essential data daily
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 info-block">
            <div className="flex flex-col space-y-1">
              <span className="text-sm text-gray-200">
                March 2012 to May 2015
              </span>
              <span className="flex items-center text-2xl font-semibold text-gray-100">
                <span className="mr-2">Technic</span>
                <span className="teal-badge">Support Manager</span>
              </span>
            </div>
            <div className="ml-4 prose">
              <ul className="text-gray-200">
                <li>
                  Developed and managed project schedules, including performing
                  production tasks directly or with a team member
                </li>
                <li>
                  Identified and provided technical support for the use of any
                  new website and modpack features
                </li>
                <li>
                  Frequently collaborated with team members to find solutions
                  for improving the user experience
                </li>
                <li>
                  Effectively managed and maintained a quality discussion board
                  by clearly communicating between users and team members
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-extrabold">Open-source Work</h2>
          <div className="mt-6 prose">
            <ul className="ml-4 text-gray-200">
              <li>
                <a
                  href="https://github.com/Charmander-Cluster/sweatdeck"
                  target="_blank"
                  rel="noreferrer"
                  className="text-teal-500"
                >
                  Sweatdeck
                </a>{" "}
                - Sweatdeck is a full stack RESTful web application to log your
                cardio and strength workouts along with one of your Spotify
                playlists.
              </li>
              <li>
                <a
                  href="https://github.com/sct/overseerr"
                  target="_blank"
                  rel="noreferrer"
                  className="text-teal-500"
                >
                  Overseerr
                </a>{" "}
                - Request management and media discovery tool for the Plex
                ecosystem
              </li>
              <li>
                <a
                  href="https://github.com/OwsleyJr/home-ui"
                  target="_blank"
                  rel="noreferrer"
                  className="text-teal-500"
                >
                  Home-UI
                </a>{" "}
                - Home-UI is a custom built Home assistant frontend tailored to
                your specific UI and home automation needs.
              </li>
            </ul>
            <p className="text-gray-200">
              You can view my other open-source projects and contributions on my{" "}
              <a
                href="https://github.com/OwsleyJr"
                target="_blank"
                rel="noreferrer"
                className="text-teal-500"
              >
                GitHub profile
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
