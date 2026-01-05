import SectionHeader from "../components/SectionHeader";
import { useUser } from "../../../contexts/UserContext";
import { Link } from "react-router-dom";

const About = () => {
  const { userDetails } = useUser();
  // eslint-disable-next-line no-unused-vars
  const handleScroll = () => {
    const element = document.getElementById("contact");
    if (element) {
      const yOffset = -80;
      const yPosition =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  return (
    <div id="profile" className="bg-[#FAFAFA] py-10 md:py-20">
      <div className="container flex flex-col gap-12 md:gap-20 mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <SectionHeader
          title="ABOUT ME"
          description="Passionate software developer crafting innovative web solutions with modern technologies. Explore my journey, expertise, and the skills that drive my work."
        />
        <div className="grid grid-cols-1 md:grid-cols-5 space-y-10 md:space-y-0 md:space-x-14 text-center md:text-left">
          {/* Left Column */}
          <div className="md:col-span-2 flex flex-col gap-6 justify-center items-start w-full">
            <h4 className="text-2xl md:text-3xl font-bold text-gray-950">
              Get to know me!
            </h4>
            <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-4">
              {userDetails.userProfile.bio.length > 50 ? (
                <p>{userDetails.userProfile.bio}</p>
              ) : (
                <div className="flex flex-col gap-4 text-justify">
                  <p>
                    I&apos;m a Software Developer specializing in building
                    modern web applications using React, TypeScript, and
                    cutting-edge technologies. Currently at ByteShift, I create
                    scalable solutions from healthcare kiosks to government
                    systems. Check out my work in the{" "}
                    <a
                      href="#projects"
                      className="text-violet-600 hover:underline font-semibold"
                    >
                      Projects
                    </a>{" "}
                    section.
                  </p>
                  <p>
                    I&apos;m passionate about sharing knowledge and learning
                    from the developer community. Connect with me on{" "}
                    <Link
                      to="https://www.linkedin.com/in/stephenamankwah/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-violet-600 hover:underline font-semibold"
                    >
                      LinkedIn
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="https://x.com/1amankwa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-violet-600 hover:underline font-semibold"
                    >
                      X
                    </Link>{" "}
                    where I share insights on web development.
                  </p>
                  <p>
                    I&apos;m open to opportunities where I can contribute,
                    learn, and grow. If you have a project that matches my
                    skills and experience, let&apos;s connect.
                  </p>
                </div>
              )}
            </div>
          </div>
          {/* Right Column */}
          <div
            id="skills"
            className="md:col-span-3 flex flex-col gap-6 items-start"
          >
            <h4 className="text-2xl md:text-3xl font-bold text-gray-950">
              My Skills
            </h4>
            <div className="flex flex-wrap gap-4 justify-start md:justify-start items-baseline">
              {userDetails.skills.map((skill, index) => {
                return (
                  <span
                    key={index}
                    className="p-2 px-4 md:p-3 md:px-6 rounded-lg bg-gray-200 text-gray-900 hover:text-white hover:bg-violet-600 hover:shadow-md cursor-default transition-all duration-300 text-sm md:text-base font-semibold"
                  >
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <a
          href="/stephen-amankwah-resume.pdf"
          download="Stephen_Amankwah_CV.pdf"
          className="border w-3/4 md:w-1/4 lg:w-1/6 mx-auto bg-violet-600 p-4 px-4 text-lg md:text-xl text-white font-bold shadow-sm rounded-xl hover:bg-violet-700 hover:shadow-lg transition-all duration-300"
        >
          RESUME
        </a>
      </div>
    </div>
  );
};

export default About;
