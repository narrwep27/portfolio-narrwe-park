import { useState } from 'react';
import { Tech } from '../data/Projects';
import {
    SiJavascript,
    SiTypescript,
    SiHtml5,
    SiCss3,
    SiPython,
    SiDjango,
    SiMongodb,
    SiPostgresql,
    SiNodedotjs,
    SiReact,
    SiVuedotjs,
    SiExpress
} from 'react-icons/si';
import '../styles/components/TechIcon.css';

type Props = { techName: Tech };

const getIcon = (tech: Tech): JSX.Element => {
    switch (tech) {
        case Tech.JS:
            return <SiJavascript />;
        case Tech.TS:
            return <SiTypescript />;
        case Tech.HTML:
            return <SiHtml5 />;
        case Tech.CSS:
            return <SiCss3 />;
        case Tech.PYTHON:
            return <SiPython />;
        case Tech.DJANGO:
            return <SiDjango />;
        case Tech.MONGODB:
            return <SiMongodb />;
        case Tech.POSTGRESQL:
            return <SiPostgresql />;
        case Tech.NODE:
            return <SiNodedotjs />;
        case Tech.REACT:
            return <SiReact />;
        case Tech.VUE:
            return <SiVuedotjs />;
        case Tech.EXPRESS:
            return <SiExpress />;
    }
};

const TechIcon = ({ techName }: Props): JSX.Element => {
    const [hover, setHover] = useState(false);

    return (
        <div
            className="techIcon-container"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {getIcon(techName)}
            <div
                className={
                    hover ? 'techIcon-label-show' : 'techIcon-label-hide'
                }
            >
                <p>{techName}</p>
                <div className="techIcon-label-point"></div>
            </div>
        </div>
    );
};

export default TechIcon;
