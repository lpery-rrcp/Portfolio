import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home/page";
import ProjectsPage from "./pages/Projects/page";
import ProjectDetails from "./pages/Projects/ProjectDetails";
import LayoutPage from "./pages/layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:id" element={<ProjectDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
