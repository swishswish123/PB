import { Link } from "react-router-dom"
import { imgPath } from "../utils/imagePath";


export default function ExperienceCard({ exp }) {
  return (
    <div className="experience-card">
      <img src={imgPath(exp.image)} alt={exp.company} />

      <div className="experience-content">
        <Link to={`/work-experience/${exp.id}`} className="project-card">

            <div className="experience-header">
                <h3>{exp.role}</h3>
                <span>{exp.year}</span>
            </div>

            <h4>{exp.company}</h4>
            <p>{exp.description}</p>
        </Link>
      </div>
    </div>
  )
}
