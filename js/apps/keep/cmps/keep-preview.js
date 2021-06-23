import keepPreviewText from "./keep-preview-text.js"
import keepPreviewImg from "./keep-preview-img.js"
import keepPreviewTodos from "./keep-preview-todos.js"
export default {
    props: ['keep'],
    template: `
    <div class="keep-preview">
    <keep-preview-text v-if="keep.type=== 'NoteTxt'" :keep="keep"/>
    <keep-preview-img v-if="keep.type=== 'NoteImg'" :keep="keep"/>
    <keep-preview-todos v-if="keep.type=== 'NoteTodos'" :keep="keep"/>

    
    <!-- TODO: -->
    <!-- Change to dynamic view/class -->

    </div>
    `,
    computed: {

    },
    components: {
        keepPreviewText,
        keepPreviewImg,
        keepPreviewTodos
    }
}