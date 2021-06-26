import keepList from "../cmps/keep-list.js";
import keepAdd from "../cmps/keep-add.js";
import { keepService } from "../services/keep-service.js";
export default {
    template: `
        <div class="keep-app keep-container">
            <keep-add @addKeep="addKeep" @editKeep="editKeep" :editableKeepId="editableKeepId" :keep="keepToEdit" :delTask="delTask"></keep-add>
            <keep-list :keeps="keeps" @removeKeep="removeKeep" @emitEditKeepApp="setKeep" @todoEditedKeepToKeepApp="editKeep"></keep-list>
        </div>
    `,
    data() {
        return {
            keepToEdit: null,
            keeps: null,
            editableKeepId: null,
            delTask: null
        }
    },
    components: {
        keepList,
        keepAdd
    },
    methods: {
        setDelTask(task) {
            this.delTask = task;
        },
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
            if (editedKeep.type === 'NoteTodos' && !editedKeep.info.todos.length) {
                console.log(editedKeep.id + 'Erasing')
                this.removeKeep(editedKeep.id);

            } else this.saveKeep(editedKeep);
        },

        addKeep(newKeep) {
            this.saveKeep(newKeep);
        },

        saveKeep(keep) {

            console.log(keep);
            keepService.save(keep)
                .then(() => {

                    console.log('success adding or modifing keep');
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