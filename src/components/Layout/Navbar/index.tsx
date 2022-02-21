import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [show, setshow] = useState(false);
  return (
    <div className="relative">
      <nav className="absolute px-4 py-5 2xl:container 2xl:mx-auto sm:py-6 sm:right-60">
        {/* For large and Medium-sized Screen */}
        <div className="flex flex-row justify-between">
          <div>
            <h1 className="text-2xl font-normal leading-6 text-teal-600 cursor-default ">
              Z3hn
            </h1>
          </div>
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
          {/* Burger Icon */}
          <div
            id="bgIcon"
            onClick={() => setshow(!show)}
            className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 sm:hidden absolute left-80 cursor-pointer rounded-md`}
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
              className={`${show ? "block" : "hidden"}`}
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
        {/* Mobile and small-screen devices (toggle Menu) */}
        <div
          id="MobileNavigation"
          className={`${show ? "block" : "hidden"} sm:hidden mt-4 mx-auto`}
        >
          <div className="flex flex-row items-center justify-center space-x-6">
            <Link href="/">
              <a className="text-2xl font-normal leading-6 text-white ">Home</a>
            </Link>
            <Link href="/projects">
              <a className="text-2xl font-normal leading-6 text-white ">
                Projects
              </a>
            </Link>
            <Link href="/skills">
              <a className="text-2xl font-normal leading-6 text-white ">
                Skills
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-2xl font-normal leading-6 text-white ">
                Contact
              </a>
            </Link>
          </div>
          {/* <div className="flex flex-col gap-4 mx-auto mt-4 w-80 ">
            <button className="flex items-center justify-center w-full h-10 space-x-2 text-sm font-normal leading-3 text-indigo-700 duration-100 duration-150 bg-indigo-600 bg-opacity-0 border border-indigo-700 rounded-md hover:opacity-100 focus:outline-none focus:bg-gray-200 hover:bg-gray-200">
              Sign Up
            </button>
            <button className="flex items-center justify-center w-full h-10 space-x-2 text-sm font-normal leading-3 text-white duration-150 bg-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:bg-indigo-600">
              Sign In
            </button>
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
