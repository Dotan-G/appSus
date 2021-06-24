export default {
    template: `
        <section class="mail-filter flex-center">
            <input placeholder="search..." 
            type="text" 
            v-model="filterBy.subject" 
            @input="filter">
            <select class="filterBy">
                <option value="NAME">Name</option>
                <option value="SUBJECT" selected>Subject</option>
            </select>
            <select class="sortBy">
                <option value="OLD">Oldest</option>
                <option value="NEW" selected>Newest</option>
            </select>
        </section>
    `,
    data() {
        return {
            filterBy: {
                subject: '',
                // by: null v-model="filterBy.by"
            }
        }
    },
    methods: {
        filter() {
            this.$emit('filter', { ...this.filterBy })
        }
    },
    computed: {},
    created() { },
    destroyed() { }
}