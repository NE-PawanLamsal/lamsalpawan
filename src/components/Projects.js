import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Projects.css"; // Import the CSS file for styling

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        // Fetch projects from the backend
        axios.get("http://localhost:5000/api/projects")
            .then((response) => setProjects(response.data))
            .catch((error) => console.error("Error fetching projects:", error));
    }, []);

    const handleCardClick = (project) => {
        // Toggle the visibility of the project details when clicked
        if (selectedProject?.id === project.id) {
            setSelectedProject(null); // Close if the same card is clicked again
        } else {
            setSelectedProject(project);
        }
    };

    return (
        <div className="projects-container">
            <h1>My Projects</h1>
            <div className="projects-list">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="project-card"
                        onClick={() => handleCardClick(project)}
                    >
                        <div className="project-card-header">
                            {project.image_url && (
                                <img
                                    src={project.image_url}
                                    alt={project.title}
                                    className="project-image"
                                />
                            )}
                            <h3>{project.title}</h3>
                            <p>{new Date(project.date).toLocaleDateString()}</p>
                        </div>
                        {selectedProject?.id === project.id && (
                            <div className="project-details">
                                <p>{project.description}</p>
                                {project.github_link && (
                                    <a
                                        href={project.github_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="github-link"
                                    >
                                        View on GitHub
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
