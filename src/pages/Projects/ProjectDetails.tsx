import { useParams, Link } from "react-router-dom";

function ProjectDetails() {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <title>Project Details</title>
      <div>
        <h1>Project {id}</h1>
        <p>Replace this with detailed information about project {id}.</p>
        <Link to="/projects">
          <button>Back to Projects</button>
        </Link>
      </div>
    </>
  );
}

export default ProjectDetails;
