import { useUser } from "../../../contexts/UserContext";
import { FaBriefcase } from "react-icons/fa"; // Icon for the company role
import SectionHeader from "../components/SectionHeader";

const Experience = () => {
  const { userDetails } = useUser();
  const { experience } = userDetails;

  return (
    <div className="container py-20 flex flex-col gap-10 mx-auto px-4 md:px-6 lg:px-8">
      <SectionHeader title="WORK EXPERIENCE" />
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              {/* Timeline line */}
              {index !== experience.length - 1 && (
                <div className="absolute left-[15px] md:left-[23px] top-12 w-0.5 h-full bg-violet-200"></div>
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 md:left-2 top-2 w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center shadow-md">
                <FaBriefcase className="text-white" size={16} />
              </div>

              {/* Content card */}
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-3">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-950">
                    {exp.role}
                  </h3>
                  <p className="text-base md:text-lg text-violet-600 font-semibold mt-1">
                    {exp.companyName}
                  </p>
                </div>

                <div className="flex items-center text-gray-700 text-sm md:text-base mb-4">
                  <span className="mr-1">📅</span>
                  {exp.startDate} - {exp.endDate}
                </div>

                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                  {exp.responsibility}
                </p>

                <div className="space-y-2 pt-4 border-t border-gray-200">
                  <div className="flex items-start text-sm md:text-base">
                    <span className="font-semibold text-gray-800 mr-2 flex-shrink-0">📍 Location:</span>
                    <span className="text-gray-700">{exp.location}</span>
                  </div>
                  <div className="flex items-start text-sm md:text-base">
                    <span className="font-semibold text-gray-800 mr-2 flex-shrink-0">💼 Skills:</span>
                    <span className="text-gray-700">{exp.skills}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
