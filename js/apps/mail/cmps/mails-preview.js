

export default {
    props: ['mail'],
    template: `
        <section class="mail-details" @click="openMail" :key="mail.id">
            <p class="mail-name" :class="read">{{mail.name}}</p>
            <p class="mail-subject-and-body" :class="read">{{mail.subject}}</p>
            <p class="mail-time" :class="read">{{mail.realTime}}</p>
        </section>
    `,
    data() {
        return {}
    },
    methods: {
        openMail() {
            this.mail.isRead = true
        },
        read() {
            return (!this.mail.isRead) ? { 'is-not-read': true } : ''
        },
    },
    computed: {

    },
    created() {

    },
    destroyed() { }
}