// Imports
import { FcAbout } from "react-icons/fc";

function HomePage() {
  return (
    <>
      <FcAbout />
      <title>Home Page to Portfolio</title>

      <div></div>

      <div>
        <p>Welcome to my portfolio!</p>
      </div>

      <title>About Section</title>
      <div>
        <p>Learn more about me and my background.</p>
      </div>

      <title>Skills Section</title>
      <div>
        <h2>Frontend</h2>
        <p>React, TypeScripte, HTML5, CSS3, Tailwind CSS.</p>
      </div>

      <div>
        <h2>Backend</h2>
        <p>Node.js, Python, REST API.</p>
      </div>

      <div>
        <h2>Data & Databases</h2>
        <p>Python, SQL, MySQL, PostgreSQL, MongoDB.</p>
      </div>

      <div>
        <h2>Tools</h2>
        <p>Git, Docker, Vite, npm</p>
      </div>
    </>
  );
}

export default HomePage;
