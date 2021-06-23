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
                <mails-preview :mail="mail"/>          
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