import ProjectCard from './ProjectCard.jsx'

function Projects() {
    const projects = [
        {
            title: "h45 studios",
            description: "A simple and modern website for my friends business of selling clothes",
            tech: ["React", "Vite", "Javascript(ES6)", "tailwind css", "Postegres sql, prisma", "nodejs", "express"],
            liveDemo: "https://h45-studios.vercel.app/",
            githubUrl: "https://github.com/stevemuiru/h45-studios"
        },
        {
            title: "Members Only",
            description: "A members-only messaging board. Users can sign up and log in, and members can create messages visible to the community.",
            tech: ["Node.js", "Express", "PostgreSQL", "Passport.js", "bcrypt", "EJS"],
            liveDemo: "https://members-only-hj2m.onrender.com/",
            githubUrl: "https://github.com/stevemuiru/members-only"
        },
        {
            title: "Inventory App",
            description: "A web-based inventory management system for tracking laptops, printers, and CCTV cameras",
            tech: ["Node.js", "Express", "PostgreSQL", "EJS"],
            liveDemo: "https://inventory-app-tz7b.onrender.com/",
            githubUrl: "https://github.com/stevemuiru/inventory-app"
        }
    ]

    return (
        <section id="projects" className="container py-5">
            <h2 className="text-center mb-5">Projects</h2>
            <div className="row g-4">
                {projects.map((project) => (
                    <div key={project.title} className="col-12 col-md-6 col-lg-4">
                        <ProjectCard {...project} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects