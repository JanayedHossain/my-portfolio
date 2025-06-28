import resume from "../../assets/resume.pdf";
import myPhoto from "../../assets/myPhoto.jpg";
import SocialLinks from "../social-link/SocialLink";

const Hero = () => {
  return (
    <div className="hero min-h-[80vh] py-10 bg-base-200 scroll-mt-16" id="#">
      <div className="flex flex-col gap-10 md:flex-row-reverse items-center justify-between w-[90%]">
        <img src={myPhoto} className=" rounded-lg shadow-2xl h-72" />
        <div>
          <h1 className="text-3xl sm:text-5xl font-bold">
            Hi, I'm Janayed Hossain
          </h1>
          <p className="py-3 text-base sm:text-xl text-primary">
            Frontend Developer
          </p>
          <SocialLinks />
          <a href={resume} download>
            <button className="btn btn-primary btn-sm sm:btn-md">
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Hero;
