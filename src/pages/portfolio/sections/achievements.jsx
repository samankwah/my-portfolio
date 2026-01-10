// import React from "react";
// import { useUser } from "../../../contexts/UserContext";
// import { FaTrophy, FaCertificate, FaStar } from "react-icons/fa"; // Importing icons
// import SectionHeader from "../components/SectionHeader";

// const Achievements = () => {
//   const { userDetails } = useUser();
//   const { achievements } = userDetails;

//   return (
//     <div className="container py-20 flex flex-col gap-10 mx-auto w-screen px-4 text-center">
//       <SectionHeader title="MY ACHIEVEMENTS" />
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {achievements.map((achievement, index) => (
//           <div
//             key={index}
//             className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center border border-gray-100 hover:border-violet-200 hover:scale-105"
//           >
//             {achievement.image && (
//               <div className="mb-4 w-full overflow-hidden rounded-lg">
//                 <img
//                   src={achievement.image}
//                   alt={achievement.award}
//                   className="w-full h-40 object-cover rounded-lg transition-transform duration-300 hover:scale-110"
//                 />
//               </div>
//             )}
//             <div className="bg-violet-100 p-3 rounded-full mb-3">
//               <FaTrophy className="text-violet-600" size={28} />
//             </div>
//             <h3 className="text-xl font-bold text-violet-600 mb-2 text-center">
//               {achievement.award}
//             </h3>
//             <p className="text-gray-700 mb-4 text-center leading-relaxed">
//               {achievement.description}
//             </p>
//             <div className="mt-auto w-full border-t border-gray-200 pt-4">
//               <p className="text-sm text-gray-800 mb-1 text-center font-semibold">
//                 {achievement.date}
//               </p>
//               <p className="text-sm text-gray-700 text-center">
//                 {achievement.nameOfInstitution}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Achievements;

import React from "react";
import { useUser } from "../../../contexts/UserContext";
import { FaTrophy, FaAward, FaMedal } from "react-icons/fa";
import SectionHeader from "../components/SectionHeader";

const Achievements = () => {
  const { userDetails } = useUser();
  const { achievements } = userDetails;

  // Cycle through different icons for variety
  const getIcon = (index) => {
    const icons = [FaTrophy, FaAward, FaMedal];
    const IconComponent = icons[index % icons.length];
    return <IconComponent className="text-violet-600" size={24} />;
  };

  return (
    <div className="py-20">
      <div className="container py-10 flex flex-col gap-10 mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeader title="MY ACHIEVEMENTS" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 container mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white p-7 md:p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col border border-gray-100 hover:border-violet-200 group overflow-hidden"
            >
              {achievement.image && (
                <div className="mb-5 -mx-7 md:-mx-8 -mt-7 md:-mt-8 overflow-hidden">
                  <img
                    src={achievement.image}
                    alt={achievement.award}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              )}

              <div className="flex items-start gap-4 mb-5">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-violet-100 to-violet-50 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(index)}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                    {achievement.award}
                  </h3>
                </div>
              </div>

              <p className="text-gray-700 text-base leading-relaxed mb-5 flex-grow">
                {achievement.description}
              </p>

              <div className="space-y-3 pt-5 border-t border-gray-200 mt-auto">
                <div className="flex items-center gap-3 text-sm md:text-base">
                  <span className="text-lg flex-shrink-0">📅</span>
                  <span className="font-semibold text-gray-800">
                    {achievement.date}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-sm md:text-base">
                  <span className="text-lg flex-shrink-0">🏛️</span>
                  <span className="text-gray-700">
                    {achievement.nameOfInstitution}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
