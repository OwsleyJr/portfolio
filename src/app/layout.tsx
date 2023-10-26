"use client";
import { useRef, useContext } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context";
import { Inter } from "next/font/google";
import Navbar from "../components/Layout/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const FrozenRouter = ({ children }: { children: React.ReactNode }) => {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en" className={inter.className}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
        ></link>
      </head>
      <body>
        <div className="flex flex-col min-h-screen min-w-0">
          <Navbar />
          <AnimatePresence
            mode="wait"
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <motion.div
              key={pathname}
              initial="hidden"
              animate="enter"
              exit="exit"
              variants={variants}
              transition={{ type: "linear" }}
            >
              <FrozenRouter>{children}</FrozenRouter>
            </motion.div>
          </AnimatePresence>
        </div>
      </body>
    </html>
  );
}
