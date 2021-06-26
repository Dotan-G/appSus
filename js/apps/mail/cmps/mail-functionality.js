import { mailsService } from "../services/mail-service.js"

export default {
    template: `
        <div class="mail-boxes" v-if="mails">
            <button class="mail-compose-btn" @click="sentMail">+ Compose</button>
            <button class="mail-inbox-btn" @click="enterInbox">Inbox {{mails.length}}</button>
            <button class="mail-starred-btn" >Starred</button>
            <button class="mail-sent-btn">Sent</button>
            <button class="mail-drafts-btn">Drafts</button>
        </div>
    `,
    data() {
        return {
            mails: null
        }
    },
    methods: {
        sentMail() {
            this.$emit('compose')
        },
        enterInbox() {
            this.$emit('inbox')
        },
        mailsUnread() {
            return mailsService.query()
                .then((mails) => {
                    var mailsRead = mails.filter(mail => !mail.isRead)
                    this.mails = mailsRead
                })
        }
    },
    computed: {
    },
    created() {
        this.mailsUnread()
    },
    destroyed() { }
}
// @click="enterStarred"
// enterStarred() {
//     this.$emit('starred')
// }