import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Logo" className={styles.logo} />

      <h1 className={styles.title}>My Website</h1>
      <ul className={styles.navLinks}>
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
