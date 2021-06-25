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
                <textarea type="text" v-model="mail.body" class="mail-body"></textarea>
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
                realTime: null,
                sentAt: null,
                isRead: false,
                isStarred: false
            },
        }
    },
    methods: {
        send() {
            this.mail.realTime = `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
                this.mail.sentAt = Date.now()
            this.$emit('sentMail', this.mail)
            this.mail = {
                name: "appSus",
                subject: '',
                body: '',
                realTime: null,
                sentAt: null,
                isRead: false,
                isStarred: false
            }
        }
    },
    computed: {},
    created() { },
    destroyed() { }
}