import { Link } from 'react-router-dom'
import { imgPath } from "../utils/imagePath";

export default function ProjectCard({ project }) {
return (
<Link to={`/projects/${project.id}`} className="project-card">
<img src={imgPath(project.image)} />
<h3>{project.title}</h3>
<p>{project.short}</p>
</Link>
)
}