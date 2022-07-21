import React from 'react';
import '../styles/pages/Home.css';
import Header from '../components/Header';
import About from '../components/About';
import Project from '../components/Project';

const Home = (): JSX.Element => {
    return (
        <div>
            <Header />
            <About />
            <Project />
            <footer></footer>
        </div>
    );
};

export default Home;
