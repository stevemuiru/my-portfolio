import { Card, Badge, Button } from 'react-bootstrap';

function ProjectCard({ title, description, tech, liveDemo, githubUrl }) {
    return (
        <Card bg="dark" text="light" className="h-100 border-secondary">
            <Card.Body className="d-flex flex-column">
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <div className="mb-3">
                    {tech.map((item) => (
                        <Badge key={item} bg="secondary" className="me-1 mb-1">
                            {item}
                        </Badge>
                    ))}
                </div>
                <div className="mt-auto d-flex gap-2">
                    <Button href={liveDemo} target="_blank" variant="primary" size="sm">
                        Live Demo
                    </Button>
                    <Button href={githubUrl} target="_blank" variant="outline-light" size="sm">
                        View Code
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;