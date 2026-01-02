import { useUser } from "../../../contexts/UserContext";
import { FaGraduationCap } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import SectionHeader from "../components/SectionHeader";

const Education = () => {
  const { userDetails } = useUser();
  const { education } = userDetails;

  return (
    <div className="py-20 bg-gray-50">
      <div className="container py-10 flex flex-col gap-10 mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeader
          title="EDUCATIONAL BACKGROUND"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={edu.image}
                    alt={`${edu.schoolName} logo`}
                    className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full shadow-md flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-950">
                      {edu.schoolName}
                    </h3>
                    <p className="text-base md:text-lg text-violet-600 font-semibold mt-1">
                      {edu.program}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mt-4">
                  <div className="flex items-center text-gray-700 text-sm md:text-base">
                    <MdLocationOn size={18} className="mr-2 flex-shrink-0 text-gray-600" />
                    <span>{edu.location}</span>
                  </div>

                  <div className="text-sm md:text-base text-gray-700">
                    📅 {edu.startDate} - {edu.endDate}
                  </div>

                  <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-3">
                    {edu.description}
                  </p>

                  <div className="flex items-center mt-4 pt-4 border-t border-gray-200">
                    <FaGraduationCap
                      size={20}
                      className="mr-2 text-violet-600 flex-shrink-0"
                    />
                    <span className="text-gray-950 font-semibold text-sm md:text-base">
                      {edu.grade}
                    </span>
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

export default Education;
