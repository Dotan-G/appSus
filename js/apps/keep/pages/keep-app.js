import keepList from "../cmps/keep-list.js";
export default {
    template: `
        <div class="keep-app">
            <h2>keep App</h2>
            <p>make a new note bar with input field on it more buttons to the note types</p>
            <keep-list></keep-list>
            <!-- keep-list -->
        </div>
    `,
    data() {
        return {}
    },
    components: {
        keepList
    },
    methods: {},
    computed: {},
    created() {},
    destroyed() {}
}