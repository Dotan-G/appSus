import { storageService } from "../../../services/async-storage-service.js"
import { allMails } from "./mails.js";

const MAILS_KEY = 'mailsDB'

export const mailsService = {
    query,
    getMailById,
    removeMail,
    addMail,

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

function addMail(MAILS_KEY, mail) {
    storageService.post(MAILS_KEY, mail)
}

function removeMail(MAILS_KEY, mailId) {
    storageService.remove(MAILS_KEY, mailId)
}

function getMailById(mailId) {
    return storageService.get(MAILS_KEY, mailId)
}