export default {
    props: ['keep'],
    template: `
    <div v-if="keep" class="keep-preview-text">
        <p>text note:</p>
    <p contenteditable="true">{{keep.info.txt}}</p>
    <button>Edit</button>


    </div>
    `,
    data() {
        return {
            CurrKeep: null
        }
    },
    computed: {


    },
    components: {}
}