import { useState } from "react";
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
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

const Navbar = () => {
  const [show, setshow] = useState(false);

  return (
    <div className="h-14 z-40 flex flex-col bg-[#11212c]">
      <div className="flex flex-row justify-between pt-3">
        <div className="pl-5">
          <h1 className="text-2xl font-normal leading-6 bg-gradient-to-r from-cyan-500 to-blue-400 bg-clip-text text-transparent cursor-default">
            z3hn
          </h1>
        </div>

        <div className="items-center hidden space-x-3 sm:flex sm:justify-end sm:items-end pr-5">
          <Link
            href="/"
            scroll={false}
            className="text-2xl font-bold leading-6 text-white">
            Home
          </Link>
          <Link
            href="/projects"
            scroll={false}
            className="text-2xl font-bold leading-6 text-white">
            Projects
          </Link>
          <Link
            href="/skills"
            scroll={false}
            className="text-2xl font-bold leading-6 text-white">
            Skills
          </Link>
          <Link
            href="/contact"
            scroll={false}
            className="text-2xl font-bold leading-6 text-white">
            Contact
          </Link>
        </div>
        <div
          id="bgIcon"
          onClick={() => setshow(!show)}
          className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 pr-5 sm:hidden cursor-pointer rounded-md`}
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
            }}
            className="mx-auto flex justify-center"
          >
            <motion.div
              id="MobileNavigation"
              className={`${show ? "" : "hidden"} sm:hidden mt-4`}
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              <div className="space-x-4">
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
    </div>
  );
};

export default Navbar;
