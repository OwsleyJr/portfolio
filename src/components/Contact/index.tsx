import Image from "next/image";
import emailImg from "../../assets/email.png";
import linkedinImg from "../../assets/linkedin.png";
import githubImg from "../../assets/github.png";
import contactImg from "../../assets/chat.png";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center mx-auto pt-10 sm:pt-16">
      <div className="flex-col w-11/12 sm:w-auto">
        <div className="flex flex-row items-center">
          <Image
            src={contactImg}
            alt="contactImage"
            className="w-16 h-16 sm:w-24 sm:h-24"
            placeholder="blur"
          />
          <h1 className="ml-2 text-5xl font-black leading-7 text-center text-white cursor-default sm:text-7xl 2xl:text-8xl 2xl:mb-3 sm:leading-10">
            Contact
          </h1>
        </div>
        <div>
          <div className="flex items-center flex-row mt-4 ml-2 md:mt-6">
            <div className="text-white relative mt-0 sm:mt-1">
              <Image
                src={emailImg}
                alt="emailImage"
                className="h-9 w-12 sm:w-16 sm:h-12"
                placeholder="blur"
              />
            </div>
            <a href="mailto:brandon@z3hn.dev" target="_blank" rel="noreferrer">
              <p className="ml-2 text-3xl font-black leading-7 text-center text-cyan-500 sm:text-4xl 2xl:text-5xl sm:leading-10">
                Email
              </p>
            </a>
          </div>
          <div className="flex items-center flex-row mt-3 ml-2 md:mt-4">
            <div className="text-white relative">
              <Image
                src={githubImg}
                alt="githubImage"
                className="w-12 h-12 sm:w-16 sm:h-16"
                placeholder="blur"
              />
            </div>
            <a
              href="https://github.com/OwsleyJr"
              target="_blank"
              rel="noreferrer"
            >
              <p className="ml-2 text-3xl font-black leading-7 text-center text-cyan-500 sm:text-4xl 2xl:text-5xl sm:leading-10">
                Github
              </p>
            </a>
          </div>
          <div className="flex items-center flex-row mt-3 ml-2 md:mt-4">
            <div className="text-white relative">
              <Image
                src={linkedinImg}
                alt="linkedinImage"
                className="w-12 h-12 sm:w-16 sm:h-16"
                placeholder="blur"
              />
            </div>
            <a
              href="https://www.linkedin.com/in/cohbrandon/"
              target="_blank"
              rel="noreferrer"
            >
              <p className="ml-2 text-3xl font-black leading-7 text-center text-cyan-500 sm:text-4xl 2xl:text-5xl sm:leading-10">
                LinkedIn
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
