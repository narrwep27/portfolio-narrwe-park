import React from 'react';
import '../styles/pages/Home.css';
import Header from '../components/Header';

const Home = (): JSX.Element => {
    return (
        <div>
            <Header />
            <div className="about">
                <h2>About Narrwe</h2>
            </div>
            <div className="project">
                <h2>Projects:</h2>
            </div>
            <footer></footer>
        </div>
    );
};

export default Home;
