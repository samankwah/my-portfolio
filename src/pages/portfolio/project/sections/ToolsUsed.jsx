/* eslint-disable react/prop-types */

const ToolsUsed = ({ tools }) => {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        Tools Used
      </h2>

      <div className="flex flex-wrap gap-4">
        {tools && tools.map((tool, index) => (
          <span
            key={index}
            className="px-6 py-3 bg-gray-300 text-gray-800 font-semibold
                     rounded-md text-base md:text-lg"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ToolsUsed;
