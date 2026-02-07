import { useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import { imgPath } from "../utils/imagePath";

export default function ProjectDetail() {
const { id } = useParams()
const project = projects.find(p => p.id === id)

if (!project) return <p>Project not found</p>

return (
<section className="project-detail">
<h1>{project.title}</h1>
<img src={imgPath(project.image)} />
<p>{project.description}</p>
</section>
)
}