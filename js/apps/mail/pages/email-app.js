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
            <h2>Email App</h2>
            <div class="mails-body">
                <mail-func />
                <div class="mails">
                    <mails-list :mails="mails" />
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            mails: null
        }
    },
    methods: {},
    computed: {},
    created() {
        mailsService.query()
            .then(mails => this.mails = mails)
    },
    destroyed() { }
}