import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiDaisyui,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiNetlify,
  SiVercel,
} from "react-icons/si";

const Skills = () => {
  const skillsData = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "React", icon: <FaReact className="text-sky-500" /> },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-teal-400" />,
        },
        { name: "DaisyUI", icon: <SiDaisyui className="text-purple-600" /> },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
        { name: "Database", icon: <FaDatabase className="text-indigo-600" /> },
      ],
    },
    {
      category: "Tools & Deployment",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-red-600" /> },
        { name: "GitHub", icon: <FaGithub className="text-gray-800" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
        { name: "Netlify", icon: <SiNetlify className="text-green-400" /> },
        { name: "Vercel", icon: <SiVercel className="text-black" /> },
      ],
    },
  ];

  return (
    <div className="w-[90%] mx-auto mb-16">
      <div>
        <h2 className="text-2xl sm:text-3xl font-semibold ">Skills</h2>
        <hr className="border-gray-300 mb-10 mt-3" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-neutral rounded-2xl shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 bg-base-200 dark:bg-base-300 rounded-full shadow-sm cursor-default hover:bg-primary hover:text-white transition"
                    title={skill.name}
                  >
                    {skill.icon}
                    <span className="font-medium">{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
