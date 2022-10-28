import Image from "next/image";
import swordImg from "../../assets/sword.png";

const Skills: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-10 sm:pt-16 mx-auto">
      <div className="flex-col items-start justify-center w-11/12 sm:w-2/3 sm:flex">
        <div className="flex flex-row items-center">
          <div className="relative">
            <Image
              src={swordImg}
              alt="swordImage"
              className="w-16 h-16 sm:w-24 sm:h-24"
              placeholder="blur"
            />
          </div>
          <h1 className="ml-2 text-5xl font-black leading-7 text-center text-white cursor-default md:text-7xl md:leading-10">
            Skills
          </h1>
        </div>
        <h1 className="mt-4 text-3xl font-black leading-7 text-cyan-500 cursor-default sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl md:mt-6 md:leading-10">
          Languages/Frameworks
        </h1>

        <div className="flex flex-row mt-2 space-x-5">
          <a
            href="https://www.javascript.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:no-underline mt-2 text-5xl font-black leading-7 transition duration-300 ease-in-out scale-100 hover:scale-105 sm:text-5xl md:text-7xl lg:text-8xl md:leading-10 md:mt-4"
          >
            <i className="devicon-javascript-plain colored"></i>
          </a>
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noreferrer"
            className="hover:no-underline mt-2 text-5xl font-black leading-7 transition duration-300 ease-in-out scale-100 hover:scale-105 sm:text-5xl md:text-7xl lg:text-8xl md:leading-10 md:mt-4"
          >
            <i className="devicon-react-original colored"></i>
          </a>
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noreferrer"
            className="hover:no-underline mt-2 text-5xl font-black leading-7 transition duration-300 ease-in-out scale-100 hover:scale-105 sm:text-5xl md:text-7xl lg:text-8xl md:leading-10 md:mt-4"
          >
            <i className="devicon-nextjs-original colored"></i>
          </a>
          <a
            href="https://redux.js.org/"
            target="_blank"
            rel="noreferrer"
            className="hover:no-underline mt-2 text-5xl font-black leading-7 transition duration-300 ease-in-out scale-100 hover:scale-105 sm:text-5xl md:text-7xl lg:text-8xl md:leading-10 md:mt-4"
          >
            <i className="devicon-redux-original colored"></i>
          </a>
        </div>

        <div className="flex flex-row mt-2 space-x-5 md:mt-0">
          <a
            href="https://nodejs.org/en/"
            target="_blank"
            rel="noreferrer"
            className="hover:no-underline mt-2 text-5xl font-black leading-7 transition duration-300 ease-in-out scale-100 hover:scale-105 sm:text-5xl md:text-7xl lg:text-8xl md:leading-10 md:mt-4"
          >
            <i className="devicon-nodejs-plain colored"></i>
          </a>
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:no-underline mt-2 text-5xl font-black leading-7 transition duration-300 ease-in-out scale-100 hover:scale-105 sm:text-5xl md:text-7xl lg:text-8xl md:leading-10 md:mt-4"
          >
            <i className="devicon-tailwindcss-plain colored"></i>
          </a>
          <a
            href="https://expressjs.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:no-underline hover:text-inherit text-inherit mt-2 text-5xl font-black leading-7 transition duration-300 ease-in-out scale-100 hover:scale-105 sm:text-5xl md:text-7xl lg:text-8xl md:leading-10 md:mt-4"
          >
            <i className="devicon-express-original"></i>
          </a>
          <a
            href="https://sequelize.org/"
            target="_blank"
            rel="noreferrer"
            className="hover:no-underline mt-2 text-5xl font-black leading-7 transition duration-300 ease-in-out scale-100 hover:scale-105 sm:text-5xl md:text-7xl lg:text-8xl md:leading-10 md:mt-4"
          >
            <i className="devicon-sequelize-plain colored"></i>
          </a>
        </div>
        <h1 className="mt-5 text-3xl font-black leading-7 text-cyan-500 cursor-default sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl md:leading-10">
          Cloud Technology
        </h1>
        <div className="flex flex-row mt-2 space-x-5">
          <a
            href="https://www.heroku.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:no-underline mt-2 text-5xl font-black leading-7 transition duration-300 ease-in-out scale-100 hover:scale-105 sm:text-5xl md:text-7xl lg:text-8xl md:leading-10 md:mt-4"
          >
            <i className="devicon-heroku-plain colored"></i>
          </a>
          <a
            href="https://www.netlify.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:no-underline mt-2 text-5xl font-black leading-7 transition duration-300 ease-in-out scale-100 hover:scale-105 sm:text-5xl md:text-7xl lg:text-8xl md:leading-10 md:mt-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 256 256"
            >
              <defs>
                <radialGradient
                  id="svgIDa"
                  cx="50%"
                  cy="-50%"
                  r="100%"
                  fx="50%"
                  fy="-50%"
                >
                  <stop offset="0%" stopColor="#20C6B7" />
                  <stop offset="100%" stopColor="#4D9ABF" />
                </radialGradient>
              </defs>
              <path
                fill="url(#svgIDa)"
                d="m185.532 88.839l-.094-.04a.396.396 0 0 1-.154-.087a.734.734 0 0 1-.187-.621l5.167-31.553l24.229 24.209l-25.198 10.709a.555.555 0 0 1-.22.04h-.101a.694.694 0 0 1-.134-.114a11.468 11.468 0 0 0-3.308-2.543Zm35.144-1.923l25.906 25.878c5.38 5.381 8.075 8.065 9.057 11.177c.147.46.267.921.361 1.395l-61.913-26.192a4.868 4.868 0 0 0-.1-.04c-.248-.1-.535-.214-.535-.467c0-.254.294-.374.541-.474l.08-.034l26.603-11.243Zm34.268 46.756c-1.337 2.51-3.944 5.114-8.355 9.527l-29.209 29.17l-37.777-7.858l-.2-.04c-.335-.054-.689-.114-.689-.414a11.387 11.387 0 0 0-4.378-7.965c-.154-.154-.113-.394-.067-.615c0-.033 0-.066.014-.093l7.105-43.571l.026-.147c.04-.334.1-.721.401-.721a11.566 11.566 0 0 0 7.754-4.44c.06-.067.1-.14.18-.18c.214-.1.468 0 .689.093l64.5 27.254h.006Zm-44.28 45.407l-48.031 47.978l8.22-50.475l.014-.067a.905.905 0 0 1 .04-.193c.067-.16.24-.227.408-.294l.08-.034c1.8-.767 3.392-1.95 4.646-3.451c.16-.187.354-.368.601-.401c.064-.01.13-.01.194 0l33.82 6.944l.007-.007Zm-58.198 58.133l-5.414 5.408l-59.854-86.408a2.831 2.831 0 0 0-.067-.094c-.093-.127-.194-.253-.173-.4c.006-.107.073-.2.147-.28l.066-.087c.18-.268.335-.535.502-.822l.133-.233l.02-.02c.094-.16.18-.314.341-.401c.14-.067.335-.04.488-.007l66.311 13.66c.186.03.36.105.508.22c.087.088.107.181.127.288a11.735 11.735 0 0 0 6.871 7.845c.187.093.107.3.02.52a1.588 1.588 0 0 0-.1.301c-.835 5.074-8 48.726-9.926 60.51Zm-11.309 11.29c-3.99 3.946-6.343 6.035-9.003 6.877a13.382 13.382 0 0 1-8.06 0c-3.115-.989-5.809-3.672-11.19-9.054l-60.108-60.042l15.7-24.323a1 1 0 0 1 .268-.314c.167-.12.408-.066.608 0a16.285 16.285 0 0 0 10.948-.554c.18-.066.361-.113.502.014c.07.064.133.135.187.213l60.148 87.19v-.007Zm-94.156-68.008l-13.789-13.773l27.23-11.604a.562.562 0 0 1 .221-.047c.227 0 .361.227.481.434c.274.42.564.83.87 1.229l.086.106c.08.114.027.227-.053.334l-15.04 23.321h-.006ZM27.11 160.625L9.665 143.199c-2.968-2.964-5.12-5.114-6.617-6.963l53.043 10.99l.2.033c.328.053.69.113.69.42c0 .334-.395.488-.73.614l-.153.067l-28.988 12.265ZM0 127.275a13.34 13.34 0 0 1 .602-3.304c.989-3.112 3.676-5.796 9.063-11.177l22.324-22.3a14524.43 14524.43 0 0 0 30.92 44.647c.18.24.38.507.174.707c-.976 1.075-1.952 2.25-2.64 3.526c-.075.163-.19.306-.335.413c-.087.054-.18.034-.28.014h-.014L0 127.269v.007Zm37.965-42.75l30.017-29.984c2.82 1.235 13.087 5.568 22.27 9.44c6.952 2.939 13.288 5.61 15.28 6.477c.2.08.381.16.468.36c.053.12.027.274 0 .401a13.363 13.363 0 0 0 3.496 12.205c.2.2 0 .487-.174.734l-.094.14l-30.478 47.157c-.08.134-.154.247-.288.334c-.16.1-.387.053-.575.007a15.215 15.215 0 0 0-3.629-.494c-1.096 0-2.286.2-3.489.42h-.007c-.133.02-.254.047-.36-.033a1.403 1.403 0 0 1-.301-.34L37.965 84.525Zm36.08-36.04l38.86-38.817c5.38-5.375 8.074-8.065 11.188-9.047a13.382 13.382 0 0 1 8.061 0c3.115.982 5.808 3.672 11.189 9.047l8.422 8.413l-27.638 42.756a1.035 1.035 0 0 1-.274.32c-.167.114-.401.067-.602 0a14.028 14.028 0 0 0-12.833 2.471c-.18.187-.448.08-.675-.02c-3.61-1.569-31.682-13.42-35.699-15.122Zm83.588-24.542l25.52 25.49l-6.15 38.044v.1a.9.9 0 0 1-.053.254c-.067.133-.201.16-.335.2a12.237 12.237 0 0 0-3.662 1.823a1.029 1.029 0 0 0-.134.113c-.074.08-.147.154-.267.167a.763.763 0 0 1-.288-.047l-38.887-16.504l-.073-.034c-.248-.1-.542-.22-.542-.474a14.664 14.664 0 0 0-2.072-6.109c-.187-.307-.394-.627-.234-.941l27.177-42.082ZM131.352 81.4l36.454 15.423c.2.093.421.18.508.387a.707.707 0 0 1 0 .38c-.107.535-.2 1.142-.2 1.757v1.021c0 .254-.261.36-.502.46l-.073.027c-5.775 2.464-81.076 34.538-81.19 34.538c-.113 0-.234 0-.347-.113c-.2-.2 0-.48.18-.735l.094-.133l29.957-46.335l.053-.08c.174-.281.375-.595.696-.595l.3.047c.682.093 1.284.18 1.892.18c4.545 0 8.756-2.21 11.296-5.989c.06-.1.137-.19.227-.267c.18-.133.448-.066.655.027Zm-41.748 61.324l82.079-34.965s.12 0 .234.114c.447.447.828.747 1.196 1.028l.18.113c.168.094.335.2.348.374c0 .067 0 .107-.013.167l-7.032 43.144l-.027.174c-.046.333-.093.714-.407.714a11.558 11.558 0 0 0-9.177 5.655l-.034.053c-.093.154-.18.3-.334.38c-.14.068-.32.041-.468.008l-65.455-13.487c-.067-.013-1.016-3.465-1.09-3.472Z"
              />
            </svg>
          </a>
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:no-underline mt-2 text-5xl font-black leading-7 transition duration-300 ease-in-out scale-100 hover:scale-105 sm:text-5xl md:text-7xl lg:text-8xl md:leading-10 md:mt-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1.16em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 256 222"
            >
              <path d="m128 0l128 221.705H0z" />
            </svg>{" "}
          </a>
          <a
            href="https://firebase.google.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:no-underline mt-2 text-5xl font-black leading-7 transition duration-300 ease-in-out scale-100 hover:scale-105 sm:text-5xl md:text-7xl lg:text-8xl md:leading-10 md:mt-4"
          >
            <i className="devicon-firebase-plain colored"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skills;
