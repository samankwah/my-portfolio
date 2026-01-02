/* eslint-disable react/prop-types */

const SectionHeader = ({ title, description }) => {
  return (
    <div className="flex flex-col justify-center align-middle items-center gap-6 w-4/5 md:w-2/3 mx-auto ">
      <h4 className="text-4xl font-bold text-gray-950">{title}</h4>
      <div className="w-full flex justify-center ">
        <hr className="w-[5%] border-t-[6px] rounded-full border-violet-600" />
      </div>
      <p className="text-lg text-gray-700">{description}</p>
    </div>
  );
};

export default SectionHeader;
