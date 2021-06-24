export default {
    template: `
        <div class="mail-boxes">
            <button class="mail-compose-btn">+ Compose</button>
            <button class="mail-inbox-btn">Inbox</button>
            <button class="mail-starred-btn">Starred</button>
            <button class="mail-sent-btn">Sent</button>
            <button class="mail-drafts-btn">Drafts</button>
        </div>
    `,
    data() {
        return {
            // compose: false,
        }
    },
    methods: {
        // sentMail() {
        //     this.compose = true
        //     this.$emit('compose', this.compose)
        // }
    },
    computed: {},
    created() { },
    destroyed() { }
}