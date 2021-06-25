import { mailsService } from "../services/mail-service.js"


export default {
    props: ['mail'],
    template: `
        <section class="mail-details"  :key="mail.id">
            <div class="mail-checkbox flex-center">
                <input type="checkbox">
            </div>
            <div class="mail-star flex-center" @click="starClick">
                <input type="checkbox">
                <p ref="elParag" @click="starred">☆</p>
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
            isMarked: null,
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
        },
        remove() {
            this.$emit('remove', this.mail.id)
        },
        starClick() {
            this.mail.isStarred = !this.mail.isStarred
            mailsService.updateMail(this.mail)
            this.starred()
        },
        starred() {
            const star = this.$refs.elParag
            star.innerText = (this.mail.isStarred) ? '★' : '☆';
        },
    },
    computed: {

    },
    created() { },
    destroyed() { },
    mounted() {
        isStarred: this.starred()
    }
}