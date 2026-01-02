// import { useUser } from "../../../contexts/UserContext";
// import SectionHeader from "../components/SectionHeader";

// const inputStyle =
//   "w-full p-4 mt-2 bg-gray-100 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";

// const labelStyle = "block text-left text-lg font-medium text-gray-600";
// const Contact = () => {
//   const { userDetails } = useUser();
//   return (
//     <div className="relative flex flex-col items-center justify-center w-full py-20">
//       <div className="container flex flex-col gap-10 mx-auto w-full md:w-3/4 lg:w-1/2 text-center">
//         <SectionHeader
//           title="GET IN TOUCH!"
//           description="Feel free to contact me by submitting the form below. I will get back to you as soon as possible."
//         />
//         <div className="w-full mx-auto">
//           <form className="p-8 bg-white shadow-2xl rounded-2xl">
//             <div className="w-full mb-6">
//               <label className={`${labelStyle}`}>Name</label>
//               <input
//                 type="text"
//                 placeholder="Enter your Name"
//                 className={`${inputStyle}`}
//               />
//             </div>
//             <div className="w-full mb-6">
//               <label className={`${labelStyle}`}>Email</label>
//               <input
//                 type="email"
//                 placeholder="Enter your Email"
//                 className={`${inputStyle}`}
//               />
//             </div>
//             <div className="w-full mb-6">
//               <label className={`${labelStyle}`}>Message</label>
//               <textarea
//                 placeholder="Enter your Message"
//                 rows="5"
//                 className={`${inputStyle}`}
//               ></textarea>
//             </div>
//             <div className="flex w-full justify-end items-center">
//               <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

// src/components/Contact/Contact.jsx
// import { useRef } from "react";
// import { useUser } from "../../../../src/contexts/UserContext";
// import SectionHeader from "../components/SectionHeader";
// import emailjs from "emailjs-com";

// // Input and label styling classes
// const inputStyle =
//   "w-full p-4 mt-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
// const labelStyle = "block text-left text-lg font-medium text-gray-600";

// const Contact = () => {
//   const { userDetails } = useUser();
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_51fe4pp", // Replace with your EmailJS service ID
//         "template_olqjcj8", // Replace with your EmailJS template ID
//         form.current,
//         "Stephen Amankwah" // Replace with your EmailJS user ID
//       )
//       .then(
//         (result) => {
//           alert("Message sent successfully!");
//         },
//         (error) => {
//           alert("Failed to send message. Please try again.");
//         }
//       );

//     // Clear form fields after submission
//     e.target.reset();
//   };

//   return (
//     <div className="relative flex flex-col items-center justify-center w-full py-20">
//       <div className="container flex flex-col gap-10 mx-auto w-full md:w-3/4 lg:w-1/2 text-center">
//         <SectionHeader
//           title="GET IN TOUCH!"
//           description="Feel free to contact me by submitting the form below. I will get back to you as soon as possible."
//         />
//         <div className="w-full mx-auto">
//           <form
//             ref={form}
//             onSubmit={sendEmail}
//             className="p-8 bg-white shadow-2xl rounded-2xl"
//           >
//             <div className="w-full mb-6">
//               <label className={`${labelStyle}`}>Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter your Name"
//                 className={`${inputStyle}`}
//                 required
//               />
//             </div>
//             <div className="w-full mb-6">
//               <label className={`${labelStyle}`}>Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter your Email"
//                 className={`${inputStyle}`}
//                 required
//               />
//             </div>
//             <div className="w-full mb-6">
//               <label className={`${labelStyle}`}>Message</label>
//               <textarea
//                 name="message"
//                 placeholder="Enter your Message"
//                 rows="5"
//                 className={`${inputStyle}`}
//                 required
//               ></textarea>
//             </div>
//             <div className="flex w-full justify-end items-center">
//               <button
//                 type="submit"
//                 className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

// import { useRef } from "react";
// // import { useUser } from "../../../../src/contexts/UserContext";
// import SectionHeader from "../components/SectionHeader";
// import emailjs from "emailjs-com";

