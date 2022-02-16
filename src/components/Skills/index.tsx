import React from "react";

const Skills: React.FC = () => {
  return (
    <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
      <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-start flex-col mt-10">
        <h1 className="text-2xl sm:text-xl md:text-2xl lg:text-5xl xl:text-6xl text-center text-white font-black leading-7 md:leading-10">
          Skills
        </h1>
        <h1 className="text-xl sm:text-lg md:text-xl lg:text-4xl xl:text-4xl mt-4  text-white font-black leading-7 md:leading-10">
          Languages and Libraries/Frameworks
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl  text-teal-600 font-black leading-7 md:leading-10 mt-2 md:mt-4">
          JavaScript React/NextJS Redux Node.js Tailwind CSS Heroku Express
          Sequelize/SQL
        </p>
        <h1 className="text-xl sm:text-lg md:text-xl lg:text-4xl xl:text-4xl mt-4  text-white font-black leading-7 md:leading-10">
          Cloud Tech
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl  text-teal-600 font-black leading-7 md:leading-10 mt-2 md:mt-4">
          Heroku, Netlify, Vercel
        </p>
      </div>
    </div>
  );
};

export default Skills;
