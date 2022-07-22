import { imageUrls } from '../images';

export type ProjectType = {
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

export const data: ProjectType[] = [
    {
        name: 'Cached',
        description:
            `I appreciate anything that's applicable and useful, so a budgetting app seemed fitting. ` +
            `Cached is an app that allows users to record their expenses and keep track of their spending. ` +
            `I've primarily used React in my previous projects, but Vue was very fun to work with. ` +
            `I also had to teach myself Python to properly use Django in the back-end framework. `,
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
        description:
            `Anchr is an concentration app where users can set a timer to focus on a specified activity. ` +
            `The app also allows users to log their sessions to keep a record of the amount of time dedicated to certain tasks. ` +
            `I worked with a small team of developers for this one. ` +
            `Some significant lessons was the importance of a common vision amongst the team and standardizing the flow of work on Github.`,
        imageUrl: anchr,
        technologies: [postgresql, express, 'react', 'css3', 'es6', 'node'],
        webUrl: 'http://anchr-app.herokuapp.com/',
        githubUrl: 'https://github.com/narrwep27/full_stack_PERN_anchr'
    },
    {
        name: 'Book Keep',
        description:
            `Books have been friendly companions to me since I was young, which is why I was inspired to create a book tracking app. ` +
            `Users are able to catalog books they want to read, are reading, or have read. ` +
            `I used MongoDB and built a custom API so that users could retain their book information in a database. ` +
            `Along with the custom API, the app connects to a 3rd party API to search for books using an ISBN number. ` +
            `(Currently revamping this one.)`,
        imageUrl: bookKeep,
        technologies: [mongodb, express, 'react', 'css3', 'es6', 'node'],
        webUrl: 'https://mern-reading-tracker.herokuapp.com/',
        githubUrl:
            'https://github.com/narrwep27/full-stack-MERN-reading-tracker-project'
    },
    {
        name: 'Minesweeper',
        description:
            `The framework of this project is extremely simple. Just bare bones HTML, CSS, and JavaScript. ` +
            `Although the environment of this project is simple, I'm very proud of it since it was my first independent coding project and required considerable logic for it to function correctly. ` +
            `It's modeled after the classic minesweeper game that has its roots in the earliest operating systems of the 1960s. ` +
            `Looking over this project gives a smell of nostalgia since I grew up playing the game in the 90s and gave me my initial steps into logical thinking. `,
        imageUrl: minesweeper,
        technologies: ['html5', 'css3', 'es6'],
        webUrl: 'http://npark-minesweeper.surge.sh/',
        githubUrl: 'https://github.com/narrwep27/minesweeper_game_project'
    }
];
