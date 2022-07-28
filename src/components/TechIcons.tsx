import '../styles/components/TechIcons.css';
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

const TechIcons = ({ techArr }: { techArr: Tech[] }): JSX.Element => {
    const techElements: JSX.Element[] = techArr.map((item) => {
        switch (item) {
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
    });

    return <div className="techIcons">{techElements}</div>;
};

export default TechIcons;
