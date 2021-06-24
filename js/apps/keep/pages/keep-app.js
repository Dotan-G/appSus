import keepList from "../cmps/keep-list.js";
import keepAdd from "../cmps/keep-add.js";
import { keepService } from "../services/keep-service.js";
export default {
    template: `
        <div class="keep-app keep-container">
            <keep-add @addKeep="addKeep" @editKeep="editKeep" :editableKeepId="editableKeepId" :keep="keepToEdit"></keep-add>
            <!-- <keep-add @addKeep="addKeep" :editableKeepId="editableKeepId" :keep="keepToEdit"></keep-add> -->

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
        // sends keep from storage to 'keepToEdit' to addKeep component
        setKeep(keepId) {
            keepService.getKeepById(keepId)
                .then(keep => {
                    this.keepToEdit = keep
                    console.log(this.keepToEdit);
                })
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

        // adds or edit keep in storage and loads it back to render

        editKeep(editedKeep) {
            this.saveKeep(editedKeep);
        },

        addKeep(newKeep) {
            this.saveKeep(newKeep);
        },

        saveKeep(keep) {

            // if there is an id here in keep-app - send it for edit functionality. Otherwise send it with null id to save as new
            // if (this.editableKeepId) keep.id = this.editableKeepId;

            console.log(keep);

            keepService.save(keep)
                .then(() => {

                    console.log('success adding keep');
                    // this.editableKeepId = null;
                    this.keepToEdit = null;
                    this.loadKeeps();

                })
                .catch(err => {
                    const msg = {
                        txt: err,
                        type: 'fail',
                    };
                    console.log(msg.type, msg.txt);

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
    destroyed() {}
}