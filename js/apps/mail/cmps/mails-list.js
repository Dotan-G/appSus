import mailFilter from "../cmps/mail-filter.js"
import mailsPreview from "./mails-preview.js"

export default {
    components: {
        mailsPreview,
        mailFilter
    },
    props: ['mails'],
    template: `
    <section class="mails-list">
        <div class="mail-filter">
            <mail-filter @filter="setFilter" @sort="setSort" @show="setShow" />
        </div>
        <div >
            <ul>
                <li v-for="mail in mails">
                    <mails-preview :mail="mail" @openMail="openMail" @remove="remove" />          
                </li>
            </ul>
        </div>
    </section>
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
        },
        setFilter(filterBy) {
            this.$emit('filterBy', filterBy)
        },
        setSort(sortBy) {
            this.$emit('sortBy', sortBy)
        },
        setShow(showBy) {
            this.$emit('showBy', showBy)
        },
    },
    computed: {},
    created() { },
    destroyed() { }
}