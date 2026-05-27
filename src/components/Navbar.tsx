import { Route } from "react-router-dom";
import HomePage from "../pages/Home/page";
import Projects from "../pages/Projects/page";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>My Website</h1>
      <ul>
        <li>
          <Route path="/" element={<HomePage />} />
        </li>
        <li>
          <Route path="/projects" element={<Projects />} />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
