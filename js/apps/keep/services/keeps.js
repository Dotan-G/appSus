import { utilService } from "./util-service.js";
export const allKeeps = [{
        id: utilService.makeId(),
        type: "NoteTxt",
        isPinned: false,
        info: {
            txt: "Dotan - Beers to the soccer game"
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
            label: "Thoughts for After Coding Academy Course:",
            todos: [
                { txt: "Travel to Zanzibar", doneAt: null },
                { txt: "Sleep and make some sport", doneAt: 187111111 }
            ]
        }
    }
];