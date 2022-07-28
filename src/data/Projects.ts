import { imageUrls } from '../images';

export enum Tech {
    JS = 'JavaScript ES6',
    TS = 'TypeScript',
    HTML = 'HTML5',
    CSS = 'CSS3',
    PYTHON = 'Python',
    DJANGO = 'Django',
    MONGODB = 'MongoDB',
    POSTGRESQL = 'PostgreSQL',
    NODE = 'Node.js',
    REACT = 'React.js',
    VUE = 'Vue',
    EXPRESS = 'Express'
}

export type ProjectType = {
    name: string;
    slug: string;
    description: string;
    imageUrl: string;
    technologies: Tech[];
    webUrl: string;
    githubUrl: string;
};

const { anchr, bookKeep, cached, minesweeper } = imageUrls;

export const data: ProjectType[] = [
    {
        name: 'Cached',
        slug: 'cached',
        description:
            `I appreciate anything that's applicable and useful, so a budgetting app seemed fitting. ` +
            `Cached is an app that allows users to record their expenses and keep track of their spending. ` +
            `I've primarily used React in my previous projects, but Vue was very fun to work with. ` +
            `I also had to teach myself Python to properly use Django in the back-end framework. `,
        imageUrl: cached,
        technologies: [
            Tech.JS,
            Tech.CSS,
            Tech.PYTHON,
            Tech.VUE,
            Tech.DJANGO,
            Tech.NODE,
            Tech.POSTGRESQL
        ],
        webUrl: 'https://cached.netlify.app/',
        githubUrl: 'https://github.com/narrwep27/cached-project'
    },
    {
        name: 'anchr',
        slug: 'anchr',
        description:
            `Anchr is an concentration app where users can set a timer to focus on a specified activity. ` +
            `The app also allows users to log their sessions to keep a record of the amount of time dedicated to certain tasks. ` +
            `I worked with a small team of developers for this one. ` +
            `Some significant lessons was the importance of a common vision amongst the team and standardizing the flow of work on Github.`,
        imageUrl: anchr,
        technologies: [
            Tech.JS,
            Tech.CSS,
            Tech.REACT,
            Tech.NODE,
            Tech.POSTGRESQL,
            Tech.EXPRESS
        ],
        webUrl: 'http://anchr-app.herokuapp.com/',
        githubUrl: 'https://github.com/narrwep27/full_stack_PERN_anchr'
    },
    {
        name: 'Book Keep',
        slug: 'book-keep',
        description:
            `Books have been friendly companions to me since I was young, which is why I was inspired to create a book tracking app. ` +
            `Users are able to catalog books they want to read, are reading, or have read. ` +
            `I used MongoDB and built a custom API so that users could retain their book information in a database. ` +
            `Along with the custom API, the app connects to a 3rd party API to search for books using an ISBN number. ` +
            `(Currently revamping this one.)`,
        imageUrl: bookKeep,
        technologies: [
            Tech.JS,
            Tech.CSS,
            Tech.REACT,
            Tech.MONGODB,
            Tech.NODE,
            Tech.EXPRESS
        ],
        webUrl: 'https://mern-reading-tracker.herokuapp.com/',
        githubUrl:
            'https://github.com/narrwep27/full-stack-MERN-reading-tracker-project'
    },
    {
        name: 'Minesweeper',
        slug: 'minesweeper',
        description:
            `The framework of this project is extremely simple. Just bare-bones HTML, CSS, and JavaScript. ` +
            `Although the environment of this project is simple, I'm very proud of it since it was my first independent coding project and required considerable logic for it to function correctly. ` +
            `It's modeled after the classic minesweeper game that has its roots in the earliest operating systems of the 1960s. ` +
            `Looking over this project gives a smell of nostalgia since I grew up playing the game in the 90s and started my initial steps into logical thinking. `,
        imageUrl: minesweeper,
        technologies: [Tech.JS, Tech.CSS, Tech.HTML],
        webUrl: 'http://npark-minesweeper.surge.sh/',
        githubUrl: 'https://github.com/narrwep27/minesweeper_game_project'
    }
];
