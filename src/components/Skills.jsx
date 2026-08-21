 import { SiHtml5, SiCss, SiJavascript, SiReact, SiBootstrap, SiNodedotjs, SiPostgresql } from 'react-icons/si';
function Skills() {
    const skills = [
        { name: "HTML", category: "frontend", icon: SiHtml5 },
        { name: "CSS", category: "frontend", icon: SiCss },
        { name: "Javascript", category: "frontend", icon: SiJavascript },
        { name: "React", category: "frontend", icon: SiReact },
        { name: "Bootstrap", category: "frontend", icon: SiBootstrap },
        { name: "Node.js", category: "backend", icon: SiNodedotjs },
        { name: "PostgreSQL", category: "backend", icon: SiPostgresql },
    ];

    return (
        <ul>
            {skills.map((skill) => (
                <li key={skill.name}>
                    <skill.icon />
                    <p>{skill.name}</p>
                </li>
            ))}
        </ul>
    );
}

export default Skills;