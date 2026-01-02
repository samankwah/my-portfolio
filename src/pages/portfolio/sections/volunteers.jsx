import { FaHandsHelping } from "react-icons/fa";
import { useUser } from "../../../contexts/UserContext";
import SectionHeader from "../components/SectionHeader";

const Volunteers = () => {
  const { userDetails } = useUser();
  const { volunteering } = userDetails;

  return (
    <div className="py-20 bg-gray-50">
      <div className="container py-10 flex flex-col gap-10 mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeader title="VOLUNTEERING" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {volunteering.map((volunteer, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 mx-auto">
                <FaHandsHelping className="text-green-600" size={28} />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-violet-600 mb-2 text-center">
                {volunteer.projectName}
              </h3>

              <div className="mb-4 text-center">
                <h4 className="text-base md:text-lg font-semibold text-gray-950">
                  {volunteer.role}
                </h4>
                <p className="text-sm md:text-base text-gray-700 mt-1">
                  {volunteer.organisation}
                </p>
              </div>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 text-center flex-grow">
                {volunteer.responsibility}
              </p>

              <div className="space-y-3 pt-4 border-t border-gray-200 mt-auto">
                <div className="flex items-center justify-center text-sm md:text-base text-gray-700">
                  <span className="mr-1">📅</span>
                  {volunteer.startDate} - {volunteer.endDate}
                </div>

                <div className="text-sm md:text-base text-center">
                  <span className="font-semibold text-gray-800">💼 Skills: </span>
                  <span className="text-gray-700">{volunteer.skills}</span>
                </div>

                <div className="flex items-center justify-center text-sm md:text-base">
                  <span className="font-semibold text-gray-800 mr-1">📍</span>
                  <span className="text-gray-700">{volunteer.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Volunteers;
