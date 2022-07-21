import React from 'react';
import '../styles/components/Header.css';
import { imageUrls } from '../images';

const Header = (): JSX.Element => {
    return (
        <div className="header">
            <div className="header-text-container">
                <h1>Narrwe Park</h1>
                <p>Software Engineer | Full Stack Developer | Educator</p>
            </div>
            <div className="header-headshot-div">
                <div className="header-headshot-div-bottom"></div>
                <div className="header-headshot-img-container">
                    <img
                        className="header-headshot-img"
                        src={imageUrls.headshot}
                        alt="headshot"
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
