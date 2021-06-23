import keepPreview from "./keep-preview.js"
export default {
    props: ['keeps'],
    template: `
    <ul class="keep-list">
        <li v-for="keep in keeps" :key="keep.id">
            <keep-preview :keep="keep"/>
        
        </li> 
        
    </ul> 
    `,
    components: {
        keepPreview
    }

}