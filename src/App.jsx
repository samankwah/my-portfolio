import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import PortfolioLayout from "./layouts/portfolioLayout";
import Portfolio from "./pages/portfolio";
import ProjectCaseStudy from "./pages/portfolio/project/ProjectCaseStudy";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PortfolioLayout />}>
            <Route index element={<Portfolio />} />
            <Route path="project/:projectSlug" element={<ProjectCaseStudy />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
