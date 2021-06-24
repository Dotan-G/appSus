import keepPreview from "./keep-preview.js"
export default {
    props: ['keeps'],
    template: `
    <ul class="keep-list">
        <li v-for="keep in keeps" :key="keep.id">
            <keep-preview :keep="keep" @editKeep="emitEditKeep"/>
            <button @click.stop="remove(keep.id)">D</button>
        </li> 
        
    </ul> 
    `,
    components: {
        keepPreview
    },
    methods: {
        remove(keepId) {
            console.log(`Emitting keep ${keepId}`);
            this.$emit('removeKeep', keepId);
        },
        emitEditKeep(keepId) {
            this.$emit('emitEditKeepApp', keepId)
        }
    }
}