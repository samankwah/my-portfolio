import React from "react";
import { useUser } from "../../../contexts/UserContext";
import { FaTrophy, FaCertificate, FaStar } from "react-icons/fa"; // Importing icons
import SectionHeader from "../components/SectionHeader";

const Achievements = () => {
  const { userDetails } = useUser();
  const { achievements } = userDetails;

  return (
    <div className="container py-20 flex flex-col gap-10 mx-auto w-screen text-center">
      <SectionHeader title="MY ACHIEVEMENTS" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center border border-gray-100 hover:border-violet-200 hover:scale-105"
          >
            {achievement.image && (
              <div className="mb-4 w-full overflow-hidden rounded-lg">
                <img
                  src={achievement.image}
                  alt={achievement.award}
                  className="w-full h-40 object-cover rounded-lg transition-transform duration-300 hover:scale-110"
                />
              </div>
            )}
            <div className="bg-violet-100 p-3 rounded-full mb-3">
              <FaTrophy className="text-violet-600" size={28} />
            </div>
            <h3 className="text-xl font-bold text-violet-600 mb-2 text-center">
              {achievement.award}
            </h3>
            <p className="text-gray-700 mb-4 text-center leading-relaxed">{achievement.description}</p>
            <div className="mt-auto w-full border-t border-gray-200 pt-4">
              <p className="text-sm text-gray-800 mb-1 text-center font-semibold">{achievement.date}</p>
              <p className="text-sm text-gray-700 text-center">
                {achievement.nameOfInstitution}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
