import React from 'react';
import '../styles/components/StickyHeader.css';
import { SiLinkedin, SiGithub } from 'react-icons/si';

const StickyHeader = (): JSX.Element => {
    return (
        <div className="sticky-header">
            <a
                href="https://www.linkedin.com/in/narrwe-park/"
                target="_blank"
                rel="noreferrer"
            >
                <SiLinkedin className="linkedin-icon" size="1.4em" />
            </a>
            <a
                href="https://github.com/narrwep27"
                target="_blank"
                rel="noreferrer"
            >
                <SiGithub className="github-icon" size="1.4em" />
            </a>
        </div>
    );
};

export default StickyHeader;
