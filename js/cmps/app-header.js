export default {
    template: `
        <header class="app-header">
            <div class="logo">
                <h1>App Sus</h1>
            </div>
            <nav>
                <router-link to="/mail" active-class="active-link" exact>Mister mail</router-link>|
                <router-link to="/keep" active-class="active-link" exact>Miss keep</router-link>|
                <router-link to="/book" active-class="active-link" exact>Miss book</router-link>
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