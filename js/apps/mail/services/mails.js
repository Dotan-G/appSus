import { utilService } from "../../keep/services/util-service.js"
export const allMails = [{
        name: 'Dotan',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        realTime: new Date().toLocaleTimeString(),
        sentAt: 1551133930594,
        id: utilService.makeId()
    },
    {
        name: 'Uri',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        realTime: new Date().toLocaleTimeString(),
        sentAt: 1551133930594,
        id: utilService.makeId()

    },
]