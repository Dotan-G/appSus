import { mailsService } from "../services/mail-service.js"
import mailsList from "../cmps/mails-list.js"
import mailFunc from "../cmps/mail-functionality.js"
import mailSend from "../cmps/mail-send.js"
import mailDetails from "../cmps/mail-details.js"

export default {
    components: {
        mailsList,
        mailFunc,
        mailSend,
        mailDetails,
    },
    template: `
        <div v-if="mails" class="email-app">
            <div class="mails-container">
                <mail-func @compose="compose" />
                <mails-list v-if="!isCompose && !isDetails" :mails="mailsToShow" @filterBy="setFilter" @openMail="details" @remove="remove" />
                <mail-send  v-if="isCompose" @sentMail="sentMail" />
                <mail-details v-if="isDetails" :mail="mail" @detailsClose="details" />
            </div>
        </div>
    `,
    data() {
        return {
            mails: null,
            filterBy: null,
            isCompose: false,
            isDetails: false,
            mail: null
        }
    },
    methods: {
        loadMails() {
            mailsService.query()
                .then(mails => this.mails = mails)
        },
        compose() {
            this.isCompose = !this.isCompose
        },
        details(mailId) {
            if (!mailId) return this.isDetails = !this.isDetails
            this.isDetails = !this.isDetails
            mailsService.getMailById(mailId)
                .then((mail) => this.mail = mail)
        },
        sentMail(mail) {
            this.compose()
            mailsService.addMail(mail)
                .then(() => {
                    console.log('why?')
                    this.loadMails()
                })
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        },
        remove(mailId) {
            mailsService.removeMail(mailId)
                .then(() => {
                    this.loadMails()
                })
        }
    },
    computed: {
        mailsToShow() {
            if (!this.filterBy) return this.mails
            // console.log('this.filterBy.by', this.filterBy.by)
            const searchStr = this.filterBy.subject.toLowerCase()
            const mailsToShow = this.mails.filter((mail) => {
                return (
                    mail.subject.toLowerCase().includes(searchStr)
                );
            })
            return mailsToShow
        }
    },
    created() {
        this.loadMails()
    },
    destroyed() { }
}