import React from 'react';
import '../styles/components/Header.css';
import headshot from '../images/headshot.jpg';
import StickyHeader from './StickyHeader';

const Header = (): JSX.Element => {
    return (
        <div className="header">
            <StickyHeader />
            <div className="header-text-container">
                <h1>Narrwe Park</h1>
                <p>Full Stack Developer | Software Engineer | Educator</p>
            </div>
            <div className="headshot-div">
                <div className="headshot-img-container">
                    <img
                        className="headshot-img"
                        src={headshot}
                        alt="headshot"
                    />
                </div>
                <div className="headshot-div-top"></div>
                <div className="headshot-div-bottom"></div>
            </div>
        </div>
    );
};

export default Header;
