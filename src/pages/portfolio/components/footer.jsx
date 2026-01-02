import { Link } from "react-router-dom";
import { useUser } from "../../../contexts/UserContext";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub, FaXTwitter, FaDiscord } from "react-icons/fa6";

const Footer = () => {
  const { userDetails } = useUser();
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 text-start md:text-left">
          {/* User Info */}
          <div className="w-full md:w-2/5 flex flex-col items-start md:items-start">
            <h4 className="text-2xl font-bold text-white">
              {userDetails.firstname.toUpperCase()}{" "}
              {userDetails.lastname.toUpperCase()}
            </h4>
            <p className="text-gray-400 mt-3">
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </p>
          </div>

          {/* Social Links */}
          <div className="w-full md:w-1/3 flex flex-col items-start md:items-start">
            <h4 className="text-xl font-semibold text-white">SOCIAL</h4>
            <div className="flex justify-center md:justify-start mt-4 gap-4">
              <Link
                to={userDetails.userProfile.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-violet-600 transition duration-300"
              >
                <FaGithub size={20} />
              </Link>
              <Link
                to={userDetails.userProfile.linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-violet-600 transition duration-300"
              >
                <FaLinkedinIn size={20} />
              </Link>
              <Link
                to={userDetails.userProfile.twitterLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-violet-600 transition duration-300"
              >
                <FaXTwitter size={20} />
              </Link>
              <Link
                to={userDetails.userProfile.discordLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-violet-600 transition duration-300"
              >
                <FaDiscord size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center">
          <hr className="border-gray-700" />
          <small className="text-gray-500 mt-4 block">
            © {new Date().getFullYear()}. Made by {userDetails.firstname} {userDetails.lastname}
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
