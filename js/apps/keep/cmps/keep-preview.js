import keepPreviewText from "./keep-preview-text.js"
import keepPreviewImg from "./keep-preview-img.js"
import keepPreviewTodos from "./keep-preview-todos.js"
import { eventBus } from "../../../services/event-bus-service.js"
export default {
    props: ['keep'],
    template: `
    <div class="keep-preview-container keep-gallery" @click="emitEditKeep(keep.id)">
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
    },
    methods: {
        emitEditKeep(keepId) {
            //   eventBus.$on('sendEditKeepId', keepId);
            console.log('entering emitEditKeep with id:', keepId);
            this.$emit('editKeep', keepId);



        }
    },
    // destroyed() {
    //     eventBus.$off('sendEditKeepId', keepId);
    // }
}