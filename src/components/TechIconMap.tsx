import TechIcon from './TechIcon';
import { Tech } from '../data/Projects';
import '../styles/components/TechIconMap.css';

const TechIconMap = ({ techArr }: { techArr: Tech[] }): JSX.Element => {
    const techElements: JSX.Element[] = techArr.map((item) => (
        <TechIcon techName={item} />
    ));

    return <div className="techIcons">{techElements}</div>;
};

export default TechIconMap;
