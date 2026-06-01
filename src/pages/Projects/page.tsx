import Project from "../../components/projectPage/page";

function ProjectsPage() {
  return (
    <>
      <title>Projects Page</title>
      <div>
        <p>Welcome to my Projects Page</p>
      </div>

      <h2>Project 1</h2>
      <Project
        id={"1"}
        title="Sample Project"
        description="A short description of the sample project."
        technologies={["React", "TypeScript"]}
      />
    </>
  );
}

export default ProjectsPage;
