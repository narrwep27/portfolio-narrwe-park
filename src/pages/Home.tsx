import Header from '../components/Header';
import About from '../components/About';
import Project from '../components/Project';
import '../styles/pages/Home.css';

const Home = (): JSX.Element => {
    return (
        <div>
            <Header />
            <About />
            <Project />
            <footer>
                <h1>Footer</h1>
            </footer>
        </div>
    );
};

export default Home;
