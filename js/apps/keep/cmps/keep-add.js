import { keepService } from "../services/keep-service.js"
import { utilService } from "../services/util-service.js"
// TODO: Maybe need to add id
export default {
    // props: ['keep'],
    template: `
    <div class="keep-add">
        <form @submit.prevent="save">
            <input ref="keepTxt" type="text" v-model="keep.info.txt" placeholder="Add a note..."/>
        </form>
     <ul>
         <button>Checklist</button>
         <button>Text</button>         
         <button>Photo</button>
         <button>Video</button>
         <button>Audio</button>
         <button>List</button>
     </ul>   
    <!-- <img :src = "keep.thumbnail"> -->
    <!-- <p>Title: {{keep.title}}</p> -->
    </div>
    `,
    data() {
        return {
            keep: {
                type: "NoteTxt",
                isPinned: false,
                info: {
                    txt: '',
                    id: 10
                }
            }

        }
    },
    computed: {

    },
    components: {},
    methods: {
        save() {
            //this.keep.info.id = utilService.makeId();
            keepService.save(this.keep)


            // TODO: show message success)



        }
    }
}