import { storageService } from "../../../services/async-storage-service.js"
import { allMails } from "./mails.js";

const MAILS_KEY = 'mailsDB'

export const mailsService = {
    query,
    getMailById,
    removeMail,
    addMail,
    updateMail,
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

function addMail(mail) {
    return storageService.post(MAILS_KEY, mail)
}

function removeMail(mailId) {
    return storageService.remove(MAILS_KEY, mailId)
}

function getMailById(mailId) {
    return storageService.get(MAILS_KEY, mailId)
}

function updateMail(mail) {
    return storageService.put(MAILS_KEY, mail)
}
