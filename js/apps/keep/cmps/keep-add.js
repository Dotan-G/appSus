//import { eventBus } from "../../../services/event-bus-service.js"
import { keepService } from "../services/keep-service.js"
import { utilService } from "../services/util-service.js"
// TODO: Maybe need to add id
export default {
    // props: ['keep'],
    template: `
    <div class="keep-add">
    <!-- TODO: fix return bug -->
        <!-- <form @submit.prevent="save"> -->
        <form>
            <input @change="save" ref="keepTxt" type="text" v-model="keep.info.txt" placeholder="Add a note..." class="add-bar">
        </form>

     <ul class="add-format-btn">
         <button>Checklist</button>
         <button>Text</button>         
         <button>Photo</button>
         <button>Video</button>
         <button>Audio</button>
         <button>List</button>
     </ul>   
  
    </div>
    `,
    data() {
        return {
            keep: {
                type: "NoteTxt",
                isPinned: false,
                info: {
                    txt: '',
                    id: null
                }
            }

        }
    },
    computed: {

    },
    components: {},
    methods: {
        save() {

            console.log('emitting')
            this.$emit('addKeep', this.keep);
            this.keep = {
                    type: "NoteTxt",
                    isPinned: false,
                    info: {
                        txt: '',
                        id: null
                    }
                }
                // TODO: add event to keep-app that will call load()


            // TODO: show message success)



        },

    }
}