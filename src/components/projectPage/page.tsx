import { Link } from "react-router-dom";

type ProjectProps = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
};

function Project({ id, title, description, technologies }: ProjectProps) {
  return (
    <div>
      <h2>{title}</h2>

      <p>{description}</p>

      <ul>
        {technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <Link to={`/projects/${id}`}>
        <button type="button">View the Project</button>
      </Link>
    </div>
  );
}

export default Project;
