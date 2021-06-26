export default {
    template: `
        <header class="app-header">
            <div class="logo">
                <h1>App Sus</h1>
            </div>
            <div class="main-hamburger-menu" @click="openModal">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
            <nav :class="{'nav-close': !this.nav, 'app-navigation': this.nav}">
                <router-link class="header-link" to="/mail">Mister mail</router-link>
                <router-link class="header-link" to="/keep">Miss keep</router-link>
                <router-link class="header-link" to="/book">Miss book</router-link>
            </nav>
        </header>
    `,
    data() {
        return {
            nav: false
        }
    },
    methods: {
        openModal() {
            this.nav = !this.nav
        },
    },
    computed: {

    },
    created() { },
    destroyed() { }
}