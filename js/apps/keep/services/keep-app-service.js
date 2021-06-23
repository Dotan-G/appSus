import { storageService } from "../../../services/async-storage-service.js";

const KEEPS_KEY = 'keeps';

const gKeeps = _fillDefaultKeeps();

function query() {
    return storageService.query(KEEPS_KEY)
        .then(keeps => {
            if (!keeps.length) {
                // TODO: CONTINUE
            }
        })
}

function _fillDefaultKeeps() {
    return notes = [{
            type: "NoteTxt",
            isPinned: true,
            info: {
                txt: "Fullstack Me Baby!"
            }
        },
        {
            type: "NoteImg",
            info: {
                url: "http://some-img/me",
                title: "Me playing Mi"
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
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
}