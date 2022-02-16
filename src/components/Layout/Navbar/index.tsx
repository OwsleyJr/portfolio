import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [show, setshow] = useState(false);
  return (
    <div>
      <nav className="2xl:container 2xl:mx-auto sm:py-6 sm:px-7 py-5 px-4">
        {/* For large and Medium-sized Screen */}
        <div className="flex justify-between ">
          <div className="flex flex-row items-center space-x-6">
            <h1 className=" font-normal text-2xl leading-6 text-teal-600 cursor-default">
              Z3hn
            </h1>
          </div>
          <div className="sm:flex space-x-3 items-center hidden">
            <Link href="/">
              <a className=" font-normal text-2xl leading-6 text-white">Home</a>
            </Link>
            <Link href="/projects">
              <a className=" font-normal text-2xl leading-6 text-white">
                Projects
              </a>
            </Link>
            <Link href="/skills">
              <a className=" font-normal text-2xl leading-6 text-white">
                Skills
              </a>
            </Link>
            <Link href="/contact">
              <a className=" font-normal text-2xl leading-6 text-white">
                Contact
              </a>
            </Link>
          </div>
          {/* Burger Icon */}
          <div
            id="bgIcon"
            onClick={() => setshow(!show)}
            className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  justify-center items-center sm:hidden cursor-pointer bg-white rounded-md`}
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
                className=" transform duration-150"
                d="M4 6H20"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12H20"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className="transform duration-150"
                d="M4 18H20"
                stroke="#1F2937"
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
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#1F2937"
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
              <a className=" font-normal text-2xl leading-6 text-white">Home</a>
            </Link>
            <Link href="/projects">
              <a className=" font-normal text-2xl leading-6 text-white">
                Projects
              </a>
            </Link>
            <Link href="/skills">
              <a className=" font-normal text-2xl leading-6 text-white">
                Skills
              </a>
            </Link>
            <Link href="/contact">
              <a className=" font-normal text-2xl leading-6 text-white">
                Contact
              </a>
            </Link>
          </div>
          {/* <div className="flex flex-col gap-4 mt-4 w-80 mx-auto ">
            <button className="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-indigo-700 bg-indigo-600 bg-opacity-0 hover:opacity-100 duration-100 border border-indigo-700 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
              Sign Up
            </button>
            <button className="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center">
              Sign In
            </button>
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
