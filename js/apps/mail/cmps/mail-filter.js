export default {
    template: `
        <section>
            <input placeholder="search..." 
            type="text" 
            v-model="filterBy.subject" 
            @input="filter">
            <select>
                <option value="NAME">Name</option>
                <option value="SUBJECT" selected>Subject</option>
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