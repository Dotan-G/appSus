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
            <router-link :to="'/mail/'+mail.id">
                <mails-preview :mail="mail"/>          
            </router-link>
            </li>
        </ul>
    </div>
    `,
    data() {
        return {}
    },
    methods: {},
    computed: {},
    created() { },
    destroyed() { }
}