function ProjectCard({ title, description, tech, liveDemo, githubUrl }) {
    return (
        <div className="project-card">
            <h2>{title}</h2>
            <p>{description}</p>
            <ul>
                {tech.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <a href={liveDemo}>Live Demo</a>
            <a href={githubUrl}>View Code</a>
        </div>
    );
}

export default ProjectCard;