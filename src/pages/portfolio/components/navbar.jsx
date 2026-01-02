import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../../contexts/UserContext";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaLinkedinIn, FaTwitter, FaGithub, FaDiscord } from "react-icons/fa6";
import { ChevronRight } from "lucide-react";

// Desktop navigation links (only 4 main links)
const desktopNavLinks = [
  { name: "Home", to: "hero" },
  { name: "About", to: "profile" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

// Mobile navigation links (all links)
const mobileNavLinks = [
  { name: "Profile", to: "profile" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Education", to: "education" },
  { name: "Experience", to: "experience" },
  { name: "Achievements", to: "achievements" },
  { name: "Volunteer", to: "volunteers" },
  { name: "Contact", to: "contact" },
];

const Navbar = () => {
  const { userDetails } = useUser();
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const navbarRef = useRef(null);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }

    // Add scroll listener for navbar shadow effect
    const handleScrollEffect = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScrollEffect);
    return () => window.removeEventListener("scroll", handleScrollEffect);
  }, []);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -navbarHeight;
      const yPosition =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: yPosition, behavior: "smooth" });
      setDrawerOpen(false);
      setActiveSection(id); // Set active section on click
    }
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="relative">
      <div style={{ height: navbarHeight }} />

      <nav
        ref={navbarRef}
        className={`fixed top-0 z-50 w-full bg-white transition-all duration-300 ${
          scrolled ? "shadow-lg" : "shadow-md"
        }`}
      >
        <div className="mx-auto flex justify-between items-center px-4 md:px-6 py-3 md:py-4">
          {/* Logo and Name */}
          <div className="flex items-center gap-3 md:gap-4">
            <div
              onClick={openModal}
              className="relative cursor-pointer rounded-full bg-gradient-to-br from-violet-600 to-violet-700 p-0.5
                h-12 w-12 md:h-14 md:w-14 hover:scale-105 transition-transform duration-300 shadow-md"
            >
              <img
                src={userDetails.userProfile.profilePicture}
                alt={`${userDetails.firstname} ${userDetails.lastname}`}
                className="w-full h-full rounded-full object-cover border-2 border-white"
              />
            </div>
            <button
              onClick={() => handleScroll("hero")}
              className="font-bold text-lg md:text-xl text-gray-800 hover:text-violet-600 transition-colors duration-300"
            >
              {userDetails.firstname} {userDetails.lastname}
            </button>
          </div>

          {/* Nav Links - Desktop */}
          <div className="hidden lg:flex gap-8 items-center">
            {desktopNavLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => handleScroll(link.to)}
                className={`relative px-6 py-3 text-base font-bold transition-all duration-300 ${
                  activeSection === link.to
                    ? "text-violet-600"
                    : "text-gray-800 hover:text-violet-600"
                }`}
                aria-label={`Navigate to ${link.name}`}
              >
                {link.name.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Menu Icon - Mobile */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            onClick={toggleDrawer}
            aria-label="Toggle menu"
          >
            <FaBars className="text-2xl text-gray-700" />
          </button>
        </div>
      </nav>

      {/* Backdrop Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300"
          onClick={toggleDrawer}
        />
      )}

      {/* Side Drawer - Enhanced */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        } w-80 lg:hidden`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-gradient-to-r from-violet-50 to-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-violet-700 p-0.5">
              <img
                src={userDetails.userProfile.profilePicture}
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-2 border-white"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">Menu</h3>
              <p className="text-xs text-gray-500">Navigation</p>
            </div>
          </div>
          <button
            onClick={toggleDrawer}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
            aria-label="Close menu"
          >
            <FaTimes className="text-xl text-gray-600" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col p-4 space-y-2 overflow-y-auto max-h-[calc(100vh-250px)]">
          {mobileNavLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => handleScroll(link.to)}
              className="group flex items-center justify-between px-4 py-3 rounded-lg
                text-gray-700 hover:bg-violet-50 hover:text-violet-600
                transition-all duration-300 text-left"
              aria-label={`Navigate to ${link.name}`}
            >
              <span className="font-semibold">{link.name.toUpperCase()}</span>
              <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
            </button>
          ))}
        </div>

        {/* Social Icons Section */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-50 to-transparent border-t border-gray-200">
          <p className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">
            Connect With Me
          </p>
          <div className="flex justify-center gap-4">
            <a
              href={userDetails.userProfile.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
              className="p-3 rounded-full bg-white border border-gray-200 hover:border-violet-600 hover:bg-violet-50
                text-gray-700 hover:text-violet-600 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={userDetails.userProfile.linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full bg-white border border-gray-200 hover:border-violet-600 hover:bg-violet-50
                text-gray-700 hover:text-violet-600 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href={userDetails.userProfile.twitterLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="p-3 rounded-full bg-white border border-gray-200 hover:border-violet-600 hover:bg-violet-50
                text-gray-700 hover:text-violet-600 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href={userDetails.userProfile.discordLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="p-3 rounded-full bg-white border border-gray-200 hover:border-violet-600 hover:bg-violet-50
                text-gray-700 hover:text-violet-600 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <FaDiscord size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Profile Image Modal - Enhanced */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-md p-4 md:p-6"
          onClick={closeModal}
        >
          <div
            className="relative bg-white p-12 md:p-16 lg:p-20 rounded-3xl shadow-2xl max-w-4xl w-full transform transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 p-4 rounded-full hover:bg-gray-100
                text-gray-500 hover:text-gray-700 transition-colors duration-300"
              aria-label="Close modal"
            >
              <FaTimes className="text-3xl" />
            </button>

            <div className="flex flex-col items-center gap-10 md:gap-12">
              <div className="relative">
                <div className="w-64 h-64 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-3xl overflow-hidden shadow-2xl ring-8 ring-violet-200">
                  <img
                    src={userDetails.userProfile.profilePicture}
                    alt={`${userDetails.firstname} ${userDetails.lastname}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-violet-600 to-violet-700
                  rounded-full flex items-center justify-center shadow-xl"
                >
                  <span className="text-white text-4xl">👋</span>
                </div>
              </div>

              <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                  {userDetails.firstname} {userDetails.lastname}
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                  {userDetails.userProfile.bio ||
                    "Software Developer & Agrometeorologist"}
                </p>
              </div>

              <div className="flex gap-5 pt-6">
                <a
                  href={userDetails.userProfile.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-xl bg-gray-100 hover:bg-violet-600 hover:text-white
                    transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                >
                  <FaGithub size={28} />
                </a>
                <a
                  href={userDetails.userProfile.linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-xl bg-gray-100 hover:bg-violet-600 hover:text-white
                    transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                >
                  <FaLinkedinIn size={28} />
                </a>
                <a
                  href={userDetails.userProfile.twitterLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-xl bg-gray-100 hover:bg-violet-600 hover:text-white
                    transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                >
                  <FaTwitter size={28} />
                </a>
                <a
                  href={userDetails.userProfile.discordLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-xl bg-gray-100 hover:bg-violet-600 hover:text-white
                    transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                >
                  <FaDiscord size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
