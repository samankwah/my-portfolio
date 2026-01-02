import { Link } from "react-router-dom";
import { useUser } from "../../../contexts/UserContext";
import SectionHeader from "../components/SectionHeader";

const Projects = () => {
  const { userDetails } = useUser();
  return (
    <div id="projects" className="container py-20 flex flex-col gap-10 mx-auto w-screen text-center">
      <SectionHeader
        title="PROJECTS"
        description="Here you will find some of the personal and clients projects that I created with each project containing its own case study"
      />
      <div className="space-y-4">
        {userDetails.projects.map((project, index) => {
          return (
            <div key={index} className="grid md:grid-cols-5 items-center">
              <div className="col-span-3 flex justify-center rounded-lg overflow-hidden">
                <img
                  className="object-cover"
                  src={project.image}
                  alt={project.projectName}
                />
              </div>
              <div className="col-span-2 flex flex-col justify-center items-center md:items-start gap-6 text-center md:text-left px-5 md:px-0 md:w-[80%]">
                <h4 className="text-2xl font-bold text-gray-950">
                  {project.projectName}
                </h4>
                <p className="text-gray-700">{project.description}</p>
                <div className="flex justify-center md:justify-start gap-4">
                  {project.hasCaseStudy ? (
                    <Link
                      to={`/project/${project.slug}`}
                      className="border bg-violet-600 py-2 px-6 text-base text-white font-semibold rounded-lg shadow-md hover:bg-violet-700 hover:shadow-lg transition-colors duration-300"
                    >
                      CASE STUDY
                    </Link>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border bg-violet-600 py-2 px-6 text-base text-white font-semibold rounded-lg shadow-md hover:bg-violet-700 hover:shadow-lg transition-colors duration-300"
                    >
                      VIEW PROJECT
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
