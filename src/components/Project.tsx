import { useMediaQuery } from 'react-responsive';
import ProjectViewDestkop from './ProjectViewDesktop';
import ProjectViewMobile from './ProjectViewMobile';
import '../styles/components/Project.css';

const Project = (): JSX.Element => {
    const isSmallScreen = useMediaQuery({ maxWidth: 1100 });

    return (
        <div className="project section">
            <h2>Projects</h2>
            {isSmallScreen ? <ProjectViewMobile /> : <ProjectViewDestkop />}
        </div>
    );
};

export default Project;
