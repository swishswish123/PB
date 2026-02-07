import { experience } from "../data/experience"
import ExperienceCard from "./ExperienceCard"

export default function Experience() {
  return (
    <section>
      <h2>Professional Experience</h2>

      <div className="experience-list">
        {experience.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </div>
    </section>
  )
}
