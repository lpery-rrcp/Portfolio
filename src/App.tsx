import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home/page";
import ProjectsPage from "./pages/Projects/page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  );
}

export default App;
