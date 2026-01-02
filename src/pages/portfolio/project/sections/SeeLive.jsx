/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const SeeLive = ({ projectLink }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back in browser history
  };

  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        See Live
      </h2>

      <div className="flex flex-col sm:flex-row items-start gap-4">
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-violet-600 hover:bg-violet-700 text-white font-bold
                   py-4 px-12 rounded-md shadow-lg transition-all duration-300
                   text-lg uppercase tracking-wide"
        >
          PROJECT LINK
        </a>

        <button
          onClick={handleGoBack}
          className="border-2 border-violet-600 text-violet-600 hover:bg-violet-600
                   hover:text-white font-bold py-4 px-12 rounded-md transition-all
                   duration-300 text-lg uppercase tracking-wide"
        >
          GO BACK
        </button>
      </div>
    </div>
  );
};

export default SeeLive;
