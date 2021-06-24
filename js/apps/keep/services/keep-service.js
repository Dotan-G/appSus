import { utilService } from "./util-service.js";
import { storageService } from "../../../services/async-storage-service.js";
import { allKeeps } from "../services/keeps.js"
const KEEPS_KEY = 'keeps';


export const keepService = {
    query,
    save,
    removeKeep,
    getKeepById

};

// function getKeepById(keepId) {
//     return storageService.get(keepId)
// }

function getKeepById(keepId) {
    return storageService.get(KEEPS_KEY, keepId)
}


function query() {
    return storageService.query(KEEPS_KEY)
        .then(keeps => {
            if (!keeps.length) {
                const defKeeps = allKeeps;
                storageService.postMany(KEEPS_KEY, defKeeps);
                return defKeeps;
            }
            return keeps;
        })
};

function save(keep) {
    if (keep.id) return storageService.put(KEEPS_KEY, keep)
    else {
        keep.id = utilService.makeId();
        return storageService.post(KEEPS_KEY, keep)
    };
};

function removeKeep(keepId) {
    return storageService.remove(KEEPS_KEY, keepId);
}