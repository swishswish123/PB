import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
return (
<section>
<h2>Projects</h2>
<div className="grid">
{projects.map(p => (
<ProjectCard key={p.id} project={p} />
))}
</div>
</section>
)
}