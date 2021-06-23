import { storageService } from "../../../services/async-storage-service.js";
import { allKeeps } from "../services/keeps.js"
const KEEPS_KEY = 'keeps';

// const gKeeps = _fillDefaultKeeps();

export const keepService = {
    query
    // getBookById,
    // addReview,
    // removeReview,
    // getGoogleBooks
};

function query() {
    return storageService.query(KEEPS_KEY)
        .then(keeps => {
            if (!keeps.length) {
                // const defKeeps = _fillDefaultKeeps();
                const defKeeps = allKeeps;
                storageService.postMany(KEEPS_KEY, defKeeps);
                return defKeeps;
            }
            return keeps;
        })
}

// function _fillDefaultKeeps() {
//     return [{
//             type: "NoteTxt",
//             isPinned: true,
//             info: {
//                 txt: "Fullstack Me Baby!"
//             }
//         },
//         {
//             type: "NoteImg",
//             info: {
//                 url: "http://some-img/me",
//                 title: "Me playing Mi"
//             },
//             style: {
//                 backgroundColor: "#00d"
//             }
//         },
//         {
//             type: "NoteTodos",
//             info: {
//                 label: "How was it:",
//                 todos: [
//                     { txt: "Do that", doneAt: null },
//                     { txt: "Do this", doneAt: 187111111 }
//                 ]
//             }
//         }
//     ];
// }