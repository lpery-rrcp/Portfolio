// Imports
import { FcAbout } from "react-icons/fc";
import { FaPython, FaNode, FaGithub } from "react-icons/fa";
import { SiWebrtc, SiVite } from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { DiPostgresql } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa6";
import { AiOutlineDocker } from "react-icons/ai";

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
        <p>
          <FaNode /> Node.js, <SiWebrtc /> REST API.
        </p>
      </div>

      <div>
        <h2>Data & Databases</h2>
        <p>
          <FaPython />
          Python, <TbFileTypeSql /> SQL, <GrMysql /> MySQL, <DiPostgresql />
          PostgreSQL, <TbFileTypeSql />
          MongoDB.
        </p>
      </div>

      <div>
        <h2>Tools</h2>
        <p>
          <FaGithub /> GitHub, <FaGitAlt /> Git, <AiOutlineDocker />
          Docker, <SiVite /> Vite
        </p>
      </div>
    </>
  );
}

export default HomePage;
