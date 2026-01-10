// import React, { useState, useEffect } from "react";
// import { ChevronUp } from "lucide-react";

// const ScrollToTopButton = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   // Show button when page is scrolled down
//   const toggleVisibility = () => {
//     if (window.pageYOffset > 300) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   };

//   // Scroll to top function
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   // Add scroll event listener
//   useEffect(() => {
//     window.addEventListener("scroll", toggleVisibility);
//     return () => {
//       window.removeEventListener("scroll", toggleVisibility);
//     };
//   }, []);

//   return (
//     <>
//       {isVisible && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-6 right-6 z-50 bg-[#7843E9] text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition-all duration-300 ease-in-out"
//           aria-label="Scroll to top"
//         >
//           <ChevronUp size={24} />
//         </button>
//       )}
//     </>
//   );
// };

// export default ScrollToTopButton;

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-5 z-50 bg-violet-600 hover:bg-violet-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} strokeWidth={2.5} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
