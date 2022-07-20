import { imageUrls } from '../images';

export type Project = {
    name: string;
    description: string;
    imageUrl: string;
    technologies: string[];
    webUrl: string;
    githubUrl: string;
};

const {
    anchr,
    bookKeep,
    cached,
    django,
    express,
    minesweeper,
    mongodb,
    postgresql
} = imageUrls;

const data: Project[] = [
    {
        name: 'Cached',
        description: '',
        imageUrl: cached,
        technologies: [
            django,
            'python',
            postgresql,
            'vue',
            'css3',
            'es6',
            'node'
        ],
        webUrl: 'https://cached.netlify.app/',
        githubUrl: 'https://github.com/narrwep27/cached-project'
    },
    {
        name: 'anchr',
        description: '',
        imageUrl: anchr,
        technologies: [postgresql, express, 'react', 'css3', 'es6', 'node'],
        webUrl: 'http://anchr-app.herokuapp.com/',
        githubUrl: 'https://github.com/narrwep27/full_stack_PERN_anchr'
    },
    {
        name: 'Book Keep',
        description: '',
        imageUrl: bookKeep,
        technologies: [mongodb, express, 'react', 'css3', 'es6', 'node'],
        webUrl: 'https://mern-reading-tracker.herokuapp.com/',
        githubUrl:
            'https://github.com/narrwep27/full-stack-MERN-reading-tracker-project'
    },
    {
        name: 'Minesweeper',
        description: '',
        imageUrl: minesweeper,
        technologies: ['html5', 'css3', 'es6'],
        webUrl: 'http://npark-minesweeper.surge.sh/',
        githubUrl: 'https://github.com/narrwep27/minesweeper_game_project'
    }
];
