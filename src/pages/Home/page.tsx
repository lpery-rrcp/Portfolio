// Imports of icons
import { FaPython, FaNode, FaGithub, FaReact } from "react-icons/fa";
import { SiWebrtc, SiVite } from "react-icons/si";
import { TbFileTypeSql, TbBrandTypescript } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { DiPostgresql } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa6";
import { AiOutlineDocker } from "react-icons/ai";
import { RiTailwindCssFill } from "react-icons/ri";
// other imports
import Bio from "../../components/bio/bio";

function HomePage() {
  return (
    <>
      <title>Home Page to Portfolio</title>
      <div>
        <Bio />
        <p>Welcome to my portfolio!</p>
      </div>
      <title>About Section</title>

      <div>
        <p>
          I am a recent graduate of Red River College Polytechnic. I am a
          software developer / data analyst with experience in building web
          applications using technologies such as React, Node.js, and
          Python.{" "}
        </p>

        <p>
          I have a strong foundation in both frontend and backend development,
          and I am passionate about creating efficient and user-friendly
          applications.
        </p>

        <p>
          In addition to my technical skills, I am a quick learner and a team
          player. I am always eager to take on new challenges and collaborate
          with others to create innovative solutions.
        </p>

        <p>
          Feel free to explore my projects and skills, and don't hesitate to
          reach out if you have any questions or opportunities for
          collaboration!
        </p>
      </div>
      <title>Skills Section</title>
      <div>
        <h2>Frontend</h2>
        <p>
          <FaReact /> React, <TbBrandTypescript /> TypeScript,{" "}
          <RiTailwindCssFill /> Tailwind CSS.
        </p>
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
