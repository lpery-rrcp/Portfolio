import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home/page";
import ProjectsPage from "./pages/Projects/page";
import LayoutPage from "./pages/layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
