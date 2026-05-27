import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>My Website</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
