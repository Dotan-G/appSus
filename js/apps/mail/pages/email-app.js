import { mailsService } from "../services/mail-service.js"
import mailsList from "../cmps/mails-list.js"
import mailFunc from "../cmps/mail-functionality.js"

export default {
    components: {
        mailsList,
        mailFunc,
    },
    template: `
        <div v-if="mails" class="email-app">
            <div class="mails-container">
                <mail-func />
                <mails-list :mails="mails" />
            </div>
        </div>
    `,
    data() {
        return {
            mails: null
        }
    },
    methods: {
        loadMails() {
            mailsService.query()
                .then(mails => this.mails = mails)
        },
    },
    computed: {},
    created() {
        this.loadMails()
    },
    destroyed() { }
}