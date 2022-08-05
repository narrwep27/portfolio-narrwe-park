import { useState } from 'react';
import ProjectDetails from './ProjectDetails';
import { data, ProjectType } from '../data/Projects';
import '../styles/components/ProjectViewDesktop.css';

const projects = data;

const ProjectViewDestkop = (): JSX.Element => {
    const [project, setProject] = useState<ProjectType>(projects[0]);

    return (
        <div className="projectViewDesktop">
            <div className="projectViewDesktop-selector">
                <ul>
                    {projects.map((item) => (
                        <div
                            className={
                                project.slug === item.slug
                                    ? 'projectViewDesktop-selector-item-focus'
                                    : 'projectViewDesktop-selector-item'
                            }
                            onClick={() => setProject(item)}
                        >
                            <li>{item.name}</li>
                        </div>
                    ))}
                </ul>
                <div className="projectViewDesktop-selector-filler"></div>
            </div>
            <div className="projectViewDesktop-detail">
                <ProjectDetails project={project} />
            </div>
        </div>
    );
};

export default ProjectViewDestkop;
