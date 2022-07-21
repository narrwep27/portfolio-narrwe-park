import React from 'react';
import '../styles/pages/Home.css';
import '../styles/components/About.css';
import { imageUrls } from '../images';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { IoDocumentTextOutline } from 'react-icons/io5';

const About = (): JSX.Element => {
    return (
        <div className="section about">
            <div className="about-content">
                <div className="about-content-text">
                    <h2>Welcome</h2>
                    <div className="about-content-text-bio">
                        <p>
                            I am a software engineer based in the
                            DC-Maryland-Virginia area.
                        </p>
                        <p>
                            I previously worked as a middle school science
                            educator before transitioning into software
                            development. As a teacher, I cared deeply for the
                            quality of the content that I gave to my students.
                            My lesson plans and instructions were thoroughly
                            planned out from the way that class materials would
                            be distributed to the exact phrasing of the
                            questions on worksheets. I hold the same standard
                            for the clients that I work for and the code that I
                            write today.
                        </p>
                    </div>
                    <div className="about-content-text-links">
                        <a
                            href="https://www.linkedin.com/in/narrwe-park/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <SiLinkedin style={{ color: '#1466c2' }} /> LinkedIn
                        </a>
                        <a
                            href="https://github.com/narrwep27"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <SiGithub /> GitHub
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1cRYHWz0e-ZnJszxNDYlvFpx8fXUfyyJq/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <IoDocumentTextOutline /> Resumé
                        </a>
                    </div>
                </div>
                <div className="about-content-img-container">
                    <img
                        className="about-content-img"
                        src={imageUrls.hiking}
                        alt="hiking"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
