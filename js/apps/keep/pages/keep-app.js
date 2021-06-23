import keepList from "../cmps/keep-list.js";
import keepAdd from "../cmps/keep-add.js";
import { keepService } from "../services/keep-service.js";
export default {
    template: `
        <div class="keep-app keep-container">
            <keep-add @reloadList="loadKeeps"></keep-add>
            <keep-list :keeps="keeps"></keep-list>
        </div>
    `,
    data() {
        return {
            keeps: []
        }
    },
    components: {
        keepList,
        keepAdd
    },
    methods: {
        loadKeeps() {
            console.log('loading')
            keepService.query()
                .then(keeps => this.keeps = keeps.reverse())
        }
    },
    computed: {
        keepsToShow() {
            // TODO: add filter 
            return this.keeps
        }
    },
    created() {
        this.loadKeeps();
    },
    destroyed() {}
}