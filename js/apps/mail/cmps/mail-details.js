import { mailsService } from "../services/mail-service.js"

export default {
    props: ['mail'],
    template: `
        <section class="mail-content" v-if="mail">
            <h2>{{mail.subject}}</h2>
            <div class="user-details">
                <h5>{{mail.name}}</h5>
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
        }
    },
    methods: {
        close() {
            this.$emit('detailsClose')
        }
    },
    computed: {
        beforeXHours() {
            return Math.round((Date.now() - this.mail.sentAt) / 1000 / 60 / 60 / 24)
        }
    },
    created() {

    },
    destroyed() { }
}