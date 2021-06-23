import { utilService } from "./util-service.js";
export const allKeeps = [{
        id: utilService.makeId(),
        type: "NoteTxt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteImg",
        info: {
            url: "http://coding-academy.org/books-photos/20.jpg",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        id: utilService.makeId(),
        type: "NoteTodos",
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    }
];