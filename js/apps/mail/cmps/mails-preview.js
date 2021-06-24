import { mailsService } from "../services/mail-service.js"


export default {
    props: ['mail'],
    template: `
        <section class="mail-details"  :key="mail.id">
            <div class="mail-checkbox flex-center">
                <input type="checkbox">
            </div>
            <div class="mail-star flex-center">
                <input type="checkbox">
                <p>☆</p>
            </div>
            <div class="mail-content-list" @click="openMail">
                <p class="mail-name" :class="{'is-not-read': !mail.isRead }">{{mail.name}}</p>
                <p class="mail-subject-and-body" :class="read()">{{mail.subject}}</p>
                <p class="mail-time" :class="read">{{mail.realTime}}</p>
            </div>
            <div class="mail-delete flex-center">
                <p class="mail-delete" @click="remove">🗑</p>
            </div>
        </section>
    `,
    data() {
        return {

        }
    },
    methods: {
        openMail() {
            this.mail.isRead = true
            mailsService.updateMail(this.mail)
            this.$emit('openMail', this.mail.id)
        },
        read() {
            return (!this.mail.isRead) ? 'is-not-read' : ''
        },
        mark() {
            console.log('mark?')
            const checkbox = this.$refs.checkbox
            checkbox.innerText = '☒'
        },
        remove() {
            this.$emit('remove', this.mail.id)
        }
    },
    computed: {

    },
    created() {

    },
    destroyed() { }
}