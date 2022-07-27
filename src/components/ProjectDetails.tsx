import '../styles/components/ProjectDetails.css';
import { ProjectType } from '../data/Projects';

const ProjectDetails = ({ project }: { project: ProjectType }): JSX.Element => {
    return (
        <div className="projectDetails">
            <h1>{project.name}</h1>
            <p>{project.description}</p>
        </div>
    );
};

export default ProjectDetails;
