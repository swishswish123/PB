import { skills } from "../data/skills"

function SkillLevel({ level }) {
  return (
    <div className="item-dots">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={i <= level ? "dot active" : "dot"}
        />
      ))}
    </div>
  )
}

export default function Skills() {
  return (
    <section>
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((category) => (
          <div key={category.category} className="skill-category">
            <h3>{category.category}</h3>

            {category.groups.map((group) => (
              <div key={group.title} className="skill-group">
                <h4>{group.title}</h4>

                <ul className="skill-list">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <span>{item.name}</span>
                      <SkillLevel level={item.level} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
