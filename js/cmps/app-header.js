export default {
    template: `
        <header class="app-header">
            <div class="logo">
                <h1>App Sus</h1>
            </div>
            <nav>
                <router-link class="header-link" to="/mail">Mister mail</router-link>|
                <router-link class="header-link" to="/keep">Miss keep</router-link>|
                <router-link class="header-link" to="/book">Miss book</router-link>
            </nav>
        </header>
    `,
    data() {
        return {}
    },
    methods: {},
    computed: {},
    created() { },
    destroyed() { }
}