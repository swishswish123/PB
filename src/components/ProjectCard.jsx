import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
return (
<Link to={`/projects/${project.id}`} className="project-card">
<img src={project.image} />
<h3>{project.title}</h3>
<p>{project.short}</p>
</Link>
)
}