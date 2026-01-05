import project1 from "../../assets/images/project 1.png";
import project2 from "../../assets/images/project 2.png";
import project3 from "../../assets/images/project 3.png";
import project4 from "../../assets/images/project 4.png";
import project5 from "../../assets/images/project 5.png";
import project6 from "../../assets/images/project 6.png";
import ceo from "../../assets/images/ceo.jpg";
import knust from "../../assets/images/knust.png";
import Kumasi from "../../assets/images/Kumasi_high_school_crest.jpg";
import faith from "../../assets/images/faith-high-school.webp";

export const future = {
  firstname: "Stephen",
  lastname: "Amankwah",
  username: "stephen amankwah",
  email: "0269642201a@gmail.com",
  password: "$2b$12$lEDxYwgJG31WyxGK3USgXehPywhZBSyD9PEf1WfBYxlZUUsvDztZa",
  education: [
    {
      schoolName: "Kwame Nkrumah University of Science & Technology",
      location: "Kumasi, Ghana",
      description:
        "A leading science and technology university in West Africa, known for its research and innovation.",
      program: "Bachelor of Science in Computer Science",
      image: knust,
      // grade: "Second Class Honors",
      startDate: "January 2024",
      endDate: "August 2026",
    },
    {
      schoolName: "Kumasi High School",
      location: "Kumasi, Ghana",
      description:
        "One of the top secondary schools in Ghana, offering a rigorous academic curriculum.",
      program: "General Science",
      image: Kumasi,
      grade: "WASSCE Certificate",
      startDate: "September 2008",
      endDate: "June 2013",
    },
    {
      schoolName: "Faith High School",
      location: "Kumasi, Ghana",
      description:
        "A well-regarded high school providing foundational education and leadership training.",
      program: "Junior Secondary School",
      image: faith,
      grade: "BECE Certificate",
      startDate: "September 2006",
      endDate: "June 2008",
    },
  ],
  skills: [
    { name: "React", levelOfProficiency: "Expert", id: "1" },
    { name: "TypeScript", levelOfProficiency: "Expert", id: "2" },
    { name: "JavaScript", levelOfProficiency: "Expert", id: "3" },
    { name: "Tailwind CSS", levelOfProficiency: "Expert", id: "4" },
    { name: "HTML5", levelOfProficiency: "Expert", id: "5" },
    { name: "CSS3", levelOfProficiency: "Expert", id: "6" },
    { name: "Firebase", levelOfProficiency: "Expert", id: "7" },
    { name: "Redux", levelOfProficiency: "Intermediate", id: "8" },
    { name: "Vite", levelOfProficiency: "Expert", id: "9" },
    { name: "PWA Development", levelOfProficiency: "Expert", id: "10" },
    { name: "Git", levelOfProficiency: "Expert", id: "11" },
    { name: "GitHub", levelOfProficiency: "Expert", id: "12" },
    { name: "REST API", levelOfProficiency: "Expert", id: "13" },
    { name: "Responsive Design", levelOfProficiency: "Expert", id: "14" },
    { name: "Netlify", levelOfProficiency: "Intermediate", id: "15" },
    { name: "Vercel", levelOfProficiency: "Intermediate", id: "16" },
    {
      name: "Payment Integration",
      levelOfProficiency: "Intermediate",
      id: "17",
    },
    { name: "EmailJS", levelOfProficiency: "Intermediate", id: "18" },
  ],
  achievements: [
    {
      award: "Dean's List",
      description:
        "Awarded for academic excellence by maintaining a GPA of 3.8 or higher for two consecutive semesters.",
      // image: "path/to/deans-list-certificate.png",
      date: "Augus 2017",
      nameOfInstitution: "Kumasi Technical University",
    },
    {
      award: "Best Final Year Project",
      description:
        "Will be recognized as the best final year project in the Computer Science department for developing an AI-powered solution.",
      // image: "path/to/project-award.png",
      date: "November 2026",
      nameOfInstitution: "Kwame Nkrumah University of Science & Technology",
    },
    {
      award: "GROW Hackathon Winner",
      description:
        "Won first place in the Ghana Remote & Online Work AI Hackathon by leading a team to build a web app for agro-meteorological advisory and plant health monitoring.",
      // image: "path/to/hackathon-award.png",
      date: "June 2025",
      nameOfInstitution: "MEST Africa",
    },
  ],

  projects: [
    {
      slug: "telekiosk",
      hasCaseStudy: true,
      projectName: "TeleKiosk",
      description:
        "A comprehensive hospital website and kiosk application featuring a cutting-edge voice-enabled AI chatbot, integrated email services, and modern healthcare management capabilities.",
      overviewParagraphs: [
        "TeleKiosk is an innovative healthcare platform that combines traditional hospital website functionality with advanced AI-powered voice interaction capabilities. Built with React 19, Express.js, and the Web Speech API, this application revolutionizes how patients interact with hospital services. The platform features a sophisticated AI chatbot system with voice recognition and text-to-speech capabilities, supporting 15+ intent categories for hospital-related queries including appointment booking, service information, and general healthcare inquiries.",
        "The platform manages 8+ comprehensive service categories including Cardiology, Radiology, Laboratory services, and more, with dynamic routing to detailed service pages. The communication system utilizes professional HTML email templates via Resend API, providing dual notifications for both patients and administrators. Integration with Google Meet enables seamless virtual consultations and appointments. The user experience is optimized for both traditional web browsing and kiosk-mode deployment, featuring touch-optimized interfaces, multi-language support structure, and full cross-browser compatibility.",
        "TeleKiosk represents the convergence of healthcare and cutting-edge technology, achieving approximately 95% completion with comprehensive documentation covering implementation phases, deployment guides, and testing frameworks. The project demonstrates expertise in modern React development, backend API integration, voice recognition technology, and healthcare-focused user experience design. With 19 commits and contributions from 2 developers, the platform showcases collaborative development practices and commitment to creating accessible healthcare technology. Deployed on Netlify, the application ensures reliable performance and accessibility for patients and healthcare providers.",
      ],
      tools: [
        "React 19",
        "Vite",
        "Express.js",
        "Tailwind CSS",
        "Web Speech API",
        "Resend API",
        "React Router DOM",
        "Google Meet API",
        "ESLint",
        "Netlify",
      ],
      contribution:
        "Architected the AI chatbot system, implemented voice recognition features, integrated email services, and optimized for kiosk deployment.",
      skills:
        "React, Express.js, Web Speech API, Voice Recognition, Email Integration, JavaScript",
      link: "https://telekiosk.netlify.app/",
      image: project2,
      nameOfInstitution: "Healthcare Innovation",
      startDate: "October 2025",
      endDate: "November 2025",
    },
    {
      slug: "flight-booking",
      hasCaseStudy: true,
      projectName: "Flight Booking Platform",
      description:
        "A contemporary flight reservation platform developed with React, TypeScript, and Tailwind CSS, featuring PWA capabilities, payment integration, and comprehensive booking management.",
      overviewParagraphs: [
        "The Flight Booking Platform is a modern, full-featured travel application that streamlines the flight reservation process through an intuitive and responsive interface. Built with React, TypeScript, and Vite, this Progressive Web App (PWA) offers offline functionality, push notifications, and a seamless booking experience across all devices. The platform integrates Firebase for authentication, Firestore for data management, and Paystack for secure payment processing, creating a comprehensive solution for travelers and booking agencies.",
        "The application features a sophisticated multi-tab search interface supporting flights, visas, hotels, and travel packages. Users benefit from location swapping functionality, advanced date pickers, destination showcases with grid layouts, and dynamic deal sections. The admin dashboard provides comprehensive management capabilities, while the PDF generation system creates professional boarding passes. Email notifications via Gmail SMTP keep users informed throughout their booking journey, and API caching mechanisms ensure optimal performance even with fluctuating network conditions.",
        "This flight booking platform demonstrates expertise in TypeScript development (77.6% of codebase), modern React patterns, and PWA implementation. With 38 commits documenting the development journey, the project showcases best practices in code organization, type safety, and user experience design. The modular architecture separates concerns effectively with dedicated components, data models, and type definitions. Deployed on Netlify, the application delivers fast load times and reliable performance, making travel booking accessible and efficient for users across Ghana and internationally.",
      ],
      tools: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Firebase",
        "Firestore",
        "Paystack",
        "Lucide React",
        "Gmail SMTP",
        "PWA",
        "Netlify",
      ],
      contribution:
        "Developed the complete TypeScript frontend, implemented PWA features, integrated Firebase and payment systems, and created the admin dashboard.",
      skills:
        "TypeScript, React, Firebase, Payment Integration, PWA Development, Tailwind CSS",
      link: "https://boookflight.netlify.app/",
      image: project3,
      nameOfInstitution: "Travel Technology Solutions",
      startDate: "November 2025",
      endDate: "December 2025",
    },
    {
      slug: "skilllink",
      hasCaseStudy: true,
      projectName: "SkillLink",
      description:
        "A comprehensive Learning Management System paired with professional networking capabilities, designed to educate, certify, employ, and empower professionals through skill-based learning.",
      overviewParagraphs: [
        "SkillLink is an innovative platform that combines Learning Management System (LMS) functionality with professional networking features, creating a unique ecosystem for skill development and career advancement. Built with React 19, Tailwind CSS 4, and shadcn/ui components, the platform provides interactive video-based learning, advanced quiz systems with a 70% pass threshold, and automatic certificate generation upon course completion. The course discovery system features sophisticated search and filtering capabilities, while the rating and review functionality helps learners make informed decisions about their educational journey.",
        "The networking component sets SkillLink apart from traditional LMS platforms, featuring skill-based user matching algorithms that connect professionals with complementary expertise. The real-time messaging system facilitates collaboration and knowledge sharing, while connection request management and network analytics provide insights into professional relationship building. The platform includes a robust referral system with unique codes, awarding 25 points per successful referral, and email invitation tracking that encourages community growth through social sharing integration.",
        "SkillLink demonstrates advanced frontend development using React Context API for state management and browser localStorage with intelligent caching for data persistence, eliminating backend dependency while maintaining full functionality. The platform is PWA-ready with a fully accessible UI that adheres to modern accessibility standards. With 36 commits and a MIT license, the project showcases expertise in modern React development, component library integration, and creating comprehensive educational technology solutions. Deployed on Netlify at skilllinkgh.netlify.app, the platform serves as a bridge between education and employment, empowering professionals to learn, connect, and grow.",
      ],
      tools: [
        "React 19",
        "Vite",
        "Tailwind CSS 4",
        "shadcn/ui",
        "React Router DOM 7",
        "Lucide React",
        "React Context API",
        "localStorage",
        "PWA",
        "ESLint",
        "Netlify",
      ],
      contribution:
        "Architected the complete LMS and networking system, implemented the quiz and certification features, developed the referral system, and created the responsive UI.",
      skills:
        "React, Tailwind CSS, Component Libraries, State Management, PWA Development, JavaScript",
      link: "https://skilllinkgh.netlify.app/",
      image: project4,
      nameOfInstitution: "Educational Technology Innovation",
      startDate: "September 2025",
      endDate: "October 2025",
    },
    {
      slug: "birthlink",
      hasCaseStudy: true,
      projectName: "BirthLink Ghana",
      description:
        "A Progressive Web App designed to streamline birth registration in remote Ghanaian communities, featuring offline-first functionality with automatic data synchronization.",
      overviewParagraphs: [
        "BirthLink Ghana is a groundbreaking Progressive Web App developed to address the challenge of birth registration in remote communities across Ghana. Built with React 18, TypeScript, and Redux Toolkit, the application operates on an offline-first principle, allowing registrars to continue their vital work even without internet connectivity. The system automatically syncs data upon reconnection, ensuring no registration is lost. Integrating Firebase Authentication, Firestore database, Cloud Functions, and Twilio SMS services, BirthLink creates a comprehensive solution for one of Ghana's most critical civic processes.",
        "The platform supports three distinct user roles: Administrators with full system access and configuration capabilities, Registrars who can create and edit registrations with basic reporting features, and Viewers who have read-only regional access with analytics capabilities. The multi-language support includes complete implementations in English and Twi, with infrastructure ready for Ga and Ewe. The birth registration forms feature robust validation, IndexedDB local storage for offline functionality, and Firebase Firestore real-time synchronization with intelligent conflict resolution. SMS notifications via Twilio keep stakeholders informed throughout the registration process.",
        "BirthLink Ghana demonstrates exceptional technical architecture with Phase 1 fully complete, including authentication systems, mobile-responsive design, multi-language support, and Redux state management with offline persistence. Phase 2 development focuses on enhancing the registration workflow and synchronization capabilities. The application meets rigorous performance standards with target load times under 3 seconds on 3G networks, bundle sizes under 500KB, Lighthouse PWA scores exceeding 90, and WCAG 2.1 AA accessibility compliance. Browser support includes Chrome 88+, Firefox 85+, Safari 14+, and Edge 88+. This government-backed project, licensed by Ghana's Ministry of Health, showcases expertise in TypeScript, PWA development, offline-first architecture, and creating technology solutions for social impact.",
      ],
      tools: [
        "React 18",
        "TypeScript",
        "Redux Toolkit",
        "Vite",
        "Firebase",
        "Firestore",
        "Cloud Functions",
        "Twilio SMS",
        "IndexedDB",
        "i18next",
        "Tailwind CSS",
        "Service Workers",
        "PWA",
        "Netlify",
      ],
      contribution:
        "Developed the offline-first architecture, implemented multi-language support, integrated Firebase and Twilio services, and created the role-based access system.",
      skills:
        "TypeScript, React, Redux, Firebase, PWA Development, Offline-First Architecture, SMS Integration, Internationalization",
      link: "https://birthlink.netlify.app/",
      image: project5,
      nameOfInstitution: "Government of Ghana - Ministry of Health",
      startDate: "August 2025",
      endDate: "September 2025",
    },
    {
      slug: "meteo-homepage",
      hasCaseStudy: true,
      projectName: "Meteo Homepage",
      description:
        "A meteorological and agricultural production platform built with React and Vite, providing comprehensive weather data visualization and forecasting capabilities.",
      overviewParagraphs: [
        "Meteo Homepage is a sophisticated meteorological platform designed to deliver accurate weather information and climate data through an intuitive web interface. Built with React and Vite, this application leverages modern web development practices to create a fast, responsive weather service. The platform integrates weather APIs to provide real-time meteorological data, forecasts, and climate information essential for planning and decision-making. With 120 commits demonstrating continuous development and refinement, the project showcases a commitment to delivering reliable weather services.",
        "The application features a clean, modern interface styled with Tailwind CSS, ensuring optimal viewing across all devices. The apiService.js module handles sophisticated API integrations for weather data retrieval, while the weather.json data structure enables efficient data management and caching. The platform is configured with PostCSS for advanced CSS processing and ESLint for maintaining code quality standards. The React + Vite combination provides Hot Module Replacement (HMR) and Fast Refresh capabilities, ensuring smooth development and user experiences.",
        "Meteo Homepage represents expertise in building data-driven applications that transform complex meteorological information into accessible, user-friendly formats. The project demonstrates proficiency in React development (98.8% of codebase), API integration, and creating responsive weather applications. The use of environment variables through .env configuration ensures secure API key management and deployment flexibility. This platform serves as a valuable tool for individuals, agricultural professionals, and organizations requiring reliable weather information, showcasing how modern web technologies can make climate data more accessible and actionable.",
      ],
      tools: [
        "React",
        "Vite",
        "JavaScript",
        "Tailwind CSS",
        "PostCSS",
        "Weather APIs",
        "ESLint",
        "Fast Refresh",
        "HMR",
      ],
      contribution:
        "Developed the complete weather platform, implemented API integration system, created responsive UI, and optimized for performance with caching mechanisms.",
      skills:
        "React, Vite, API Integration, Weather Data Visualization, Tailwind CSS, JavaScript",
      link: "https://github.com/samankwah/meteo-homepage-main",
      image: project6,
      nameOfInstitution: "Meteorological Services",
      startDate: "May 2025",
      endDate: "June 2025",
    },
    {
      slug: "organifert",
      hasCaseStudy: true,
      projectName: "Organifert",
      description:
        "A responsive web application showcasing organic liquid fertilizers and agricultural solutions by Evans Okyere Farms, emphasizing sustainable farming practices.",
      overviewParagraphs: [
        "Organifert is a comprehensive digital platform developed for Evans Okyere Farms to showcase their range of organic liquid fertilizers and sustainable agricultural solutions. Built with React 18, Vite, and Tailwind CSS, this platform serves as both an educational resource and a product showcase, helping farmers and agricultural professionals discover eco-friendly farming solutions. The application features detailed information about four main fertilizer types: banana-based, moringa, citrus-based, and animal manure-based organic fertilizers.",
        "The platform provides an intuitive user experience with individual product detail pages that include comprehensive nutrient information, crop-specific growing guides, and a farmer toolbox section filled with agricultural resources. Users can easily navigate through different product categories, access safety guidelines, and learn about sustainable farming practices. The mobile-responsive design ensures that farmers can access vital agricultural information from any device, whether they're in the field or planning their farming operations.",
        "Organifert demonstrates the powerful combination of web technology and agricultural innovation, making sustainable farming solutions accessible to a wider audience. With 37 commits and continuous improvements, the platform has evolved into a reliable resource for farmers seeking organic alternatives. The project showcases expertise in modern React development, component-based architecture, and creating user-focused agricultural technology solutions. The application is deployed on Vercel, ensuring fast load times and reliable performance for users across Ghana and beyond.",
      ],
      tools: [
        "React 18",
        "Vite",
        "Tailwind CSS",
        "React Router DOM",
        "Lucide React",
        "Styled Components",
        "ESLint",
        "Vercel",
      ],
      contribution:
        "Developed the complete frontend application, implemented product catalog system, created responsive design, and deployed to Vercel.",
      skills: "React, Vite, Tailwind CSS, React Router, JavaScript",
      link: "https://organifert.vercel.app",
      image: project1,
      nameOfInstitution: "Evans Okyere Farms",
      startDate: "September 2025",
      endDate: "November 2025",
    },
  ],

  volunteering: [
    {
      organisation: "ICRISAT",
      description: "I'm very good at it",
      skills: "S2S forecasting, Crop modeling, Seasonal Forecasting",
      startDate: "2024-07-05",
      endDate: "2024-08-11",
      role: "Crop Modeler",
      responsibility:
        "Running crop simulation models to predict yield outcomes based on climate and soil data, analyzing model outputs for accuracy, refining parameters to improve forecasts and collaborating with agronomists to provide actionable insights for farmers and policymakers.",
      location: "Accra",
      projectName: "Crop Yield Forecast",
      createdAt: "2024-07-28T23:13:59.963Z",
      updatedAt: "2024-07-28T23:13:59.963Z",
      id: "66a6d0b7d972de20873df27a",
    },
    {
      organisation: "FSRP",
      description: "I'm very good at it",
      skills:
        "Crop Calender and Advisory, Crop modeling, Seasonal Forecasting, Web Development",
      startDate: "2024-08-12",
      endDate: "2024-08-11",
      role: "Climate Data Analyst",
      responsibility:
        "Collect all meteorological data needed for the climate/weather cropping calendar and perform pilot analysis with past climate data (Agrometeorological Seasonal Outlook- 2020-2023) on the chosen crops and livestock the team will be working with.",
      location: "Accra",
      projectName: "Agro-Climatic Information Services",
      createdAt: "2024-07-28T23:13:59.963Z",
      updatedAt: "2024-07-28T23:13:59.963Z",
      id: "66a6d0b7d972de20873df27a",
    },
  ],
  experience: [
    {
      companyName: "Ghana Meteorological Agency",
      role: "Agrometeorologist",
      skills: "S2S forecasting, Crop modeling, Seasonal Forecasting",
      responsibility:
        "Ideated detailed and meaningful statistical analyses by using data on precipitation, humidity, wind and sunshine parameters to derive evapotranspiration and solar radiation dataset.",
      location: "Accra, Ghana",
      startDate: "2019-07-28",
      endDate: "2023-09-30",
      createdAt: "2024-07-23T15:04:33.561Z",
      updatedAt: "2024-07-23T15:04:33.561Z",
      id: "669fc681885925ada2d4d18f",
    },
    {
      companyName: "Ghana Meteorological Agency",
      role: "Agrometeorologist",
      skills: "S2S forecasting, Crop modeling, Seasonal Forecasting",
      responsibility:
        "Used advanced computer systems and software tools to analyze weather data, resulting in highly accurate weather forecasts and sophisticated models.",
      location: "Accra, Ghana",
      startDate: "2024-07-27",
      endDate: "2024-07-21",
      createdAt: "2024-07-23T15:04:06.471Z",
      updatedAt: "2024-07-23T15:04:06.471Z",
      id: "669fc666885925ada2d4d18a",
    },
  ],
  createdAt: "2024-07-17T20:17:32.762Z",
  updatedAt: "2024-08-08T22:44:59.183Z",
  userProfile: {
    profilePicture: ceo,
    location: "Addington Park",
    maritalStatus: "single",
    sex: "male",
    bio: "I’m currently one of Africa’s leading software developers.",
    about:
      "A results-driven Software Developer creating and managing websites and web applications that drive product success.",
    contact: "0240298910",
    resume: "secure/uploads/15218",
    githubLink: "https://github.com/samankwah",
    linkedinLink: "http://linkedin.com/in/stephenamankwah ",
    twitterLink: "https://x.com/1amankwa",
    discordLink: "https://discord.com/users/1265707238794854533",
    createdAt: "2024-07-22T23:36:18.298Z",
    updatedAt: "2024-07-22T23:36:18.298Z",
    id: "669eecf2940cc069e23c9254",
  },
  id: "669826dc40ae7cda2cd3cb6a",
};
