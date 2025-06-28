import { RxCross1 } from "react-icons/rx";
import { Link, useLoaderData, useNavigate, useParams } from "react-router";

const ProjectDetails = () => {
    const projects = useLoaderData();
    const navigate=useNavigate()
  const { id } = useParams();
  const project = projects.projects.find((p) => p.id === parseInt(id));

  if (!project)
    return (
      <p className="text-center text-red-500 text-xl mt-10">
        🚫 Project not found
      </p>
    );

  return (
    <>
      <section className="py-10 px-4 bg-base-200 min-h-screen">
        <div className="max-w-5xl mx-auto bg-white dark:bg-base-100 shadow-xl rounded-lg p-8">
          <div className="flex justify-end pb-4" onClick={()=>navigate('/')}>
            <RxCross1 size={25} className="cursor-pointer"/>
          </div>
          {/* Image */}
          <div className="rounded-lg overflow-hidden mb-8">
            <img
              src={project.image}
              alt={project.name}
              className="w-full object-cover border border-gray-300 p-4 rounded-md shadow"
            />
          </div>

          {/* Title & Description */}
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {project.name}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-secondary">
              🛠️ Technology Stack:
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-secondary mb-2">
              🚧 Challenges Faced:
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              {project.challenges}
            </p>
          </div>

          {/* Future Plans */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-secondary mb-2">
              🔮 Future Plans:
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              {project.futurePlans}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              🌐 Live Site
            </a>
            <a
              href={project.githubClientRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
            >
              💻 GitHub Repo
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetails;
