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
        <section id="skills" className="container py-5">
            <h2 className="text-center mb-5">Skills</h2>
            <div className="row g-4">
                {skills.map((skill) => (
                    <div key={skill.name} className="col-6 col-md-3 text-center">
                        <skill.icon size={48} />
                        <p className="mt-2">{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;