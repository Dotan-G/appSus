import { mailsService } from "../services/mail-service.js"
import { eventBus } from "../services/event-bus-service.js"

export default {
    template: `
        <section class="mail-content" v-if="mail">
            <h2>{{mail.subject}}</h2>
            <div class="user-details">
                <h5>{{mail.name}} </h5>
                <h5><{{mail.name}}@wallaqme.com></h5>
                <p>{{beforeXHours}} hours</p>
            </div>
            <div class="mail-body-content">
                <p>{{mail.body}}</p>
            </div>
            <button @click="close">X</button>
        </section>
    `,
    data() {
        return {
            // sentAt: this.beforeXHours
            mail: null,
        }
    },
    methods: {
        close() {
            this.$router.push('/mail')
            eventBus.$emit('close')
        },
    },
    computed: {
        beforeXHours() {
            return Math.round((Date.now() - this.mail.sentAt) / 1000 / 60 / 60 / 24)
        }
    },
    created() {
        const { mailId } = this.$route.params
        mailsService.getMailById(mailId)
            .then(mail => this.mail = mail)
    },
    destroyed() { }
}