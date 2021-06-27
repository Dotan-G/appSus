import { utilService } from "./util-service.js";
export const allKeeps = [{
        id: utilService.makeId(),
        type: "NoteTxt",
        isPinned: false,
        info: {
            txt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        style: {
            backgroundColor: '#00d'
        }
    },
    {

        id: utilService.makeId(),
        type: "NoteTxt",
        isPinned: false,
        info: {
            txt: "Dotan - Beers to the soccer game"
        },
        style: {
            backgroundColor: '#00d'
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteImg",
        isPinned: false,
        info: {
            url: "http://phpography.com/images/cool-wallpapers-hd-wallpaper-22.jpg",
            title: "Cool.."
        },
        style: {
            backgroundColor: "#00d"
        }
    },


    {
        id: utilService.makeId(),
        type: "NoteImg",
        isPinned: false,
        info: {
            url: "https://pbs.twimg.com/media/DtfLYF3XcAERkRB?format=jpg&name=small",
            title: "Dev's Meme.."
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteTodos",
        isPinned: false,
        info: {
            label: "Things to do this week",
            todos: [
                { txt: "Visit the hairdrasser", doneAt: null },
                { txt: "Go to the beach", doneAt: null }
            ]
        },
        style: {
            backgroundColor: 'none'
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteTodos",
        isPinned: false,
        info: {
            label: "Thoughts for After Coding Academy Course:",
            todos: [
                { txt: "Travel to Zanzibar", doneAt: null },
                { txt: "Sleep and make some sport", doneAt: 187111111 }
            ]
        },
        style: {
            backgroundColor: 'none'
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteTxt",
        isPinned: false,
        info: {
            txt: "With over 140k stars on GitHub, Vue.js is currently the trendiest JavaScript front-end framework, beating Angular and React in GitHub star count by a fair margin. Vue might have started as a small project driven by developer needs of its creator, Evan You, but it has matured considerably over the years—becoming a full-fledged framework with a grownup ecosystem and developer tooling. Check out our detailed Infographic that will let you know about Top Reasons Why VueJS Development Is Getting Popular Nowadays."
        },
        style: {
            backgroundColor: '#00d'
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteImg",
        isPinned: false,
        info: {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
            title: "Vue.Js"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteImg",
        isPinned: false,
        info: {
            url: "https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            title: "My secret place..."
        },
        style: {
            backgroundColor: "#00d"
        }
    },

];