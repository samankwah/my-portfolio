/* eslint-disable react/prop-types */

const ProjectOverview = ({ project }) => {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        Project Overview
      </h2>

      <div className="space-y-6">
        {project.overviewParagraphs && project.overviewParagraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-lg text-gray-700 leading-relaxed"
          >
            {paragraph}
          </p>
        ))}

        <p className="text-lg text-gray-700 leading-relaxed mt-8">
          Feel free to check out the Project by visiting the{" "}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-600 hover:text-violet-700 font-semibold underline"
          >
            Project Link
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default ProjectOverview;
