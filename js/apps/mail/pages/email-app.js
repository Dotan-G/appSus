import { mailsService } from "../services/mail-service.js"
import mailsList from "../cmps/mails-list.js"
import mailFunc from "../cmps/mail-functionality.js"
import mailFilter from "../cmps/mail-filter.js"

export default {
    components: {
        mailsList,
        mailFunc,
        mailFilter,
    },
    template: `
        <div v-if="mails" class="email-app">
                <mail-filter @filter="setFilter" />
            <div class="mails-container">
                <mail-func />
                <mails-list :mails="mailsToShow" />
            </div>
        </div>
    `,
    data() {
        return {
            mails: null,
            filterBy: null
        }
    },
    methods: {
        loadMails() {
            mailsService.query()
                .then(mails => this.mails = mails)
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
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