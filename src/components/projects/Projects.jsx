import { use } from "react";
import { Link } from "react-router";

const Projects = ({ fetchProjects }) => {
  const projects = use(fetchProjects);

    return (
      <div className="w-[90%] mx-auto pb-16" id="projects">
        <h2 className="text-2xl sm:text-3xl font-semibold ">
          Projects
        </h2>
        <hr className="border-gray-300 mt-3 mb-10" />
        <div className="py-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.projects.map((p) => (
            <div key={p.id} className="card bg-base-100 shadow">
              <figure>
                <img src={p.image} alt={p.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{p.name}</h2>
                <Link to={`/projects/${p.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};
export default Projects;
