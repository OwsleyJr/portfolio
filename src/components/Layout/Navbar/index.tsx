import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [show, setshow] = useState(false);
  return (
    <div className="relative h-14">
      <nav className="absolute px-4 py-5 sm:container sm:mx-auto sm:py-6 sm:inset-0">
        <div className="flex flex-row justify-between">
          <h1 className="text-2xl font-normal leading-6 text-teal-500 cursor-default">
            z3hn
          </h1>

          <div className="items-center hidden space-x-3 sm:flex sm:justify-end sm:items-end">
            <Link href="/">
              <a className="text-2xl font-bold leading-6 text-white ">Home</a>
            </Link>
            <Link href="/projects">
              <a className="text-2xl font-bold leading-6 text-white ">
                Projects
              </a>
            </Link>
            <Link href="/skills">
              <a className="text-2xl font-bold leading-6 text-white ">Skills</a>
            </Link>
            <Link href="/contact">
              <a className="text-2xl font-bold leading-6 text-white ">
                Contact
              </a>
            </Link>
          </div>
          <div
            id="bgIcon"
            onClick={() => setshow(!show)}
            className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 sm:hidden absolute left-80 ml-6 cursor-pointer rounded-md`}
          >
            <svg
              className={`${show ? "hidden" : ""}`}
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="duration-150 transform "
                d="M4 6H20"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12H20"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className="duration-150 transform"
                d="M4 18H20"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className={`${
                show ? "block" : "hidden"
              } animate__animated animate__fadeIn`}
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div
          id="MobileNavigation"
          className={`${
            show ? "block animate__animated animate__fadeIn" : "hidden"
          } sm:hidden mt-4 mx-auto`}
        >
          <div className="flex flex-row items-center justify-center space-x-6">
            <Link href="/">
              <a
                onClick={() => setshow(!show)}
                className="text-2xl font-normal leading-6 text-white "
              >
                Home
              </a>
            </Link>
            <Link href="/projects">
              <a
                onClick={() => setshow(!show)}
                className="text-2xl font-normal leading-6 text-white "
              >
                Projects
              </a>
            </Link>
            <Link href="/skills">
              <a
                onClick={() => setshow(!show)}
                className="text-2xl font-normal leading-6 text-white "
              >
                Skills
              </a>
            </Link>
            <Link href="/contact">
              <a
                onClick={() => setshow(!show)}
                className="text-2xl font-normal leading-6 text-white "
              >
                Contact
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
