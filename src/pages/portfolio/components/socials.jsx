/* eslint-disable react/prop-types */
import { FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Socials = ({ userDetails }) => {
  return (
    <div className="hidden md:absolute left-0 md:flex flex-col h-full justify-center items-center">
      <div className="flex flex-col justify-center gap-4 items-center bg-white p-3 shadow-lg rounded-r-xl w-16">
        <Link
          to={userDetails.userProfile.githubLink}
          className="p-3 rounded-lg hover:bg-violet-200"
        >
          <FaGithub size={30} />
        </Link>
        <Link
          to={userDetails.userProfile.linkedinLink}
          className="p-3 rounded-lg hover:bg-violet-200"
        >
          <FaLinkedinIn size={30} />
        </Link>
        <Link
          to={userDetails.userProfile.twitterLink}
          className="p-3 rounded-lg hover:bg-violet-200"
        >
          <FaXTwitter size={30} />
        </Link>
        <Link
          to={userDetails.userProfile.discordLink}
          className="p-3 rounded-lg hover:bg-violet-200"
        >
          <FaDiscord size={30} />
        </Link>
      </div>
    </div>
  );
};

export default Socials;
