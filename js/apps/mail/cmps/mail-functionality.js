import { mailsService } from "../services/mail-service.js"

export default {
    props: ['mails'],
    template: `
        <div class="mail-boxes" v-if="mails">
            <button class="mail-compose-btn flex-center" @click="sentMail"><div>+</div><div>Compose</div></button>
            <button class="mail-inbox-btn" @click="enterInbox" >
                <div class="mail-inbox-sym"></div>
                <div class="mail-inbox-innerText">Inbox</div>
                <div class="mail-inbox-amount">{{mails.length}}</div>
            </button>
            <!-- <button class="mail-starred-btn" >Starred</button>
            <button class="mail-sent-btn">Sent</button>
            <button class="mail-drafts-btn">Drafts</button> -->
        </div>
    `,
    data() {
        return {

        }
    },
    methods: {
        sentMail() {
            this.$emit('compose')
        },
        enterInbox() {
            this.$emit('inbox')
        },
    },
    computed: {

    },
    created() {

    },
    destroyed() { }
}
