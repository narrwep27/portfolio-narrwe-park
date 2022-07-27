import { useState } from 'react';
import '../styles/components/Project.css';
import { data, ProjectType } from '../data/Projects';
import ProjectDetails from './ProjectDetails';

const projects = data;

const Project = (): JSX.Element => {
    const [project, setProject] = useState<ProjectType>(projects[0]);

    return (
        <div className="project section">
            <h2>Projects</h2>
            <div className="project-view">
                <div className="project-view-selector">
                    <ul>
                        {projects.map((item) => (
                            <div
                                className={
                                    project.slug === item.slug
                                        ? 'project-view-selector-item-focus'
                                        : 'project-view-selector-item'
                                }
                                onClick={() => setProject(item)}
                            >
                                <li>{item.name}</li>
                            </div>
                        ))}
                    </ul>
                    <div className="project-view-selector-filler"></div>
                </div>
                <div className="project-view-detail">
                    <ProjectDetails project={project} />
                </div>
            </div>
        </div>
    );
};

export default Project;
