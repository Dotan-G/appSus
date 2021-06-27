import keepPreview from "./keep-preview.js"
export default {
    props: ['keeps'],
    template: `
    <ul class="keep-list">
        <li v-for="keep in keeps" :key="keep.id">
            <div class ="keep-preview-container">
                <button class="delete-btn" @click.stop="remove(keep.id)">x</button>
                <keep-preview @click.native="getEditableKeep(keep)":keep="keep" :editableKeep="editableKeep" @editKeep="emitEditKeep" @todoEditedKeepToList="emitEditedTodoToKeep"/>
            </div>
        </li> 
        
    </ul> 
    `,
    data() {
        return {
            editableKeep: null
        }
    },
    methods: {
        remove(keepId) {
            this.$emit('removeKeep', keepId);
        },
        emitEditKeep(keepId) {
            this.$emit('emitEditKeepApp', keepId)
        },
        emitEditedTodoToKeep(keep) {
            this.$emit('todoEditedKeepToKeepApp', keep);
        },
        getEditableKeep(keep) {
            this.editableKeep = keep;
        }
    },
    components: {
        keepPreview
    },
}