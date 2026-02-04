import { skills } from '../data/data'

export default function Skills() {
return (
<section>
<h2>Skills</h2>
{skills.map(skill => (
<div key={skill.name} className="skill">
<span>{skill.name}</span>
<div className="bar">
<div style={{ width: `${skill.level}%` }} />
</div>
</div>
))}
</section>
)
}