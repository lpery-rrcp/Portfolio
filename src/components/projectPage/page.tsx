import { Link } from "react-router-dom";

// Add props here
type ProjectProps = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
};

function Project({ id, title, description, technologies }: ProjectProps) {
  return (
    <>
      <title>{title}</title>
      <div>
        <p>{description}</p>
        <ul>
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
          <Link to={`/projects/${id}`}>
        <button>View the Project</button>
      </Link>
    </>
  );
}

export default Project;
