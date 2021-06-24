import keepList from "../cmps/keep-list.js";
import keepAdd from "../cmps/keep-add.js";
import { keepService } from "../services/keep-service.js";
export default {
    template: `
        <div class="keep-app keep-container">
            <keep-add @addKeep="addKeep"></keep-add>
            <keep-list :keeps="keeps" @removeKeep="removeKeep" @emitEditKeepKeepApp="toEditableKeep"></keep-list>
        </div>
    `,
    data() {
        return {
            keeps: null,
            editableid: null
        }
    },
    components: {
        keepList,
        keepAdd
    },
    methods: {
        toEditableKeep(keepId) {
            this.editableKeepId = keepId;
            console.log('this editablekeepid ', this.editableKeepId);
            // continue edit keep
        },
        removeKeep(keepId) {
            console.log('received emmiting with id:', keepId);
            keepService.removeKeep(keepId)
                .then(() => this.loadKeeps());

        },
        loadKeeps() {
            console.log('loading')
            keepService.query()
                .then(keeps => this.keeps = keeps.reverse())
        },
        addKeep(keep) {
            console.log('addKeep');
            keepService.save(keep)
                .then(() => {
                    //this.keep = keep;
                    console.log('success adding keep');
                    this.loadKeeps();
                    // TODO: later we can add a message to user.
                })
                .catch(err => {
                    const msg = {
                        txt: err,
                        type: 'fail',
                    };
                    console.log(msg.type, msg.txt);
                    z
                })
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