import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { name: "Home", to: "/", id: 1 },
  { name: "Projects", to: "/projects", id: 2 },
  { name: "Skills", to: "/skills", id: 3 },
  { name: "Contact", to: "/contact", id: 4 },
];

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};
const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const Navbar = () => {
  const [show, setshow] = useState(false);

  return (
    <div className="relative h-14 z-40">
      <nav className="absolute px-4 py-5 sm:container sm:mx-auto sm:py-6 sm:inset-0">
        <div className="flex flex-row justify-between">
          <h1 className="text-2xl font-normal leading-6 text-teal-500 cursor-default">
            z3hn
          </h1>

          <div className="items-center hidden space-x-3 sm:flex sm:justify-end sm:items-end">
            <Link href="/" scroll={false}>
              <a className="text-2xl font-bold leading-6 text-white ">Home</a>
            </Link>
            <Link href="/projects" scroll={false}>
              <a className="text-2xl font-bold leading-6 text-white ">
                Projects
              </a>
            </Link>
            <Link href="/skills" scroll={false}>
              <a className="text-2xl font-bold leading-6 text-white ">Skills</a>
            </Link>
            <Link href="/contact" scroll={false}>
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
        <AnimatePresence>
          {show && (
            <motion.aside
              initial={{ width: 0 }}
              animate={{
                width: 300,
              }}
              exit={{
                width: 0,
                transition: { delay: 0.7, duration: 0.3 },
              }}
            >
              <motion.div
                id="MobileNavigation"
                className={`${show ? "" : "hidden"} sm:hidden mt-4 mx-auto`}
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}
              >
                <div className="flex flex-row items-center space-x-4">
                  {links.map(({ name, to, id }) => (
                    <motion.a
                      key={id}
                      href={to}
                      whileHover={{ scale: 1.1 }}
                      variants={itemVariants}
                      className="text-2xl font-bold leading-6 text-white"
                    >
                      {name}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.aside>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
