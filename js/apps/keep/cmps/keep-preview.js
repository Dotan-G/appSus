import keepPreviewText from "./keep-preview-text.js"
import keepPreviewImg from "./keep-preview-img.js"
import keepPreviewTodos from "./keep-preview-todos.js"
export default {
    props: ['keep', 'editableKeep'],
    template: `
    <!-- <div class="keep-preview-container keep-gallery" @click="emitEditKeep(keep.id)"> -->
    <div class="keep-preview-container keep-gallery">
    <keep-preview-text v-if="keep.type=== 'NoteTxt'" :keep="keep" :editableKeep="editableKeep"/>
    <keep-preview-img v-if="keep.type=== 'NoteImg'" :keep="keep" :editableKeep="editableKeep"/>
    <keep-preview-todos v-if="keep.type=== 'NoteTodos'" @todoKeepToPreview="emitEditedKeep" :keep="keep" :editableKeep="editableKeep"/>

    
    </div>
    `,
    computed: {

    },
    components: {
        keepPreviewText,
        keepPreviewImg,
        keepPreviewTodos
    },
    methods: {
        emitEditKeep(keepId) {
            this.$emit('editKeep', keepId);

        },
        emitEditedKeep(keep) {
            this.$emit('todoEditedKeepToList', keep);
        }


    },

}