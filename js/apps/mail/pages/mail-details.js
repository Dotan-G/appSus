import { mailsService } from "../services/mail-service.js"

export default {
    template: `
        <section v-if="mail">
            <h2>{{mail.subject}}</h2>
            <div class="user-details">
                <h5>{{mail.name}}</h5>
                <p>{{beforeXHours}} hours</p>
            </div>
        </section>
    `,
    data() {
        return {
            mail: null,
            sentAt: this.beforeXHours
        }
    },
    methods: {},
    computed: {
        beforeXHours() {
            return this.sentAt = Math.round((Date.now() - this.mail.sentAt) / 1000 / 60 / 60 / 24)
        }
    },
    created() {
        const { mailId } = this.$route.params
        mailsService.getMailById(mailId)
            .then(mail => this.mail = mail)
    },
    destroyed() { }
}