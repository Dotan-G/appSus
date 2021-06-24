export default {
    template: `
        <section class="sent-mail">
            <form @submit.prevent>
                <p>To</p>
                <input type="email">
                <p>Copy</p>
                <input type="email">
                <p>Subject</p>
                <input type="text" v-model="mail.subject">
                <input type="text" v-model="mail.body" class="mail-body">
                <button @click="send">Sent</button>
            </form>
        </section>
    `,
    data() {
        return {
            mail: {
                name: 'AppSus',
                subject: '',
                body: '',
                isRead: false,
                realTime: null,
                sentAt: null
            },
        }
    },
    methods: {
        send() {
            this.mail.realTime = new Date().toLocaleTimeString()
            this.mail.sentAt = Date.now()
            this.$emit('sentMail', this.mail)
            this.mail = {
                name: "appSus",
                subject: '',
                body: '',
                isRead: false,
                realTime: null,
                sentAt: null
            }
        }
    },
    computed: {},
    created() { },
    destroyed() { }
}