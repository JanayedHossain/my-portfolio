import animationData from "../../assets/developer.json";
import Lottie from "lottie-react";

const About = () => {
  return (
    <div className="py-16 scroll-mt-16" id="about">
      <div className="w-[90%] mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        
        <div className="lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 border-b border-gray-300 pb-2">
            About Me
          </h2>

          <p className="mb-4 text-gray-700 dark:text-gray-300">
            I'm a passionate frontend developer who enjoys building clean,
            user-friendly websites and applications. My journey in programming
            started during university, and it quickly turned into a long-term
            passion.
          </p>

          <p className="mb-4 text-gray-700 dark:text-gray-300">
            I specialize in React, JavaScript, and modern frontend tools. I love
            solving problems and turning ideas into real products that work
            smoothly in the browser.
          </p>

          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Outside of coding, I enjoy hiking, reading science fiction, and
            experimenting with new recipes. I’m always eager to learn and
            improve both personally and professionally.
          </p>
        </div>

     
        <div className="lg:w-1/2">
          <Lottie
            animationData={animationData}
            className="w-full max-w-xs mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
