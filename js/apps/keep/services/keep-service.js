import { storageService } from "../../../services/async-storage-service.js";
import { allKeeps } from "../services/keeps.js"
const KEEPS_KEY = 'keeps';

// const gKeeps = _fillDefaultKeeps();

export const keepService = {
    query,
    save
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

function save(keep) {
    return storageService.post(KEEPS_KEY, keep);
}