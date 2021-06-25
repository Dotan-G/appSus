import { mailsService } from "../services/mail-service.js"

export default {
    template: `
        <section class="mail-filter flex-center">
            <input placeholder="search..." 
            type="text" 
            v-model="search.searchText" 
            @input="filter">
            <select class="filterBy" v-model="search.filterBy">
                <option value="NAME">Name</option>
                <option value="SUBJECT" selected>Subject</option>
            </select>
            <select class="sortBy" @change="sort" v-model="sortBy">
                <option value="OLD">Oldest</option>
                <option value="NEW" selected>Newest</option>
            </select>
            <select class="showBy" @change="show" v-model="showBy">
                <option value="ALL" selected>All</option>
                <option value="READ">Read</option>
                <option value="UNREAD" >Unread</option>
            </select>
        </section>
    `,
    data() {
        return {
            search: {
                searchText: null,
                filterBy: 'SUBJECT',
            },
            sortBy: 'NEW',
            showBy: 'ALL'
        }
    },
    methods: {
        filter() {
            this.$emit('filter', { ...this.search })
        },
        sort() {
            this.$emit('sort', this.sortBy)
        },
        show() {
            mailsService.showMails(this.showBy)
            // this.$emit('show', this.showBy)
        }
    },
    computed: {},
    created() { },
    destroyed() { }
}