// // Input and label styling classes
// const inputStyle =
//   "w-full p-4 mt-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
// const labelStyle = "block text-left text-lg font-medium text-gray-600";

// const Contact = () => {
//   // const { userDetails } = useUser();
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_51fe4pp",
//         "template_olqjcj8",
//         form.current,
//         "KzL19vuaFdz2hBlPz" // Replace with your actual EmailJS user ID (not name)
//       )
//       .then(
//         () => {
//           alert("Message sent successfully!");
//         },
//         () => {
//           alert("Failed to send message. Please try again.");
//         }
//       );

//     // Clear form fields after submission
//     e.target.reset();
//   };

//   return (
//     <div className="relative flex flex-col items-center justify-center w-full py-20">
//       <div className="container flex flex-col gap-10 mx-auto w-full md:w-3/4 lg:w-1/2 text-center">
//         <SectionHeader
//           title="GET IN TOUCH!"
//           description="Feel free to contact me by submitting the form below. I will get back to you as soon as possible."
//         />
//         <div className="w-full mx-auto">
//           <form
//             ref={form}
//             onSubmit={sendEmail}
//             className="p-8 bg-white shadow-2xl rounded-2xl"
//           >
//             <div className="w-full mb-6">
//               <label className={labelStyle}>Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter your Name"
//                 className={inputStyle}
//                 required
//               />
//             </div>
//             <div className="w-full mb-6">
//               <label className={labelStyle}>Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter your Email"
//                 className={inputStyle}
//                 required
//               />
//             </div>
//             <div className="w-full mb-6">
//               <label className={labelStyle}>Message</label>
//               <textarea
//                 name="message"
//                 placeholder="Enter your Message"
//                 rows="5"
//                 className={inputStyle}
//                 required
//               ></textarea>
//             </div>
//             <div className="flex w-full justify-end items-center">
//               <button
//                 type="submit"
//                 className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import { useRef, useState } from "react";
import toast from "react-hot-toast";
import SectionHeader from "../components/SectionHeader";
import emailjs from "emailjs-com";

const inputStyle =
  "w-full p-4 mt-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all duration-200";
const labelStyle = "block text-left text-lg font-semibold text-gray-700";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if environment variables are loaded
    if (!serviceId || !templateId || !publicKey) {
      toast.error("Email configuration error. Please check environment variables.");
      setIsSubmitting(false);
      return;
    }

    // Show loading toast
    const loadingToast = toast.loading("Sending your message...");

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          toast.dismiss(loadingToast);
          toast.success("Message sent successfully! I'll get back to you soon.", {
            duration: 5000,
          });
          e.target.reset();
          setIsSubmitting(false);
        },
        (error) => {
          console.error("Email send failed:", error);
          toast.dismiss(loadingToast);
          toast.error(
            error.text || "Failed to send message. Please try again or contact me directly.",
            {
              duration: 6000,
            }
          );
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div
      id="contact"
      className="relative flex flex-col items-center justify-center w-full py-20"
    >
      <div className="container flex flex-col gap-10 mx-auto w-full md:w-3/4 lg:w-1/2 text-center">
        <SectionHeader
          title="CONTACT"
          description="Feel free to contact me by submitting the form below. I will get back to you as soon as possible."
        />
        <div className="w-full mx-auto">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="p-8 bg-white shadow-2xl rounded-2xl"
          >
            <div className="w-full mb-6">
              <label className={`${labelStyle}`}>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                className={`${inputStyle}`}
                required
              />
            </div>
            <div className="w-full mb-6">
              <label className={`${labelStyle}`}>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                className={`${inputStyle}`}
                required
              />
            </div>
            <div className="w-full mb-6">
              <label className={`${labelStyle}`}>Message</label>
              <textarea
                name="message"
                placeholder="Enter your Message"
                rows="5"
                className={`${inputStyle}`}
                required
              ></textarea>
            </div>
            <div className="flex w-full justify-end items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-violet-600 hover:bg-violet-700"
                }`}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
