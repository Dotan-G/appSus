import keepList from "../cmps/keep-list.js";
import keepAdd from "../cmps/keep-add.js";
import { keepService } from "../services/keep-service.js";
export default {
    template: `
        <div class="keep-app keep-container">
            <keep-add></keep-add>
            <keep-list :keeps="keepsToShow"></keep-list>
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
            keepService.query()
                .then(keeps => this.keeps = keeps)
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