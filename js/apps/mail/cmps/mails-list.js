import mailsPreview from "./mails-preview.js"

export default {
    components: {
        mailsPreview,
    },
    props: ['mails'],
    template: `
    <div class="mails-list">
        <ul>
            <li v-for="mail in mails">
                <mails-preview :mail="mail" @openMail="openMail" @remove="remove" />          
            </li>
        </ul>
    </div>
    `,
    data() {
        return {}
    },
    methods: {
        openMail(mailId) {
            this.$emit('openMail', mailId)
        },
        remove(mailId) {
            this.$emit('remove', mailId)
        }
    },
    computed: {},
    created() { },
    destroyed() { }
}