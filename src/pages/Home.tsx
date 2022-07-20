import React from 'react';
import '../styles/pages/Home.css';
import Header from '../components/Header';
import About from '../components/About';

const Home = (): JSX.Element => {
    return (
        <div>
            <Header />
            <About />
            <div className="project">
                <h2>Projects:</h2>
            </div>
            <footer></footer>
        </div>
    );
};

export default Home;
