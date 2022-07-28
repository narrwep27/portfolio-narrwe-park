import '../styles/components/ProjectDetails.css';
import { ProjectType } from '../data/Projects';
import { SiGithub } from 'react-icons/si';
import TechIcons from './TechIcons';

const ProjectDetails = ({ project }: { project: ProjectType }): JSX.Element => {
    return (
        <div className="projectDetails">
            <div className="projectDetails-text">
                <h1>{project.name}</h1>
                <p>{project.description}</p>
            </div>
            <div className="projectDetails-tech">
                <TechIcons techArr={project.technologies} />
            </div>
            <div className="projectDetails-links">
                <a
                    className="projectDetails-links-projectSite"
                    href={project.webUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    <p>Project Site</p>
                </a>
                <a
                    className="projectDetails-links-githubSite"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    <SiGithub
                        className="projectDetails-links-githubSite-icon"
                        size="1.1em"
                    />
                    <p>Github Repo</p>
                </a>
            </div>
            <img
                className="projectDetails-img"
                src={project.imageUrl}
                alt={project.name}
            />
        </div>
    );
};

export default ProjectDetails;
