import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "../pages/portfolio/components/navbar";
import Footer from "../pages/portfolio/components/footer";
import Chatbot from "../components/Chatbot";

const PortfolioLayout = () => {
  return (
    <div className="relative">
      <Navbar />
      <Outlet />
      <Footer />
      <Chatbot />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            background: "#fff",
            color: "#333",
            padding: "16px",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          },
          success: {
            iconTheme: {
              primary: "#7843E9",
              secondary: "#fff",
            },
            style: {
              border: "2px solid #7843E9",
            },
          },
          error: {
            iconTheme: {
              primary: "#EF4444",
              secondary: "#fff",
            },
            style: {
              border: "2px solid #EF4444",
            },
          },
          loading: {
            iconTheme: {
              primary: "#7843E9",
              secondary: "#fff",
            },
          },
        }}
      />
    </div>
  );
};

export default PortfolioLayout;
