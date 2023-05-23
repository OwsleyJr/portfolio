import Image from "next/image";
import swordImg from "../../assets/images/sword.png";
import netlifySVG from "../../assets/svgs/netlify.svg";
import vercelSVG from "../../assets/svgs/vercel.svg";

const Skills: React.FC = () => {
  return (
    <div className="flex flex-col mx-auto max-w-7xl">
      <div className="z-0 flex-1 px-4 pt-10 md:px-6 md:py-20">
        <div className="flex flex-row items-center">
          <Image
            src={swordImg}
            alt="swordImage"
            className="w-16 h-16 sm:w-24 sm:h-24"
            placeholder="blur"
          />
          <h1 className="ml-2 text-5xl font-black leading-7 text-center text-white cursor-default sm:text-7xl 2xl:text-8xl 2xl:mb-3 sm:leading-10">
            Skills
          </h1>
        </div>
        <h1 className="mt-4 text-3xl font-black leading-7 text-cyan-500 cursor-default sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl md:mt-6 md:leading-10">
          Languages/Frameworks
        </h1>
        <div className="flex flex-row mt-2 space-x-5">
          <a
            href="https://www.javascript.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-2 text-5xl font-black transition duration-300 ease-in-out scale-100 hover:scale-105 sm:text-5xl md:text-7xl lg:text-8xl md:leading-10 md:mt-4"
          >
            <i className="devicon-javascript-plain colored"></i>
          </a>
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noreferrer"
            className="mt-2 text-5xl font-black transition duration-300 ease-in-out scale-100 hover:scale-105 sm:text-5xl md:text-7xl lg:text-8xl md:leading-10 md:mt-4"
          >
            <i className="devicon-react-original colored"></i>
          </a>
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noreferrer"
            className="mt-2 text-5xl font-black transition duration-300 ease-in-out scale-100 hover:scale-105 sm:text-5xl md:text-7xl lg:text-8xl md:leading-10 md:mt-4"
          >
            <i
              className="devicon-nextjs-original colored"
              placeholder="blur"
            ></i>
          </a>
          <a
            href="https://redux.js.org/"
            target="_blank"
            rel="noreferrer"
            className="mt-2 text-5xl font-black transition duration-300 ease-in-out scale-100 hover:scale-105 sm:text-5xl md:text-7xl lg:text-8xl md:leading-10 md:mt-4"
          >
            <i className="devicon-redux-original colored"></i>
          </a>
        </div>
        <div className="flex flex-row mt-2 space-x-5 md:mt-0">
          <a
            href="https://nodejs.org/en/"
            target="_blank"
            rel="noreferrer"
            className="mt-2 text-5xl font-black transition duration-300 ease-in-out scale-100 hover:scale-105 sm:text-5xl md:text-7xl lg:text-8xl md:leading-10 md:mt-4"
          >
            <i className="devicon-nodejs-plain colored"></i>
          </a>
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-2 text-5xl font-black transition duration-300 ease-in-out scale-100 hover:scale-105 sm:text-5xl md:text-7xl lg:text-8xl md:leading-10 md:mt-4"
          >
            <i className="devicon-tailwindcss-plain colored"></i>
          </a>
          <a
            href="https://expressjs.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-inherit text-inherit mt-2 text-5xl font-black transition duration-300 ease-in-out scale-100 hover:scale-105 sm:text-5xl md:text-7xl lg:text-8xl md:leading-10 md:mt-4"
          >
            <i className="devicon-express-original"></i>
          </a>
          <a
            href="https://sequelize.org/"
            target="_blank"
            rel="noreferrer"
            className="mt-2 text-5xl font-black transition duration-300 ease-in-out scale-100 hover:scale-105 sm:text-5xl md:text-7xl lg:text-8xl md:leading-10 md:mt-4"
          >
            <i className="devicon-sequelize-plain colored"></i>
          </a>
        </div>
        <h1 className="mt-5 text-3xl font-black text-cyan-500 cursor-default sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl md:leading-10">
          Cloud Technology
        </h1>
        <div className="flex flex-row mt-2 space-x-5">
          <a
            href="https://www.heroku.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-2 text-5xl font-black transition duration-300 ease-in-out scale-100 hover:scale-105 sm:text-5xl md:text-7xl lg:text-8xl md:leading-10 md:mt-4"
          >
            <i className="devicon-heroku-plain colored"></i>
          </a>
          <a
            href="https://www.netlify.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-2 transition duration-300 ease-in-out scale-100 hover:scale-105 sm:text-5xl md:text-7xl lg:text-8xl md:leading-10 md:mt-4"
          >
            <Image src={netlifySVG} alt="Netlify icon" width={72} height={72} />
          </a>
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-2 transition duration-300 ease-in-out scale-100 hover:scale-105 sm:text-5xl md:text-7xl lg:text-8xl md:leading-10 md:mt-4"
          >
            <Image src={vercelSVG} alt="Vercel icon" width={72} height={72} />
          </a>
          <a
            href="https://firebase.google.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-2 text-5xl font-black transition duration-300 ease-in-out scale-100 hover:scale-105 sm:text-5xl md:text-7xl lg:text-8xl md:leading-10 md:mt-4"
          >
            <i className="devicon-firebase-plain colored"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skills;
