import keepList from "../cmps/keep-list.js";
import keepAdd from "../cmps/keep-add.js";
import { keepService } from "../services/keep-service.js";
export default {
    template: `
        <div class="keep-app keep-container">
            <keep-add @addKeep="addKeep" :editableKeepId="editableKeepId" :keep="keepToEdit"></keep-add>
            <!-- <keep-list :keeps="keeps" @removeKeep="removeKeep" @emitEditKeepApp="toEditableKeep"></keep-list> -->
            <keep-list :keeps="keeps" @removeKeep="removeKeep" @emitEditKeepApp="setKeep"></keep-list>
        </div>
    `,
    data() {
        return {
            keepToEdit: null,
            keeps: null,
            editableKeepId: null
        }
    },
    components: {
        keepList,
        keepAdd
    },
    methods: {
        setKeep(keepId) {
            keepService.getKeepById(keepId)
                .then(keep => this.keepToEdit = keep);
        },
        toEditableKeep(keepId) {
            this.editableKeepId = keepId;
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
                    console.log('success adding keep');
                    this.editableKeepId = null;
                    this.loadKeeps();

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
            return this.keeps
        }
    },
    created() {
        this.loadKeeps();
    },
    destroyed() { }
}