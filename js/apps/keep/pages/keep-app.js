import keepList from "../cmps/keep-list.js";
import keepAdd from "../cmps/keep-add.js";
import { keepService } from "../services/keep-service.js";
export default {
    template: `
        <div class="keep-app keep-container">
            <keep-add @addKeep="addKeep" :editableKeepId="editableKeepId"></keep-add>
            <keep-list :keeps="keeps" @removeKeep="removeKeep" @emitEditKeepKeepApp="toEditableKeep"></keep-list>
        </div>
    `,
    data() {
        return {
            keeps: null,
            editableKeepId: null
        }
    },
    components: {
        keepList,
        keepAdd
    },
    methods: {
        toEditableKeep(keepId) {
            this.editableKeepId = keepId;
            // continue edit keep
        },
        removeKeep(keepId) {
            keepService.removeKeep(keepId)
                .then(() => this.loadKeeps());

        },
        loadKeeps() {
            keepService.query()
                .then(keeps => this.keeps = keeps.reverse())
        },
        addKeep(keep) {
            console.log('addKeep');
            console.log('editableKeepId', this.editableKeepId);
            if (this.editableKeepId) keep.id = this.editableKeepId;
            console.log('keep.id', keep.id);
            keepService.save(keep)
                .then(() => {
                    //this.keep = keep;
                    console.log('success adding keep');
                    this.editableKeepId = null;
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