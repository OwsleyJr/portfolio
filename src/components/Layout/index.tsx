import { motion } from "framer-motion";
import Navbar from "./Navbar";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen min-w-0">
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear" }}
      >
        <Navbar />
        {children}
      </motion.main>
    </div>
  );
};

export default Layout;
