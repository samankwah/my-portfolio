// import { useEffect, useState } from "react";
// import { useUser } from "../../../contexts/UserContext";
// import Socials from "../components/socials";
// import ScrollToTopButton from "../components/ScrollToTopButton";

// const Hero = () => {
//   const { userDetails } = useUser();
//   const [displayText, setDisplayText] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [textIndex, setTextIndex] = useState(0);

//   const handleScroll = () => {
//     const element = document.getElementById("projects");
//     if (element) {
//       const yOffset = -80;
//       const yPosition =
//         element.getBoundingClientRect().top + window.pageYOffset + yOffset;

//       window.scrollTo({ top: yPosition, behavior: "smooth" });
//     }
//   };

//   const texts = [
//     `${userDetails.firstname} ${userDetails.lastname}`,
//     "a Software Developer",
//     "a Frontend Expert",
//     "Building at ByteShift",
//   ];

//   useEffect(() => {
//     const currentText = texts[textIndex];
//     const typingSpeed = isDeleting ? 50 : 100;

//     const timeout = setTimeout(() => {
//       if (!isDeleting) {
//         if (currentIndex < currentText.length) {
//           setDisplayText(currentText.substring(0, currentIndex + 1));
//           setCurrentIndex(currentIndex + 1);
//         } else {
//           setTimeout(() => setIsDeleting(true), 2000);
//         }
//       } else {
//         if (currentIndex > 0) {
//           setDisplayText(currentText.substring(0, currentIndex - 1));
//           setCurrentIndex(currentIndex - 1);
//         } else {
//           setIsDeleting(false);
//           setTextIndex((textIndex + 1) % texts.length);
//           setCurrentIndex(0);
//         }
//       }
//     }, typingSpeed);

//     return () => clearTimeout(timeout);
//   }, [
//     currentIndex,
//     isDeleting,
//     textIndex,
//     userDetails.firstname,
//     userDetails.lastname,
//   ]);

//   return (
//     <div
//       id="hero"
//       className="relative flex flex-col align-middle items-center justify-center w-full min-h-[60vh] md:min-h-[80vh] lg:h-screen portfolio-hero py-12 md:py-16 lg:py-0"
//     >
//       <div className="flex flex-col md:w-[95%] lg:w-[60%] gap-8 md:gap-10 lg:gap-14 items-center text-center px-4 md:px-6 lg:px-0">
//         <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl text-gray-950 leading-tight">
//           Hey, I&apos;m{" "}
//           <span className="font-extrabold text-violet-700 typing-text">
//             {displayText}
//             <span className="animate-blink">|</span>
//           </span>
//         </h1>
//         <p className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto font-medium text-gray-700 text-base md:text-lg lg:text-2xl leading-relaxed">
//           {userDetails.userProfile.about}
//         </p>
//         <button
//           onClick={handleScroll}
//           className="border w-3/4 md:w-1/3 lg:w-1/4 bg-[#7843E9] py-3 px-8 text-base md:text-lg lg:text-xl text-white font-bold shadow-md rounded-lg hover:bg-[#7848F4] hover:shadow-lg transition-all duration-300"
//         >
//           PROJECTS
//         </button>
//       </div>

//       {/* Social Icons on the side - hidden on mobile only */}
//       <div className="hidden md:block absolute top-[50%] left-0 transform -translate-x-">
//         <Socials userDetails={userDetails} />
//       </div>

//       {/* Mouse Scroll Indicator - hidden on mobile only */}
//       <div className="hidden md:flex absolute bottom-0 left-1/2 transform -translate-x-1/2 flex-col items-center">
//         <div className="mouse-scroll-cont flex flex-row items-center gap-1">
//           <div className="border-2 border-gray-600 rounded-full w-6 h-12 flex items-center justify-center">
//             {/* Inner circle with top-to-bottom bounce */}
//             <div className="bg-gray-600 rounded-full w-2 h-2 mb-1 animate-bounce-vertical"></div>
//           </div>
//           <p className="text-gray-600 text-sm"></p>
//         </div>
//         <ScrollToTopButton />
//       </div>
//     </div>
//   );
// };

// export default Hero;

import { useEffect, useState } from "react";
import { useUser } from "../../../contexts/UserContext";
import Socials from "../components/socials";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Hero = () => {
  const { userDetails } = useUser();
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const handleScroll = () => {
    const element = document.getElementById("projects");
    if (element) {
      const yOffset = -80;
      const yPosition =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  const texts = [
    `${userDetails.firstname} ${userDetails.lastname}`,
    "a Software Developer",
    "a Frontend Expert",
    "Building at ByteShift",
  ];

  useEffect(() => {
    const currentText = texts[textIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < currentText.length) {
          setDisplayText(currentText.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayText(currentText.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
          setCurrentIndex(0);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [
    currentIndex,
    isDeleting,
    textIndex,
    userDetails.firstname,
    userDetails.lastname,
  ]);

  return (
    <>
      <div
        id="hero"
        className="relative flex flex-col align-middle items-center justify-center w-full min-h-[60vh] md:min-h-[80vh] lg:h-screen portfolio-hero py-12 md:py-16 lg:py-0"
      >
        <div className="flex flex-col md:w-[95%] lg:w-[60%] gap-8 md:gap-10 lg:gap-14 items-center text-center px-4 md:px-6 lg:px-0">
          <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl text-gray-950 leading-tight">
            Hey, I&apos;m{" "}
            <span className="font-extrabold text-violet-700 typing-text">
              {displayText}
              <span className="animate-blink">|</span>
            </span>
          </h1>
          <p className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto font-medium text-gray-700 text-base md:text-lg lg:text-2xl leading-relaxed">
            {userDetails.userProfile.about}
          </p>
          <button
            onClick={handleScroll}
            className="border w-3/4 md:w-1/3 lg:w-1/4 bg-violet-600 py-3 px-8 text-base md:text-lg lg:text-xl text-white font-bold shadow-md rounded-lg hover:bg-violet-700 hover:shadow-lg transition-all duration-300"
          >
            PROJECTS
          </button>
        </div>

        {/* Social Icons on the side - hidden on mobile only */}
        <div className="hidden md:block absolute top-[50%] left-0 transform -translate-x-">
          <Socials userDetails={userDetails} />
        </div>

        {/* Mouse Scroll Indicator - hidden on mobile only */}
        <div className="hidden md:flex absolute bottom-0 left-1/2 transform -translate-x-1/2 flex-col items-center">
          <div className="mouse-scroll-cont flex flex-row items-center gap-1">
            <div className="border-2 border-gray-600 rounded-full w-6 h-12 flex items-center justify-center">
              {/* Inner circle with top-to-bottom bounce */}
              <div className="bg-gray-600 rounded-full w-2 h-2 mb-1 animate-bounce-vertical"></div>
            </div>
            <p className="text-gray-600 text-sm"></p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button - Now outside Hero component */}
      <ScrollToTopButton />
    </>
  );
};

export default Hero;
