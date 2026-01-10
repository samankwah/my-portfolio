import { FaHandsHelping } from "react-icons/fa";
import { useUser } from "../../../contexts/UserContext";
import SectionHeader from "../components/SectionHeader";

const Volunteers = () => {
  const { userDetails } = useUser();
  const { volunteering } = userDetails;

  return (
    <div className="py-20">
      <div className="container py-10 flex flex-col gap-10 mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeader title="VOLUNTEERING" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {volunteering.map((volunteer, index) => (
            <div
              key={index}
              className="bg-white p-7 md:p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col border border-gray-100 hover:border-violet-200 group"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <FaHandsHelping className="text-green-600" size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 leading-tight">
                    {volunteer.projectName}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-violet-100 text-violet-700 text-xs font-semibold rounded-full">
                    {volunteer.role}
                  </span>
                </div>
              </div>

              <div className="mb-5">
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <span className="text-lg">🏢</span>
                  <p className="text-base font-medium text-gray-800">
                    {volunteer.organisation}
                  </p>
                </div>

                <p className="text-gray-700 text-base leading-relaxed flex-grow">
                  {volunteer.responsibility}
                </p>
              </div>

              <div className="space-y-3 pt-5 border-t border-gray-200 mt-auto">
                <div className="flex items-center gap-3 text-sm md:text-base text-gray-700">
                  <span className="text-lg flex-shrink-0">📅</span>
                  <span>
                    {volunteer.startDate} - {volunteer.endDate}
                  </span>
                </div>

                <div className="flex items-start gap-3 text-sm md:text-base">
                  <span className="text-lg flex-shrink-0 mt-0.5">💼</span>
                  <div>
                    <span className="font-semibold text-gray-800 block mb-1">
                      Skills
                    </span>
                    <span className="text-gray-700 leading-relaxed">
                      {volunteer.skills}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm md:text-base">
                  <span className="text-lg flex-shrink-0">📍</span>
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
