import keepPreview from "./keep-preview.js"
export default {
    props: ['keeps'],
    template: `
    <ul class="keep-list">
        <li v-for="keep in keeps" :key="keep.id">
            <keep-preview :keep="keep"/>
            <button @click.prevent="remove(keep.id)">D</button>
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
        }
    }
}