import Project from "../../components/projectPage/page";
import { projects } from "../../data/projectData.ts";

function ProjectsPage() {
  return (
    <>
      <h1>Projects Page</h1>

      <p>Welcome to my Projects Page</p>

      {projects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </>
  );
}

export default ProjectsPage;
