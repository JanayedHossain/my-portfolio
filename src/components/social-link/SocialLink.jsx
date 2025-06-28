import { FaGithub, FaLinkedin} from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex gap-4  mb-8 text-2xl">
      <a
        href="https://github.com/JanayedHossain"
        target="_blank"
        rel="noreferrer"
        className="hover:text-primary"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/janayed-hossain-226b30333"
        target="_blank"
        rel="noreferrer"
        className="hover:text-primary"
      >
        <FaLinkedin />
      </a>
    </div>
  );
};

export default SocialLinks;
