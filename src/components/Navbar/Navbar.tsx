import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />

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
