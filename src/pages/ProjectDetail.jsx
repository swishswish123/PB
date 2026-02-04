import { useParams } from 'react-router-dom'
import { projects } from '../data/data'

export default function ProjectDetail() {
const { id } = useParams()
const project = projects.find(p => p.id === id)

if (!project) return <p>Project not found</p>

return (
<section>
<h1>{project.title}</h1>
<img src={project.image} />
<p>{project.description}</p>
</section>
)
}