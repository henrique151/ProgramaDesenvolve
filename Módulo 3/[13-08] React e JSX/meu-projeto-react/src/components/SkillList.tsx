import SkillItem from "./SkillItem";

interface SkillListProps {
    skills: string[];
}

export default function SkillList({ skills }: SkillListProps) {
    return (
        <section id="skills">
            <h2>Habilidades</h2>
            {   
                skills.length === 0 ? (
                    <p>Nenhuma Habilidade redistrada</p>
                ) : (
                    <ul>
                        {skills.map((skill, index) => (
                           <SkillItem skill={skill} key={index} />
                        ))}
                    </ul>
                )
            }
        </section>
    )
}