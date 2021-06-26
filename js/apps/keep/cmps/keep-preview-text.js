export default {
    props: ['keep'],
    template: `
    <div v-if="keep" class="keep-preview-text">
        <!-- <p>{{txt}}</p> -->
    <p contenteditable="true">{{keep.info.txt}}</p>
    <button>Edit</button> -->
    <div v-bind:class="modalDisplay" hidden>
        <textarea contenteditable="true" v-model="txt" >Hello I am a modal</textarea>
    </div>
    </div>

    `,
    data() {
        return {
            txt: 'lkjlkjljl',
            keepTxt: {
                id: this.keep.id,
                type: "NoteTxt",
                isPinned: false,
                info: {
                    todos: [
                        { txt: '', doneAt: null }
                    ]
                }
            }
        }
    },
    computed: {
        modalDisplay() {
            return { modalVisible: this.modalIsHidden }
        },

        modalIsHidden() {
            return false;
        }


    },
    methods: {

    },
    components: {},

}