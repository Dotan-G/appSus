import { storageService } from "../../../services/async-storage-service.js"
import { allMails } from "./mails.js";

const MAILS_KEY = 'mailsDB'

export const mailsService = {
    query,
}

function query() {
    return storageService.query(MAILS_KEY)
        .then(mails => {
            if (!mails.length) {
                const mails = allMails
                storageService.postMany(MAILS_KEY, mails)
                return mails
            }
            return mails
        })
}